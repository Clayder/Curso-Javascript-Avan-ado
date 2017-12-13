var list = [
    {"desc": "Coca-cola", "qtd": "1", "valor": "4.00"},
    {"desc": "X-tudo", "qtd": "1", "valor": "15.00"},
    {"desc": "Cachorro quente", "qtd": "1", "valor": "12.00"}
];

/**
 * Retorna o valor total da compra
 * @param list
 * @returns float
 */
function getTotal(list) {
    var total = 0;
    for(var chave in list){
        total += list[chave].valor * list[chave].qtd;
    }
    document.getElementById('totalValue').innerHTML = formatValor(total);
    return total;
}

/**
 *
 * @param list
 * @return void
 */
function setList(list) {
    var tabela = "";
    for(var chave in list){
        var id = parseInt(chave) + 1;
        tabela += '<tr>\n' +
            '<th scope="row">'+ id +'</th>\n' +
            '<td>'+ list[chave].desc + '</td>\n' +
            '<td>'+ list[chave].qtd + '</td>\n' +
            '<td>'+ formatValor(list[chave].valor) + '</td>\n' +
            '<td><button onclick="setUpdate('+chave+')" class="btn btn-primary">Editar</button> | <button onclick="deletarProduto('+ chave + ')" class="btn btn-danger">Deletar</button></td>\n' +
            '</tr>';
    }
    document.getElementById('corpo-tabela-compra').innerHTML = tabela;
    getTotal(list);
    saveListStorage(list);
}

/**
 * Formata um float
 * @param valor
 * @returns {string}
 */
function formatValor(valor) {
    // deixo a limitação em 2 casas decimais e no final concateno com "" para transformar em string
    var str = parseFloat(valor).toFixed(2)+"";
    str = str.replace('.', ',');
    str = "R$ " + str;
    return str;
}

/**
 * Cadastrar o novo produto
 * @return void
 */
function addProduto() {
    var obj = getCamposFormulario();
    list.unshift(obj);
    setList(list);
    reset();
}

/**
 * Reseta os campos do formulário
 * @return void
 */
function reset() {
    var obj = {"desc": "", "qtd": "", "valor": ""};
    setCamposFormulario(obj);
}

/**
 *
 * @param obj
 */
function setCamposFormulario(obj) {
    document.getElementById("desc").value = obj.desc;
    document.getElementById("qtd").value = obj.qtd;
    document.getElementById("valor").value = obj.valor;
}

/**
 * Recupera os dados do formulário
 * @return {{desc: (string|Number|*), qtd: (string|Number|*), valor: (string|Number|*)}}
 */
function getCamposFormulario() {
    var desc = document.getElementById("desc").value;
    var qtd = document.getElementById("qtd").value;
    var valor = document.getElementById("valor").value;
    return {"desc": desc, "qtd": qtd, "valor": valor};
}

/**
 *
 * @param int id
 * @return void
 */
function setUpdate(id){
    var obj = list[id];
    setCamposFormulario(obj);
    btnFormulario('none', 'inline-block', 'inline-block');
    // insere o valor do id no campo hidden do formulário de cadastro/edicao
    document.getElementById('idProduto').value = id;
}

/**
 * Cancela a edição
 * @return void
 */
function cancelarEdicao() {
    reset();
    btnFormulario('inline-block', 'none', 'none');
}

/**
 * Realiza a ação de mostrar ou esconder um button
 * @param String btnAdd button cadastrar
 * @param String btnUpdate button editar
 * @param String btnCacel button cancelar
 * @return void
 */
function btnFormulario(btnAdd, btnUpdate, btnCacel){
    document.getElementById("btnUpdate").style.display = btnUpdate;
    document.getElementById("btnCancel").style.display = btnCacel;
    document.getElementById("btnAdd").style.display = btnAdd;
}

/**
 * Realiza a edição do produto
 * @return void
 */
function editarProduto() {
    var idProduto = document.getElementById('idProduto').value;
    list[idProduto] = getCamposFormulario();;
    setList(list);
    reset();
}

/**
 *
 * @param int id
 * @return void
 */
function deletarProduto(id) {
    if(confirm("Realmente deseja deletar o produto ?")){
        if(id == list.length - 1){
            // deleta o último elemento
            list.pop();
        }else if(id == 0){
            // deleta o primeiro elemento
            list.shift();
        }else{
            // recebe um novo array da posição 0 até a posição anterior do id ( ignorando a posição id ).
            var inicioArray = list.slice(0, id);

            // cria um novo array, da posição após o id até o final ( ignorando a posição id ).
            var finalArray = list.slice(id + 1);

            list = inicioArray.concat(finalArray);
        }
        setList(list);
    }
}

/**
 * Salva os dados no localStorage
 * @param list
 * @return void
 */
function saveListStorage(list) {
    // transforma o array em json
    var prodJson = JSON.stringify(list);
    localStorage.setItem("list", prodJson);
}

/**
 * Inicia o localStorage
 * @return void
 */
function initStorage() {
    var prodJson = localStorage.getItem("list");
    if(prodJson){
        // transforma de json para array
        list = JSON.parse(prodJson);
    }
    setList(list);
}

initStorage();
