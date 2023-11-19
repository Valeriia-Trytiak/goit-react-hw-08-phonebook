import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { CustomModalForm } from 'components/CustomModal/CustomModal';
import { deleteContact } from 'redux/contacts/operations';
import { MdDeleteForever, MdDriveFileRenameOutline } from 'react-icons/md';
import {
  ContactItem,
  User,
  DeleteContact,
  UpdateContact,
} from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContactItem>
      <User>
        {name}: {number}
      </User>
      <DeleteContact type="button" onClick={() => dispatch(deleteContact(id))}>
        <MdDeleteForever size={'24px'} />
      </DeleteContact>
      <UpdateContact type="button" onClick={openModal}>
        <MdDriveFileRenameOutline size={'24px'} />
      </UpdateContact>
      {isModalOpen && (
        <CustomModalForm
          isOpen={isModalOpen}
          onClose={closeModal}
          userId={id}
        />
      )}
    </ContactItem>
  );
};
