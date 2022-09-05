import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 0.5px solid white;
  font-size: 2.2rem;

  & > div {
    width: 20%;
    text-align: center;
    padding: 3rem 0;
  }
`;

export const BookNow = styled.button`
  width: 10rem;
  height: 3.6rem;
  margin: 3rem 0;
  border: 0;
  border-radius: 2rem;
  background-color: white;
  font-size: 1.4rem;
  font-weight: 800;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
`;
