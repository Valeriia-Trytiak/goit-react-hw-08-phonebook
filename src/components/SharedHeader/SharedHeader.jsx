import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Container, Header } from './SharedHeader.styled';

export const SharedHeader = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
