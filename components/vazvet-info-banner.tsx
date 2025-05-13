"use client"

import { useState, useEffect } from "react"

export default function VazvetInfoBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar o banner após 30 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-purple-900/30 border border-purple-500 p-3 rounded-lg mb-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="font-medium text-purple-300">Alerta de Segurança</span>
        </div>
        <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white" aria-label="Fechar">
          ✕
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-300">
        Detectamos atividade suspeita relacionada ao domínio{" "}
        <a
          href="https://popularvazvet.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline font-medium"
        >
          Vazvet.com
        </a>
        . Este domínio está associado ao IP 185.230.63.107 e apresenta padrões de comportamento suspeitos.
      </p>
    </div>
  )
}
