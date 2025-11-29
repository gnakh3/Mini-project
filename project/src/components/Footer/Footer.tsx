import logo from '../../assets/logo2.svg'
import twitch from '../../assets/twitch.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'
import facebook from '../../assets/facebook.svg'

const Footer = () => {
  return (
    <div className="w-full bg-[#020202] flex flex-col md:flex-row items-center justify-between px-8 md:px-[140px] py-6 md:h-[238px] pt-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
        <img 
          src={logo} 
          alt="logo" 
          className="w-20 md:w-auto hover:scale-105 transition-transform duration-300" 
        />
        
        <div className="flex flex-col items-center md:items-start">
          <div className="text-[#B1B1B1] flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
            <div className="cursor-pointer hover:text-amber-400 transition-colors duration-300">CONTATO</div>
            <div className="cursor-pointer hover:text-amber-400 transition-colors duration-300">SOBRE</div>
            <div className="cursor-pointer hover:text-amber-400 transition-colors duration-300">SUPORTE</div>
            <div className="cursor-pointer hover:text-amber-400 transition-colors duration-300">EMPREGOS</div>
          </div>
          <div className="font-light text-[13px] text-[#B1B1B1] pt-2 text-center md:text-left">
            ©2023 Rockstar Games, Inc. - YWR Studio.
          </div>
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 mt-4 md:mt-0">
        {[twitch, instagram, twitter, youtube, facebook].map((icon, idx) => (
          <img 
            key={idx} 
            src={icon} 
            alt="" 
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>

    </div>
  )
}

export default Footer
