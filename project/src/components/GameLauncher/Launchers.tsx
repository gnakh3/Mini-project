import bg from '../../assets/launcherbg.svg'
import logo from '../../assets/Logo (1).svg'
import launcher from '../../assets/Games Launcher.svg'
import style from '../../button.module.css'

const Launchers = () => {
  return (
    <div className='w-full h-auto flex items-center justify-center pt-20 pb-[95px]'>
      <div
        className="w-[1160px] h-[535px] bg-cover bg-center bg-no-repeat flex items-center justify-between pl-19
                   flex-col sm:flex-col md:flex-row md:pl-19 md:pr-0"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='h-[410px] flex justify-between flex-col mb-10 md:mb-0'>
          <div className='flex gap-[18px] items-center'>
            <img src={logo} alt="" className='w-auto h-auto' />
            <div className='w-[186px] h-[123px] font-extrabold text-[41.57px] text-[#020202] text-center md:text-left'>
              Games Launcher
            </div>
          </div>
          <div className='h-[96px] w-[330px] text-[36px] text-[#020202] text-center md:text-left mt-4 md:mt-0'>
            Todos os seus jogos em um só lugar.
          </div>
          <div className='flex justify-center md:justify-start mt-4 md:mt-0'>
            <button className={style.button2}>Download</button>
          </div>
        </div>
        <div className='flex justify-center md:justify-end mt-6 md:mt-0'>
          <img src={launcher} alt="" className='w-full max-w-[400px] md:max-w-none h-auto sm:pr-2 pb-10' />
        </div>
      </div>
    </div>
  )
}

export default Launchers
