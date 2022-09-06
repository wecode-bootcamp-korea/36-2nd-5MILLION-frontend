import React from 'react';
import * as S from '../../../StyledSchedule';

const Class = ({ classList, toggleModal }) => {
  const spots = classList.quantity - Number(classList.bookedCount);
  const deadline = spots === 0 ? false : true;

  return (
    <S.ClassList>
      <S.Location>
        seoul, korea
        <S.BookBtn
          isAvailable={deadline}
          onClick={toggleModal}
          disabled={!deadline}
        >
          BOOK NOW
        </S.BookBtn>
      </S.Location>
      <S.Time>
        {classList.startTime} ~ {classList.endTime}
      </S.Time>
      <S.Name>
        <S.Btn>{classList.instructor}</S.Btn>
      </S.Name>
      <S.Level message={classList.classType}>{classList.classType}</S.Level>
    </S.ClassList>
  );
};

export default Class;
