import { useSelector } from "react-redux";
import { getContacts, getContactsFilter } from "redux/selectors";
import PropTypes from 'prop-types';
import ContactListItem from "components/ContactListItem/ContactListItem";
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filteredContacts) => {
    const normalizedFilter = filteredContacts.value?.toLowerCase() || '';

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)          
    ); 
}

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filteredContacts = useSelector(getContactsFilter);
    const visibleContacts = getVisibleContacts(contacts, filteredContacts)

    return (
        <ul className={css.list}>
            {visibleContacts.map(contact => {
                return (
                    <ContactListItem
                        contact={contact}
                        key={contact.id}
                    />
                )
             })}
        </ul>
    )
}

ContactList.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
}

export default ContactList;
