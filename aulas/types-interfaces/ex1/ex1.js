"use strict";
//Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <p>${data.descricao}</p>
      <p>${data.garantia}</p>
      <p>${data.seguroAcidentes ? 'Contém seguro' : 'Sem seguro'}</p>
      <div>
        <h4>Dados do Fabricante:</h4>
        <ul>
          <li>${data.empresaFabricante.nome}</li>
          <li>${data.empresaFabricante.fundacao}</li>
          <li>${data.empresaFabricante.pais}</li>
        </ul>
      </div>
      <div>
        <h4>Dados da Montadora:</h4>
        <ul>
          <li>${data.empresaMontadora.nome}</li>
          <li>${data.empresaMontadora.fundacao}</li>
          <li>${data.empresaMontadora.pais}</li>
        </ul>
      </div>
    </div>
  `;
}
