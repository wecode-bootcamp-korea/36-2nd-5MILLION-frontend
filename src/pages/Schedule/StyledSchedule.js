import styled from 'styled-components';

export const BigTitle = styled.div`
  padding-top: 5.0174vw;
  padding-bottom: 2.9268vw;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: ${({ theme }) => theme.style.bigFont};
  font-weight: 900;
  color: white;
  border-bottom: 1px white solid;
  letter-spacing: 3rem;
`;

export const SmallTitle = styled.div`
  font-size: 1.9rem;
  font-weight: 400;
  margin-top: 2rem;
  letter-spacing: 1rem;
`;

export const SearchFilterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 105px;
  padding: 34px 50px;
  border-bottom: 0.5px solid rgb(255, 255, 255);
`;

export const SearchFilter = styled.div``;

export const Box = styled.div`
  display: inline-block;
  width: 185px;
  font-size: 18px;
  border-bottom: 0.5px solid white;
  background-color: transparent;
  padding-bottom: 10px;
  margin-right: 36px;
  position: relative;
  cursor: pointer;
`;

export const BoxContainer = styled.span`
  color: white;
`;

export const Button = styled.button`
  border: 0px;
  font-size: 10px;
  font-weight: 600;
  line-height: 13px;
  background-color: black;
  color: white;
  opacity: 0.5;
`;

export const CheckIcon = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

export const ScrollIcon = styled.div`
  position: absolute;
  font-size: 4rem;
  right: 12rem;
  bottom: 3rem;
`;

// Calender style

export const MonthContainer = styled.div`
  position: relative;
  width: 100%;
  height: 105px;
  padding: 34px 50px;
  border-bottom: 0.5px solid rgb(255, 255, 255);
  color: white;
  background-color: black;
  font-size: 2.6rem;
  font-weight: 800;
`;

export const DateContainer = styled.div`
  width: 1340px;
  margin: 0 auto;
  overflow-x: scroll;
`;

export const DateSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

//Date

// export const DateUl = styled.ul``;

export const DateLi = styled.li`
  background-color: black;
  width: 100%;
`;

export const DateNum = styled.div``;

export const DateTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  height: 78px;
  padding: 25px 23px;
  border: 1px solid rgb(255, 255, 255);
  font-family: GrotSemiBold;
  font-size: 26px;
  line-height: 28px;
  color: white;
`;
export const ClassList = styled.div`
  padding: 19px 23px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: rgb(255, 255, 255);
`;

export const Location = styled.div`
  font-size: 15px;
  line-height: 28px;
  letter-spacing: -0.23px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const BookBtn = styled.div`
  width: 10rem;
  height: 2.5rem;
  padding: 5px 5px;
  border: 0px;
  border-radius: 1.4rem;
  font-weight: 900;
  font-size: 14px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Time = styled.div`
  vertical-align: top;
  height: 2.8rem;
  font-size: 1.5rem;
  line-height: 28px;
  letter-spacing: -0.23px;
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
    background-color: ${({ message }) =>
      message === 'hard' ? '#c21e01' : ' rgb(148, 194, 227)'};
  }
`;
export const Ticket = styled.span`
  font-size: 15px;
  padding-right: 3rem;
`;
