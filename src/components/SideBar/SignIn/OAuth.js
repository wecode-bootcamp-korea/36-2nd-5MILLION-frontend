export const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
