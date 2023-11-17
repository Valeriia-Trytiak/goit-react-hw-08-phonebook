import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { MdDeleteForever } from 'react-icons/md';
import { ContactItem, User, DeleteContact } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <User>
        {name}: {number}
      </User>
      <DeleteContact type="button" onClick={() => dispatch(deleteContact(id))}>
        <MdDeleteForever size={'24px'} />
      </DeleteContact>
    </ContactItem>
  );
};
