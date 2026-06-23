// Simulador de Equilíbrio
const producaoSlider = document.getElementById('producao');
const preservacaoSlider = document.getElementById('preservacao');
const valProducao = document.getElementById('val-producao');
const valPreservacao = document.getElementById('val-preservacao');
const resultado = document.getElementById('resultado');

function atualizarSimulador() {
  const prod = parseInt(producaoSlider.value);
  const pres = parseInt(preservacaoSlider.value);
  
  valProducao.textContent = prod + "%";
  valPreservacao.textContent = pres + "%";

  const diferenca = Math.abs(prod - pres);
  
  if (diferenca <= 15) {
    resultado.innerHTML = `🌟 <span class="text-emerald-400">EXCELENTE EQUILÍBRIO!</span>`;
  } else if (diferenca <= 35) {
    resultado.innerHTML = `⚖️ <span class="text-yellow-400">Bom equilíbrio</span>`;
  } else {
    resultado.innerHTML = `⚠️ <span class="text-orange-400">Desequilíbrio</span>`;
  }
}

producaoSlider.addEventListener('input', atualizarSimulador);
preservacaoSlider.addEventListener('input', atualizarSimulador);

// Calculadora de Pegada de Carbono
function calcularPegada() {
  const hectares = parseInt(document.getElementById('hectares').value);
  const fertilizantes = parseInt(document.getElementById('fertilizantes').value);
  const gado = parseInt(document.getElementById('gado').value);

  let pegada = (hectares * 2) + fertilizantes + gado;
  
  let mensagem = '';
  let cor = '';

  if (pegada < 100) {
    cor = 'text-emerald-400';
    mensagem = `🌱 Excelente! Pegada baixa (${pegada} t CO₂/ano)`;
  } else if (pegada < 240) {
    cor = 'text-yellow-400';
    mensagem = `⚖️ Pegada moderada (${pegada} t CO₂/ano)`;
  } else {
    cor = 'text-orange-400';
    mensagem = `⚠️ Pegada alta (${pegada} t CO₂/ano)`;
  }

  document.getElementById('resultado-carbono').innerHTML = `
    <span class="${cor}">${mensagem}</span>
  `;
}

// Atualiza valor dos hectares
document.getElementById('hectares').addEventListener('input', function() {
  document.getElementById('val-hectares').textContent = this.value + " hectares";
});

// Inicializar
window.onload = () => {
  atualizarSimulador();
};