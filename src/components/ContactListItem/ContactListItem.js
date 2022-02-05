import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  return (
    <li className={s.contactItem}>
      {contact.name}: {contact.number}
      <button
        type="button"
        className={s.btnDel}
        disabled={isLoading}
        onClick={() => onDeleteContact(contact.id)}
      >
        {isLoading ? (
          <Loader
            type="Circles"
            color="lightblue"
            height={12}
            width={12}
            timeout={0}
          />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
};

ContactListItem.prototype = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;
