import React from 'react';
import * as S from './Styles.MyAccount';
import * as A from '../../../pages/Schedule/StyledSchedule';

const MyAccount = ({ ticket, setShowMode }) => {
  return (
    <>
      <S.Account>
        <S.AccountText size="4.5rem">MY ACCOUNT</S.AccountText>
        <S.AccountText
          size="3rem"
          color="gray"
          onClick={() => setShowMode('menu')}
        >
          LOGOUT
        </S.AccountText>
      </S.Account>
      {ticket?.length > 0 &&
        ticket?.map(
          (
            { profileImage, instructor, startTime, endTime, classType },
            idx
          ) => (
            <S.Container key={idx}>
              <S.BooklistWrapper>
                <A.ClassList>
                  <A.Location>예정된 수업</A.Location>
                  <A.Name>
                    <S.TicketImg src={profileImage} />
                    <A.Btn>{instructor}</A.Btn>
                    <A.Location>
                      {startTime} ~ {endTime}
                    </A.Location>
                  </A.Name>
                  <A.Level>{classType}</A.Level>
                </A.ClassList>
              </S.BooklistWrapper>
            </S.Container>
          )
        )}
    </>
  );
};

export default MyAccount;
