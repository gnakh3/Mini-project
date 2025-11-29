import { useState } from 'react'
import style from '../../button.module.css'
import Logo from '../../assets/Logo.svg'
import Arrow from '../../assets/arrow_drop_down.svg'
import SearchBar from '../../assets/SearchBar.svg'
import Icon from '../../assets/UserIcon.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false)

  const games = ["GTA 5", "GTA 5 Online", "RED Dead", "RED Online"]

  return (
    <div className="w-full h-[112px] bg-white relative">
      <div className='fixed top-0 z-50 w-full bg-[#020202] h-28 flex items-center justify-between px-5 md:px-36'>
        <div className='flex items-center gap-4 md:gap-6'>
          <img src={Logo} alt="" />
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <div
                className='flex items-center cursor-pointer hover:text-amber-400 hover:scale-105 transition-transform duration-300'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span>Jogos</span>
                <img src={Arrow} alt="Arrow" className={`ml-1 w-4 h-4 transition-transform duration-300 ${menuOpen ? "rotate-180" : "rotate-0"}`} />
              </div>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg p-2 text-white transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {games.map((game, idx) => (
                  <p
                    key={idx}
                    className="py-2 px-3 hover:bg-gray-700 rounded cursor-pointer transition-colors duration-200"
                  >
                    {game}
                  </p>
                ))}
              </div>
            </div>

            <div className='hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-amber-300'>Loja</div>
            <div className='hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-amber-300'>Ajuda</div>
          </div>
        </div>
        <div className='hidden md:flex items-center gap-4 md:gap-6'>
          <button className={style.button}>Baixe o Launcher</button>
          <div className='flex justify-between w-[118px]'>
            <img src={SearchBar} alt="Search Bar" className='pl-1 hover:scale-105 transition-transform duration-300 cursor-pointer' />
            <img src={Icon} alt="User Icon" className='hover:scale-105 transition-transform duration-300 cursor-pointer' />
          </div>
        </div>
        <button className='block md:hidden' onClick={() => setMobileMenuOpen(true)}>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
      <div className={`fixed inset-0 bg-[#020202] z-50 p-6 flex flex-col transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-10">
          <img src={Logo} alt="" className="w-10 h-10"/>
          <button onClick={() => setMobileMenuOpen(false)}>
            <div className="w-6 h-0.5 bg-white mb-1 rotate-45 origin-center"></div>
            <div className="w-6 h-0.5 bg-white -rotate-45 origin-center"></div>
          </button>
        </div>

        <div className="flex flex-col gap-6 text-xl font-medium">
          <div>
            <div
              className='flex justify-between items-center cursor-pointer hover:text-amber-400 transition-colors duration-300'
              onClick={() => setMobileGamesOpen(!mobileGamesOpen)}
            >
              Jogos
              <img src={Arrow} alt="" className={`ml-1 w-4 h-4 transition-transform duration-300 ${mobileGamesOpen ? "rotate-180" : "rotate-0"}`} />
            </div>
            <div className={`flex flex-col pl-4 mt-2 border-l border-gray-700 transition-all duration-300 overflow-hidden ${mobileGamesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {games.map((game, idx) => (
                <p key={idx} className="text-white py-2 cursor-pointer hover:text-amber-300 transition-colors duration-200">
                  {game}
                </p>
              ))}
            </div>
          </div>

          <div className='cursor-pointer hover:text-amber-300'>Loja</div>
          <div className='cursor-pointer hover:text-amber-300'>Ajuda</div>
        </div>

        <div className="mt-auto flex flex-col gap-6">
          <div className="flex justify-between w-[118px]">
            <img src={SearchBar} alt="" className='pl-1 hover:scale-105 transition-transform duration-300 cursor-pointer' />
            <img src={Icon} alt="" className='hover:scale-105 transition-transform duration-300 cursor-pointer' />
          </div>
          <button className={style.button}>Baixe o Launcher</button>
        </div>
      </div>
    </div>
  )
}

export default Header
