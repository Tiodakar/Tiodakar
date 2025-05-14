"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface DetailedInfoPopupProps {
  relatedSites: {
    site: string
    ips: string[]
    description?: string
  }[]
  monitoredIps: {
    ip: string
    location: string
    accessCount: number
    observation: string
  }[]
  capturedAddresses: {
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
    relatedIps: string[]
    isTopRelated?: boolean
  }[]
}

export default function DetailedInfoPopup({ relatedSites, monitoredIps, capturedAddresses }: DetailedInfoPopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"sites" | "ips" | "addresses">("sites")

  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-purple-700 hover:bg-purple-600 text-white flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Ver Informações Detalhadas
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Botão X no canto superior direito */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-purple-900 hover:bg-purple-800 text-white rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Fechar"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-purple-400">Informações Detalhadas de Monitoramento</h2>

            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-4">
              <button
                className={`px-4 py-2 ${activeTab === "sites" ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400"}`}
                onClick={() => setActiveTab("sites")}
              >
                Sites Relacionados
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "ips" ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400"}`}
                onClick={() => setActiveTab("ips")}
              >
                IPs Monitorados
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "addresses" ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400"}`}
                onClick={() => setActiveTab("addresses")}
              >
                Endereços Físicos
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === "sites" && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Sites Relacionados aos IPs Monitorados</h3>
                  <div className="space-y-3">
                    {relatedSites.map((site, index) => (
                      <div key={index} className="bg-gray-700 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                            <span className="text-white font-medium">{site.site}</span>
                            <span className="text-xs bg-purple-900/50 px-2 py-0.5 rounded ml-2">
                              {site.ips.length} {site.ips.length === 1 ? "IP" : "IPs"}
                            </span>
                          </div>
                          <a
                            href={site.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-900 hover:bg-purple-800 text-white px-2 py-1 rounded text-xs inline-flex items-center gap-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Visitar
                          </a>
                        </div>
                        <div className="mt-2 pl-4 border-l-2 border-purple-500">
                          <p className="text-sm text-gray-300 mb-2">{site.description}</p>
                          <p className="text-sm text-gray-400 mb-1">IPs relacionados:</p>
                          <div className="flex flex-wrap gap-2">
                            {site.ips.map((ip, i) => (
                              <div key={i} className="bg-gray-600 px-2 py-1 rounded text-xs flex items-center gap-1">
                                <span>{ip}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "ips" && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">IPs Sob Monitoramento</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="p-3 bg-purple-900 text-white border border-gray-700">Endereço IP</th>
                          <th className="p-3 bg-purple-900 text-white border border-gray-700">Localização</th>
                          <th className="p-3 bg-purple-900 text-white border border-gray-700">Acessos</th>
                          <th className="p-3 bg-purple-900 text-white border border-gray-700">Observação</th>
                        </tr>
                      </thead>
                      <tbody>
                        {monitoredIps.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}>
                            <td className="p-3 border border-gray-700 text-center">{item.ip}</td>
                            <td className="p-3 border border-gray-700 text-center">{item.location}</td>
                            <td className="p-3 border border-gray-700 text-center">
                              <span className="bg-purple-900/50 px-3 py-1 rounded-full">{item.accessCount}</span>
                            </td>
                            <td className="p-3 border border-gray-700 text-center">{item.observation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "addresses" && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Endereços Físicos Capturados</h3>
                  <div className="space-y-3">
                    {capturedAddresses.map((address, index) => (
                      <div
                        key={index}
                        className={`${
                          address.isTopRelated ? "bg-purple-900/30 border border-purple-500" : "bg-gray-700"
                        } p-3 rounded-lg`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-2 w-2 ${address.isTopRelated ? "bg-green-500" : "bg-purple-500"} rounded-full`}
                            ></div>
                            <span className="text-white font-medium">
                              {address.street}, {address.number} - {address.neighborhood}
                            </span>
                            {address.isTopRelated && (
                              <span className="ml-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                                Localização Principal
                              </span>
                            )}
                          </div>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              `${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}, ${address.state}`,
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-900 hover:bg-purple-800 text-white px-2 py-1 rounded text-xs inline-flex items-center gap-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Ver no Mapa
                          </a>
                        </div>
                        <div className="mt-2 pl-4 border-l-2 border-purple-500">
                          <p className="text-sm text-gray-300">
                            {address.street}, {address.number} - {address.neighborhood}
                            <br />
                            {address.city}, {address.state} - CEP: {address.zipCode}
                          </p>
                          <p className="text-sm text-gray-400 mt-2 mb-1">IPs relacionados:</p>
                          <div className="flex flex-wrap gap-2">
                            {address.relatedIps.map((ip, i) => (
                              <div key={i} className="bg-gray-600 px-2 py-1 rounded text-xs flex items-center gap-1">
                                <span>{ip}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-2 text-lg"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
