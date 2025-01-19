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
