import Header from "../Header/Header"
import GameSection from "../GameSection/Games"
import Launchers from "../GameLauncher/Launchers"
import News from "../NewsPage/News"
import Footer from "../Footer/Footer"
import bg1 from "../../assets/bg1.svg"
import bg2 from "../../assets/bg2.svg"
import bg3 from "../../assets/bg3.svg"

const EntirePage = () => {
  const newsData = [
    {
      bg: bg1,
      title: "Grand Theft Auto VI - Veja o 1º trailer agora",
      game: "Rockstar Games",
      date: "5 de dezembro de 2023",
    },
    {
      bg: bg2,
      title: "1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.",
      game: "Rockstar Games",
      date: "1 de dezembro de 2023",
    },
    {
      bg: bg3,
      title: "Nova atualização de GTA Online chegando em dezembro",
      game: "GTA Online",
      date: "30 de novembro de 2023",
    },
  ]

  return (
    <>
      <Header />
      <GameSection />
      <News news={newsData} />
      <Launchers/>
      <Footer/>
    </>
  )
}

export default EntirePage
