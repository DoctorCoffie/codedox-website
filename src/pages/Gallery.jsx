import React, { useState } from 'react';
import { galleryItems } from '../mock';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
            Galerija <span style={{ color: 'var(--accent-red)' }}>Radova</span>
          </h1>
          <p className="body-lg">
            Pogledajte primere naših radova na različitim markama i modelima vozila.
            Svaki projekat je izveden sa pažnjom i profesionalizmom.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{
        padding: '80px 24px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: '4/3',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--accent-red)';
                const overlay = e.currentTarget.querySelector('.overlay');
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                const overlay = e.currentTarget.querySelector('.overlay');
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.car}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Overlay */}
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  color: 'white'
                }}>
                  {item.car}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  {item.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'var(--accent-red)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              zIndex: 10000
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <X size={24} style={{ color: 'white' }} />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1200px',
              maxHeight: '90vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.car}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '16px',
                marginBottom: '24px'
              }}
            />
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '24px 32px',
              borderRadius: '16px',
              textAlign: 'center',
              border: '1px solid var(--border-subtle)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                marginBottom: '8px',
                color: 'var(--text-primary)'
              }}>
                {selectedImage.car}
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-secondary)'
              }}>
                {selectedImage.service}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

