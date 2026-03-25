import { useState, useEffect, useMemo } from "react";

const C = {
  teal: "#0D9488", tealDark: "#0A7A70", tealLight: "#CCFBF1",
  gold: "#D97706", goldLight: "#FEF3C7",
  bg: "#F0FDFA", card: "#FFFFFF", dark: "#134E4A", darkCard: "#1A5C56",
  text: "#134E4A", muted: "#6B7280", success: "#10B981", danger: "#EF4444",
  border: "#D1FAE5", mpesa: "#E21B1B", emola: "#FF6B00",
};

const screens = { HOME: 0, ROUTE: 1, LIVE: 2, PAY: 3, TICKET: 4, HISTORY: 5 };

const StatusBar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 20px 4px", fontSize: 12, fontWeight: 600, color: C.dark }}>
    <span>09:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <span style={{ fontSize: 11 }}>Movitel</span>
      <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0" y="0" width="19" height="11" rx="2" stroke={C.dark} strokeWidth="1.2" fill="none"/><rect x="1.5" y="1.5" width="14" height="8" rx="1" fill={C.success}/><rect x="20" y="3.5" width="2" height="4" rx="1" fill={C.dark}/></svg>
    </div>
  </div>
);

const NavBar = ({ active, onChange }) => (
  <div style={{ display: "flex", borderTop: `1px solid ${C.border}`, background: C.card, paddingBottom: 20, paddingTop: 8 }}>
    {[
      { s: screens.HOME, icon: "🗺️", label: "Mover" },
      { s: screens.LIVE, icon: "📍", label: "Ao Vivo" },
      { s: screens.PAY, icon: "💳", label: "Pagar" },
      { s: screens.HISTORY, icon: "📊", label: "Resumo" },
    ].map(t => (
      <button key={t.s} onClick={() => onChange(t.s)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, border: "none", background: "none", cursor: "pointer", padding: "6px 0" }}>
        <span style={{ fontSize: 20 }}>{t.icon}</span>
        <span style={{ fontSize: 10, fontWeight: active === t.s ? 700 : 400, color: active === t.s ? C.teal : C.muted }}>{t.label}</span>
      </button>
    ))}
  </div>
);

