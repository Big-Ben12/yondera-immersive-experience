import React from 'react';

const partners = [
  { src: '/partners/partner-1.png', alt: 'Partner 1', width: 200 },
  { src: '/partners/partner-2.png', alt: 'Partner 2', width: 200 },
  { src: '/partners/partner-3.png', alt: 'Partner 3', width: 200 },
  { src: '/partners/partner-4.png', alt: 'Partner 4', width: 200 },
  { src: '/partners/partner-5.png', alt: 'Partner 5', width: 200 },
  { src: '/partners/partner-6.png', alt: 'Partner 6', width: 200 },
];

export default function Partners() {
  return (
    <section id="partners" style={{
      padding: '100px 5%', background: '#07071A',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <p style={{
          textAlign: 'center', color: 'rgba(255,255,255,0.28)',
          fontSize: 12, fontWeight: 600, letterSpacing: '0.22em',
          textTransform: 'uppercase', marginBottom: 72,
        }}>
          Partners &amp; Supporters
        </p>

        <div id="partners-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
          alignItems: 'center', gap: 0,
        }}>
          {partners.map((p, i) => (
            <LogoItem key={i} {...p} index={i} total={partners.length} />
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: 80, paddingTop: 52,
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 15, marginBottom: 20 }}>
            Interested in partnering with Yondera?
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'rgba(255,255,255,0.55)', fontSize: 14, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
            borderBottom: '1px solid rgba(75,111,255,0.4)', paddingBottom: 3,
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#a0b4ff'; e.currentTarget.style.borderColor = '#4B6FFF'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(75,111,255,0.4)'; }}>
            Become a Sponsor →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #partners-grid { grid-template-columns: repeat(3, 1fr) !important; }
          #partners-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); }
        }
        @media (max-width: 600px) {
          #partners-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 380px) {
          #partners-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function LogoItem({ src, alt, width, index, total }) {
  const isLast = index === total - 1;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '36px 24px',
      borderRight: isLast ? 'none' : '1px solid rgba(255,255,255,0.07)',
      transition: 'background 0.25s',
    }}
    onMouseEnter={e => e.currentTarget.style.background = 'rgba(75,111,255,0.04)'}
    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
      <img src={src} alt={alt} loading="lazy" width={width}
        style={{
          width: '100%', maxWidth: width, height: 'auto', maxHeight: 110,
          objectFit: 'contain', display: 'block',
          filter: 'brightness(0) invert(1)', opacity: 0.7,
          transition: 'opacity 0.25s, filter 0.25s, transform 0.25s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 12px rgba(75,111,255,0.6))';
          e.currentTarget.style.transform = 'scale(1.06)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.opacity = '0.7';
          e.currentTarget.style.filter = 'brightness(0) invert(1)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      />
    </div>
  );
}