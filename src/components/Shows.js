import React, { useState, useRef } from 'react';
import { ArrowRight, X } from './Icons';

const ChevronLeft = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const PlayCircle = ({ size = 48, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" fill={color} stroke="none" />
  </svg>
);

const Clock = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const Users = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Star = ({ size = 14, color = '#FFD700' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const shows = [
  {
    id: 1,
    title: 'Origins: The African Sky',
    duration: '45 min',
    audience: 'All ages',
    rating: '5.0',
    accentColor: '#4B6FFF',
    description: 'Journey through the rich astronomical traditions of West Africa — from Akan star lore and Dogon cosmology to the navigators of the Sahara. This flagship show blends scientific accuracy with cultural pride, told through stunning 360° visuals and original Ghanaian narration.',
    highlights: [
      'Original Ghanaian narration in Twi & English',
      'Features real NASA deep-space imagery',
      'Curriculum-linked for JSS & SHS science',
    ],
    trailerUrl: 'https://www.youtube.com/watch?v=lil_I_-7aOM',
    thumb: '/shows/show-1.png',
    backdrop: '/shows/show-1.png',
  },
  {
    id: 2,
    title: 'Planets & Pioneers',
    duration: '30 min',
    audience: 'Basic School (P4–JHS)',
    rating: '4.9',
    accentColor: '#4B6FFF',
    description: 'A guided tour of our solar system narrated through the eyes of young African space explorers. Students visit each planet, learn about missions, and discover what future Ghanaian astronauts could explore.',
    highlights: [
      'Interactive Q&A moments during the show',
      'Features real mission footage from NASA & ESA',
      'Comes with a take-home activity booklet',
    ],
    trailerUrl: 'https://www.youtube.com/watch?v=lil_I_-7aOM',
    thumb: '/shows/show-2.png',
    backdrop: '/shows/show-2.png',
  },
  {
    id: 3,
    title: 'Deep Space Tonight',
    duration: '60 min',
    audience: 'Adults & Teens',
    rating: '4.8',
    accentColor: '#4B6FFF',
    description: 'Our most cinematic experience. Fly beyond the Milky Way, through nebulae, black holes, and galaxy clusters — all rendered in real-time 3D. A premium evening show for adults who want to be truly humbled by the scale of the universe.',
    highlights: [
      'Full 60-minute immersive film experience',
      'Ambient spatial audio throughout',
      'Ideal for corporate events & date nights',
    ],
    trailerUrl: 'https://www.youtube.com/watch?v=lil_I_-7aOM',
    thumb: '/shows/show-3.png',
    backdrop: '/shows/show-3.png',
  },
  {
    id: 4,
    title: 'She Sees Stars',
    duration: '40 min',
    audience: 'Girls in STEM',
    rating: '5.0',
    accentColor: '#4B6FFF',
    description: 'A celebration of women in space science — from NASA\'s Hidden Figures to modern African astronomers. Designed for girls-in-STEM events, this show is inspiring, empowering, and beautifully crafted to spark a generation of future scientists.',
    highlights: [
      'Features 8 real women scientists from Africa',
      'Supported by STEM outreach sponsorship packages',
      'Available in Twi, Ewe, and English',
    ],
    trailerUrl: 'https://www.youtube.com/watch?v=lil_I_-7aOM',
    thumb: '/shows/show-4.png',
    backdrop: '/shows/show-4.png',
  },
  {
    id: 5,
    title: 'Solar System Safari',
    duration: '25 min',
    audience: 'Early Childhood (KG–P3)',
    rating: '4.9',
    accentColor: '#4B6FFF',
    description: 'A fun, fast, and colourful adventure for young children. Hop aboard a cartoon rocket and meet friendly characters on each planet. Perfect for kindergartens and primary schools — no prior science knowledge needed.',
    highlights: [
      'Gentle pacing designed for ages 4–8',
      'Animated characters & narration',
      'Post-show singalong and Q&A',
    ],
    trailerUrl: 'https://www.youtube.com/watch?v=lil_I_-7aOM',
    thumb: '/shows/show-5.png',
    backdrop: '/shows/show-5.png',
  },
];

export default function Shows() {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="shows" style={{
        padding: '100px 0',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(75,111,255,0.05) 0%, transparent 70%)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', padding: '0 5%', marginBottom: 48 }}>
          <p style={{ color: '#4B6FFF', fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', marginBottom: 12, textTransform: 'uppercase' }}>
            Featured Shows
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            What's Playing in the Dome
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '0 auto 32px', fontSize: 16, lineHeight: 1.7 }}>
            Five immersive programmes for every audience — from young children to corporate guests.{' '}
            <span style={{ color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
              Click on a show for more details.
            </span>
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            {[{ dir: -1, el: <ChevronLeft size={18} /> }, { dir: 1, el: <ChevronRight size={18} /> }].map(({ dir, el }) => (
              <button key={dir} onClick={() => scroll(dir)} style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s, border-color 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(75,111,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(75,111,255,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
                {el}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div ref={scrollRef} style={{
          display: 'flex', gap: 20,
          overflowX: 'auto', paddingLeft: '5%', paddingRight: '5%', paddingBottom: 8,
          scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab',
        }}>
          {shows.map((show) => (
            <div key={show.id} onClick={() => setSelected(show)}
              className="show-card"
              style={{
                minWidth: 300, maxWidth: 300, height: 440,
                borderRadius: 20, overflow: 'hidden',
                cursor: 'pointer', flexShrink: 0, position: 'relative',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03) translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 28px 60px rgba(0,0,0,0.6)';
                e.currentTarget.querySelector('.card-gradient').style.opacity = '0.7';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
                e.currentTarget.querySelector('.card-gradient').style.opacity = '0.15';
              }}
            >
              <img src={show.thumb} alt={show.title} loading="lazy" width="300" height="440"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
              <div className="card-gradient" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(7,7,26,0.6) 0%, transparent 100%)',
                opacity: 0.15, transition: 'opacity 0.3s'
              }} />
            </div>
          ))}
        </div>

        <style>{`
          .show-card::-webkit-scrollbar { display: none; }
          @media (max-width: 600px) {
            .show-card { min-width: 260px !important; max-width: 260px !important; height: 380px !important; }
          }
        `}</style>
      </section>

      {/* Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(14px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24, overflowY: 'auto',
        }}>
          <div onClick={e => e.stopPropagation()} className="shows-modal" style={{
            background: '#0e0d1f', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24, overflow: 'hidden',
            maxWidth: 700, width: '100%',
            maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
          }}>
            {/* Backdrop */}
            <div className="shows-modal-backdrop" style={{ position: 'relative', height: 280 }}>
              <img src={selected.backdrop} alt={selected.title} width="700" height="280"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, #0e0d1f 0%, rgba(14,13,31,0.3) 60%, transparent 100%)'
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 3, background: 'linear-gradient(90deg, #00C8FF, #4B6FFF, #E8009A)'
              }} />
              <button onClick={() => setSelected(null)} style={{
                position: 'absolute', top: 16, right: 16,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)', transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.65)'}>
                <X size={17} />
              </button>
            </div>

            {/* Body */}
            <div className="shows-modal-body" style={{ padding: '28px 36px 40px' }}>
              <h2 className="shows-modal-title" style={{ fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
                {selected.title}
              </h2>
              <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
                  <Clock size={14} color="rgba(255,255,255,0.4)" />{selected.duration}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
                  <Users size={14} color="rgba(255,255,255,0.4)" />{selected.audience}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>
                  <Star size={14} />{selected.rating}
                </span>
              </div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 28 }}>
                {selected.description}
              </p>
              <div style={{ marginBottom: 32 }}>
                <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4B6FFF', marginBottom: 14 }}>
                  Show Highlights
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {selected.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
                        stroke="#4B6FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ marginTop: 2, flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shows-modal-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={selected.trailerUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'linear-gradient(135deg, #4B6FFF, #7B3FE4)', color: '#fff',
                  padding: '14px 28px', borderRadius: 100,
                  fontSize: 15, fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 0 24px rgba(75,111,255,0.35)',
                  transition: 'opacity 0.2s', flexShrink: 0
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  <PlayCircle size={20} color="#fff" /> Watch Trailer
                </a>
                <a href="#contact" onClick={() => setSelected(null)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'transparent', color: '#fff',
                  padding: '14px 28px', borderRadius: 100,
                  fontSize: 15, fontWeight: 600, textDecoration: 'none',
                  border: '1.5px solid rgba(75,111,255,0.3)',
                  transition: 'border-color 0.2s, background 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#4B6FFF'; e.currentTarget.style.background = 'rgba(75,111,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(75,111,255,0.3)'; e.currentTarget.style.background = 'transparent'; }}>
                  Book This Show <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 600px) {
              .shows-modal { border-radius: 16px !important; }
              .shows-modal-backdrop { height: 200px !important; }
              .shows-modal-body { padding: 20px 20px 28px !important; }
              .shows-modal-title { font-size: 22px !important; }
              .shows-modal-buttons { flex-direction: column !important; }
              .shows-modal-buttons a { width: 100% !important; justify-content: center !important; }
            }
          `}</style>
        </div>
      )}
    </>
  );
}