function calcular(operador) {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  let resultado = '';

  if (isNaN(n1) || isNaN(n2)) {
    resultado = 'Preencha os dois campos.';
  } else {
    switch (operador) {
      case '+':
        resultado = n1 + n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case '*':
        resultado = n1 * n2;
        break;
      case '/':
        resultado = n2 !== 0 ? n1 / n2 : 'Não divide por zero!';
        break;
    }

    adicionarAoHistorico(`${n1} ${operador} ${n2} = ${resultado}`);
  }

  document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}

function adicionarAoHistorico(texto) {
  const ul = document.getElementById('lista-historico');
  const li = document.createElement('li');
  li.textContent = texto;
  ul.prepend(li); // adiciona no topo
}

function limpar() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('resultado').innerText = 'Resultado:';
  document.getElementById('lista-historico').innerHTML = '';
}

function alternarModo() {
  document.body.classList.toggle('dark');
}

// Eventos
document.getElementById('soma').addEventListener('click', () => calcular('+'));
document.getElementById('subtrai').addEventListener('click', () => calcular('-'));
document.getElementById('multiplica').addEventListener('click', () => calcular('*'));
document.getElementById('divide').addEventListener('click', () => calcular('/'));
document.getElementById('limpar').addEventListener('click', limpar);
document.getElementById('modo').addEventListener('click', alternarModo);
