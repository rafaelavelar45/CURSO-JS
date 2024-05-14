var idade = 22;
console.log(`Você tem ${idade} anos!!`)
if (idade < 16) {
  console.log("Não vota");
} else if (idade >= 16 && idade < 18 || idade >= 65) {
  // nao tem a necessidade de dizer que idade >= 16 pois no codigo acima de explica isso  {
  console.log("Voto opcional!!");
} else if (idade >= 18) {
  console.log("Voto obrigatorio!!");
}
