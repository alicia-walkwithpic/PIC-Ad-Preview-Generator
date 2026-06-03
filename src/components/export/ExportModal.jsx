import { useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const inputStyle = {
  width: '100%', fontFamily: "'DM Sans', sans-serif", fontSize: 13,
  padding: '8px 10px', border: '1px solid #e0ddd8', borderRadius: 4,
  background: '#fafafa', color: '#191919', outline: 'none',
}

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
      const canvas = await html2canvas(previewRef.current, { scale: 2, useCORS: true, backgroundColor: '#f4f2ee' })
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
        pdf.setFillColor(15, 23, 42)
        pdf.rect(0, 0, pageW, 90, 'F')
        pdf.setTextColor(255, 255, 255)
        pdf.setFontSize(18); pdf.setFont('helvetica', 'bold')
        pdf.text('Ad Preview', 30, 30)
        pdf.setFontSize(10); pdf.setFont('helvetica', 'normal')
        pdf.text(`Client: ${clientName || '—'}`, 30, 48)
        pdf.text(`Campaign: ${campaignName || '—'}`, 30, 62)
        pdf.text(`Milestone: ${milestoneCode || '—'}`, 30, 76)
        pdf.setTextColor(150, 150, 200)
        pdf.text(`${platformLabel} · ${formatLabel}`, pageW - 30, 48, { align: 'right' })
        pdf.text(today, pageW - 30, 62, { align: 'right' })
        const ratio = canvas.height / canvas.width
        const imgW = Math.min(pageW - 60, canvas.width / 2)
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
    } catch (e) { console.error('Export error:', e) }
    setLoading(false)
    onClose()
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)' }}>
      <div style={{ background: '#fff', border: '1px solid #e0ddd8', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.12)', width: '100%', maxWidth: 420, padding: 28, fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#191919' }}>Export Preview</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: '#9a9a9a', lineHeight: 1 }}>×</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#5e5e5e', marginBottom: 4 }}>Client Name</label>
            <input value={clientName} onChange={e => setClientName(e.target.value)} placeholder="e.g. Colbrook" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#5e5e5e', marginBottom: 4 }}>Campaign Name</label>
            <input value={campaignName} onChange={e => setCampaignName(e.target.value)} placeholder="e.g. Summer PPE Campaign" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#5e5e5e', marginBottom: 4 }}>Milestone Code</label>
            <input value={milestoneCode} onChange={e => setMilestoneCode(e.target.value)} placeholder="e.g. COL.1.MS.PM - Summer Campaign" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#5e5e5e', marginBottom: 8 }}>Format</label>
            <div style={{ display: 'flex', gap: 16 }}>
              {['png', 'pdf'].map(t => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 13, color: '#191919' }}>
                  <input type="radio" value={t} checked={exportType === t} onChange={() => setExportType(t)} style={{ accentColor: '#0a66c2' }} />
                  {t.toUpperCase()}
                </label>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 12, color: '#9a9a9a' }}>{platformLabel} · {formatLabel}</div>
          <div style={{ border: '1.5px dashed #e0ddd8', borderRadius: 8, padding: '10px 14px', opacity: 0.6 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#5e5e5e' }}>📄 Multi-Ad PDF Export — Coming in v1.5</div>
            <div style={{ fontSize: 11, color: '#9a9a9a', marginTop: 2 }}>Export all formats for this platform in one PDF.</div>
          </div>
        </div>
        <button onClick={handleExport} disabled={loading}
          style={{ width: '100%', padding: 10, background: loading ? '#9a9a9a' : '#0a66c2', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
          {loading ? 'Exporting…' : `Export as ${exportType.toUpperCase()}`}
        </button>
      </div>
    </div>
  )
}
