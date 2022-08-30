import React, { useState, useEffect, useRef } from 'react';
import * as S from './Styles.SideBar';
import Menu from './Menu/Menu';
import SignIn from './SignIn/SignIn';
import KakaoRedirectHandler from './SignIn/KakaoRedirectHandler';
import MyAccount from './MyAccount/MyAccount';

const SideBar = () => {
  const userMenu = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [showMode, setShowMode] = useState('menu');
  const checkedLogin = localStorage.getItem('token') ? 'MY ACCOUNT' : 'LOGIN';
  const [ticket, setTicket] = useState();

  const toggleMenu = e => {
    e.stopPropagation();
    setOpen(prev => !prev);
    setShowMode('menu');
  };

  const HandleModalClose = ({ target }) => {
    if (isOpen && !userMenu.current.contains(target)) {
      setOpen(false);
      setShowMode('menu');
    }
  };

  const goToAccount = () => {
    KakaoRedirectHandler();
  };

  const sideMenu = {
    menu: (
      <Menu
        setShowMode={setShowMode}
        showMode={showMode}
        checkedLogin={checkedLogin}
      />
    ),
    signin: <SignIn goToAccount={goToAccount} />,
    myaccount: <MyAccount setShowMode={setShowMode} ticket={ticket} />,
  };

  useEffect(() => {
    fetch('http://10.58.5.244:3000/account/class', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => res.json())
      .then(data => setTicket(data.bookClasses));
  }, []);

  useEffect(() => {
    window.addEventListener('click', e => HandleModalClose(e));
    return window.removeEventListener('click', e => HandleModalClose(e));
  });

  return (
    <S.SideBar>
      <S.FixedMenuBar>
        <S.MenuBarWrapper onClick={toggleMenu}>
          <S.SideBarMenuIcon />
        </S.MenuBarWrapper>
      </S.FixedMenuBar>
      <S.ShowUpMenu isOpen={isOpen} ref={userMenu}>
        <S.ShowUpMenuHeader />
        <S.ShowUpMenuBody>{sideMenu[showMode]}</S.ShowUpMenuBody>
        <S.ShowUpMenuFooter />
      </S.ShowUpMenu>
    </S.SideBar>
  );
};

export default SideBar;
