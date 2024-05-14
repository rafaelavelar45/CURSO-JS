function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fano.value > ano || fano.value.length == 0) {
    window.alert("ATENÇÃO DIGITE OS DADOS CORRETAMENTE");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    var genero = "";
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "imagens/criançahomem.png");
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "imagens/jovemhomem.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "imagens/adultohomem.png");
      } else {
        //idoso
        img.setAttribute("src", "imagens/homemidoso.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "imagens/criançamulher.png");
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "imagens/jovemmulher.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "imagens/mulheradulta.png");
      } else {
        //idoso
        img.setAttribute("src", "imagens/mulheridosa.png");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
