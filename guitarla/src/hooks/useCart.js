import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";

export const useCart = () => {
  // Hook implementation goes here
  // console.log("useCart hook called");

  // const auth = true;
  // const carrito = [];

  // return { auth, carrito };

  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  // console.log(data);

  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    console.log("Agregando al carrito");

    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);
    // console.log(itemExists);

    if (itemExists >= 0) {
      // console.log("Ya existe");

      if (cart[itemExists].quantity >= MAX_ITEMS) {
        return;
      }

      const updateCart = [...cart];

      updateCart[itemExists].quantity++;

      setCart(updateCart);
    } else {
      // console.log("No existe, agreganod...");

      item.quantity = 1;

      // setCart((prevCart) => [...prevCart, item]);
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    // console.log("Eliminando del carrito", id);

    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function increaseQuaintity(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updateCart);
  }

  function decreaseQuaintity(id) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }

  // const name = 'probando';

  // State derivado
  // const isEmpty = () => cart.length === 0;
  // Se ejecuta cada vez que hay un cambio en el componente -> useMemo
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  // Se ejecutara cada vez que carrito cambie
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuaintity,
    decreaseQuaintity,
    clearCart,
    isEmpty,
    cartTotal,
  };
};

// export default useCart;
