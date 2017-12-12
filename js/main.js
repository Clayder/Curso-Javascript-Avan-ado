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

function setList(list) {
    var tabela = "";
    for(var chave in list){
        tabela += '<tr>\n' +
            '<th scope="row">'+ chave +'</th>\n' +
            '<td>'+ list[chave].desc + '</td>\n' +
            '<td>'+ list[chave].qtd + '</td>\n' +
            '<td>'+ list[chave].valor + '</td>\n' +
            '<td>Editar | Deletar</td>\n' +
            '</tr>';
    }
    document.getElementById('corpo-tabela-compra').innerHTML = tabela;
}

setList(list);
console.log(getTotal(list));