import ImageUploader from '../shared/ImageUploader'

const inputStyle = {
  width: '100%', fontFamily: "'DM Sans', sans-serif", fontSize: 13,
  padding: '6px 10px', border: '1px solid #e0ddd8', borderRadius: 4,
  background: '#fafafa', color: '#191919', outline: 'none', marginBottom: 6,
}

export default function CarouselCardFields({ cards, onUpdateCard, onAddCard, onRemoveCard }) {
  const safeCards = (cards && cards.length >= 2) ? cards : [{ headline: '', description: '', image: null }, { headline: '', description: '', image: null }]
  return (
    <div>
      {safeCards.map((card, i) => (
        <div key={i} style={{ border: '1px solid #e0ddd8', borderRadius: 8, padding: 12, marginBottom: 10, background: '#fafafa' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#9a9a9a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Card {i + 1}</span>
            {safeCards.length > 2 && <button onClick={() => onRemoveCard(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: '#9a9a9a', fontFamily: "'DM Sans', sans-serif" }}>Remove</button>}
          </div>
          <label style={{ fontSize: 12, fontWeight: 500, color: '#5e5e5e', display: 'block', marginBottom: 4 }}>Headline</label>
          <input value={card.headline || ''} onChange={e => onUpdateCard(i, 'headline', e.target.value)} style={inputStyle} placeholder="Card headline" />
          <label style={{ fontSize: 12, fontWeight: 500, color: '#5e5e5e', display: 'block', marginBottom: 4 }}>Description</label>
          <input value={card.description || ''} onChange={e => onUpdateCard(i, 'description', e.target.value)} style={inputStyle} placeholder="Card description" />
          <ImageUploader value={card.image} onChange={(v) => onUpdateCard(i, 'image', v)} label="Card Image" aspectRatio="1:1" />
        </div>
      ))}
      {safeCards.length < 10 && (
        <button onClick={onAddCard}
          style={{ width: '100%', border: '2px dashed #e0ddd8', background: 'none', borderRadius: 8, padding: 10, fontSize: 13, fontWeight: 500, color: '#9a9a9a', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a66c2'; e.currentTarget.style.color = '#0a66c2' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0ddd8'; e.currentTarget.style.color = '#9a9a9a' }}
        >+ Add Card</button>
      )}
    </div>
  )
}
