function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        clearDisplay() {
            this.display.value = '';
        },
        inicia() {
            this.cliqueBotoes();
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        cliqueBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num'))
                    this.btnParaDisplay(el.innerText);
                else if (el.classList.contains('btn-clear'))
                    this.clearDisplay();
                else if (el.classList.contains('btn-del'))
                    this.apagaUm();
                else if (el.classList.contains('btn-eq')) {
                    const resultado = eval(this.display.value);
                    this.display.value = resultado;
                }
            }.bind(this));
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();