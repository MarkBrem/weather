import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./galleryStyled.css";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const API_KEY = "51118603-b773f8f036f26b3bd962f6338";
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&per_page=7`)
      .then((res) => res.json())
      .then((data) => setImages(data.hits || []));
  }, []);

  return (
    <>
      <br />
      <Swiper
        watchSlidesProgress={false}
        slidesPerView={3}
        className="mySwiper"
        loop={true}
        spaceBetween={25}
        modules={[Navigation]}
        navigation
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="slide-wrapper">
              <img src={img.webformatURL} alt={img.tags} />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
