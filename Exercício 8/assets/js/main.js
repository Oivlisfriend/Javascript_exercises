const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
function criaLi() {
    const li = document.createElement('li');
    return li;
}
function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar este elemento');
    li.appendChild(botaoApagar);
}
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode !== 13 || !inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});
function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}
function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    criarBotaoApagar(li);
    tarefas.appendChild(li);
    salvarTarefas();
    limparInput();
}
btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});
document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }

});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    console.log(listaTarefas);
    for (let tarefa of listaTarefas)
        criarTarefa(tarefa);

}
adicionaTarefasSalvas();