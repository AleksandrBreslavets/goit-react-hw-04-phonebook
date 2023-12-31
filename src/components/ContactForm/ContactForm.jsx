import { useState} from "react";
import PropTypes from "prop-types";
import { Form, Label, Input, Button } from "./ContactForm.styled";

export const ContactForm = ({ addContact }) => {
    
    const[name, setName] = useState('');
    const[number, setNumber] = useState('');

    const userInfo = {
        name,
        number
    };
    
    const onInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
            return;
        }
        setNumber(value);
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    const onFormSubmit = (e) => {
    e.preventDefault();
    addContact(userInfo);
    resetForm();
    }
    
    return (
        <Form onSubmit={onFormSubmit}>
            <Label>Name
                <Input
                    onChange={onInputChange}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label>Number
                <Input
                    onChange={onInputChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
    );
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
};