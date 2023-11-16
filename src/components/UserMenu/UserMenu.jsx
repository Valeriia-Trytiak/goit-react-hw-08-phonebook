import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ButtonLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogOut>
    </div>
  );
};
