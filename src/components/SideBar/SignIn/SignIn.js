import React from 'react';
import { KAKAO_AUTH_URL } from './OAuth';
import * as S from './Styles.SignIn';

const SignIn = () => {
  return (
    <>
      <S.Auth>
        <S.LogInText>LOGIN</S.LogInText>
        <S.SignUpText>JOIN NOW</S.SignUpText>
      </S.Auth>
      <S.LogInInputWrapper>
        <S.LogInIdInput placeholder="Email" />
        <S.LogInPwInput placeholder="Password" />
      </S.LogInInputWrapper>
      <S.ForgotPW>Forgot password?</S.ForgotPW>
      <S.LogInBtn>LOGIN</S.LogInBtn>
      <S.KakaologinWrapper href={KAKAO_AUTH_URL}>
        <S.Kakaologin />
      </S.KakaologinWrapper>
    </>
  );
};

export default SignIn;
