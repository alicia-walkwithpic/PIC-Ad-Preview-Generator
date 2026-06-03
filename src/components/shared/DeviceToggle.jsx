export default function DeviceToggle({ value, onChange }) {
  return (
    <div className="flex gap-1 bg-gray-800 rounded-lg p-1">
      {['desktop','mobile'].map(d => (
        <button
          key={d}
          onClick={() => onChange(d)}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium transition-colors capitalize ${value === d ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}
        >
          {d === 'desktop' ? (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          ) : (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg>
          )}
          {d}
        </button>
      ))}
    </div>
  )
}
