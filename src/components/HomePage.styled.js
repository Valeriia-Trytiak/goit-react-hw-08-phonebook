import styled from 'styled-components';

export const PageTitle = styled.h1`
  margin-bottom: ${p => p.theme.spacing(4)};
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const DescPageHomeText = styled.p`
  margin-bottom: ${p => p.theme.spacing(4)};
  text-align: center;
`;

export const TaglineText = styled.p`
  position: absolute;
  top: 90%;
  left: 50%; */
  /* transform: translate(-50%, -50%);
  text-align: center;
  /* margin-top: ${p => p.theme.spacing(100)}; */
`;
