import logo from '../../assets/logo2.svg'
import twitch from '../../assets/twitch.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import youtoube from '../../assets/youtube.svg'
import facebook from '../../assets/facebook.svg'


const Footer = () => {
  return (
    <div className="w-full h-[238px] pl-[140px] pr-[140px] bg-[#020202] flex items-center justify-between">
      <div className='flex gap-10'>
        <img src={logo} alt="" />
       <div className='flex flex-col'>
        <div className='text-[#B1B1B1] flex gap-6'>
            <div>CONTATO</div>
            <div>SOBRE</div>
            <div>SUPORTE</div>
            <div>EMPREGOS</div>
        </div>
        <div className='font-light text-[13px text-[#B1B1B1] pt-2'>©2023 Rockstar Games, Inc.    -    YWR Studio.</div>
        </div>
      </div>
      <div className='flex gap-8'>
        <img src={twitch} alt="twitch" /><img src={instagram} alt="instagram" /><img src={twitter} alt="twitter" /><img src={youtoube} alt="youtube" /><img src={facebook} alt="facebook" />
      </div>
    </div>
  )
}

export default Footer