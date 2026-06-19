import React from 'react';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="fcta">
      <div className="fcta__container">
        <h2 className="fcta__h2">Your money has been leaking long enough.</h2>
        <p className="fcta__body">
          Every month you wait, GST credits expire, overdue invoices age out, and risky vendors go unchecked. Reakon fixes all of that — in 10 minutes, on WhatsApp, with no disruption to how you work.
        </p>
        <div className="fcta__ctas">
          <a href="#trial" className="fcta__btn fcta__btn--amber">Start 3-Day Free Trial</a>
          <a href="#book-call" className="fcta__btn fcta__btn--outline">Book a Call Now</a>
        </div>
        <p className="fcta__note">No credit card required · Setup in 10 minutes · Cancel anytime</p>
      </div>
    </section>
  );
}
