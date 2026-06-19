import React from 'react';
import './ComparisonTable.css';

const rows = [
  { feature: 'Works entirely on WhatsApp', reakon: 'yes', zoho: 'no', smartgst: 'no', vyapar: 'no' },
  { feature: 'No app or software to install', reakon: 'yes', zoho: 'no', smartgst: 'no', vyapar: 'no' },
  { feature: 'Recovers ITC from missing/unfiled bills', reakon: 'yes', zoho: 'no', smartgst: 'partial', vyapar: 'partial' },
  { feature: 'Flags risky vendors before deadline', reakon: 'yes', zoho: 'no', smartgst: 'no', vyapar: 'no' },
  { feature: 'Chases your customers for payment', reakon: 'yes', zoho: 'no', smartgst: 'no', vyapar: 'no' },
  { feature: 'Your CA posts P&L to your portal', reakon: 'yes', zoho: 'no', smartgst: 'no', vyapar: 'no' },
  { feature: 'Built for disorganized businesses', reakon: 'yes', zoho: 'no', smartgst: 'no', vyapar: 'no' },
  { feature: 'AI reads your bills automatically', reakon: 'yes', zoho: 'no', smartgst: 'partial', vyapar: 'no' },
  { feature: 'Works alongside your existing CA', reakon: 'yes', zoho: 'partial', smartgst: 'no', vyapar: 'partial' },
];

function Cell({ value }) {
  if (value === 'yes') return <span className="ct__cell ct__cell--yes">✅</span>;
  if (value === 'no') return <span className="ct__cell ct__cell--no">❌</span>;
  if (value === 'partial') return <span className="ct__cell ct__cell--partial">Partial</span>;
  return <span className="ct__cell">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="ct" id="comparison">
      <div className="ct__container">
        <p className="ct__eyebrow">Why Reakon</p>
        <h2 className="ct__h2">Built for how Indian businesses actually work.</h2>
        <p className="ct__intro">
          Most GST tools are built for accountants. Reakon is built for you — the business owner who doesn't have time to learn software, chase portals, or decode reconciliation reports. Here's how we compare.
        </p>

        <div className="ct__table-wrap">
          <table className="ct__table">
            <thead>
              <tr>
                <th className="ct__th ct__th--feature">Feature</th>
                <th className="ct__th ct__th--reakon">
                  <div className="ct__th-reakon-inner">
                    <svg width="16" height="12" viewBox="0 0 28 20" fill="none" style={{display:'inline'}}>
                      <path d="M0 0L8 10L0 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 0L18 10L10 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {' '}Reakon
                  </div>
                </th>
                <th className="ct__th">Zoho Books</th>
                <th className="ct__th">Smart GST Auditor</th>
                <th className="ct__th">Vyapar / TaxOne / Suvit</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="ct__row">
                  <td className="ct__td ct__td--feature">{row.feature}</td>
                  <td className="ct__td ct__td--reakon"><Cell value={row.reakon} /></td>
                  <td className="ct__td"><Cell value={row.zoho} /></td>
                  <td className="ct__td"><Cell value={row.smartgst} /></td>
                  <td className="ct__td"><Cell value={row.vyapar} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="ct__tagline">
          "The others give you software to manage. Reakon just gets you your money."
        </p>
      </div>
    </section>
  );
}
