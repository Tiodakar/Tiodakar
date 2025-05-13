"use client"

import { useState } from "react"

interface Address {
  id: number
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  zipCode: string
  relatedIps: string[]
  isTopRelated?: boolean
  lastAccess?: string
  accessCount?: number
}

interface RelatedAddressesProps {
  addresses: Address[]
}

export default function RelatedAddresses({ addresses }: RelatedAddressesProps) {
  const [expandedAddress, setExpandedAddress] = useState<number | null>(null)

  const toggleAddressDetails = (id: number) => {
    if (expandedAddress === id) {
      setExpandedAddress(null)
    } else {
      setExpandedAddress(id)
    }
  }

  // Ordenar endereços para que o top relacionado apareça primeiro
  const sortedAddresses = [...addresses].sort((a, b) => {
    if (a.isTopRelated) return -1
    if (b.isTopRelated) return 1
    return 0
  })

  return (
    <div className="bg-gray-900 p-4 rounded-lg mb-6 border border-purple-900/50">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Endereços Relacionados aos IPs</h2>

      <div className="space-y-3">
        {sortedAddresses.map((address) => (
          <div
            key={address.id}
            className={`${
              address.isTopRelated ? "bg-purple-900/30 border border-purple-500" : "bg-gray-800"
            } p-3 rounded-lg`}
          >
            <div className="flex items-center justify-between">
              <button
                onClick={() => toggleAddressDetails(address.id)}
                className="flex items-center gap-2 text-left w-full"
              >
                <div
                  className={`h-2 w-2 ${address.isTopRelated ? "bg-purple-400" : "bg-purple-500"} rounded-full`}
                ></div>
                <span className="text-white font-medium">
                  {address.street}, {address.number} - {address.neighborhood}
                </span>
                {address.isTopRelated && (
                  <span className="ml-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                    Top Relacionado
                  </span>
                )}
              </button>
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

            {expandedAddress === address.id && (
              <div className="mt-3 pl-4 border-l-2 border-purple-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  <div>
                    <p className="text-sm text-gray-400">Endereço Completo:</p>
                    <p className="text-sm text-gray-300">
                      {address.street}, {address.number} - {address.neighborhood}
                      <br />
                      {address.city}, {address.state} - CEP: {address.zipCode}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Estatísticas:</p>
                    <p className="text-sm text-gray-300">
                      Último acesso: {address.lastAccess || "N/A"}
                      <br />
                      Total de acessos: {address.accessCount || 0}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-1">IPs relacionados:</p>
                <div className="flex flex-wrap gap-2">
                  {address.relatedIps.map((ip, i) => (
                    <div key={i} className="bg-gray-700 px-2 py-1 rounded text-xs flex items-center gap-1">
                      <span>{ip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
