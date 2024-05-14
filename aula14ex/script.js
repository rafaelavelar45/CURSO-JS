function contar() {
  let n1 = document.getElementById("txtn1");
  let n2 = document.getElementById("txtn2");
  let passo = document.getElementById("txtp");
  let msg = document.getElementById("res");

  if (n1.value.length == 0 || passo.value.length == 0) {
    msg.innerHTML = "Impossivel contar!";
    window.alert("[ERRO] Faltam dados!");
  } else {
    msg.innerHTML = "Contando: ";
    let inicio = Number(n1.value);
    let fim = Number(n2.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("[ERRO] PASSO INVALIDO!! Considerando passo 1");
       p = 1
    }
    //CONTAGEM CRESCENTE
    if (inicio < fim) {
      for (let c = inicio; c <= fim; c += p) {
        msg.innerHTML += ` ${c} \u{1F449} `; //\u{1F603} forma de colocar emoji no JS
      }
      msg.innerHTML += `\u{1F3C1}`;
      //CONTAGEM DECRESCENTE
    } else {
      for (let c = inicio; c >= fim; c -= p) {
        msg.innerHTML += ` ${c} \u{1F449} `;
      }
      msg.innerHTML += `\u{1F3C1}`;
    }
  }
}