const HomeScreen = ({ go }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ background: `linear-gradient(150deg, ${C.dark} 0%, ${C.teal} 100%)`, padding: "20px 20px 32px", borderRadius: "0 0 32px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>Mover Moçambique</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginTop: 4 }}>Para onde?</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 38, height: 38, borderRadius: 14, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🔔</div>
            <div style={{ width: 38, height: 38, borderRadius: 14, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>👤</div>
          </div>
        </div>
        
        {/* Journey planner */}
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: "4px", backdropFilter: "blur(10px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px" }}>
            <div style={{ width: 10, height: 10, borderRadius: 5, background: C.success }} />
            <input value={from} onChange={e => setFrom(e.target.value)} placeholder="De onde?" style={{ flex: 1, background: "none", border: "none", color: "#fff", fontSize: 14, outline: "none" }} />
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "0 14px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px" }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: C.gold }} />
            <input value={to} onChange={e => setTo(e.target.value)} placeholder="Para onde?" style={{ flex: 1, background: "none", border: "none", color: "#fff", fontSize: 14, outline: "none" }} />
          </div>
        </div>
        
        {/* Wallet balance */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: 14, padding: "12px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: C.mpesa, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 800 }}>M</div>
            <div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>M-Pesa</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>2,450 MT</div>
            </div>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: 14, padding: "12px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: C.emola, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 800 }}>e</div>
            <div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>e-Mola</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>1,180 MT</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Suggested Routes */}
      <div style={{ padding: "20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Sugestões Inteligentes</div>
        
        {[
          { icon: "🏢", from: "Casa", to: "Trabalho", routes: "BRT 01 → Chapa 12", time: "42 min", price: "25 MT", transfers: 1, mode: ["BRT", "Chapa"] },
          { icon: "🏫", from: "Casa", to: "Universidade", routes: "CFM Rail → Bus 03", time: "35 min", price: "20 MT", transfers: 1, mode: ["CFM", "Bus"] },
          { icon: "🏥", from: "Casa", to: "Hospital Central", routes: "BRT 01 directo", time: "28 min", price: "15 MT", transfers: 0, mode: ["BRT"] },
        ].map((r, i) => (
          <button key={i} onClick={() => go(screens.ROUTE)} style={{ width: "100%", background: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "16px", marginBottom: 10, cursor: "pointer", textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ fontSize: 24, marginTop: 2 }}>{r.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{r.from} → {r.to}</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{r.routes}</div>
                <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                  {r.mode.map((m, j) => (
                    <span key={j} style={{ fontSize: 9, fontWeight: 700, color: m === "BRT" ? C.teal : m === "CFM" ? C.gold : "#7C3AED", background: m === "BRT" ? C.tealLight : m === "CFM" ? C.goldLight : "#EDE9FE", padding: "3px 8px", borderRadius: 6, textTransform: "uppercase" }}>{m}</span>
                  ))}
                  {r.transfers > 0 && <span style={{ fontSize: 9, fontWeight: 600, color: C.muted, background: "#F3F4F6", padding: "3px 8px", borderRadius: 6 }}>{r.transfers} transfer</span>}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.teal }}>{r.time}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.gold }}>{r.price}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      {/* Daily Pass */}
      <div style={{ margin: "0 20px 20px", background: `linear-gradient(135deg, ${C.gold}15 0%, ${C.teal}10 100%)`, borderRadius: 18, padding: "16px", border: `1px solid ${C.gold}30` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Passe Diário Único</div>
            <div style={{ fontSize: 11, color: C.muted }}>Viagens ilimitadas em todos os modos</div>
          </div>
          <div style={{ background: C.teal, color: "#fff", borderRadius: 12, padding: "8px 14px", fontSize: 14, fontWeight: 800 }}>50 MT</div>
        </div>
      </div>
    </div>
  );
};

const RouteScreen = ({ go, back }) => (
  <div style={{ flex: 1, overflow: "auto" }}>
    <div style={{ padding: "16px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <button onClick={back} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke={C.text} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
        </button>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.text }}>Casa → Trabalho</div>
      </div>
      
      {/* Multi-modal journey */}
      <div style={{ background: C.card, borderRadius: 20, border: `1px solid ${C.border}`, overflow: "hidden" }}>
        {/* Leg 1 */}
        <div style={{ padding: "16px", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: C.success }} />
              <div style={{ width: 2, flex: 1, background: `${C.teal}40`, minHeight: 50 }} />
              <div style={{ width: 10, height: 10, borderRadius: 5, border: `2px solid ${C.teal}`, background: C.card }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>Paragem Costa do Sol</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: C.teal, background: C.tealLight, padding: "3px 8px", borderRadius: 6, textTransform: "uppercase" }}>BRT 01</span>
                <span style={{ fontSize: 11, color: C.muted }}>· 22 min · 3 paragens</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>Estação Julius Nyerere</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: C.muted }}>06:30</div>
              <div style={{ marginTop: 30 }} />
              <div style={{ fontSize: 11, color: C.muted }}>06:52</div>
            </div>
          </div>
        </div>
        
        {/* Transfer indicator */}
        <div style={{ padding: "10px 16px", background: `${C.gold}08`, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 14 }}>🚶</span>
          <span style={{ fontSize: 11, color: C.gold, fontWeight: 600 }}>Transferir · Caminhar 2 min</span>
        </div>
        
        {/* Leg 2 */}
        <div style={{ padding: "16px" }}>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24 }}>
              <div style={{ width: 10, height: 10, borderRadius: 5, border: `2px solid #7C3AED`, background: C.card }} />
              <div style={{ width: 2, flex: 1, background: `#7C3AED40`, minHeight: 40 }} />
              <div style={{ width: 12, height: 12, borderRadius: 3, background: C.gold }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>Paragem Nyerere / Chapa</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: "#7C3AED", background: "#EDE9FE", padding: "3px 8px", borderRadius: 6, textTransform: "uppercase" }}>Chapa 12</span>
                <span style={{ fontSize: 11, color: C.muted }}>· 18 min · 5 paragens</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>Escritório, KaMpfumo</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: C.muted }}>06:54</div>
              <div style={{ marginTop: 30 }} />
              <div style={{ fontSize: 11, color: C.muted }}>07:12</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Summary */}
      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        {[
          { label: "Total", value: "42 min", color: C.teal },
          { label: "Custo", value: "25 MT", color: C.gold },
          { label: "CO₂", value: "-2.1 kg", color: C.success },
        ].map((s, i) => (
          <div key={i} style={{ flex: 1, background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
          </div>
        ))}
      </div>
      
      {/* Pay button */}
      <button onClick={() => go(screens.PAY)} style={{ width: "100%", marginTop: 16, background: C.teal, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${C.teal}40` }}>
        Pagar via Mobile Money · 25 MT
      </button>
      
      {/* Alternative: USSD */}
      <div style={{ textAlign: "center", marginTop: 12 }}>
        <span style={{ fontSize: 12, color: C.muted }}>Sem dados? Marque </span>
        <span style={{ fontSize: 12, fontWeight: 700, color: C.teal }}>*234*1#</span>
      </div>
    </div>
  </div>
);

const LiveScreen = ({ back }) => (
  <div style={{ flex: 1, overflow: "auto" }}>
    {/* Map area */}
    <div style={{ height: 300, background: "linear-gradient(180deg, #E0F2FE 0%, #CCFBF1 100%)", position: "relative", overflow: "hidden" }}>
      {[...Array(10)].map((_, i) => <div key={i} style={{ position: "absolute", left: 0, right: 0, top: i * 35, height: 1, background: "rgba(0,0,0,0.03)" }} />)}
      
      <svg style={{ position: "absolute", inset: 0 }} viewBox="0 0 390 300">
        {/* BRT corridor */}
        <path d="M 30 270 Q 80 220 150 170 Q 220 120 300 60 Q 340 35 370 20" stroke={C.teal} strokeWidth="5" fill="none" opacity="0.7"/>
        <path d="M 50 40 Q 120 80 200 150 Q 260 200 350 250" stroke="#7C3AED" strokeWidth="3" fill="none" strokeDasharray="6,4" opacity="0.5"/>
        
        {/* Buses */}
        <g transform="translate(180, 150)">
          <rect x="-18" y="-10" width="36" height="20" rx="6" fill={C.teal} stroke="#fff" strokeWidth="2"/>
          <text x="0" y="4" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">BRT</text>
        </g>
        <g transform="translate(270, 90)">
          <rect x="-14" y="-8" width="28" height="16" rx="5" fill="#7C3AED" stroke="#fff" strokeWidth="2"/>
          <text x="0" y="3" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">CH</text>
        </g>
        <g transform="translate(100, 210)">
          <rect x="-14" y="-8" width="28" height="16" rx="5" fill={C.gold} stroke="#fff" strokeWidth="2"/>
          <text x="0" y="3" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">CFM</text>
        </g>
      </svg>
      
      {/* Legend */}
      <div style={{ position: "absolute", bottom: 12, left: 12, display: "flex", gap: 6 }}>
        {[
          { color: C.teal, label: "BRT" },
          { color: "#7C3AED", label: "Chapa" },
          { color: C.gold, label: "CFM" },
        ].map((l, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.9)", borderRadius: 8, padding: "4px 8px", display: "flex", alignItems: "center", gap: 4, fontSize: 10, fontWeight: 600, color: C.text }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: l.color }} />{l.label}
          </div>
        ))}
      </div>
    </div>
    
    {/* Nearby transport */}
    <div style={{ padding: "16px 20px" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Próximos de Si</div>
      {[
        { type: "BRT", route: "01", dest: "Magoanine", eta: "2 min", color: C.teal, passengers: "34/52", compliance: 98 },
        { type: "Chapa", route: "12", dest: "KaMpfumo", eta: "5 min", color: "#7C3AED", passengers: "12/15", compliance: 87 },
        { type: "CFM", route: "Lin1", dest: "Matola", eta: "14 min", color: C.gold, passengers: "—", compliance: 100 },
      ].map((b, i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "14px 16px", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ background: `${b.color}15`, color: b.color, fontSize: 9, fontWeight: 800, padding: "6px 8px", borderRadius: 8, textTransform: "uppercase" }}>{b.type}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Rota {b.route} → {b.dest}</div>
                <div style={{ fontSize: 11, color: C.muted }}>{b.passengers} pax</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: b.color }}>{b.eta}</div>
            </div>
          </div>
          {/* Route compliance */}
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ flex: 1, height: 4, background: "#E5E7EB", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${b.compliance}%`, background: b.compliance > 90 ? C.success : C.gold, borderRadius: 2 }} />
            </div>
            <span style={{ fontSize: 10, fontWeight: 600, color: b.compliance > 90 ? C.success : C.gold }}>{b.compliance}%</span>
            <span style={{ fontSize: 9, color: C.muted }}>rota</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PayScreen = ({ go, back }) => {
  const [provider, setProvider] = useState("mpesa");
  const [step, setStep] = useState(0); // 0=select, 1=confirm, 2=done
  
  if (step === 2) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, textAlign: "center" }}>
      <div style={{ width: 80, height: 80, borderRadius: 40, background: `${C.success}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, marginBottom: 20 }}>✅</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 8 }}>Pagamento Confirmado!</div>
      <div style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>Bilhete enviado via SMS e disponível no app</div>
      <div style={{ background: C.card, borderRadius: 16, padding: "16px 24px", border: `1px solid ${C.border}`, marginBottom: 20, width: "100%" }}>
        <div style={{ fontSize: 11, color: C.muted, textTransform: "uppercase", marginBottom: 8 }}>Código SMS</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: C.teal, letterSpacing: "0.1em" }}>MOV-9284</div>
        <div style={{ fontSize: 11, color: C.muted, marginTop: 8 }}>Válido 90 min · Multimodal</div>
      </div>
      <button onClick={() => go(screens.TICKET)} style={{ width: "100%", background: C.teal, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Ver Bilhete</button>
    </div>
  );
  
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={back} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke={C.text} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div style={{ fontSize: 20, fontWeight: 800, color: C.text }}>Pagar Bilhete</div>
        </div>
        
        {/* Amount */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>Valor Total</div>
          <div style={{ fontSize: 48, fontWeight: 800, color: C.teal }}>25 <span style={{ fontSize: 20 }}>MT</span></div>
          <div style={{ fontSize: 12, color: C.muted }}>BRT 01 + Chapa 12 · Passe multimodal</div>
        </div>
        
        {/* Provider selection */}
        <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Pagar com</div>
        {[
          { id: "mpesa", label: "M-Pesa", desc: "Vodacom · 2,450 MT", color: C.mpesa, icon: "M" },
          { id: "emola", label: "e-Mola", desc: "Movitel · 1,180 MT", color: C.emola, icon: "e" },
          { id: "mkesh", label: "Mkesh", desc: "mCel · 340 MT", color: "#1E40AF", icon: "K" },
          { id: "famba", label: "Cartão Famba", desc: "Saldo: 850 MT", color: C.dark, icon: "F" },
        ].map(p => (
          <button key={p.id} onClick={() => setProvider(p.id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, background: provider === p.id ? `${p.color}08` : C.card, border: `2px solid ${provider === p.id ? p.color : C.border}`, borderRadius: 16, padding: "14px 16px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 800 }}>{p.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{p.label}</div>
              <div style={{ fontSize: 11, color: C.muted }}>{p.desc}</div>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${provider === p.id ? p.color : C.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {provider === p.id && <div style={{ width: 12, height: 12, borderRadius: 6, background: p.color }} />}
            </div>
          </button>
        ))}
        
        {/* USSD fallback */}
        <div style={{ background: C.tealLight, borderRadius: 16, padding: "14px 16px", marginTop: 12, marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.dark, marginBottom: 4 }}>Sem smartphone?</div>
          <div style={{ fontSize: 11, color: C.dark, opacity: 0.8 }}>Marque <strong>*234*25*01#</strong> para comprar bilhete por USSD. Recebe SMS com código.</div>
        </div>
        
        <button onClick={() => setStep(2)} style={{ width: "100%", background: C.teal, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${C.teal}40` }}>
          Confirmar Pagamento
        </button>
      </div>
    </div>
  );
};

