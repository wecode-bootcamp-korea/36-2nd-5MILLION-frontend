import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 0.5px solid white;
  font-size: 1.6rem;

  & > div {
    width: 17%;
    text-align: center;
    padding: 3rem 0;
  }
`;

export const ScheduleContents = styled.div`
  width: 10rem;
`;

export const BookNow = styled.button`
  width: 10rem;
  height: 2.8rem;
  margin: 3rem 0;
  border: 0;
  border-radius: 1.7rem;
  background-color: white;
  font-weight: 800;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
`;
