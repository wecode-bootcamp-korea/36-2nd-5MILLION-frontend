import { Link } from 'react-router-dom';
import * as S from './Styles.Menu';

const Menu = ({ setShowMode, checkedLogin }) => {
  const goToSignIn = e => {
    e.stopPropagation();
    setShowMode('signin');
  };

  const goToMyAccount = e => {
    e.stopPropagation();
    setShowMode('myaccount');
  };

  const handleAuth = checkedLogin === 'LOGIN' ? goToSignIn : goToMyAccount;

  return (
    <S.Menu>
      <li>
        <S.Login onClick={handleAuth}>{checkedLogin}</S.Login>
      </li>
      {MENU_LIST.map(({ link, title }, idx) => {
        return (
          <li key={idx}>
            <Link to={link}>{title}</Link>
          </li>
        );
      })}
    </S.Menu>
  );
};

export default Menu;

const MENU_LIST = [
  { link: '/instructor', title: 'INSTRUCTORS' },
  { link: '/schedule', title: 'SCHEDULE' },
  { link: '/', title: 'ABOUT US' },
];
