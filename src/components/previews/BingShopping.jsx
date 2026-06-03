import ImagePlaceholder from '../shared/ImagePlaceholder'

export default function BingShopping({ data }) {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: 580, padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, borderBottom: '1px solid #e0e0e0', paddingBottom: 8 }}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#008373" d="M5 3l4 1.5v13l5-3-2-1 3-5 4 2v5l-10 6L5 19V3z"/></svg>
        <span style={{ color: '#00809d', fontWeight: 700 }}>Bing</span>
        <span style={{ color: '#555', fontSize: 13, marginLeft: 4 }}>Shopping</span>
        <span style={{ fontSize: 11, color: '#fff', background: '#008373', borderRadius: 3, padding: '1px 5px', marginLeft: 8 }}>Sponsored</span>
      </div>
      <div style={{ width: 160, border: '1px solid #e0e0e0', borderRadius: 4, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
        {data.image ? <img src={data.image} alt="" style={{ width: '100%', height: 160, objectFit: 'cover' }} /> : <ImagePlaceholder style={{ width: '100%', height: 160 }} />}
        <div style={{ padding: '8px 10px' }}>
          <div style={{ fontSize: 13, color: '#001ba0', marginBottom: 4, lineHeight: 1.3 }}>{data.productTitle || 'Product Name'}</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 2 }}>{data.price || '$00.00'}</div>
          <div style={{ fontSize: 11, color: '#666' }}>{data.storeName || 'Store Name'}</div>
        </div>
      </div>
    </div>
  )
}
