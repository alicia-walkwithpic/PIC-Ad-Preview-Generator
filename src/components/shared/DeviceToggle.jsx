export default function DeviceToggle({ value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 2, background: '#f4f2ee', borderRadius: 8, padding: 3, border: '1px solid #e0ddd8' }}>
      {['desktop', 'mobile'].map(d => (
        <button
          key={d}
          onClick={() => onChange(d)}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 500,
            border: 'none', cursor: 'pointer',
            background: value === d ? '#fff' : 'transparent',
            color: value === d ? '#191919' : '#9a9a9a',
            boxShadow: value === d ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.15s', textTransform: 'capitalize',
            fontFamily: "'DM Sans', sans-serif"
          }}
        >
          {d === 'desktop' ? (
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          ) : (
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg>
          )}
          {d}
        </button>
      ))}
    </div>
  )
}
