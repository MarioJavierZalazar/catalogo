$.get('../data/objetos.json', (respuesta, estado) => {
        if (estado == 'success') {
            for (const item of respuesta){
                Objets.push(new Objet(item.id,item.name,item.tag,item.picture))
            }
            grillaDeObjetosUI(Objets);
        } else {
            console.log('Error en la carga de datos');
        };
    })