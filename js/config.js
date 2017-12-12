function setConfig(titulo) {
    var texts = {
        'title': titulo
    };
    // modifica o título da página
    document.title = texts.title;

    // modifica o título do menu
    document.getElementById('titulo-site').innerHTML = texts.title;
}

setConfig("compras");