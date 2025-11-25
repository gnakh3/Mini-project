import style from '../../button.module.css'
import Logo from '../../assets/Logo.svg'
import Arrow from '../../assets/arrow_drop_down.svg'
import SearchBar from '../../assets/SearchBar.svg'
import Icon from '../../assets/UserIcon.svg'

const Header = () => {
  return (
     <div className='h-[110px] w-full'>
     <div className='w-full bg-[#020202] h-28 flex items-center justify-between pl-[140px] pr-[140px] fixed top-0'>
        <div className='h-auto flex w-[300px] items-center justify-between'>
         <img src={Logo} alt="" />
           <div className='flex items-center'>
            <div className='hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-amber-400'>Jogos</div>
            <img src={Arrow} alt="Arrow"  className='hover:scale-105 transition-transform duration-300 cursor-pointer'/>
         </div>
         <div className='hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-amber-300'>Loja</div>
            <div className='hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-amber-300'>Ajuda</div>
        </div>
        <div className='h-auto w-[345px] flex items-center justify-between'>
          <button className={style.button}>Baixe o Launcher</button>
          <div className='flex justify-between w-[118px]'>
          <img src={SearchBar} alt="Search Bar" className='pl-1 hover:scale-105 transition-transform duration-300 cursor-pointer' />
          <img src={Icon} alt="User Icon" className='hover:scale-105 transition-transform duration-300 cursor-pointer' />
          </div>
        </div>
     </div>
     </div>
  )
}

export default Header