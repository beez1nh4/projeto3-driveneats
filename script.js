let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let nomeDaPessoa;
let endereco;

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

let precoPratoNumero;
let precoBebidaNumero;
let precoSobremesaNumero;
let precoFinal;
function confirmarPedido(){
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        //pedir nome e endereço
        nomeDaPessoa = prompt('Qual seu nome?');
        endereco = prompt('Qual seu endereço?');

        //abrir a guia do pedido
        const confirmacao = document.querySelector('.confirmar');
        confirmacao.classList.add('aparece');

        //ligar o background
        const background = document.querySelector('.fundobranco');
        background.classList.add('aparece');

        //mostrar o pedido correto
        let precoPratoSemRS = precoPrato.replace('R$','');
        let precoPratoCorrigido = precoPratoSemRS.replace(',','.');
        precoPratoNumero = Number(precoPratoCorrigido);
        let precoBebidaSemRS = precoBebida.replace('R$','');
        let precoBebidaCorrigido = precoBebidaSemRS.replace(',','.');
        precoBebidaNumero = Number(precoBebidaCorrigido);
        let precoSobremesaSemRS = precoSobremesa.replace('R$','');
        let precoSobremesaCorrigido = precoSobremesaSemRS.replace(',','.');
        precoSobremesaNumero = Number(precoSobremesaCorrigido);
        const soma = precoPratoNumero + precoBebidaNumero + precoSobremesaNumero;
        precoFinal = soma.toFixed(2);

        const pedido = document.querySelector('.alinhar2');

        const pedidoPrato = pedido.children[1]
        const pedidoNomePrato = pedidoPrato.children[0]
        const pedidoPrecoPrato = pedidoPrato.children[1]
        pedidoNomePrato.innerHTML = `${prato}`
        pedidoPrecoPrato.innerHTML = `${precoPratoNumero.toFixed(2)}`

        const pedidoBebida = pedido.children[2]
        const pedidoNomeBebida = pedidoBebida.children[0]
        const pedidoPrecoBebida = pedidoBebida.children[1]
        pedidoNomeBebida.innerHTML = `${bebida}`
        pedidoPrecoBebida.innerHTML = `${precoBebidaNumero.toFixed(2)}`

        const pedidoSobremesa = pedido.children[3]
        const pedidoNomeSobremesa = pedidoSobremesa.children[0]
        const pedidoPrecoSobremesa = pedidoSobremesa.children[1]
        pedidoNomeSobremesa.innerHTML = `${sobremesa}`
        pedidoPrecoSobremesa.innerHTML = `${precoSobremesaNumero.toFixed(2)}`

        const pedidoTotal = pedido.children[4]
        const pedidoPrecoTotal = pedidoTotal.children[1]
        pedidoPrecoTotal.innerHTML = `${precoFinal}`
    }
}
function envioWpp(){
    let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${precoFinal}
    
    Nome: ${nomeDaPessoa}
    Endereço: ${endereco}`
    let link = 'https://wa.me/5511987067348?text='+encodeURIComponent(mensagem)
    window.open(link);
    }

function fechar(){
    //fechar a guia do pedido
    const confirmacao = document.querySelector('.confirmar');
    confirmacao.classList.remove('aparece');
    //fechar o background
    const background = document.querySelector('.fundobranco');
    background.classList.remove('aparece');
}