"use client"

import { useState } from "react"
import IpTable from "@/components/ip-table"
import HighlightedIpTable from "@/components/highlighted-ip-table"
import FakeAccountsTable from "@/components/fake-accounts-table"
import IpRelationsTable from "@/components/ip-relations-table"
import AddressesLocatedBanner from "@/components/addresses-located-banner"
import IpDetector from "@/components/ip-detector"
import FakeAccountTicker from "@/components/fake-account-ticker"
import VazvetInfoBanner from "@/components/vazvet-info-banner"
import SiteIpInfo from "@/components/site-ip-info"
import MonitoringDashboard from "@/components/monitoring-dashboard"
import RelatedAddresses from "@/components/related-addresses"

export default function Home() {
  // Estado para armazenar os dados da primeira tabela
  const [ipData, setIpData] = useState([
    {
      id: 1,
      ip: "45.231.120.3",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 144,
      updateTime: "11 de abril de 2025, 06:05",
      hasWebsite: true,
      website: "example.com/site1",
    },
    {
      id: 2,
      ip: "177.200.163.14",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 142,
      updateTime: "11 de abril de 2025, 15:10",
    },
    {
      id: 3,
      ip: "187.108.128.3",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 39,
      updateTime: "10 de abril de 2025, 03:13",
      hasWebsite: true,
      website: "example.com/site2",
    },
    {
      id: 4,
      ip: "138.204.78.179",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 38,
      updateTime: "09 de abril de 2025, 05:58",
    },
    {
      id: 5,
      ip: "138.204.78.240",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 29,
      updateTime: "09 de abril de 2025, 00:54",
    },
    {
      id: 6,
      ip: "45.231.120.114",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 26,
      updateTime: "09 de abril de 2025, 06:05",
    },
    {
      id: 7,
      ip: "170.81.169.222",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 25,
      updateTime: "09 de abril de 2025, 03:06",
    },
    {
      id: 8,
      ip: "177.99.224.131",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 12,
      updateTime: "02 de abril de 2025, 16:50",
    },
    {
      id: 9,
      ip: "191.7.107.16",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 5,
      updateTime: "26 de março de 2025, 01:51",
    },
    {
      id: 10,
      ip: "138.204.78.100",
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: 4,
      updateTime: "23 de março de 2025, 16:38",
    },
  ])

  // Dados da segunda tabela
  const highlightedIpData = [
    {
      ip: "45.231.120.3",
      location: "São Gonçalo, RJ - Brasil",
      accessCount: 147,
      observation: "Usado intensivamente em redes públicas",
    },
    {
      ip: "177.200.163.14",
      location: "São Gonçalo, RJ - Brasil",
      accessCount: 132,
      observation: "Associado a atividades de scraping",
    },
    {
      ip: "138.204.78.179",
      location: "São Gonçalo, RJ - Brasil",
      accessCount: 118,
      observation: "Detectado em pontos de Wi-Fi abertos",
    },
  ]

  // Dados da tabela de contas falsas (modificado para mostrar contagem de acessos)
  const fakeAccountsData = [
    {
      ip: "108.179.193.8",
      country: "Estados Unidos",
      accessCount: 87,
      relatedIps: ["45.231.120.3", "177.200.163.14"],
      connectionType: "Conexão direta com múltiplos IPs",
    },
    {
      ip: "93.127.191.239",
      country: "Alemanha",
      accessCount: 65,
      relatedIps: ["138.204.78.179", "187.108.128.3"],
      connectionType: "Acesso simultâneo com IPs brasileiros",
    },
    {
      ip: "45.231.120.3",
      country: "Brasil",
      accessCount: 42,
      relatedIps: ["108.179.193.8", "93.127.191.239"],
      connectionType: "Conexão geral com todos os IPs",
    },
    {
      ip: "177.200.163.14",
      country: "Brasil",
      accessCount: 29,
      relatedIps: ["108.179.193.8"],
      connectionType: "Conexão geral com todos os IPs",
    },
  ]

  // Dados da tabela de relações de IPs
  const ipRelationsData = [
    {
      mainIp: "45.231.120.3",
      relatedIps: ["177.200.163.14", "138.204.78.179", "187.108.128.3", "138.204.78.240"],
      rotativeIps: ["192.168.1.100", "192.168.1.101", "192.168.1.102", "186.227.207.191"],
      localIps: [
        {
          ip: "10.0.0.1",
          hasWebsite: true,
          website: "example.com/local1",
          connectedIps: ["185.230.63.171", "185.230.63.107", "185.230.63.186", "108.179.193.8", "93.127.191.239"],
        },
        {
          ip: "10.0.0.2",
          connectedIps: ["185.230.63.171", "185.230.63.107", "185.230.63.186", "108.179.193.8", "93.127.191.239"],
        },
        {
          ip: "10.0.0.3",
          hasWebsite: true,
          website: "example.com/local3",
          connectedIps: ["185.230.63.171", "185.230.63.107", "185.230.63.186", "108.179.193.8", "93.127.191.239"],
        },
      ],
    },
  ]

  // Vamos atualizar a constante addressesData com os novos endereços solicitados

  // Substitua o array addressesData existente pelo seguinte:
  const addressesData = [
    {
      id: 1,
      street: "Rua Capitão Juvenal Figueiredo",
      number: "1200 a 1260",
      neighborhood: "Colubande",
      city: "São Gonçalo",
      state: "RJ",
      zipCode: "24451-670",
      relatedIps: ["45.231.120.3", "177.200.163.14", "138.204.78.179", "187.108.128.3"],
      isTopRelated: true,
      lastAccess: "12 de abril de 2025, 14:32",
      accessCount: 187,
      captureDate: "12 de abril de 2025",
      captureTime: "15:47",
    },
    {
      id: 2,
      street: "Rua Vicente de Lima Cleto",
      number: "120",
      neighborhood: "Itaúna",
      city: "São Gonçalo",
      state: "RJ",
      zipCode: "24474-460",
      relatedIps: ["138.204.78.240", "45.231.120.114"],
      lastAccess: "10 de abril de 2025, 09:15",
      accessCount: 43,
    },
    {
      id: 3,
      street: "Avenida Presidente Kennedy",
      number: "425",
      neighborhood: "Centro",
      city: "São Gonçalo",
      state: "RJ",
      zipCode: "24445-000",
      relatedIps: ["170.81.169.222", "177.99.224.131"],
      lastAccess: "08 de abril de 2025, 17:22",
      accessCount: 28,
    },
  ]

  // Gerar 200 nomes de contas falsas
  const generateFakeAccounts = () => {
    const prefixes = [
      "user",
      "profile",
      "account",
      "person",
      "client",
      "member",
      "guest",
      "visitor",
      "customer",
      "player",
      "gamer",
      "fan",
      "follower",
      "friend",
      "contact",
      "buddy",
      "mate",
      "pal",
      "partner",
      "associate",
    ]
    const names = [
      "john",
      "mary",
      "alex",
      "sam",
      "chris",
      "pat",
      "jordan",
      "taylor",
      "casey",
      "jamie",
      "robin",
      "morgan",
      "riley",
      "avery",
      "quinn",
      "dakota",
      "skyler",
      "reese",
      "finley",
      "emerson",
    ]
    const suffixes = [
      "123",
      "456",
      "789",
      "2023",
      "2024",
      "2025",
      "_real",
      "_official",
      "_original",
      "_authentic",
      "_genuine",
      "_legit",
      "_verified",
      "_true",
      "_actual",
      "_valid",
      "_active",
      "_online",
      "_web",
      "_net",
    ]

    const accounts = []

    for (let i = 0; i < 200; i++) {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      const name = names[Math.floor(Math.random() * names.length)]
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]

      accounts.push(`${prefix}_${name}${suffix}`)
    }

    return accounts
  }

  const fakeAccountsList = generateFakeAccounts()

  // Função para adicionar um novo IP à tabela
  const handleNewIpDetected = (newIp: string) => {
    const now = new Date()
    const formattedDate = now.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const newIpEntry = {
      id: ipData.length + 1,
      ip: newIp,
      country: "Brasil",
      city: "São Gonçalo",
      totalNavigation: Math.floor(Math.random() * 20) + 1,
      updateTime: formattedDate,
      isNew: true,
    }

    setIpData((prev) => [...prev, newIpEntry])

    // Remover a flag "isNew" após 10 segundos
    setTimeout(() => {
      setIpData((prev) => prev.map((item) => (item.ip === newIp ? { ...item, isNew: false } : item)))
    }, 10000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-400 mb-6">
          Faixa de Endereços IP de São Gonçalo - Capturado
        </h1>

        {/* Componente de ticker de contas falsas */}
        <FakeAccountTicker />

        {/* Componente de animação de captura de rota */}
        <AddressesLocatedBanner
          relatedSites={[
            {
              site: "https://lojalocal.com/nexgard/37608012000103",
              ips: ["18.172.185.21", "18.238.217.75", "18.238.217.35", "18.238.217.82"],
              description: "Site de venda de produtos veterinários com múltiplos IPs relacionados",
            },
            {
              site: "https://chavaohospitalveterinario.com.br/",
              ips: ["93.127.191.239"],
              description: "Hospital veterinário com IP suspeito",
            },
            {
              site: "https://popularvazvet.com/",
              ips: ["185.230.63.107"],
              description: "Site com atividades suspeitas",
            },
          ]}
          monitoredIps={highlightedIpData}
          capturedAddresses={addressesData}
        />

        {/* Banner de informações sobre Vazvet.com */}
        <VazvetInfoBanner />

        {/* Informações sobre sites e IPs relacionados */}
        <SiteIpInfo />

        {/* Detector de IP invisível */}
        <IpDetector onNewIpDetected={handleNewIpDetected} />

        <IpTable data={ipData} />

        <h2 className="text-xl font-bold mt-8 mb-4">IP com atividade específica em 2025</h2>

        <p className="mb-4">
          Durante as investigações realizadas em 2025, identificamos que determinados IPs apresentaram uma quantidade
          elevada de acessos em um curto período. Abaixo, destacamos três desses IPs:
        </p>

        <HighlightedIpTable data={highlightedIpData} />

        <h2 className="text-xl font-bold mt-8 mb-4 text-purple-400">Contas Falsas e Relacionamentos entre IPs</h2>

        <p className="mb-4">
          Identificamos que os IPs abaixo têm conexão geral com todos os IPs listados anteriormente. Foram detectados
          múltiplos acessos a contas falsas a partir destes endereços, que têm relacionamento direto com IPs acessados
          neste site.
        </p>

        <FakeAccountsTable data={fakeAccountsData} />

        <h2 className="text-xl font-bold mt-10 mb-4 text-purple-400 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-400"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Endereços Físicos Capturados
        </h2>

        <p className="mb-4">
          O endereço abaixo foi <span className="text-green-400 font-bold">capturado com sucesso</span> e identificado
          como local físico relacionado aos IPs monitorados. A localização apresenta alta concentração de atividades
          suspeitas e está diretamente vinculada aos IPs principais.
        </p>

        <RelatedAddresses addresses={addressesData} />

        <h2 className="text-xl font-bold mt-10 mb-4 text-purple-400">Relações Detalhadas de IPs e Contas Deletadas</h2>

        <p className="mb-4">
          A tabela abaixo mostra a relação do IP principal com todos os IPs mencionados anteriormente, incluindo IPs
          rotativos e locais. Cada IP local tem conexão com os 5 IPs específicos listados.
        </p>

        <IpRelationsTable data={ipRelationsData} fakeAccounts={fakeAccountsList} />

        {/* Dashboard de monitoramento */}
        <MonitoringDashboard />
      </div>
    </div>
  )
}
