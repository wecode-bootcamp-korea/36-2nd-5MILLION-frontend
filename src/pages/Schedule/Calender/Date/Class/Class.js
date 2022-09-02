import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import * as S from '../../../StyledSchedule';

const Class = ({ classList }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <S.ClassList>
      <S.Location>
        seoul, korea
        <S.BookBtn
          isAvailable={classList.deadline}
          onClick={toggleModal}
          disabled={!classList.deadline}
        >
          {showModal && (
            <Modal toggleModal={toggleModal} content="예약하시겠습니까?" />
          )}
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
