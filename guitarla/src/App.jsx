import { useState, useEffect } from "react";

import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {
  // State
  // const [auth, setAuth] = useState(false);
  // console.log(auth);
  // const [total, setTotal] = useState(0);
  // const [car, setCar] = useState([]);

  // useEffect(() => {
  //   console.log("Componente montado");
  // }, [auth]);

  // setTimeout(() => {
  //   setAuth(true);
  // }, 3000);

  // const initialCart = () => {
  //   const localStorageCart = localStorage.getItem('cart');
  //   return localStorageCart ? JSON.parse(localStorageCart) : [];
  // };
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    const parsed = localStorageCart ? JSON.parse(localStorageCart) : [];
    // filtra nulls o elementos incompletos
    return parsed.filter((item) => item && item.id && item.price);
  };

  const [data, setData] = useState(db);
  // console.log(data);

  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

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

    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }

  function increaseQuaintity(id) {
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updateCart);
  }

  function decreaseQuaintity(id) {
    const updateCart = cart.map(item => {
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

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuaintity={increaseQuaintity}
        decreaseQuaintity={decreaseQuaintity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              // price={100}
              key={guitar.id} // Siempre que usamos un map, hay que poner un key unico
              guitar={guitar}
              setCart={setCart}
              cart={cart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
