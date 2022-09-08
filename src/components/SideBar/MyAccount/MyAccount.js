import React from 'react';
import * as S from './Styles.MyAccount';

const MyAccount = ({ ticket, setShowMode, DeletedTicket }) => {
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
            { profileImage, instructor, startTime, endTime, classType, id },
            idx
          ) => (
            <S.Container key={idx}>
              <S.BooklistWrapper>
                <S.ClassList>
                  <S.Location>예정된 수업</S.Location>
                  {/* 삭제 버튼 확인 */}
                  {/* <S.DelBtn id={id} onClick={DeletedTicket}>
                    취소
                  </S.DelBtn> */}
                  <S.Name>
                    <S.TicketImg src={profileImage} />
                    <S.Btn>{instructor}</S.Btn>
                    <S.Location>
                      {startTime} ~ {endTime}
                    </S.Location>
                  </S.Name>
                  <S.Level>{classType}</S.Level>
                </S.ClassList>
              </S.BooklistWrapper>
            </S.Container>
          )
        )}
    </>
  );
};

export default MyAccount;
