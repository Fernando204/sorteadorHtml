function sortear() {
  var rep = document.getElementById("simR")
  var Nrep = document.getElementById("nãoR")
var primeiroN = parseFloat(document.getElementById('começo').value)
var segundoN = parseFloat(document.getElementById('fim').value)
var quantidade = parseFloat(document.getElementById('quantidade').value)
var resultado = document.getElementById('res') 
var array = [];
for(let i=primeiroN; i<=segundoN; i++){
  array.push(i);
}
if(primeiroN === false || segundoN === 0 || quantidade === 0){
  alert('num vai da')
}
if(rep.checked){
let elementoAleatorio = []
let tamanhoDoArray = array.length;
for(let j=0; j<quantidade; j++){
let indiceAleatorio = Math.floor(Math.random() * tamanhoDoArray);
elementoAleatorio.push(array[indiceAleatorio])}
elementoAleatorio.sort((a, b) => a - b);
resultado.innerHTML =  elementoAleatorio.join(', ');} else if(Nrep.checked) {
  let elementoAleatorio = []
let tamanhoDoArray = array.length;
for(let j=0; j<quantidade; j++){


let indiceAleatorio = Math.floor(Math.random() * tamanhoDoArray);

 
elementoAleatorio.push(array[indiceAleatorio]);

array.splice(indiceAleatorio, 1);
tamanhoDoArray--;

}
elementoAleatorio.sort((a, b) => a - b);
resultado.innerHTML =  elementoAleatorio.join(', ');
console.log(elementoAleatorio.join(", "))
} else {
  alert('num vai da')
}
}
