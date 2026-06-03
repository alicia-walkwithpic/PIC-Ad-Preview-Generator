export default function LinkedInInMail({ data }) {
  return (
    <div style={{ fontFamily: '-apple-system, system-ui, sans-serif', width: 520, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ background: '#fff', padding: '12px 16px', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
          {data.logo ? <img src={data.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ width: '100%', height: '100%', background: '#0a66c2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>{(data.senderName || 'S')[0]}</div>}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#000' }}>{data.senderName || 'Sender Name'}</div>
          <div style={{ fontSize: 12, color: '#666' }}>{data.senderTitle || 'Sender Title'}</div>
          <div style={{ fontSize: 11, color: '#0a66c2', background: '#eef3fb', borderRadius: 10, padding: '0 6px', display: 'inline-block', marginTop: 2 }}>Sponsored InMail</div>
        </div>
      </div>
      {/* Banner */}
      {data.bannerImage && <img src={data.bannerImage} alt="" style={{ width: '100%', height: 80, objectFit: 'cover', display: 'block' }} />}
      {/* Subject */}
      <div style={{ padding: '12px 16px 8px', fontWeight: 600, fontSize: 15, color: '#000', borderBottom: '1px solid #f3f2ef' }}>{data.subject || 'Message Subject'}</div>
      {/* Body */}
      <div style={{ padding: '12px 16px', fontSize: 14, color: '#333', lineHeight: 1.6, whiteSpace: 'pre-wrap', minHeight: 120 }}>{data.body || 'Your InMail message body appears here. This can be up to 1500 characters.\n\nPersonalize your message to increase engagement.'}</div>
      {/* CTA */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid #e0e0e0', display: 'flex', gap: 8 }}>
        <button style={{ background: '#0a66c2', color: '#fff', border: 'none', borderRadius: 16, padding: '8px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{data.ctaButton || 'Learn More'}</button>
        <button style={{ background: 'transparent', color: '#666', border: '1px solid #c0c0c0', borderRadius: 16, padding: '8px 20px', fontSize: 14, cursor: 'pointer' }}>Not interested</button>
      </div>
    </div>
  )
}
