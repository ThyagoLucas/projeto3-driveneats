
let tipoPrato =  null;
let precoPrato = null;
let tipoBebida = null;
let precoBebida = null;
let tipoSobremesa = null;
let precoSobremesa = null;


function variaveispedido(){

}

function selecionarPrato(pratoX, tipoPratoX, precoPratoX){

    const selecionaP = document.querySelector(".selecionado");

    if(selecionaP != null){
        
        selecionaP.classList.remove("selecionado");
    }


    //adicionar
    const adicionaP = document.querySelector("."+pratoX);
    adicionaP.classList.add("selecionado");

    tipoPrato = tipoPratoX;
    precoPrato = precoPratoX;
   
}



function selecionarBebida(bebidaX, tipoBebidaX, precoBebidaX ){

    const selecionaB = document.querySelector(".opcoes-bebida .selecionado");

    if(selecionaB != null){
        
        selecionaB.classList.remove("selecionado");
    }

    //adicionar
    const adicionaB = document.querySelector("."+bebidaX);
    adicionaB.classList.add("selecionado");

    tipoBebida = tipoBebidaX;
    precoBebida = precoBebidaX;
    
}


