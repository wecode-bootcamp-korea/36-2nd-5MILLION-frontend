import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ScheduleBox from './ScheduleBox/ScheduleBox';
import Modal from '../../components/Modal/Modal';
import axios from 'axios';
import * as S from './Styled.InstructorDetail';
import { API } from '../../config';

const InstructorDetail = () => {
  const [instructor, setInstructor] = useState([]);
  const [showSchedule, setShowSkedule] = useState({});
  const [detailToggle, setDetailToggle] = useState(false);
  const { id } = useParams();
  const [booking, setBooking] = useState();

  const toggleModal = () => setDetailToggle(prev => !prev);

  const showScheduleList = [
    showSchedule.Mon,
    showSchedule.Tue,
    showSchedule.Wed,
    showSchedule.Thu,
    showSchedule.Fri,
    showSchedule.Sat,
    showSchedule.Sun,
  ];

  useEffect(() => {
    const getInstructor = async () => {
      const gets = await axios(`${API.MAIN}/instructors/${id}`);
      setInstructor(gets.data.instructor[0]);
    };
    getInstructor();
  }, [id]);

  useEffect(() => {
    const getschedule = async () => {
      const gets = await axios(`${API.SCHEDULE}?instructor=${instructor.name}`);
      setShowSkedule(gets.data);
    };
    getschedule();
  }, [instructor.name]);

  const navigate = useNavigate();

  const goToSchedule = () => {
    navigate('/schedule');
  };

  const postBookingData = () => {
    if (localStorage.getItem('token')) {
      fetch(`${API.MAIN}/class/${booking}`, {
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
      setDetailToggle(false);
    } else {
      alert('로그인 해주세요!');
    }
  };

  return (
    instructor && (
      <>
        <S.TitleBox>
          <S.EngTitle>{instructor.name_en}</S.EngTitle>
          <S.KoreaTitle>{instructor.name}</S.KoreaTitle>
          <S.Ul>
            {UL_DATA.map((liData, idx) => (
              <li key={idx}>{liData}</li>
            ))}
          </S.Ul>
        </S.TitleBox>
        <S.ClassTitle fontSize="4.5rem">
          {`${instructor.name_en}'S UPCOMING CLASSES`}
        </S.ClassTitle>
        <S.ClassTitle fontSize="3rem">예정된 수업</S.ClassTitle>
        <S.ScheduleBox>
          {showScheduleList?.map((oneSchedule, idx) => (
            <ScheduleBox
              key={idx}
              setDetailToggle={setDetailToggle}
              oneSchedule={oneSchedule}
              setBooking={setBooking}
            />
          ))}
        </S.ScheduleBox>
        {detailToggle && (
          <Modal
            postBookingData={postBookingData}
            content="예약하시겠습니까?"
            toggleModal={toggleModal}
          />
        )}
        <S.Button
          onClick={goToSchedule}
          toggleModal={setDetailToggle}
          postBookingData={postBookingData}
        >
          Go To Schedule
        </S.Button>
      </>
    )
  );
};

export default InstructorDetail;

const UL_DATA = ['ABOUT', 'UPCOMING CLASSES', 'VIDEOS', 'STUDENT FEEDBACK'];
