import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__container">
        <a href="#" className="header__logo">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="header__chevron">
            <path d="M0 0L8 10L0 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 0L18 10L10 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="header__logo-text">REAKON</span>
        </a>

        <nav className="header__nav">
          <a href="#how-it-works" className="header__nav-link">How it works</a>
          <a href="#comparison" className="header__nav-link">How we're better</a>
          <a href="#faq" className="header__nav-link">FAQ</a>
          <a href="#for-cas" className="header__nav-link">For CAs</a>
        </nav>

        <div className="header__right">
          <span className="header__made-in">Made in India 🇮🇳</span>
          <a href="#book-call" className="header__cta-btn">Book a Call</a>
        </div>

        <button
          className={`header__hamburger${menuOpen ? ' header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`header__drawer${menuOpen ? ' header__drawer--open' : ''}`}>
        <nav className="header__drawer-nav">
          <a href="#how-it-works" className="header__drawer-link" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#comparison" className="header__drawer-link" onClick={() => setMenuOpen(false)}>How we're better</a>
          <a href="#faq" className="header__drawer-link" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#for-cas" className="header__drawer-link" onClick={() => setMenuOpen(false)}>For CAs</a>
          <a href="#book-call" className="header__drawer-cta" onClick={() => setMenuOpen(false)}>Book a Call</a>
        </nav>
      </div>
    </header>
  );
}
