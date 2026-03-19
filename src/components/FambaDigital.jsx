import { useState, useEffect, useMemo } from "react";

const colors = {
  primary: "#E85D04",
  primaryDark: "#C14A00",
  accent: "#2EC4B6",
  bg: "#FAFAF7",
  card: "#FFFFFF",
  dark: "#1A1A2E",
  darkCard: "#232347",
  text: "#1A1A2E",
  textMuted: "#6B7280",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  border: "#E5E7EB",
};

const screens = {
  HOME: "home",
  ROUTE: "route",
  LIVE: "live",
  TICKET: "ticket",
  ACTIVE: "active",
  HISTORY: "history",
  USSD: "ussd",
};

// Reusable Components
const StatusBar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 20px 4px", fontSize: 12, fontWeight: 600, color: colors.text }}>
    <span>09:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <svg width="16" height="12" viewBox="0 0 16 12"><rect x="0" y="4" width="3" height="8" rx="1" fill={colors.text}/><rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill={colors.text}/><rect x="9" y="0.5" width="3" height="11.5" rx="1" fill={colors.text}/><rect x="13.5" y="3" width="2.5" height="9" rx="1" fill={colors.text} opacity="0.3"/></svg>
      <span style={{fontSize:11}}>Vodacom</span>
      <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0" y="0" width="19" height="11" rx="2" stroke={colors.text} strokeWidth="1.2" fill="none"/><rect x="1.5" y="1.5" width="13" height="8" rx="1" fill={colors.success}/><rect x="20" y="3.5" width="2" height="4" rx="1" fill={colors.text}/></svg>
    </div>
  </div>
);

