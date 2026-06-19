import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Watermark chevron */}
      <div className="hero__watermark" aria-hidden="true">
        <svg width="500" height="360" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L8 10L0 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 0L18 10L10 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* India badge top right */}
      <div className="hero__india-badge">🇮🇳 Made in India</div>

      <div className="hero__container">
        {/* Eyebrow */}
        <p className="hero__eyebrow">For Indian Businesses</p>

        {/* H1 */}
        <h1 className="hero__h1">
          Protecting GST money of<br />Indian businesses like<br />never before
        </h1>

        {/* Subheadline */}
        <p className="hero__sub">
          Recovering the GST credit you're losing, chases the customers who owe you, and flags the vendors who put your money at risk — all on WhatsApp, without changing how you work.
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <a href="#book-call" className="btn btn--amber">Book a Call Now</a>
          <a href="#trial" className="btn btn--outline">Start 3-Day Free Trial</a>
        </div>

        {/* Trust strip */}
        <div className="hero__trust">
          <span>✅ GSTN-licensed</span>
          <span className="hero__trust-dot">·</span>
          <span>🇮🇳 Data stored in India</span>
          <span className="hero__trust-dot">·</span>
          <span>🤝 Works with your CA</span>
        </div>

        {/* Mockup section */}
        <div className="hero__mockup-row" id="how-it-works">
          {/* Data flow left */}
          <div className="hero__flow">
            <div className="hero__flow-title">Your data sources</div>
            <div className="hero__flow-inputs">
              {['GST Portal', 'Tally', 'Bank Account', 'Import Files', 'WhatsApp'].map(src => (
                <div key={src} className="hero__flow-input">{src}</div>
              ))}
            </div>
            <div className="hero__flow-arrow-right">→</div>
            <div className="hero__flow-center">REAKON</div>
            <div className="hero__flow-arrow-right">→</div>
            <div className="hero__flow-outputs">
              {['ITC Claimed', 'Customer Alerts', 'Vendor Risk'].map(out => (
                <div key={out} className="hero__flow-output">{out}</div>
              ))}
            </div>
          </div>

          {/* MacBook mockup */}
          <div className="hero__devices">
            <div className="hero__macbook">
              <div className="hero__macbook-screen">
                <div className="hero__macbook-bar">
                  <span className="hero__macbook-dot red"></span>
                  <span className="hero__macbook-dot yellow"></span>
                  <span className="hero__macbook-dot green"></span>
                  <span className="hero__macbook-title">Reakon Business Portal</span>
                </div>
                <div className="hero__macbook-content">
                  <div className="hero__portal-scroll">
                    <div className="hero__portal-rows">
                      {[
                        { label: 'ITC Claimed — Apr 2025', value: '₹1,24,500', status: 'success' },
                        { label: 'Vendor Risk Flag — Sharma Traders', value: '₹14,200 at risk', status: 'danger' },
                        { label: 'Outstanding Invoice — ABC Corp', value: '₹45,000 overdue', status: 'warning' },
                        { label: 'P&L — March 2025', value: 'Profit ₹4,20,000', status: 'success' },
                        { label: 'ITC Claimed — Mar 2025', value: '₹98,700', status: 'success' },
                        { label: 'Vendor Risk Flag — XYZ Supplies', value: '₹8,600 at risk', status: 'danger' },
                        { label: 'Customer Alert — Mehta & Co.', value: 'Reminder sent ✅', status: 'success' },
                        { label: 'ITC Recovery — Feb 2025', value: '₹67,300', status: 'success' },
                        { label: 'ITC Claimed — Apr 2025', value: '₹1,24,500', status: 'success' },
                        { label: 'Vendor Risk Flag — Sharma Traders', value: '₹14,200 at risk', status: 'danger' },
                        { label: 'Outstanding Invoice — ABC Corp', value: '₹45,000 overdue', status: 'warning' },
                        { label: 'P&L — March 2025', value: 'Profit ₹4,20,000', status: 'success' },
                      ].map((row, i) => (
                        <div key={i} className={`hero__portal-row hero__portal-row--${row.status}`}>
                          <span className="hero__portal-label">{row.label}</span>
                          <span className="hero__portal-value">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__macbook-chin"></div>
              <div className="hero__macbook-base"></div>
            </div>

            {/* Arrow to phone */}
            <div className="hero__device-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <path d="M5 20 Q30 5 55 20" stroke="#F59E0B" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
                <polygon points="55,14 55,26 63,20" fill="#F59E0B"/>
              </svg>
              <span className="hero__device-arrow-label">Quick. Easy. Simple.</span>
            </div>

            {/* iPhone mockup */}
            <div className="hero__iphone">
              <div className="hero__iphone-screen">
                <div className="hero__iphone-wa-header">
                  <div className="hero__iphone-wa-avatar">R</div>
                  <div>
                    <div className="hero__iphone-wa-name">Reakon WhatsApp Bot</div>
                    <div className="hero__iphone-wa-status">Online</div>
                  </div>
                </div>
                <div className="hero__iphone-chat">
                  <div className="hero__chat-msg hero__chat-msg--out hero__chat-anim-1">
                    <div className="hero__chat-bubble hero__chat-bubble--out">
                      📄 Bill from Sharma Traders.jpg
                    </div>
                    <span className="hero__chat-time">10:32 AM</span>
                  </div>
                  <div className="hero__chat-typing hero__chat-anim-2">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="hero__chat-msg hero__chat-msg--in hero__chat-anim-3">
                    <div className="hero__chat-bubble hero__chat-bubble--in">
                      Got it ✅ Reading your bill...
                    </div>
                    <span className="hero__chat-time">10:32 AM</span>
                  </div>
                  <div className="hero__chat-msg hero__chat-msg--in hero__chat-anim-4">
                    <div className="hero__chat-bubble hero__chat-bubble--in">
                      You just saved <strong>₹5,000</strong> in ITC this month 💰
                    </div>
                    <span className="hero__chat-time">10:33 AM</span>
                  </div>
                </div>
              </div>
              <div className="hero__iphone-home"></div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="hero__social-proof">
          <p className="hero__social-title">Trusted by businesses across India</p>
          <div className="hero__badges">
            {['MasterGST', 'GSTN Licensed', 'WhatsApp Business API', 'Make in India', 'Startup India', 'ISO 27001'].map(b => (
              <span key={b} className="hero__badge">{b}</span>
            ))}
          </div>
          <div className="hero__stat">₹2.3 Cr+ GST recovered for clients</div>
        </div>

        {/* Intro video section */}
        <div className="hero__intro">
          <div className="hero__video-mockup">
            <div className="hero__video-thumb">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(245,158,11,0.15)"/>
                <polygon points="20,16 36,24 20,32" fill="#F59E0B"/>
              </svg>
              <span className="hero__video-label">Launch Video</span>
            </div>
          </div>
          <div className="hero__intro-text">
            <h3 className="hero__intro-h3">Introducing Reakon</h3>
            <ul className="hero__intro-list">
              <li>
                <span className="hero__intro-icon">🤖</span>
                <span>Reakon answers your questions 24/7</span>
              </li>
              <li>
                <span className="hero__intro-icon">🏦</span>
                <span>Connect unlimited banks, expense accounts, GST portal.</span>
              </li>
              <li>
                <span className="hero__intro-icon">📊</span>
                <span>Keep track of cash flow and other key metrics — burn, revenue, expenses.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
