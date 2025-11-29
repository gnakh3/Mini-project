import type { FC } from "react";
import { useState } from "react";
import Banner from "../../assets/GTA 6 banner.svg";
import game1 from "../../assets/GTA 5.svg";
import game2 from "../../assets/GTA online.svg";
import game3 from "../../assets/RED.svg";
import game4 from "../../assets/RED Online.svg";
import style from "../../button.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

// gavaswore


const allGames = [
  { src: game1, category: "PC" },
  { src: game2, category: "Console" },
  { src: game3, category: "PC" },
  { src: game4, category: "Console" },
  { src: game1, category: "Dispositivos Portáteis" },
  { src: game2, category: "PC" },
  { src: game3, category: "Console" },
  { src: game4, category: "Dispositivos Portáteis" },
];

const categories = ["PC", "Console", "Dispositivos Portáteis"];

const Games: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const filteredGames = selectedCategory
    ? allGames.filter(game => game.category === selectedCategory)
    : allGames;

  const firstGames = filteredGames.slice(0, 4);
  const extraGames = filteredGames.slice(4);

  return (
    <div className="flex flex-col items-center gap-20">
      <div
        className="w-full h-[400px] sm:h-[550px] lg:h-[850px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="w-full max-w-[1160px] flex flex-col items-center gap-10 px-5">
        <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-5">
          <div className="font-extrabold text-[32px] sm:text-[40px] lg:text-[48px]">
            Jogos em Destaque
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-center">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`px-6 py-1 rounded-[100px] cursor-pointer transition-transform hover:scale-105 ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-black"
                    : "bg-[#606060] text-white"
                }`}
                onClick={() => {
                  setSelectedCategory(prev => (prev === cat ? null : cat));
                  setShowMore(false); 
                }}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full transition-all duration-500 ease-in-out">
          {firstGames.map((game, idx) => (
            <img
              key={idx}
              src={game.src}
              alt={`game-${idx}`}
              className="w-full h-auto max-h-[320px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}

          {showMore &&
            extraGames.map((game, idx) => (
              <img
                key={idx + 4}
                src={game.src}
                alt={`game-${idx + 4}`}
                className="w-full h-auto max-h-[320px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer transform transition-all duration-500 ease-in-out opacity-100 translate-y-0"
              />
            ))}
        </div>
        {extraGames.length > 0 && (
          <button
            className={`${style.button1} hidden md:block`}
            onClick={() => setShowMore(prev => !prev)}
          >
            {showMore ? "Ver menos" : "Ver todos os jogos"}
          </button>
        )}
        <div className="md:hidden w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {filteredGames.map((game, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={game.src}
                  alt={`game-${idx}`}
                  className="w-full h-auto max-h-[320px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Games;
