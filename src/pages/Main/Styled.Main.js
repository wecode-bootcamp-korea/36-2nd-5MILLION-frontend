import ReactPlayer from 'react-player';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Wrapper = styled.div`
  margin-top: -12rem;
  width: 100%;
  height: 107rem;
  z-index: -1;
`;

export const Vidio = styled(ReactPlayer)`
  overflow: hidden;
  width: 100%;
  & > div > iframe {
    width: 100%;
    height: 100%;
    object-fit: 'cover';
  }
`;

export const MiddleDiv = styled.div`
  padding-top: 4rem;
  ${({ theme }) => theme.variables.flex('column', 'center', 'center')};
`;

export const StudioTitle = styled.div`
  margin-bottom: ${({ topText }) => topText && '2rem'};
  font-size: ${({ size }) => `${size}rem`};
  font-weight: 700;
`;
