let tarefas = []

while(true) {
let opções = Number(prompt('Digite o número da opção desejada: 1- adicionar; 2- listar; 3- remover; 4- concluir; 5- sair'))
if (opções == 5){
   break
} else if (opções == 1) {
    let addTarefa = prompt('Digite a tarefa que quer adicionar')
    tarefas.push(addTarefa)
    alert("✅ Tarefa adicionada")
    while (true) {
        let opcao = Number(prompt('Deseja adicionar outra tarefa: 1- sim; 2- não'))
        if (opcao == 1){
            let addTarefa = prompt('Digite a tarefa que quer adicionar')
            tarefas.push(addTarefa)
            alert("✅ Tarefa adicionada")
        } else if (opcao == 2) {
            break
        } else {
            alert ('Opção Inválida')
        }
    }
} else if (opções == 2){
    if (tarefas.length === 0) {
        alert("📭 Sua lista está vazia.");
    } else {
        let listaFormatada = "📝 Lista de tarefas:\n\n";
        for (let i = 0; i < tarefas.length; i++) {
            listaFormatada += `${i} - ${tarefas[i]}\n`;
        }
        alert(listaFormatada);
    }
} else if (opções == 3) {
    while (true) {
        let removeTarefa = Number(prompt('Digite o numero da tarefa que deseja remover'))
        if (removeTarefa + 1 > tarefas.length) {
            alert('inválido')
        } else {
            tarefas.splice(removeTarefa, 1)
            alert(`✅ Tarefa removida`)
            break
        } 
    }
    while (true){
        let opcao = Number(prompt('Deseja remover outra tarefa: 1- sim; 2- não'))
        if (opcao == 1) {
            let removeTarefa = Number(prompt('Digite o numero da tarefa que deseja remover'))
            tarefas.splice(removeTarefa, 1)
            alert(`✅ Tarefa removida`)
        } else if (opcao == 2) {
            break
        } else {
            alert ('Opção Inválida')
        }
    }
} else if (opções == 4) {
    while (true) {
        let concluirTarefa = Number(prompt('Digite o numero da tarefa que deseja marcar como concluída ✅'))
        if (concluirTarefa + 1 > tarefas.length) {
            alert('inválido')
        } else {
            const concluido = tarefas[concluirTarefa] = " ✅ " + tarefas[concluirTarefa] ;    
            alert(concluido + "  (Escolha a opção 2- listar no menu principal para ver a lista)")
            break
        }
    } 
    while (true) {
        let opcao = Number(prompt('Deseja marcar como concluída outra tarefa: 1- sim; 2- não'))
        if (opcao == 1) {
            let concluirTarefa = Number(prompt('Digite o numero da tarefa que deseja marcar como concluída ✅')) 
            const concluido = tarefas[concluirTarefa] = "✅ " + tarefas[concluirTarefa];
            alert(concluido + "  (Escolha a opção 2- listar no menu principal para ver a lista no console)")
        } else if (opcao == 2) {
            break
        } else {
            alert ('Opção Inválida')
        }
    }
} else {
    alert('Opção Inválida')
}
}

console.log(tarefas);