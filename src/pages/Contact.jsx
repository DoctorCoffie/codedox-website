import React, { useState } from 'react';
import { contactInfo, instagramPosts } from '../mock';
import { Phone, Instagram, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleCaptcha = (token) => {
  setCaptchaToken(token);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
      if (!captchaToken) {
    alert('Molimo potvrdite da niste robot.');
    return;
  }

  setLoading(true);

    const templateParams = {
      ime_i_prezime: formData.name,
      email: formData.email,
      telefon: formData.phone,
      vozilo: formData.car,
      usluga: formData.service,
      poruka: formData.message
    };

    emailjs
      .send(
        'service_3evlhzt',
        'template_h0cqodd',
        templateParams,
        'Ufh2cRbt_N-YMiHi6'
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            car: '',
            service: '',
            message: ''
          });
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        alert('Došlo je do greške pri slanju. Pokušajte ponovo.');
      });
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* HERO */}
      <section
        style={{
          padding: '80px 24px',
          textAlign: 'center',
          background: 'var(--bg-secondary)'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="display-md">
            Kontaktirajte <span style={{ color: 'var(--accent-red)' }}>Nas</span>
          </h1>
          <p className="body-lg">
            Imate pitanja ili želite da zakažete termin? Popunite formu ili nas
            pozovite direktno.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '48px'
          }}
        >
          {/* FORM */}
          <div>
            <h2 className="h1" style={{ marginBottom: '24px' }}>
              Pošaljite Upit
            </h2>

            {submitted ? (
              <div className="success-card">
                <div className="success-icon">
                  <Send size={32} color="#fff" />
                </div>
                <h3 className="h2">Poruka poslata!</h3>
                <p className="body-md">Kontaktiraćemo vas uskoro.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label>Ime i Prezime *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Vaše ime"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="vas@email.com"
                    />
                  </div>

                  <div>
                    <label>Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="069/123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label>Marka i Model Vozila</label>
                  <input
                    type="text"
                    name="car"
                    value={formData.car}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="npr. BMW 520d 2019"
                  />
                </div>

                <div>
                  <label>Tip Usluge</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Izaberite uslugu</option>
                    <option value="maps">Ažuriranje Mapa</option>
                    <option value="unlock">Otključavanje Opcija</option>
                    <option value="chiptuning">Chiptuning</option>
                    <option value="egr-dpf">EGR / DPF / AdBlue OFF</option>
                    <option value="diagnostics">Dijagnostika</option>
                    <option value="other">Ostalo</option>
                  </select>
                </div>

                <div>
                  <label>Poruka</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Dodatne informacije..."
                  />
                </div>
                  <ReCAPTCHA
                    sitekey="6Lc3GlMsAAAAAJuiWUkORA_7tevXA9O9vA30QM1i"
                     onChange={handleCaptcha}
                    />

                <button type="submit" className="btn-red" disabled={loading}>
                  {loading ? 'Šaljem...' : 'Pošalji Upit'}
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div>
            <h2 className="h1" style={{ marginBottom: '24px' }}>
              Kontakt Informacije
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              <a href={`tel:${contactInfo.phone}`} className="contact-card">
                <div className="contact-icon">
                  <Phone size={22} color="var(--accent-red)" />
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Pozovite nas
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 600 }}>
                    {contactInfo.phone}
                  </div>
                </div>
              </a>

              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <Instagram size={22} color="var(--accent-red)" />
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Pratite nas
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 600 }}>
                    {contactInfo.instagram}
                  </div>
                </div>
              </a>

              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={22} color="var(--accent-red)" />
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Radno vreme
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 600 }}>
                    {contactInfo.workingHours}
                  </div>
                </div>
              </div>
            </div>

            {/* INSTAGRAM */}
            <h3 className="h2" style={{ marginBottom: '20px' }}>
              Instagram Feed
            </h3>

            <div className="insta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {instagramPosts.map((post) => (
                <a key={post.id} href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <img src={post.image} alt={post.caption} />
                  <div className="insta-overlay">
                    <Instagram size={22} color="#fff" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;