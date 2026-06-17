import React from 'react';

const items = [
  { quote: 'The students were completely mesmerized. Three of them said they want to be astronomers now.', name: 'Mavis Asante', role: 'Science HOD, Accra Academy', initial: 'M' },
  { quote: 'The most unique brand activation we have done. Our company was associated with pure joy and wonder.', name: 'Kwame Boateng', role: 'Corporate Sponsor, Accra Mall Pop-Up', initial: 'K' },
  { quote: "My daughter talked about the show for weeks. She now knows all the planets — I couldn't believe it.", name: 'Ama Ofori', role: 'Parent, Public Event Attendee', initial: 'A' },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 5%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ color: 'var(--violet)', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>What People Say</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Real Reactions</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {items.map((t, i) => (
            <div key={i} style={{
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 20, padding: 32
            }}>
              <div style={{ color: '#6C63FF', fontSize: 28, marginBottom: 16, lineHeight: 1 }}>"</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 16, flexShrink: 0
                }}>{t.initial}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
