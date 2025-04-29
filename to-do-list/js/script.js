// Carrega tarefas ao iniciar
window.onload = carregarTarefas;

function adicionarTarefa() {
  const input = document.getElementById("inputTarefa");
  const categoria = document.getElementById("categoriaTarefa").value;
  const texto = input.value.trim();
  const data = new Date().toLocaleString();
  document.getElementById("som-adicionar").play();

  if (texto === "") return;

  criarTarefa(texto, false, categoria, data);
  salvarTarefa({ texto, concluida: false, categoria, data });
  input.value = "";
}

function criarTarefa(texto, concluida = false, categoria = "Outro", data = "") {
  const li = document.createElement("li");
  li.className = "tarefa-item";
  if (concluida) li.classList.add("concluida");

  li.innerHTML = `
    <strong>${texto}</strong><br>
    <small>Categoria: ${categoria}</small><br>
    <small>Data: ${data}</small>
  `;

  li.addEventListener("click", () => {
    li.classList.toggle("concluida");
    atualizarStatus(texto, li.classList.contains("concluida"));
  });

  li.addEventListener("dblclick", () => {
    document.getElementById("som-remover").play();
    li.classList.add("removendo");
    setTimeout(() => {
      li.remove();
      removerTarefa(texto);
    }, 300);
  });
  

  document.getElementById("listaTarefas").appendChild(li);
}

function salvarTarefa(tarefa) {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.forEach(t => criarTarefa(t.texto, t.concluida, t.categoria, t.data));
}

function atualizarStatus(texto, concluida) {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const index = tarefas.findIndex(t => t.texto === texto);
  if (index !== -1) {
    tarefas[index].concluida = concluida;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    filtrarTarefas(); // atualiza a exibição
  }
}

function removerTarefa(texto) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas = tarefas.filter(t => t.texto !== texto);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function filtrarTarefas() {
  const filtro = document.getElementById("filtro").value;
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  let tarefasFiltradas = tarefas;

  if (filtro === "concluidas") {
    tarefasFiltradas = tarefas.filter(t => t.concluida);
  } else if (filtro === "pendentes") {
    tarefasFiltradas = tarefas.filter(t => !t.concluida);
  }

  tarefasFiltradas.forEach(t =>
    criarTarefa(t.texto, t.concluida, t.categoria, t.data)
  );
}

function exportarLista() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  
    if (tarefas.length === 0) {
      alert("Não há tarefas para exportar.");
      return;
    }
  
    const conteudo = tarefas.map(t =>
      `✔ ${t.concluida ? "[X]" : "[ ]"} ${t.texto} (${t.categoria} - ${t.data})`
    ).join("\n");
  
    const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "lista-de-tarefas.txt";
    link.click();
  }
  
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
  