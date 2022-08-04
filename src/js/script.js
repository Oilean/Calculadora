// darkmode
const body = document.querySelector('body')
const dark = document.getElementById('calculadora')
const rodape = document.getElementById('rodape')

const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('ativado');
    body.classList.toggle('ativado');
    dark.classList.toggle('ativado');
    rodape.classList.toggle('ativado');
}


// calculadora
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);

    }else{
        document.getElementById('resultado').innerHTML = "Error"
    }
}
