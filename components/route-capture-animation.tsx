"use client"

import { useState, useEffect } from "react"

// Lista de IPs para mostrar na animação
const sampleIPs = [
  "45.231.120.3",
  "177.200.163.14",
  "187.108.128.3",
  "138.204.78.179",
  "138.204.78.240",
  "45.231.120.114",
  "170.81.169.222",
  "177.99.224.131",
  "191.7.107.16",
  "138.204.78.100",
  "185.230.63.171",
  "185.230.63.107",
  "185.230.63.186",
  "108.179.193.8",
  "93.127.191.239",
  "192.168.1.100",
  "192.168.1.101",
  "192.168.1.102",
  "10.0.0.1",
  "10.0.0.2",
  "10.0.0.3",
  "8.8.8.8",
  "1.1.1.1",
  "104.16.132.229",
  "172.217.172.110",
]

// Lista de mensagens para mostrar durante a captura
const captureMessages = [
  "Relacionando com IPs conhecidos...",
  "Verificando conexões suspeitas...",
  "Analisando padrões de tráfego...",
  "Identificando origem do IP...",
  "Verificando histórico de atividades...",
  "Cruzando dados com banco de IPs...",
  "Detectando possíveis proxies...",
  "Analisando fingerprint digital...",
  "Verificando assinaturas conhecidas...",
  "Calculando rota de acesso...",
  "Verificando conexão com Vazvet.com...",
  "Analisando atividades em popularvazvet.com...",
  "Detectando padrões de acesso...",
  "Verificando contas associadas...",
]

export default function RouteCaptureAnimation() {
  const [progress, setProgress] = useState(0)
  const [sourceIP, setSourceIP] = useState("")
  const [targetIP, setTargetIP] = useState("")
  const [message, setMessage] = useState("")
  const [animationKey, setAnimationKey] = useState(0)
  const [capturedIPs, setCapturedIPs] = useState<string[]>([])

  // Função para gerar um IP aleatório
  const generateRandomIP = () => {
    const segment1 = Math.floor(Math.random() * 255)
    const segment2 = Math.floor(Math.random() * 255)
    const segment3 = Math.floor(Math.random() * 255)
    const segment4 = Math.floor(Math.random() * 255)

    return `${segment1}.${segment2}.${segment3}.${segment4}`
  }

  // Função para gerar um IP aleatório da lista ou um novo IP aleatório
  const getRandomIP = () => {
    // 30% de chance de usar um IP da lista de amostra
    if (Math.random() < 0.3) {
      return sampleIPs[Math.floor(Math.random() * sampleIPs.length)]
    }
    // 70% de chance de gerar um IP completamente aleatório
    return generateRandomIP()
  }

  // Função para gerar uma mensagem aleatória
  const getRandomMessage = () => {
    return captureMessages[Math.floor(Math.random() * captureMessages.length)]
  }

  // Adiciona um novo IP capturado à lista
  const addCapturedIP = () => {
    const newIP = getRandomIP()
    setCapturedIPs((prev) => {
      // Manter apenas os últimos 5 IPs
      const updated = [newIP, ...prev]
      if (updated.length > 5) {
        return updated.slice(0, 5)
      }
      return updated
    })
  }

  // Reinicia a animação com novos valores
  const restartAnimation = () => {
    setProgress(0)
    setSourceIP(getRandomIP())
    setTargetIP(getRandomIP())
    setMessage(getRandomMessage())
    setAnimationKey((prev) => prev + 1)
    addCapturedIP()
  }

  // Efeito para iniciar e controlar a animação
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Quando chega a 100%, reinicia com novos valores após um pequeno delay
          setTimeout(restartAnimation, 1000)
          return 100
        }

        // Atualiza a mensagem em pontos específicos da animação
        if (prev === 25 || prev === 50 || prev === 75) {
          setMessage(getRandomMessage())
        }

        return prev + 1
      })
    }, 80) // Velocidade da animação

    // Inicializa com valores aleatórios
    setSourceIP(getRandomIP())
    setTargetIP(getRandomIP())
    setMessage(getRandomMessage())

    return () => clearInterval(interval)
  }, [animationKey])

  return (
    <div className="bg-gray-900 p-4 rounded-lg mb-6 border border-purple-900/50">
      <h2 className="text-xl font-bold text-center text-purple-400 mb-4 animate-pulse">CAPTURANDO ROTA</h2>

      <div className="flex justify-between items-center mb-2 text-sm">
        <div className="bg-gray-800 px-3 py-1 rounded">
          <span className="text-gray-400">Origem: </span>
          <span className="text-green-400">{sourceIP}</span>
        </div>
        <div className="bg-gray-800 px-3 py-1 rounded">
          <span className="text-gray-400">Destino: </span>
          <span className="text-red-400">{targetIP}</span>
        </div>
      </div>

      <div className="w-full bg-gray-800 rounded-full h-4 mb-2">
        <div
          className="bg-gradient-to-r from-purple-900 to-purple-500 h-4 rounded-full transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-center text-sm text-purple-300">{message}</div>

      <div className="mt-3 grid grid-cols-5 gap-1 text-xs">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="bg-gray-800 p-1 rounded flex justify-between">
            <span className="text-gray-500">{(i + 1) * 20}ms</span>
            <span className="text-purple-400">{Math.floor(Math.random() * 100)}%</span>
          </div>
        ))}
      </div>

      {/* Lista de IPs capturados recentemente */}
      {capturedIPs.length > 0 && (
        <div className="mt-4 border-t border-gray-700 pt-3">
          <h3 className="text-sm font-medium text-purple-400 mb-2">IPs capturados recentemente:</h3>
          <div className="flex flex-wrap gap-2">
            {capturedIPs.map((ip, index) => (
              <div
                key={index}
                className={`text-xs px-2 py-1 rounded ${
                  index === 0 ? "bg-purple-900/60 text-white" : "bg-gray-800 text-gray-300"
                }`}
              >
                {ip}
                {index === 0 && <span className="ml-1 text-purple-300">•</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
