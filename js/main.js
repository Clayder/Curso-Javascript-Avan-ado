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

console.log(getTotal(list));