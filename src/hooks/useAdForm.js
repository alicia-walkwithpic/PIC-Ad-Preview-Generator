import { useState, useEffect } from 'react'

const DEFAULT_META_CARD = { headline: '', description: '', image: null }

export function useAdForm(platform, format) {
  const storageKey = `pic-adpreview-${platform}-${format}`

  const getInitial = () => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) return JSON.parse(saved)
    } catch {}
    return {}
  }

  const [formData, setFormData] = useState(getInitial)

  useEffect(() => {
    setFormData(getInitial())
  }, [platform, format])

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(formData))
    } catch {}
  }, [formData, storageKey])

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const updateCard = (index, field, value) => {
    setFormData(prev => {
      const cards = [...(prev.cards || [DEFAULT_META_CARD, DEFAULT_META_CARD])]
      cards[index] = { ...cards[index], [field]: value }
      return { ...prev, cards }
    })
  }

  const addCard = () => {
    setFormData(prev => {
      const cards = [...(prev.cards || [DEFAULT_META_CARD, DEFAULT_META_CARD])]
      if (cards.length < 10) cards.push({ ...DEFAULT_META_CARD })
      return { ...prev, cards }
    })
  }

  const removeCard = (index) => {
    setFormData(prev => {
      const cards = [...(prev.cards || [])]
      if (cards.length > 2) cards.splice(index, 1)
      return { ...prev, cards }
    })
  }

  const clearAll = () => {
    localStorage.removeItem(storageKey)
    setFormData({})
  }

  return { formData, updateField, updateCard, addCard, removeCard, clearAll }
}
