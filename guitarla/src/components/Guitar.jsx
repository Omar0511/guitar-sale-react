// export default function Guitar(props) {
// export default function Guitar({price}) {
export default function Guitar({ guitar }) {
  // console.log(props);
  // console.log(props.price);
  // console.log(props.auth);
  // console.log(guitar);

  const { id, name, image, description, price } = guitar;

  const handleClick = (id) => {
    // console.log(`Agregando guitarra ${id} al carrito`);
    // console.log("Agregando guitarra " + id + " al carrito");
    console.log(id);
  };

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        {/* <img
          className="img-fluid"
          src="./public/img/guitarra_01.jpg"
          alt="imagen guitarra"
        /> */}
        <img
          className="img-fluid"
          src={`./public/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        {/* <h3 className="text-black fs-4 fw-bold text-uppercase">Lukather</h3> */}
        {/* <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3> */}
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
          labore odit magnam in autem nesciunt, amet deserunt
        </p> */}
        <p>{description}</p>

        {/* <p className="fw-black text-primary fs-3">$299</p> */}
        {/* <p className="fw-black text-primary fs-3">{props.price}</p> */}
        {/* <p className="fw-black text-primary fs-3">$ {price}</p> */}
        {/* <p className="fw-black text-primary fs-3">$ {guitar.price}</p> */}
        <p className="fw-black text-primary fs-3">$ {price}</p>

        {/* <button type="button" className="btn btn-dark w-100">
          Agregar al Carrito
        </button> */}
        <button
          type="button"
          className="btn btn-dark w-100"
          // onClick={handleClick(id)}

          // onClick={() => handleClick(id)}

          // Cuando se tienen parametros, se usa una funcion flecha
          onClick={() => handleClick(guitar)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
