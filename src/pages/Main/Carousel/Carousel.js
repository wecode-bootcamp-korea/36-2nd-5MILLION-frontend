import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import * as S from './Styled.Carousel';
import { API } from '../../../config';

const Carousel = () => {
  const [image, setImage] = useState();

  const navigate = useNavigate();

  const goToDetail = e => {
    const id = e.target.id;
    navigate(`/instructorDetail/${id}`);
  };

  useEffect(() => {
    const getIamge = async () => {
      const get = await axios(`${API.MAIN}/instructors`);
      setImage(get.data.instructors);
    };
    getIamge();
  }, []);

  // Carousel 옵션
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '5rem',
    focusOnSelect: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <S.CarouselDiv>
      <S.Carousel {...settings}>
        {image?.map(({ profile_image_url, id }) => (
          <div key={id}>
            <S.Img src={profile_image_url} id={id} onClick={goToDetail} />
          </div>
        ))}
      </S.Carousel>
    </S.CarouselDiv>
  );
};

export default Carousel;
