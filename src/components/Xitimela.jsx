import { useState, useEffect } from "react";

const C = {
  indigo: "#4F46E5", indigoDark: "#3730A3", indigoLight: "#EEF2FF",
  amber: "#F59E0B", amberLight: "#FFFBEB",
  green: "#059669", greenLight: "#D1FAE5",
  bg: "#F8FAFC", card: "#FFFFFF", dark: "#0F172A", darkCard: "#1E293B",
  text: "#0F172A", muted: "#64748B", border: "#E2E8F0",
  danger: "#DC2626", pink: "#EC4899",
};

const S = { HOME: 0, DISCOVER: 1, LIVE: 2, TICKET: 3, ACTIVE: 4, PROFILE: 5 };

const StatusBar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 20px 4px", fontSize: 12, fontWeight: 600, color: C.text }}>
    <span>09:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <span style={{ fontSize: 11 }}>mCel</span>
      <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0" y="0" width="19" height="11" rx="2" stroke={C.text} strokeWidth="1.2" fill="none"/><rect x="1.5" y="1.5" width="15" height="8" rx="1" fill={C.green}/><rect x="20" y="3.5" width="2" height="4" rx="1" fill={C.text}/></svg>
    </div>
  </div>
);

const Nav = ({ active, go }) => (
  <div style={{ display: "flex", borderTop: `1px solid ${C.border}`, background: C.card, paddingBottom: 20, paddingTop: 8 }}>
    {[
      { s: S.HOME, icon: "🏡", label: "Início" },
      { s: S.DISCOVER, icon: "🔍", label: "Rotas" },
      { s: S.LIVE, icon: "📡", label: "Comunidade" },
      { s: S.PROFILE, icon: "⭐", label: "Perfil" },
    ].map(t => (
      <button key={t.s} onClick={() => go(t.s)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, border: "none", background: "none", cursor: "pointer", padding: "6px 0" }}>
        <span style={{ fontSize: 20 }}>{t.icon}</span>
        <span style={{ fontSize: 10, fontWeight: active === t.s ? 700 : 400, color: active === t.s ? C.indigo : C.muted }}>{t.label}</span>
      </button>
    ))}
  </div>
);

