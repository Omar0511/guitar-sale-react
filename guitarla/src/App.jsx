import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useCart } from "./hooks/useCart";

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

  // Así llamamos un HOOKS propio
  // useCart();

  // const { auth, carrito} = useCart();
  // console.log(auth, carrito);

  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuaintity,
    decreaseQuaintity,
    clearCart,
  } = useCart();

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
