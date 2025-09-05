function addValorDisplay(valor) {
    const display = document.getElementById('display');
    if (display) {
        display.value += valor;
        display.classList.remove('erro');
        display.focus();
    } else {
        console.error("Elemento #display não encontrado.");
    }
}

function apagarDisplay() {
    const display = document.getElementById('display');
    if (display) {
        display.value = '';
        display.classList.remove('erro');
    } else {
        console.error('Elemento #display não encontrado.');
    }
}

function deletar() {
    const display = document.getElementById('display');
    if (display) {
        display.value = display.value.slice(0, -1);
        display.classList.remove('erro');
    } else {
        console.error('Elemento #display não encontrado.');
    }
}

function calcular() {
    const display = document.getElementById('display');
    if (display) {
        try {
            display.value = eval(display.value);
            display.classList.remove('erro');
        } catch (erro) {
            display.value = 'Erro';
            display.classList.add('erro');
        }
    } else {
        console.error('Elemento #display não encontrado.');
    }
}

const display = document.getElementById('display');
if (display) {
    display.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calcular();
        }
    });
    display.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            apagarDisplay();
        }
    });
} else {
    console.error('Elemento #display não encontrado ao adicionar evento de teclado.');
}
