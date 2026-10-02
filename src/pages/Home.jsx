import GameCard from "../components/GameCard"
import ImagemJogo from "../assets/Imagem.jpg"

const Home = () => {

  const jogos =[
    { id:1,titulo:"Jogo1", preco: "r$ 200,00", imagem:ImagemJogo},
    { id:2,titulo:"Jogo2", preco: "r$ 300,00", imagem:ImagemJogo},
    { id:3,titulo:"Jogo3", preco: "r$ 400,00", imagem:ImagemJogo},
    { id:4,titulo:"Jogo4", preco: "r$ 500,00", imagem:ImagemJogo},
  ]
  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">Jogos em Destaques</h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {jogos.map((jogo) => (
          <GameCard
            key={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco}
            imagem={jogo.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
