type NewsItem = {
  bg: string
  title: string
  game: string
  date: string
}

type NewsProps = {
  news: NewsItem[] 
}

const News = ({ news }: NewsProps) => {
  return (
    <div className="w-full flex flex-col items-center pt-28">
        <div>
      <h2 className="text-[48px] font-extrabold self-start pb-10">Últimas Notícias</h2>
      <div className="flex gap-10">
        <div className="w-[860px] h-[488px] bg-[#020202] rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
          <img src={news[0].bg} alt="Game Poster" className="h-[352px] w-full object-cover object-top" />
          <div className="px-8 py-5 flex flex-col gap-[5px]">
            <div className="text-[32px]">{news[0].title}</div>
            <div className="flex justify-between text-[#797979] w-[320px]">
              <span>{news[0].game}</span>
              <span>{news[0].date}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {news.slice(1).map((item, i) => (
            <div
              key={i}
              className="w-[260px] h-56 bg-[#020202] rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
              <img src={item.bg} alt="Game Poster" className="h-[142px] w-full object-cover object-top" />
              <div className="px-3 py-2 flex flex-col gap-1">
                <div className="text-[13px]">{item.title}</div>
                <div className="flex justify-between text-[#797979] text-[12px] w-[226px]">
                  <span>{item.game}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default News
 