let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;

function selecionarPrato(selecionado){
    const jaSelecionado = document.querySelector('.pratos .selecionado');
    const jaCheck = document.querySelector('.pratos .aparece');
    const alinhar = selecionado.children[0];
    const check = alinhar.children[4];
    const nome = alinhar.children[1];
    const precoNome = alinhar.children[3];

    if (jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    if (jaCheck !== null){
        jaCheck.classList.remove('aparece');
    }
    check.classList.add('aparece');
    selecionado.classList.add('selecionado');
    prato = nome.innerHTML;
    precoPrato = precoNome.innerHTML;
    liberarFinalizar();
}
function selecionarBebida(selecionado){
    const jaSelecionado = document.querySelector('.bebidas .selecionado');
    const jaCheck = document.querySelector('.bebidas .aparece');
    const alinhar = selecionado.children[0];
    const check = alinhar.children[4];
    const nome = alinhar.children[1];
    const precoNome = alinhar.children[3];

    if (jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    if (jaCheck !== null){
        jaCheck.classList.remove('aparece');
    }
    check.classList.add('aparece');
    selecionado.classList.add('selecionado');
    bebida = nome.innerHTML;
    precoBebida = precoNome.innerHTML;
    liberarFinalizar();
}
function selecionarSobremesa(selecionado){
    const jaSelecionado = document.querySelector('.sobremesas .selecionado');
    const jaCheck = document.querySelector('.sobremesas .aparece');
    const alinhar = selecionado.children[0];
    const check = alinhar.children[4];
    const nome = alinhar.children[1];
    const precoNome = alinhar.children[3];

    if (jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    if (jaCheck !== null){
        jaCheck.classList.remove('aparece');
    }
    check.classList.add('aparece');
    selecionado.classList.add('selecionado');
    sobremesa = nome.innerHTML;
    precoSobremesa = precoNome.innerHTML;
    liberarFinalizar();
}
function liberarFinalizar(){
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botao = document.querySelector('.botaoSelecionar');
        botao.classList.add('botaofechar');
        botao.innerHTML= 'Fechar pedido';
    }
}

function envioWpp(){
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        let precoPratoSemRS = precoPrato.replace('R$','');
        let precoPratoCorrigido = precoPratoSemRS.replace(',','.');
        let precoPratoNumero = Number(precoPratoCorrigido);
        let precoBebidaSemRS = precoBebida.replace('R$','');
        let precoBebidaCorrigido = precoBebidaSemRS.replace(',','.');
        let precoBebidaNumero = Number(precoBebidaCorrigido);
        let precoSobremesaSemRS = precoPrato.replace('R$','');
        let precoSobremesaCorrigido = precoSobremesaSemRS.replace(',','.');
        let precoSobremesaNumero = Number(precoSobremesaCorrigido);
        const soma = precoPratoNumero + precoBebidaNumero + precoSobremesaNumero;
        const precoFinal = soma.toFixed(2);

        let mensagem = `Olá, gostaria de fazer o pedido: \n
        - Prato: ${prato}\n
        - Bebida: ${bebida}\n
        - Sobremesa: ${sobremesa}\n
        Total: R$ ${precoFinal}`

        let link = 'https://wa.me/?text='+encodeURIComponent(mensagem)
        window.open(link);
    }
}