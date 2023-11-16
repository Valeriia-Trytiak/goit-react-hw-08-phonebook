import Animation from 'lotties/Lottie';
import { DescHome } from '../components/Container/Container.styled';

export default function Home() {
  return (
    <div>
      <h1>Hello, this is your PhoneBook.</h1>
      <Animation />
      <DescHome>Fast, Secure and Mobile Friendly React Application</DescHome>
    </div>
  );
}
