import { platformSpecs } from '../../config/platformSpecs'
import FieldInput from '../shared/FieldInput'
import CarouselCardFields from './CarouselCardFields'

export default function AdForm({ platform, format, formData, onUpdate, onUpdateCard, onAddCard, onRemoveCard, onClear }) {
  const spec = platformSpecs[platform]?.formats[format]
  if (!spec) return <div style={{ padding: 20, color: '#9a9a9a', fontSize: 13 }}>No form spec found.</div>
  return (
    <div style={{ padding: '20px 20px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #e0ddd8' }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9a9a9a' }}>Ad Copy</span>
        <button onClick={onClear} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: '#9a9a9a', fontFamily: "'DM Sans', sans-serif" }}>Clear all</button>
      </div>
      {Object.entries(spec.fields).map(([key, fieldSpec]) => {
        if (fieldSpec.type === 'carousel') {
          return (
            <div key={key}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9a9a9a', marginBottom: 8 }}>
                Cards ({(formData.cards || []).length || 2} / {fieldSpec.maxCards})
              </div>
              <CarouselCardFields cards={formData.cards} onUpdateCard={onUpdateCard} onAddCard={onAddCard} onRemoveCard={onRemoveCard} />
            </div>
          )
        }
        return <FieldInput key={key} fieldKey={key} spec={fieldSpec} value={formData[key]} onChange={onUpdate} />
      })}
    </div>
  )
}
