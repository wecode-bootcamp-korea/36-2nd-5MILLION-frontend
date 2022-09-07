import React, { useState } from 'react';
import styled from 'styled-components';
import Day from './Date/Day';
import Slider from 'react-slick';
import Modal from '../../../components/Modal/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { API } from '../../../config';
import * as S from '../StyledSchedule';

const Calender = ({ classList }) => {
  const { Mon, Tue, Wed, Thu, Fri, Sat, Sun } = classList;
  const [showModal, setShowModal] = useState(false);
  const [storeId, setStoreId] = useState('');
  const toggleModal = e => {
    setShowModal(prev => !prev);
    setStoreId(e.target.id);
  };

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const WEEK_CLASSES = [
    { id: 1, name: 'Mon', classList: Mon, day: 5 },
    { id: 2, name: 'Tue', classList: Tue, day: 6 },
    { id: 3, name: 'Wed', classList: Wed, day: 7 },
    { id: 4, name: 'Thu', classList: Thu, day: 8 },
    { id: 5, name: 'Fri', classList: Fri, day: 9 },
    { id: 6, name: 'Sat', classList: Sat, day: 10 },
    { id: 7, name: 'Sun', classList: Sun, day: 11 },
  ];

  const postBookingData = () => {
    fetch(`${API.MAIN}/class/${storeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(data => {
      if (data.status === 400) {
        alert('you have been already book.');
      }
    });
  };
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
                  day={el.day}
                  classList={el.classList}
                  toggleModal={toggleModal}
                  showModal={showModal}
                />
              );
            })}
          </Carousel>
          {showModal && (
            <Modal
              toggleModal={toggleModal}
              content="예약하시겠습니까?"
              postBookingData={postBookingData}
            />
          )}
        </S.DateSubContainer>
      </S.DateContainer>
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  width: 100%;
  padding-bottom: 5rem;
  position: relative;
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
