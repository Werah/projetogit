let indiceAtual = 0;

function mudarItem(direcao) {
    const itens = document.querySelectorAll('.carrossel-item');
    const totalItens = itens.length;
    const carrosselItens = document.querySelector('.carrossel-itens');

    indiceAtual = (indiceAtual + direcao + totalItens) % totalItens;
    carrosselItens.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

setInterval(() => {
    mudarItem(1);
}, 5000);