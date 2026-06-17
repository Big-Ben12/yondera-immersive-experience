import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', model: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12,
    padding: '14px 18px', color: '#fff', fontSize: 15,
    fontFamily: 'var(--font-body)', outline: 'none',
    transition: 'border-color 0.2s'
  };

  return (
    <section id="contact" style={{
      padding: '100px 5%',
      background: 'radial-gradient(ellipse at 70% 50%, rgba(0,212,170,0.05) 0%, transparent 60%)'
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{ color: 'var(--teal)', fontWeight: 600, fontSize: 14, letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>Get in Touch</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            Ready to Launch<br />Your Universe?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17 }}>
            Tell us about your school, event, or brand — we'll respond within 24 hours.
          </p>
        </div>

        {sent ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div style={{ fontSize: 60, marginBottom: 20 }}>🚀</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Message Sent!</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)' }}>We'll be in touch within 24 hours. The stars await.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <input name="name" required placeholder="Your Name" value={form.name} onChange={handle}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--violet)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
              <input name="email" type="email" required placeholder="Email Address" value={form.email} onChange={handle}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--violet)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>
            <select name="model" required value={form.model} onChange={handle}
              style={{ ...inputStyle, color: form.model ? '#fff' : 'rgba(255,255,255,0.4)' }}>
              <option value="" disabled>Select Service Model</option>
              <option value="school">School Service</option>
              <option value="public">Public Ticketed Event</option>
              <option value="sponsor">Sponsored STEM Outreach</option>
            </select>
            <textarea name="message" placeholder="Tell us more about your school, event, or organisation..." value={form.message} onChange={handle} rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'var(--violet)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
            />
            <button type="submit" style={{
              background: 'linear-gradient(135deg, var(--violet), #9b87ff)',
              color: '#fff', border: 'none', borderRadius: 100,
              padding: '17px 40px', fontSize: 16, fontWeight: 600,
              cursor: 'pointer', width: '100%',
              boxShadow: '0 0 40px rgba(108,99,255,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='scale(1.02)'; e.currentTarget.style.boxShadow='0 0 60px rgba(108,99,255,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 0 40px rgba(108,99,255,0.4)'; }}
            >
              Send Inquiry →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