const TicketScreen = ({ back }) => {
  const [timeLeft, setTimeLeft] = useState(5400);
  useEffect(() => {
    const t = setInterval(() => setTimeLeft(v => Math.max(0, v - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  const qrPattern = useMemo(() => {
    const pattern = [];
    for (let r = 0; r < 12; r++)
      for (let c = 0; c < 12; c++) {
        const corner = (r < 3 && c < 3) || (r < 3 && c > 8) || (r > 8 && c < 3);
        const seed = (r * 12 + c) * 2654435761;
        const fill = corner || ((seed >>> 0) % 100) > 40;
        if (fill) pattern.push({ r, c });
      }
    return pattern;
  }, []);
  const m = Math.floor(timeLeft / 60), s = timeLeft % 60;
  return (
    <div style={{ flex: 1, overflow: "auto", background: C.dark }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={back} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Bilhete Multimodal</div>
        </div>

        {/* Ticket */}
        <div style={{ background: `linear-gradient(145deg, ${C.teal} 0%, ${C.tealDark} 100%)`, borderRadius: 24, padding: "24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: 40, background: "rgba(255,255,255,0.08)" }} />

          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", fontWeight: 600, marginBottom: 4 }}>Mover Moçambique · Bilhete Multimodal</div>

          <div style={{ width: 140, height: 140, margin: "12px auto", background: "#fff", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 100 100" width="120" height="120">
              {qrPattern.map(({ r, c }) => (
                <rect key={`${r}${c}`} x={c*8+2} y={r*8+2} width="7" height="7" rx="1.5" fill={C.dark} />
              ))}
            </svg>
          </div>
          
          <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "0.12em" }}>MOV-9284</div>
          
          {/* Mode badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
            <span style={{ fontSize: 10, fontWeight: 700, background: "rgba(255,255,255,0.2)", color: "#fff", padding: "4px 10px", borderRadius: 8 }}>BRT 01</span>
            <span style={{ fontSize: 10, fontWeight: 700, background: "rgba(255,255,255,0.2)", color: "#fff", padding: "4px 10px", borderRadius: 8 }}>CHAPA 12</span>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16 }}>
            <div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Tarifa</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>25 MT</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.2)" }} />
            <div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Via</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>M-Pesa</div>
            </div>
          </div>
        </div>
        
        {/* Timer */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)" }}>Válido por</div>
          <div style={{ fontSize: 40, fontWeight: 800, color: timeLeft < 600 ? C.danger : C.success, fontVariantNumeric: "tabular-nums" }}>
            {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
          </div>
        </div>
        
        {/* Journey legs */}
        <div style={{ marginTop: 20 }}>
          {[
            { mode: "BRT 01", status: "Activo", color: C.teal, done: true },
            { mode: "Chapa 12", status: "Pendente", color: "#7C3AED", done: false },
          ].map((leg, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: "12px 16px", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: 12, background: leg.done ? C.success : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{leg.done ? "✓" : "○"}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{leg.mode}</span>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: leg.done ? C.success : "rgba(255,255,255,0.4)" }}>{leg.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HistoryScreen = () => (
  <div style={{ flex: 1, overflow: "auto", padding: "16px 20px" }}>
    <div style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 16 }}>Resumo Mensal</div>
    
    {/* Stats grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
      {[
        { label: "Viagens", value: "52", icon: "🚌", color: C.teal },
        { label: "Gastos", value: "780 MT", icon: "💰", color: C.gold },
        { label: "CO₂ Evitado", value: "34 kg", icon: "🌱", color: C.success },
        { label: "Poupança", value: "220 MT", icon: "📈", color: "#7C3AED" },
      ].map((s, i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "16px", textAlign: "center" }}>
          <div style={{ fontSize: 24 }}>{s.icon}</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: s.color, marginTop: 4 }}>{s.value}</div>
          <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
        </div>
      ))}
    </div>
    
    {/* Modal split */}
    <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Por Modo de Transporte</div>
    {[
      { mode: "BRT", trips: 28, pct: 54, color: C.teal },
      { mode: "Chapa", trips: 16, pct: 31, color: "#7C3AED" },
      { mode: "CFM Rail", trips: 8, pct: 15, color: C.gold },
    ].map((m, i) => (
      <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "12px 16px", marginBottom: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{m.mode}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: m.color }}>{m.trips} viagens</span>
        </div>
        <div style={{ height: 6, background: "#E5E7EB", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${m.pct}%`, background: m.color, borderRadius: 3 }} />
        </div>
      </div>
    ))}
  </div>
);

export default function MoverApp() {
  const [screen, setScreen] = useState(screens.HOME);
  const [hist, setHist] = useState([screens.HOME]);
  const go = s => { setHist(h => [...h, s]); setScreen(s); };
  const back = () => { const h = [...hist]; h.pop(); setScreen(h[h.length-1] || screens.HOME); setHist(h.length ? h : [screens.HOME]); };
  const showNav = [screens.HOME, screens.LIVE, screens.PAY, screens.HISTORY].includes(screen);

  return (
    <div style={{ width: 390, height: 844, margin: "20px auto", background: C.bg, borderRadius: 44, overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', boxShadow: "0 25px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)" }}>
      <StatusBar />
      {screen === screens.HOME && <HomeScreen go={go} />}
      {screen === screens.ROUTE && <RouteScreen go={go} back={back} />}
      {screen === screens.LIVE && <LiveScreen back={back} />}
      {screen === screens.PAY && <PayScreen go={go} back={back} />}
      {screen === screens.TICKET && <TicketScreen back={back} />}
      {screen === screens.HISTORY && <HistoryScreen />}
      {showNav && <NavBar active={screen} onChange={go} />}
    </div>
  );
}
