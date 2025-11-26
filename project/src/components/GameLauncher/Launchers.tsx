import bg from '../../assets/launcherbg.svg'
import logo from '../../assets/Logo (1).svg'
import launcher from '../../assets/Games Launcher.svg'
import style from '../../button.module.css'

const Launchers = () => {
  return (
    <div className='w-full h-auto flex items-center justify-center pt-20 pb-[95px]'>
         <div className="w-[1160px] h-[535px] bg-cover bg-center bg-no-repeat flex items-center justify-between pl-19" style={{ backgroundImage: `url(${bg})`}}>
                <div className='h-[410px] flex justify-between flex-col'>
                    <div className='flex gap-[18px]'>
                        <img src={logo} alt="" />
                        <div className='w-[186px] h-[123px] font-extrabold text-[41.57px] text-[#020202]'>Games Launcher</div>
                    </div>
                    <div className='h-[96px] w-[330px] text-[36px] text-[#020202]'>Todos os seus jogos em um só lugar.</div>
                    <button className={style.button2}>Download</button>
                </div>
                <img src={launcher} alt="" />
         </div>
    </div>
  )
}

export default Launchers