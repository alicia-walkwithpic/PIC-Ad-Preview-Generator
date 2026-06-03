import { useRef } from 'react'

export default function ImageUploader({ value, onChange, label = 'Image', aspectRatio }) {
  const inputRef = useRef()
  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => onChange(ev.target.result)
    reader.readAsDataURL(file)
  }
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#5e5e5e', marginBottom: 4 }}>
        {label} {aspectRatio && <span style={{ color: '#9a9a9a', fontWeight: 400 }}>({aspectRatio})</span>}
      </label>
      {value ? (
        <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid #e0ddd8' }}>
          <img src={value} alt="upload" style={{ width: '100%', display: 'block', maxHeight: 140, objectFit: 'cover' }} />
          <button onClick={() => onChange(null)} style={{ position: 'absolute', top: 4, right: 4, background: 'rgba(0,0,0,0.55)', color: '#fff', border: 'none', borderRadius: '50%', width: 22, height: 22, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current.click()}
          style={{ border: '2px dashed #e0ddd8', borderRadius: 8, padding: '16px 12px', textAlign: 'center', cursor: 'pointer', background: '#fafafa', transition: 'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a66c2'; e.currentTarget.style.background = '#e8f0fb' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0ddd8'; e.currentTarget.style.background = '#fafafa' }}
        >
          <div style={{ fontSize: 22, marginBottom: 4 }}>🖼️</div>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#5e5e5e' }}>Click or drag an image here</div>
          <div style={{ fontSize: 11, color: '#9a9a9a', marginTop: 2 }}>PNG, JPG, GIF, WebP</div>
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
    </div>
  )
}
