export const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
export const CLIENT_ID = '3adaf9cb84aec7bcf29d2a93e24f5f66';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
