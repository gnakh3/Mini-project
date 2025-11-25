import Banner from '../../assets/GTA 6 banner.svg'
import game1 from '../../assets/GTA 5.svg'
import game2 from '../../assets/GTA online.svg'
import game3 from '../../assets/RED.svg'
import game4 from '../../assets/RED Online.svg'
import style from '../../button.module.css'

type availableGames = {
  game1: string
  game2: string
  game3: string
  game4: string

  
}

const Games = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-20'>
        <div className="w-full h-[850px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Banner})` }}></div>
        <div className='w-[1160px] h-[555px] flex flex-col justify-between items-center'>
                 <div className='flex w-full h-auto justify-between items-center'>
                  <div className='h-auto w-auto font-extrabold text-[48px] pb-0.5'>Jogos em Destaque</div>
                  <div className='flex w-[404px] h-8 justify-between items-center text-center'>
                    <div className='h-8 w-[70px] bg-[#606060] rounded-[100px] pt-1 hover:scale-105 transition-transform duration-300 cursor-pointer'>PC</div>
                    <div className='h-8 w-[106px] bg-[#606060] rounded-[100px] pt-1 hover:scale-105 transition-transform duration-300 cursor-pointer'>Console</div>
                    <div className='h-8 w-[196px] bg-[#606060] rounded-[100px] pt-1 hover:scale-105 transition-transform duration-300 cursor-pointer'>Dispositivos Portáteis</div>
                  </div>
                 </div>
            <div className='flex w-full justify-between'>
              <img src={game1} alt="GTA 5" className="w-[260px] h-[315.85px] rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"/>
              <img src={game2} alt="GTA 5 ONLINE" className="w-[260px] h-[315.85px] rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"/>
              <img src={game3} alt="RED DEAD REDEMPTION"className="w-[260px] h-[315.85px] rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" />
              <img src={game4} alt="RED DEAD REDEMPTION ONLINE" className="w-[260px] h-[315.85px] rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"/>
            </div>
            <button className={style.button1}>Ver todos os jogos</button>
        </div>

    </div>
  )
}

export default Games