$.get('../data/objetos.json', (respuesta, estado) => {
        if (estado == 'success') {
            for (const item of respuesta){
                productos.push(new Product(item.id, item.name, item.price, item.picture, item.text, item.usuario))
            }
            grillaDeObjetosUI(productos);
        } else {
            console.log('Error en la carga de datos');
        };
})