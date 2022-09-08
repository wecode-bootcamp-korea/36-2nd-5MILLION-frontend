import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import Calender from './Calender/Calender';
import * as S from './StyledSchedule';
import { API } from '../../config';

const Schedule = () => {
  window.scrollTo(0, 0);
  const [classList, setClassList] = useState([]);
  const [filter, setFilter] = useState({
    Name: '',
    Level: '',
  });

  const handleFilter = (e, type) => {
    setFilter({ ...filter, [type]: e.target.innerText });
  };

  useEffect(() => {
    const testData = async () => {
      const res = await axios.get(
        `${API.SCHEDULE}?instructor=${filter.Name}&classType=${filter.Level}`
      );
      setClassList(res.data);
    };
    testData();
  }, [filter]);

  return (
    <Container>
      <S.BigTitle>
        SCHEDULE<S.SmallTitle>스케줄 - Seoul, Korea</S.SmallTitle>
      </S.BigTitle>
      <S.SearchFilterContainer>
        <S.SearchFilter>
          <Dropdown
            handleFilter={handleFilter}
            filter={filter}
            {...TYPE}
            type="Name"
          />
          <Dropdown
            handleFilter={handleFilter}
            filter={filter}
            {...TYPE}
            type="Level"
          />
          <S.Button
            onClick={() =>
              setFilter({
                Name: '',
                Level: '',
              })
            }
          >
            CLEAR ALL
          </S.Button>
        </S.SearchFilter>
      </S.SearchFilterContainer>
      <Calender classList={classList} />
    </Container>
  );
};
export default Schedule;

const Container = styled.div`
  width: 100vw;
  height: auto;

  background-color: black;
`;

const TYPE = {
  name: [
    '김준호',
    '이지현',
    '이주영',
    '송경용',
    '이솔',
    '유병민',
    '안도현',
    '김다현',
    '문준기',
  ],
  level: ['easy', 'normal', 'hard'],
};
