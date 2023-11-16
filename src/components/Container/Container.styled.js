import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 428px;
  padding: 0 ${p => p.theme.spacing(4)};
  margin: 0 auto;

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

export const DescHome = styled.p`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
