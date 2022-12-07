let name = prompt ("Olá! Digite o seu nome:");
alert("Bem-vindo(a) ao Trivia Filmes, "+ name +"!");
window.confirm ("Você quer jogar?");

//declaramos as variáveis
const buttonOne = document.getElementById("validaQ1");
const buttonTwo = document.getElementById("validaQ2");
const buttonThree = document.getElementById("validaQ3");
const obiWan = document.getElementById("a1").value;
const darthVader = document.getElementById("a2").value;
const mestreYoda = document.getElementById("a3").value;
const titanic1 = document.getElementById("a4").value;
const titanic2 = document.getElementById("a5").value;
const titanic3 = document.getElementById("a6").value;
const merylStreep = document.getElementById("a7").value;
const janeFonda = document.getElementById("a8").value;
const nicoleKidman = document.getElementById("a9").value;

//usamos a function para dar ação às variáveis
function validaQ1() {
//método usado para conferir o valor ou resposta selecionada pelo usuário
   if(document.querySelector('input[name="answer"]:checked').value === darthVader) {
     alert("Resposta correta! 🎉")
  } 
   else {
    alert("Resposta incorreta 😔")
   }
};

function validaQ2() {
  console.log(titanic2);
  if(document.querySelector('input[name="answer2"]:checked').value === titanic1) {
    alert("Resposta correta! 🎉")
  } 
  else {
    alert("Resposta incorreta 😔")
  }

};

function validaQ3() {

  if(document.querySelector('input[name="answer3"]:checked').value === merylStreep) {
    alert("Resposta correta! 🎉")
  }
  else {
    alert("Resposta incorreta 😔")
  }
};
  
//método usado para detectar o click no botão e executar a função depois da vírgula
buttonOne.addEventListener("click", validaQ1);
buttonTwo.addEventListener("click", validaQ2);
buttonThree.addEventListener("click", validaQ3);

