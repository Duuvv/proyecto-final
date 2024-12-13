import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', formData);
        setMessage(response.data.message);
    } catch (error) {
        setMessage(error.response?.data?.message || 'Registration failed');
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
        />
        <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        />
        <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        />
        <button type="submit">Register</button>
        <p>{message}</p>
    </form>
    );
};

export default RegisterForm;
