import { useState, useRef } from 'react'
import { platformSpecs } from './config/platformSpecs'
import Sidebar from './components/layout/Sidebar'
import FormatTabs from './components/layout/FormatTabs'
import AdForm from './components/forms/AdForm'
import PreviewRenderer from './components/previews/PreviewRenderer'
import DeviceToggle from './components/shared/DeviceToggle'
import ExportModal from './components/export/ExportModal'
import { useAdForm } from './hooks/useAdForm'

export default function App() {
  const [activePlatform, setActivePlatform] = useState('google')
  const [activeFormat, setActiveFormat] = useState('search')
  const [device, setDevice] = useState('desktop')
  const [darkMode, setDarkMode] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const previewRef = useRef()

  const platformSpec = platformSpecs[activePlatform]

  const handlePlatformChange = (p) => {
    setActivePlatform(p)
    setActiveFormat(Object.keys(platformSpecs[p].formats)[0])
  }

  const { formData, updateField, updateCard, addCard, removeCard, clearAll } = useAdForm(activePlatform, activeFormat)
  const currentFormatSpec = platformSpec?.formats[activeFormat]

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#f4f2ee', fontFamily: "'DM Sans', sans-serif" }}>
      <Sidebar activePlatform={activePlatform} onSelect={handlePlatformChange} />

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: 56, background: '#fff', borderBottom: '1px solid #e0ddd8', flexShrink: 0 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#191919' }}>{platformSpec?.label}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <DeviceToggle value={device} onChange={setDevice} />
            <button
              onClick={() => setDarkMode(d => !d)}
              style={{ fontSize: 12, fontWeight: 500, padding: '5px 12px', border: '1px solid #e0ddd8', borderRadius: 8, background: darkMode ? '#e8f0fb' : '#fff', color: darkMode ? '#0a66c2' : '#5e5e5e', cursor: 'pointer' }}
            >
              {darkMode ? '☀ Light preview' : '🌙 Dark preview'}
            </button>
            <button
              onClick={() => setShowExport(true)}
              style={{ fontSize: 13, fontWeight: 600, padding: '6px 18px', background: '#0a66c2', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}
            >
              Export
            </button>
          </div>
        </div>

        {/* Format tabs */}
        <FormatTabs formats={platformSpec?.formats || {}} activeFormat={activeFormat} onSelect={setActiveFormat} />

        {/* Split layout */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <div style={{ width: 300, flexShrink: 0, overflowY: 'auto', background: '#fff', borderRight: '1px solid #e0ddd8' }}>
            <AdForm
              platform={activePlatform}
              format={activeFormat}
              formData={formData}
              onUpdate={updateField}
              onUpdateCard={updateCard}
              onAddCard={addCard}
              onRemoveCard={removeCard}
              onClear={clearAll}
            />
          </div>
          <div style={{ flex: 1, overflowY: 'auto', background: '#f4f2ee', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 40 }}>
            <div ref={previewRef} style={{ display: 'inline-block' }}>
              <PreviewRenderer
                platform={activePlatform}
                format={activeFormat}
                formData={formData}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </div>

      <ExportModal
        isOpen={showExport}
        onClose={() => setShowExport(false)}
        previewRef={previewRef}
        platformLabel={platformSpec?.label}
        formatLabel={currentFormatSpec?.label}
      />
    </div>
  )
}
