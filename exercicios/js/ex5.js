var n1, n2, soma, soma2
n1=parseInt(prompt("Digite o valor 1: "))
n2=parseInt(prompt("Digite o valor 2: "))

soma= n1+n2
if(soma>20){
    soma2= soma+8
    alert("A soma +8: "+soma2)
}
if(soma<=20){
    soma2= soma-20
    alert("A soma -5: "+soma2)
}