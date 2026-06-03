import { platformSpecs } from '../../config/platformSpecs'
import FieldInput from '../shared/FieldInput'
import CarouselCardFields from './CarouselCardFields'

export default function AdForm({ platform, format, formData, onUpdate, onUpdateCard, onAddCard, onRemoveCard, onClear }) {
  const spec = platformSpecs[platform]?.formats[format]
  if (!spec) return <div className="text-gray-500 p-4">No form spec found.</div>

  return (
    <div className="h-full overflow-y-auto px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm">{spec.label}</h3>
        <button onClick={onClear} className="text-xs text-gray-500 hover:text-red-400 transition-colors">Clear all</button>
      </div>
      {Object.entries(spec.fields).map(([key, fieldSpec]) => {
        if (fieldSpec.type === 'carousel') {
          return (
            <div key={key}>
              <label className="block text-xs font-medium text-gray-400 mb-2">Cards ({(formData.cards || []).length || 2} / {fieldSpec.maxCards})</label>
              <CarouselCardFields
                cards={formData.cards}
                onUpdateCard={onUpdateCard}
                onAddCard={onAddCard}
                onRemoveCard={onRemoveCard}
              />
            </div>
          )
        }
        return (
          <FieldInput
            key={key}
            fieldKey={key}
            spec={fieldSpec}
            value={formData[key]}
            onChange={onUpdate}
          />
        )
      })}
    </div>
  )
}
