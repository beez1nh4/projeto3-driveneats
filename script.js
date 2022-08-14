function selecionarPrato(selecionado){
    const jaSelecionado = document.querySelector('.pratos .selecionado');
    const jaCheck = document.querySelector('.pratos .aparece');
    const alinhar = selecionado.children[0];
    const check = alinhar.children[4];

    if (jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    if (jaCheck !== null){
        jaCheck.classList.remove('aparece')
    }
    check.classList.add('aparece');
    selecionado.classList.add('selecionado');
}
function selecionarBebida(selecionado){
    const jaSelecionado = document.querySelector('.bebidas .selecionado');
    const jaCheck = document.querySelector('.bebidas .aparece');
    const alinhar = selecionado.children[0];
    const check = alinhar.children[4];

    if (jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    if (jaCheck !== null){
        jaCheck.classList.remove('aparece')
    }
    check.classList.add('aparece');
    selecionado.classList.add('selecionado');
}
function selecionarSobremesa(selecionado){
    const jaSelecionado = document.querySelector('.sobremesas .selecionado');
    const jaCheck = document.querySelector('.sobremesas .aparece');
    const alinhar = selecionado.children[0];
    const check = alinhar.children[4];

    if (jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    if (jaCheck !== null){
        jaCheck.classList.remove('aparece')
    }
    check.classList.add('aparece');
    selecionado.classList.add('selecionado');
}