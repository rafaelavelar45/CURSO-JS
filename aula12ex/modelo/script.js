function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora <= 12) {
    img.src = "imagens/manha.png";
    document.body.style.background = "#BCB7B3";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "imagens/tarde.png";
    document.body.style.background = "#D4976B";
  } else {
    //BOA NOITE
    img.src = "imagens/noite.png";
    document.body.style.background = "#254577";
  }
}
