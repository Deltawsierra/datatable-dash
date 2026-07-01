---
name: whop
description: Guidelines for using Whop to integrate commerce, payment plans, checkout, and subscription management
---

<<<<<<< HEAD
## Read the monetization skill first

Before using anything in this skill, read the `monetization` skill and follow its routing instructions. It is the single source of truth for choosing a payment provider on Replit. Only continue with this Whop skill once the monetization skill has confirmed that Whop is the right provider (either because the user explicitly named Whop, the project already has Whop wired up, or the routing question resolved to Whop).


IMPORTANT: You have everything you need. Do NOT ask the user for Whop Company ID, Plan ID, or API key — retrieve them yourself (Step 1 and Step 3 below). Use Whop's hosted checkout (redirect-based) for payments (Step 4). For access control, verify the user's Whop account and ask Whop whether that account has access; do not treat a redirect, email string, or client state as proof of purchase. Execute the steps directly — do not plan or re-read references before acting.

## Helper scripts — write these first

Write these two files to the project root using the sources in `./references/`. Run via `shell_exec` (NOT `code_execution` — `process.env` is unavailable there). The proxy injects `api_key` automatically — no credentials needed.

**whop-mcp.mjs** (source: `./references/whop-mcp.mjs`) — for MCP tools:
```bash
node whop-mcp.mjs --list-tools                              # discover available tools
=======
## Introduction

Replit offers a native integration with Whop that allows users to implement payment plans, checkout configurations, and subscription management in their applications.

## Prerequisites

1. The Whop integration must be connected to the repl. You can do this by proposing the integration. Reference the `integrations` skill if necessary.
    The connection is provisioned automatically — there is no user login or OAuth authorization step. Once connected, a Whop store (company) is created for the repl and credentials (company ID and API key) are managed automatically. Users can optionally log into Whop with their email to manage their store and receive payouts, but this is not required to use the integration.

2. Verify the connection is active by calling `listConnections('whop')` in the `code_execution` sandbox. The returned connection settings contain `company_id` (biz_xxx) and `api_key` (apik_xxx).

3. Immediately store `company_id` as a Replit Configuration named `WHOP_COMPANY_ID`. Server-side code reads it from `process.env.WHOP_COMPANY_ID`.

You are required to ensure these prerequisites are met before setting up or using Whop.

## How It Works

- **Agent interactions (preferred):** Call Whop MCP tools via the OpenInt connector proxy (e.g. create products, plans, list memberships). The proxy handles authentication and `company_id` injection automatically. Run via `shell_exec` (NOT `code_execution` — `process.env` is unavailable there). See "Calling Whop MCP Tools" below.
- **Server-side code:** Use `getWhopClient()` from `whopClient.ts` (see code-templates reference) to get a typed Whop SDK client. Credentials are fetched lazily from the Replit connection API. `company_id` (biz_xxx) is not secret — store it in a Replit Configuration and pass in request params or body as needed. `whopClient.ts` is server-only.
- **Frontend code:** Call your server routes (e.g. `/api/whop/products`). Never import `whopClient.ts` in client code.

### Calling Whop MCP Tools

Write `whop-mcp.mjs` once, then call it via `shell_exec`. Do NOT use `code_execution` — `process.env` is unavailable there.

Filename: whop-mcp.mjs (project root)

```js
const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
const token = process.env.REPL_IDENTITY ? "repl " + process.env.REPL_IDENTITY
  : process.env.WEB_REPL_RENEWAL ? "depl " + process.env.WEB_REPL_RENEWAL : null;

