import { Routes, Route, Link, useLocation } from 'react-router-dom'
import ReportPage from './components/ReportPage'
import FambaDigital from './components/FambaDigital'
import Mover from './components/Mover'
import Xitimela from './components/Xitimela'
import DriverInterface from './components/DriverInterface'
import AdminPanel from './components/AdminPanel'

const LOGO_URL = 'https://avatars.mds.yandex.net/get-lpc/14837328/21641dca-3288-4eeb-8d99-81f8cb31a763/orig'

function Nav() {
  const location = useLocation()

  return (
    <nav style={{
      background: '#000',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0.75rem 0',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 1.87rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Yango Tech"
            style={{ height: 22, filter: 'invert(1)' }}
          />
        </Link>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { to: '/', label: 'Report' },
            { to: '/concept-1', label: 'Famba Digital' },
            { to: '/concept-2', label: 'Mover' },
            { to: '/concept-3', label: 'Xitimela' },
            { to: '/driver', label: 'Driver' },
            { to: '/admin', label: 'Admin' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontSize: '0.68rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: location.pathname === link.to ? '#FF1A1A' : 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontFamily: '"Yango Group Text", sans-serif',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

function DemoWrapper({ title, subtitle, color, children }) {
  return (
    <div>
      {/* Demo header */}
      <div style={{
        background: '#000',
        padding: '3rem 0 2rem',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: '0.68rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '0.75rem',
          fontFamily: '"Yango Group Text", sans-serif',
        }}>
          Interactive Prototype
        </div>
        <h1 style={{
          fontFamily: '"Yango Headline", sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          lineHeight: '90%',
          textTransform: 'uppercase',
          letterSpacing: 'calc(1em/50)',
          color: color,
          marginBottom: '0.5rem',
        }}>
          {title}
        </h1>
        <p style={{
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.05em',
          maxWidth: 500,
          margin: '0 auto',
          fontFamily: '"Yango Group Text", sans-serif',
        }}>
          {subtitle}
        </p>
      </div>
      
      {/* Phone mockup container */}
      <div style={{
        background: '#F5F5F5',
        padding: '2rem 1rem 4rem',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
        {children}
      </div>

      {/* Back to report */}
      <div style={{
        background: '#F5F5F5',
        padding: '0 0 3rem',
        textAlign: 'center',
      }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#FF1A1A',
            color: '#fff',
            borderRadius: '2rem',
            padding: '0.75rem 1.5rem',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: '"Yango Group Text", sans-serif',
          }}
        >
          ← Back to Full Report
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ReportPage />} />
        <Route path="/concept-1" element={
          <DemoWrapper title="Famba Digital" subtitle="Cash-bridge — meet users where they are. Tap through all screens." color="#E85D04">
            <FambaDigital />
          </DemoWrapper>
        } />
        <Route path="/concept-2" element={
          <DemoWrapper title="Mover" subtitle="Mobile money native — your phone number is your transit account." color="#0D9488">
            <Mover />
          </DemoWrapper>
        } />
        <Route path="/concept-3" element={
          <DemoWrapper title="Xitimela" subtitle="Community intelligence — passengers and drivers build the map together." color="#4F46E5">
            <Xitimela />
          </DemoWrapper>
        } />
        <Route path="/driver" element={
          <DemoWrapper title="Driver Interface" subtitle="Yango Pro for bus operators — route navigation, fare logging, compliance tracking." color="#FF1A1A">
            <DriverInterface />
          </DemoWrapper>
        } />
        <Route path="/admin" element={
          <DemoWrapper title="AMT Admin Dashboard" subtitle="Real-time fleet monitoring, route compliance, revenue analytics for the transport authority." color="#FF1A1A">
            <AdminPanel />
          </DemoWrapper>
        } />
        <Route path="*" element={
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <h2 style={{ color: '#FF1A1A', marginBottom: '1rem' }}>404</h2>
            <p style={{ color: '#7A7A7A', marginBottom: '2rem' }}>Página não encontrada</p>
            <Link to="/" style={{ color: '#FF1A1A', textDecoration: 'none', fontWeight: 500 }}>← Voltar ao Relatório</Link>
          </div>
        } />
      </Routes>
    </>
  )
}
