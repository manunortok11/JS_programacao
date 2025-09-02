var n1, n2, n3, n4, media, freq

n1=parseInt(prompt("Digite sua nota 1: "))
n2=parseInt(prompt("Digite sua nota 2: "))
n3=parseInt(prompt("Digite sua nota 3: "))
n4=parseInt(prompt("Digite sua nota 4: "))
freq=parseInt(prompt("Digite seu percentual de frequencia: "))

media=(n1+n2+n3+n4)/4
if(media>7 && freq>75){
    alert("Sua média foi maior ou igual a 7, e sua frequencia superior a 75% portanto você foi aprovado")
}
if(media<7 && freq<75){
    alert("Sua média nao foi suficiente, e sua frequencia também, você está reprovado.")
}
if(media>=7 && freq<75){
    alert("Você deve realizar o exame para ser aprovado.")
}