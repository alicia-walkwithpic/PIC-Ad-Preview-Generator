import ImagePlaceholder from '../shared/ImagePlaceholder'

export default function MetaFeed({ data, darkMode }) {
  const bg = darkMode ? '#18191a' : '#f0f2f5'
  const cardBg = darkMode ? '#242526' : '#fff'
  const textPrimary = darkMode ? '#e4e6ea' : '#050505'
  const textSecondary = darkMode ? '#b0b3b8' : '#65676b'
  const borderColor = darkMode ? '#3a3b3c' : '#ced0d4'

  return (
    <div style={{ width: 375, background: bg, borderRadius: 16, overflow: 'hidden', fontFamily: '-apple-system, Helvetica, Arial, sans-serif', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
      {/* Status bar */}
      <div style={{ background: bg, padding: '10px 16px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: textPrimary }}>9:41</span>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <svg width="15" height="10" viewBox="0 0 15 10"><rect x="0" y="3" width="3" height="7" rx="1" fill={textPrimary} opacity="0.4"/><rect x="4" y="2" width="3" height="8" rx="1" fill={textPrimary} opacity="0.6"/><rect x="8" y="0" width="3" height="10" rx="1" fill={textPrimary}/><rect x="12" y="1" width="2.5" height="8" rx="1" fill={textPrimary} opacity="0.3"/></svg>
          <svg width="12" height="10" viewBox="0 0 12 10"><path d="M6 2a6 6 0 016 6H0a6 6 0 016-6z" fill={textPrimary} opacity="0.3"/><path d="M6 4a4 4 0 014 4H2a4 4 0 014-4z" fill={textPrimary} opacity="0.6"/><circle cx="6" cy="9" r="1.5" fill={textPrimary}/></svg>
          <span style={{ fontSize: 11, fontWeight: 600, color: textPrimary }}>100%</span>
        </div>
      </div>
      {/* Nav */}
      <div style={{ background: cardBg, borderBottom: `1px solid ${borderColor}`, padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 22, fontWeight: 800, color: '#0866ff', fontFamily: 'Georgia, serif' }}>f</span>
        <div style={{ display: 'flex', gap: 8 }}>
          {['\u{1F3E0}','\u{1F465}','\u{25B6}️','\u{1F6D2}','☰'].map((icon, i) => <span key={i} style={{ fontSize: 18, opacity: i === 0 ? 1 : 0.4 }}>{icon}</span>)}
        </div>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#e4e6ea' }} />
      </div>
      {/* Ad card */}
      <div style={{ background: cardBg, margin: '8px 0' }}>
        <div style={{ padding: '12px 12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#0866ff,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16 }}>{(data.pageName || 'P')[0]}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: textPrimary }}>{data.pageName || 'Your Page Name'}</div>
              <div style={{ fontSize: 12, color: textSecondary }}>Sponsored &middot; <span style={{ fontSize: 12 }}>&nbsp;</span></div>
            </div>
          </div>
          <span style={{ color: textSecondary, fontSize: 18 }}>&#xB7;&#xB7;&#xB7;</span>
        </div>
        <div style={{ padding: '8px 12px', fontSize: 14, color: textPrimary, lineHeight: 1.4 }}>{data.primaryText || 'Your primary ad text appears here. Add compelling copy to drive action.'}</div>
        {data.image ? <img src={data.image} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} /> : <ImagePlaceholder style={{ width: '100%', minHeight: 300 }} />}
        {/* Headline bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: darkMode ? '#3a3b3c' : '#f2f3f5', borderTop: `1px solid ${borderColor}` }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: textPrimary }}>{data.headline || 'Your Ad Headline'}</div>
            <div style={{ fontSize: 12, color: textSecondary }}>{data.description || 'Ad description'}</div>
          </div>
          <button style={{ background: darkMode ? '#4e4f50' : '#e4e6ea', border: 'none', borderRadius: 6, padding: '7px 12px', fontSize: 13, fontWeight: 600, color: textPrimary, cursor: 'pointer', whiteSpace: 'nowrap' }}>{data.ctaButton || 'Learn More'}</button>
        </div>
        {/* Reactions row */}
        <div style={{ padding: '8px 12px', display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${borderColor}` }}>
          {['👍 Like', '💬 Comment', '↗ Share'].map(action => (
            <button key={action} style={{ background: 'none', border: 'none', color: textSecondary, fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: '4px 8px' }}>{action}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
