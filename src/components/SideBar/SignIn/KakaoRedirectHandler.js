import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { REDIRECT_URI, CLIENT_ID } from './OAuth';

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const requestURL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`;
    const requestHeaders = {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    };

    fetch(requestURL, requestHeaders)
      .then(response => response.json())
      .then(data => {
        const TOKEN = data.access_token;
        fetch('http://10.58.5.244:3000/auth/signIn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            if (!localStorage.getItem('token')) {
              alert('환영합니다.');
              localStorage.setItem('token', JSON.stringify(data.accessToken));
            }
            navigate('/');
          });
      });
  });

  return <div>로그인 중입니다.</div>;
};

export default KakaoRedirectHandler;
