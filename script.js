let biblioteca = [];
let carregandoImg = [];
let imgIndice = 0; // Inicializado como -1
const IMAGENS = ['poster1.jpg', 'poster2.jpg', 'poster3.jpg', 'poster4.jpg'];

function cadastro(nome, autor, ano) {
    var livro = {
        titulo: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro);

    if (imgIndice < IMAGENS.length) {
        carregandoImg.push(IMAGENS[imgIndice]);
    }

    imgIndice = biblioteca.length - 1;
    carregar();
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
        resultado += `${biblioteca[i].titulo} - ${biblioteca[i].autor} - ${biblioteca[i].ano}<br>`;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function deletar() {
    biblioteca.length = 0;
    carregandoImg.length = 0;
    document.querySelector('.carrossel').style.display = 'none';
    document.getElementById("resultado").innerHTML = ""; // Limpe o resultado na tela
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
