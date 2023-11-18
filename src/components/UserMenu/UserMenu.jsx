import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ButtonLogOut, UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Log out
      </ButtonLogOut>
    </Wrapper>
  );
};
