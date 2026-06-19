import React from 'react';
import './WhatWeProvide.css';
import { useInView } from './useIntersectionObserver';

export default function WhatWeProvide() {
  const [ref1, inView1] = useInView(0.3);
  const [ref2, inView2] = useInView(0.3);
  const [ref3, inView3] = useInView(0.3);
  const [ref4, inView4] = useInView(0.3);

  return (
    <section className="wwp" id="what-we-provide">
      <div className="wwp__container">
        <p className="wwp__eyebrow">What Reakon Does</p>
        <h2 className="wwp__h2">Four ways we protect your money.</h2>

        {/* Feature 1: WhatsApp ITC — animation LEFT, text RIGHT */}
        <div className="wwp__feature" ref={ref1}>
          <div className={`wwp__anim-wrap${inView1 ? ' animation-active' : ''}`}>
            <div className="wwp__phone-frame">
              <div className="wwp__wa-header">
                <div className="wwp__wa-avatar">R</div>
                <div>
                  <div className="wwp__wa-name">Reakon GST Bot</div>
                  <div className="wwp__wa-status">Online</div>
                </div>
              </div>
              <div className="wwp__wa-chat">
                <div className={`wwp__msg wwp__msg--out${inView1 ? ' wwp__anim-1' : ''}`}>
                  <div className="wwp__bubble wwp__bubble--out wwp__bubble--img">
                    <span>🧾</span> Sharma_Invoice_May.jpg
                  </div>
                  <span className="wwp__time">10:32 AM ✓✓</span>
                </div>
                <div className={`wwp__typing${inView1 ? ' wwp__anim-2' : ''}`}>
                  <span></span><span></span><span></span>
                </div>
                <div className={`wwp__msg wwp__msg--in${inView1 ? ' wwp__anim-3' : ''}`}>
                  <div className="wwp__bubble wwp__bubble--in">
                    Got it ✅ Reading your bill...
                  </div>
                  <span className="wwp__time">10:32 AM</span>
                </div>
                <div className={`wwp__msg wwp__msg--in${inView1 ? ' wwp__anim-4' : ''}`}>
                  <div className="wwp__bubble wwp__bubble--in wwp__bubble--highlight">
                    You just saved <strong>₹5,000</strong> in ITC this month 💰
                  </div>
                  <span className="wwp__time">10:33 AM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wwp__text">
            <span className="wwp__feature-num">01</span>
            <h3 className="wwp__feature-h3">Forward a bill. See your money.</h3>
            <p className="wwp__feature-body">
              Just WhatsApp us your bill — any photo, PDF, or screenshot. Reakon reads it instantly, matches it to your GSTR-2B, and tells you exactly how much ITC you've recovered. No software to learn, no portal to log into. Just a message.
            </p>
            <div className="wwp__feature-tags">
              <span className="wwp__tag">ITC Recovery</span>
              <span className="wwp__tag">WhatsApp First</span>
              <span className="wwp__tag">Zero Setup</span>
            </div>
          </div>
        </div>

        {/* Feature 2: CA Posts P&L — animation RIGHT, text LEFT */}
        <div className="wwp__feature wwp__feature--reverse" ref={ref2}>
          <div className="wwp__text">
            <span className="wwp__feature-num">02</span>
            <h3 className="wwp__feature-h3">See your numbers the moment they're ready.</h3>
            <p className="wwp__feature-body">
              Your CA posts your P&L, balance sheet, and GST reconciliation directly to your Reakon portal. You get a WhatsApp ping the moment it's live. No more waiting for month-end calls. No more "can you send me the P&L" on a Sunday morning.
            </p>
            <div className="wwp__feature-tags">
              <span className="wwp__tag">CA Collaboration</span>
              <span className="wwp__tag">Real-Time P&L</span>
              <span className="wwp__tag">Instant Alerts</span>
            </div>
          </div>
          <div className={`wwp__anim-wrap${inView2 ? ' animation-active' : ''}`} ref={ref2}>
            <div className="wwp__dashboard-frame">
              <div className="wwp__dash-header">
                <span className="wwp__dash-title">Business Portal</span>
                <span className={`wwp__dash-notif${inView2 ? ' wwp__dash-notif-anim' : ''}`}>New update 🔔</span>
              </div>
              <div className={`wwp__pl-doc${inView2 ? ' wwp__pl-doc-anim' : ''}`}>
                <div className="wwp__pl-header">
                  <span>P&L Statement</span>
                  <span className="wwp__pl-date">June 2025</span>
                </div>
                <div className={`wwp__pl-row wwp__pl-row--success${inView2 ? ' wwp__pl-num-anim-1' : ''}`}>
                  <span>Revenue</span>
                  <span>₹12,40,000</span>
                </div>
                <div className={`wwp__pl-row${inView2 ? ' wwp__pl-num-anim-2' : ''}`}>
                  <span>Expenses</span>
                  <span>₹8,20,000</span>
                </div>
                <div className={`wwp__pl-row wwp__pl-row--profit${inView2 ? ' wwp__pl-num-anim-3' : ''}`}>
                  <span>Profit</span>
                  <span>₹4,20,000</span>
                </div>
                <div className="wwp__pl-ca">Posted by your CA · June 2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Customer Reminders — animation LEFT, text RIGHT */}
        <div className="wwp__feature" ref={ref3}>
          <div className={`wwp__anim-wrap${inView3 ? ' animation-active' : ''}`}>
            <div className="wwp__invoice-frame">
              <div className="wwp__inv-header">Outstanding Invoices</div>
              {[
                { name: 'ABC Corp', amount: '₹45,000', status: 'overdue', days: '32 days' },
                { name: 'Mehta & Co.', amount: '₹28,500', status: 'overdue', days: '18 days' },
                { name: 'Reddy Traders', amount: '₹62,000', status: 'paid', days: '' },
                { name: 'Kumar Exports', amount: '₹19,800', status: 'due', days: '5 days' },
              ].map((inv, i) => (
                <div key={i} className={`wwp__inv-row wwp__inv-row--${inv.status}${inView3 ? ` wwp__inv-anim-${i + 1}` : ''}`}>
                  <span className="wwp__inv-name">{inv.name}</span>
                  <span className="wwp__inv-amount">{inv.amount}</span>
                  <span className="wwp__inv-status">
                    {inv.status === 'paid' ? '✅ Paid' : inv.status === 'overdue' ? `⚠️ ${inv.days} overdue` : `Due in ${inv.days}`}
                  </span>
                </div>
              ))}
              <div className={`wwp__inv-wa-msg${inView3 ? ' wwp__inv-wa-anim' : ''}`}>
                <span className="wwp__inv-wa-icon">💬</span>
                <span>Reminder sent to ABC Corp via WhatsApp</span>
              </div>
              <div className={`wwp__inv-summary${inView3 ? ' wwp__inv-summary-anim' : ''}`}>
                ₹1,80,000 collected this month
              </div>
            </div>
          </div>
          <div className="wwp__text">
            <span className="wwp__feature-num">03</span>
            <h3 className="wwp__feature-h3">The customers who owe you — handled.</h3>
            <p className="wwp__feature-body">
              Reakon automatically tracks all your outstanding invoices and sends polite, professional payment reminders on WhatsApp at exactly the right time. No awkward follow-up calls. No spreadsheets. Just money showing up in your account.
            </p>
            <div className="wwp__feature-tags">
              <span className="wwp__tag">Auto Reminders</span>
              <span className="wwp__tag">Invoice Tracking</span>
              <span className="wwp__tag">Collections</span>
            </div>
          </div>
        </div>

        {/* Feature 4: Vendor Risk — animation RIGHT, text LEFT */}
        <div className="wwp__feature wwp__feature--reverse" ref={ref4}>
          <div className="wwp__text">
            <span className="wwp__feature-num">04</span>
            <h3 className="wwp__feature-h3">Know which vendors are costing you.</h3>
            <p className="wwp__feature-body">
              Every month, Reakon checks whether your vendors have filed their GST returns. If they haven't, your ITC claim is at risk. We flag these vendors before you pay them — so you can withhold the GST amount and protect your credit.
            </p>
            <div className="wwp__feature-tags">
              <span className="wwp__tag">Vendor Risk Scoring</span>
              <span className="wwp__tag">ITC Protection</span>
              <span className="wwp__tag">Pre-payment Alerts</span>
            </div>
          </div>
          <div className={`wwp__anim-wrap${inView4 ? ' animation-active' : ''}`}>
            <div className="wwp__vendor-frame">
              <div className="wwp__vendor-header">Vendor GST Compliance</div>
              {[
                { name: 'Sharma Traders', filed: true },
                { name: 'XYZ Supplies', filed: false },
                { name: 'Patel & Bros', filed: true },
                { name: 'Gupta Imports', filed: false },
                { name: 'Singh Logistics', filed: true },
              ].map((v, i) => (
                <div key={i} className={`wwp__vendor-row${inView4 ? ` wwp__vendor-anim-${i + 1}` : ''}`}>
                  <span className={`wwp__vendor-dot wwp__vendor-dot--${v.filed ? 'ok' : 'risk'}`}></span>
                  <span className="wwp__vendor-name">{v.name}</span>
                  <span className={`wwp__vendor-status wwp__vendor-status--${v.filed ? 'ok' : 'risk'}`}>
                    {v.filed ? 'Filed ✓' : '⚠️ Not Filed'}
                  </span>
                </div>
              ))}
              <div className={`wwp__vendor-alert${inView4 ? ' wwp__vendor-alert-anim' : ''}`}>
                <strong>2 vendors haven't filed.</strong><br />
                ₹14,200 of your ITC is at risk.<br />
                <span className="wwp__vendor-action">Withhold GST amount on next payment →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
