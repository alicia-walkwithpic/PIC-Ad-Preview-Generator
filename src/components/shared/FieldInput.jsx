import CharCounter from './CharCounter'
import ImageUploader from './ImageUploader'

const inputStyle = {
  width: '100%', fontFamily: "'DM Sans', sans-serif", fontSize: 13,
  padding: '7px 10px', border: '1px solid #e0ddd8', borderRadius: 4,
  background: '#fafafa', color: '#191919', outline: 'none', resize: 'none',
}

const labelStyle = { display: 'block', fontSize: 12, fontWeight: 500, color: '#5e5e5e', marginBottom: 4 }

export default function FieldInput({ fieldKey, spec, value, onChange }) {
  if (spec.type === 'image') {
    return <ImageUploader value={value} onChange={(v) => onChange(fieldKey, v)} label={spec.label} aspectRatio={spec.aspectRatio} />
  }
  if (spec.type === 'select') {
    return (
      <div style={{ marginBottom: 12 }}>
        <label style={labelStyle}>{spec.label}</label>
        <select value={value || spec.options[0]} onChange={e => onChange(fieldKey, e.target.value)} style={inputStyle}>
          {spec.options.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
    )
  }
  if (spec.type === 'textarea') {
    return (
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <label style={{ ...labelStyle, marginBottom: 0 }}>{spec.label}</label>
          {spec.max && <CharCounter value={value || ''} max={spec.max} />}
        </div>
        <textarea value={value || ''} onChange={e => onChange(fieldKey, e.target.value)} rows={3} style={{ ...inputStyle, lineHeight: 1.5, minHeight: 72 }} placeholder={spec.label} />
      </div>
    )
  }
  if (spec.type === 'multi') {
    const items = value || ['', '', '']
    return (
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <label style={{ ...labelStyle, marginBottom: 0 }}>{spec.label}</label>
          <span style={{ fontSize: 11, color: '#9a9a9a' }}>max {spec.count}</span>
        </div>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <input value={item} onChange={e => { const next = [...items]; next[i] = e.target.value; onChange(fieldKey, next) }} style={{ ...inputStyle, flex: 1 }} placeholder={`${spec.label} ${i + 1}`} />
            <CharCounter value={item} max={spec.max} />
          </div>
        ))}
        {items.length < spec.count && (
          <button onClick={() => onChange(fieldKey, [...items, ''])} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0a66c2', fontSize: 12, fontWeight: 500, padding: '4px 0', fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add {spec.label}
          </button>
        )}
      </div>
    )
  }
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <label style={{ ...labelStyle, marginBottom: 0 }}>{spec.label}</label>
        {spec.max && <CharCounter value={value || ''} max={spec.max} />}
      </div>
      <input value={value || ''} onChange={e => onChange(fieldKey, e.target.value)} style={inputStyle} placeholder={spec.label} />
    </div>
  )
}
