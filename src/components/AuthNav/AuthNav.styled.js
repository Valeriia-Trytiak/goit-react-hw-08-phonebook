import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  border-radius: ${p => p.theme.spacing(1)};
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: ${p => p.theme.colors.accent};
  }
`;
