import Carousel from './Carousel/Carousel';
import * as S from './Styled.Main';

const Main = () => {
  return (
    <>
      <S.Vidio url="videoURL" playing muted loop width="100%" height="8%" />
      <S.MiddleDiv>
        <S.StudioTitle size="4.2" topText>
          WE DON'T NEED
        </S.StudioTitle>
        <S.StudioTitle size="18">A STAGE TO</S.StudioTitle>
        <S.StudioTitle size="18">DANCE</S.StudioTitle>
      </S.MiddleDiv>
      <Carousel />
    </>
  );
};

export default Main;
