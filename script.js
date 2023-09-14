var btnSomar = document.getElementById('btnSomar');
btnSomar.addEventListener('click', somar);

function somar() {
    var c1 = document.getElementById('txt01');
    var c2 = document.getElementById('txt02');
    var result = document.getElementById('resultado');

    
    var num1 = parseFloat(c1.value);
    var num2 = parseFloat(c2.value);

    var resultado = num1 + num2;
    result.innerText = "A soma é: " + resultado;
}

var btnSubtrai = document.getElementById('btnSubtrai');
btnSubtrai.addEventListener('click', subtrair);

function subtrair () {
    var c1 = document.getElementById('txt01');
    var c2 = document.getElementById('txt02');
    var result = document.getElementById('resultado');

    var num1 = parseFloat(c1.value);
    var num2= parseFloat(c2.value);

    var resultado = num1 - num2;
    result.innerText= "A subtração é: " + resultado;
}

var btnMultiplica = document.getElementById('btnMultiplica');
btnMultiplica.addEventListener('click', multiplicar);

function multiplicar () {
    var c1 = document.getElementById('txt01');
    var c2 = document.getElementById('txt02');
    var result = document.getElementById('resultado');

    var num1 = parseFloat(c1.value);
    var num2= parseFloat(c2.value);

    var resultado = num1 * num2;
    result.innerText= "A multiplicação é: " + resultado;
} 

var btnDivide = document.getElementById('btnDivide');
btnDivide.addEventListener('click', dividir);

function dividir () {
    var c1 = document.getElementById('txt01');
    var c2 = document.getElementById('txt02');
    var result = document.getElementById('resultado');

    var num1 = parseFloat(c1.value);
    var num2= parseFloat(c2.value);

    var resultado = num1 / num2;
    result.innerText= "A divisão é: " + resultado;
} 

var btnLimpa = document.getElementById('btnLimpa');
btnLimpa.addEventListener('click', limpar);

function limpar () {
    document.getElementById ('txt01').value= '';
    document.getElementById ('txt02').value= '';
    var result = document.getElementById('resultado');
    
    var resultado = '';
    result.innerText="Resultado";
}
