import React, { useState } from 'react';
import Image from 'next/image';
import { jsPDF } from 'jspdf';
import Logo from '../public/img/header/logo.svg';
import UserProfilePic from '../public/img/icons/icono.png';
import DogFood from '../public/img/food/bolsa-de-alimento-de-perro-animada.jpg';
import CatFood from '../public/img/food/bolsa-de-alimento-de-gato-animada.png';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [inventory, setInventory] = useState([
    { id: 1, type: 'Perro', product: 'Croquetas Premium', quantity: 50, image: DogFood },
    { id: 2, type: 'Perro', product: 'Croquetas Ecológicas', quantity: 30, image: DogFood },
    { id: 3, type: 'Perro', product: 'Alimento Húmedo', quantity: 40, image: DogFood },
    { id: 10, type: 'Gato', product: 'Alimento Húmedo Premium', quantity: 30, image: CatFood },
    { id: 11, type: 'Gato', product: 'Croquetas de Salmón', quantity: 20, image: CatFood },
  ]);

  const [cart, setCart] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Incrementar cantidad
  const incrementQuantity = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  // Decrementar cantidad
  const decrementQuantity = (id) => {
    if (cart[id] > 0) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    }
  };

  // Calcular el total de productos en el carrito
  const getTotalItemsInCart = () => {
    return Object.values(cart).reduce((total, qty) => total + qty, 0);
  };

  // Alternar el sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Alternar el menú de perfil
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Obtener productos en el carrito
  const getCartItems = () => {
    return inventory.filter((item) => cart[item.id] > 0).map((item) => ({
      ...item,
      quantity: cart[item.id],
    }));
  };

  // Generar el recibo en PDF
  const generatePDF = (items) => {
    const doc = new jsPDF();
    const date = new Date().toLocaleString();

    doc.setFontSize(16);
    doc.text('Recibo de Compra', 10, 10);
    doc.setFontSize(12);
    doc.text(`Fecha: ${date}`, 10, 20);

    let y = 30; // Posición inicial en Y para la lista de productos
    items.forEach((item, index) => {
      doc.text(
        `${index + 1}. Producto: ${item.product}, Cantidad: ${item.quantity}`,
        10,
        y
      );
      y += 10;
    });

    doc.text('¡Gracias por su compra!', 10, y + 10);

    const fileName = `recibo_compra_${Date.now()}.pdf`;
    doc.save(fileName);
  };

  // Confirmar la compra
  const handlePurchase = () => {
    const items = getCartItems();

    if (items.length === 0) {
      alert('No hay productos en el carrito.');
      return;
    }

    generatePDF(items); // Genera el recibo en PDF
    alert('Compra realizada con éxito. Se ha descargado el recibo.');
    setCart({}); // Limpia el carrito tras la compra
    toggleSidebar(); // Cierra el sidebar
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  return (
    <div>
      {/* Header */}
      <header className="py-6 bg-[#063970] text-white">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#">
            <h1 className="text-xl font-bold cursor-pointer">Pet-First</h1>
          </a>
          <nav className="text-lg flex gap-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-x-4 relative">
            {/* Carrito de compras con contador */}
            <div className="relative cursor-pointer text-2xl" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2m0 0l1.6 8h10.8l1.6-8H5.4m-.4 0h16m-2 10a2 2 0 11-4 0m-6 0a2 2 0 11-4 0"
                />
              </svg>
              {getTotalItemsInCart() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {getTotalItemsInCart()}
                </span>
              )}
            </div>
            {/* Imagen de perfil */}
            <div className="relative">
              <Image
                src={UserProfilePic}
                alt="User Profile"
                width={50}
                height={50}
                className="rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownVisible && (
                <div
                  className="absolute right-0 bg-white text-black rounded shadow-md w-40 mt-4"
                >
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50 w-80`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            className="text-gray-500 hover:text-gray-700 mt-4"
            onClick={toggleSidebar}
          >
            Close
          </button>
          <div className="mt-4">
            {getCartItems().length > 0 ? (
              <>
                {getCartItems().map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4">
                    <Image src={item.image} alt={item.product} width={50} height={50} />
                    <div>
                      <h3 className="text-sm font-bold">{item.product}</h3>
                      <p className="text-xs text-gray-500">Cantidad: {item.quantity}</p>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  className="bg-blue-500 text-white w-full py-2 rounded mt-4"
                  onClick={handlePurchase}
                >
                  Confirmar compra
                </button>
              </>
            ) : (
              <p className="text-sm text-gray-500">Tu carrito está vacío.</p>
            )}
          </div>
        </div>
      </div>

      {/* Contenido del Dashboard */}
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold mb-6">Product Inventory</h1>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {inventory.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 shadow">
                <Image src={item.image} alt={item.product} width={150} height={150} />
                <h3 className="text-lg font-bold">{item.product}</h3>
                <p className="text-gray-600">Cantidad disponible: {item.quantity}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-300 px-2 py-1 rounded-l"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="px-4">{cart[item.id] || 0}</span>
                  <button
                    className="bg-gray-300 px-2 py-1 rounded-r"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
