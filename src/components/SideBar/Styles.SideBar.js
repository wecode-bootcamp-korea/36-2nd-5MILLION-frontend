import styled from 'styled-components';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export const SideBar = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const FixedMenuBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 8.5rem;
  height: 100vh;
  border-left: 0.1rem solid white;
  background-color: black;
  z-index: 50;
`;

export const MenuBarWrapper = styled.div`
  color: white;
  height: 4.5rem;
  width: 4.5rem;
  margin: 2rem auto 1.5rem;
  cursor: pointer;
  position: relative;
`;

export const SideBarMenuIcon = styled(HiOutlineMenuAlt4)`
  font-size: 4rem;
  margin-left: 0.2rem;
  color: white;
  position: absolute;
`;

export const ShowUpMenu = styled.div`
  right: ${props => (props.isOpen ? '6.5rem' : '-71rem')};
  width: 71rem;
  position: fixed;
  top: 0px;
  height: 100%;
  z-index: 30;
  background-color: black;
  transition: all 0.7s;
`;

export const ShowUpMenuHeader = styled.div`
  height: 8rem;
  border-bottom: 0.1rem solid white;
`;

export const ShowUpMenuBody = styled.div`
  padding: 4rem;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ShowUpMenuFooter = styled.div`
  position: absolute;
  height: 8rem;
  bottom: 0rem;
  width: 100%;
  border-top: 0.1rem solid white;
  background-color: black;
`;
