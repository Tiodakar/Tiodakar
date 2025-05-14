"use client"
import AddressesLocatedBanner from "@/components/addresses-located-banner"
import IpDetector from "@/components/ip-detector"
import FakeAccountTicker from "@/components/fake-account-ticker"
import VazvetInfoBanner from "@/components/vazvet-info-banner"
import SiteIpInfo from "@/components/site-ip-info"
import MonitoringDashboard from "@/components/monitoring-dashboard"
import RelatedAddresses from "@/components/related-addresses"

export default function Home() {
  // Dados da segunda tabela (mantidos para o popup de informações detalhadas)
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

  // Função para adicionar um novo IP à tabela (mantida para o IpDetector)
  const handleNewIpDetected = (newIp: string) => {
    // Função mantida para o IpDetector, mas não faz nada agora que a tabela foi removida
    console.log(`Novo IP detectado: ${newIp}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-400 mb-6">
          Faixa de Endereços IP de São Gonçalo - Capturado
        </h1>

        {/* Componente de ticker de contas falsas */}
        <FakeAccountTicker />

        {/* Banner de endereços localizados */}
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

        {/* Seção de endereços físicos capturados */}
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

        {/* Dashboard de monitoramento */}
        <MonitoringDashboard />
      </div>
    </div>
  )
}
