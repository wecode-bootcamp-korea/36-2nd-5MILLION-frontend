import React from 'react';
import * as S from '../../../StyledSchedule';

const Class = ({ name, classList }) => {
  return (
    <S.ClassList>
      <S.Location>
        seoul, korea
        <S.BookBtn>BOOK NOW</S.BookBtn>
      </S.Location>
      <S.Time>
        {classList.startTime.slice(10)}-{classList.endTime.slice(10)}
      </S.Time>
      <S.Name>
        <S.Btn>{classList.instructor}</S.Btn>
      </S.Name>
      <S.Ticket>Tickets Available</S.Ticket>
      <S.Level message={classList.classType}>{classList.classType}</S.Level>
    </S.ClassList>
  );
};

export default Class;
