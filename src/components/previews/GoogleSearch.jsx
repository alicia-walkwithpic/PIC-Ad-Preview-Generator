export default function GoogleSearch({ data }) {
  const headlines = (data.headlines || ['Your Headline 1', 'Headline 2', 'Headline 3']).filter(Boolean).slice(0, 3)
  const descriptions = (data.descriptions || ['Your ad description goes here. Add compelling copy to drive clicks.', '']).filter(Boolean).slice(0, 2)
  const displayUrl = data.displayUrl || 'www.yourwebsite.com'
  const path1 = data.path1 || ''
  const path2 = data.path2 || ''
  const fullUrl = [displayUrl, path1, path2].filter(Boolean).join(' › ')

  return (
    <div style={{ fontFamily: 'arial, sans-serif', maxWidth: 600, padding: 16 }}>
      {/* Browser chrome */}
      <div style={{ background: '#f8f9fa', border: '1px solid #dfe1e5', borderRadius: 24, padding: '8px 16px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#9aa0a6" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#9aa0a6" strokeWidth="2"/></svg>
        <span style={{ fontSize: 14, color: '#202124' }}>google.com</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          {['#ea4335','#fbbc05','#34a853'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        </div>
      </div>
      {/* Ad result */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <span style={{ fontSize: 11, color: '#202124', border: '1px solid #dadce0', borderRadius: 4, padding: '0 4px', lineHeight: '16px' }}>Sponsored</span>
          <span style={{ fontSize: 13, color: '#3c4043' }}>{fullUrl}</span>
        </div>
        <div style={{ fontSize: 20, color: '#1a0dab', cursor: 'pointer', lineHeight: 1.3, marginBottom: 4 }}>
          {headlines.join(' | ')}
        </div>
        {descriptions.map((d, i) => (
          <div key={i} style={{ fontSize: 14, color: '#4d5156', lineHeight: 1.58 }}>{d}</div>
        ))}
      </div>
    </div>
  )
}
