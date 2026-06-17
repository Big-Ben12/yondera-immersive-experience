import React, { useState } from 'react';
import { GraduationCap, Ticket, Handshake, ArrowRight } from './Icons';

const Diamond = ({ color }) => (
  <svg width={10} height={10} viewBox="0 0 24 24" fill={color} style={{ marginTop: 4, flexShrink: 0 }}>
    <polygon points="12 2 22 12 12 22 2 12" />
  </svg>
);

const models = [
  {
    icon: <GraduationCap size={36} color="#4B6FFF" />,
    title: 'School Service',
    tagline: 'Bring the Curriculum to Life',
    desc: 'We deploy directly to your school campus. Our inflatable dome seats 30 students per session and aligns with GES science curricula for Basic through SHS levels.',
    features: [
      'Half-day or full-day campus deployment',
      'Teacher briefing kit & lesson materials',
      'Pre/post-show curriculum worksheets',
      'GES-aligned science content',
    ],
    price: 'From GHS 1,200 / school day',
    cta: 'Book a School Visit',
  },
  {
    icon: <Ticket size={36} color="#4B6FFF" />,
    title: 'Public Ticketed Events',
    tagline: 'A Night Under the Stars — Anywhere',
    desc: 'Weekend and holiday pop-ups at malls, parks, and cultural venues. Multiple daily showtimes and a premium experience for families and adults.',
    features: [
      'Weekend & holiday pop-ups citywide',
      'Showtimes every 45 minutes',
      'VIP dome front-row seating',
      'Family & adult show programmes',
    ],
    price: 'From GHS 80 / ticket',
    cta: 'Get Tickets',
  },
  {
    icon: <Handshake size={36} color="#4B6FFF" />,
    title: 'Sponsored STEM Outreach',
    tagline: 'Connect Your Brand to Wonder',
    desc: 'Partner with us to bring free shows to underserved communities, girls-in-STEM events, and youth festivals. Your brand leads a movement — we handle everything.',
    features: [
      'Co-branded dome wrap & signage',
      'Impact reporting & media coverage',
      'Community access in Greater Accra',
      'Custom activation packages',
    ],
    price: 'Custom partnership packages',
    cta: 'Become a Partner',
  },
];

export default function Models() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="models" style={{ padding: '100px 5%' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{
            color: '#4B6FFF', fontWeight: 600, fontSize: 13,
            letterSpacing: '0.12em', marginBottom: 12, textTransform: 'uppercase'
          }}>Three Ways to Experience</p>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Choose Your Model
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '16px auto 0', fontSize: 16, lineHeight: 1.7 }}>
            Whether you're a school, a venue, or a forward-thinking brand — Yondera has a universe for you.
          </p>
        </div>

        <div className="models-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24
        }}>
          {models.map((m, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'rgba(75,111,255,0.07)' : 'var(--card-bg)',
                border: `1px solid ${hovered === i ? 'rgba(75,111,255,0.4)' : 'var(--card-border)'}`,
                borderRadius: 24, padding: 32,
                transition: 'all 0.3s ease',
                boxShadow: hovered === i ? '0 20px 60px rgba(75,111,255,0.18)' : 'none',
                display: 'flex', flexDirection: 'column', gap: 20
              }}>
              <div>
                <div style={{ marginBottom: 14 }}>{m.icon}</div>
                <div style={{ color: '#4B6FFF', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {m.tagline}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 10 }}>{m.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7 }}>{m.desc}</p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {m.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
                    <Diamond color="#4B6FFF" />{f}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, marginBottom: 14 }}>{m.price}</div>
                <a href="#contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: 'linear-gradient(135deg, rgba(75,111,255,0.15), rgba(123,63,228,0.2))',
                  border: '1.5px solid rgba(75,111,255,0.4)',
                  color: '#a0b4ff', borderRadius: 100, padding: '12px 20px',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(75,111,255,0.25)'; e.currentTarget.style.borderColor = 'rgba(75,111,255,0.7)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(75,111,255,0.15), rgba(123,63,228,0.2))'; e.currentTarget.style.borderColor = 'rgba(75,111,255,0.4)'; }}>
                  {m.cta} <ArrowRight size={15} color="#a0b4ff" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .models-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .models-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}