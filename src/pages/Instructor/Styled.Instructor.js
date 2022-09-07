import styled from 'styled-components';
import variables from '../../styles/variable';

const COLOR = ['skyblue', 'red', 'yellow'];
export const InstructorTitle = styled.div`
  font-size: ${({ theme }) => theme.style.bigFont};
  font-weight: 800;
  text-align: center;
`;

export const SubTitle = styled.div`
  margin: 5rem 0;
  font-size: ${({ theme }) => theme.style.smallFont};
  font-weight: 800;
  text-align: center;
`;

export const InstructorFlex = styled.div`
  ${variables.flex('row', 'flex-start', 'stretch')}
  flex-wrap: wrap;
  width: 100%;
  /* 병합시 디자인에 따라 수정 */
  margin: 0 auto;
`;

export const Square = styled.div`
  position: relative;
  width: 55rem;
  height: 55rem;
  border: 1px solid white;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: ${({ color }) => COLOR[color % 3]};
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  height: 40rem;
  margin: 7.4rem;
  border-radius: 50%;
  z-index: 100;
  object-fit: cover;
  &:hover {
    transition-timing-function: 0.6s;
    overflow: hidden;
    top: -6rem;
    left: -5rem;
    height: 50rem;
  }
`;

export const TestBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  width: 100%;
  height: 20%;
  z-index: index 1;
`;

export const TestLine = styled.div`
  width: 16.4rem;
  padding-top: 3rem;
  border-top: 1px solid white;
  font-size: ${({ theme }) => theme.style.middleFont};
  text-align: center;
`;

export const TestNoLine = styled.p`
  width: 22.2rem;
`;
