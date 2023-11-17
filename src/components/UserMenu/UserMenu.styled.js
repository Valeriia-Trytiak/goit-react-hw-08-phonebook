import styled from 'styled-components';

export const ButtonLogOut = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 100px;
  height: 40px;
  border-radius: ${p => p.theme.spacing(5)};
  font-family: inherit;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  border-color: ${p => p.theme.colors.accent};
  background: transparent;
  box-shadow: 0 5px 15px 0 rgba(11, 99, 246, 1);
  transition: 0.5s;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    transform: translate(0, -3px);
    box-shadow: 0 20px 40px 0 rgba(11, 99, 246, 1);
    background-image: linear-gradient(
      to right,
      #02aab0 0%,
      #00cdac 51%,
      #02aab0 100%
    );
  }
`;
