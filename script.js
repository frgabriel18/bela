const resposta = document.getElementById("resposta");

function analisar() {
  resposta.innerHTML = "🔍 Analisando Bela...";

  setTimeout(() => {
    resposta.innerHTML = `
      <strong>Relatório concluído:</strong><br>
      Nome: Bela<br>
      Nível de paciência: desconhecido<br>
      Probabilidade de achar esse site estranho: 97%<br>
      Diagnóstico: usuária aparentemente normal.
    `;
  }, 1200);
}

function piada() {
  const fatos = [
    "As impressoras conseguem sentir quando você está com pressa.",
    "Esse botão foi programado com mais esforço do que deveria.",
    "Você acaba de perder 3 segundos da sua vida.",
    "Estudos que eu inventei afirmam que 87% das pessoas gostam de pão.",
    "O desenvolvedor deste site provavelmente deveria estar estudando.",
    "A palavra 'Bela' tem 4 letras. Informação revolucionária.",
    "Este site possui zero anúncios. Aproveite enquanto dura.",
    "Se você apertar esse botão 100 vezes, nada de especial acontece.",
  ];

  const sorteado = fatos[Math.floor(Math.random() * fatos.length)];
  resposta.innerHTML = "📢 " + sorteado;
}

function bugar() {
  resposta.innerHTML = "⚠️ ERRO CRÍTICO: iniciando autodestruição...";

  let contador = 3;

  const intervalo = setInterval(() => {
    resposta.innerHTML = `💥 Autodestruição em ${contador}...`;
    contador--;

    if (contador < 0) {
      clearInterval(intervalo);

      document.querySelector(".janela").style.transform = "rotate(2deg)";

      resposta.innerHTML = `
        <strong>KKKKKKKK zuera caralho.</strong><br>
        O orçamento não permitiu implementar
        uma autodestruição de verdade.
      `;

      setTimeout(() => {
        document.querySelector(".janela").style.transform = "rotate(0deg)";
      }, 1000);
    }
  }, 800);
}
