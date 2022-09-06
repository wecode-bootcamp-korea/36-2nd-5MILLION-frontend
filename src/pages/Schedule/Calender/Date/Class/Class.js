import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import * as S from '../../../StyledSchedule';

const Class = ({ classList, toggleModal, showModal }) => {
  return (
    <S.ClassList>
      <S.Location>
        seoul, korea
        <S.BookBtn
          isAvailable={classList.deadline}
          onClick={toggleModal}
          disabled={!classList.deadline}
        >
          BOOK NOW
        </S.BookBtn>
      </S.Location>
      <S.Time>
        {classList.startTime.slice(10)}-{classList.endTime.slice(10)}
      </S.Time>
      <S.Name>
        <S.Btn>{classList.instructor}</S.Btn>
      </S.Name>
      <S.Level message={classList.classType}>{classList.classType}</S.Level>
    </S.ClassList>
  );
};

export default Class;
