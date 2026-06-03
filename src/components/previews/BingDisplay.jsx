import ImagePlaceholder from '../shared/ImagePlaceholder'

export default function BingDisplay({ data }) {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', width: 320, border: '1px solid #ddd', borderRadius: 4, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      {data.image ? <img src={data.image} alt="" style={{ width: '100%', height: 168, objectFit: 'cover' }} /> : <ImagePlaceholder style={{ width: '100%', height: 168 }} />}
      <div style={{ padding: '10px 12px' }}>
        <div style={{ fontSize: 11, color: '#006621', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ background: '#008373', color: '#fff', borderRadius: 2, padding: '0 4px', fontSize: 10 }}>Ad</span>
          <span>{data.businessName || 'Your Business'}</span>
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#001ba0', marginBottom: 6 }}>{data.shortHeadline || data.longHeadline || 'Your Headline'}</div>
        <div style={{ fontSize: 13, color: '#444', marginBottom: 10 }}>{data.description || 'Your display ad description appears here.'}</div>
        <button style={{ background: '#008373', color: '#fff', border: 'none', borderRadius: 2, padding: '7px 14px', fontSize: 13, cursor: 'pointer' }}>{data.ctaButton || 'Learn More'}</button>
      </div>
    </div>
  )
}
