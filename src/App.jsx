import {useState} from 'react';
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header 
        numeros = {1}
      />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListaPacientes />
      </div>
    </div>
  );
}

export default App;
