"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface IpRelation {
  mainIp: string
  relatedIps: string[]
  rotativeIps: string[]
  localIps: {
    ip: string
    connectedIps: string[]
    hasWebsite?: boolean
    website?: string
  }[]
}

interface IpRelationsTableProps {
  data: IpRelation[]
  fakeAccounts: string[]
}

export default function IpRelationsTable({ data, fakeAccounts }: IpRelationsTableProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [expandedLocalIp, setExpandedLocalIp] = useState<string | null>(null)

  const toggleLocalIpDetails = (ip: string) => {
    if (expandedLocalIp === ip) {
      setExpandedLocalIp(null)
    } else {
      setExpandedLocalIp(ip)
    }
  }

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mb-4">
          <thead>
            <tr>
              <th className="p-3 bg-purple-900 text-white border border-gray-700">IP Principal</th>
              <th className="p-3 bg-purple-900 text-white border border-gray-700">IPs Relacionados</th>
              <th className="p-3 bg-purple-900 text-white border border-gray-700">IPs Rotativos</th>
              <th className="p-3 bg-purple-900 text-white border border-gray-700">IPs Locais</th>
            </tr>
          </thead>
          <tbody>
            {data.map((relation, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}>
                <td className="p-3 border border-gray-700 text-center font-medium">{relation.mainIp}</td>
                <td className="p-3 border border-gray-700">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {relation.relatedIps.map((ip, i) => (
                      <span key={i} className="bg-purple-900/30 px-2 py-1 rounded text-sm">
                        {ip}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-3 border border-gray-700">
                  <div className="flex flex-col gap-1">
                    {relation.rotativeIps.map((ip, i) => (
                      <div key={i} className="bg-gray-600 px-2 py-1 rounded text-sm flex items-center justify-between">
                        <span>{ip}</span>
                        {ip === "186.227.207.191" && (
                          <a
                            href={`http://${ip}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 bg-purple-700 hover:bg-purple-600 text-white px-2 py-0.5 rounded text-xs inline-flex items-center gap-1"
                            title="Visitar site"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
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
                        )}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-3 border border-gray-700">
                  <div className="flex flex-col gap-2">
                    {relation.localIps.map((localIp, i) => (
                      <div key={i} className="bg-gray-900/50 p-2 rounded">
                        <div className="flex items-center justify-between w-full">
                          <button
                            onClick={() => toggleLocalIpDetails(localIp.ip)}
                            className="flex items-center gap-2 text-left"
                          >
                            <span className="font-medium text-purple-400">{localIp.ip}</span>
                            <span className="text-xs bg-purple-900 px-2 py-1 rounded">
                              {expandedLocalIp === localIp.ip ? "Ocultar" : "Detalhes"}
                            </span>
                          </button>

                          {localIp.hasWebsite && localIp.website && (
                            <a
                              href={localIp.website.startsWith("http") ? localIp.website : `http://${localIp.website}`}
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
                          )}
                        </div>

                        {expandedLocalIp === localIp.ip && (
                          <div className="mt-2 pl-4 border-l-2 border-purple-500">
                            <p className="text-sm mb-1">IPs conectados:</p>
                            <div className="flex flex-wrap gap-1">
                              {localIp.connectedIps.map((connectedIp, j) => (
                                <div
                                  key={j}
                                  className="bg-purple-900/40 px-2 py-1 rounded text-xs flex items-center gap-1"
                                >
                                  <span>{connectedIp}</span>
                                  {connectedIp === "108.179.193.8" && (
                                    <a
                                      href={`http://${connectedIp}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="bg-purple-700 hover:bg-purple-600 text-white px-1 rounded inline-flex items-center"
                                      title="Visitar site"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
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
                                    </a>
                                  )}
                                  {connectedIp === "185.230.63.107" && (
                                    <a
                                      href="https://popularvazvet.com/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="bg-purple-700 hover:bg-purple-600 text-white px-1 rounded inline-flex items-center"
                                      title="Visitar popularvazvet.com"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
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
                                    </a>
                                  )}
                                  {connectedIp === "93.127.191.239" && (
                                    <a
                                      href="https://chavaohospitalveterinario.com.br/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="bg-purple-700 hover:bg-purple-600 text-white px-1 rounded inline-flex items-center"
                                      title="Visitar Chavão Hospital Veterinário"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
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
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-purple-400">Contas Falsas Deletadas</h3>
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-purple-900 hover:bg-purple-800 text-white flex items-center gap-2"
          >
            <span>Ver lista completa</span>
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
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </Button>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Foram identificadas e deletadas 200 contas falsas relacionadas aos IPs monitorados. Clique no botão acima para
          visualizar a lista completa.
        </p>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Botão X no canto superior direito */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-2 right-2 bg-purple-900 hover:bg-purple-800 text-white rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Fechar"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-purple-400">Lista Completa de Contas Falsas Deletadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {fakeAccounts.map((account, i) => (
                <div key={i} className="bg-gray-700 p-2 rounded text-sm">
                  {account}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button
                onClick={() => setIsDialogOpen(false)}
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
