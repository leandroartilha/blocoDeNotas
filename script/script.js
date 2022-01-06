function adicionar(){

    var tarefaV = document.querySelector('#tarefa');
    var dataV = document.querySelector( '#data');
    var lista = document.querySelector('#lista');
    var tarefa = tarefaV.value;
    var data = dataV.value;
    
    var dataForm = new Date(data);

    var dataCompleta = `${(dataForm.getDate() + 1)} / ${(dataForm.getMonth() + 1)} / ${dataForm.getFullYear()}`;

    
    var conteudo = `
    <div id="linha"></div>
    <p id="item"class="item">${dataCompleta} : ${tarefa}</p>
    `

    var item = document.createElement('li');

    if(tarefa === ""){
        window.alert('Escreva uma tarefa');
    }else{
        item.innerHTML = conteudo;

    lista.appendChild(item);
    item.appendChild(BotaoConclui());
    item.appendChild(BotaoRemove());
    tarefaV.value = " ";
    }

}

const BotaoConclui = () =>{

    const botaozin = document.createElement('button');
    botaozin.classList.add('botaoConclui');
    botaozin.innerText = 'Concluir';
    botaozin.addEventListener('click', concluir)

    return botaozin;

}

const concluir = () =>{

    item.classList.add('vrom');
    blocoLista.classList.add('blocoLista');

}

const BotaoRemove = () =>{

    const botaoRem = document.createElement('button');
    botaoRem.classList.add('botaoConclui');
    botaoRem.innerText = 'Remover';
    botaoRem.addEventListener('click', remover);

    return botaoRem;
}

const remover = (evento) =>{

    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta;
}