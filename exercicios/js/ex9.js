var a, b, opcao, resultado

a =parseFloat(prompt("Digite o primeiro número: "))
b =parseFloat(prompt("Digite o segundo número: "))

opcao = parseInt(prompt(
  "Escolha a operação:\n"+
  "1 - Soma\n"+
  "2 - Subtração\n"+
  "3 - Multiplicação\n"+
  "4 - Divisão"
))

switch (opcao){
    case 1:
        resultado =a+b
        alert("Resultado da soma: "+resultado)
        break
    case 2:
        resultado =a-b;
        alert("Resultado da subtração: "+resultado)
        break
    case 3:
        resultado =a*b
        alert("Resultado da multiplicação: "+resultado)
        break
    case 4:
        resultado = a/b
            alert("Resultado da divisão: "+resultado) 
        break
    default:
        alert("Opção inválida")
    
}
