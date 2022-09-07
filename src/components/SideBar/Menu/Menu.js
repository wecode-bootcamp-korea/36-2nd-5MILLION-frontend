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
      <li>
        <Link to="/instructor">INSTRUCTORS</Link>
      </li>
      <li>
        <Link to="/schedule">SCHEDULE</Link>
      </li>
      <li>
        <Link to="/">ABOUT US</Link>
      </li>
    </S.Menu>
  );
};

export default Menu;
