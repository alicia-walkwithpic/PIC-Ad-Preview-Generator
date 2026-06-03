import ImagePlaceholder from '../shared/ImagePlaceholder'
import { useState } from 'react'

export default function MetaCarousel({ data, darkMode }) {
  const [activeCard, setActiveCard] = useState(0)
  const bg = darkMode ? '#18191a' : '#f0f2f5'
  const cardBg = darkMode ? '#242526' : '#fff'
  const textPrimary = darkMode ? '#e4e6ea' : '#050505'
  const textSecondary = darkMode ? '#b0b3b8' : '#65676b'
  const borderColor = darkMode ? '#3a3b3c' : '#ced0d4'
  const defaultCards = [{ headline: 'Card 1', description: 'Description', image: null }, { headline: 'Card 2', description: 'Description', image: null }]
  const cards = (data.cards && data.cards.length >= 2) ? data.cards : defaultCards

  return (
    <div style={{ width: 375, background: bg, borderRadius: 16, overflow: 'hidden', fontFamily: '-apple-system, Helvetica, Arial, sans-serif', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
      {/* Status bar */}
      <div style={{ background: bg, padding: '10px 16px 4px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: textPrimary }}>9:41</span>
      </div>
      {/* Nav */}
      <div style={{ background: cardBg, borderBottom: `1px solid ${borderColor}`, padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 22, fontWeight: 800, color: '#0866ff', fontFamily: 'Georgia, serif' }}>f</span>
      </div>
      <div style={{ background: cardBg, margin: '8px 0' }}>
        {/* Header */}
        <div style={{ padding: '12px 12px 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#0866ff,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>{(data.pageName || 'P')[0]}</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: textPrimary }}>{data.pageName || 'Page Name'}</div>
            <div style={{ fontSize: 12, color: textSecondary }}>Sponsored</div>
          </div>
        </div>
        {/* Primary text */}
        <div style={{ padding: '0 12px 8px', fontSize: 14, color: textPrimary }}>{data.primaryText || 'Primary text for your carousel ad.'}</div>
        {/* Cards strip */}
        <div style={{ display: 'flex', gap: 8, padding: '0 12px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {cards.map((card, i) => (
            <div key={i} style={{ minWidth: 200, border: `1px solid ${borderColor}`, borderRadius: 8, overflow: 'hidden', background: cardBg, cursor: 'pointer', outline: activeCard === i ? `2px solid #0866ff` : 'none' }} onClick={() => setActiveCard(i)}>
              {card.image ? <img src={card.image} alt="" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} /> : <ImagePlaceholder style={{ width: '100%', height: 200 }} />}
              <div style={{ padding: '8px 10px', background: darkMode ? '#3a3b3c' : '#f2f3f5' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: textPrimary }}>{card.headline || `Card ${i + 1}`}</div>
                <div style={{ fontSize: 12, color: textSecondary }}>{card.description || ''}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, padding: '8px 0' }}>
          {cards.map((_, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: activeCard === i ? '#0866ff' : borderColor }} />)}
        </div>
        {/* CTA bar */}
        <div style={{ padding: '8px 12px', borderTop: `1px solid ${borderColor}`, display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ background: darkMode ? '#4e4f50' : '#e4e6ea', border: 'none', borderRadius: 6, padding: '7px 14px', fontSize: 13, fontWeight: 600, color: textPrimary }}>{data.ctaButton || 'Shop Now'}</button>
        </div>
      </div>
    </div>
  )
}
