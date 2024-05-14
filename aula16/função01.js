function parinp(n) { // parametro formal
  if (n % 2 == 0) {
    return "Par!";
  } else {
    return "Impar!";
  }
}

let res = parinp(223); // chamada da função 223 é o parametro
console.log(res);
