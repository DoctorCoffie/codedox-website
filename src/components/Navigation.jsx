import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Početna', path: '/' },
    { name: 'Usluge', path: '/services' },
    { name: 'Galerija', path: '/gallery' },
    { name: 'Kontakt', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(15, 15, 17, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
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
            fontSize: '20px',
            color: 'white'
          }}>
            CD
          </div>
          <span style={{
            fontSize: '22px',
            fontWeight: 700,
            color: 'var(--text-primary)'
          }}>
            CODEDOX<span style={{ color: 'var(--accent-white)' }}>.RS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: isActive(link.path) ? 'var(--accent-red)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '16px',
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-red)'}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  e.target.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {link.name}
              {isActive(link.path) && (
                <div style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent-red)'
                }} />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '24px'
        }} className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '16px',
                textDecoration: 'none',
                color: isActive(link.path) ? 'var(--accent-red)' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '18px',
                borderLeft: isActive(link.path) ? '3px solid var(--accent-red)' : '3px solid transparent',
                marginBottom: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