async function mcpCall(method, params = {}) {
  const resp = await fetch(`https://${hostname}/api/v2/proxy/mcp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      "X-Replit-Token": token,
      "Connector-Name": "whop",
    },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  const text = await resp.text();
  const lines = text.split('\n').filter(l => l.startsWith('data:'));
  const envelope = JSON.parse(lines.at(-1).replace(/^data:\s*/, ''));
  const result = envelope.result;
  const textContent = result?.content?.[0]?.text;
  return textContent ? JSON.parse(textContent) : result;
}

const [cmd, argsJson] = process.argv.slice(2);
if (cmd === "--list-tools") {
  const { tools } = await mcpCall("tools/list");
  tools.forEach(t => console.log(t.name + " — " + t.description));
} else if (cmd === "--schema") {
  const { tools } = await mcpCall("tools/list");
  const tool = tools.find(t => t.name === argsJson);
  console.log(tool ? JSON.stringify(tool.inputSchema, null, 2) : `Tool "${argsJson}" not found`);
} else if (cmd) {
  const result = await mcpCall("tools/call", {
    name: cmd,
    arguments: JSON.parse(argsJson || "{}"),
  });
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log("Usage: node whop-mcp.mjs --list-tools | --schema <tool> | <tool> '{...}'");
}
```

Usage via `shell_exec`:
```bash
node whop-mcp.mjs --list-tools                              # list available tools
>>>>>>> 5af7b45bff9783311500884b852e2b83f803caff
node whop-mcp.mjs --schema create_plan                      # check params before calling
node whop-mcp.mjs create_product '{"title":"Pro Access"}'   # call a tool
```

<<<<<<< HEAD
**whop-api.mjs** (source: `./references/whop-api.mjs`) — for REST API:
```bash
node whop-api.mjs POST /api/v1/plans '{"company_id":"biz_xxx","product_id":"prod_xxx","initial_price":9.99,"currency":"usd","billing_period":30}'
node whop-api.mjs POST /api/v1/checkout_configurations '{"plan_id":"plan_xxx","redirect_url":"https://myapp.repl.co/done"}'
node whop-api.mjs GET '/api/v1/payments?company_id=biz_xxx&first=10&order=created_at&direction=desc'
node whop-api.mjs GET '/api/v1/payments?company_id=biz_xxx&checkout_configuration_ids[]=ch_xxx'
```

Always run `--schema <tool>` before calling an unfamiliar MCP tool.

## Step 1: Connect and get credentials

1. Propose the Whop integration if not already connected (reference `integrations` skill).
   The connection is auto-provisioned — no user login or OAuth. A Whop store is created automatically.
2. Call `listConnections('whop')` in `code_execution` to get `company_id` (biz_xxx) and `api_key` (apik_xxx).
3. Store `company_id` as a Replit Configuration named `WHOP_COMPANY_ID`.

## Step 2: Write server code

Write **whopClient.ts** to the API server directory (source: `./references/whopClient.ts`). This provides `getWhopClient()` which lazily fetches credentials from the Replit connection API. Never import it in frontend code.

Install: `pnpm add @whop/sdk`

Use the app's existing server and auth patterns. Read `./references/code-templates.md` only if you need route shape or SDK method names; adapt it instead of copying it verbatim.

## Key facts and references

- **Whop plan = Stripe product/price.** When user says "create a product," they mean create a Whop plan.
- **Products** are just groupings — not directly purchasable.
- Prices are in **dollars** (9.99 = $9.99, 100 = $100). NOT cents like Stripe.
- Dates are **ISO 8601 strings** — parse with `new Date(str)`. Do NOT multiply by 1000.
- Plans reference products via `plan.product.id`, NOT `plan.product_id`.
- List endpoints return `{ data: [...] }`.
- `company_id` is required for most SDK methods — read from `process.env.WHOP_COMPANY_ID`.
- Whop is the system of record for purchases and membership access.
- Purchases are tied to the buyer's Whop account. If a user cannot access a purchase, they are often logged into the wrong Whop account/email.
- In a Whop app/iframe, verify the `x-whop-user-token` server-side to get the Whop `userId`, then call `users.checkAccess(resourceId, { id: userId })`. Gate paid features on Whop's response, not on local checkout state.
- For non-Whop-hosted apps, use a real auth bridge such as Whop OAuth or a server-verified membership/payment flow. Do not rely on client-supplied email, membership ID, checkout ID, or `success=true`.
=======
**Always run `--schema <tool>` before calling an unfamiliar tool** — don't guess parameters.

The proxy injects `api_key` and `company_id` automatically — no credentials needed.

## Project Structure
>>>>>>> 5af7b45bff9783311500884b852e2b83f803caff

- **API server directory**: `server/`
- **Client app directory**: `client/`


<<<<<<< HEAD
### Reference files

- ./references/code-templates.md -- Example routes and checkout flow using the Whop SDK
- ./references/whopClient.ts -- Server-side Whop SDK client that fetches credentials from the Replit connection API
- ./references/whop-mcp.mjs -- Helper script for calling Whop MCP tools via the OpenInt proxy
- ./references/whop-api.mjs -- Helper script for direct Whop REST API calls (plans, checkout configs, payments)

## Step 3: Create product and plan

Run these via `shell_exec` — do NOT ask the user for IDs:
1. `node whop-mcp.mjs create_product '{"title":"<product name>"}'` → get `prod_xxx`
2. `node whop-api.mjs POST /api/v1/plans '{"company_id":"biz_xxx","product_id":"prod_xxx","initial_price":<dollars>,"currency":"usd","billing_period":30}'` → get `plan_xxx`
3. Store `plan_xxx` as a Replit Configuration `WHOP_PLAN_ID`

## Step 4: Implement checkout flow

1. User clicks "Subscribe" → app calls server `POST /api/whop/checkout` with `plan_id`
2. Server creates checkout config: `POST /checkout_configurations` with `{ plan_id, redirect_url }` → returns `{ id: "ch_xxx", purchase_url }`
3. Frontend redirects user to `purchase_url` (Whop hosted checkout)
4. User pays → Whop redirects back to `redirect_url`
5. Server verifies purchase/account access with Whop before granting paid access:
   - For Whop apps, verify the Whop user token and call `users.checkAccess` for the product, experience, or company.
   - For external apps, verify the matching payment/membership server-side and bind it to the authenticated user.
6. Store only the minimal local mapping needed by the app; Whop remains the source of truth.

## Step 5: Add manage subscription page

Add `/account` or `/settings` page with cancel and view subscription. See `./references/code-templates.md` for routes.

## Step 6: Tell the user how to test and check their Whop account

When you finish the run setting up Whop, send this message to the user verbatim (do not paraphrase, do not skip — this is the only way users know their Whop account already exists):

> Your app has payments built-in via Whop! Open in a new tab to test.
>
> To check your Whop balance (revenue, customers, etc.) just visit Whop.com and login with the same email you use for Replit (your Whop account was just automatically created).

Send it as the final message of the Whop setup run, after the integration is wired up and any task list is complete.

## Rules (read these last — they override any conflicting info above)

- Do NOT ask the user for Company ID, Plan ID, or API key — get them yourself
- Use `whop-mcp.mjs` and `whop-api.mjs` to manage the Whop account (create products, plans, list payments, etc.) — do NOT ask the user to do these in the Whop dashboard
- Use Whop's hosted checkout (redirect-based) for all payment flows
- Use `getWhopClient()` from `whopClient.ts` for all server-side API calls in the user's app
- Do NOT import `whopClient.ts` in frontend code — it is server-only
- Do NOT duplicate product/plan catalogs in your database — query Whop
- Do NOT hardcode `api_key` in source — always fetch via `getWhopClient()`
- In Whop apps, use Whop account login: verify `x-whop-user-token` and check access with Whop
- For external apps, add a secure auth bridge before granting access
- Never grant paid access from a redirect, client-supplied email, membership ID, checkout ID, or `success` query param
- Store `company_id` in a Replit Configuration
- Store only minimal purchase/access mappings needed by the app; keep Whop as the source of truth
=======
## Making API Calls

Whop uses different API versions per endpoint — check https://dev.whop.com for the correct version.

Read the code-templates reference for `whopClient.ts` and checkout flow.

### API gotchas

- Most SDK methods require `company_id` — read it from `process.env.WHOP_COMPANY_ID` (Replit Configuration).
- Plans reference their product via a nested `product: { id }` object, NOT a flat `product_id` field. Use `plan.product.id` to match plans to products.
- List endpoints return `{ data: [...] }` — the array is in the `data` field.
- Products use `title` (not `name`) for the display name.
- Whop returns prices in **cents** (e.g. `100` = $1.00), like Stripe. Store prices as cents in the database to avoid conversion bugs. If you display prices, divide by 100 only at the UI layer.
- The SDK method is `whop.checkoutConfigurations.create({ plan_id })`, NOT `checkoutSessions`. Do NOT pass `company_id` — it causes an error unless creating on behalf of a connected account.
- Whop is the system of record for purchases. Two strategies to verify ownership:
  1. **Always poll** — query Whop memberships by email on each access check. Simple, no local state to sync.
  2. **Store in DB + webhook** — store purchase state in the database, update via Whop webhooks. Better performance but more setup.

## Whop Concepts

- **Companies:** Top-level entity. Each API key is scoped to a company (`biz_xxx`).
- **Products:** Items or access tiers users can purchase (e.g., "Pro Membership").
- **Plans:** Pricing configurations for products (one-time, recurring, free trial, etc.).
- **Memberships:** A user's active access to a product, created when they purchase a plan.
- **Checkout Sessions:** Payment flows for purchasing plans.

### Typical Flow

1. **Build a real signup/login system first** (registration, login page, sessions/cookies). This is required before any checkout flow. Users must be able to create an account, log in, and stay logged in across pages. A simple "enter email" form at checkout is NOT sufficient — the app needs persistent sessions so it can verify purchase ownership, restore purchases, and gate content. Do NOT use Whop for authentication; Whop is the payment processor, not the identity provider.
2. **Create a Product** via `mcpCall` in shell (e.g. `create_product` with a title). The API key has full owner access — no manual Whop dashboard login is needed.
3. **Create one or more Plans** via `mcpCall` (pricing, billing interval, one-time or recurring)
4. **Store the plan ID** in a Replit Configuration (e.g. `WHOP_PLAN_ID`) so checkout can reference it
5. **Create a Checkout Session** with the plan — render it on a dedicated checkout page using `WhopCheckoutEmbed`. Prefill the logged-in user's email and disable the email field so the purchase is tied to their account.
6. **On `onComplete`**, verify the membership via the Whop API using the user's email and store email + membership ID in your database.
7. **Check access** by querying your database for the user's membership, or call Whop's API to validate.

Apps must have a database to store purchases (user email + Whop membership ID).

**Important:** The agent can create products, plans, and manage subscriptions directly via MCP tools or the API. Users do NOT need to log into the Whop dashboard.

## Storing Data

- Do NOT duplicate product or plan catalogs in your database — query Whop for those
- DO store purchase records: user email + Whop membership ID. This is required for users to restore purchases.
- Store Whop entity IDs (e.g., `whop_membership_id TEXT`, `user_email TEXT`) in your application tables

## Key Rules

**DO:**
- Use `getWhopClient()` from `whopClient.ts` for all server-side API calls
- Check https://dev.whop.com for the correct API version per endpoint
- Store `company_id` (biz_xxx) in a Replit Configuration (e.g. `WHOP_COMPANY_ID`)
- Store purchase records (user email + Whop membership ID) in your database
- Implement user login so email is known before checkout

**DO NOT:**
- Hardcode or cache `api_key` (apik_xxx) in source code — always fetch via `getWhopClient()`
- Import `whopClient.ts` in frontend/client code — it is server-only
- Duplicate Whop product/plan catalogs in your own database

## References

- ./references/code-templates.md -- Code templates for setting up Whop integration including proxy client, routes, and checkout flow
>>>>>>> 5af7b45bff9783311500884b852e2b83f803caff
