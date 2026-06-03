import CharCounter from '../shared/CharCounter'
import ImageUploader from '../shared/ImageUploader'

export default function CarouselCardFields({ cards, onUpdateCard, onAddCard, onRemoveCard }) {
  const safeCards = (cards && cards.length >= 2) ? cards : [{ headline: '', description: '', image: null }, { headline: '', description: '', image: null }]

  return (
    <div>
      {safeCards.map((card, i) => (
        <div key={i} className="border border-gray-700 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-400">Card {i + 1}</span>
            {safeCards.length > 2 && (
              <button onClick={() => onRemoveCard(i)} className="text-xs text-red-400 hover:text-red-300">Remove</button>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-xs text-gray-400 mb-1">Headline <CharCounter value={card.headline || ''} max={40} /></label>
            <input value={card.headline || ''} onChange={e => onUpdateCard(i, 'headline', e.target.value)} className="w-full bg-gray-800 border border-gray-700 text-white rounded px-2 py-1 text-sm" placeholder="Card headline" />
          </div>
          <div className="mb-2">
            <label className="block text-xs text-gray-400 mb-1">Description <CharCounter value={card.description || ''} max={20} /></label>
            <input value={card.description || ''} onChange={e => onUpdateCard(i, 'description', e.target.value)} className="w-full bg-gray-800 border border-gray-700 text-white rounded px-2 py-1 text-sm" placeholder="Card description" />
          </div>
          <ImageUploader value={card.image} onChange={(v) => onUpdateCard(i, 'image', v)} label="Card Image" aspectRatio="1:1" />
        </div>
      ))}
      {safeCards.length < 10 && (
        <button onClick={onAddCard} className="w-full border border-dashed border-gray-600 text-gray-400 hover:text-white hover:border-gray-500 rounded-lg py-2 text-sm transition-colors">+ Add Card</button>
      )}
    </div>
  )
}
