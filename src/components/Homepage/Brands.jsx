import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { imageList } from '../../images';

export const Brands = () => {
  return (
    <section className="py-20 px-5">
      <h2 className="text-3xl text-center uppercase mb-10">Brands / Suppliers</h2>
      <Swiper
        spaceBetween={35}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {imageList.map((image) => (
          <SwiperSlide>
            <img src={image} alt="brand" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
