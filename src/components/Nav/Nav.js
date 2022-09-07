import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  return (
    <Container>
      <Logo onClick={goToMain}>5M</Logo>
      <SubLogo>STUDIO</SubLogo>
      <NavRight>
        <Link to="/instructor">
          <Li>INSTRUCTORS</Li>
        </Link>
        <Link to="/schedule">
          <Li>SCHEDULE</Li>
        </Link>
        <Button>myAccount</Button>
      </NavRight>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 100vw;
  height: 7vh;
  color: white;
  ${props => props.theme.variables.flex('row', 'space-between')};
`;
const Logo = styled.h1`
  font-size: ${props => props.theme.style.middleFont};
  font-weight: 800;
  padding-left: 3rem;
  position: fixed;
  left: 3rem;
  z-index: 10000;
  cursor: pointer;
`;

const SubLogo = styled.span`
  font-size: ${props => props.theme.style.smallFont};
  font-weight: 800;
  vertical-align: middle;
  padding-left: 13rem;
  z-index: 20;
`;

const NavRight = styled.ul`
  ${props => props.theme.variables.flex('row', 'right')};
  gap: 5rem;
  padding-right: 30rem;
  font-size: ${props => props.theme.style.smallFont};
  font-weight: 800;
  position: relative;
  z-index: 20;
`;

const Li = styled.li`
  padding-right: 5rem;
  cursor: pointer;
`;

const Button = styled.button`
  padding-left: 5rem;
  border: 0px;
  line-height: 24px;
  background-color: inherit;
  color: rgb(255, 255, 255);
  font-size: 10px;
  font-weight: 800;
  cursor: pointer;
`;
