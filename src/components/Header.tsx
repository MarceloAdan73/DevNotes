'use client'

import { useState } from 'react'
import { FaSearch, FaCode } from 'react-icons/fa'

interface HeaderProps {
  onSearch: (term: string) => void
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <header className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* LOGO E IDENTIDAD */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <FaCode size={18} />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 hidden sm:block">
            DevNotes
          </h1>
          {/* Versión corta del título para móbiles muy pequeños */}
          <h1 className="text-xl font-bold text-blue-400 sm:hidden">
            DN
          </h1>
        </div>

        {/* BARRA DE BÚSQUEDA (Responsive: se expande) */}
        <div className="flex-1 max-w-2xl relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar nota, código o tag..."
            className="block w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-full leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all shadow-sm"
          />
        </div>

      </div>
    </header>
  )
}