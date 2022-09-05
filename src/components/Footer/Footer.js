import * as S from './Styled.Footer';

const Footer = () => {
  return (
    <>
      <S.FooterTop>
        {FOOTER_TOP_DATA.map(({ KOR_TITLE, EN_TITLE }, idx) => (
          <S.FooterDiv key={idx}>
            <S.FooterTitle size="2.5rem">{KOR_TITLE}</S.FooterTitle>
            <S.FooterTitle size="7rem">{EN_TITLE}</S.FooterTitle>
          </S.FooterDiv>
        ))}
      </S.FooterTop>
      <S.FooterUnder>
        <S.FooterUderTitle>
          {FOOTER_UNDER_DATA.map(({ TITLE, SIZE }, idx) => (
            <S.FooterUderTitle key={idx} size={SIZE}>
              {TITLE}
            </S.FooterUderTitle>
          ))}
        </S.FooterUderTitle>
      </S.FooterUnder>
      <S.FooterBottom>
        {FOOTER_BOTTOM_DATA.map((data, idx) => (
          <div key={idx}>{data}</div>
        ))}
      </S.FooterBottom>
    </>
  );
};

export default Footer;

const FOOTER_TOP_DATA = [
  { KOR_TITLE: '자주하는 질문', EN_TITLE: 'FAQ' },
  { KOR_TITLE: '문의하기', EN_TITLE: 'CONTACT US' },
  { KOR_TITLE: '에이전시', EN_TITLE: 'AGENCY  →' },
  { KOR_TITLE: '채용', EN_TITLE: 'RECRUITMENT  →' },
];

const FOOTER_UNDER_DATA = [
  { TITLE: '1MILLION', SIZE: '15rem' },
  { TITLE: 'DANCE STUDIO', SIZE: '7rem' },
  { TITLE: 'SEOUL', SIZE: '4rem' },
  { TITLE: '+82 2 512 6756', SIZE: '3rem' },
  { TITLE: 'STUDIO@1MILLIONDANCE.COM', SIZE: '3rem' },
];

const FOOTER_BOTTOM_DATA = [
  'ⓒ 2021 1MILLION Inc. All Rights Reserved.',
  'Terms of Service',
  'Privacy Policy',
];
