import styled from 'styled-components';

export const TitleBox = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
  background-color: #1f1f1f;
`;

export const EngTitle = styled.div`
  padding-top: 30rem;
  font-size: ${({ theme }) => theme.style.bigFont};
  text-align: center;
  font-weight: 700;
  line-height: 8vw;
`;

export const KoreaTitle = styled.div`
  font-size: ${({ theme }) => theme.style.middleFont};
  padding-top: 10rem;
  padding-bottom: 10rem;
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  padding-bottom: 5rem;
  font-size: ${({ theme }) => theme.style.smallFont};
  margin: 0 15rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ClassTitle = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  padding-top: 5rem;
  font-weight: 800;
`;

export const ScheduleBox = styled.div`
  width: 100%;
  margin-top: 10rem;
  border-top: 2px solid white;
`;

export const Button = styled.button`
  width: 100%;
  padding: 5rem 0;
  font-size: ${({ theme }) => theme.style.middleFont};
  background-color: rgb(255, 192, 3);
  border: none;
  cursor: pointer;
`;
