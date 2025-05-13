"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function MonitoringDashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"sites" | "instagram" | "facebook">("sites")
  const [totalDenuncias, setTotalDenuncias] = useState(4587)
  const [contasInstagram, setContasInstagram] = useState(3)
  const [contasFacebook, setContasFacebook] = useState(2)
  const [contasDesativadas, setContasDesativadas] = useState(203)
  const [contasDenunciadasHoje, setContasDenunciadasHoje] = useState(Math.floor(Math.random() * 51) + 30) // Valor aleatório entre 30 e 80
  const [diasPassados, setDiasPassados] = useState(0)

  // Calcular o número de dias desde 22 de janeiro de 2025
  useEffect(() => {
    const dataInicial = new Date(2025, 0, 22) // 22 de janeiro de 2025 (mês é 0-indexed)
    const hoje = new Date()
    const diferencaEmDias = Math.floor((hoje.getTime() - dataInicial.getTime()) / (1000 * 60 * 60 * 24))

    if (diferencaEmDias > 0) {
      setDiasPassados(diferencaEmDias)

      // Aumentar denúncias (50-100 por dia)
      const aumentoDenuncias = diferencaEmDias * (Math.floor(Math.random() * 51) + 50) // Entre 50 e 100 por dia
      setTotalDenuncias(4587 + aumentoDenuncias)

      // Contas desativadas (40-60 por dia)
      const aumentoDesativadas = diferencaEmDias * (Math.floor(Math.random() * 21) + 40) // Entre 40 e 60 por dia
      setContasDesativadas(203 + aumentoDesativadas)

      // A cada 3 dias, uma conta do Instagram e uma do Facebook são deletadas
      const ciclosDe3Dias = Math.floor(diferencaEmDias / 3)
      setContasInstagram(Math.max(0, 3 - ciclosDe3Dias))
      setContasFacebook(Math.max(0, 2 - ciclosDe3Dias))
    }
  }, [])

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-purple-400">Contas Falsas Deletadas</h3>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-purple-900 hover:bg-purple-800 text-white flex items-center gap-2"
        >
          <span>Ver detalhes do monitoramento</span>
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
        visualizar detalhes do monitoramento.
      </p>

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

            <h2 className="text-xl font-bold mb-4 text-purple-400">Monitoramento de Sites e Redes Sociais</h2>

            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-4">
              <button
                className={`px-4 py-2 ${activeTab === "sites" ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400"}`}
                onClick={() => setActiveTab("sites")}
              >
                Sites Monitorados
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "instagram" ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400"}`}
                onClick={() => setActiveTab("instagram")}
              >
                Instagram
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "facebook" ? "border-b-2 border-purple-500 text-purple-400" : "text-gray-400"}`}
                onClick={() => setActiveTab("facebook")}
              >
                Facebook
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === "sites" && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Sites sob Monitoramento</h3>
                  <div className="space-y-3">
                    {["http://lervet.com", "http://lervet.com.br", "http://veterinariapopularlervet.com.br"].map(
                      (site, index) => (
                        <div key={index} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                          <span>{site}</span>
                          <a
                            href={site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-900 hover:bg-purple-800 text-white px-2 py-1 rounded text-sm"
                          >
                            Visitar
                          </a>
                        </div>
                      ),
                    )}
                  </div>

                  {/* Estatísticas de Denúncias - Apenas na aba Sites */}
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white mb-3">Estatísticas de Denúncias</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <h4 className="text-sm text-gray-400">Total de Denúncias</h4>
                        <p className="text-2xl font-bold text-purple-400">{totalDenuncias.toLocaleString()}</p>
                        <p className="text-xs text-gray-400 mt-1">Desde 22 de janeiro de 2025</p>
                      </div>
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <h4 className="text-sm text-gray-400">Contas Desativadas</h4>
                        <p className="text-2xl font-bold text-purple-400">{contasDesativadas}</p>
                        <p className="text-xs text-gray-400 mt-1">Por denúncias em massa</p>
                      </div>
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <h4 className="text-sm text-gray-400">Contas denunciadas hoje</h4>
                        <p className="text-2xl font-bold text-purple-400">{contasDenunciadasHoje}</p>
                        <p className="text-xs text-gray-400 mt-1">Atualizações diárias</p>
                      </div>
                    </div>
                  </div>

                  {/* Tabela de Status das Contas de Monitoramento - Apenas na aba Sites */}
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white mb-3">Status das Contas de Monitoramento</h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 bg-purple-900 text-white border border-gray-700 text-left">Plataforma</th>
                          <th className="p-2 bg-purple-900 text-white border border-gray-700 text-center">
                            Contas Ativas
                          </th>
                          <th className="p-2 bg-purple-900 text-white border border-gray-700 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-700">
                          <td className="p-2 border border-gray-600">Instagram</td>
                          <td className="p-2 border border-gray-600 text-center">3</td>
                          <td className="p-2 border border-gray-600 text-center">
                            <span className="bg-green-900/50 text-green-400 px-2 py-0.5 rounded-full text-xs">
                              Ativas
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-gray-800">
                          <td className="p-2 border border-gray-600">Facebook</td>
                          <td className="p-2 border border-gray-600 text-center">2</td>
                          <td className="p-2 border border-gray-600 text-center">
                            <span className="bg-green-900/50 text-green-400 px-2 py-0.5 rounded-full text-xs">
                              Ativas
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-gray-700">
                          <td className="p-2 border border-gray-600">Google</td>
                          <td className="p-2 border border-gray-600 text-center">16</td>
                          <td className="p-2 border border-gray-600 text-center">
                            <span className="bg-green-900/50 text-green-400 px-2 py-0.5 rounded-full text-xs">
                              Ativas
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "instagram" && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Monitoramento do Instagram</h3>
                  <p className="text-gray-300 mb-4">
                    Estamos monitorando e fazendo denúncias em massa para contas falsas do Instagram e realizando um
                    preenchimento orgânico para evitar quedas de seguidores.
                  </p>

                  <div className="bg-gray-700 p-3 rounded-lg flex justify-between items-center mb-4">
                    <span>http://instagram.com/veterinariapopularlervet</span>
                    <a
                      href="http://instagram.com/veterinariapopularlervet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-900 hover:bg-purple-800 text-white px-2 py-1 rounded text-sm"
                    >
                      Visitar
                    </a>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg">
                    <h4 className="font-medium mb-2">Status das Denúncias</h4>
                    <div className="flex justify-between items-center">
                      <span>Total de denúncias realizadas:</span>
                      <span className="bg-purple-900/50 px-3 py-1 rounded-full">{totalDenuncias}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "facebook" && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Monitoramento do Facebook</h3>
                  <p className="text-gray-300 mb-4">
                    Estamos vigiando as atividades no Facebook, porém não é possível apagar mensagens diretamente. As
                    remoções só podem ocorrer através de denúncias, que dependem da existência de contas ativas para
                    realizá-las.
                  </p>

                  <div className="bg-gray-900 p-3 rounded-lg">
                    <h4 className="font-medium mb-2">Aviso Importante</h4>
                    <p className="text-yellow-400 text-sm">
                      As denúncias no Facebook só podem ser realizadas se houver contas ativas disponíveis para fazer as
                      denúncias. Atualmente temos {contasFacebook} contas ativas para este fim.
                    </p>
                  </div>
                </div>
              )}
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
