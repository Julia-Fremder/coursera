//função simples - executa alguma coisa.
function funcao01(){
    var x = document.getElementById('valor1').value;
    var resultado = x * 2;

    alert('O dobro é: ' + resultado);
}
//função com parâmetros
function funcao02(numero){
    var x = parseFloat(numero);
    var resultado = x * 2;

    alert('O dobro de ' + numero + ' é ' + resultado)
}

function funcao03 (x, y){
    var resultado = parseFloat(x) * parseFloat(y);
    alert('o resultado é: ' + resultado);
}

//funcao03(4, 9);
//return true or false, aplica uma condição para a função ser executada, por exemplo o link 'clique aqui'.
//funções que retornam dados
function funcao04(){
    var x = 4;
    var y = 33;
    var z = x + y;

    return z;
}
//alert(funcao04());
//var n1 = 4 + funcao04();
function funcao05(){
    var v1= document.getElementById('valor1').value;

    if (v1=='123'){
        return true;
    }else {
        return false;
    }
}
function funcao06(){
    if (funcao05()){
        alert('Executa a ação');
    } else {
        alert('Não Executa');
    }
}