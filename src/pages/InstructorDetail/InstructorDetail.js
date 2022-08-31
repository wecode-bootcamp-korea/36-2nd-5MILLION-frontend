import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ScheduleBox from './ScheduleBox/ScheduleBox';
import axios from 'axios';
import * as S from './Styled.InstructorDetail';

const InstructorDetail = () => {
  const [instructor, setInstructor] = useState();
  const [showSchedule, setShowSkedule] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getInstructor = async () => {
      const gets = await axios(`../data/detail/detail${id}.json`);
      setInstructor(gets.data);
    };

    const getschedule = async () => {
      const gets = await axios('../data/detail/schedule/schedule.json');
      setShowSkedule(gets.data);
    };
    getInstructor();
    getschedule();
  }, [id]);

  const navigate = useNavigate();

  const goToSchedule = () => {
    navigate('/schedule');
  };

  return (
    instructor && (
      <>
        <S.TitleBox>
          <S.EngTitle>{instructor.englishName}</S.EngTitle>
          <S.KoreaTitle>{instructor.koreanName}</S.KoreaTitle>
          <S.Ul>
            {UL_DATA.map((liData, idx) => (
              <li key={idx}>{liData}</li>
            ))}
          </S.Ul>
        </S.TitleBox>
        <S.ClassTitle fontSize="4.5rem">
          {`${instructor.englishName}'S UPCOMING CLASSES`}
        </S.ClassTitle>
        <S.ClassTitle fontSize="3rem">예정된 수업</S.ClassTitle>
        <S.ScheduleBox>
          {showSchedule?.map((oneSchedule, idx) => (
            <ScheduleBox key={idx} oneSchedule={oneSchedule} />
          ))}
        </S.ScheduleBox>
        <S.Button onClick={goToSchedule}>Go To Schedule</S.Button>
      </>
    )
  );
};

export default InstructorDetail;

const UL_DATA = ['ABOUT', 'UPCOMING CLASSES', 'VIDEOS', 'STUDENT FEEDBACK'];
