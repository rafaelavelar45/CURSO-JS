var n1 = document.getElementById("n1");
var tab = document.getElementById("txtn1");
var res = document.getElementById("msg");
var valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(n1.value) && !inLista(n1.value, valores)) {
    valores.push(Number(n1.value));
    let item = document.createElement("option");
    item.text = `Valor ${n1.value} adicionado.`;
    tab.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor invalido ou já encontrado na lista.");
  }
  n1.value = "";
  n1.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let tot = valores.length;

    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p> `;
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`;
  }
}
