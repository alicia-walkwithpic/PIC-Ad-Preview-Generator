import PlatformLogo from '../shared/PlatformLogo'

const platforms = [
  { key: 'google', label: 'Google Ads' },
  { key: 'bing', label: 'Microsoft / Bing' },
  { key: 'meta', label: 'Meta Ads' },
  { key: 'linkedin', label: 'LinkedIn Ads' },
]

export default function Sidebar({ activePlatform, onSelect }) {
  return (
    <div className="w-16 bg-gray-900 border-r border-gray-800 flex flex-col items-center py-4 gap-2 shrink-0">
      <div className="mb-4 text-center px-1">
        <span className="text-white font-bold text-xs tracking-widest">PIC</span>
      </div>
      {platforms.map(p => (
        <button
          key={p.key}
          onClick={() => onSelect(p.key)}
          title={p.label}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activePlatform === p.key ? 'bg-gray-700 ring-2 ring-blue-500' : 'hover:bg-gray-800'}`}
        >
          <PlatformLogo platform={p.key} size={22} />
        </button>
      ))}
    </div>
  )
}
