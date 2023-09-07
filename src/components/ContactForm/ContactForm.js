import React, { useState } from "react";
import { Form, FormName, FormNumber, FormButton } from "./ContactForm.styled";

function ContactForm(props) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

   const handleInputChange = event => {
        const { name, value } = event.target;
        name === "name" ? setName(value) : setNumber(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.onAddContact({ name, number });
        setName("");
        setNumber("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormName>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                   pattern="^[a-zA-Z]+([' -]?[a-zA-Z ])*$"
                    title="Name may contain only letters, apostrophe, dash and spaces."
                    required
                />
            </FormName>
            <FormNumber>
                <label>Number:</label>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                   pattern="[+]?[0-9-()\\s]+"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </FormNumber>
            <FormButton type="submit">Add Contact</FormButton>
        </Form>
    );
}

export default ContactForm;