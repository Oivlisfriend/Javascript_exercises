function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    /*form.onsubmit = function(evento){
      evento.preventDefault();  
    } ;*/

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const altura = document.querySelector('.altura');
        const peso = document.querySelector('.peso');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value,
        });
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value} </p>`,
            console.log(pessoas);
    }
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();