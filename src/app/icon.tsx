import { ImageResponse } from 'next/og';

export const size = { width: 256, height: 256 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050508',
          borderRadius: '22%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            height: '80%',
            background:
              'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)',
            borderRadius: '18%',
          }}
        >
          <span
            style={{
              fontSize: 140,
              fontWeight: 900,
              color: '#050508',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            A
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
