export default function FormatTabs({ formats, activeFormat, onSelect }) {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid #e0ddd8', padding: '0 20px', background: '#fff', flexShrink: 0 }}>
      {Object.entries(formats).map(([key, fmt]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          style={{
            padding: '10px 14px', fontSize: 13,
            fontWeight: activeFormat === key ? 600 : 400,
            color: activeFormat === key ? '#0a66c2' : '#5e5e5e',
            background: 'none', border: 'none',
            borderBottom: activeFormat === key ? '2px solid #0a66c2' : '2px solid transparent',
            cursor: 'pointer', transition: 'all 0.15s',
            whiteSpace: 'nowrap', fontFamily: "'DM Sans', sans-serif",
            marginBottom: -1,
          }}
        >
          {fmt.label}
        </button>
      ))}
    </div>
  )
}
