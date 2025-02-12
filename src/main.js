import './style.css'
import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfólio carregado!")

  const projetos = [
    { nome: "Projeto 1", descricao: "Descrição do projeto 1"},
    { nome: "Projeto 2", descricao: "Descrição do projeto 2"},
    { nome: "Projeto 3", descricao: "Descrição do projeto 3"}
  ];

  const listaProjetos = document.getElementById("lista-projetos");

  projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("projeto");
    div.innerHTML = `<h3>${projeto.nome}</h3><p>${projeto.descricao}</p>`;
    listaProjetos.appendChild(div);
  });

});
 

setupCounter(document.querySelector('#counter'))
