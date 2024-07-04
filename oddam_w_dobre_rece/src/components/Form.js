import React, { useState } from 'react';
import "../scss/_form.scss"

const Form = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [submitMessage, setSubmitMessage] = useState('');
    const [hasStartedTyping, setHasStartedTyping] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        validateField(name, value);

        // Ustawienie stanu, gdy użytkownik zaczyna wpisywać dane
        if (!hasStartedTyping) {
            setHasStartedTyping(true);
        }
    };

    const validateField = (name, value) => {
        let errorMsg = '';
        if (name === 'name') {
            if (value.trim() === '') {
                errorMsg = 'Imię jest wymagane';
            } else if (!/^[A-Za-z]+$/.test(value)) {
                errorMsg = 'Imię może składać sie jedynie z liter';
            }
        } else if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.trim() === '') {
                errorMsg = 'Email jest wymagany';
            } else if (!emailPattern.test(value)) {
                errorMsg = 'Email musi mieć poprawny format';
            }
        } else if (name === 'message') {
            if (value.trim() === '') {
                errorMsg = 'Wiadomośc jest wymagana';
            }
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = !Object.values(errors).some((error) => error !== '') &&
            Object.values(formData).every((value) => value.trim() !== '');
        if (isValid) {
            setSubmitMessage(`Wiadomość wysłana! Dziękujemy za kontakt`);
            setFormData({ name: '', email: '', message: '' }); // Clear form fields
            setErrors({ name: '', email: '', message: '' }); // Clear errors
        } else {
            setSubmitMessage('Proszę wpisać poprawne dane');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Krzysztof"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Wpisz swój email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abc@xyz.pl"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                {hasStartedTyping && submitMessage && <p className="submit-message">{submitMessage}</p>}
                <div className="form__button">
                    <button type="submit" className="submit-button">Wyślij</button>
                </div>

            </form>
        </div>
    );
};

export default Form;
