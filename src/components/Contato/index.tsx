"use client"; // Adicione esta linha no início do arquivo

import React, { useState } from "react";
import "../ListaContatos/style.css";

interface Contato {
  nome: string;
  telefone: string;
}

interface ContatosProps {
  lista: Contato[];
}

// Componente de lista de contatos
const Contatos: React.FC<ContatosProps> = ({ lista }) => {
  const [pesquisa, setPesquisa] = useState("");
  const [novosContatos, setNovosContatos] = useState<Contato[]>(lista);

  // Função para atualizar o estado de pesquisa
  const handlePesquisaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
  };

  // Função para adicionar um novo contato
  const handleAdicionarContato = () => {
    const nome = prompt("Digite o nome do novo contato:");
    const telefone = prompt("Digite o telefone do novo contato:");
    if (nome && telefone) {
      setNovosContatos([...novosContatos, { nome, telefone }]);
    }
  };

  // Filtra os contatos com base na pesquisa
  const contatosFiltrados = novosContatos.filter((contato) =>
    contato.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div>
      <h1 className="titulo">Contatos</h1>
      <div className="botoes">
        <input
          type="text"
          placeholder="Buscar contatos"
          value={pesquisa}
          onChange={handlePesquisaChange}
          className="input-pesquisa"
        />
        <button onClick={handleAdicionarContato} className="botao-adicionar">
          Adicionar Contato
        </button>
      </div>
      {contatosFiltrados.map((contato, index) => (
        <div key={index} className="dados">
          <h2>{contato.nome}</h2>
          <p>{contato.telefone}</p>
        </div>
      ))}
    </div>
  );
};

export default Contatos;
