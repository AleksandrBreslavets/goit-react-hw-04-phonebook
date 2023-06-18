import { Component } from "react";
import PropTypes from "prop-types";
import {Form, Label, Input, Button } from "./ContactForm.styled";
const INITIAL_STATE = {
  name: '',
  number: ''
};
export class ContactForm extends Component{
    state = {
        ...INITIAL_STATE,
    }

    static propTypes = {
         addContact:PropTypes.func.isRequired,
     };

    onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
    }

    resetForm = () => {
    this.setState({ ...INITIAL_STATE });
    }

    onFormSubmit = (e) => {
    e.preventDefault();
    const { addContact } = this.props;
    addContact(this.state);
    this.resetForm();
    }
    
    render() {
        const { name, number } = this.state;
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Label>Name
                    <Input
                    onChange={this.onInputChange}
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
                        onChange={this.onInputChange}
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
    )}
};