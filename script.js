let pessoas = {};

function cadastrar() {
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const sexo = document.getElementById('sexo').value;
    const cidade = document.getElementById('cidade').value.trim();

    if (!nome || !idade || !sexo || !cidade) {
        alert("Preencha todos os campos!");
        return;
    }

    pessoas[nome] = [idade, sexo, cidade];
    alert(`${nome} cadastrado com sucesso!`);

    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('sexo').value = '';
    document.getElementById('cidade').value = '';
}

function listar() {
    const resultado = document.getElementById('resultado');
    if (Object.keys(pessoas).length === 0) {
        resultado.innerHTML = "<p>Nenhum cadastro encontrado.</p>";
    } else {
        let tabela = `<table border="1" width="100%" style="border-collapse: collapse;">
                        <tr><th>Nome</th><th>Idade</th><th>Sexo</th><th>Cidade</th></tr>`;
        for (let nome in pessoas) {
            tabela += `<tr>
                          <td>${nome}</td>
                          <td>${pessoas[nome][0]}</td>
                          <td>${pessoas[nome][1]}</td>
                          <td>${pessoas[nome][2]}</td>
                       </tr>`;
        }
        tabela += `</table>`;
        resultado.innerHTML = tabela;
    }
}

function salvar() {
    localStorage.setItem('cadastro', JSON.stringify(pessoas));
    alert("Cadastro salvo com sucesso!");
}

function carregar() {
    const dados = localStorage.getItem('cadastro');
    if (dados) {
        pessoas = JSON.parse(dados);
        alert("Cadastro carregado com sucesso!");
    } else {
        alert("Nenhum cadastro encontrado para carregar.");
    }
}
