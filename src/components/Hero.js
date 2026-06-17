import React, { useRef, useState } from 'react';
import { MapPin, Volume2, VolumeX } from './Icons';

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(prev => !prev);
    }
  };

  return (
    <section id="experience" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: '#07071A'
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <video ref={videoRef} autoPlay muted loop playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
          <source src="/videos/hero-video2.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(7,7,26,0.35) 0%, rgba(7,7,26,0.55) 50%, rgba(7,7,26,0.90) 100%)'
        }} />
      </div>

      <div style={{
        position: 'absolute', top: '12%', right: '8%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(75,111,255,0.14), transparent 70%)',
        filter: 'blur(50px)', zIndex: 1, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '18%', left: '4%', width: 320, height: 320,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,255,0.08), transparent 70%)',
        filter: 'blur(40px)', zIndex: 1, pointerEvents: 'none'
      }} />

      <div style={{
        position: 'relative', zIndex: 3, textAlign: 'center',
        maxWidth: 820, padding: '110px 24px 60px', width: '100%'
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(75,111,255,0.12)',
          border: '1px solid rgba(75,111,255,0.3)',
          borderRadius: 100, padding: '8px 20px', marginBottom: 28,
          fontSize: 13, fontWeight: 500, color: '#a0b4ff', letterSpacing: '0.05em'
        }}>
          <MapPin size={14} color="#a0b4ff" />
          <span>NOW OPERATING IN ACCRA, GHANA</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 9vw, 96px)', fontWeight: 700,
          lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 24, color: '#fff'
        }}>
          The Universe<br />
          <span style={{
            background: 'linear-gradient(90deg, #00C8FF, #4B6FFF, #E8009A)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Comes to You</span>
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'rgba(255,255,255,0.62)',
          maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.8
        }}>
          Ghana's first mobile immersive experience — bringing 360° cosmic
          journeys to classrooms, communities, and events across Accra.
        </p>

        <div className="hero-ctas" style={{
          display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap'
        }}>
          <a href="#contact" className="hero-btn-primary" style={{
            background: 'linear-gradient(135deg, #4B6FFF, #7B3FE4)',
            color: '#fff', padding: '16px 36px', borderRadius: 100,
            fontSize: 16, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 0 48px rgba(75,111,255,0.45)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            whiteSpace: 'nowrap'
          }}>Book a School Visit</a>
          <a href="#models" className="hero-btn-secondary" style={{
            background: 'transparent', color: '#fff',
            padding: '16px 36px', borderRadius: 100,
            fontSize: 16, fontWeight: 600, textDecoration: 'none',
            border: '1.5px solid rgba(75,111,255,0.35)',
            transition: 'border-color 0.2s, background 0.2s',
            whiteSpace: 'nowrap'
          }}>Explore Models</a>
        </div>

        <div style={{ marginTop: 48, color: 'rgba(255,255,255,0.2)', fontSize: 13, letterSpacing: '0.1em' }}>
          SCROLL TO EXPLORE
        </div>
      </div>

      <button onClick={toggleMute} title="Toggle sound" style={{
        position: 'absolute', bottom: 28, right: 24, zIndex: 10,
        background: 'rgba(75,111,255,0.12)',
        border: '1px solid rgba(75,111,255,0.25)',
        color: '#fff', borderRadius: '50%', width: 44, height: 44,
        cursor: 'pointer', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s'
      }}>
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <style>{`
        @media (max-width: 600px) {
          .hero-ctas { flex-direction: column; align-items: center; }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100%; max-width: 320px; text-align: center;
            justify-content: center; display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}