import { Animation } from 'lotties/Lottie';
import { useAuth } from 'hooks/useAuth';
import {
  TaglineText,
  PageTitle,
  DescPageHomeText,
} from '../components/HomePage.styled';
import { DescOpening } from 'components/DescOpening/DescOpening';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <PageTitle>Hello, this is your PhoneBook.</PageTitle>
      {isLoggedIn ? (
        <DescOpening />
      ) : (
        <DescPageHomeText>
          Create your own unique account and get the opportunity to record your
          contacts.
        </DescPageHomeText>
      )}
      <Animation />
      <TaglineText>Fast, Secure and Friendly React Application</TaglineText>
    </div>
  );
}
