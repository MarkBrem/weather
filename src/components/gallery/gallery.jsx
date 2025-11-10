import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useWindowSize } from "react-use";
import "./galleryStyled.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderItem, SliderStl } from "./GalleryStl.styled";
import { Container } from "components/container/Container";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const { width } = useWindowSize();

  useEffect(() => {
    const API_KEY = "51118603-b773f8f036f26b3bd962f6338";
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&per_page=7`)
      .then((res) => res.json())
      .then((data) => setImages(data.hits || []));
  }, []);

  const settings = {
    dots: false,
    infinite: true, 
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

    if (width < 1200) return null;

  return (<>
  <Container>
    <h2 style={{ alignSelf: "flex-start", textAlign: "left" }}>Beautiful nature</h2>
    </Container>

      <SliderStl {...settings}>
        {images.map((img) => (
          <SliderItem key={img.id}>
            <img
              src={img.webformatURL}
              alt={img.tags}
              style={{ width: "390px", height: "270px",}}
            />
          </SliderItem>
        ))}
      </SliderStl>
  </>);
}
