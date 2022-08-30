import styled from 'styled-components';

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const FooterDiv = styled.div`
  width: 48.5%;
  padding: 7rem;
  border: 0.5px solid white;
  text-align: center;
`;

export const FooterTitle = styled.div`
  padding-top: 1rem;
  font-size: ${({ size }) => size};
  font-weight: 600;
`;

export const FooterUnder = styled.div`
  width: 97%;
  padding: 10rem;
  color: black;
  background-color: white;
  text-align: center;
`;

export const FooterUderTitle = styled.div`
  padding-top: 1rem;
  font-size: ${({ size }) => size};
  font-weight: 1000;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  color: black;
  background-color: white;
  border-top: 0.5px solid black;
  font-size: 2rem;
  font-weight: 600;
`;
