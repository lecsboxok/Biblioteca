let biblioteca = [];


function cadastro(nome, autor, ano) {
    var livro = {
        titulo: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro)
}
function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    cadastro(nome, autor, ano);
    
    const livrosCadastrados = document.getElementById('numero');
    

}
function mostrarLivros() {
    // console.log(`resultado:${biblioteca[1].cadastro}`)
    // let resultado = (`${biblioteca[0, 1].autor}`)
    let resultado = "";
    let resultado2 = "";
    let resultado3 = "";

    for (let i = 0; i < biblioteca.length; i++) {

        resultado += biblioteca[i].titulo + "<br>";
        resultado2 += biblioteca[i].autor + "<br>";
        resultado3 += biblioteca[i].ano + "<br>";

    }

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("resultado2").innerHTML = resultado2;
    document.getElementById("resultado3").innerHTML = resultado3;

//CARROSSEL--------------------------------------------

    let imgIndice = 0;
    const IMAGENS = ['poster1.jpg', 'poster2.jpg', 'poster3.jpg', 'poster4.jpg'];
    const prevButton = document.getElementById('anterior');
    const nextButton = document.getElementById('proximo');

    var IMG = document.getElementById('carrosselImagem');

    function carregar() {
        IMG.src = IMAGENS[imgIndice];
    }

    prevButton.addEventListener('click', () => {
        if (imgIndice > 0) {
            --imgIndice
            // imgIndice = imgIndice - 1;
            carregar();
        }
    });

    nextButton.addEventListener('click', () => {
        var limite = (IMAGENS.length) - 1
        if (imgIndice < limite) {
            ++imgIndice
            // imgIndice = imgIndice + 1;
            carregar();
        }
    })
    carregar();


}


const cadatrartBtn = document.getElementById('adiciona');
const livrosCadastrados = document.getElementById('numero');
const mensagem = document.getElementById('mensagem');
const contador = document.getElementById('numero');

let contadorLivros = 0;

cadatrartBtn.addEventListener('click', () => {
    contadorLivros++;
    contador.textContent = contadorLivros;

    if (contadorLivros === 1) {
        mensagem.style.display = 'none'
        livrosCadastrados.style.display = 'block'
    }
});

cadatrartBtn.addEventListener('click', atualizarContador);


