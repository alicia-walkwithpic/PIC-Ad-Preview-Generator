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
  const defaultDevice = currentFormatSpec?.device || 'desktop'

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar activePlatform={activePlatform} onSelect={handlePlatformChange} />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white text-sm">{platformSpec?.label}</span>
          </div>
          <div className="flex items-center gap-3">
            <DeviceToggle value={device || defaultDevice} onChange={setDevice} />
            <button
              onClick={() => setDarkMode(d => !d)}
              title="Toggle dark mode preview"
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
            <button
              onClick={() => setShowExport(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors"
            >
              Export
            </button>
          </div>
        </div>

        {/* Format tabs */}
        <FormatTabs formats={platformSpec?.formats || {}} activeFormat={activeFormat} onSelect={setActiveFormat} />

        {/* Main split */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left: Form */}
          <div className="w-72 bg-gray-900 border-r border-gray-800 shrink-0 overflow-y-auto">
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

          {/* Right: Preview */}
          <div className="flex-1 overflow-auto bg-gray-950 flex items-start justify-center p-8">
            <div ref={previewRef} className="inline-block">
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
