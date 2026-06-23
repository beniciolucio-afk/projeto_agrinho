function verificarProgresso() {
  const tarefas = document.querySelectorAll(".task");
  let feitas = 0;

  tarefas.forEach(t => {
    if (t.checked) feitas++;
  });

  const resultado = document.getElementById("resultado");

  if (feitas === tarefas.length) {
    resultado.textContent = "🌟 Excelente! Você está produzindo com responsabilidade!";
  } else {
    resultado.textContent = `Você completou ${feitas} de ${tarefas.length} ações. Continue evoluindo!`;
  }
}

function mostrarDica() {
  const dicas = [
    "Reutilize materiais antes de comprar novos.",
    "Reduza o consumo de energia sempre que possível.",
    "Prefira fornecedores sustentáveis.",
    "Evite desperdício de recursos naturais.",
    "Pense no impacto do seu produto no futuro."
  ];

  // embaralhar dicas
  const dicasEmbaralhadas = dicas.sort(() => 0.5 - Math.random());

  // pegar 3 primeiras
  const selecionadas = dicasEmbaralhadas.slice(0, 3);

  // mostrar na tela
  document.getElementById("dica").innerHTML =
    "💡 <br>" + selecionadas.map(d => "• " + d).join("<br>");
}


function salvarCompromisso() {
  const texto = document.getElementById("compromisso").value;
  const aviso = document.getElementById("salvo");

  if (texto.trim() === "") {
    aviso.textContent = "Escreva algo antes de salvar!";
  } else {
    localStorage.setItem("compromisso", texto);
    aviso.textContent = "✔ Compromisso salvo com sucesso!";
  }
}

// carregar compromisso salvo
window.onload = function () {
  const salvo = localStorage.getItem("compromisso");
  if (salvo) {
    document.getElementById("compromisso").value = salvo;
  }
};