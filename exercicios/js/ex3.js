var n1, n2, n3, n4, media

n1=parseInt(prompt("Digite sua nota 1: "))
n2=parseInt(prompt("Digite sua nota 2: "))
n3=parseInt(prompt("Digite sua nota 3: "))
n4=parseInt(prompt("Digite sua nota 4: "))

media=(n1+n2+n3+n4)/4
if(media>7){
    alert("Sua média foi maior ou igual a 7, portanto você foi aprovado")
}
if(media<7){
    alert("Sua média nao foi suficiente, está reprovado.")
}