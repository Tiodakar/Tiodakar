"use client"

import { useState, useEffect } from "react"

// Lista de nomes brasileiros comuns
const firstNames = [
  "João",
  "Maria",
  "José",
  "Ana",
  "Pedro",
  "Paulo",
  "Carlos",
  "Antônio",
  "Francisco",
  "Marcos",
  "Lucas",
  "Luiz",
  "Fernando",
  "Rafael",
  "Gustavo",
  "Mariana",
  "Juliana",
  "Fernanda",
  "Aline",
  "Camila",
  "Bruno",
  "Diego",
  "Eduardo",
  "Rodrigo",
  "Ricardo",
  "Roberto",
  "Marcelo",
  "André",
  "Fábio",
  "Felipe",
  "Thiago",
  "Vinícius",
  "Gabriel",
  "Daniel",
  "Matheus",
  "Guilherme",
  "Leonardo",
  "Renato",
  "Alexandre",
  "Márcio",
]

// Lista de sobrenomes brasileiros comuns
const lastNames = [
  "Silva",
  "Santos",
  "Oliveira",
  "Souza",
  "Pereira",
  "Costa",
  "Rodrigues",
  "Almeida",
  "Nascimento",
  "Lima",
  "Araújo",
  "Fernandes",
  "Carvalho",
  "Gomes",
  "Martins",
  "Rocha",
  "Ribeiro",
  "Alves",
  "Monteiro",
  "Mendes",
  "Barros",
  "Freitas",
  "Barbosa",
  "Pinto",
  "Moura",
  "Cavalcanti",
  "Dias",
  "Castro",
  "Campos",
  "Cardoso",
  "Correia",
  "Cunha",
  "Teixeira",
  "Guimarães",
  "Moreira",
  "Nunes",
  "Marques",
  "Machado",
  "Vieira",
  "Gonçalves",
]

// Lista de sufixos comuns para nomes de usuário brasileiros
const suffixes = [
  "123",
  "oficial",
  "real",
  "br",
  "brasil",
  "rj",
  "sp",
  "mg",
  "rs",
  "pr",
  "2023",
  "2024",
  "2025",
  "_",
  ".",
  "-",
  "original",
  "verdadeiro",
  "legit",
  "verificado",
]

export default function FakeAccountTicker() {
  const [accounts, setAccounts] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Gerar nomes de contas falsas brasileiras
  const generateBrazilianFakeAccounts = (count: number) => {
    const generatedAccounts = []

    for (let i = 0; i < count; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]

      // Diferentes formatos de nomes de usuário
      const formats = [
        `${firstName.toLowerCase()}${lastName.toLowerCase()}${suffix}`,
        `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
        `${firstName.toLowerCase()}${Math.floor(Math.random() * 100)}`,
        `${lastName.toLowerCase()}.${firstName.toLowerCase()}`,
        `${firstName.charAt(0).toLowerCase()}${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}`,
        `${firstName.toLowerCase()}.${lastName.toLowerCase()}${suffix}`,
        `${firstName.toLowerCase()}${lastName.charAt(0).toLowerCase()}${Math.floor(Math.random() * 10)}`,
        `${firstName.toLowerCase()}.${Math.floor(Math.random() * 100)}`,
        `${firstName.toLowerCase()}${suffix}${Math.floor(Math.random() * 10)}`,
        `${lastName.toLowerCase()}${firstName.toLowerCase()}${Math.floor(Math.random() * 100)}`,
      ]

      const format = formats[Math.floor(Math.random() * formats.length)]
      generatedAccounts.push(format)
    }

    return generatedAccounts
  }

  // Inicializar com 50 contas falsas
  useEffect(() => {
    setAccounts(generateBrazilianFakeAccounts(50))
  }, [])

  // Atualizar a conta exibida a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Quando chegar ao final, gerar novas contas
        if (prev >= accounts.length - 1) {
          setAccounts(generateBrazilianFakeAccounts(50))
          return 0
        }
        return prev + 1
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [accounts])

  // Adicionar uma nova conta a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setAccounts((prev) => {
        const newAccount = generateBrazilianFakeAccounts(1)[0]
        return [...prev, newAccount]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-900 p-3 rounded-lg mb-4 border border-purple-900/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-purple-400 font-medium">Conta falsa detectada:</span>
        </div>
        <div className="text-sm bg-gray-800 px-3 py-1 rounded-full text-white">
          {accounts[currentIndex] || "carregando..."}
        </div>
      </div>
    </div>
  )
}
