import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title');
  console.log('title', title);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'white',
          display: 'flex',
          fontSize: 128,
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {title}
      </div>
    ),
  );
}
