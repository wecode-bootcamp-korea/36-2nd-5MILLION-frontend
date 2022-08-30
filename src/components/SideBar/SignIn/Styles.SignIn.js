import styled from 'styled-components';

export const Auth = styled.div`
  display: flex;
`;

export const LogInText = styled.p`
  color: white;
  font-size: 4.5rem;
  cursor: pointer;
`;

export const SignUpText = styled.p`
  color: gray;
  font-size: 4.5rem;
  margin-left: 5rem;
  cursor: pointer;
`;

export const LogInInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  margin-right: 30rem;
`;

export const LogInIdInput = styled.input`
  height: 5rem;
  outline: none;
  &::placeholder {
    color: #c2c2c2;
    font-size: 2rem;
    text-indent: 1rem;
  }
`;

export const LogInPwInput = styled.input`
  margin-top: 2rem;
  height: 5rem;
  outline: none;
  &::placeholder {
    color: #c2c2c2;
    font-size: 2rem;
    text-indent: 1rem;
  }
`;

export const ForgotPW = styled.p`
  color: white;
  margin-top: 5rem;
  margin-right: 30rem;
  text-align: right;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const LogInBtn = styled.button`
  width: 33.5rem;
  height: 5rem;
  background-color: red;
  border: none;
  border-radius: 0.5rem;
  margin-top: 2rem;
  font-weight: 500;
  font-size: 2.3rem;
  cursor: pointer;
`;

export const Kakaologin = styled.div`
  background-image: url('https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png');
  height: 5rem;
  width: 33.5rem;
  border-radius: 0.5rem;
  background-size: cover;
  margin-top: 3rem;
  cursor: pointer;
`;

export const KakaologinWrapper = styled.a`
  width: 100%;
`;
