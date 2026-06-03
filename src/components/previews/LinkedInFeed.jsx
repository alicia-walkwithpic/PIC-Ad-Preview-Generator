import ImagePlaceholder from '../shared/ImagePlaceholder'

export default function LinkedInFeed({ data }) {
  return (
    <div style={{ fontFamily: '-apple-system, system-ui, sans-serif', width: 554, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div style={{ width: 48, height: 48, borderRadius: 4, overflow: 'hidden', border: '1px solid #e0e0e0', flexShrink: 0 }}>
          {data.logo ? <img src={data.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ width: '100%', height: '100%', background: '#0a66c2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 20 }}>{(data.companyName || 'C')[0]}</div>}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#000', lineHeight: 1.3 }}>{data.companyName || 'Company Name'}</div>
          <div style={{ fontSize: 12, color: '#666' }}>Sponsored &middot; &#127760;</div>
        </div>
        <span style={{ color: '#666', fontSize: 20, cursor: 'pointer' }}>&#xB7;&#xB7;&#xB7;</span>
      </div>
      {/* Intro text */}
      <div style={{ padding: '0 16px 12px', fontSize: 14, color: '#000', lineHeight: 1.5 }}>{data.introText || 'Your introductory text appears here. This is where you engage your LinkedIn audience.'}</div>
      {/* Image */}
      {data.image ? <img src={data.image} alt="" style={{ width: '100%', aspectRatio: '1.91/1', objectFit: 'cover', display: 'block' }} /> : <ImagePlaceholder style={{ width: '100%', minHeight: 290 }} />}
      {/* Headline / CTA bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: '#f3f2ef', borderTop: '1px solid #e0e0e0' }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#000' }}>{data.headline || 'Your Ad Headline'}</div>
          <div style={{ fontSize: 12, color: '#666' }}>{data.description || 'Ad description'}</div>
        </div>
        <button style={{ background: 'transparent', border: '1px solid #0a66c2', borderRadius: 16, padding: '6px 16px', fontSize: 14, fontWeight: 600, color: '#0a66c2', cursor: 'pointer', whiteSpace: 'nowrap' }}>{data.ctaButton || 'Learn More'}</button>
      </div>
      {/* Reactions row */}
      <div style={{ padding: '8px 16px', borderTop: '1px solid #e0e0e0', display: 'flex', gap: 16 }}>
        {['👍 Like', '💬 Comment', '🔁 Repost', '✉️ Send'].map(a => <button key={a} style={{ background: 'none', border: 'none', fontSize: 13, color: '#666', cursor: 'pointer', fontWeight: 500 }}>{a}</button>)}
      </div>
    </div>
  )
}
