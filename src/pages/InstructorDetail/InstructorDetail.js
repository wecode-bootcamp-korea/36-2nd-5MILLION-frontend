import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ScheduleBox from './ScheduleBox/ScheduleBox';
import axios from 'axios';
import * as S from './Styled.InstructorDetail';

const InstructorDetail = () => {
  const [instructor, setInstructor] = useState([]);
  const [showSchedule, setShowSkedule] = useState({});
  const { id } = useParams();

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
      const gets = await axios(`http://10.58.4.122:3001/instructors/${id}`);
      setInstructor(gets.data.instructor[0]);
    };
    getInstructor();
  }, [id]);

  useEffect(() => {
    const getschedule = async () => {
      const gets = await axios(
        `http://10.58.5.244:3001/schedule?instructor=${instructor.name}`
      );
      setShowSkedule(gets.data);
    };
    getschedule();
  }, [instructor.name]);

  const navigate = useNavigate();

  const goToSchedule = () => {
    navigate('/schedule');
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
