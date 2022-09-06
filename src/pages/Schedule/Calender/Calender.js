import React, { useState } from 'react';
import styled from 'styled-components';
import Day from './Date/Day';
import Slider from 'react-slick';
import Modal from '../../../components/Modal/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from '../StyledSchedule';

const Calender = ({ classList }) => {
  const { Mon, Tue, Wed, Thu, Fri, Sat, Sun } = classList;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const WEEK_CLASSES = [
    { id: 1, name: 'Mon', classList: Mon },
    { id: 2, name: 'Tue', classList: Tue },
    { id: 3, name: 'Wed', classList: Wed },
    { id: 4, name: 'Thu', classList: Thu },
    { id: 5, name: 'Fri', classList: Fri },
    { id: 6, name: 'Sat', classList: Sat },
    { id: 7, name: 'Sun', classList: Sun },
  ];

  return (
    <Container>
      <S.MonthContainer>September 2022</S.MonthContainer>
      <S.DateContainer>
        <S.DateSubContainer>
          <Carousel {...settings}>
            {WEEK_CLASSES.map(el => {
              return (
                <Day
                  key={el.id}
                  name={el.name}
                  classList={el.classList}
                  toggleModal={toggleModal}
                  showModal={showModal}
                />
              );
            })}
          </Carousel>
          {showModal && (
            <Modal toggleModal={toggleModal} content="예약하시겠습니까?" />
          )}
        </S.DateSubContainer>
      </S.DateContainer>
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  width: 100%;
`;

export const Carousel = styled(Slider)`
  .slick-next {
    top: 2rem;
    right: 12rem;
    font-size: 10rem;

    &::before {
      font-size: 5rem;
      z-index: 10000;
    }
  }
  .slick-prev {
    top: 2rem;
    left: 5rem;
    z-index: 1;

    &::before {
      font-size: 5rem;
    }
  }
  .slick-track {
    width: 100%;
  }
`;
