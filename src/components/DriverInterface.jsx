import { useState, useEffect } from "react";

const C = {
  dark: "#0F172A", card: "#1E293B", accent: "#FF1A1A",
  teal: "#10B981", amber: "#F59E0B", bg: "#0F172A",
  text: "#F1F5F9", muted: "#94A3B8", border: "#334155",
  danger: "#EF4444", success: "#10B981", white: "#fff",
};

const S = { DASH: 0, ROUTE: 1, PASSENGERS: 2, ALERTS: 3, SHIFT: 4 };

const StatusBar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 20px 4px", fontSize: 12, fontWeight: 600, color: C.text }}>
    <span>06:32</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <span style={{ fontSize: 11, color: C.muted }}>Vodacom</span>
      <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0" y="0" width="19" height="11" rx="2" stroke={C.muted} strokeWidth="1.2" fill="none"/><rect x="1.5" y="1.5" width="10" height="8" rx="1" fill={C.amber}/><rect x="20" y="3.5" width="2" height="4" rx="1" fill={C.muted}/></svg>
    </div>
  </div>
);

const Nav = ({ active, go }) => (
  <div style={{ display: "flex", borderTop: `1px solid ${C.border}`, background: C.card, paddingBottom: 20, paddingTop: 8 }}>
    {[
      { s: S.DASH, icon: "🏠", label: "Início" },
      { s: S.ROUTE, icon: "🗺️", label: "Rota" },
      { s: S.PASSENGERS, icon: "👥", label: "Pax" },
      { s: S.ALERTS, icon: "🔔", label: "Alertas" },
      { s: S.SHIFT, icon: "📊", label: "Turno" },
    ].map(t => (
      <button key={t.s} onClick={() => go(t.s)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, border: "none", background: "none", cursor: "pointer", padding: "4px 0" }}>
        <span style={{ fontSize: 18 }}>{t.icon}</span>
        <span style={{ fontSize: 9, fontWeight: active === t.s ? 700 : 400, color: active === t.s ? C.accent : C.muted }}>{t.label}</span>
      </button>
    ))}
  </div>
);

