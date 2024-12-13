import React, { useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../public/img/header/logo.svg';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState('register'); // Estado para alternar entre LoginForm y RegisterForm

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsOverlayOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const switchForm = (form) => {
    setActiveForm(form); // Cambiar el formulario activo
  };

  return (
    <header className='py-6 lg:absolute lg:w-full lg:left-0'>
      <div className='container mx-auto flex flex-col gap-y-4 lg:flex-row h-full justify-between items-center relative'>
        <a href='#'>
          <Image src={Logo} alt="logo" />
        </a>
        <nav className='text-xl flex gap-x-4 lg:gap-x-12'>
          <a href='#Pets'>Services</a>
          <a href='#Adoption'>About</a>
          <a href='#Newletter'>Blog</a>
          <a href='#Footer'>Contact</a>
        </nav>
        <div className='flex items-center gap-x-4'>
          <button
            className='btn btn-primary lg:btn-outline'
            onClick={openSignUpModal}
          >
            Sign Up
          </button>
          {/* Carrito oculto - No se renderiza */}
          {false && (
            <div className='relative'>
              <button className='text-white text-2xl' onClick={toggleSidebar}>
                <FaShoppingCart />
              </button>
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                3
              </span>
            </div>
          )}
        </div>
      </div>

      {isOverlayOpen && (
        <div
          className='fixed inset-0 bg-black opacity-30 z-10'
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed top-0 right-0 bg-white shadow-lg w-64 h-full transition-transform transform border-l-4 border-blue-800 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-20`}
      >
        <div className='p-6'>
          <h3 className='text-2xl font-bold mb-4'>Cart</h3>
          <ul>
            <li className='mb-3 px-4 py-2 border-2 border-blue-800 rounded-full text-2xl text-gray-700 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105'>
              <a href='#'>My Cart</a>
            </li>
            <li className='mb-3 px-4 py-2 border-2 border-blue-800 rounded-full text-2xl text-gray-700 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105'>
              <a href='#'>Purchases</a>
            </li>
            <li className='mb-3 px-4 py-2 border-2 border-blue-800 rounded-full text-2xl text-gray-700 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105'>
              <a href='#'>Items</a>
            </li>
          </ul>
          <button
            onClick={closeSidebar}
            className='absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900'
          >
            X
          </button>
        </div>
      </div>

      {isSignUpModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50'>
          <div className='bg-white p-6 rounded-lg shadow-lg border-2 border-blue-800 w-96 z-60 relative'>
            <button
              onClick={closeSignUpModal}
              className='absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900'
            >
              X
            </button>
            <h3 className='text-2xl font-bold mb-4'>
              {activeForm === 'register' ? 'Sign Up' : 'Log In'}
            </h3>
            {activeForm === 'register' ? (
              <RegisterForm />
            ) : (
              <LoginForm />
            )}
            <button
              onClick={() =>
                switchForm(activeForm === 'register' ? 'login' : 'register')
              }
              className='mt-4 text-blue-600 underline text-sm text-center w-full'
            >
              {activeForm === 'register'
                ? 'Already have an account? Log In'
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
