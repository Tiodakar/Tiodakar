interface IpData {
  id: number
  ip: string
  country: string
  city: string
  totalNavigation: number
  updateTime: string
  hasWebsite?: boolean
  website?: string
  isNew?: boolean
}

interface IpTableProps {
  data: IpData[]
}

export default function IpTable({ data }: IpTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Nº</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Endereço IP</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">País IP</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Cidade</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Total de navegação por IP</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Tempo de atualização do registro</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={`${item.id % 2 === 0 ? "bg-gray-700" : "bg-gray-800"} ${item.isNew ? "animate-pulse bg-purple-900/30" : ""}`}
            >
              <td className="p-3 border border-gray-700 text-center">{item.id}</td>
              <td className="p-3 border border-gray-700 text-center">
                <span className={item.isNew ? "text-purple-300 font-bold" : ""}>{item.ip}</span>
                {item.isNew && (
                  <span className="ml-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">Novo</span>
                )}
              </td>
              <td className="p-3 border border-gray-700 text-center">
                <div className="flex items-center justify-center gap-2">
                  <img src="https://flagcdn.com/br.svg" alt="Bandeira do Brasil" className="h-4 w-auto" />
                  <span>{item.country}</span>
                </div>
              </td>
              <td className="p-3 border border-gray-700 text-center">{item.city}</td>
              <td className="p-3 border border-gray-700 text-center">{item.totalNavigation}</td>
              <td className="p-3 border border-gray-700 text-center">{item.updateTime}</td>
              <td className="p-3 border border-gray-700 text-center">
                {item.hasWebsite && item.website && (
                  <a
                    href={item.website.startsWith("http") ? item.website : `http://${item.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900 hover:bg-purple-800 text-white px-3 py-1 rounded text-sm inline-flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
