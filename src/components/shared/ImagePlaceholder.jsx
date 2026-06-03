export default function ImagePlaceholder({ className = '', style = {} }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 50%, #1a8a7a 100%)',
        ...style
      }}
    >
      <div className="flex flex-col items-center gap-1 opacity-60">
        <svg width="36" height="36" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
        <span style={{ color: 'white', fontSize: 10, fontFamily: 'sans-serif' }}>No image</span>
      </div>
    </div>
  )
}
