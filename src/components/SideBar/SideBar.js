import React, { useState, useEffect, useRef } from 'react';
import Menu from './Menu/Menu';
import SignIn from './SignIn/SignIn';
import KakaoRedirectHandler from './SignIn/KakaoRedirectHandler';
import MyAccount from './MyAccount/MyAccount';
import { API } from '../../config';
import * as S from './Styles.SideBar';

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

  // 삭제 구현 확인
  const DeletedTicket = e => {
    fetch(`http://127.0.0.1:3031/account/class/${e.target.id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.status === 200) {
        alert('예약이 취소되었습니다.');
      }
    });
  };

  const sideMenu = {
    menu: (
      <Menu
        setOpen={setOpen}
        setShowMode={setShowMode}
        showMode={showMode}
        checkedLogin={checkedLogin}
      />
    ),
    signin: <SignIn goToAccount={goToAccount} />,
    myaccount: (
      <MyAccount
        DeletedTicket={DeletedTicket}
        setShowMode={setShowMode}
        ticket={ticket}
      />
    ),
  };

  useEffect(() => {
    fetch(`${API.MAIN}/account/class`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    })
      .then(res => res.json())
      .then(data => setTicket(data.bookedClasses));
  }, [isOpen]);

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
