let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);

  atualizarLista();

  input.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach(function (nome) {
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos 2 amigos para o sorteio.");
    return;
  }

  let sorteio = [...amigos];
  for (let i = sorteio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
  }

  let sorteado = sorteio[0];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let item = document.createElement("li");
  item.textContent = `O amigo secreto sorteado é: ${sorteado}`;
  resultado.appendChild(item);
}
