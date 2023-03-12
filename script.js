
var nome=prompt("Digite o seu nome: ");
var senha=prompt("Digite a sua senha: ");
var ID=prompt("Digite o seu ID: ");
var dinheiro= ID-1975;


veri = (nome == "César César" && senha=="Fernando9" && ID < 2725 && ID > 1975);




if (veri){
  
  var ID2=dinheiro+1975;
  
  document.getElementById("dd").innerHTML="Seu ID: "+ID2;
  nom=document.getElementById("nome")
 nom.append(nome);
dn= document.getElementById("dn")
 dn.innerHTML="Seu dinheiro: <mark>"+dinheiro+"$</mark>";
  div=document.getElementById("all");
  div.style.display="block";
}
else{
 alert("Login não encontrado");
  document.getElementById("erro").innerHTML="<a href='https://wa.me/+244930662522'>Fale comigo pelo Whatsapp</a>";
}  

function add(){
  alert("Você ganhou mais 1$")
  
  dinheiro += 1;
  let k= dinheiro+1975;
  alert("Lembre-se, o seu ID é "+k);
  document.getElementById("dd").innerHTML="Seu ID: "+k;
  
  dn.innerHTML="Seu dinheiro: <mark>"+dinheiro+"$</mark>";
}
var res=9000-dinheiro;
function retirar(){
  verifi= (dinheiro >= 9000) ? iban=prompt("Digite o seu IBAN: "): alert("Você ainda não tem dinheiro suficiente para retirar, o valor mínimo de retirada é 9000$, ainda lhe falta "+res+"$");
} 


function tirar(){
  document.getElementById("login").style.display="none";
  
}
  




