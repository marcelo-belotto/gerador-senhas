var resultado = document.querySelector('#resultado');
var comprimentoS;

function gerar() {
  comprimentoS = document.getElementById('numeroC').valueAsNumber;
  console.log(comprimentoS);
  if(comprimentoS < 6 || isNaN(comprimentoS)){
    comprimentoS = 6;
    document.getElementById('numeroC').valueAsNumber = comprimentoS;
  }
  aux = "";
  var i = 0;
  while (i < comprimentoS) {
    if (aux.length < comprimentoS){
      aux += String.fromCharCode(limites());
      i++;
    }
  }
  resultado.innerHTML = "";
  resultado.innerHTML += `<p>Senha Gerada: `;
  resultado.innerHTML += `<strong style="font-size: 30px;">${aux}</strong></p>`;
  
}

function limites() {
  var posicao = Math.floor(Math.random() * 127);
  while(posicao <= 33 || posicao >= 126 || posicao === 60 || posicao === 62){
    posicao = Math.floor(Math.random() * 127);
  }
  return posicao;
}
