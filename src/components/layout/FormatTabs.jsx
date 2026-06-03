export default function FormatTabs({ formats, activeFormat, onSelect }) {
  return (
    <div className="flex gap-1 border-b border-gray-800 px-4 pt-3 pb-0">
      {Object.entries(formats).map(([key, fmt]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`px-3 py-1.5 text-sm rounded-t-lg transition-colors ${activeFormat === key ? 'bg-gray-800 text-white border-t border-l border-r border-gray-700 -mb-px' : 'text-gray-500 hover:text-gray-300'}`}
        >
          {fmt.label}
        </button>
      ))}
    </div>
  )
}
