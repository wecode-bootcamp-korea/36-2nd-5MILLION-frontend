import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Img = styled.img`
  width: 30rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const CarouselDiv = styled.div`
  width: 100%;
  margin: 10rem auto 5rem;
`;

export const Carousel = styled(Slider)`
  .slick-next:before {
    display: none;
  }

  .slick-prev:before {
    display: none;
  }
  .slick-track {
    width: 100%;
  }
`;
