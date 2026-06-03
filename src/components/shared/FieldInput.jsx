import CharCounter from './CharCounter'
import ImageUploader from './ImageUploader'

export default function FieldInput({ fieldKey, spec, value, onChange }) {
  if (spec.type === 'image') {
    return <ImageUploader value={value} onChange={(v) => onChange(fieldKey, v)} label={spec.label} aspectRatio={spec.aspectRatio} />
  }
  if (spec.type === 'select') {
    return (
      <div className="mb-3">
        <label className="block text-xs font-medium text-gray-400 mb-1">{spec.label}</label>
        <select
          value={value || spec.options[0]}
          onChange={e => onChange(fieldKey, e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 text-white rounded px-2 py-1.5 text-sm"
        >
          {spec.options.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
    )
  }
  if (spec.type === 'textarea') {
    return (
      <div className="mb-3">
        <label className="block text-xs font-medium text-gray-400 mb-1">
          {spec.label} {spec.max && <CharCounter value={value || ''} max={spec.max} />}
        </label>
        <textarea
          value={value || ''}
          onChange={e => onChange(fieldKey, e.target.value)}
          rows={3}
          className="w-full bg-gray-800 border border-gray-700 text-white rounded px-2 py-1.5 text-sm resize-none"
          placeholder={spec.label}
        />
      </div>
    )
  }
  if (spec.type === 'multi') {
    const items = value || ['', '', '']
    return (
      <div className="mb-3">
        <label className="block text-xs font-medium text-gray-400 mb-1">{spec.label} <span className="text-gray-600">(max {spec.count})</span></label>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-1 mb-1">
            <input
              value={item}
              onChange={e => {
                const next = [...items]
                next[i] = e.target.value
                onChange(fieldKey, next)
              }}
              className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-2 py-1 text-sm"
              placeholder={`${spec.label} ${i + 1}`}
              maxLength={spec.max + 10}
            />
            <CharCounter value={item} max={spec.max} />
          </div>
        ))}
        {items.length < spec.count && (
          <button
            className="text-xs text-blue-400 hover:text-blue-300 mt-1"
            onClick={() => onChange(fieldKey, [...items, ''])}
          >+ Add {spec.label}</button>
        )}
      </div>
    )
  }
  // default: text
  return (
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-400 mb-1">
        {spec.label} {spec.max && <CharCounter value={value || ''} max={spec.max} />}
      </label>
      <input
        value={value || ''}
        onChange={e => onChange(fieldKey, e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded px-2 py-1.5 text-sm"
        placeholder={spec.label}
        maxLength={spec.max ? spec.max + 10 : undefined}
      />
    </div>
  )
}
