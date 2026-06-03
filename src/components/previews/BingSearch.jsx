export default function BingSearch({ data }) {
  const headlines = (data.headlines || ['Your Headline 1', 'Headline 2', 'Headline 3']).filter(Boolean).slice(0, 3)
  const descriptions = (data.descriptions || ['Your ad description appears here on Microsoft Bing search results page.']).filter(Boolean).slice(0, 2)
  const displayUrl = data.displayUrl || 'www.yourwebsite.com'
  const path1 = data.path1 || ''
  const path2 = data.path2 || ''
  const fullUrl = [displayUrl, path1, path2].filter(Boolean).join(' > ')

  return (
    <div style={{ fontFamily: 'Segoe UI, arial, sans-serif', maxWidth: 600, padding: 16 }}>
      {/* Bing chrome */}
      <div style={{ background: '#fff', borderBottom: '2px solid #00809d', padding: '8px 16px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#008373" d="M5 3l4 1.5v13l5-3-2-1 3-5 4 2v5l-10 6L5 19V3z"/></svg>
        <span style={{ color: '#00809d', fontWeight: 700, fontSize: 18, letterSpacing: 1 }}>Bing</span>
        <div style={{ marginLeft: 8, border: '1px solid #8d8d8d', borderRadius: 20, padding: '4px 12px', fontSize: 13, color: '#333', flex: 1 }}>Search the web</div>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
          <span style={{ fontSize: 11, color: '#fff', background: '#008373', borderRadius: 3, padding: '1px 5px', fontWeight: 600 }}>Ad</span>
          <span style={{ fontSize: 13, color: '#006621' }}>{fullUrl}</span>
        </div>
        <div style={{ fontSize: 18, color: '#001ba0', cursor: 'pointer', marginBottom: 4, fontWeight: 400 }}>
          {headlines.join(' - ')}
        </div>
        {descriptions.map((d, i) => (
          <div key={i} style={{ fontSize: 13, color: '#444', lineHeight: 1.6 }}>{d}</div>
        ))}
      </div>
    </div>
  )
}
