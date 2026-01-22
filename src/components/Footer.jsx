import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../mock';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '80px 24px 40px',
      marginTop: '120px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '60px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'var(--accent-red)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '20px'
              }}>
                CD
              </div>
              <span style={{
                fontSize: '22px',
                fontWeight: 700
              }}>
                CODEDOX<span style={{ color: 'var(--accent-red)' }}>.rs</span>
              </span>
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '24px'
            }}>
              Specijalizovani servis za softverske usluge i tuning automobila. Vaš partner za sve elektronske izmene vozila.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-red)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Brzi Linkovi
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/" style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Početna
              </Link>
              <Link to="/services" style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Usluge
              </Link>
              <Link to="/gallery" style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Galerija
              </Link>
              <Link to="/contact" style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Kontakt
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} style={{ color: 'var(--accent-red)' }} />
                <a href={`tel:${contactInfo.phone}`} style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none'
                }}>
                  {contactInfo.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Instagram size={18} style={{ color: 'var(--accent-red)' }} />
                <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none'
                }}>
                  {contactInfo.instagram}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} style={{ color: 'var(--accent-red)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '14px'
        }}>
          <p>© 2025 CODEDOX.RS - Sva prava zadržana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

