let tipoPrato =  null;
let precoPrato = null;
let tipoBebida = null;
let precoBebida = null;
let tipoSobremesa = null;
let precoSobremesa = null;
let total = null;

function selecionarPrato(pratoX, tipoPratoX,  precoPratoX){

    const selecionado= document.querySelector(".opcoes-prato .selecionado");

    if(selecionado != null) {
        selecionado.classList.remove("selecionado");
        selecionado.classList.add("hidden");

    }
    //adicionar
    const adiciona = document.querySelector("."+pratoX);
    adiciona.classList.add("selecionado");
    adiciona.classList.remove("hidden");
 
    tipoPrato = tipoPratoX;
    precoPrato = precoPratoX;

    verificaBotao();
}
function selecionarBebida(bebidaX, tipoBebidaX, precoBebidaX){

    const selecionado = document.querySelector(".opcoes-bebida .selecionado");
    if(selecionado != null){
        selecionado.classList.remove("selecionado");
        selecionado.classList.add("hidden");
    }

    //adicionar
    const adiciona = document.querySelector("."+bebidaX);
    adiciona.classList.add("selecionado");
    adiciona.classList.remove("hidden");

    tipoBebida = tipoBebidaX;
    precoBebida = precoBebidaX;

    verificaBotao();
}
function selecionarSobremesa(sobremesaX, tipoSobremesaX, precoSobremesaX ){

    const selecionado = document.querySelector(".opcoes-sobremesa .selecionado");
    if(selecionado != null){
        selecionado.classList.remove("selecionado");
        selecionado.classList.add("hidden");
    }
    //adicionar
    const adiciona = document.querySelector("."+sobremesaX);
    adiciona.classList.add("selecionado");
    adiciona.classList.remove("hidden");

    tipoSobremesa = tipoSobremesaX;
    precoSobremesa = precoSobremesaX;

    verificaBotao();
}
function verificaBotao(){

    if((tipoPrato != null) && (tipoBebida != null) && (tipoSobremesa != null)){
        
        const botao = document.querySelector(".barra-enviar-pedido .fechar-pedido");
        botao.classList.add("enviar-selecionado");

        const alteraBotao = document.querySelector(".barra-enviar-pedido");
        alteraBotao.innerHTML = "<button class='fechar-pedido enviar-selecionado' onclick='ativarResumo()'>Enviar Pedido</button>";
    }
}
function ativarResumo(){

    const resumo = document.querySelector(".confirmar-pedido");
    if(resumo != null){
        resumo.classList.remove("desativado");
    }
    
    soma(precoPrato+precoBebida+precoSobremesa);

    const enviar = document.querySelector(".enviar-whatsapp");
    
    //Cria um novo resumo:divs, h3's e p's;
    const alteraresumo = document.querySelector(".escreve-resumo");

    alteraresumo.innerHTML = "<h3>Confirme seu pedido</h3><div class='confirma-comida'><p>"
    +tipoPrato+"</p><p>"+precoPrato.toString().replace('.',',')+
    "</p></div><div class='confirma-bebida'><p>"+tipoBebida+"</p><p>"
    +precoBebida.toString().replace('.',',')+"</p></div><div class='confirma-sobremesa'><p>"
    +tipoSobremesa+"</p><p >"+precoSobremesa.toString().replace('.',',')
    +"</p></div><div class='confirma-total'><p>Total: </p><p>R$ "
    +soma(precoPrato,precoBebida,precoSobremesa).toString().replace('.',',')+"</p></div>";
}
function soma(a,b,c ){
    let prato = parseFloat(a);
    let bebida = parseFloat(b);
    let comida = parseFloat(c);
    let total = (prato+bebida+comida);

    return total.toFixed(2);
}
function cancela(){
    const cancela = document.querySelector(".confirmar-pedido");
    if(cancela != null){
        cancela.classList.add("desativado");
    }
}   
function enviaOrdem(){
    let nome = prompt("Qual o seu nome?");
    let endereco  = prompt(nome + ", Qual é seu endereço? ");

    //Cria a  mensa gem e o link formatado para o whatsapp
    const mensagem = "Olá, gostaria de fazer um pedido:\n" 
    +"-Prato: " + tipoPrato 
    + "\n-Bebida: " + tipoBebida 
    + "\n-Sobremesa: "+ tipoSobremesa 
    + "\n*Total:  R$* " + soma(precoPrato, precoBebida, precoSobremesa).toString().replace('.',',')
    + "\n\n Nome: " + nome 
    + " \n Endereço: " + endereco;

    let url = 'https://wa.me/559281670267?text='+encodeURIComponent(mensagem);

    window.open(url);
}