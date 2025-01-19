// Capturando os elementos
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Função para adicionar texto ao elemento
function adicionarTexto(elemento, texto) {
    elemento.innerText = texto;
}

// Função para adicionar conteúdo HTML ao elemento
function adicionarHTML(elemento, html) {
    elemento.innerHTML = html;
}

// Adicionando texto ao h1 e ao link
adicionarTexto(titulo, 'Bem-vindo ao Projeto HTML e JS');
adicionarTexto(link, 'Acesse a Prozeducação');

// Adicionando itens à lista não ordenada
adicionarHTML(listaNaoOrdenada, `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`);

// Adicionando itens com links à lista ordenada
adicionarHTML(listaOrdenada, `
    <li><a href='https://google.com' target='_blank'>Google</a></li>
    <li><a href='https://github.com' target='_blank'>GitHub</a></li>
    <li><a href='https://stackoverflow.com' target='_blank'>Stack Overflow</a></li>
`);

// Função para realizar as quatro operações básicas
definirOperacoesBasicas = (num1, num2) => {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} x ${num2} = ${num1 * num2}`);
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
};

// Adicionando título ao site (Método Simples)
const tituloSite = document.createElement('h1');
tituloSite.id = 'titulo';
tituloSite.innerText = 'Loja Virtual - Produtos em Destaque';
document.body.appendChild(tituloSite);

// Adicionando produto (Método Complexo)
const produto = document.createElement('div');
produto.className = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Smartphone XYZ';
produto.appendChild(nomeProduto);

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Um smartphone moderno com recursos incríveis para o seu dia a dia.';
produto.appendChild(descricaoProduto);

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 2.499,00';
produto.appendChild(precoProduto);

const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150';
imagemProduto.alt = 'Imagem do Smartphone XYZ';
produto.appendChild(imagemProduto);

// Adicionando o produto ao body
document.body.appendChild(produto);
