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
            '<td><button onclick="setUpdate(chave)" class="btn btn">Editar</button> | <button class="btn btn-danger">Deletar</button></td>\n' +
            '</tr>';
    }
    document.getElementById('corpo-tabela-compra').innerHTML = tabela;
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
    var desc = document.getElementById("desc").value;
    var qtd = document.getElementById("qtd").value;
    var valor = document.getElementById("valor").value;
    list.unshift({"desc": desc, "qtd": qtd, "valor": valor});
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

function setUpdate(id){
    var obj = list[id];

}
setList(list);
console.log(getTotal(list));