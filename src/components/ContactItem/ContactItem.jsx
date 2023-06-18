import PropTypes from "prop-types";
import { Item, ContactDetails, Button } from "./ContactItem.styled"
export const ContactItem = ({ name, number, id, onDeleteBtnClick }) => {
    return (
        <Item>
            <ContactDetails>{name}: {number}</ContactDetails>
            <Button onClick={()=>onDeleteBtnClick(id)} type="button">Delete</Button>
        </Item>
    )
}
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteBtnClick: PropTypes.func.isRequired,
};