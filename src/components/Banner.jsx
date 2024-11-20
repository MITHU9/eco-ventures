import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const images = [
    {
      src: "https://tvlleaders.com/wp-content/uploads/2019/12/Intrepid-Travel-Chile-Patagonia-trekking-002.jpg",
      alt: "Snowy Mountain Adventure",
      text: "Explore the Icy Peaks",
    },
    {
      src: "https://www.trekkingchile.com/es/wp-content/uploads/sites/4/2018/02/touren.jpg",
      alt: "Frozen Trails",
      text: "Embark on Winter Treks",
    },
    {
      src: "https://storage.googleapis.com/chile-travel-cdn/2021/03/Lauca-sernatur-ATR22-1024x540-1-1024x540.jpeg",
      alt: "Lakes in Winter",
      text: "Discover Frosty Serenity",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-500/40 to-white/20"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                    {image.text}
                  </h2>
                  <p className="mt-2 text-lg md:text-xl font-medium italic drop-shadow-md">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
