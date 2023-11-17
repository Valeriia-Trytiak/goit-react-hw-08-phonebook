import styled from 'styled-components';

// export const Container = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
//   padding: 0 ${p => p.theme.spacing(2)};
// `;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)} 0;
  margin-bottom: ${p => p.theme.spacing(10)};
  border-bottom: 1px solid black;
  /* background-image: linear-gradient(135deg, #92ffc0 10%, #002661 100%); */

  > nav {
    display: flex;
  }
`;
