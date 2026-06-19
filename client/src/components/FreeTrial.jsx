import React from 'react';
import './FreeTrial.css';

export default function FreeTrial() {
  return (
    <section className="ft" id="trial">
      <div className="ft__container">
        <h2 className="ft__h2">See how much GST money you're losing — free for 3 days.</h2>
        <p className="ft__body">
          In your 3-day free trial, Reakon connects to your GST portal, runs a full ITC gap analysis, checks your vendors for filing compliance, and shows you exactly how much money you've been leaving on the table — no credit card required.
        </p>

        <div className="ft__ctas">
          <a href="#trial-form" className="ft__btn ft__btn--filled">Start 3-Day Free Trial</a>
          <a href="#book-call" className="ft__btn ft__btn--outline">Book a Call Now</a>
        </div>

        <div className="ft__wa-section">
          <div className="ft__wa-number">+91 98765 43210</div>
          <p className="ft__wa-label">or scan to chat on WhatsApp</p>
          <div className="ft__qr-placeholder">
            <div className="ft__qr-inner">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.487.669 4.817 1.836 6.82L2 30l7.38-1.817A13.932 13.932 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                <path d="M22.5 19.5c-.3-.15-1.77-.873-2.044-.972-.274-.1-.474-.15-.673.15-.2.3-.773.972-.946 1.17-.173.2-.347.22-.647.075-.3-.15-1.265-.465-2.41-1.485-.89-.795-1.49-1.775-1.665-2.075-.175-.3-.018-.46.13-.605.135-.13.3-.345.45-.517.15-.173.2-.3.3-.497.1-.2.05-.375-.025-.524-.075-.15-.673-1.62-.922-2.22-.243-.582-.49-.503-.673-.512l-.573-.01c-.2 0-.524.075-.8.375-.274.3-1.047 1.023-1.047 2.494 0 1.47 1.072 2.893 1.221 3.093.15.2 2.11 3.22 5.11 4.513.714.308 1.272.492 1.707.63.717.228 1.37.195 1.886.118.575-.085 1.77-.723 2.02-1.42.25-.698.25-1.298.175-1.42-.074-.12-.274-.195-.574-.345z" fill="#fff"/>
              </svg>
              <span>QR Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
