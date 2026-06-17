import React, { useEffect, useRef, useState } from 'react';

function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / 50;
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 30);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const items = [
    { value: 20, suffix: '+', label: 'Show Programs' },
    { value: 360, suffix: '°', label: 'Immersive Dome' },
    { value: 500, suffix: '+', label: 'Guests Per Week' },
    { value: 3, suffix: '', label: 'Service Models' },
  ];

  return (
    <section style={{
      padding: '64px 5%',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(255,255,255,0.02)'
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40
      }}>
        {items.map((item, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 60px)',
              fontWeight: 700, letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              <Counter end={item.value} suffix={item.suffix} />
            </div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, marginTop: 6, fontWeight: 500 }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
