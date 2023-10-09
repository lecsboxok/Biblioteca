let biblioteca = [];
let carregandoImg = [];
let imgIndice = 0;
const IMAGENS = ['poster1.jpg', 'poster2.jpg', 'poster3.jpg', 'poster4.jpg'];

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

    document.querySelector('.carrossel').style.display = 'block';
}

function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    cadastro(nome, autor, ano);
}

function mostrarLivros() {
    // console.log(`resultado:${biblioteca[1].cadastro}`)
    // let resultado = (`${biblioteca[0, 1].autor}`)
    let resultado = "";

    for (let i = 0; i < biblioteca.length; i++) {

        resultado += (`${biblioteca[i].titulo} - ${biblioteca[i].autor} - ${biblioteca[i].ano}`);

    }
    document.getElementById("resultado").innerHTML = resultado;
}

function deletar() {
    biblioteca.length = ''
    carregandoImg = ''
    document.querySelector('.carrossel').style.display = 'none';
    resultado = ''
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
        // imgIndice = imgIndice + 1;
    } else {
        ++imgIndice;
    }
    carregar();
});