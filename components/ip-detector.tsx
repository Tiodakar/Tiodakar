"use client"

import { useState, useEffect } from "react"

interface IpDetectorProps {
  onNewIpDetected: (ip: string) => void
}

export default function IpDetector({ onNewIpDetected }: IpDetectorProps) {
  const [hasDetected, setHasDetected] = useState(false)

  useEffect(() => {
    // Verificar se já detectou um IP para este visitante
    const hasAlreadyDetected = localStorage.getItem("ip_detected")

    if (!hasAlreadyDetected) {
      // Esperar 20 segundos e então "detectar" um novo IP
      const timer = setTimeout(() => {
        // Gerar um IP aleatório
        const newIP = generateRandomIP()

        // Notificar o componente pai
        onNewIpDetected(newIP)

        // Marcar como detectado no localStorage
        localStorage.setItem("ip_detected", "true")

        setHasDetected(true)
      }, 20000)

      return () => clearTimeout(timer)
    } else {
      setHasDetected(true)
    }
  }, [onNewIpDetected])

  // Função para gerar um IP aleatório
  const generateRandomIP = () => {
    const segment1 = Math.floor(Math.random() * 255)
    const segment2 = Math.floor(Math.random() * 255)
    const segment3 = Math.floor(Math.random() * 255)
    const segment4 = Math.floor(Math.random() * 255)

    return `${segment1}.${segment2}.${segment3}.${segment4}`
  }

  // Este componente não renderiza nada visualmente
  return null
}
