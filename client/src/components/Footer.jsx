import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="24" height="18" viewBox="0 0 28 20" fill="none">
                <path d="M0 0L8 10L0 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 0L18 10L10 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="footer__logo-text">REAKON</span>
            </div>
            <p className="footer__tagline">Save your money. Get your money.</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links">
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp Us
                </a>
              </li>
              <li><a href="mailto:hello@reakon.in">hello@reakon.in</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Links</h4>
            <ul className="footer__links">
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#for-cas" id="for-cas">For CAs</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              <li>Reakon Technologies Pvt. Ltd.</li>
              <li>Gurgaon, Haryana — 122001</li>
              <li>GSTIN: 06XXXXXXXXXXXXXXX</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Grievance</h4>
            <ul className="footer__links">
              <li>Grievance Officer</li>
              <li><a href="mailto:grievance@reakon.in">grievance@reakon.in</a></li>
              <li>Response within 48 hours</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            GST data accessed via MasterGST (Tera Software Limited) — a licensed GSP. All data stored in India.
          </p>
          <p className="footer__copyright">
            Copyright © 2025 Reakon Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
