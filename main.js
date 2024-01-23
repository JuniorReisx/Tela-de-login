// Apenas exemplo de busca API depois do fetch:
const API = () => {
  const API_Obj = {
    key : 1700,
    name : 'Shina',
    book : 'Sakurasou',
    get pass () {
      return this.key;
    }
  };
  return API_Obj;
};

// ------------------------------------------------------------------
function login () {
    // Seleciona a div pelo ID
    const formLogin = document.getElementById('formLogin');
    formLogin.classList.add("container-acess");
    const play = document.getElementById('play');
    play.classList.remove('container-acess');
    
    let data = API();
    document.getElementById ('data').innerHTML = `Nome: ${data.name} </ br> ${data.book}`;
}


// Controle;
i = 0;
function erro () {
  let messErro = document.getElementById('messErro');
  while (i <= 3) {
    const a = i === 3;
    if (i <= 3) {
      i++;
      messErro.innerHTML = `Tente novamente ${i}!`;
      messErro.style.color = '#f75454';
      if (a) {
        messErro.innerHTML = "Problemas em si conectar, entre novamente mas tarde, ou recupere a senha.";
        break;
      };
      break;
    }
  }
}


function display (key) {
  // Adquire os valores de uma função, exemplo de busca de dados:
  let data = API();
  let Obj = data.key;
  
  // Obj que amazena o 'password' e um 'boolean', fazendo a validação de dados:
  const pass = { acess : '', boolean : false };
  // Object.defineProperty(...) faz a sobrescrita de uma propriedade do Obj definido:
  Object.defineProperty (pass, 'x', {
  set : function (x) {
      if (x === Obj) {
        this.acess = x;
        this.boolean = true;
        // Função de acesso permitido!
        login();
      } else {
        this.boolean = false;
        // Função de tentativas:
        erro ();
        console.log("Senha Error...");
      }
    }
  });
  pass.x = key;
  console.log("Senha ativa: ", key);
};

function acessDisplay(pass) {
  // Adquire o password, através do ID 'password':
  let password = document.getElementById('password').value;
  // Transformação em Number:
  password = Number(password);
  // Levando o valor através da propriedade para ser tratada em outra função:
  display (password);
}
  
document.getElementById('acess').addEventListener('click', function() {
  acessDisplay();
});