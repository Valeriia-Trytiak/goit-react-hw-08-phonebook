import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  // const dispatch = useDispatch();
  return (
    <List>
      {visibleContacts.map(user => (
        <Contact id={user.id} name={user.name} number={user.number} />
      ))}
    </List>
  );
};
