import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Do I need to install any software or app?',
    a: 'No. Reakon works entirely on WhatsApp. You don\'t need to install anything, log into any portal, or change how you work. Just WhatsApp us your bills, and we handle the rest.',
  },
  {
    q: 'Is my GST data safe with Reakon?',
    a: 'Absolutely. All your data is stored in India on secure servers. We are GSTN-licensed and comply with all applicable data protection regulations. We access your GST portal only through MasterGST (Tera Software Limited), a government-authorized GST Suvidha Provider.',
  },
  {
    q: 'How does the ITC recovery work?',
    a: 'Reakon connects to your GST portal and compares your purchase bills with your GSTR-2B (the auto-populated ITC statement). Any bill that was missed, under-claimed, or from a non-compliant vendor is flagged. We tell you exactly how much ITC you\'re eligible to claim and walk you through recovering it.',
  },
  {
    q: 'What if my vendors haven\'t filed their GST returns?',
    a: 'This is one of the most common ways businesses lose ITC. If a vendor doesn\'t file their GSTR-1, the ITC from their invoices disappears from your GSTR-2B. Reakon monitors your key vendors every month and alerts you before you pay them, so you can withhold the GST portion until they file.',
  },
  {
    q: 'How does the customer payment reminder work?',
    a: 'Once your invoices are synced (via Tally, manual upload, or WhatsApp), Reakon tracks due dates and outstanding amounts. When a payment is overdue, we send a professional WhatsApp reminder to your customer automatically. You can customize the tone and frequency.',
  },
  {
    q: 'How does my CA work with Reakon?',
    a: 'Your CA gets a dedicated login to your Reakon portal. They can post your monthly P&L, GST reconciliation, and other financial statements directly. You get a WhatsApp notification the moment they post. No more chasing your CA for numbers.',
  },
  {
    q: 'Is Reakon only for GST-registered businesses?',
    a: 'Currently yes — our core features (ITC recovery, vendor compliance, GST reconciliation) are designed for GST-registered businesses. However, non-GST businesses can still use the cash flow tracking and customer reminder features.',
  },
  {
    q: 'What does the 3-day free trial include?',
    a: 'The 3-day trial includes a full ITC gap analysis (we tell you exactly how much GST credit you\'ve missed), a vendor compliance check across your top suppliers, a demo of the WhatsApp bill-reading feature, and access to your Reakon business portal. No credit card required.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
      <button className="faq__question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <span className="faq__icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="faq__answer-wrap" style={{ maxHeight: isOpen ? '400px' : '0' }}>
        <div className="faq__answer">{faq.a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <h2 className="faq__h2">Frequently Asked Questions</h2>
        <div className="faq__list">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
