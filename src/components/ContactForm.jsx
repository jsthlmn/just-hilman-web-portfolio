import { useState } from "react"
import emailjs from '@emailjs/browser'
import toast from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [errors, setErrors] = useState({});

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email format is invalid';
        }
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
            .send(
                'service_zg3142c',
                'template_jr1ct17',
                formData,
                'itDh3lQ6L34AjKAb8'
            )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success("Message sent successfully");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.log("FAILED...", error)
                toast.error("Failed to send message");
            })
            .finally(() => {
                setIsSending(false);
            })
        }
    }
    return (
        <div>ContactForm</div>
    )
}

export default ContactForm