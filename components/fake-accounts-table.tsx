interface FakeAccountData {
  ip: string
  country: string
  accessCount: number
  relatedIps: string[]
  connectionType: string
}

interface FakeAccountsTableProps {
  data: FakeAccountData[]
}

export default function FakeAccountsTable({ data }: FakeAccountsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Endereço IP</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">País</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Acessos às Contas</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">IPs Relacionados</th>
            <th className="p-3 bg-purple-900 text-white border border-gray-700">Tipo de Conexão</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}>
              <td className="p-3 border border-gray-700 text-center">{item.ip}</td>
              <td className="p-3 border border-gray-700 text-center">{item.country}</td>
              <td className="p-3 border border-gray-700 text-center">
                <span className="bg-purple-900/50 px-3 py-1 rounded-full font-medium">{item.accessCount} acessos</span>
              </td>
              <td className="p-3 border border-gray-700 text-center">{item.relatedIps.join(", ")}</td>
              <td className="p-3 border border-gray-700 text-center">{item.connectionType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
