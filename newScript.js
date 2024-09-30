const sortear = ()=>{
    const repetir = document.getElementById('simR');
    const nãoRepetir = document.getElementById('nãoR');
    const primeiroN = parseFloat(document.getElementById('começo').value);
    const final = parseFloat(document.getElementById('fim').value);
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const resultado = document.getElementById('res');

    let numbers = [];

    if(isNaN(primeiroN) || isNaN(quantidade) || isNaN(final) || primeiroN > final ){

        alert('entrada invalida');

    } else if(repetir.checked){

        while(numbers.length < quantidade){

            let numero = Math.floor(Math.random() * (final + 1));
            if(numero >= primeiroN){
                numbers.push(numero);
            }
        }

    } else if(nãoRepetir.checked){

        if((final - primeiroN + 1)>=quantidade){

            while(numbers.length < quantidade){

                let numero = Math.floor(Math.random() * (final + 1));
                if(numero >= primeiroN && !numbers.includes(numero)){
                numbers.push(numero);
                }
            }
        } else{
            alert('quantidade insuficiente')
        }
       

    }

    numbers.sort((a, b) => a - b);
    resultado.innerHTML = numbers.join(', ');
}