interface HighlightedIpData {
  ip: string
  location: string
  accessCount: number
  observation: string
}

interface HighlightedIpTableProps {
  data: HighlightedIpData[]
}

export default function HighlightedIpTable({ data }: HighlightedIpTableProps) {
  const accessCounts = new Set<number>()

  const generateUniqueAccessCount = (): number => {
    let count = Math.floor(Math.random() * 100) + 1
    while (accessCounts.has(count)) {
      count = Math.floor(Math.random() * 100) + 1
    }
    accessCounts.add(count)
    return count
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Endereço IP</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Localização</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Quantidade de acessos em 2025</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Observação</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-purple-900/30">
              <td className="p-3 border border-gray-700 text-center">{item.ip}</td>
              <td className="p-3 border border-gray-700 text-center">{item.location}</td>
              <td className="p-3 border border-gray-700 text-center">{generateUniqueAccessCount()}</td>
              <td className="p-3 border border-gray-700 text-center">{item.observation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
