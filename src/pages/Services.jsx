import React from 'react';
import { services } from '../mock';
import { Map, Unlock, Gauge, Settings, Search, Cpu, Check } from 'lucide-react';

const iconMap = {
  Map: Map,
  Unlock: Unlock,
  Gauge: Gauge,
  Settings: Settings,
  Search: Search,
  Cpu: Cpu
};

const Services = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 20, 20, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <h1 className="display-md" style={{ marginBottom: '20px' }}>
            Naše <span style={{ color: 'var(--accent-red)' }}>Usluge</span>
          </h1>
          <p className="body-lg">
            Specijalizovani softverski servis za sve marke automobila.
            Profesionalna oprema i dugogodišnje iskustvo garantuju kvalitet.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        padding: '100px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                {/* Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'var(--accent-red-bg)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Icon size={32} style={{ color: 'var(--accent-red)' }} />
                </div>

                {/* Title & Description */}
                <h3 className="h2" style={{ marginBottom: '16px' }}>
                  {service.title}
                </h3>
                <p className="body-md" style={{
                  marginBottom: '24px',
                  flexGrow: 1
                }}>
                  {service.description}
                </p>

                {/* Features */}
                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '24px'
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {service.features.map((feature, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          background: 'var(--accent-red)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={14} style={{ color: 'white' }} />
                        </div>
                        <span style={{
                          color: 'var(--text-secondary)',
                          fontSize: '15px'
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Info */}
                <div style={{
                  marginTop: '24px',
                  padding: '16px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <span style={{
                    color: 'var(--text-muted)',
                    fontSize: '14px'
                  }}>
                    Cena: <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>Kontaktirajte nas za ponudu</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{
        padding: '100px 24px',
        background: 'var(--bg-secondary)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 className="display-md" style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            Zašto Odabrati <span style={{ color: 'var(--accent-red)' }}>CODEDOX.rs</span>?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                title: 'Profesionalna Oprema',
                description: 'Koristimo najnoviju dijagnostičku i tuning opremu za sve marke vozila.'
              },
              {
                title: 'Iskusni Tim',
                description: 'Naš tim ima više od 5 godina iskustva u softverskim uslugama automobila.'
              },
              {
                title: 'Garancija Kvaliteta',
                description: 'Pružamo garanciju na sve izvršene usluge i stojimo iza našeg rada.'
              },
              {
                title: 'Brza Usluga',
                description: 'Većina usluga se obavlja u roku od 1-2 sata.'
              }
            ].map((item, index) => (
              <div key={index} style={{
                padding: '32px',
                background: 'var(--bg-primary)',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-red)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <h3 className="h3" style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="body-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
