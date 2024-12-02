const imagem = document.getElementsByClassName('tematico');

// Adicionando um evento a cada elemento
for (let i = 0; i < imagem.length; i++) {
    imagem[i].addEventListener('click', () => {
        alert('Tema selecionado, você será encaminhado para outra página.');
    });

    imagem[i].addEventListener('mouseenter', () => {
        imagem[i].style.opacity = 0.7; // Muda a opacidade ao passar o mouse
    });

    imagem[i].addEventListener('mouseleave', () => {
        imagem[i].style.opacity = 1; // Restaura a opacidade
    });
}