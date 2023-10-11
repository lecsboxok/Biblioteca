let biblioteca = [];
let carregandoImg = [];
let imgIndice = 0; // Inicializado como -1
const IMAGENS = ['IMG/livro1.jpg', 'IMG/livro2.jpg', 'IMG/livro3.jpg', 'IMG/livro4.jpg'];

function cadastro(nome, autor, ano) {
    var livro = {
        titulo: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro);

    if (biblioteca.length <= IMAGENS.length) {
        carregandoImg.push(IMAGENS[biblioteca.length - 1]);
        imgIndice = biblioteca.length - 1;
        carregar();
    }
    atualizarLivro();
    document.querySelector('.carrossel').style.display = 'block';
}

function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    cadastro(nome, autor, ano);
}

function mostrarLivros() {
    let resultado = "";

    for (let i = 0; i < biblioteca.length; i++) {
        resultado += `Título: ${biblioteca[i].titulo} - Autor: ${biblioteca[i].autor} - Ano: ${biblioteca[i].ano}<br>`;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function deletar() {
    biblioteca.length = 0;
    carregandoImg.length = 0;
    document.querySelector('.carrossel').style.display = 'none';
    document.getElementById("resultado").innerHTML = ""; // Limpe o resultado na tela
    atualizarLivro()
}


function atualizarLivro() {
    document.getElementById('numero').textContent = biblioteca.length;
}

const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('proximo');
var IMG = document.getElementById('carrosselImagem');

function carregar() {
    IMG.src = carregandoImg[imgIndice];
}

prevButton.addEventListener('click', () => {
    if (imgIndice === 0) {
        imgIndice = carregandoImg.length - 1;
    } else {
        --imgIndice;
    }
    carregar();
});

nextButton.addEventListener('click', () => {
    if (imgIndice === carregandoImg.length - 1) {
        imgIndice = 0;
    } else {
        ++imgIndice;
    }
    carregar();
});
