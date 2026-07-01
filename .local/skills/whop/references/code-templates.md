<<<<<<< HEAD
# Whop Route Notes

This file is a fallback reference, not a drop-in implementation. Prefer the
project's existing server, routing, auth, and database patterns. If a snippet
doesn't compile in the target app, adapt it instead of preserving the snippet.

## Client Setup

Write `whopClient.ts` to the API server directory from `./references/whopClient.ts`.
It provides `getWhopClient()` and lazily fetches credentials from the Replit
connection API.

Install: `pnpm add @whop/sdk`

Most SDK methods require `company_id`; read it from `WHOP_COMPANY_ID`.

## Access Control

For Whop apps, Whop account login is the auth source:

```ts
const { userId } = await whopsdk.verifyUserToken(req.headers);
const access = await whopsdk.users.checkAccess(resourceId, { id: userId });
if (!access.has_access) {
  return res.status(403).json({ error: 'Access denied' });
}
```

Use the correct `resourceId` for the thing being protected:

- `prod_xxx` for a product
- `exp_xxx` for an experience
- `biz_xxx` for company-level access

Never unlock paid features from a redirect, client-provided email, client-provided
membership ID, checkout ID, or `success` query parameter.

## Checkout

Use Whop's hosted checkout. The app may create a checkout configuration and
redirect to `purchase_url`, but access is granted only after Whop verifies the
current user's account access or a server-verified membership/payment.

## List Payments

List payments for a checkout configuration (useful for verifying purchases):

```ts
const client = await getWhopClient();
const payments = await client.payments.list({
  company_id: process.env.WHOP_COMPANY_ID,
  checkout_configuration_ids: [checkoutConfigId],
});
```

REST equivalent via whop-api.mjs:

```bash
node whop-api.mjs GET '/api/v1/payments?company_id=biz_xxx&checkout_configuration_ids[]=ch_xxx'
```

## Manage Subscription

For cancel/modify actions, look up the membership server-side for the verified
Whop user or authenticated app user. Never accept a membership ID from the
client as authority to cancel or modify a subscription.
=======
# Whop Code Templates

## Code Files

Filename: whopClient.ts (in the API server directory)

```ts
import Whop from '@whop/sdk';

let clientPromise: Promise<Whop> | null = null;

async function initWhopClient(): Promise<Whop> {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (!hostname || !xReplitToken) {
    throw new Error(
      'Missing Replit environment variables. ' +
      'Ensure the Whop integration is connected via the Integrations tab.'
    );
  }

  const resp = await fetch(
    `https://${hostname}/api/v2/connection?include_secrets=true&connector_names=whop`,
    {
      headers: { Accept: "application/json", X_REPLIT_TOKEN: xReplitToken },
      signal: AbortSignal.timeout(10_000),
    }
  );

  if (!resp.ok) {
    throw new Error(`Failed to fetch Whop credentials: ${resp.status} ${resp.statusText}`);
  }

  const data = await resp.json();
  const settings = data.items?.[0]?.settings;

  if (!settings?.api_key) {
    throw new Error(
      'Whop integration not connected or missing credentials. ' +
      'Connect Whop via the Integrations tab first.'
    );
  }

  return new Whop({ apiKey: settings.api_key });
}

export function getWhopClient(): Promise<Whop> {
  if (!clientPromise) {
    clientPromise = initWhopClient().catch((err) => {
      clientPromise = null;
      throw err;
    });
  }

  return clientPromise;
}
```

Example routes using the SDK. Note: most SDK methods require `company_id` — read it from the `WHOP_COMPANY_ID` Replit Configuration.

```ts
import { getWhopClient } from '../whopClient';

const COMPANY_ID = process.env.WHOP_COMPANY_ID!;

router.get('/products', async (_req, res) => {
  const whop = await getWhopClient();
  const products = await whop.products.list({ company_id: COMPANY_ID });
  res.json(products);
});

router.post('/checkout', async (req, res) => {
  const { plan_id } = req.body;
  const whop = await getWhopClient();
  const session = await whop.checkoutConfigurations.create({
    plan_id,
  });
  res.json(session);
});

```

After `onComplete` fires, the app should look up the user's membership by email via the Whop SDK and store the email + membership ID in the database.

## Checkout Flow

Two valid checkout layouts — choose based on the app's design:

**Option A: Full-screen checkout page** (navigate to `/checkout/:planId`)

- Left side (50%): back link, product title, description
- Right side (50%): `WhopCheckoutEmbed` centered horizontally (the embed is narrow)
- Responsive: stacks vertically on mobile

**Option B: Inline dialog** (modal/overlay on the current page)

- Rounded-corner dialog containing `WhopCheckoutEmbed`
- Overlay dims the background

Both use `theme="light"` (white form) or `theme="dark"` (black form). Make your design accordingly.

Install: `pnpm add @whop/checkout @whop/sdk`

The checkout embed usage (inside the right-side panel):

```tsx
import { WhopCheckoutEmbed } from '@whop/checkout/react';

// userEmail from your app's auth
<WhopCheckoutEmbed
  sessionId={sessionId}
  prefill={{ email: userEmail }}
  disableEmail
  onComplete={async (paymentId) => {
    await fetch('/api/whop/verify-purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_id: paymentId }),
    });
    navigate('/checkout/success');
  }}
  theme="dark"
/>
```

### Flow

1. User clicks "Subscribe" → navigates to `/checkout/:planId`
2. Checkout page creates a session and renders `WhopCheckoutEmbed` full-screen
3. `onComplete` fires with `paymentId` → app collects email, verifies membership, stores in database
4. Navigate to success page
>>>>>>> 5af7b45bff9783311500884b852e2b83f803caff
