import Animation from 'lotties/Lottie';
import { useAuth } from 'hooks/useAuth';
import { DescHome } from '../components/Container/Container.styled';
import { DescOpening } from 'components/DescOpening/DescOpening';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <h1>Hello, this is your PhoneBook.</h1>
      <Animation />
      {isLoggedIn ? (
        <DescOpening />
      ) : (
        <p>
          Create your own unique account and get the opportunity to record your
          contacts.
        </p>
      )}
      <DescHome>Fast, Secure and Mobile Friendly React Application</DescHome>
    </div>
  );
}
