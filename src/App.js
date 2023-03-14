import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/pantalla";
import BotonClear from "./componentes/clear";
import Logo from "./componentes/logo";
import img1 from "./img/misuse-3.png";
// import img2 from "./img/logo1.jpg";
// import img3 from "./img/logo2.png";
import { useState } from "react";
import { evaluate } from "mathjs";
import Swal from "sweetalert2";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const resultado = () => {
    if (input) {
      if (/[+-][0-9]/.test(input)) {
        Swal.fire("Super");
        setInput(evaluate(input));
      } else {
        Swal.fire("Tiene errores Verifique",'error');
      }
    } else {
      Swal.fire("Ingrese un Numero");
    }
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <Logo img={img1} />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={resultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
