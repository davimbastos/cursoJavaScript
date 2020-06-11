// var nome = "Davi Bastos";
// var idade = 23;
// var frase = "Desenvolvimento Web";
// console.log(nome);
// console.log(nome + " tem " + idade + " anos!");
// console.log(frase);
// console.log(frase.replace("Web","Mobile"));
// console.log(frase.toLowerCase());
// console.log(frase.toUpperCase());
// var lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
//lista.pop();
//console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" - "));

// var fruta = {
//     nome: "maçã",
//     cor: "vermelha"
// }

// var frutas = [
//     {
//         nome: "maçã",
//         cor: "vermelha"
//     },
//     {
//         nome:"uva",
//         cor: "roxo"
//     },
//     {
//         nome: "limão",
//         cor: "verde"
//     }
// ]

// console.log(frutas[1].cor);

// var idade = prompt("Qual a sua idade?");

// if (idade >= 18){
//     alert("Maior de idade");
// }
// else {
//     alert("Menor de idade");
// }

// var count = 0;

// while (count <= 5){
//     console.log(count);
//     count++;
// }

// var d = new Date();
// console.log(d.getDate());

function clicou(){
    msg = `<ul>
        <li>Banana</li>
        <li>Laranja</li>
        <li>Melancia</li>
    </ul>`
    document.getElementById("agr").innerHTML = msg;
    
}

function redirecionar(){
    window.open("https://google.com");
    //window.location.href = "https://google.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function change(elemento){
    console.log(elemento.value);
}