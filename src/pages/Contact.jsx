import React, { useState } from 'react';
import { contactInfo, instagramPosts } from '../mock';
import { Phone, Instagram, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
      'service_3evlhzt',      // Service ID
      'template_h0cqodd',     // Template ID
      {
        ime_i_prezime: formData.name,
        email: formData.email,
        telefon: formData.phone,
        vozilo: formData.car,
        usluga: formData.service,
        poruka: formData.message
      },
      'Ufh2cRbt_N-YMiHi6'    // Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
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
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Došlo je do greške pri slanju. Pokušajte ponovo.');
    });
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="display-md" style={{ marginBottom: '20px' }}>
            Kontaktirajte <span style={{ color: 'var(--accent-red)' }}>Nas</span>
          </h1>
          <p className="body-lg">
            Imate pitanja ili želite da zakažete termin? Popunite formu ili nas pozovite direktno.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '48px' }}>
          <div>
            <h2 className="h1" style={{ marginBottom: '24px' }}>Pošaljite Upit</h2>

            {submitted ? (
              <div style={{
                background: 'var(--accent-red-bg)',
                border: '2px solid var(--accent-red)',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'var(--accent-red)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <Send size={32} style={{ color: 'white' }} />
                </div>
                <h3 className="h2" style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Poruka Poslata!
                </h3>
                <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                  Hvala vam! Kontaktiraćemo vas uskoro.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label>Ime i Prezime *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Vaše ime" />
                </div>
                <div>
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="vas@email.com" />
                </div>
                <div>
                  <label>Telefon *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="069/123-4567" />
                </div>
                <div>
                  <label>Vozilo</label>
                  <input type="text" name="car" value={formData.car} onChange={handleChange} placeholder="npr. BMW 520d 2019" />
                </div>
                <div>
                  <label>Usluga</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Izaberite uslugu</option>
                    <option value="maps">Ažuriranje Mapa</option>
                    <option value="unlock">Otključavanje Opcija</option>
                    <option value="chiptuning">Chiptuning</option>
                    <option value="egr-dpf">EGR/DPF/AdBlue Off</option>
                    <option value="diagnostics">Dijagnostika</option>
                    <option value="other">Ostalo</option>
                  </select>
                </div>
                <div>
                  <label>Poruka</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Dodatne informacije..." />
                </div>
                <button type="submit">Pošalji Upit <Send size={20} /></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
