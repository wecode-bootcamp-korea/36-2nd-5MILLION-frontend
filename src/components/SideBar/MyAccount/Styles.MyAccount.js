import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
`;

export const Account = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-around')}
  width: 110%;
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
  margin-top: 4rem;
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
