import ImagePlaceholder from '../shared/ImagePlaceholder'

export default function GooglePMax({ data }) {
  const headlines = (data.headlines || ['Headline 1', 'Headline 2', 'Headline 3']).filter(Boolean).slice(0, 3)
  return (
    <div style={{ fontFamily: 'Google Sans, Roboto, sans-serif', width: 360, border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.12)', background: '#fff' }}>
      {data.image ? <img src={data.image} alt="" style={{ width: '100%', height: 188, objectFit: 'cover' }} /> : <ImagePlaceholder style={{ width: '100%', height: 188 }} />}
      <div style={{ padding: '12px 16px 16px' }}>
        <div style={{ fontSize: 11, color: '#70757a', marginBottom: 4, letterSpacing: 0.5, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ background: '#f1f3f4', borderRadius: 3, padding: '1px 5px', fontSize: 10 }}>Performance Max</span>
          <span>&middot; Ad</span>
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#202124', marginBottom: 4, lineHeight: 1.3 }}>{headlines.join(' · ')}</div>
        <div style={{ fontSize: 13, color: '#5f6368', marginBottom: 12 }}>{data.longHeadline || 'Discover more with our latest offer.'}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {data.logo ? <img src={data.logo} alt="" style={{ width: 24, height: 24, borderRadius: '50%' }} /> : <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#1a73e8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700 }}>{(data.businessName || 'B')[0]}</div>}
            <span style={{ fontSize: 12, color: '#3c4043' }}>{data.businessName || 'Your Business'}</span>
          </div>
          <button style={{ background: '#1a73e8', color: '#fff', border: 'none', borderRadius: 4, padding: '7px 14px', fontSize: 13, fontWeight: 500 }}>{data.ctaButton || 'Learn More'}</button>
        </div>
      </div>
    </div>
  )
}
