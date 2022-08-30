import React from 'react';
import styled from 'styled-components';
import * as S from '../../StyledSchedule';
import Class from './Class/Class';

const Day = ({ name, classList }) => {
  return (
    <Container>
      <S.DateLi>
        <S.DateTitle>
          <S.DateNum>5</S.DateNum>
          {name}
        </S.DateTitle>
        {classList?.map(classList => (
          <Class key={classList.id} classList={classList} />
        ))}
      </S.DateLi>
    </Container>
  );
};

export default Day;

const Container = styled.ul`
  width: 300px;
`;
