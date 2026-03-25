import { useState } from "react";

const C = {
  bg: "#F8FAFC", card: "#FFFFFF", dark: "#0F172A", darkCard: "#1E293B",
  text: "#0F172A", muted: "#64748B", border: "#E2E8F0",
  red: "#FF1A1A", teal: "#0D9488", amber: "#F59E0B",
  success: "#10B981", danger: "#DC2626", indigo: "#4F46E5",
};

const tabs = { OVERVIEW: 0, FLEET: 1, COMPLIANCE: 2, REVENUE: 3, ROUTES: 4 };

const StatusBar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 20px 4px", fontSize: 12, fontWeight: 600, color: C.text }}>
    <span>14:22</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <span style={{ fontSize: 11, color: C.muted }}>AMT WiFi</span>
      <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0" y="0" width="19" height="11" rx="2" stroke={C.text} strokeWidth="1.2" fill="none"/><rect x="1.5" y="1.5" width="16" height="8" rx="1" fill={C.success}/><rect x="20" y="3.5" width="2" height="4" rx="1" fill={C.text}/></svg>
    </div>
  </div>
);

const TabBar = ({ active, go }) => (
  <div style={{ display: "flex", gap: 4, padding: "8px 12px", overflowX: "auto" }}>
    {[
      { s: tabs.OVERVIEW, label: "Geral" },
      { s: tabs.FLEET, label: "Frota" },
      { s: tabs.COMPLIANCE, label: "Conformidade" },
      { s: tabs.REVENUE, label: "Receita" },
      { s: tabs.ROUTES, label: "Rotas" },
    ].map(t => (
      <button key={t.s} onClick={() => go(t.s)} style={{
        background: active === t.s ? C.red : "transparent",
        border: active === t.s ? "none" : `1px solid ${C.border}`,
        borderRadius: 10,
        padding: "7px 14px",
        fontSize: 11, fontWeight: 600,
        color: active === t.s ? "#fff" : C.muted,
        cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
      }}>
        {t.label}
      </button>
    ))}
  </div>
);

