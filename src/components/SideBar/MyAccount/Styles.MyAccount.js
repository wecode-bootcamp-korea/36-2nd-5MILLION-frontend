import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
`;

export const Account = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-around')}
  width: 98%;
  border-bottom: 0.1rem solid white;
`;

export const AccountText = styled.p`
  color: white;
  margin-bottom: 2rem;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  cursor: pointer;
`;

export const BooklistWrapper = styled.div`
  position: relative;
  width: 50%;
  margin-top: 2rem;
`;

export const BooklistName = styled.div`
  background-color: lightblue;
  color: black;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const BooklistDetail = styled.div`
  background-color: white;
  color: black;
  font-size: 3rem;
  height: 13rem;
`;

export const TicketImg = styled.img`
  position: absolute;
  top: 22px;
  right: 30px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

export const ClassList = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: rgb(255, 255, 255);
  width: 300px;
  height: 174px;
  margin-left: 2rem;
  padding: 2rem;
  backdrop-filter: contrast(0.7);
`;

export const Location = styled.div`
  font-size: 15px;
  line-height: 28px;
  letter-spacing: -0.23px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Name = styled.div`
  font-size: 0px;
  width: 100%;
  margin-bottom: 29px;
`;

export const Btn = styled.div`
  padding-top: 0.5rem;
  width: 100px;
  font-size: 2.5rem;

  letter-spacing: -0.77px;
  pointer-events: none;
`;

export const Level = styled.span`
  padding-left: 21px;
  font-size: 15px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 3px;
    left: 0px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ message }) => {
      if (message === 'hard') {
        return '#c21e01';
      } else if (message === 'normal') {
        return 'rgb(57, 197, 60)';
      } else {
        return 'rgb(148, 194, 227)';
      }
    }};
  }
`;
