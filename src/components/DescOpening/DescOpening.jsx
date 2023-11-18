import { Link, Text, WrapperDesc } from './DescOpening.styled';

export const DescOpening = () => {
  return (
    <WrapperDesc>
      <Text>
        It is designed to help your brain not remember numbers, but write them
        down.
      </Text>
      <Link to={'/contacts'}>Add contact</Link>
    </WrapperDesc>
  );
};
