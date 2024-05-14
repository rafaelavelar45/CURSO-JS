let n1 = document.getElementById("txt");
let tab = document.getElementById("tab");
let msg = document.getElementById("msg");
let but = document.getElementById("butt");
let butt = document.getElementById("fim");
let valores = [];

function Incaixa(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function Inlista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

but.addEventListener("click", function () {
  if (Incaixa(n1.value) && !Inlista(n1.value, valores)) {
    valores.push(Number(n1.value));
    let item = document.createElement("option");
    item.text = `Número ${n1.value} Adicionado!!`;
    tab.appendChild(item);
  } else {
    window.alert("Número invalido!!");
  }
  n1.focus();
  msg.innerHTML = "";
});

butt.addEventListener("click", function () {
  if (valores.length == 0) {
    window.alert("Adiciona números para analisar!!");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = valores[0];
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    let media = soma / 2;
    msg.innerHTML = "";
    msg.innerHTML += ` <p>O total de números dentro da lista é ${tot}</p>`;
    msg.innerHTML += `<p>O maior valor da lista é ${maior}</p>`;
    msg.innerHTML += `<p>O menor valor da lista é ${menor}</p>`;
    msg.innerHTML += `<p>A soma entre esses valores é ${soma}</p>`;
    msg.innerHTML += `A media entre esses números são ${media}`;
  }
});
