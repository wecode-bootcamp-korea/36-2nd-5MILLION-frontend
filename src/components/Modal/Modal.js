import React, { useEffect } from 'react';
import styled from 'styled-components';

const Modal = ({ toggleModal, content }) => {
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <Container>
      <ModalContainer>
        <Content>{content}</Content>
        <Box>
          <ModalBtnBox>
            <ModalBtn onClick={toggleModal}>취소</ModalBtn>
          </ModalBtnBox>
          <ModalBtnBox>
            <ModalBtn onClick={toggleModal}>확인</ModalBtn>
          </ModalBtnBox>
        </Box>
      </ModalContainer>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  ${({ theme }) => theme.variables.fixedCenter};
  width: 100%;
  height: 100%;
  backdrop-filter: contrast(0.7);
  z-index: 999;
`;

const ModalContainer = styled.div`
  ${({ theme }) => theme.variables.absoluteCenter};
  ${({ theme }) => theme.variables.flex('column', 'center', 'space-around')};
  text-align: center;
  padding: 50px 80px;
  border: 0.1rem solid #bdbdbd;
  border-radius: 2rem;
  background-color: #d9d1d1;
  box-shadow: 0.2rem 0.2rem 0.2rem 0 #2c2c2c;
`;
const Content = styled.p`
  font-size: 3rem;
  margin-bottom: 8rem;
  color: black;
`;
const Box = styled.div`
  display: flex;
`;

const ModalBtn = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'space-around', 'center')};
  color: white;
`;

const ModalBtnBox = styled.button`
  display: block;
  width: 10rem;
  text-align: center;
  overflow: hidden;
  height: 5rem;
  border-radius: 6px;
  font-size: 1.7rem;
  margin: 0 5rem;
  background-color: black;

  cursor: pointer;
  &:hover {
    transition-duration: 0.5s;
    box-shadow: 0.2rem 0.2rem 0.2rem 0 #2c2c2c;
  }
`;
