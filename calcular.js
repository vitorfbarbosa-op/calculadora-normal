/*
Operadores Aritiméticos:
+ soma
- subtração
* multiplicação
/ divisão
++ incremento(soma mais 1)
-- decrimento(subtrai menos 1)

Operadores de Atribuição:
= igual
+= mais ou igual
-= menos ou igual
*= multiplicado ou igual
/= dividido ou igual

Operadores de Sequência:
+(serve para concatenar valores
    (string ou variaveis))
-(serve para subtrair valores
    (string ou variaveis))

Operadores de Comparação:
RETORNE TRUE (VERDADEIRO) OU FALSE(FALSO)

== (comparar dois valores)
=== (comparar valores e tipo de dado)
!= (diferente) de valores apenas
!== (comparar a diferença de valores
e tipo de dado)
< menor      > maior
<= menor ou igual      >= maior ou igual
*/
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let operacao = n1 + n2;
    document.getElementById("resultado")
    .innerHTML = operacao
    //alterar a cor do resultado caso for numero negativo
    if (operacao < 0){
        corResultado.style,backgroundColor =
        "red";
    }
    else {
        corResultado.style.backgroundColor =
        "lightgreen";
    };
}


function subtrair(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let operacao = n1 - n2;
    document.getElementById("resultado")
    .innerHTML = operacao;
}
function multiplicar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let operacao = n1 * n2;
    document.getElementById("resultado")
    .innerHTML = operacao;
}
function dividir(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let operacao = n1 / n2;
    document.getElementById("resultado")
    .innerHTML = operacao;
}
function limpar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado"). innerHTML = "---";
    document.getElementById("resultado") 
    .style.backgroundColor = "lightgreen";
}