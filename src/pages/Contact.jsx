import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo, instagramPosts } from '../mock';
import { Phone, Instagram, MapPin, Clock, Send } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
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
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        background: 'var(--bg-secondary)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 className="display-md" style={{ marginBottom: '20px' }}>
            Kontaktirajte <span style={{ color: 'var(--accent-red)' }}>Nas</span>
          </h1>
          <p className="body-lg">
            Imate pitanja ili želite da zakažete termin? Popunite formu ili nas pozovite direktno.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '48px'
        }}>
          {/* Contact Form */}
          <div>
            <h2 className="h1" style={{ marginBottom: '24px' }}>
              Pošaljite Upit
            </h2>
            
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
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-secondary)'
                  }}>
                    Ime i Prezime *
                  </label>
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

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text-secondary)'
                    }}>
                      Email *
                    </label>
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
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text-secondary)'
                    }}>
                      Telefon *
                    </label>
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
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-secondary)'
                  }}>
                    Marka i Model Vozila
                  </label>
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
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-secondary)'
                  }}>
                    Tip Usluge
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                    style={{ cursor: 'pointer' }}
                  >
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
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-secondary)'
                  }}>
                    Poruka
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Dodatne informacije..."
                  />
                </div>

                <button type="submit" className="btn-red" style={{ width: '100%' }}>
                  Pošalji Upit <Send size={20} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Instagram */}
          <div>
            <h2 className="h1" style={{ marginBottom: '24px' }}>
              Kontakt Informacije
            </h2>

            {/* Contact Cards */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '48px'
            }}>
              <a
                href={`tel:${contactInfo.phone}`}
                style={{
                  textDecoration: 'none',
                  background: 'var(--bg-secondary)',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-red)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-red-bg)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={24} style={{ color: 'var(--accent-red)' }} />
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '4px'
                  }}>
                    Pozovite nas
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    {contactInfo.phone}
                  </div>
                </div>
              </a>

              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  background: 'var(--bg-secondary)',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-red)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-red-bg)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Instagram size={24} style={{ color: 'var(--accent-red)' }} />
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '4px'
                  }}>
                    Pratite nas
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    {contactInfo.instagram}
                  </div>
                </div>
              </a>

              <div style={{
                background: 'var(--bg-secondary)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-red-bg)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={24} style={{ color: 'var(--accent-red)' }} />
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '4px'
                  }}>
                    Radno vreme
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    {contactInfo.workingHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Feed */}
            <h3 className="h2" style={{ marginBottom: '20px' }}>
              Instagram Feed
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {instagramPosts.map((post) => (
                <a
                  key={post.id}
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'relative',
                    aspectRatio: '1',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px'
                  }}>
                    <Instagram size={24} style={{ color: 'white' }} />
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
