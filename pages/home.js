import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      router.push('/dashboard'); // Si está autenticado, redirige al Dashboard
    }
    }, [router]);

    return (
        <div className="container mx-auto py-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Bienvenido</h1>
        <p>Por favor, inicia sesión para acceder al Dashboard.</p>
        <button
            onClick={() => router.push('/login')} // Redirige a la página de inicio de sesión
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
            Iniciar Sesión
        </button>
        </div>
    );
};

export default Home;
