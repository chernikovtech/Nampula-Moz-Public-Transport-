import { Link } from 'react-router-dom'

const LOGO = 'https://avatars.mds.yandex.net/get-lpc/14837328/21641dca-3288-4eeb-8d99-81f8cb31a763/orig'

const s = {
  hero: { background: '#000', color: '#fff', padding: '5rem 0 4rem', textAlign: 'center' },
  container: { maxWidth: 1100, margin: '0 auto', padding: '0 1.87rem' },
  section: { padding: '4rem 0' },
  sectionDark: { padding: '4rem 0', background: '#232323', color: '#F5F5F5' },
  label: { fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7A7A7A', marginBottom: '0.75rem', fontFamily: '"Yango Group Text", sans-serif' },
  labelDark: { fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem', fontFamily: '"Yango Group Text", sans-serif' },
  h2: { fontFamily: '"Yango Headline", sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: '90%', letterSpacing: 'calc(1em/50)', textTransform: 'uppercase', marginBottom: '1.5rem' },
  h3: { fontFamily: '"Yango Headline", sans-serif', fontWeight: 900, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', lineHeight: '90%', letterSpacing: 'calc(1em/50)', textTransform: 'uppercase', marginTop: '2rem', marginBottom: '1rem' },
  card: { background: '#fff', borderRadius: '1.875rem', padding: '2rem', marginBottom: '1.5rem' },
  cardDark: { background: '#323232', borderRadius: '1.875rem', padding: '2rem', marginBottom: '1.5rem' },
  prose: { maxWidth: 760, lineHeight: 1.8, letterSpacing: '0.05em' },
  tag: { display: 'inline-block', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.25rem 0.7rem', borderRadius: '2rem', marginRight: '0.3rem', marginBottom: '0.3rem' },
  stat: { background: '#fff', borderRadius: '1.25rem', padding: '1.25rem', textAlign: 'center' },
  statVal: { fontFamily: '"Yango Headline", sans-serif', fontWeight: 900, fontSize: '1.8rem', lineHeight: 1, color: '#FF1A1A' },
  statLabel: { fontSize: '0.68rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7A7A7A', marginTop: '0.25rem', fontFamily: '"Yango Group Text", sans-serif' },
  demoBtn: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '2rem', padding: '0.7rem 1.25rem', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: '"Yango Group Text", sans-serif', transition: 'opacity 0.2s', marginTop: '1rem' },
}

function Stat({ value, label }) {
  return (
    <div style={s.stat}>
      <div style={s.statVal}>{value}</div>
      <div style={s.statLabel}>{label}</div>
    </div>
  )
}

function Tag({ children, color }) {
  const colors = {
    red: { background: 'rgba(255,26,26,0.1)', color: '#FF1A1A' },
    green: { background: 'rgba(16,185,129,0.1)', color: '#059669' },
    blue: { background: 'rgba(79,70,229,0.1)', color: '#4F46E5' },
    amber: { background: 'rgba(245,158,11,0.1)', color: '#D97706' },
  }
  return <span style={{ ...s.tag, ...(colors[color] || colors.red) }}>{children}</span>
}

function EdgeTable({ rows, dark }) {
  const thStyle = {
    background: dark ? '#141414' : '#232323',
    color: '#fff',
    fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase',
    letterSpacing: '0.12em', padding: '0.85rem 1rem', textAlign: 'left',
    fontFamily: '"Yango Group Text", sans-serif',
  }
  const cellBg = dark ? '#2a2a2a' : '#fff'
  const cellText = dark ? '#e5e5e5' : '#141414'
  const cellMuted = dark ? '#a3a3a3' : '#7A7A7A'
  const cellBorder = dark ? '#3a3a3a' : '#F0F0F0'
  const labelColor = dark ? '#f5f5f5' : '#141414'

  return (
    <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '1.25rem', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: 180 }}>Scenario</th>
            <th style={thStyle}>Response</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={{ padding: '0.75rem 1rem', borderBottom: `1px solid ${cellBorder}`, fontSize: '0.82rem', verticalAlign: 'top', background: cellBg, color: labelColor, fontWeight: 600 }}>{r[0]}</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: `1px solid ${cellBorder}`, fontSize: '0.82rem', verticalAlign: 'top', background: cellBg, color: cellText, lineHeight: 1.6 }}>{r[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ReportPage() {
  return (
    <div>
      {/* HERO */}
      <section style={s.hero}>
        <div style={s.container}>
          <div style={{ ...s.tag, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
            Yango Tech · Smart City · Public Transport
          </div>
          <h1 style={{ fontFamily: '"Yango Headline", sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: '88%', letterSpacing: 'calc(1em/50)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Mozambique Transit<br />UX Design Concepts
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', maxWidth: 700, margin: '0 auto', letterSpacing: '0.05em' }}>
            Mobile ticketing and bus navigation system concepts for Mozambique's Maputo and Nampula metropolitan areas — designed for BRT deployment, the FAMBA electronic ticketing ecosystem, and the 600+ cooperative buses serving 4 million citizens across both cities.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.label}>Market Context</div>
          <h2 style={s.h2}>The Mozambique Transit Challenge</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Stat value="4M+" label="Combined Metro Pop." />
            <Stat value="877" label="Total Buses" />
            <Stat value="2" label="Target Cities" />
            <Stat value="160K" label="Daily Passengers" />
            <Stat value="$250M" label="World Bank Grant" />
            <Stat value="0%" label="Digital Infrastructure" />
          </div>
          <div style={s.prose}>
            <p><strong>Maputo</strong> (3M pop.) presents a paradox: a $250M World Bank-funded BRT system is being built alongside an entirely informal, cash-based, unmonitored fleet of 715 private minibuses across 13 routes. The FAMBA card system was rolled out in 2021 but adoption stalled.</p>
            <p><strong>Nampula</strong> (1M+ pop.), Mozambique's third-largest city and northern economic hub, faces a parallel challenge with 138 buses across 8 routes — entirely undigitized, cash-only, and with zero route compliance monitoring. Nampula's smaller scale makes it an ideal pilot city for rapid deployment before scaling to Maputo.</p>
            <p>Both cities share the same core priority: <strong>track buses to detect driver malpractice in route cutting and fare skimming</strong>. The platform is designed to deploy in both cities with city-specific route data and operator configurations.</p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section style={s.sectionDark}>
        <div style={s.container}>
          <div style={s.labelDark}>Approach</div>
          <h2 style={{ ...s.h2, color: '#fff' }}>Methodology & Technology</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { icon: '📡', title: 'Real-Time GPS Monitoring', desc: 'Every vehicle tracked with sub-30-second position updates. Geofenced route corridors detect deviations instantly. Dispatchers see live fleet status — no more blind spots in network operations.', tags: ['GPS Trackers', 'Geofencing', 'Live Map'] },
              { icon: '🎫', title: 'Unified Fare Collection', desc: 'Multiple payment rails coexist — FAMBA card, mobile money (M-Pesa, e-Mola, Mkesh), USSD for feature phones, and cash with digital receipts. Single-fare multimodal transfers across BRT, cooperatives, and CFM rail.', tags: ['Account-Based', 'FAMBA Integration', 'USSD'] },
              { icon: '📊', title: 'AI-Powered Analytics', desc: 'Passenger demand heatmaps, peak-hour load prediction, route optimization recommendations, and revenue leakage detection. Data-driven decisions replace guesswork for scheduling and fleet allocation.', tags: ['Demand Forecast', 'Route Optimizer', 'Revenue Audit'] },
              { icon: '🔒', title: 'Revenue Transparency', desc: 'Every transaction digitized — from passenger tap to treasury receipt. GPS-based passenger counting cross-referenced with fare collection eliminates cash skimming. Full audit trail for AMT and World Bank reporting.', tags: ['Anti-Fraud', 'Audit Trail', 'Reconciliation'] },
              { icon: '🌐', title: 'Offline-First Architecture', desc: 'Built for Mozambique\'s connectivity reality. Conductor devices sync when back in coverage. USSD works on any phone without data. App caches schedules and route maps for offline access. GPS trackers have independent cellular modules.', tags: ['Offline Sync', '2G Compatible', 'Edge Computing'] },
              { icon: '📱', title: 'Multi-Channel Access', desc: 'Smartphone app for the tech-savvy. USSD *321# for feature phone users. SMS confirmations as universal fallback. Physical FAMBA cards for the digitally excluded. WhatsApp integration for community groups. No user left behind.', tags: ['USSD', 'SMS', 'WhatsApp', 'App'] },
            ].map((item, i) => (
              <div key={i} style={{ ...s.cardDark, border: `1px solid rgba(255,255,255,0.06)` }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {item.tags.map((t, j) => (
                    <span key={j} style={{ fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: '1rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Implementation track record */}
          <div style={{ ...s.cardDark, border: `1px solid rgba(255,255,255,0.06)`, textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>Proven at Scale</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { value: '30+', label: 'Countries' },
                { value: '100M+', label: 'Users Served' },
                { value: '300+', label: 'Cities with BRT' },
                { value: '14', label: 'African Markets' },
              ].map((s2, i) => (
                <div key={i}>
                  <div style={{ fontFamily: '"Yango Headline", sans-serif', fontWeight: 900, fontSize: '1.8rem', color: '#FF1A1A' }}>{s2.value}</div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s2.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THREE STAKEHOLDER VIEWS */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.label}>Stakeholder Interfaces</div>
          <h2 style={s.h2}>Three Views, One Platform</h2>
          <div style={s.prose}>
            <p>Every concept includes interfaces for all three stakeholders in the transit ecosystem. Passengers get route discovery and ticketing. Drivers get navigation, fare logging, and compliance tracking. The transport authority gets real-time fleet monitoring, revenue analytics, and violation management.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { icon: '👤', title: 'Passenger App', desc: 'Route discovery, live bus tracking, ticket purchase (cash/card/mobile money/USSD), QR-based boarding, 90-minute transfer window, trip history with digital receipts.', link: '/concept-1', linkLabel: 'View Passenger Concepts →', color: '#E85D04' },
              { icon: '🚌', title: 'Driver Interface', desc: 'Yango Pro for bus operators. Route navigation with stop-by-stop progress, passenger fare logging (all payment methods), shift revenue summary, compliance score, and AMT alerts.', link: '/driver', linkLabel: 'View Driver Demo →', color: '#FF1A1A' },
              { icon: '📊', title: 'AMT Admin Dashboard', desc: 'Real-time fleet map with 487+ vehicle positions. Route compliance monitoring with automatic violation detection. Revenue analytics by operator, route, and payment method. Revenue leakage estimation.', link: '/admin', linkLabel: 'View Admin Demo →', color: '#FF1A1A' },
            ].map((item, i) => (
              <div key={i} style={{ ...s.card, border: `1px solid ${item.color}20` }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontFamily: '"Yango Headline", sans-serif', fontWeight: 900, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: 'calc(1em/50)', color: item.color, marginBottom: 8 }}>{item.title}</div>
                <p style={{ fontSize: '0.82rem', color: '#7A7A7A', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                <Link to={item.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', borderRadius: '2rem', padding: '0.6rem 1.1rem', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', background: item.color, color: '#fff', fontFamily: '"Yango Group Text", sans-serif' }}>
                  {item.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPT 1 */}
      <section style={s.sectionDark} id="concept-1">
        <div style={s.container}>
          <div style={s.labelDark}>Concept 01</div>
          <div style={{ ...s.cardDark, borderLeft: '5px solid #E85D04', paddingLeft: '1.75rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-0.5rem', right: '1rem', fontFamily: '"Yango Headline"', fontWeight: 900, fontSize: '5rem', lineHeight: 1, color: '#E85D04', opacity: 0.08 }}>01</div>
            <div style={{ fontFamily: '"Yango Headline"', fontWeight: 900, fontSize: '1.6rem', lineHeight: '90%', textTransform: 'uppercase', color: '#E85D04', marginBottom: '0.3rem' }}>Famba Digital</div>
            <div style={{ fontSize: '0.9rem', color: '#E85D04', fontWeight: 500, marginBottom: '1rem' }}>Bridge the cash gap — meet users where they are</div>
            <div style={{ ...s.prose, color: 'rgba(255,255,255,0.65)' }}>
              <p>Famba Digital accepts that Mozambique's urban transit is cash-first and builds a digital layer on top without forcing behavior change. Every cash payment generates a digital receipt. The USSD channel (*321#) works on any phone without data. The smartphone app is a bonus layer, not a prerequisite. The system digitizes revenue from day one while passengers barely notice the transition — deployable in both Maputo and Nampula from launch.</p>
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <Tag color="amber">Cash-First</Tag>
              <Tag color="amber">USSD Fallback</Tag>
              <Tag color="amber">Conductor-Assisted</Tag>
              <Tag color="amber">FAMBA Card Integration</Tag>
            </div>
            <Link to="/concept-1" style={{ ...s.demoBtn, background: '#E85D04', color: '#fff' }}>
              Launch Interactive Demo →
            </Link>
          </div>

          <h3 style={{ ...s.h3, color: '#fff' }}>Workflow Narrative</h3>
          <div style={{ ...s.prose, color: 'rgba(255,255,255,0.65)' }}>
            <p><strong style={{ color: '#fff' }}>Route Discovery:</strong> Passengers discover routes via physical QR signage at stops, USSD *321# for SMS schedule delivery, or the app's route browser with offline-cached schedules and live GPS overlays.</p>
            <p><strong style={{ color: '#fff' }}>Boarding & Payment:</strong> Three simultaneous paths: (a) Cash — conductor taps "cash fare" on ruggedized handheld, optional QR paper receipt printed; (b) FAMBA Card — NFC tap on conductor's reader; (c) USSD — passenger shows SMS code (FMB-XXXX) after paying via M-Pesa through *321#.</p>
            <p><strong style={{ color: '#fff' }}>Route Monitoring:</strong> GPS trackers (mandatory for license renewal) transmit position continuously. If bus deviates 200m+ from route corridor for 60+ seconds, automatic alert fires to AMT dispatch. This is the core anti-fraud mechanism.</p>
            <p><strong style={{ color: '#fff' }}>Transfer:</strong> 90-minute validity window allows free transfer. Second conductor scans QR/FAMBA and recognizes existing valid ticket. Works across BRT, cooperatives, and CFM rail.</p>
            <p><strong style={{ color: '#fff' }}>Post-Trip:</strong> AMT dashboard aggregates fare revenue per route, passenger counts per stop, GPS compliance scores per driver, and peak-hour load factors.</p>
          </div>

          <h3 style={{ ...s.h3, color: '#fff' }}>Edge Cases</h3>
          <EdgeTable dark rows={[
            ['No smartphone', 'USSD *321# on any phone. Cash with paper receipt. Feature phone SMS confirmations.'],
            ['No data/offline', 'App caches routes offline. USSD needs zero data. Conductor device syncs when back in coverage.'],
            ['Phone dies', 'QR paper receipt is fallback. FAMBA card always valid. Conductor stores validation record.'],
            ['Transfer', '90-min ticket window. QR/FAMBA recognized across all AMT operators.'],
            ['Disputed fare', 'Digital receipt (SMS/app) = proof. Conductor device logs all transactions.'],
            ['Subsidy', 'Red FAMBA cards auto-apply subsidy. Student verification via school registration.'],
            ['First-time user', '50+ FAMBA registration booths. App: 3-step onboarding. USSD: zero onboarding.'],
            ['Driver fraud', 'GPS geofencing detects route cutting in 60s. Passenger count vs. revenue reconciliation.'],
          ]} />
        </div>
      </section>

      {/* CONCEPT 2 */}
      <section style={s.section} id="concept-2">
        <div style={s.container}>
          <div style={s.label}>Concept 02</div>
          <div style={{ ...s.card, borderLeft: '5px solid #0D9488', paddingLeft: '1.75rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-0.5rem', right: '1rem', fontFamily: '"Yango Headline"', fontWeight: 900, fontSize: '5rem', lineHeight: 1, color: '#0D9488', opacity: 0.07 }}>02</div>
            <div style={{ fontFamily: '"Yango Headline"', fontWeight: 900, fontSize: '1.6rem', lineHeight: '90%', textTransform: 'uppercase', color: '#0D9488', marginBottom: '0.3rem' }}>Mover</div>
            <div style={{ fontSize: '0.9rem', color: '#0D9488', fontWeight: 500, marginBottom: '1rem' }}>Leapfrog cards — mobile money is the ticket</div>
            <div style={s.prose}>
              <p>Mover treats mobile money (M-Pesa, e-Mola, Mkesh) as the primary fare payment rail. Your phone number is your transit account. The USSD shortcode *234# becomes the universal ticket machine. The app adds multimodal journey planning across BRT, chapa, and CFM rail with a single fare for the whole journey.</p>
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <Tag color="green">Mobile Money Native</Tag>
              <Tag color="green">Multimodal</Tag>
              <Tag color="green">Single Daily Fare</Tag>
              <Tag color="green">Account-Based Ticketing</Tag>
            </div>
            <Link to="/concept-2" style={{ ...s.demoBtn, background: '#0D9488', color: '#fff' }}>
              Launch Interactive Demo →
            </Link>
          </div>

          <h3 style={s.h3}>Workflow Narrative</h3>
          <div style={s.prose}>
            <p><strong>Route Discovery:</strong> AI learns patterns — after 3 trips from the same origin, suggests "Home → Work." Shows all modes ranked by time, cost, transfers. USSD *234# press 1 = "My usual trip" via SMS.</p>
            <p><strong>Payment:</strong> App initiates mobile money payment via integrated M-Pesa/e-Mola API. SMS code (MOV-XXXX) arrives in 5 seconds — this is the ticket. USSD *234*[amount]*[route]# for non-smartphone. Single charge covers entire multimodal journey.</p>
            <p><strong>Validation:</strong> SMS code or QR shown to conductor/station validator. System marks each leg as completed. Same code validates across all operators — no re-payment.</p>
            <p><strong>Revenue:</strong> All money flows through mobile money clearing — no cash. Each operator gets share based on passenger-km from GPS data. Pooled revenue eliminates skimming incentive.</p>
          </div>

          <h3 style={s.h3}>Edge Cases</h3>
          <EdgeTable rows={[
            ['No smartphone', 'USSD *234# is primary interface. 100% functional. SMS ticket codes work for validation.'],
            ['No data/offline', 'USSD needs zero data. App downloads plans offline. SMS codes work without connectivity.'],
            ['Phone dies', 'SMS code already received — recite to conductor. FAMBA card fallback always available.'],
            ['Transfer', 'Single multimodal fare covers all legs. Same code validates across BRT, chapa, CFM.'],
            ['Disputed fare', 'Complete mobile money transaction trail is irrefutable proof.'],
            ['Subsidy', 'Phone number linked to subsidy registry. Discounted fare auto-applies.'],
            ['First-time user', 'Any phone that can dial USSD is ready. App: link one wallet, done.'],
            ['Driver fraud', 'Cashless by design — driver never touches money. GPS compliance scoring continuous.'],
          ]} />
        </div>
      </section>

      {/* CONCEPT 3 */}
      <section style={s.sectionDark} id="concept-3">
        <div style={s.container}>
          <div style={s.labelDark}>Concept 03</div>
          <div style={{ ...s.cardDark, borderLeft: '5px solid #4F46E5', paddingLeft: '1.75rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-0.5rem', right: '1rem', fontFamily: '"Yango Headline"', fontWeight: 900, fontSize: '5rem', lineHeight: 1, color: '#4F46E5', opacity: 0.08 }}>03</div>
            <div style={{ fontFamily: '"Yango Headline"', fontWeight: 900, fontSize: '1.6rem', lineHeight: '90%', textTransform: 'uppercase', color: '#4F46E5', marginBottom: '0.3rem' }}>Xitimela</div>
            <div style={{ fontSize: '0.9rem', color: '#4F46E5', fontWeight: 500, marginBottom: '1rem' }}>Community intelligence — passengers and drivers build the map together</div>
            <div style={{ ...s.prose, color: 'rgba(255,255,255,0.65)' }}>
              <p>"Xitimela" means "to wait for transport" in Changana. This concept crowdsources real-time intelligence from the community. Passengers report where buses are, drivers announce departures, and the network self-organizes. A gamified reputation system incentivizes honest reporting and penalizes driver fraud through social accountability.</p>
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <Tag color="blue">Community-Powered</Tag>
              <Tag color="blue">Crowdsourced Data</Tag>
              <Tag color="blue">Gamified Trust</Tag>
              <Tag color="blue">Driver Reputation</Tag>
            </div>
            <Link to="/concept-3" style={{ ...s.demoBtn, background: '#4F46E5', color: '#fff' }}>
              Launch Interactive Demo →
            </Link>
          </div>

          <h3 style={{ ...s.h3, color: '#fff' }}>Workflow Narrative</h3>
          <div style={{ ...s.prose, color: 'rgba(255,255,255,0.65)' }}>
            <p><strong style={{ color: '#fff' }}>Route Discovery:</strong> Live community feed instead of static schedules. Passengers report sightings ("Chapa 7 left Xipamanine, 8 seats"). Drivers announce departures. Reports verified by other users — confirmations earn reputation points.</p>
            <p><strong style={{ color: '#fff' }}>Payment:</strong> All methods supported, but digital earns 5 bonus points. Points unlock badges and eventually fare discounts. Gamification drives digital adoption without coercion.</p>
            <p><strong style={{ color: '#fff' }}>Anti-Fraud:</strong> Community-powered detection requires 3+ passenger confirmations. Drivers with persistent violations see public reputation drop. A 3.2-rated driver loses passengers to a 4.7-rated driver on the same route.</p>
          </div>

          <h3 style={{ ...s.h3, color: '#fff' }}>Edge Cases</h3>
          <EdgeTable dark rows={[
            ['No smartphone', 'WhatsApp groups (feature phone). USSD *567# for tickets. SMS alerts for saved routes.'],
            ['No data/offline', 'Cached community reports. SMS-based reporting. Retroactive ratings when back online.'],
            ['Phone dies', 'Check-in recorded at boarding. Auto-completed when phone reconnects via location delta.'],
            ['Transfer', 'Community reports indicate shortest waits. Ticket validity window handles fare integration.'],
            ['Disputed fare', 'Pattern evidence from community. 10+ overcharging reports = auto-investigation.'],
            ['Subsidy', 'FAMBA concessions + community "solidarity points" donated by other commuters.'],
            ['First-time user', 'WhatsApp group invite shared via social networks. No account to view feed.'],
            ['Driver fraud', 'Crowdsourced detection (3+ confirmations). Public reputation scores. Market-driven accountability.'],
          ]} />
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section style={s.section} id="comparison">
        <div style={s.container}>
          <div style={s.label}>Analysis</div>
          <h2 style={s.h2}>Comparison Matrix</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '1.25rem', overflow: 'hidden', fontSize: '0.8rem' }}>
              <thead>
                <tr>
                  {['Dimension', '01 · Famba Digital', '02 · Mover', '03 · Xitimela'].map((h, i) => (
                    <th key={i} style={{ background: '#232323', color: '#fff', fontSize: '0.68rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.85rem 0.75rem', textAlign: 'left', fontFamily: '"Yango Group Text", sans-serif' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Adoption Speed', ['5', 'Zero behavior change'], ['4', 'Mobile money widespread'], ['3', 'Needs community building']],
                  ['Technical Complexity', ['4', 'Moderate — conductor devices + GPS'], ['3', 'High — mobile money APIs + clearing'], ['4', 'Moderate — community platform']],
                  ['Operator Buy-In', ['4', 'Cash still flows, GPS mandated'], ['2', 'Cashless = resistance from chapas'], ['3', 'Good drivers benefit, bad resist']],
                  ['Inclusivity', ['5', 'Works with no phone at all'], ['4', 'USSD works, needs mobile money'], ['3', 'App-centric for full experience']],
                  ['Revenue Leakage', ['3', 'GPS good, cash still leaks'], ['5', 'Cashless by design, full audit'], ['4', 'Community detection, reactive']],
                  ['Donor Alignment', ['4', 'Pragmatic, phased approach'], ['5', 'Single-fare multimodal = WB vision'], ['3', 'Innovative but less controllable']],
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.7rem 0.75rem', borderBottom: '1px solid #F5F5F5', fontWeight: 600, whiteSpace: 'nowrap', background: '#fff' }}>{row[0]}</td>
                    {[1, 2, 3].map(c => (
                      <td key={c} style={{ padding: '0.7rem 0.75rem', borderBottom: '1px solid #F5F5F5', background: '#fff', verticalAlign: 'top' }}>
                        <span style={{ display: 'inline-block', width: 26, height: 26, borderRadius: 7, textAlign: 'center', lineHeight: '26px', fontWeight: 700, fontSize: '0.72rem', color: '#fff', background: row[c][0] >= 5 ? '#10B981' : row[c][0] >= 4 ? '#34D399' : row[c][0] >= 3 ? '#FBBF24' : '#F97316', marginRight: 8 }}>{row[c][0]}</span>
                        <span style={{ color: '#7A7A7A' }}>{row[c][1]}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '1.5rem' }}>
            {[
              { name: 'Famba Digital', score: '25/30', color: '#E85D04' },
              { name: 'Mover', score: '23/30', color: '#0D9488' },
              { name: 'Xitimela', score: '20/30', color: '#4F46E5' },
            ].map((c, i) => (
              <div key={i} style={{ ...s.stat }}>
                <div style={{ ...s.statVal, color: c.color }}>{c.score}</div>
                <div style={s.statLabel}>{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDATION */}
      <section style={s.sectionDark} id="recommendation">
        <div style={s.container}>
          <div style={s.labelDark}>Strategic Recommendation</div>
          <h2 style={{ ...s.h2, color: '#fff' }}>Phased Rollout Plan</h2>
          <div style={{ ...s.cardDark, borderLeft: '5px solid #FF1A1A', paddingLeft: '1.75rem' }}>
            <h3 style={{ ...s.h3, marginTop: 0, color: '#FF1A1A' }}>Verdict: Pilot in Nampula, Scale to Maputo</h3>
            <div style={{ ...s.prose, color: 'rgba(255,255,255,0.65)' }}>
              <p>Famba Digital is the right starting concept because it solves the immediate priority — GPS route monitoring and revenue visibility — without requiring behavioral change. Cash still works. The conductor keeps their role. But behind the scenes, every trip is digitized. Nampula's smaller fleet (138 buses) makes it the ideal pilot city for rapid validation before full Maputo deployment.</p>
            </div>
          </div>

          {[
            { phase: 'P1', color: '#E85D04', title: 'Phase 1: Nampula Pilot + Maputo Foundation', time: 'Months 1–6 · $80K–$120K', desc: 'Launch in Nampula first (138 buses, 8 routes) as a rapid pilot — smaller fleet enables faster iteration. Simultaneously deploy GPS trackers on all 739 Maputo buses. Roll out conductor handhelds and USSD *321#. Build AMT compliance dashboard for both cities.' },
            { phase: 'P2', color: '#0D9488', title: 'Phase 2: Mover Migration', time: 'Months 6–18 · Aligned with BRT Launch', desc: 'Scale Nampula learnings to Maputo. Introduce multimodal journey planner and mobile money rails when BRT corridors come online. Implement revenue pooling for BRT routes. Integrate CFM rail. Begin cashless migration on high-compliance routes in both cities.' },
            { phase: 'P3', color: '#4F46E5', title: 'Phase 3: Community Layer', time: 'Months 18–36 · Full Ecosystem', desc: "Layer Xitimela's community features — crowdsourced reporting, driver reputation, community groups — on top of the now-digitized system across both Maputo and Nampula. By this point, enough users have digital habits to sustain the platform." },
          ].map((p, i) => (
            <div key={i} style={{ ...s.cardDark, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, borderRadius: 22, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: '"Yango Headline"', fontWeight: 900, fontSize: '1rem', flexShrink: 0 }}>{p.phase}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff' }}>{p.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', fontFamily: '"Yango Group Text", sans-serif' }}>{p.time}</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ background: '#000', padding: '2.5rem 0', textAlign: 'center' }}>
        <img src={LOGO} alt="Yango Tech" style={{ filter: 'invert(1)', height: 22, marginBottom: '0.75rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', letterSpacing: '0.05em' }}>Mozambique Transit UX Concepts · Yango Tech Smart City Division · March 2026</p>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.62rem', letterSpacing: '0.05em', marginTop: '0.3rem' }}>Prepared for Nampula Municipality / AMT / Maputo Municipality · Confidential</p>
      </section>
    </div>
  )
}
