import ImagePlaceholder from '../shared/ImagePlaceholder'

export default function GoogleDisplay({ data }) {
  return (
    <div style={{ fontFamily: 'Google Sans, Roboto, sans-serif', width: 336, border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.12)', background: '#fff' }}>
      {data.image ? (
        <img src={data.image} alt="" style={{ width: '100%', height: 176, objectFit: 'cover' }} />
      ) : (
        <ImagePlaceholder style={{ width: '100%', height: 176 }} />
      )}
      <div style={{ padding: '12px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          {data.logo ? <img src={data.logo} alt="" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} /> : <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e8eaf6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#5c6bc0', fontWeight: 700 }}>{(data.businessName || 'B')[0]}</div>}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#202124' }}>{data.businessName || 'Business Name'}</div>
            <div style={{ fontSize: 11, color: '#70757a' }}>Ad</div>
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#202124', marginBottom: 6, lineHeight: 1.3 }}>{data.longHeadline || (data.shortHeadlines && data.shortHeadlines[0]) || 'Your Headline Here'}</div>
        <div style={{ fontSize: 13, color: '#5f6368', marginBottom: 12, lineHeight: 1.5 }}>{(data.descriptions && data.descriptions[0]) || 'Your ad description will appear here.'}</div>
        <button style={{ background: '#1a73e8', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>{data.ctaButton || 'Learn More'}</button>
      </div>
      <div style={{ padding: '6px 16px', borderTop: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: 4 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#70757a"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/></svg>
        <span style={{ fontSize: 11, color: '#70757a' }}>Ad &middot; Google Display Network</span>
      </div>
    </div>
  )
}