const KPI = ({ value, label, delta, color, icon }) => (
  <div style={{ background: C.card, borderRadius: 16, padding: "14px", border: `1px solid ${C.border}` }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      {delta && <span style={{ fontSize: 10, fontWeight: 700, color: delta.startsWith("+") ? C.success : C.danger, background: delta.startsWith("+") ? `${C.success}15` : `${C.danger}15`, padding: "2px 6px", borderRadius: 6 }}>{delta}</span>}
    </div>
    <div style={{ fontSize: 20, fontWeight: 800, color: color || C.text }}>{value}</div>
    <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{label}</div>
  </div>
);

const MiniBar = ({ value, max, color }) => (
  <div style={{ height: 5, background: C.border, borderRadius: 3, overflow: "hidden", flex: 1 }}>
    <div style={{ height: "100%", width: `${(value/max)*100}%`, background: color, borderRadius: 3 }} />
  </div>
);

const CITIES = {
  maputo: { name: "Maputo Metropolitano", vehicles: "487", passengers: "84,210", revenue: "1.26M MT", compliance: "91.4%", zones: [
    { name: "BAIXA", pax: "28,400", x: 20, y: 10, w: 80, h: 50, color: C.danger },
    { name: "MATOLA", pax: "18,200", x: 120, y: 15, w: 70, h: 45, color: C.amber },
    { name: "ZIMPETO", pax: "12,800", x: 210, y: 20, w: 60, h: 40, color: C.teal },
    { name: "MAGOAN.", pax: "8,100", x: 290, y: 25, w: 55, h: 35, color: C.indigo },
    { name: "KAMPFUMO", pax: "14,600", x: 60, y: 70, w: 65, h: 35, color: C.amber },
  ]},
  nampula: { name: "Nampula Cidade", vehicles: "138", passengers: "31,400", revenue: "420K MT", compliance: "84.7%", zones: [
    { name: "CENTRO", pax: "12,100", x: 20, y: 10, w: 80, h: 50, color: C.danger },
    { name: "MUHALA", pax: "7,800", x: 120, y: 15, w: 70, h: 45, color: C.amber },
    { name: "NAMICOPO", pax: "5,200", x: 210, y: 20, w: 60, h: 40, color: C.teal },
    { name: "NAPIPINE", pax: "3,600", x: 290, y: 25, w: 55, h: 35, color: C.indigo },
    { name: "MUTAUANHA", pax: "2,700", x: 60, y: 70, w: 65, h: 35, color: C.amber },
  ]},
};

const OverviewScreen = ({ city }) => {
  const c = CITIES[city];
  return (
  <div style={{ flex: 1, overflow: "auto", padding: "12px 16px" }}>
    {/* Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
      <div>
        <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>AMT · Painel de Controlo</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.text }}>{c.name}</div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: 4, background: C.success, marginTop: 6 }} />
        <span style={{ fontSize: 11, color: C.success, fontWeight: 600 }}>AO VIVO</span>
      </div>
    </div>

    {/* KPIs */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
      <KPI icon="🚌" value={c.vehicles} label="Veículos Activos" delta="+12" color={C.teal} />
      <KPI icon="👥" value={c.passengers} label="Passageiros Hoje" delta="+8%" color={C.indigo} />
      <KPI icon="💰" value={c.revenue} label="Receita Hoje" delta="+5%" color={C.amber} />
      <KPI icon="📊" value={c.compliance} label="Conformidade Média" delta="+2.1%" color={C.success} />
    </div>

    {/* Live Alerts */}
    <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Alertas em Tempo Real</div>
    {(city === "maputo" ? [
      { icon: "🔴", text: "Rota 05 · MP-0421 desviou 400m — corte de rota detectado", time: "2 min", action: "Investigar" },
      { icon: "🟡", text: "Rota 12 · Congestionamento Av. Mondlane — 3 buses atrasados", time: "8 min", action: "Redirigir" },
      { icon: "🔴", text: "Rota 07 · Sobrepreço reportado (25 MT vs 15 MT oficial)", time: "15 min", action: "Notificar" },
    ] : [
      { icon: "🔴", text: "Rota 02 · NP-0087 desviou 600m — corte na Av. Mondlane", time: "3 min", action: "Investigar" },
      { icon: "🔴", text: "Rota 05 · Sobrepreço reportado (20 MT vs 10 MT oficial)", time: "10 min", action: "Notificar" },
      { icon: "🟡", text: "Rota 01 · NP-0134 atraso 20 min na saída de Muhala Exp.", time: "18 min", action: "Contactar" },
    ]).map((a, i) => (
      <div key={i} style={{ background: C.card, border: `1px solid ${a.icon === "🔴" ? `${C.danger}30` : `${C.amber}30`}`, borderRadius: 14, padding: "10px 12px", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 14 }}>{a.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: C.text, lineHeight: 1.4 }}>{a.text}</div>
          <div style={{ fontSize: 9, color: C.muted, marginTop: 2 }}>{a.time} atrás</div>
        </div>
        <button style={{ background: C.red, color: "#fff", border: "none", borderRadius: 8, padding: "5px 10px", fontSize: 9, fontWeight: 700, cursor: "pointer" }}>{a.action}</button>
      </div>
    ))}

    {/* Heatmap placeholder */}
    <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 14, marginBottom: 8 }}>Mapa de Calor — Passageiros por Zona</div>
    <div style={{ background: C.card, borderRadius: 16, border: `1px solid ${C.border}`, padding: 12, height: 140, position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 350 110" width="100%">
        {c.zones.map((z, i) => (
          <g key={i}>
            <rect x={z.x} y={z.y} width={z.w} height={z.h} rx="8" fill={z.color} opacity={0.3 - i * 0.04}/>
            <text x={z.x + z.w/2} y={z.y + z.h/2 - 2} textAnchor="middle" fontSize="8" fontWeight="700" fill={z.color}>{z.name}</text>
            <text x={z.x + z.w/2} y={z.y + z.h/2 + 10} textAnchor="middle" fontSize="7" fill={C.text}>{z.pax} pax</text>
          </g>
        ))}
      </svg>
    </div>
  </div>
  );
};

const FLEET_DATA = {
  maputo: {
    summary: [
      { label: "Em Rota", value: "487", color: C.success },
      { label: "No Terminal", value: "142", color: C.amber },
      { label: "Offline", value: "110", color: C.danger },
    ],
    operators: [
      { name: "Cooperativa Fénix", buses: 52, active: 45, compliance: 94, revenue: "182K MT" },
      { name: "Cooperativa Estrela", buses: 48, active: 41, compliance: 89, revenue: "156K MT" },
      { name: "TPM-TUR (Público)", buses: 24, active: 22, compliance: 98, revenue: "98K MT" },
      { name: "Cooperativa Sol", buses: 38, active: 32, compliance: 86, revenue: "124K MT" },
      { name: "MetroBus", buses: 45, active: 43, compliance: 97, revenue: "210K MT" },
    ],
  },
  nampula: {
    summary: [
      { label: "Em Rota", value: "102", color: C.success },
      { label: "No Terminal", value: "24", color: C.amber },
      { label: "Offline", value: "12", color: C.danger },
    ],
    operators: [
      { name: "Coop. Estrela do Norte", buses: 34, active: 28, compliance: 82, revenue: "68K MT" },
      { name: "Transnampula", buses: 26, active: 22, compliance: 88, revenue: "54K MT" },
      { name: "Coop. Progresso", buses: 22, active: 18, compliance: 79, revenue: "42K MT" },
      { name: "Auto-Nampula (Público)", buses: 18, active: 16, compliance: 92, revenue: "38K MT" },
      { name: "Coop. Unidade", buses: 38, active: 18, compliance: 75, revenue: "32K MT" },
    ],
  },
};

const FleetScreen = ({ city }) => {
  const data = FLEET_DATA[city];
  return (
  <div style={{ flex: 1, overflow: "auto", padding: "12px 16px" }}>
    <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 12 }}>Estado da Frota</div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
      {data.summary.map((s, i) => (
        <div key={i} style={{ background: C.card, borderRadius: 12, padding: "12px", textAlign: "center", border: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</div>
          <div style={{ fontSize: 9, color: C.muted, textTransform: "uppercase" }}>{s.label}</div>
        </div>
      ))}
    </div>

    {/* Operator breakdown */}
    <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Por Operador</div>
    {data.operators.map((op, i) => (
      <div key={i} style={{ background: C.card, borderRadius: 14, padding: "12px 14px", border: `1px solid ${C.border}`, marginBottom: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{op.name}</div>
            <div style={{ fontSize: 10, color: C.muted }}>{op.active}/{op.buses} activos · {op.revenue}</div>
          </div>
          <span style={{ fontSize: 14, fontWeight: 800, color: op.compliance >= 95 ? C.success : op.compliance >= 90 ? C.amber : C.danger }}>{op.compliance}%</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <MiniBar value={op.compliance} max={100} color={op.compliance >= 95 ? C.success : op.compliance >= 90 ? C.amber : C.danger} />
        </div>
      </div>
    ))}
  </div>
  );
};

const COMPLIANCE_DATA = {
  maputo: {
    rate: "91.4%", deviations: "12", overcharges: "4", skippedStops: "8",
    violations: [
      { bus: "MP-0421", driver: "João Tembe", route: "05", type: "Corte de rota", severity: "high", time: "14:18", detail: "Desvio 400m na Av. Lurdes Mutola — 3 paragens ignoradas", confirmed: 5 },
      { bus: "MP-0298", driver: "Antonio Macie", route: "07", type: "Sobrepreço", severity: "high", time: "13:52", detail: "Cobrou 25 MT — tarifa oficial 15 MT. 4 reportes de passageiros.", confirmed: 4 },
      { bus: "MP-0156", driver: "Pedro Cossa", route: "12", type: "Paragem ignorada", severity: "medium", time: "13:30", detail: "Paragem Av. FPLM ignorada — sem passageiros reportados a bordo", confirmed: 2 },
      { bus: "MP-0332", driver: "Carlos Bila", route: "03", type: "Atraso", severity: "low", time: "12:45", detail: "15 min atraso na saída do terminal Museu", confirmed: 0 },
    ],
  },
  nampula: {
    rate: "84.7%", deviations: "18", overcharges: "9", skippedStops: "14",
    violations: [
      { bus: "NP-0087", driver: "Amade Rachid", route: "02", type: "Corte de rota", severity: "high", time: "14:05", detail: "Desvio 600m na Av. Eduardo Mondlane — 4 paragens ignoradas", confirmed: 7 },
      { bus: "NP-0134", driver: "Manuel Ernesto", route: "05", type: "Sobrepreço", severity: "high", time: "13:40", detail: "Cobrou 20 MT — tarifa oficial 10 MT. 6 reportes de passageiros.", confirmed: 6 },
      { bus: "NP-0056", driver: "Ismael Daúdo", route: "01", type: "Paragem ignorada", severity: "medium", time: "13:15", detail: "Paragem Muhala Expansão ignorada — 3 passageiros reclamaram", confirmed: 3 },
      { bus: "NP-0098", driver: "Paulo Taímo", route: "03", type: "Corte de rota", severity: "high", time: "12:30", detail: "Rota cortada em Namicopo — voltou ao centro sem completar", confirmed: 4 },
    ],
  },
};

const ComplianceScreen = ({ city }) => {
  const data = COMPLIANCE_DATA[city];
  return (
  <div style={{ flex: 1, overflow: "auto", padding: "12px 16px" }}>
    <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 12 }}>Conformidade de Rotas</div>
    
    {/* Summary */}
    <div style={{ background: `linear-gradient(135deg, ${C.dark}, #1a2744)`, borderRadius: 18, padding: "16px", marginBottom: 14, color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Taxa Global de Conformidade</div>
          <div style={{ fontSize: 32, fontWeight: 800, marginTop: 4 }}>{data.rate}</div>
        </div>
        <div style={{ width: 56, height: 56, borderRadius: 28, border: `3px solid ${parseFloat(data.rate) >= 90 ? C.success : C.amber}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 28 28"><path d="M6 14 L12 20 L22 8" stroke={parseFloat(data.rate) >= 90 ? C.success : C.amber} strokeWidth="3" fill="none" strokeLinecap="round"/></svg>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        {[
          { label: "Desvios/dia", value: data.deviations, color: C.danger },
          { label: "Sobrepreços", value: data.overcharges, color: C.amber },
          { label: "Paragens ignoradas", value: data.skippedStops, color: "#818CF8" },
        ].map((s, i) => (
          <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "8px", textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Violation list */}
    <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Violações Recentes</div>
    {data.violations.map((v, i) => (
      <div key={i} style={{ background: C.card, border: `1px solid ${v.severity === "high" ? `${C.danger}30` : v.severity === "medium" ? `${C.amber}30` : C.border}`, borderRadius: 14, padding: "12px", marginBottom: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: "#fff", background: v.severity === "high" ? C.danger : v.severity === "medium" ? C.amber : C.muted, padding: "2px 6px", borderRadius: 4, textTransform: "uppercase" }}>{v.type}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{v.bus}</span>
          </div>
          <span style={{ fontSize: 10, color: C.muted }}>{v.time}</span>
        </div>
        <div style={{ fontSize: 11, color: C.text, lineHeight: 1.5, marginBottom: 6 }}>{v.detail}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 10, color: C.muted }}>Motorista: {v.driver} · Rota {v.route}</span>
          {v.confirmed > 0 && <span style={{ fontSize: 9, fontWeight: 600, color: C.danger, background: `${C.danger}10`, padding: "2px 6px", borderRadius: 4 }}>{v.confirmed} confirmações</span>}
        </div>
      </div>
    ))}
  </div>
  );
};

const REVENUE_DATA = {
  maputo: {
    chart: [
      { day: "Seg", val: 1.1 }, { day: "Ter", val: 1.18 }, { day: "Qua", val: 1.05 },
      { day: "Qui", val: 1.22 }, { day: "Sex", val: 1.31 }, { day: "Sáb", val: 0.86 }, { day: "Hoje", val: 1.26 },
    ],
    chartMax: 1.4,
    payments: [
      { method: "Dinheiro (via cobrador)", pct: 58, amount: "730K MT", color: C.amber, trend: "-3%" },
      { method: "Famba Card", pct: 22, amount: "277K MT", color: C.indigo, trend: "+5%" },
      { method: "M-Pesa / e-Mola", pct: 14, amount: "176K MT", color: C.teal, trend: "+12%" },
      { method: "USSD / SMS", pct: 6, amount: "76K MT", color: C.red, trend: "+8%" },
    ],
    leakage: { pct: "~8.2%", amount: "103K MT/dia", detail: "Rotas 05 e 07 concentram 62% da fuga" },
  },
  nampula: {
    chart: [
      { day: "Seg", val: 0.38 }, { day: "Ter", val: 0.41 }, { day: "Qua", val: 0.36 },
      { day: "Qui", val: 0.43 }, { day: "Sex", val: 0.45 }, { day: "Sáb", val: 0.28 }, { day: "Hoje", val: 0.42 },
    ],
    chartMax: 0.5,
    payments: [
      { method: "Dinheiro (via cobrador)", pct: 78, amount: "328K MT", color: C.amber, trend: "-1%" },
      { method: "M-Pesa / e-Mola", pct: 12, amount: "50K MT", color: C.teal, trend: "+18%" },
      { method: "USSD / SMS", pct: 7, amount: "29K MT", color: C.red, trend: "+15%" },
      { method: "Famba Card", pct: 3, amount: "13K MT", color: C.indigo, trend: "+2%" },
    ],
    leakage: { pct: "~14.5%", amount: "61K MT/dia", detail: "Rotas 02 e 05 concentram 71% da fuga" },
  },
};

const RevenueScreen = ({ city }) => {
  const data = REVENUE_DATA[city];
  return (
  <div style={{ flex: 1, overflow: "auto", padding: "12px 16px" }}>
    <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 12 }}>Receita e Bilhética</div>

    {/* Revenue chart placeholder */}
    <div style={{ background: C.card, borderRadius: 16, border: `1px solid ${C.border}`, padding: "14px", marginBottom: 14 }}>
      <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", marginBottom: 8 }}>Receita Diária (últimos 7 dias)</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 100 }}>
        {data.chart.map((d, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: d.day === "Hoje" ? C.red : C.muted }}>{d.val}M</span>
            <div style={{ width: "100%", background: d.day === "Hoje" ? C.red : `${C.teal}40`, borderRadius: 4, height: `${(d.val / data.chartMax) * 80}px` }} />
            <span style={{ fontSize: 8, color: C.muted }}>{d.day}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Payment method breakdown */}
    <div style={{ fontSize: 10, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Por Método de Pagamento</div>
    {data.payments.map((m, i) => (
      <div key={i} style={{ background: C.card, borderRadius: 14, padding: "12px 14px", border: `1px solid ${C.border}`, marginBottom: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{m.method}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: m.color }}>{m.amount}</span>
            <span style={{ fontSize: 9, fontWeight: 600, color: m.trend.startsWith("+") ? C.success : C.danger }}>{m.trend}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <MiniBar value={m.pct} max={100} color={m.color} />
          <span style={{ fontSize: 11, fontWeight: 700, color: m.color, width: 32 }}>{m.pct}%</span>
        </div>
      </div>
    ))}
    
    {/* Leakage estimate */}
    <div style={{ background: `${C.danger}08`, border: `1px solid ${C.danger}25`, borderRadius: 16, padding: "14px", marginTop: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 16 }}>⚠️</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: C.danger }}>Estimativa de Fuga de Receita</span>
      </div>
      <div style={{ fontSize: 11, color: C.text, lineHeight: 1.5 }}>
        Com base na reconciliação GPS vs. bilhética, estima-se uma discrepância de <strong style={{ color: C.danger }}>{data.leakage.pct}</strong> ({data.leakage.amount}) entre passageiros contados e receita declarada. {data.leakage.detail}.
      </div>
    </div>
  </div>
  );
};

const ROUTES_DATA = {
  maputo: [
    { num: "01", name: "Baixa—Magoanine", type: "BRT", pax: 18400, buses: 22, compliance: 96, revenue: "276K", load: 82 },
    { num: "02", name: "Zimpeto—Matola Gare", type: "BRT", pax: 14200, buses: 18, compliance: 93, revenue: "213K", load: 78 },
    { num: "03", name: "Museu—KaMpfumo", type: "Coop", pax: 8600, buses: 14, compliance: 91, revenue: "129K", load: 65 },
    { num: "05", name: "Matola—Praça Trab.", type: "Coop", pax: 12100, buses: 16, compliance: 84, revenue: "181K", load: 88 },
    { num: "07", name: "Xipamanine—Costa Sol", type: "Chapa", pax: 9800, buses: 28, compliance: 79, revenue: "147K", load: 71 },
    { num: "12", name: "KaMpfumo—Zimpeto", type: "Coop", pax: 7200, buses: 12, compliance: 92, revenue: "108K", load: 59 },
  ],
  nampula: [
    { num: "01", name: "Centro—Muhala Exp.", type: "Coop", pax: 6800, buses: 22, compliance: 88, revenue: "68K", load: 85 },
    { num: "02", name: "Centro—Namicopo", type: "Coop", pax: 5400, buses: 18, compliance: 81, revenue: "54K", load: 78 },
    { num: "03", name: "Centro—Napipine", type: "Chapa", pax: 4200, buses: 16, compliance: 86, revenue: "42K", load: 72 },
    { num: "04", name: "Muhala—Namicopo", type: "Chapa", pax: 3800, buses: 14, compliance: 77, revenue: "38K", load: 68 },
    { num: "05", name: "Centro—Mutauanha", type: "Coop", pax: 3100, buses: 12, compliance: 74, revenue: "31K", load: 62 },
    { num: "06", name: "Napipine—Namutequeliua", type: "Chapa", pax: 2600, buses: 10, compliance: 82, revenue: "26K", load: 58 },
    { num: "07", name: "Centro—Anchilo", type: "Chapa", pax: 2400, buses: 8, compliance: 79, revenue: "24K", load: 65 },
    { num: "08", name: "Muhala—Mutauanha", type: "Coop", pax: 2100, buses: 6, compliance: 90, revenue: "21K", load: 55 },
  ],
};

const RoutesScreen = ({ city }) => (
  <div style={{ flex: 1, overflow: "auto", padding: "12px 16px" }}>
    <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 12 }}>Desempenho por Rota</div>
    {ROUTES_DATA[city].map((r, i) => (
      <div key={i} style={{ background: C.card, borderRadius: 16, padding: "14px", border: `1px solid ${C.border}`, marginBottom: 8 }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: r.compliance >= 90 ? `${C.success}12` : r.compliance >= 85 ? `${C.amber}12` : `${C.danger}12`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: r.compliance >= 90 ? C.success : r.compliance >= 85 ? C.amber : C.danger }}>{r.num}</div>
            <div style={{ fontSize: 7, fontWeight: 700, color: C.muted }}>{r.type}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{r.name}</div>
            <div style={{ fontSize: 10, color: C.muted }}>{r.buses} buses · {r.pax.toLocaleString()} pax/dia · {r.revenue} MT</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
              <span style={{ fontSize: 9, color: C.muted }}>Conformidade</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: r.compliance >= 90 ? C.success : r.compliance >= 85 ? C.amber : C.danger }}>{r.compliance}%</span>
            </div>
            <MiniBar value={r.compliance} max={100} color={r.compliance >= 90 ? C.success : r.compliance >= 85 ? C.amber : C.danger} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
              <span style={{ fontSize: 9, color: C.muted }}>Ocupação</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: r.load >= 85 ? C.danger : r.load >= 70 ? C.amber : C.teal }}>{r.load}%</span>
            </div>
            <MiniBar value={r.load} max={100} color={r.load >= 85 ? C.danger : r.load >= 70 ? C.amber : C.teal} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function AdminPanel() {
  const [tab, setTab] = useState(tabs.OVERVIEW);
  const [city, setCity] = useState("maputo");
  return (
    <div style={{ width: 390, height: 844, margin: "20px auto", background: C.bg, borderRadius: 44, overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', boxShadow: "0 25px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)" }}>
      <StatusBar />
      {/* City Switcher */}
      <div style={{ display: "flex", gap: 4, padding: "6px 12px" }}>
        {[
          { id: "maputo", label: "Maputo" },
          { id: "nampula", label: "Nampula" },
        ].map(c => (
          <button key={c.id} onClick={() => setCity(c.id)} style={{
            flex: 1, background: city === c.id ? C.dark : "transparent",
            border: city === c.id ? "none" : `1px solid ${C.border}`,
            borderRadius: 10, padding: "7px 10px", fontSize: 11, fontWeight: 600,
            color: city === c.id ? "#fff" : C.muted, cursor: "pointer",
          }}>
            {c.label}
          </button>
        ))}
      </div>
      <TabBar active={tab} go={setTab} />
      {tab === tabs.OVERVIEW && <OverviewScreen city={city} />}
      {tab === tabs.FLEET && <FleetScreen city={city} />}
      {tab === tabs.COMPLIANCE && <ComplianceScreen city={city} />}
      {tab === tabs.REVENUE && <RevenueScreen city={city} />}
      {tab === tabs.ROUTES && <RoutesScreen city={city} />}
    </div>
  );
}
