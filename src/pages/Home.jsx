import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Award, TrendingUp } from 'lucide-react';
import { services } from '../mock';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 20, 20, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="animate-fade-in" style={{
            marginBottom: '24px'
          }}>
            <span style={{
              display: 'inline-block',
              background: 'var(--accent-red-bg)',
              color: 'var(--accent-red)',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
              border: '1px solid var(--accent-red)'
            }}>
              Profesionalni Softverski Servis
            </span>
          </div>

          <h1 className="display-lg" style={{
            marginBottom: '24px',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Otključajte Pravi<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-red) 0%, rgb(255, 80, 80) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Potencijal Vozila
            </span>
          </h1>

          <p className="body-lg" style={{
            maxWidth: '700px',
            margin: '0 auto 48px',
            color: 'var(--text-secondary)'
          }}>
            Specijalizovani servis za chiptuning, kodiranje i softverske usluge automobila.
            Povećajte performanse, aktivirajte skrivene funkcije i optimizujte vozilo.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/services" className="btn-red">
              Pogledaj Usluge <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Zakaži Termin
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            marginTop: '80px',
            maxWidth: '900px',
            margin: '80px auto 0'
          }}>
            {[
              { icon: Zap, label: 'Brza Usluga', value: '1-2h' },
              { icon: Shield, label: 'Garancija', value: '100%' },
              { icon: Award, label: 'Iskustvo', value: '5+ god' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} style={{
                  padding: '24px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-red)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
                >
                  <Icon size={32} style={{ color: 'var(--accent-red)', marginBottom: '12px' }} />
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    marginBottom: '4px'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)'
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{
        padding: '100px 24px',
        background: 'var(--bg-secondary)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="display-md" style={{ marginBottom: '16px' }}>
              Naše <span style={{ color: 'var(--accent-red)' }}>Usluge</span>
            </h2>
            <p className="body-lg">
              Profesionalne softverske usluge za sve marke vozila
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--accent-red-bg)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <TrendingUp size={28} style={{ color: 'var(--accent-red)' }} />
                </div>
                <h3 className="h3" style={{ marginBottom: '12px' }}>
                  {service.title}
                </h3>
                <p className="body-md" style={{ marginBottom: '20px' }}>
                  {service.description}
                </p>
                <Link to="/services" style={{
                  color: 'var(--accent-red)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  Saznaj više <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn-red">
              Sve Usluge <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(255, 20, 20, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 className="display-md" style={{ marginBottom: '24px' }}>
            Spremni za Upgrade?
          </h2>
          <p className="body-lg" style={{ marginBottom: '40px' }}>
            Kontaktirajte nas danas i zakažite termin za analizu vašeg vozila.
            Naš stručni tim je tu da vam pomogne.
          </p>
          <Link to="/contact" className="btn-red glow-effect">
            Zakažite Termin <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

