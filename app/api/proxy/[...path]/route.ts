import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.FASTAPI_INTERNAL_URL || 'http://localhost:8000';

async function proxyRequest(request: NextRequest) {
  const path = request.nextUrl.pathname.replace('/api/proxy', '');
  const search = request.nextUrl.search;
  const targetUrl = `${BACKEND_URL}${path}${search}`;

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const accessToken = request.headers.get('x-forwarded-access-token');
    if (accessToken) {
      headers['x-forwarded-access-token'] = accessToken;
    }

    const fetchOptions: RequestInit = {
      method: request.method,
      headers,
    };

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      fetchOptions.body = await request.text();
    }

    const response = await fetch(targetUrl, fetchOptions);
    const data = await response.text();

    return new NextResponse(data, {
      status: response.status,
      headers: { 'Content-Type': response.headers.get('Content-Type') || 'application/json' },
    });
  } catch {
    return NextResponse.json(
      { error: 'Backend unavailable' },
      { status: 502 }
    );
  }
}

export async function GET(request: NextRequest) {
  return proxyRequest(request);
}

export async function POST(request: NextRequest) {
  return proxyRequest(request);
}

export async function PUT(request: NextRequest) {
  return proxyRequest(request);
}

export async function DELETE(request: NextRequest) {
  return proxyRequest(request);
}
