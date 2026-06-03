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
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-400 mb-1">{label} {aspectRatio && <span className="text-gray-500">({aspectRatio})</span>}</label>
      <div
        className="border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors"
        style={{ minHeight: 80 }}
        onClick={() => inputRef.current.click()}
      >
        {value ? (
          <div className="relative w-full">
            <img src={value} alt="upload" className="w-full rounded-lg object-cover max-h-36" />
            <button
              className="absolute top-1 right-1 bg-gray-900 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-600"
              onClick={(e) => { e.stopPropagation(); onChange(null) }}
            >&#x2715;</button>
          </div>
        ) : (
          <div className="flex flex-col items-center p-3 text-gray-500">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            <span className="text-xs mt-1">Click to upload</span>
          </div>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  )
}
