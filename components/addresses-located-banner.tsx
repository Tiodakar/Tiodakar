"use client"

import DetailedInfoPopup from "./detailed-info-popup"

interface AddressesLocatedBannerProps {
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

export default function AddressesLocatedBanner({
  relatedSites,
  monitoredIps,
  capturedAddresses,
}: AddressesLocatedBannerProps) {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 p-4 rounded-lg mb-6 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 p-2 rounded-full">
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
              className="text-white"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Endereços Físicos Localizados</h2>
            <p className="text-purple-200">
              Foram localizados {capturedAddresses.length} endereços físicos relacionados aos IPs monitorados. O
              endereço principal está localizado em{" "}
              {capturedAddresses.find((a) => a.isTopRelated)?.city || "São Gonçalo"}.
            </p>
          </div>
        </div>
        <DetailedInfoPopup
          relatedSites={relatedSites}
          monitoredIps={monitoredIps}
          capturedAddresses={capturedAddresses}
        />
      </div>
    </div>
  )
}