const BottomNav = ({ active, onNavigate }) => {
  const items = [
    { id: screens.HOME, icon: "🏠", label: "Início" },
    { id: screens.LIVE, icon: "📍", label: "Ao Vivo" },
    { id: screens.TICKET, icon: "🎫", label: "Bilhete" },
    { id: screens.HISTORY, icon: "📋", label: "Viagens" },
  ];
  return (
    <div style={{ display: "flex", borderTop: `1px solid ${colors.border}`, background: colors.card, paddingBottom: 20, paddingTop: 8 }}>
      {items.map(item => (
        <button key={item.id} onClick={() => onNavigate(item.id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, border: "none", background: "none", cursor: "pointer", padding: "6px 0" }}>
          <span style={{ fontSize: 20 }}>{item.icon}</span>
          <span style={{ fontSize: 10, fontWeight: active === item.id ? 700 : 400, color: active === item.id ? colors.primary : colors.textMuted, letterSpacing: "0.02em" }}>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

const RouteChip = ({ number, color, name, onTap }) => (
  <button onClick={onTap} style={{ display: "flex", alignItems: "center", gap: 10, background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 16, padding: "12px 16px", cursor: "pointer", width: "100%", textAlign: "left", transition: "all 0.15s" }}>
    <div style={{ width: 42, height: 42, borderRadius: 12, background: color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16, flexShrink: 0 }}>{number}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: colors.text }}>{name}</div>
      <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 2 }}>A cada 8 min · 24 paragens</div>
    </div>
    <svg width="8" height="14" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" stroke={colors.textMuted} strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
  </button>
);

// SCREENS
const HomeScreen = ({ onNavigate }) => {
  const [search, setSearch] = useState("");
  const routes = [
    { number: "01", color: "#E85D04", name: "Baixa — Magoanine" },
    { number: "02", color: "#2EC4B6", name: "Zimpeto — Matola Gare" },
    { number: "03", color: "#7C3AED", name: "Museu — KaMpfumo" },
    { number: "04", color: "#EC4899", name: "Xipamanine — Costa do Sol" },
    { number: "05", color: "#F59E0B", name: "Matola — Praça dos Trabalhadores" },
  ];
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${colors.dark} 0%, #16213E 100%)`, padding: "20px 20px 28px", borderRadius: "0 0 28px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>Famba Digital</div>
            <div style={{ fontSize: 22, color: "#fff", fontWeight: 700, marginTop: 4 }}>Olá, Passageiro</div>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 18 }}>👤</span>
          </div>
        </div>
        
        {/* Search */}
        <div style={{ position: "relative" }}>
          <input 
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Para onde vai?" 
            style={{ width: "100%", padding: "14px 16px 14px 44px", borderRadius: 16, border: "none", background: "rgba(255,255,255,0.12)", color: "#fff", fontSize: 15, outline: "none", boxSizing: "border-box", backdropFilter: "blur(10px)" }} 
          />
          <svg style={{ position: "absolute", left: 14, top: 14 }} width="20" height="20" viewBox="0 0 20 20"><circle cx="8.5" cy="8.5" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"/><line x1="13" y1="13" x2="18" y2="18" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        
        {/* Quick Stats */}
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          {[
            { label: "Rotas Activas", value: "13", icon: "🚌" },
            { label: "Cartão Famba", value: "850 MT", icon: "💳" },
            { label: "USSD", value: "*321#", icon: "📱" },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: 14, padding: "12px 10px", textAlign: "center", backdropFilter: "blur(5px)" }}>
              <div style={{ fontSize: 16, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* How to Pay section */}
      <div style={{ padding: "20px 20px 8px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Como Pagar</div>
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8 }}>
          {[
            { icon: "💵", label: "Dinheiro", desc: "Pague ao cobrador", bg: "#FEF3C7" },
            { icon: "💳", label: "Cartão Famba", desc: "Toque no leitor", bg: "#DBEAFE" },
            { icon: "📱", label: "USSD *321#", desc: "Sem internet", bg: "#D1FAE5" },
            { icon: "📲", label: "M-Pesa", desc: "Mobile money", bg: "#FCE7F3" },
          ].map((m, i) => (
            <div key={i} style={{ minWidth: 110, background: m.bg, borderRadius: 16, padding: "14px 12px", textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 24 }}>{m.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: colors.text, marginTop: 6 }}>{m.label}</div>
              <div style={{ fontSize: 10, color: colors.textMuted, marginTop: 2 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Routes */}
      <div style={{ padding: "12px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Rotas Populares</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {routes.map((r, i) => (
            <RouteChip key={i} {...r} onTap={() => onNavigate(screens.ROUTE)} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RouteDetailScreen = ({ onNavigate, onBack }) => {
  const stops = [
    { name: "Praça dos Trabalhadores", time: "06:00", type: "terminal" },
    { name: "Av. Guerra Popular", time: "06:08", type: "stop" },
    { name: "Av. Acordos de Lusaka", time: "06:14", type: "stop" },
    { name: "Av. FPLM", time: "06:20", type: "stop" },
    { name: "Julius Nyerere", time: "06:28", type: "stop" },
    { name: "Av. Lurdes Mutola", time: "06:34", type: "stop" },
    { name: "Magoanine", time: "06:45", type: "terminal" },
  ];
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      {/* Header */}
      <div style={{ background: colors.primary, padding: "16px 20px 24px", borderRadius: "0 0 28px 28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>Rota 01</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>Baixa — Magoanine</div>
          </div>
        </div>
        
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { label: "Frequência", value: "8 min" },
            { label: "Duração", value: "45 min" },
            { label: "Tarifa", value: "15 MT" },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Live Bus Position */}
      <div style={{ margin: "16px 20px", background: "#FEF3C7", borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 24 }}>🚌</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.text }}>Próximo autocarro em 3 min</div>
          <div style={{ fontSize: 11, color: colors.textMuted }}>Bus MP-0247 · Av. FPLM → Julius Nyerere</div>
        </div>
        <button onClick={() => onNavigate(screens.LIVE)} style={{ background: colors.primary, color: "#fff", border: "none", borderRadius: 10, padding: "8px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>VER</button>
      </div>
      
      {/* Stops Timeline */}
      <div style={{ padding: "8px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Paragens</div>
        {stops.map((stop, i) => (
          <div key={i} style={{ display: "flex", gap: 14, marginBottom: i < stops.length - 1 ? 0 : 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20 }}>
              <div style={{ width: stop.type === "terminal" ? 16 : 10, height: stop.type === "terminal" ? 16 : 10, borderRadius: "50%", background: stop.type === "terminal" ? colors.primary : colors.card, border: `2.5px solid ${colors.primary}`, flexShrink: 0, zIndex: 1 }} />
              {i < stops.length - 1 && <div style={{ width: 2.5, flex: 1, background: `${colors.primary}33`, minHeight: 36 }} />}
            </div>
            <div style={{ paddingBottom: i < stops.length - 1 ? 16 : 0 }}>
              <div style={{ fontSize: 14, fontWeight: stop.type === "terminal" ? 700 : 500, color: colors.text }}>{stop.name}</div>
              <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 2 }}>Primeira saída: {stop.time}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Buy Ticket CTA */}
      <div style={{ padding: "0 20px 20px" }}>
        <button onClick={() => onNavigate(screens.TICKET)} style={{ width: "100%", background: colors.primary, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(232,93,4,0.3)" }}>
          Comprar Bilhete · 15 MT
        </button>
      </div>
    </div>
  );
};

const LiveTrackerScreen = ({ onBack }) => {
  const [selectedBus, setSelectedBus] = useState(null);
  const buses = [
    { id: "MP-0247", route: "01", position: "Av. FPLM", eta: "3 min", passengers: 38, capacity: 52, status: "on-route", lat: 25.95 },
    { id: "MP-0112", route: "01", position: "Magoanine", eta: "12 min", passengers: 12, capacity: 52, status: "on-route", lat: 25.90 },
    { id: "MP-0389", route: "02", position: "Zimpeto Terminal", eta: "—", passengers: 0, capacity: 52, status: "loading", lat: 25.88 },
  ];
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      {/* Map placeholder */}
      <div style={{ height: 280, background: `linear-gradient(180deg, #E8F4FD 0%, #D1E8F6 100%)`, position: "relative", overflow: "hidden" }}>
        {/* Grid lines for map feel */}
        {[...Array(8)].map((_, i) => (
          <div key={`h${i}`} style={{ position: "absolute", left: 0, right: 0, top: i * 40, height: 1, background: "rgba(0,0,0,0.04)" }} />
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={`v${i}`} style={{ position: "absolute", top: 0, bottom: 0, left: i * 80, width: 1, background: "rgba(0,0,0,0.04)" }} />
        ))}
        
        {/* Road line */}
        <svg style={{ position: "absolute", inset: 0 }} viewBox="0 0 390 280">
          <path d="M 40 250 Q 100 200 160 160 Q 220 120 280 80 Q 340 40 360 30" stroke={colors.primary} strokeWidth="4" fill="none" strokeDasharray="8,6" opacity="0.6"/>
          {/* Bus icons */}
          <circle cx="200" cy="140" r="14" fill={colors.primary} stroke="#fff" strokeWidth="3"/>
          <text x="200" y="145" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">🚌</text>
          <circle cx="310" cy="60" r="10" fill={colors.accent} stroke="#fff" strokeWidth="2"/>
          <text x="310" y="64" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">🚌</text>
          {/* Stop markers */}
          {[[60,240],[120,190],[200,140],[280,80],[350,35]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="5" fill="#fff" stroke={colors.primary} strokeWidth="2"/>
          ))}
        </svg>
        
        {/* Header overlay */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "12px 20px", background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, transparent 100%)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={onBack} style={{ background: colors.card, border: "none", borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke={colors.text} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div style={{ flex: 1, background: colors.card, borderRadius: 14, padding: "10px 14px", fontSize: 13, color: colors.textMuted, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>Rota 01 · Baixa — Magoanine</div>
          </div>
        </div>
        
        {/* ETA Banner */}
        <div style={{ position: "absolute", bottom: 12, left: 20, right: 20, background: colors.card, borderRadius: 16, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: colors.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18 }}>🚌</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: colors.text }}>MP-0247 · 3 min</div>
            <div style={{ fontSize: 11, color: colors.textMuted }}>38/52 passageiros · Av. FPLM</div>
          </div>
          <div style={{ background: `${colors.success}20`, color: colors.success, fontSize: 10, fontWeight: 700, padding: "4px 8px", borderRadius: 8, textTransform: "uppercase" }}>A caminho</div>
        </div>
      </div>
      
      {/* Bus List */}
      <div style={{ padding: "16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Autocarros Nesta Rota</div>
        {buses.map((bus, i) => (
          <div key={i} onClick={() => setSelectedBus(bus.id)} style={{ background: selectedBus === bus.id ? `${colors.primary}08` : colors.card, border: `1px solid ${selectedBus === bus.id ? colors.primary : colors.border}`, borderRadius: 16, padding: "14px 16px", marginBottom: 8, cursor: "pointer", transition: "all 0.15s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 20 }}>🚌</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: colors.text }}>{bus.id}</div>
                  <div style={{ fontSize: 11, color: colors.textMuted }}>{bus.position}</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: bus.eta === "—" ? colors.textMuted : colors.primary }}>{bus.eta}</div>
                <div style={{ fontSize: 10, color: colors.textMuted }}>{bus.passengers}/{bus.capacity} pax</div>
              </div>
            </div>
            {/* Capacity bar */}
            <div style={{ marginTop: 10, height: 6, background: colors.border, borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(bus.passengers/bus.capacity)*100}%`, background: bus.passengers/bus.capacity > 0.8 ? colors.danger : bus.passengers/bus.capacity > 0.6 ? colors.warning : colors.success, borderRadius: 3, transition: "width 0.3s" }} />
            </div>
          </div>
        ))}
      </div>
      
      {/* Route Compliance Badge */}
      <div style={{ margin: "0 20px 20px", background: `${colors.success}10`, border: `1px solid ${colors.success}30`, borderRadius: 16, padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 20 }}>✅</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.success }}>Conformidade da Rota: 96%</div>
            <div style={{ fontSize: 11, color: colors.textMuted }}>MP-0247 segue o percurso autorizado</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TicketScreen = ({ onNavigate, onBack }) => {
  const [method, setMethod] = useState("cash");
  const [concession, setConcession] = useState(null);
  const methods = [
    { id: "cash", icon: "💵", label: "Dinheiro", desc: "Pague ao cobrador" },
    { id: "famba", icon: "💳", label: "Cartão Famba", desc: "Toque no leitor" },
    { id: "mpesa", icon: "📲", label: "M-Pesa", desc: "Pagamento digital" },
    { id: "ussd", icon: "📱", label: "USSD *321#", desc: "Sem internet" },
  ];
  const concessions = [
    { id: "standard", label: "Normal", price: "15 MT", color: colors.primary },
    { id: "student", label: "Estudante", price: "7 MT", color: "#7C3AED" },
    { id: "elder", label: "Idoso", price: "0 MT", color: colors.accent },
  ];
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={onBack} style={{ background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke={colors.text} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div style={{ fontSize: 20, fontWeight: 800, color: colors.text }}>Comprar Bilhete</div>
        </div>
        
        {/* Route summary */}
        <div style={{ background: `${colors.primary}08`, borderRadius: 16, padding: "16px", marginBottom: 20, border: `1px solid ${colors.primary}20` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: colors.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 14 }}>01</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: colors.text }}>Baixa — Magoanine</div>
              <div style={{ fontSize: 11, color: colors.textMuted }}>Bilhete simples · Válido 90 min</div>
            </div>
          </div>
        </div>
        
        {/* Concession type */}
        <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Tipo de Tarifa</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {concessions.map(c => (
            <button key={c.id} onClick={() => setConcession(c.id)} style={{ flex: 1, background: concession === c.id ? `${c.color}15` : colors.card, border: `2px solid ${concession === c.id ? c.color : colors.border}`, borderRadius: 14, padding: "12px 8px", textAlign: "center", cursor: "pointer", transition: "all 0.15s" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: c.color }}>{c.price}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: concession === c.id ? c.color : colors.textMuted, marginTop: 2 }}>{c.label}</div>
            </button>
          ))}
        </div>
        
        {/* Payment method */}
        <div style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Método de Pagamento</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
          {methods.map(m => (
            <button key={m.id} onClick={() => setMethod(m.id)} style={{ display: "flex", alignItems: "center", gap: 12, background: method === m.id ? `${colors.primary}08` : colors.card, border: `2px solid ${method === m.id ? colors.primary : colors.border}`, borderRadius: 14, padding: "14px 16px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
              <span style={{ fontSize: 22 }}>{m.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: colors.text }}>{m.label}</div>
                <div style={{ fontSize: 11, color: colors.textMuted }}>{m.desc}</div>
              </div>
              <div style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${method === m.id ? colors.primary : colors.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {method === m.id && <div style={{ width: 12, height: 12, borderRadius: 6, background: colors.primary }} />}
              </div>
            </button>
          ))}
        </div>
        
        {/* USSD Instructions */}
        {method === "ussd" && (
          <div style={{ background: "#D1FAE5", borderRadius: 16, padding: "16px", marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#065F46", marginBottom: 8 }}>Instruções USSD</div>
            <div style={{ fontSize: 12, color: "#065F46", lineHeight: 1.6 }}>
              1. Marque <strong>*321#</strong> no seu telefone{"\n"}
              2. Seleccione <strong>1 → Comprar Bilhete</strong>{"\n"}
              3. Escolha a <strong>Rota 01</strong>{"\n"}
              4. Confirme pagamento via M-Pesa{"\n"}
              5. Receba código SMS: <strong>FMB-XXXX</strong>
            </div>
          </div>
        )}
        
        {/* Buy Button */}
        <button onClick={() => onNavigate(screens.ACTIVE)} style={{ width: "100%", background: colors.primary, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(232,93,4,0.3)" }}>
          {method === "cash" ? "Gerar Recibo Digital · 15 MT" : method === "ussd" ? "Enviar código USSD" : "Pagar · 15 MT"}
        </button>
      </div>
    </div>
  );
};

const ActiveTicketScreen = ({ onBack }) => {
  const [timeLeft, setTimeLeft] = useState(5400);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(t => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, []);
  const qrPattern = useMemo(() => {
    const pattern = [];
    for (let row = 0; row < 15; row++)
      for (let col = 0; col < 15; col++) {
        const isCorner = (row < 4 && col < 4) || (row < 4 && col > 10) || (row > 10 && col < 4);
        const seed = (row * 15 + col) * 2654435761;
        const filled = isCorner || ((seed >>> 0) % 100) > 45;
        if (filled) pattern.push({ row, col });
      }
    return pattern;
  }, []);
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  return (
    <div style={{ flex: 1, overflow: "auto", background: colors.dark }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>Bilhete Activo</div>
        </div>

        {/* Ticket Card */}
        <div style={{ background: "linear-gradient(145deg, #E85D04 0%, #C14A00 100%)", borderRadius: 24, padding: "28px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: 50, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ position: "absolute", bottom: -20, left: -20, width: 80, height: 80, borderRadius: 40, background: "rgba(255,255,255,0.08)" }} />

          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: 8 }}>Famba Digital · Bilhete Simples</div>

          {/* QR Code placeholder */}
          <div style={{ width: 160, height: 160, margin: "12px auto", background: "#fff", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", padding: 12 }}>
            <svg viewBox="0 0 120 120" width="136" height="136">
              {qrPattern.map(({ row, col }) => (
                <rect key={`${row}-${col}`} x={col * 8} y={row * 8} width="7" height="7" rx="1.5" fill={colors.dark} />
              ))}
            </svg>
          </div>
          
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "0.15em", marginTop: 8 }}>FMB-7842</div>
          
          <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 20 }}>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Rota</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>01 Baixa–Mag</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.2)" }} />
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Tarifa</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>15 MT</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.2)" }} />
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Bus</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>MP-0247</div>
            </div>
          </div>
        </div>
        
        {/* Timer */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>Válido por</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: timeLeft < 600 ? colors.danger : colors.success, fontVariantNumeric: "tabular-nums" }}>
            {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Permite transferência gratuita dentro de 90 min</div>
        </div>
        
        {/* Transfer option */}
        <button style={{ width: "100%", marginTop: 20, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", color: "#fff" }}>
          <span style={{ fontSize: 20 }}>🔄</span>
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Transferir para outra rota</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Use este bilhete em BRT, chapa, ou CFM</div>
          </div>
          <svg width="8" height="14" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  );
};

const HistoryScreen = ({ onBack }) => {
  const trips = [
    { date: "Hoje, 08:32", route: "01", from: "Praça Trab.", to: "Magoanine", fare: "15 MT", method: "M-Pesa", status: "complete" },
    { date: "Ontem, 17:15", route: "02", from: "Matola Gare", to: "Zimpeto", fare: "15 MT", method: "Famba Card", status: "complete" },
    { date: "Ontem, 07:50", route: "01", from: "Praça Trab.", to: "Julius Nyerere", fare: "10 MT", method: "Cash", status: "complete" },
    { date: "16 Mar, 18:20", route: "05", from: "Matola", to: "Praça Trab.", fare: "15 MT", method: "USSD", status: "complete" },
    { date: "15 Mar, 08:00", route: "01", from: "Praça Trab.", to: "Magoanine", fare: "0 MT", method: "Subsídio", status: "subsidy" },
  ];
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: colors.text, marginBottom: 4 }}>Viagens</div>
        <div style={{ fontSize: 12, color: colors.textMuted, marginBottom: 20 }}>Historial de viagens e recibos digitais</div>
        
        {/* Monthly summary */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          <div style={{ flex: 1, background: `${colors.primary}10`, borderRadius: 16, padding: "14px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: colors.primary }}>47</div>
            <div style={{ fontSize: 10, color: colors.textMuted, textTransform: "uppercase" }}>Viagens / Mês</div>
          </div>
          <div style={{ flex: 1, background: `${colors.accent}10`, borderRadius: 16, padding: "14px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: colors.accent }}>585</div>
            <div style={{ fontSize: 10, color: colors.textMuted, textTransform: "uppercase" }}>MT Gastos</div>
          </div>
          <div style={{ flex: 1, background: `${colors.success}10`, borderRadius: 16, padding: "14px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: colors.success }}>3</div>
            <div style={{ fontSize: 10, color: colors.textMuted, textTransform: "uppercase" }}>Subsídios</div>
          </div>
        </div>
        
        {/* Trip list */}
        {trips.map((trip, i) => (
          <div key={i} style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 16, padding: "14px 16px", marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: trip.status === "subsidy" ? `${colors.success}15` : `${colors.primary}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: trip.status === "subsidy" ? colors.success : colors.primary }}>{trip.route}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: colors.text }}>{trip.from} → {trip.to}</div>
                  <div style={{ fontSize: 10, color: colors.textMuted }}>{trip.date}</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: trip.status === "subsidy" ? colors.success : colors.text }}>{trip.fare}</div>
                <div style={{ fontSize: 10, color: colors.textMuted }}>{trip.method}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App
export default function FambaDigitalApp() {
  const [screen, setScreen] = useState(screens.HOME);
  const [history, setHistory] = useState([screens.HOME]);

  const navigate = (s) => {
    setHistory(h => [...h, s]);
    setScreen(s);
  };
  const goBack = () => {
    const newHistory = [...history];
    newHistory.pop();
    setScreen(newHistory[newHistory.length - 1] || screens.HOME);
    setHistory(newHistory.length > 0 ? newHistory : [screens.HOME]);
  };

  const showNav = [screens.HOME, screens.LIVE, screens.TICKET, screens.HISTORY].includes(screen);

  return (
    <div style={{ width: 390, height: 844, margin: "20px auto", background: colors.bg, borderRadius: 44, overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', boxShadow: "0 25px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)", position: "relative" }}>
      <StatusBar />
      {screen === screens.HOME && <HomeScreen onNavigate={navigate} />}
      {screen === screens.ROUTE && <RouteDetailScreen onNavigate={navigate} onBack={goBack} />}
      {screen === screens.LIVE && <LiveTrackerScreen onBack={goBack} />}
      {screen === screens.TICKET && <TicketScreen onNavigate={navigate} onBack={goBack} />}
      {screen === screens.ACTIVE && <ActiveTicketScreen onBack={goBack} />}
      {screen === screens.HISTORY && <HistoryScreen onBack={goBack} />}
      {showNav && <BottomNav active={screen} onNavigate={navigate} />}
    </div>
  );
}
