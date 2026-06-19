import React from 'react';
import './WhyChoose.css';

const cards = [
  {
    icon: '🟢',
    title: 'Easy WhatsApp Access',
    body: 'No app to download, no portal to navigate, no password to remember. Everything happens on WhatsApp — where you and your team already live. Send a bill, get an answer. It\'s that simple.',
    accent: '#10B981',
  },
  {
    icon: '📊',
    title: 'Full Transparency',
    body: 'See your ITC balance, P&L, outstanding invoices, and vendor risks in one place. Your CA can post directly to your portal. No more calling to ask "what\'s my profit this month?"',
    accent: '#F59E0B',
  },
  {
    icon: '🤝',
    title: 'Your CA, But Smoother',
    body: 'Reakon doesn\'t replace your CA — it makes them more powerful. They post your financials directly. You get alerts. Nothing falls through the cracks, and your CA spends less time on follow-up calls.',
    accent: '#3B82F6',
  },
];

export default function WhyChoose() {
  return (
    <section className="wc" id="why-choose">
      <div className="wc__container">
        <h2 className="wc__h2">Why Businesses Choose Reakon</h2>
        <div className="wc__cards">
          {cards.map((card, i) => (
            <div key={i} className="wc__card" style={{'--accent': card.accent}}>
              <div className="wc__card-icon">{card.icon}</div>
              <h3 className="wc__card-title">{card.title}</h3>
              <p className="wc__card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
