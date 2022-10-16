let prato;
let bebida;
let sobremesa;
let pratoSelecionado = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;
let valorPrato;
let valorBebida;
let valorSobremesa;
let valorTotal;
let mensagem;

function escolherPrato1(){

    document.getElementById("prato1").style.borderColor = "#32B72F";
    document.getElementById("checkPrato1").style.display = "flex";
    document.getElementById("prato2").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato2").style.display = "none";
    document.getElementById("prato3").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato3").style.display = "none";
    document.getElementById("prato4").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato4").style.display = "none";

    pratoSelecionado = true;
    valorPrato = 26.9;
    prato = "Frango Yin Yang";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherPrato2(){

    document.getElementById("prato1").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato1").style.display = "none";
    document.getElementById("prato2").style.borderColor = "#32B72F";
    document.getElementById("checkPrato2").style.display = "flex";
    document.getElementById("prato3").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato3").style.display = "none";
    document.getElementById("prato4").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato4").style.display = "none";

    pratoSelecionado = true;
    valorPrato = 19.9;
    prato = "Strogonoff de carne";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherPrato3(){

    document.getElementById("prato1").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato1").style.display = "none";
    document.getElementById("prato2").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato2").style.display = "none";
    document.getElementById("prato3").style.borderColor = "#32B72F";
    document.getElementById("checkPrato3").style.display = "flex";
    document.getElementById("prato4").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato4").style.display = "none";

    pratoSelecionado = true;
    valorPrato = 24.9;
    prato = "Salada Caesar";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }
}

function escolherPrato4(){

    document.getElementById("prato1").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato1").style.display = "none";
    document.getElementById("prato2").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato2").style.display = "none";
    document.getElementById("prato3").style.borderColor = "#FFFFFF";
    document.getElementById("checkPrato3").style.display = "none";
    document.getElementById("prato4").style.borderColor = "#32B72F";
    document.getElementById("checkPrato4").style.display = "flex";

    pratoSelecionado = true;
    valorPrato = 34.9;
    prato = "Risoto de camarão";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherBebida1(){
    document.getElementById("bebida1").style.borderColor = "#32B72F";
    document.getElementById("checkBebida1").style.display = "flex";
    document.getElementById("bebida2").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida2").style.display = "none";
    document.getElementById("bebida3").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida3").style.display = "none";
    document.getElementById("bebida4").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida4").style.display = "none";

    bebidaSelecionada = true;
    valorBebida = 5;
    bebida = "Coca-Cola";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherBebida2(){

    document.getElementById("bebida1").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida1").style.display = "none";
    document.getElementById("bebida2").style.borderColor = "#32B72F";
    document.getElementById("checkBebida2").style.display = "flex";
    document.getElementById("bebida3").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida3").style.display = "none";
    document.getElementById("bebida4").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida4").style.display = "none";

    bebidaSelecionada = true;
    valorBebida = 7;
    bebida = "Suco de laranja";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherBebida3(){

    document.getElementById("bebida1").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida1").style.display = "none";
    document.getElementById("bebida2").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida2").style.display = "none";
    document.getElementById("bebida3").style.borderColor = "#32B72F";
    document.getElementById("checkBebida3").style.display = "flex";
    document.getElementById("bebida4").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida4").style.display = "none";

    bebidaSelecionada = true;
    valorBebida = 3;
    bebida = "Água sem gás";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }
}

function escolherBebida4(){

    document.getElementById("bebida1").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida1").style.display = "none";
    document.getElementById("bebida2").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida2").style.display = "none";
    document.getElementById("bebida3").style.borderColor = "#FFFFFF";
    document.getElementById("checkBebida3").style.display = "none";
    document.getElementById("bebida4").style.borderColor = "#32B72F";
    document.getElementById("checkBebida4").style.display = "flex";

    bebidaSelecionada = true;
    valorBebida = 3.5;
    bebida = "Água sem gás";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherSobremesa1(){

    document.getElementById("sobremesa1").style.borderColor = "#32B72F";
    document.getElementById("checkSobremesa1").style.display = "flex";
    document.getElementById("sobremesa2").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa2").style.display = "none";
    document.getElementById("sobremesa3").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa3").style.display = "none";
    document.getElementById("sobremesa4").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa4").style.display = "none";

    sobremesaSelecionada = true;
    valorSobremesa = 8;
    sobremesa = "Pudim";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherSobremesa2(){

    document.getElementById("sobremesa1").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa1").style.display = "none";
    document.getElementById("sobremesa2").style.borderColor = "#32B72F";
    document.getElementById("checkSobremesa2").style.display = "flex";
    document.getElementById("sobremesa3").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa3").style.display = "none";
    document.getElementById("sobremesa4").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa4").style.display = "none";

    sobremesaSelecionada = true;
    valorSobremesa = 18;
    sobremesa = "Petit Gateau";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherSobremesa3(){

    document.getElementById("sobremesa1").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa1").style.display = "none";
    document.getElementById("sobremesa2").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa2").style.display = "none";
    document.getElementById("sobremesa3").style.borderColor = "#32B72F";
    document.getElementById("checkSobremesa3").style.display = "flex";
    document.getElementById("sobremesa4").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa4").style.display = "none";

    sobremesaSelecionada = true;
    valorSobremesa = 10;
    sobremesa = "Quindim";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function escolherSobremesa4(){

    document.getElementById("sobremesa1").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa1").style.display = "none";
    document.getElementById("sobremesa2").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa2").style.display = "none";
    document.getElementById("sobremesa3").style.borderColor = "#FFFFFF";
    document.getElementById("checkSobremesa3").style.display = "none";
    document.getElementById("sobremesa4").style.borderColor = "#32B72F";
    document.getElementById("checkSobremesa4").style.display = "flex";

    sobremesaSelecionada = true;
    valorSobremesa = 11;
    sobremesa = "Torta de bis";

    if(pratoSelecionado && bebidaSelecionada && sobremesa){
        document.getElementById("button").style.display = "none";
        document.getElementById("button-done").style.display = "flex";
    }

}

function fecharPedido(){

    valorTotal = (valorPrato+valorBebida+valorSobremesa).toFixed(2);

    mensagem = "Olá, gostaria de fazer o pedido:\n"
    +"- Prato: " + prato
    +"\n- Bebida: " + bebida
    +"\n- Sobremesa: " + sobremesa 
    +"\nTotal: " + valorTotal;

    window.open("https://wa.me/+5547988352587?text="+encodeURIComponent(mensagem));

}