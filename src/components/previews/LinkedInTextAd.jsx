import ImagePlaceholder from '../shared/ImagePlaceholder'

export default function LinkedInTextAd({ data }) {
  return (
    <div style={{ fontFamily: '-apple-system, system-ui, sans-serif', width: 300 }}>
      <div style={{ fontSize: 11, color: '#666', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>Promoted</div>
      <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 4, padding: '12px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <div style={{ width: 50, height: 50, borderRadius: 4, overflow: 'hidden', flexShrink: 0, border: '1px solid #e0e0e0' }}>
          {data.image ? <img src={data.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ width: '100%', height: '100%', background: '#0a66c2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18 }}>Ad</div>}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#0a66c2', marginBottom: 4, lineHeight: 1.2 }}>{data.headline || 'Your Ad Headline'}</div>
          <div style={{ fontSize: 12, color: '#333', lineHeight: 1.4 }}>{data.description || 'Your LinkedIn text ad description appears here.'}</div>
        </div>
      </div>
    </div>
  )
}
