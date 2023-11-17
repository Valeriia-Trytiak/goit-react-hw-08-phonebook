import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 428px;
  padding: 0 ${p => p.theme.spacing(4)};
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(
    0deg,
    rgb(217, 175, 217) 0%,
    rgb(151, 217, 225) 50%,
    rgb(255, 255, 255) 100%
  );

  @media (min-width: 320px) {
    width: 700px;
    padding: ${p => p.theme.spacing(2)};
  }

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1024px;
  }
`;
