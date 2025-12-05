import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Clients = () => {
  return (
    <>
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,    
            disableOnInteraction: false
          }}
          modules={[Pagination, Autoplay]}
          className="clients-swiper"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 }
          }}
        >
          <SwiperSlide>
            <img src="/src/assets/img/clients/client-1.png" className="img-fluid" alt="Client 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img/clients/client-2.png" className="img-fluid" alt="Client 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img/clients/client-3.png" className="img-fluid" alt="Client 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img/clients/client-4.png" className="img-fluid" alt="Client 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img/clients/client-5.png" className="img-fluid" alt="Client 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img/clients/client-6.png" className="img-fluid" alt="Client 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img/clients/client-7.png" className="img-fluid" alt="Client 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img/clients/client-8.png" className="img-fluid" alt="Client 8" />
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
    </>
  );
};

export default Clients;