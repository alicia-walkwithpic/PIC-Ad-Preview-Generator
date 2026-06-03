import { useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function ExportModal({ isOpen, onClose, previewRef, platformLabel, formatLabel }) {
  const [clientName, setClientName] = useState('')
  const [campaignName, setCampaignName] = useState('')
  const [milestoneCode, setMilestoneCode] = useState('')
  const [exportType, setExportType] = useState('png')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const today = new Date().toISOString().slice(0, 10)
  const clientCode = clientName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 5) || 'CLT'
  const platformSlug = platformLabel?.replace(/[^a-zA-Z]/g, '') || 'Platform'
  const formatSlug = formatLabel?.replace(/[^a-zA-Z]/g, '') || 'Ad'

  const handleExport = async () => {
    if (!previewRef?.current) return
    setLoading(true)
    try {
      const canvas = await html2canvas(previewRef.current, { scale: 2, useCORS: true, backgroundColor: '#f8f9fa' })
      if (exportType === 'png') {
        const link = document.createElement('a')
        link.download = `${today}-${clientCode}-${platformSlug}-${formatSlug}.png`
        link.href = canvas.toDataURL('image/png')
        link.click()
      } else {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' })
        const pageW = pdf.internal.pageSize.getWidth()
        const pageH = pdf.internal.pageSize.getHeight()
        // Header block
        pdf.setFillColor(15, 23, 42)
        pdf.rect(0, 0, pageW, 90, 'F')
        pdf.setTextColor(255, 255, 255)
        pdf.setFontSize(18)
        pdf.setFont('helvetica', 'bold')
        pdf.text('Ad Preview', 30, 30)
        pdf.setFontSize(10)
        pdf.setFont('helvetica', 'normal')
        pdf.text(`Client: ${clientName || '—'}`, 30, 48)
        pdf.text(`Campaign: ${campaignName || '—'}`, 30, 62)
        pdf.text(`Milestone: ${milestoneCode || '—'}`, 30, 76)
        pdf.setTextColor(150, 150, 200)
        pdf.text(`${platformLabel} · ${formatLabel}`, pageW - 30, 48, { align: 'right' })
        pdf.text(today, pageW - 30, 62, { align: 'right' })
        // Preview image
        const maxImgW = pageW - 60
        const ratio = canvas.height / canvas.width
        const imgW = Math.min(maxImgW, canvas.width / 2)
        const imgH = imgW * ratio
        const imgX = (pageW - imgW) / 2
        const imgY = 110
        if (imgY + imgH < pageH) {
          pdf.addImage(imgData, 'PNG', imgX, imgY, imgW, imgH)
        } else {
          const scaledH = pageH - imgY - 20
          const scaledW = scaledH / ratio
          pdf.addImage(imgData, 'PNG', (pageW - scaledW) / 2, imgY, scaledW, scaledH)
        }
        pdf.save(`${today}-${clientCode}-${platformSlug}-AdPreview.pdf`)
      }
    } catch (e) {
      console.error('Export error:', e)
    }
    setLoading(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Export Preview</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">&#x2715;</button>
        </div>
        <div className="space-y-3 mb-5">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Client Name</label>
            <input value={clientName} onChange={e => setClientName(e.target.value)} placeholder="e.g. Colbrook" className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Campaign Name</label>
            <input value={campaignName} onChange={e => setCampaignName(e.target.value)} placeholder="e.g. Summer PPE Campaign" className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Milestone Code</label>
            <input value={milestoneCode} onChange={e => setMilestoneCode(e.target.value)} placeholder="e.g. COL.1.MS.PM - Summer PPE Campaign" className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Format</label>
            <div className="flex gap-3">
              {['png','pdf'].map(t => (
                <label key={t} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value={t} checked={exportType === t} onChange={() => setExportType(t)} className="accent-blue-500" />
                  <span className="text-sm text-white uppercase">{t}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Platform: <span className="text-gray-400">{platformLabel}</span> &middot; Format: <span className="text-gray-400">{formatLabel}</span>
          </div>
          {/* Multi-ad export placeholder */}
          <div className="border border-dashed border-gray-700 rounded-lg p-3 opacity-50 cursor-not-allowed">
            <div className="text-xs text-gray-500 font-medium">Multi-Ad PDF Export &mdash; Coming in v1.5</div>
            <div className="text-xs text-gray-600 mt-1">Export all formats for this platform in one PDF.</div>
          </div>
        </div>
        <button
          onClick={handleExport}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
        >
          {loading ? 'Exporting…' : `Export as ${exportType.toUpperCase()}`}
        </button>
      </div>
    </div>
  )
}
