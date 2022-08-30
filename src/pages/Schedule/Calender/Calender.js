import React from 'react';
import styled from 'styled-components';
import * as S from '../StyledSchedule';
import Day from './Date/Day';

const Calender = ({ classList }) => {
  return (
    <Container>
      <S.MonthContainer>September 2022</S.MonthContainer>
      <S.DateContainer>
        <S.DateSubContainer>
          <Day name=" Mon" classList={classList.Monday} />
          <Day name=" Tue" classList={classList.Tuesday} />
          <Day name=" Wed" classList={classList.Wednesday} />
          <Day name=" Thur" classList={classList.Thursday} />
          <Day name=" Friday" classList={classList.Friday} />
          <Day name=" Saturday" classList={classList.Saturday} />
          <Day name=" Sunday" classList={classList.Sunday} />
        </S.DateSubContainer>
      </S.DateContainer>
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  width: 100%;
`;
