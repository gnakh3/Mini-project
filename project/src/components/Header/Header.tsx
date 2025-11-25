import style from '../../button.module.css'
import Logo from '../../assets/Logo.svg'
import Arrow from '../../assets/arrow_drop_down.svg'
import SearchBar from '../../assets/SearchBar.svg'
import Icon from '../../assets/UserIcon.svg'

const Header = () => {
  return (
     <div className='w-full bg-[#020202] h-[112px] flex items-center justify-between pl-[140px] pr-[140px]'>
        <div className='h-auto flex w-[300px] items-center justify-between'>
         <img src={Logo} alt="" />
           <div className='flex items-center'>
            <div className='text-white'>Jogos</div>
            <img src={Arrow} alt="Arrow" />
         </div>
         <div className='text-white'>Loja</div>
            <div className='text-white'>Ajuda</div>
        </div>
        <div className='h-auto w-[345px] flex items-center justify-between'>
          <button className={'{style.button}'}>Baixe o Launcher</button>
          <div className='flex justify-between w-[118px]'>
          <img src={SearchBar} alt="Search Bar" className='pl-1' />
          <img src={Icon} alt="User Icon" />
          </div>
        </div>
     </div>
  )
}

export default Header