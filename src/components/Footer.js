import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '44px 6%',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      background: '#050512'
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24
      }}>

        {/* Logo + tagline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <img
              src="/logos/full-logo-white.png"
              alt="Yondera logo"
              style={{ height: 100, display: 'block' }}
            />
          </div>
          <p style={{
            fontSize: 13, color: 'rgba(255,255,255,0.32)',
            maxWidth: 260, lineHeight: 1.6
          }}>
            Ghana's first mobile immersive experience. Accra, Ghana.
          </p>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {['Models', 'Shows', 'Partners', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: 14, color: 'rgba(255,255,255,0.42)',
              textDecoration: 'none', transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.42)'}
            >{l}</a>
          ))}
        </div>

        {/* Contact + copyright */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.48)', marginBottom: 4 }}>
            hello@yonderagh.com
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            © 2026 Yondera Immersive Experience. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}