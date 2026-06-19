import React from 'react';
import './CustomerSuccess.css';

const reviews = [
  {
    name: 'Rajesh Gupta',
    company: 'Gupta Textiles, Ludhiana',
    text: 'Reakon recovered ₹1.2 lakh in ITC we didn\'t even know we were missing. The WhatsApp feature is genius.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Sharma Exports, Surat',
    text: 'Finally, a tool that works the way we do. No apps, no logins, just WhatsApp. Our CA loves it too.',
    stars: 5,
  },
  {
    name: 'Amit Agarwal',
    company: 'Agarwal Steel Works, Raipur',
    text: 'Our vendor flagging alone has saved us 3 lakhs this quarter. Can\'t imagine going back.',
    stars: 5,
  },
  {
    name: 'Sunita Mehta',
    company: 'Mehta Pharmaceuticals, Ahmedabad',
    text: 'Customer payment reminders on WhatsApp — we reduced our outstanding invoices by 60% in the first month.',
    stars: 5,
  },
  {
    name: 'Vikram Singh',
    company: 'VS Construction, Delhi NCR',
    text: 'Setup took 10 minutes. CA was impressed. Money started showing up within the week.',
    stars: 5,
  },
  {
    name: 'Kavitha Reddy',
    company: 'Reddy Agro Exports, Hyderabad',
    text: 'The P&L visibility alone is worth the subscription. We actually know our numbers now.',
    stars: 5,
  },
  {
    name: 'Manoj Kumar',
    company: 'Kumar Auto Parts, Pune',
    text: 'Reakon caught ₹80,000 in risky ITC before we filed. That one alert paid for a year\'s subscription.',
    stars: 5,
  },
  {
    name: 'Deepa Nair',
    company: 'Nair Hospitality Group, Kochi',
    text: 'Used to chase customers awkwardly. Now Reakon does it politely. Collections improved by 45%.',
    stars: 5,
  },
  {
    name: 'Ravi Bansal',
    company: 'Bansal Electronics, Jaipur',
    text: 'Finally transparency into our finances without calling CA every week. Brilliant product.',
    stars: 5,
  },
  {
    name: 'Sanjay Patel',
    company: 'Patel Trading Co., Vadodara',
    text: 'Simple, powerful, Indian. Exactly what we needed. Highly recommend for any business owner.',
    stars: 5,
  },
  {
    name: 'Neha Joshi',
    company: 'Joshi Logistics, Nagpur',
    text: 'The vendor risk alerts are a game changer. We withheld from 3 vendors and protected our GST credit.',
    stars: 5,
  },
  {
    name: 'Arjun Verma',
    company: 'Verma Infrastructure, Chandigarh',
    text: 'Our CA posts P&L directly. No more month-end calls. Worth every rupee.',
    stars: 5,
  },
];

function ReviewCard({ review }) {
  return (
    <div className="cs__card">
      <div className="cs__stars">
        {'★'.repeat(review.stars)}
      </div>
      <p className="cs__review-text">"{review.text}"</p>
      <div className="cs__reviewer">
        <div className="cs__reviewer-avatar">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="cs__reviewer-name">{review.name}</div>
          <div className="cs__reviewer-company">{review.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function CustomerSuccess() {
  const row1 = reviews.slice(0, 6);
  const row2 = reviews.slice(6, 12);

  return (
    <section className="cs">
      <div className="cs__container">
        <h2 className="cs__h2">What our clients say</h2>
      </div>

      {/* Row 1: scrolling left */}
      <div className="cs__marquee-wrap">
        <div className="cs__marquee cs__marquee--left">
          <div className="cs__marquee-inner">
            {[...row1, ...row1].map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: scrolling right */}
      <div className="cs__marquee-wrap">
        <div className="cs__marquee cs__marquee--right">
          <div className="cs__marquee-inner">
            {[...row2, ...row2].map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
