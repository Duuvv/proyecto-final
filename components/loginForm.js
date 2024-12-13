import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Importa el hook useRouter

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const router = useRouter(); // Inicializa useRouter para manejar la redirección

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      setMessage('Login exitoso'); // Mensaje de éxito
      localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
      router.push('/dashBoard'); // Redirige al Dashboard
    } catch (error) {
        setMessage(error.response?.data?.message || 'Login failed');
    }
    };

    return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <p>{message}</p>
        </form>
    );
};

export default LoginForm;
