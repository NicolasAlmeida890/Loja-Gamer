import {Link} from "react-router-dom"

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-[#95ff00]">404</h2>
      <p className="text-2xl font-bold mb-2 text-cyan-400">Ops! Página não encontrada</p>
      <p className="text-gray-400 mb-8 max-w-md">Parece que você se perdeu no mapa do jogo. A página que você procura não existe ou foi removida</p>
      <Link to="/">Voltar para o Home</Link>
    </main>
  )
}

export default Error