const DashScreen = ({ go }) => {
  const [online, setOnline] = useState(true);
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ padding: "16px 20px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>Yango Pro · Motorista</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.text, marginTop: 4 }}>Carlos Machava</div>
          </div>
          <button onClick={() => setOnline(!online)} style={{ background: online ? `${C.success}20` : `${C.danger}20`, border: `1px solid ${online ? C.success : C.danger}`, borderRadius: 14, padding: "8px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: online ? C.success : C.danger }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: online ? C.success : C.danger }}>{online ? "ONLINE" : "OFFLINE"}</span>
          </button>
        </div>

        {/* Current Assignment */}
        <div style={{ background: C.accent, borderRadius: 20, padding: "20px", marginBottom: 16 }}>
          <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Rota Atribuída</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Rota 01</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Baixa — Magoanine</div>
            </div>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🚌</div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            {[
              { label: "Bus", value: "MP-0247" },
              { label: "Viagem", value: "3 de 10" },
              { label: "Início", value: "05:45" },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "8px", textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Score */}
        <div style={{ background: C.card, borderRadius: 18, padding: "16px", marginBottom: 12, border: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Conformidade da Rota</div>
            <span style={{ fontSize: 18, fontWeight: 800, color: C.success }}>96%</span>
          </div>
          <div style={{ height: 8, background: C.border, borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "96%", background: `linear-gradient(90deg, ${C.success}, ${C.teal})`, borderRadius: 4 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            <span style={{ fontSize: 10, color: C.muted }}>Desvios hoje: 0</span>
            <span style={{ fontSize: 10, color: C.success }}>✓ No percurso</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[
            { icon: "👥", value: "342", label: "Passageiros Hoje", color: C.teal },
            { icon: "💰", value: "5,130 MT", label: "Receita do Turno", color: C.amber },
            { icon: "🕐", value: "4h 47m", label: "Tempo em Rota", color: "#818CF8" },
            { icon: "⭐", value: "4.7", label: "Avaliação", color: C.accent },
          ].map((s, i) => (
            <div key={i} style={{ background: C.card, borderRadius: 16, padding: "14px", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <span style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</span>
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Fare Log Button */}
        <button onClick={() => go(S.PASSENGERS)} style={{ width: "100%", background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 24 }}>🎫</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Registar Passageiro</div>
              <div style={{ fontSize: 11, color: C.muted }}>Dinheiro, Famba Card, ou código SMS</div>
            </div>
          </div>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" stroke={C.muted} strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  );
};

const RouteScreen = () => {
  const stops = [
    { name: "Praça dos Trabalhadores", status: "completed", time: "05:45", pax: 28 },
    { name: "Av. Guerra Popular", status: "completed", time: "05:53", pax: 14 },
    { name: "Av. Acordos de Lusaka", status: "completed", time: "05:59", pax: 8 },
    { name: "Av. FPLM", status: "current", time: "06:07", pax: 0 },
    { name: "Julius Nyerere", status: "upcoming", time: "06:15", pax: 0 },
    { name: "Av. Lurdes Mutola", status: "upcoming", time: "06:21", pax: 0 },
    { name: "Magoanine Terminal", status: "upcoming", time: "06:32", pax: 0 },
  ];
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      {/* Map placeholder */}
      <div style={{ height: 200, background: "linear-gradient(180deg, #1a2744 0%, #0f1d36 100%)", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0 }} viewBox="0 0 390 200">
          <path d="M 30 180 Q 100 140 180 100 Q 260 60 360 20" stroke={C.accent} strokeWidth="4" fill="none" opacity="0.6"/>
          <path d="M 30 180 Q 100 140 180 100" stroke={C.success} strokeWidth="4" fill="none"/>
          {[[40,175],[100,148],[150,120]].map(([x,y],i) => (
            <circle key={`d${i}`} cx={x} cy={y} r="5" fill={C.success} stroke="#fff" strokeWidth="2"/>
          ))}
          <g transform="translate(180, 100)">
            <circle r="12" fill={C.accent} stroke="#fff" strokeWidth="3"/>
            <text y="4" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">●</text>
          </g>
          {[[230,75],[290,45],[355,22]].map(([x,y],i) => (
            <circle key={`u${i}`} cx={x} cy={y} r="4" fill="none" stroke={C.muted} strokeWidth="1.5" strokeDasharray="2"/>
          ))}
        </svg>
        <div style={{ position: "absolute", bottom: 10, left: 12, background: "rgba(0,0,0,0.7)", borderRadius: 10, padding: "6px 10px", fontSize: 11, color: C.text, fontWeight: 600, backdropFilter: "blur(5px)" }}>
          📍 Próxima paragem: <span style={{ color: C.accent }}>Av. FPLM</span> · 2 min
        </div>
      </div>

      <div style={{ padding: "16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Progresso da Viagem 3/10</div>
        {stops.map((stop, i) => (
          <div key={i} style={{ display: "flex", gap: 12, marginBottom: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24 }}>
              <div style={{
                width: stop.status === "current" ? 16 : 10,
                height: stop.status === "current" ? 16 : 10,
                borderRadius: "50%",
                background: stop.status === "completed" ? C.success : stop.status === "current" ? C.accent : "transparent",
                border: `2.5px solid ${stop.status === "completed" ? C.success : stop.status === "current" ? C.accent : C.border}`,
                flexShrink: 0, zIndex: 1,
              }} />
              {i < stops.length - 1 && <div style={{ width: 2, flex: 1, background: stop.status === "completed" ? `${C.success}60` : C.border, minHeight: 30 }} />}
            </div>
            <div style={{ paddingBottom: 12, flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: 13, fontWeight: stop.status === "current" ? 700 : 500, color: stop.status === "upcoming" ? C.muted : C.text }}>{stop.name}</div>
                <span style={{ fontSize: 11, color: C.muted, fontVariantNumeric: "tabular-nums" }}>{stop.time}</span>
              </div>
              {stop.status === "completed" && (
                <div style={{ fontSize: 10, color: C.success, marginTop: 2 }}>✓ {stop.pax} passageiros</div>
              )}
              {stop.status === "current" && (
                <div style={{ fontSize: 10, color: C.accent, marginTop: 2, fontWeight: 600 }}>● Chegando agora</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PassengerScreen = () => {
  const [mode, setMode] = useState("cash");
  const [logged, setLogged] = useState(false);
  
  if (logged) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, textAlign: "center" }}>
      <div style={{ width: 72, height: 72, borderRadius: 36, background: `${C.success}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 16 }}>✅</div>
      <div style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 6 }}>Registado!</div>
      <div style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>1× bilhete simples · 15 MT · Dinheiro</div>
      <div style={{ background: C.card, borderRadius: 14, padding: "12px 20px", border: `1px solid ${C.border}` }}>
        <span style={{ fontSize: 11, color: C.muted }}>Recibo: </span>
        <span style={{ fontSize: 16, fontWeight: 800, color: C.accent, letterSpacing: "0.08em" }}>RCB-4821</span>
      </div>
      <button onClick={() => setLogged(false)} style={{ marginTop: 20, background: C.accent, color: "#fff", border: "none", borderRadius: 14, padding: "14px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Próximo Passageiro</button>
    </div>
  );
  
  return (
    <div style={{ flex: 1, overflow: "auto", padding: "16px 20px" }}>
      <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 16 }}>Registar Passageiro</div>
      
      {/* Payment mode selector */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
        {[
          { id: "cash", icon: "💵", label: "Dinheiro" },
          { id: "famba", icon: "💳", label: "Famba Card" },
          { id: "sms", icon: "📱", label: "Código SMS" },
          { id: "mpesa", icon: "📲", label: "M-Pesa" },
        ].map(m => (
          <button key={m.id} onClick={() => setMode(m.id)} style={{ background: mode === m.id ? `${C.accent}15` : C.card, border: `2px solid ${mode === m.id ? C.accent : C.border}`, borderRadius: 14, padding: "14px 10px", cursor: "pointer", textAlign: "center" }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>{m.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: mode === m.id ? C.accent : C.text }}>{m.label}</div>
          </button>
        ))}
      </div>
      
      {/* SMS Code input */}
      {mode === "sms" && (
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", marginBottom: 8 }}>Código do Passageiro</div>
          <input placeholder="FMB-XXXX" style={{ width: "100%", background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 16px", color: C.text, fontSize: 18, fontWeight: 700, letterSpacing: "0.1em", outline: "none", textAlign: "center", boxSizing: "border-box" }} />
        </div>
      )}

      {/* Fare summary */}
      <div style={{ background: C.card, borderRadius: 16, padding: "16px", border: `1px solid ${C.border}`, marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: C.muted }}>Tarifa</span>
          <span style={{ fontSize: 20, fontWeight: 800, color: C.text }}>15 MT</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: C.muted }}>Tipo</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>Bilhete Simples</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, color: C.muted }}>Método</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: C.accent }}>{mode === "cash" ? "Dinheiro" : mode === "famba" ? "Famba Card" : mode === "sms" ? "Código SMS" : "M-Pesa"}</span>
        </div>
      </div>
      
      <button onClick={() => setLogged(true)} style={{ width: "100%", background: C.accent, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(255,26,26,0.3)" }}>
        Confirmar · 15 MT
      </button>
      
      {/* Recent log */}
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Últimos Registos</div>
        {[
          { time: "06:28", method: "💵", pax: 1, amount: "15 MT" },
          { time: "06:25", method: "💳", pax: 1, amount: "15 MT" },
          { time: "06:22", method: "📱", pax: 1, amount: "15 MT" },
          { time: "06:18", method: "💵", pax: 3, amount: "45 MT" },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 16 }}>{r.method}</span>
              <div>
                <span style={{ fontSize: 12, color: C.text }}>{r.pax}× passageiro</span>
                <div style={{ fontSize: 10, color: C.muted }}>{r.time}</div>
              </div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.teal }}>{r.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AlertsScreen = () => (
  <div style={{ flex: 1, overflow: "auto", padding: "16px 20px" }}>
    <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 16 }}>Alertas do Sistema</div>
    {[
      { icon: "⚠️", title: "Desvio detectado — Rota 03", desc: "Motorista Rota 03 (MP-0389) desviou 350m na Av. Lusaka. AMT notificado.", time: "12 min", severity: "warning" },
      { icon: "✅", title: "Turno aprovado", desc: "O seu turno 2 (12:00–18:00) foi confirmado para amanhã.", time: "1h", severity: "success" },
      { icon: "📢", title: "Nova política de paragens", desc: "AMT requer paragem obrigatória em todas as paragens oficiais a partir de 01/04.", time: "3h", severity: "info" },
      { icon: "🔧", title: "Manutenção programada", desc: "Bus MP-0247 agendado para revisão em 22/03. Confirme disponibilidade.", time: "5h", severity: "info" },
    ].map((a, i) => (
      <div key={i} style={{ background: C.card, border: `1px solid ${a.severity === "warning" ? `${C.amber}40` : C.border}`, borderRadius: 16, padding: "14px 16px", marginBottom: 10 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{ fontSize: 20 }}>{a.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{a.title}</span>
              <span style={{ fontSize: 10, color: C.muted }}>{a.time}</span>
            </div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 4, lineHeight: 1.5 }}>{a.desc}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ShiftScreen = () => (
  <div style={{ flex: 1, overflow: "auto", padding: "16px 20px" }}>
    <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 16 }}>Resumo do Turno</div>
    
    <div style={{ background: C.accent, borderRadius: 20, padding: "20px", marginBottom: 16, textAlign: "center" }}>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Receita Total do Turno</div>
      <div style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginTop: 4 }}>5,130 <span style={{ fontSize: 16 }}>MT</span></div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>342 passageiros · 3 viagens completas</div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
      {[
        { label: "Dinheiro", value: "3,240 MT", pct: "63%", color: C.amber },
        { label: "Famba Card", value: "1,140 MT", pct: "22%", color: "#818CF8" },
        { label: "M-Pesa", value: "600 MT", pct: "12%", color: C.teal },
        { label: "SMS/USSD", value: "150 MT", pct: "3%", color: C.accent },
      ].map((s, i) => (
        <div key={i} style={{ background: C.card, borderRadius: 14, padding: "12px", border: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", marginBottom: 4 }}>{s.label}</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.value}</div>
          <div style={{ fontSize: 10, color: C.muted }}>{s.pct} do total</div>
        </div>
      ))}
    </div>

    {/* Performance */}
    <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Desempenho</div>
    {[
      { label: "Conformidade da Rota", value: "96%", bar: 96, color: C.success },
      { label: "Pontualidade", value: "88%", bar: 88, color: C.teal },
      { label: "Avaliação Passageiros", value: "4.7/5", bar: 94, color: C.amber },
      { label: "Paragens Cobertas", value: "24/24", bar: 100, color: "#818CF8" },
    ].map((p, i) => (
      <div key={i} style={{ background: C.card, borderRadius: 14, padding: "12px 16px", border: `1px solid ${C.border}`, marginBottom: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: C.text }}>{p.label}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.value}</span>
        </div>
        <div style={{ height: 5, background: C.border, borderRadius: 3, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${p.bar}%`, background: p.color, borderRadius: 3 }} />
        </div>
      </div>
    ))}
  </div>
);

export default function DriverInterface() {
  const [screen, setScreen] = useState(S.DASH);
  return (
    <div style={{ width: 390, height: 844, margin: "20px auto", background: C.bg, borderRadius: 44, overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', boxShadow: "0 25px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)" }}>
      <StatusBar />
      {screen === S.DASH && <DashScreen go={setScreen} />}
      {screen === S.ROUTE && <RouteScreen />}
      {screen === S.PASSENGERS && <PassengerScreen />}
      {screen === S.ALERTS && <AlertsScreen />}
      {screen === S.SHIFT && <ShiftScreen />}
      <Nav active={screen} go={setScreen} />
    </div>
  );
}
