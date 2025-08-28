class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();

    }

    eventos(){
        this,formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);

        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        }

        camposSaoValidos(){
            let valid = true;

//Pega todos os elementos dentro de this.formulario e  O resultado é uma lista de nós (NodeList).
//Vai percorrer cada elemento dessa lista, e em cada volta da repetição o elemento atual é guardado na variável campo.


            for(let campo of this.formulario.querySelectorAll('.validar')){
                const label = campo.previousElementSibling.innerText; //Acessa o elemento irmão imediatamente anterior ao campo no HTML (geralmente um <label>).
            
//Esse código percorre todos os campos que precisam ser validados (.validar) e pega o texto do label imediatamente antes de cada campo, guardando na constante label.


                if(! campo.value){
                    this.criaErro(campo, 'Esse Campo não pode estar em branco.');
                }
            valid = false;
            }
        }

        criaErro(campo , msg) {
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error - text ');
            campo.insertAdjacenteElement('afterend');
        }
}

const valida = new ValidaFormulario();




