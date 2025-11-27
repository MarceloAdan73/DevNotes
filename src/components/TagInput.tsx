'use client'
import { useState, KeyboardEvent } from 'react'
import { FaTimes, FaTag } from 'react-icons/fa'

interface TagInputProps {
  tags: string[]
  setTags: (tags: string[]) => void
}

export default function TagInput({ tags, setTags }: TagInputProps) {
  const [input, setInput] = useState('')

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Evitar envío del formulario
      const trimmedInput = input.trim()
      if (trimmedInput && !tags.includes(trimmedInput)) {
        setTags([...tags, trimmedInput])
        setInput('')
      }
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="space-y-2">
      <label htmlFor="tag-input" className="flex items-center gap-2 text-sm text-gray-400 font-semibold">
        <FaTag className="text-blue-500" /> Etiquetas (Presiona Enter)
      </label>
      
      <input
        id="tag-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        title="Agregar etiquetas al post"
        placeholder="Ej: Trabajo, Ideas, Urgente..."
        className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 border border-gray-600 focus:border-blue-500 outline-none transition-colors"
      />

      <div className="flex flex-wrap gap-2 min-h-[30px]">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-500/30 animate-in fade-in zoom-in duration-200"
          >
            #{tag}
            <button 
              onClick={() => removeTag(tag)} 
              type="button"
              title={`Eliminar etiqueta ${tag}`}
              className="hover:text-white transition-colors ml-1"
            >
              <FaTimes size={12} />
            </button>
          </span>
        ))}
      </div>
    </div>
  )
}
