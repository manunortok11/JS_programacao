var nome,idade

nome=prompt("Digite seu nome: ")
idade=parseInt(prompt("Digite sua idade: "))

if(idade>=18){
    alert(nome+" voce já pode tentar tirar sua CNH")
}else{
    alert(nome+ "voce ainda nao pode tirar sua CNH")
}