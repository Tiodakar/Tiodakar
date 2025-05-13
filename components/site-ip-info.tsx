"use client"

import { useState } from "react"

interface SiteIpMapping {
  site: string
  ips: string[]
  description?: string
}

export default function SiteIpInfo() {
  const [expandedSite, setExpandedSite] = useState<string | null>(null)

  const siteIpMappings: SiteIpMapping[] = [
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
  ]

  const toggleSiteDetails = (site: string) => {
    if (expandedSite === site) {
      setExpandedSite(null)
    } else {
      setExpandedSite(site)
    }
  }

  return (
    <div className="bg-gray-900 p-4 rounded-lg mb-6 border border-purple-900/50">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Sites Relacionados a IPs Monitorados</h2>

      <div className="space-y-3">
        {siteIpMappings.map((mapping, index) => (
          <div key={index} className="bg-gray-800 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <button
                onClick={() => toggleSiteDetails(mapping.site)}
                className="flex items-center gap-2 text-left w-full"
              >
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <span className="text-white font-medium">{mapping.site}</span>
                <span className="text-xs bg-purple-900/50 px-2 py-0.5 rounded ml-2">
                  {mapping.ips.length} {mapping.ips.length === 1 ? "IP" : "IPs"}
                </span>
              </button>
              <a
                href={mapping.site}
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

            {expandedSite === mapping.site && (
              <div className="mt-3 pl-4 border-l-2 border-purple-500">
                <p className="text-sm text-gray-300 mb-2">{mapping.description}</p>
                <p className="text-sm text-gray-400 mb-1">IPs relacionados:</p>
                <div className="flex flex-wrap gap-2">
                  {mapping.ips.map((ip, i) => (
                    <div key={i} className="bg-gray-700 px-2 py-1 rounded text-xs flex items-center gap-1">
                      <span>{ip}</span>
                      <a
                        href={`http://${ip}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-700 hover:bg-purple-600 text-white px-1 rounded inline-flex items-center"
                        title="Visitar IP"
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
