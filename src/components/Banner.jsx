import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const images = [
    {
      src: "https://tvlleaders.com/wp-content/uploads/2019/12/Intrepid-Travel-Chile-Patagonia-trekking-002.jpg",
      alt: "Image 1",
    },
    {
      src: "https://www.trekkingchile.com/es/wp-content/uploads/sites/4/2018/02/touren.jpg",
      alt: "Image 2",
    },
    {
      src: "https://storage.googleapis.com/chile-travel-cdn/2021/03/Lauca-sernatur-ATR22-1024x540-1-1024x540.jpeg",
      alt: "Image 3",
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
              className="w-full h-[400px] md:h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <img src={image.src} alt={image.alt} className="hidden h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
