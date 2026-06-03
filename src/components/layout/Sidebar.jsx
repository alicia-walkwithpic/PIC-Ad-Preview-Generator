import PlatformLogo from '../shared/PlatformLogo'

const platforms = [
  { key: 'google', label: 'Google Ads' },
  { key: 'bing', label: 'Microsoft / Bing' },
  { key: 'meta', label: 'Meta Ads' },
  { key: 'linkedin', label: 'LinkedIn Ads' },
]

export default function Sidebar({ activePlatform, onSelect }) {
  return (
    <div style={{ width: 60, background: '#fff', borderRight: '1px solid #e0ddd8', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: 6, flexShrink: 0 }}>
      <div style={{ marginBottom: 12 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#0a66c2', letterSpacing: 2, textTransform: 'uppercase' }}>PIC</span>
      </div>
      {platforms.map(p => (
        <button
          key={p.key}
          onClick={() => onSelect(p.key)}
          title={p.label}
          style={{
            width: 40, height: 40, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: activePlatform === p.key ? '1.5px solid #0a66c2' : '1.5px solid transparent',
            background: activePlatform === p.key ? '#e8f0fb' : 'transparent',
            cursor: 'pointer', transition: 'all 0.15s'
          }}
        >
          <PlatformLogo platform={p.key} size={22} />
        </button>
      ))}
    </div>
  )
}
