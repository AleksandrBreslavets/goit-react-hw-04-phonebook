import { nanoid } from "nanoid";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactsList } from "./ContactList.styled";
import PropTypes from "prop-types";
export const ContactList = ({ contacts, onDeleteBtnClick}) => {
    return (
        <ContactsList>
            {contacts.map(({ name, number, id }) => <ContactItem
                key={nanoid()}
                name={name}
                number={number}
                id={id}
                onDeleteBtnClick={onDeleteBtnClick}>
                </ContactItem>)}
      </ContactsList>)
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteBtnClick: PropTypes.func.isRequired,
};