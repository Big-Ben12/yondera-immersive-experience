import React, { useState, useEffect } from 'react';
import { Menu, X } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Experience', 'Models', 'Shows', 'Gallery', 'Partners', 'Contact'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 5%',
        background: scrolled ? 'rgba(7,7,26,0.95)' : 'rgba(7,7,26,0.75)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(75,111,255,0.1)',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72,
      }}>
      <a href="/" style={{
  display: 'flex', alignItems: 'center', gap: 12,
  textDecoration: 'none', flexShrink: 0
}}>
          <img
            src="/logos/full-logo-white.png"
            alt="Yondera logo icon"
            width={300}
            height={300}
            loading="eager"
            style={{ display: 'block', objectFit: 'contain' }}
          />
         
        </a>

        <div className="desktop-nav" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
              fontSize: 13, fontWeight: 500, letterSpacing: '0.05em',
              textTransform: 'uppercase', transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
            >{l}</a>
          ))}
          <a href="#contact" style={{
            background: 'linear-gradient(135deg, #4B6FFF, #7B3FE4)',
            color: '#fff', padding: '10px 22px', borderRadius: 100,
            fontSize: 13, fontWeight: 600, letterSpacing: '0.05em',
            textTransform: 'uppercase', textDecoration: 'none',
            boxShadow: '0 0 24px rgba(75,111,255,0.35)', whiteSpace: 'nowrap',
            transition: 'opacity 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.boxShadow = '0 0 40px rgba(75,111,255,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.boxShadow = '0 0 24px rgba(75,111,255,0.35)'; }}>
            Book Now
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          className="hamburger-btn"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 4, color: '#fff'
          }}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 999,
          background: 'rgba(7,7,26,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(75,111,255,0.1)',
          display: 'flex', flexDirection: 'column', paddingBottom: 20
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{
                padding: '16px 6%', color: 'rgba(255,255,255,0.7)',
                fontSize: 16, fontWeight: 500, letterSpacing: '0.05em',
                textTransform: 'uppercase', textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                transition: 'color 0.2s, background 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(75,111,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'transparent'; }}
            >{l}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            margin: '16px 6% 0', padding: '15px 0', textAlign: 'center',
            background: 'linear-gradient(135deg, #4B6FFF, #7B3FE4)',
            color: '#fff', borderRadius: 100, fontSize: 15, fontWeight: 600,
            textDecoration: 'none'
          }}>Book Now</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .nav-subtitle { display: none !important; }
        }
      `}</style>
    </>
  );
}