const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('blur', function() {
      const cpf = cpfInput.value.trim();

      const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

      if (!regex.test(cpf)) {
        alert("CPF inválido! Formato: 000.000.000-00");
        cpfInput.classList.add('erro');
        cpfInput.classList.remove('valido');
      } else {
        cpfInput.classList.remove('erro');
        cpfInput.classList.add('valido');
      }
    });

const emailInput = document.getElementById('email');

    emailInput.addEventListener('blur', function() {
      const email = emailInput.value.trim();

      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;

      if (!regex.test(email)) {
        alert("E-mail inválido! Formato: exemplo@dominio.com");
        emailInput.classList.add('erro');
        emailInput.classList.remove('valido');
      } else {
        emailInput.classList.remove('erro');
        emailInput.classList.add('valido');
      }
    });

function mover(botao, direcao) {
      const li = botao.closest('li');
      const ul = li.parentElement;

      if (direcao === 'up' && li.previousElementSibling) {
        ul.insertBefore(li, li.previousElementSibling);
      }

      if (direcao === 'down' && li.nextElementSibling) {
        ul.insertBefore(li.nextElementSibling, li);
      }
    }

function adicionarUC(){
    const novaUC = prompt("Informe a UC:")

    if(novaUC){
        const li = document.createElement("li");

         li.innerHTML = `${novaUC}
          <div class="botoes">
            <button onclick="mover(this, 'up')">↑</button>
            <button onclick="mover(this, 'down')">↓</button>
          </div>`;

        document.getElementById('lista-ucs').appendChild(li);

    }
}

function adicionarInfo() {
    const input = document.getElementById('novaInfo');
    const novaInfo = input.value.trim();

    if (novaInfo !== "") {
        const paragrafo = document.getElementById('descricao');
        paragrafo.innerHTML += " " + novaInfo;
        input.value = "";
    } else {
        alert("Por favor, digite alguma informação antes de adicionar.");
    }
}
