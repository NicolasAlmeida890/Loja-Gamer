import {Link} from "react-router-dom"

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-[#ff0000]">404</h2>
      <p className="text-2xl font-bold mb-2 text-red-900">Ops! Página não encontrada</p>
      <p className="text-gray-400 mb-8 max-w-md">Parece que você se perdeu no mapa do jogo. A página que você procura não existe ou foi removida</p>
      <Link to="/" className="text-white">Voltar para o Home</Link>
    </main>
  )
}

export default Error
