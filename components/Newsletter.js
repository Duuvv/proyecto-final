import React, { useState } from 'react';
import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import DogImg from '../public/img/newsletter/dog.png';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Por favor, ingresa un correo válido.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('¡Te has suscrito exitosamente! Revisa tu bandeja de entrada.');
        setEmail('');
      } else {
        console.error('Error en la API:', data.message);
        setMessage(data.message || 'Hubo un error al procesar tu suscripción.');
      }
    } catch (error) {
      console.error('Error en el cliente:', error);
      setMessage('Ocurrió un error. Por favor, intenta de nuevo.');
    }
  };

  return (
    <section>
      <div className='h-[800px] flex flex-1 flex-col lg:flex-row lg:h-[324px]'>
        {/* input div */}
        <div className='bg-newsletterOrange bg-center bg-cover bg-no-repeat flex-1 flex flex-col justify-center items-center px-8 lg:px-0 h-full'>
          <div>
            <h2 className='h2 mb-12'>
              Subscribe & get pet <br /> Updatenews
            </h2>
            {/* Formulario */}
            <form onSubmit={handleSubscribe} className='flex relative flex-col'>
              <div className="relative w-full">
                <input
                  className='bg-transparent border-b-2 placeholder:text-white text-white outline-none w-full pr-12'
                  type='email'
                  placeholder='Mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className='absolute top-0 right-0 text-white text-3xl cursor-pointer'>
                  <HiOutlineArrowNarrowRight />
                </button>
              </div>
              {/* Mostrar mensaje debajo del input */}
              {message && <p className="mt-2 text-sm text-white">{message}</p>}
            </form>
          </div>
        </div>
        {/* image div */}
        <div className='bg-newsletterYellow bg-center bg-no-repeat bg-cover flex-1 flex justify-center items-end h-full'>
          <Image src={DogImg} alt='Cute dog illustration' />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
