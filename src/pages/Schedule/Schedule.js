import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calender from './Calender/Calender';
import * as S from './StyledSchedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Schedule = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    axios('./data/data.json').then(res => setClassList(res.data[0]));
  }, []);

  return (
    <Container>
      <S.BigTitle>
        Schedule<S.SmallTitle>스케줄 - Seoul, Korea</S.SmallTitle>
      </S.BigTitle>
      <S.SearchFilterContainer>
        <S.SearchFilter>
          <S.Box>
            <S.BoxContainer>Captin Lee</S.BoxContainer>
            <S.CheckIcon>
              <StyledFontAwesomeIcon icon={faArrowDown} />
            </S.CheckIcon>
          </S.Box>
          <S.Box>
            <S.BoxContainer>Easy</S.BoxContainer>
            <S.CheckIcon>
              <StyledFontAwesomeIcon icon={faArrowDown} />
            </S.CheckIcon>
          </S.Box>
          <S.Button>CLEAR ALL</S.Button>
          <S.ScrollIcon>
            <AwesomeIcon icon={faArrowLeft} />
            <AwesomeIcon icon={faArrowRight} />
          </S.ScrollIcon>
        </S.SearchFilter>
      </S.SearchFilterContainer>
      <Calender classList={classList} />
    </Container>
  );
};
export default Schedule;

const Container = styled.div`
  width: 100vw;
  height: inherit;
  background-color: black;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
  margin-left: 1rem;
`;

const AwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 5rem;
  cursor: pointer;
  margin-left: 3rem;
`;
