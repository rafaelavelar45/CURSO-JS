var agora = new Date();
var diasem = agora.getDay();
//break e obrigatio no stwich, e so funciona com números e inteiros e string o seu uso e mais utlizados em momentos pontuais e para intervalos uso o if
switch (diasem) {
  case 0:
    console.log("Domingo");
    break;

  case 1:
    console.log("Segunda-feira");
    break;

  case 2:
    console.log("Terça-feira");
    break;

  case 3:
    console.log("Quarta-feira");
    break;

  case 4:
    console.log("Quinta-feira");
    break;

  case 5:
    console.log("Sexta-feira");
    break;

  case 6:
    console.log("Sábado");
    break;

  default:
    console.log("[ERRO] Dia invalido!!");
    break;
}
