import ImagePlaceholder from '../shared/ImagePlaceholder'

export default function MetaStory({ data }) {
  return (
    <div style={{ width: 320, height: 569, borderRadius: 20, overflow: 'hidden', position: 'relative', fontFamily: '-apple-system, Helvetica, Arial, sans-serif', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
      {data.image ? (
        <img src={data.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
      ) : (
        <ImagePlaceholder style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
      )}
      {/* Gradient overlays */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
      {/* Story segments */}
      <div style={{ position: 'absolute', top: 8, left: 12, right: 12, display: 'flex', gap: 3 }}>
        {[1, 0.3, 0.3].map((op, i) => <div key={i} style={{ flex: 1, height: 2, background: `rgba(255,255,255,${op})`, borderRadius: 2 }} />)}
      </div>
      {/* Top bar */}
      <div style={{ position: 'absolute', top: 14, left: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #fff', background: 'linear-gradient(135deg,#0866ff,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>{(data.pageName || 'P')[0]}</div>
          <div>
            <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{data.pageName || 'Your Page'}</div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>Sponsored</div>
          </div>
        </div>
        <span style={{ color: '#fff', fontSize: 20 }}>&#x2715;</span>
      </div>
      {/* Text overlay */}
      {data.textOverlay && (
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: 18, fontWeight: 700, padding: '8px 16px', borderRadius: 4, textAlign: 'center', maxWidth: '80%' }}>
          {data.textOverlay}
        </div>
      )}
      {/* Bottom CTA */}
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>&#x2227;</span>
          <span>Swipe up</span>
        </div>
        <button style={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: 20, padding: '8px 24px', fontSize: 14, fontWeight: 600, color: '#050505', cursor: 'pointer' }}>{data.ctaButton || 'Learn More'}</button>
      </div>
    </div>
  )
}
