let amigos = [];

function adicionarAmigo(){
  let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;
    
    if(!nomeAmigo){
      alert('Digite o nome do amigo');
      return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista(){
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  amigos = capitalizarLista(amigos);

  for(let i = 0; i < amigos.length; i++){
    let item = document.createElement('li');
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
    }
}

function capitalizarLista(lista) {
    return lista.map(item => item.charAt(0).toUpperCase() + item.slice(1));
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Adicione amigos para sortear');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = '';
    amigos = [];
}
