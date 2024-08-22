import React from "react";
import Contatos from "../Contato";
import listaDeContatos from "../../ListaDeContatos.json";
import "./style.css";

function App() {
  return (
    <div>
      <Contatos lista={listaDeContatos.lista} />
    </div>
  );
}

export default App;
