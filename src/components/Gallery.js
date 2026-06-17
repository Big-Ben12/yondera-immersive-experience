import React, { useState } from 'react';
import { Camera, ArrowRight } from './Icons';

const allImages = [
  { src: '/gallery/gallery-1.png', alt: 'Students entering the Yondera dome for a school show' },
  { src: '/gallery/gallery-2.png', alt: 'Audience faces lit by 360° star projection inside the dome' },
  { src: '/gallery/gallery-3.png', alt: 'Portable dome inflating on a school campus in Accra' },
  { src: '/gallery/gallery-4.png', alt: 'Child pointing at a planet projection above them' },
  { src: '/gallery/gallery-5.png', alt: 'Dome setup at a public outdoor event at night' },
  { src: '/gallery/gallery-6.png', alt: 'Corporate sponsor branding on the dome exterior' },
  { src: '/gallery/gallery-7.png', alt: 'Girls-in-STEM outreach session inside the dome' },
  { src: '/gallery/gallery-8.png', alt: 'The Yondera crew rigging the dome projection system' },
  { src: '/gallery/gallery-9.png', alt: 'Families watching the Solar System Safari show' },
];

const INITIAL_COUNT = 6;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const visible = showAll ? allImages : allImages.slice(0, INITIAL_COUNT);

  return (
    <>
      <section id="gallery" style={{ padding: '100px 5%', background: '#07071A' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: '#4B6FFF', marginBottom: 12, fontWeight: 600,
              fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase'
            }}>
              <Camera size={15} color="#4B6FFF" />
              <span>Gallery</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 14 }}>
              Moments Inside the Dome
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto', fontSize: 16, lineHeight: 1.7 }}>
              Real moments from school visits, public events, and outreach sessions across Accra.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="gallery-masonry" style={{ columns: '3 280px', columnGap: 16 }}>
            {visible.map((img, i) => (
              <div key={i} onClick={() => setLightbox(img)}
                style={{
                  breakInside: 'avoid', marginBottom: 16, borderRadius: 14,
                  overflow: 'hidden', cursor: 'pointer', position: 'relative',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(75,111,255,0.25)';
                  e.currentTarget.querySelector('.img-overlay').style.opacity = '1';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('.img-overlay').style.opacity = '0';
                }}>
                <img src={img.src} alt={img.alt} loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                <div className="img-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(7,7,26,0.9) 0%, rgba(75,111,255,0.08) 100%)',
                  opacity: 0, transition: 'opacity 0.3s',
                  display: 'flex', alignItems: 'flex-end', padding: '16px 14px'
                }}>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, margin: 0 }}>
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* See More button */}
          {allImages.length > INITIAL_COUNT && (
            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <button onClick={() => setShowAll(prev => !prev)} style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'transparent', color: '#fff',
                padding: '14px 36px', borderRadius: 100,
                fontSize: 15, fontWeight: 600, cursor: 'pointer',
                border: '1.5px solid rgba(75,111,255,0.3)',
                transition: 'border-color 0.2s, background 0.2s, color 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#4B6FFF'; e.currentTarget.style.background = 'rgba(75,111,255,0.1)'; e.currentTarget.style.color = '#a0b4ff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(75,111,255,0.3)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}>
                {showAll ? 'See Less' : `See All ${allImages.length} Photos`}
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .gallery-masonry { columns: 2 160px !important; column-gap: 10px !important; }
          }
          @media (max-width: 480px) {
            .gallery-masonry { columns: 1 !important; }
          }
        `}</style>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 3000,
          background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24, cursor: 'zoom-out'
        }}>
          <div onClick={e => e.stopPropagation()}
            style={{ position: 'relative', maxWidth: 900, width: '100%', cursor: 'default' }}>
            <img src={lightbox.src} alt={lightbox.alt} style={{
              width: '100%', height: 'auto', maxHeight: '80vh',
              objectFit: 'contain', borderRadius: 14, display: 'block'
            }} />
            <p style={{ textAlign: 'center', marginTop: 14, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              {lightbox.alt}
            </p>
            <button onClick={() => setLightbox(null)} style={{
              position: 'absolute', top: -14, right: -14,
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(75,111,255,0.15)', border: '1px solid rgba(75,111,255,0.3)',
              color: '#fff', cursor: 'pointer', fontSize: 17,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(75,111,255,0.35)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(75,111,255,0.15)'}>✕</button>
          </div>
        </div>
      )}
    </>
  );
}