const HomeScreen = ({ go }) => {
  const [greeting] = useState(() => {
    const h = new Date().getHours();
    return h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite";
  });
  
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ background: `linear-gradient(145deg, ${C.dark} 0%, ${C.indigoDark} 100%)`, padding: "20px 20px 28px", borderRadius: "0 0 32px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Xitimela · Rede Comunitária</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginTop: 4 }}>{greeting}! 👋</div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ width: 42, height: 42, borderRadius: 21, background: `linear-gradient(135deg, ${C.indigo}, ${C.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>MC</div>
            <div style={{ position: "absolute", top: -2, right: -2, width: 14, height: 14, borderRadius: 7, background: C.amber, border: "2px solid " + C.dark, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 8, fontWeight: 800, color: "#fff" }}>5</span>
            </div>
          </div>
        </div>
        
        {/* Community trust score */}
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 18, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, background: `linear-gradient(135deg, ${C.amber}, #F97316)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 20 }}>🏆</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Nível: Viajante Experiente</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>847 pontos · 12 reportes verificados</div>
            <div style={{ marginTop: 6, height: 5, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: "72%", background: `linear-gradient(90deg, ${C.amber}, #F97316)`, borderRadius: 3 }} />
            </div>
          </div>
        </div>
        
        {/* Quick actions */}
        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          {[
            { icon: "🚌", label: "Reportar Bus", color: C.indigo },
            { icon: "⚠️", label: "Alerta Rota", color: C.amber },
            { icon: "📍", label: "Minha Paragem", color: C.green },
          ].map((a, i) => (
            <button key={i} style={{ flex: 1, background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 14, padding: "12px 6px", cursor: "pointer", textAlign: "center" }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{a.icon}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{a.label}</div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Live Community Feed */}
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>Feed da Comunidade</div>
          <span style={{ fontSize: 10, fontWeight: 600, color: C.indigo }}>Ver tudo →</span>
        </div>
        
        {[
          { user: "Ana M.", avatar: "AM", time: "2 min", type: "report", text: "🚌 Chapa Rota 7 acabou de sair de Xipamanine com 8 lugares vazios!", verified: true, likes: 12 },
          { user: "Pedro C.", avatar: "PC", time: "5 min", type: "alert", text: "⚠️ Congestionamento na Av. Eduardo Mondlane. Chapas atrasados ~15 min", verified: true, likes: 34 },
          { user: "Fatima S.", avatar: "FS", time: "8 min", type: "tip", text: "💡 A cooperativa Fénix tem autocarros novos na Rota 3. Muito mais confortáveis!", verified: false, likes: 8 },
          { user: "João D.", avatar: "JD", time: "12 min", type: "driver", text: "🚦 Sou motorista da Rota 01. Saio de Magoanine às 6:45. Tenho 15 lugares.", verified: true, likes: 21, isDriver: true },
        ].map((post, i) => (
          <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "14px 16px", marginBottom: 10 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, borderRadius: 18, background: post.isDriver ? `linear-gradient(135deg, ${C.amber}, #F97316)` : `${C.indigo}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: post.isDriver ? "#fff" : C.indigo, flexShrink: 0 }}>{post.avatar}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{post.user}</span>
                  {post.verified && <span style={{ fontSize: 10, color: C.green }}>✓</span>}
                  {post.isDriver && <span style={{ fontSize: 9, fontWeight: 700, color: C.amber, background: C.amberLight, padding: "2px 6px", borderRadius: 4 }}>MOTORISTA</span>}
                  <span style={{ fontSize: 10, color: C.muted, marginLeft: "auto" }}>{post.time}</span>
                </div>
                <div style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>{post.text}</div>
                <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                  <button style={{ display: "flex", alignItems: "center", gap: 4, border: "none", background: "none", cursor: "pointer", fontSize: 11, color: C.muted }}>
                    <span>👍</span> {post.likes}
                  </button>
                  <button style={{ display: "flex", alignItems: "center", gap: 4, border: "none", background: "none", cursor: "pointer", fontSize: 11, color: C.muted }}>
                    <span>💬</span> Responder
                  </button>
                  <button style={{ display: "flex", alignItems: "center", gap: 4, border: "none", background: "none", cursor: "pointer", fontSize: 11, color: C.muted }}>
                    <span>📤</span> Partilhar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DiscoverScreen = ({ go }) => {
  const [view, setView] = useState("list");
  const routes = [
    { num: "01", name: "Baixa — Magoanine", type: "BRT", color: C.indigo, crowd: "Muita gente", crowdLevel: 3, reports: 8, rating: 4.2, lastReport: "2 min" },
    { num: "03", name: "Museu — KaMpfumo", type: "Coop", color: C.green, crowd: "Normal", crowdLevel: 2, reports: 5, rating: 3.8, lastReport: "5 min" },
    { num: "07", name: "Xipamanine — Costa Sol", type: "Chapa", color: C.amber, crowd: "Vazio", crowdLevel: 1, reports: 12, rating: 3.5, lastReport: "1 min" },
    { num: "12", name: "Matola — Praça Trab.", type: "Coop", color: "#EC4899", crowd: "Lotado", crowdLevel: 4, reports: 3, rating: 4.0, lastReport: "8 min" },
    { num: "R1", name: "CFM Linha 1", type: "Rail", color: "#8B5CF6", crowd: "Normal", crowdLevel: 2, reports: 2, rating: 4.5, lastReport: "15 min" },
  ];
  
  const crowdColors = { 1: C.green, 2: C.indigo, 3: C.amber, 4: C.danger };
  
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 4 }}>Descobrir Rotas</div>
        <div style={{ fontSize: 12, color: C.muted, marginBottom: 16 }}>Informação em tempo real da comunidade</div>
        
        {/* View toggle */}
        <div style={{ display: "flex", background: C.border, borderRadius: 12, padding: 3, marginBottom: 16 }}>
          {["list", "map"].map(v => (
            <button key={v} onClick={() => setView(v)} style={{ flex: 1, background: view === v ? C.card : "transparent", border: "none", borderRadius: 10, padding: "8px", fontSize: 12, fontWeight: view === v ? 700 : 400, color: view === v ? C.text : C.muted, cursor: "pointer" }}>
              {v === "list" ? "Lista" : "Mapa"}
            </button>
          ))}
        </div>
        
        {/* Route cards */}
        {routes.map((r, i) => (
          <button key={i} onClick={() => go(S.TICKET)} style={{ width: "100%", background: C.card, border: `1px solid ${C.border}`, borderRadius: 18, padding: "16px", marginBottom: 10, cursor: "pointer", textAlign: "left" }}>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${r.color}15`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: r.color }}>{r.num}</div>
                <div style={{ fontSize: 7, fontWeight: 700, color: r.color, textTransform: "uppercase" }}>{r.type}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{r.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                  {/* Crowd indicator */}
                  <div style={{ display: "flex", gap: 2 }}>
                    {[1,2,3,4].map(l => (
                      <div key={l} style={{ width: 4, height: l <= r.crowdLevel ? 12 + l * 2 : 8, borderRadius: 2, background: l <= r.crowdLevel ? crowdColors[r.crowdLevel] : C.border, alignSelf: "flex-end" }} />
                    ))}
                  </div>
                  <span style={{ fontSize: 11, color: crowdColors[r.crowdLevel], fontWeight: 600 }}>{r.crowd}</span>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
                  <span style={{ fontSize: 10, color: C.muted }}>⭐ {r.rating}</span>
                  <span style={{ fontSize: 10, color: C.muted }}>📝 {r.reports} reportes</span>
                  <span style={{ fontSize: 10, color: C.muted }}>🕐 {r.lastReport}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const CommunityScreen = () => {
  const [tab, setTab] = useState("alerts");
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 12 }}>Rede Comunitária</div>
        
        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto" }}>
          {[
            { id: "alerts", label: "Alertas", count: 5 },
            { id: "drivers", label: "Motoristas", count: 12 },
            { id: "groups", label: "Grupos", count: 3 },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ display: "flex", alignItems: "center", gap: 4, background: tab === t.id ? C.indigo : `${C.indigo}08`, border: "none", borderRadius: 10, padding: "8px 14px", cursor: "pointer", flexShrink: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: tab === t.id ? "#fff" : C.indigo }}>{t.label}</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: tab === t.id ? "rgba(255,255,255,0.7)" : C.muted, background: tab === t.id ? "rgba(255,255,255,0.2)" : C.border, padding: "1px 6px", borderRadius: 6 }}>{t.count}</span>
            </button>
          ))}
        </div>
        
        {tab === "alerts" && (
          <>
            {[
              { icon: "🔴", title: "Rota 12 cortada pelo motorista", desc: "Confirmado por 8 passageiros · Av. Lurdes Mutola ignorada", time: "3 min", severity: "high" },
              { icon: "🟡", title: "Atraso na Rota 01 BRT", desc: "Obras na Av. FPLM · ~10 min atraso", time: "15 min", severity: "medium" },
              { icon: "🟢", title: "Rota 07 normalizada", desc: "Congestionamento resolvido em Xipamanine", time: "22 min", severity: "low" },
              { icon: "🔴", title: "Sobrepreço reportado", desc: "Chapa Rota 5 a cobrar 25 MT (tarifa oficial: 15 MT)", time: "45 min", severity: "high" },
            ].map((a, i) => (
              <div key={i} style={{ background: C.card, border: `1px solid ${a.severity === "high" ? `${C.danger}30` : C.border}`, borderRadius: 16, padding: "14px 16px", marginBottom: 8 }}>
                <div style={{ display: "flex", gap: 10 }}>
                  <span style={{ fontSize: 18 }}>{a.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{a.desc}</div>
                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                      <button style={{ fontSize: 10, fontWeight: 600, color: C.green, background: C.greenLight, border: "none", borderRadius: 8, padding: "4px 10px", cursor: "pointer" }}>✓ Confirmar</button>
                      <button style={{ fontSize: 10, fontWeight: 600, color: C.muted, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "4px 10px", cursor: "pointer" }}>Detalhe</button>
                      <span style={{ fontSize: 10, color: C.muted, marginLeft: "auto", alignSelf: "center" }}>{a.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        
        {tab === "drivers" && (
          <>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 12 }}>Motoristas verificados perto de si</div>
            {[
              { name: "Carlos M.", route: "01", rating: 4.7, trips: 1240, status: "online", compliance: 98 },
              { name: "Ahmed S.", route: "07", rating: 4.3, trips: 890, status: "online", compliance: 91 },
              { name: "Maria L.", route: "03", rating: 4.9, trips: 2100, status: "em rota", compliance: 99 },
            ].map((d, i) => (
              <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "14px 16px", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 22, background: `linear-gradient(135deg, ${C.amber}, #F97316)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 800 }}>{d.name.split(" ").map(n => n[0]).join("")}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{d.name}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, color: "#fff", background: d.status === "online" ? C.green : C.amber, padding: "2px 6px", borderRadius: 4 }}>{d.status.toUpperCase()}</span>
                    </div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>Rota {d.route} · ⭐ {d.rating} · {d.trips} viagens</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                      <span style={{ fontSize: 10, color: d.compliance > 95 ? C.green : C.amber, fontWeight: 600 }}>{d.compliance}% conformidade</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        
        {tab === "groups" && (
          <>
            {[
              { name: "Viajantes Matola→Baixa", members: 234, icon: "🚌", active: true },
              { name: "Pais Escola KaMpfumo", members: 89, icon: "🏫", active: true },
              { name: "Trabalhadores Costa Sol", members: 156, icon: "🏢", active: false },
            ].map((g, i) => (
              <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "14px 16px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: C.indigoLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{g.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{g.name}</div>
                  <div style={{ fontSize: 11, color: C.muted }}>{g.members} membros · {g.active ? "Activo agora" : "Última msg 2h"}</div>
                </div>
                <button style={{ background: C.indigo, color: "#fff", border: "none", borderRadius: 10, padding: "8px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Entrar</button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const TicketScreen = ({ go, back }) => {
  const [step, setStep] = useState(0);
  
  if (step === 1) return (
    <div style={{ flex: 1, overflow: "auto", background: C.dark }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={() => setStep(0)} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Bilhete Activo</div>
        </div>
        
        <div style={{ background: `linear-gradient(145deg, ${C.indigo} 0%, ${C.indigoDark} 100%)`, borderRadius: 24, padding: "24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -25, right: -25, width: 90, height: 90, borderRadius: 45, background: "rgba(255,255,255,0.06)" }} />
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Xitimela · Bilhete Comunitário</div>
          
          <div style={{ width: 130, height: 130, margin: "12px auto", background: "#fff", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 100 100" width="110" height="110">
              {[...Array(12)].map((_, r) =>
                [...Array(12)].map((_, c) => {
                  const corner = (r<3&&c<3)||(r<3&&c>8)||(r>8&&c<3);
                  return (corner || Math.random()>0.4) ? <rect key={`${r}${c}`} x={c*8+2} y={r*8+2} width="7" height="7" rx="1.5" fill={C.dark}/> : null;
                })
              )}
            </svg>
          </div>
          
          <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "0.12em" }}>XTM-5571</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>Rota 01 · BRT Baixa–Magoanine</div>
          
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 16 }}>
            <div><div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Tarifa</div><div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>15 MT</div></div>
            <div><div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Verificado</div><div style={{ fontSize: 14, fontWeight: 700, color: C.green }}>✓ Sim</div></div>
            <div><div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Pontos</div><div style={{ fontSize: 14, fontWeight: 700, color: C.amber }}>+5</div></div>
          </div>
        </div>
        
        {/* Rate your trip prompt */}
        <div style={{ marginTop: 20, background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: "16px", textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Avalie esta viagem</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 12 }}>
            {["😟","😐","🙂","😊","🤩"].map((e, i) => (
              <button key={i} style={{ width: 44, height: 44, borderRadius: 22, background: "rgba(255,255,255,0.08)", border: "none", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{e}</button>
            ))}
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Ganhe 10 pontos por cada avaliação</div>
        </div>
        
        {/* Report button */}
        <button style={{ width: "100%", marginTop: 12, background: `${C.danger}20`, border: `1px solid ${C.danger}40`, borderRadius: 14, padding: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}>
          <span style={{ fontSize: 14 }}>🚨</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.danger }}>Reportar Problema</span>
        </button>
      </div>
    </div>
  );
  
  return (
    <div style={{ flex: 1, overflow: "auto" }}>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={back} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M9 1L1 8l8 7" stroke={C.text} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
          </button>
          <div style={{ fontSize: 20, fontWeight: 800, color: C.text }}>Comprar Bilhete</div>
        </div>
        
        {/* Route info with community data */}
        <div style={{ background: C.indigoLight, borderRadius: 18, padding: "16px", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: C.indigo, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>01</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Baixa — Magoanine</div>
              <div style={{ fontSize: 11, color: C.muted }}>BRT · 45 min · 24 paragens</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.7)", borderRadius: 10, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.green }}>⭐ 4.2</div>
              <div style={{ fontSize: 8, color: C.muted }}>AVALIAÇÃO</div>
            </div>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.7)", borderRadius: 10, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.indigo }}>96%</div>
              <div style={{ fontSize: 8, color: C.muted }}>CONFORMIDADE</div>
            </div>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.7)", borderRadius: 10, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.amber }}>Normal</div>
              <div style={{ fontSize: 8, color: C.muted }}>LOTAÇÃO</div>
            </div>
          </div>
        </div>
        
        {/* Payment */}
        <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Pagar</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          {[
            { icon: "💵", label: "Dinheiro", desc: "Recibo digital" },
            { icon: "📲", label: "M-Pesa", desc: "Pagamento mobile" },
            { icon: "📱", label: "USSD", desc: "*567*15#" },
            { icon: "💳", label: "Famba Card", desc: "Toque no leitor" },
          ].map((m, i) => (
            <button key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 12px", cursor: "pointer", textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{m.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{m.label}</div>
              <div style={{ fontSize: 10, color: C.muted }}>{m.desc}</div>
            </button>
          ))}
        </div>
        
        <button onClick={() => setStep(1)} style={{ width: "100%", background: C.indigo, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${C.indigo}40` }}>
          Comprar · 15 MT + 5 pontos
        </button>
        
        <div style={{ textAlign: "center", marginTop: 10, fontSize: 11, color: C.muted }}>
          Cada compra contribui para a rede comunitária
        </div>
      </div>
    </div>
  );
};

const ProfileScreen = () => (
  <div style={{ flex: 1, overflow: "auto" }}>
    <div style={{ padding: "16px 20px" }}>
      {/* User card */}
      <div style={{ background: `linear-gradient(145deg, ${C.indigo} 0%, ${C.indigoDark} 100%)`, borderRadius: 24, padding: "24px", textAlign: "center", marginBottom: 20 }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 24, fontWeight: 800, color: "#fff" }}>MC</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Maria Costa</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>Membro desde Jan 2025</div>
        
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          {[
            { label: "Pontos", value: "847" },
            { label: "Reportes", value: "12" },
            { label: "Viagens", value: "156" },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "10px" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Badges */}
      <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Conquistas</div>
      <div style={{ display: "flex", gap: 10, marginBottom: 20, overflowX: "auto" }}>
        {[
          { icon: "🏆", label: "Top Reporter", desc: "10+ reportes", earned: true },
          { icon: "🌟", label: "Primeiro Mês", desc: "30 viagens", earned: true },
          { icon: "🛡️", label: "Guardião", desc: "Anti-fraude", earned: true },
          { icon: "🎯", label: "Mestre Rotas", desc: "Todas as rotas", earned: false },
        ].map((b, i) => (
          <div key={i} style={{ minWidth: 90, background: b.earned ? C.card : `${C.border}50`, borderRadius: 16, padding: "14px 10px", textAlign: "center", border: `1px solid ${b.earned ? C.border : "transparent"}`, opacity: b.earned ? 1 : 0.5, flexShrink: 0 }}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>{b.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{b.label}</div>
            <div style={{ fontSize: 9, color: C.muted }}>{b.desc}</div>
          </div>
        ))}
      </div>
      
      {/* Impact */}
      <div style={{ background: C.greenLight, borderRadius: 18, padding: "16px", marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.green, marginBottom: 8 }}>Seu Impacto na Comunidade</div>
        <div style={{ fontSize: 12, color: C.text, lineHeight: 1.6 }}>
          Os seus reportes ajudaram a identificar <strong>3 motoristas</strong> que cortavam rotas regularmente. A conformidade das rotas 01 e 07 aumentou <strong>12%</strong> desde o seu primeiro reporte.
        </div>
      </div>
    </div>
  </div>
);

export default function XitimelaApp() {
  const [screen, setScreen] = useState(S.HOME);
  const [hist, setHist] = useState([S.HOME]);
  const go = s => { setHist(h => [...h, s]); setScreen(s); };
  const back = () => { const h = [...hist]; h.pop(); setScreen(h[h.length-1]||S.HOME); setHist(h.length?h:[S.HOME]); };
  const showNav = [S.HOME, S.DISCOVER, S.LIVE, S.PROFILE].includes(screen);

  return (
    <div style={{ width: 390, height: 844, margin: "20px auto", background: C.bg, borderRadius: 44, overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', boxShadow: "0 25px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)" }}>
      <StatusBar />
      {screen === S.HOME && <HomeScreen go={go} />}
      {screen === S.DISCOVER && <DiscoverScreen go={go} />}
      {screen === S.LIVE && <CommunityScreen />}
      {screen === S.TICKET && <TicketScreen go={go} back={back} />}
      {screen === S.PROFILE && <ProfileScreen />}
      {showNav && <Nav active={screen} go={go} />}
    </div>
  );
}
