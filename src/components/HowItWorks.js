import React from 'react';
import { CheckCircle, Zap, Globe } from './Icons';

export default function HowItWorks() {
  const steps = [
    {
      num: '01', icon: <CheckCircle size={36} color="#4B6FFF" />,
      title: 'Choose Your Model',
      desc: 'Select School Visit, Public Event, or STEM Outreach and fill out our 2-minute inquiry form.'
    },
    {
      num: '02', icon: <Zap size={36} color="#4B6FFF" />,
      title: 'We Handle Logistics',
      desc: 'Our crew transports, inflates, and fully rigs the dome at your location in under 3 hours.'
    },
    {
      num: '03', icon: <Globe size={36} color="#4B6FFF" />,
      title: 'The Show Begins',
      desc: 'Guests enter. Lights dim. The universe opens up around them in full 360° immersive projection.'
    },
  ];

  return (
    <section style={{
      padding: '100px 5%',
      background: 'radial-gradient(ellipse at 30% 50%, rgba(75,111,255,0.06) 0%, transparent 60%)'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ color: '#4B6FFF', fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', marginBottom: 12, textTransform: 'uppercase' }}>
            Simple Process
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            How It Works
          </h2>
        </div>

        <div className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(75,111,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(75,111,255,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--card-border)';
            }}>
              <div style={{
                position: 'absolute', top: 14, right: 18,
                fontFamily: 'var(--font-display)', fontSize: 56,
                fontWeight: 800, color: 'rgba(75,111,255,0.07)', lineHeight: 1
              }}>{s.num}</div>
              <div style={{ marginBottom: 18 }}>{s.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}