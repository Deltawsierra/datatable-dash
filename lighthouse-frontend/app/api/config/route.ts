import { NextResponse } from 'next/server';

// Evaluated at request time so the values come from the running server's
// environment, not baked in at build time.
export const dynamic = 'force-dynamic';

function clean(value: string | undefined): string {
  if (!value || value === 'placeholder-client-id') return '';
  return value;
}

export async function GET() {
  const clientId = clean(
    process.env.AZURE_CLIENT_ID || process.env.NEXT_PUBLIC_AZURE_CLIENT_ID,
  );
  const tenantId = clean(
    process.env.AZURE_TENANT_ID || process.env.NEXT_PUBLIC_AZURE_TENANT_ID,
  );

  return NextResponse.json({ clientId, tenantId });
}
