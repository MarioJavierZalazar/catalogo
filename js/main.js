$.get('../data/objetos.json', (respuesta, estado) => {
        if (estado == 'success') {
            for (const item of respuesta){
                objets.push(new Objet(item.id,item.name,item.tag,item.picture,item.code))
            }
            grillaDeObjetosUI(objets);
        } else {
            console.log('Error en la carga de datos');
        };
})

 for (const elemento of $('input[name="tagsFilter"]')){
     elemento.addEventListener('click', () => {
        if (elemento.checked){
            if (elemento.value == "all"){
                grillaDeObjetosUI(objets);
            };
            if (elemento.value == "orcos"){
                const encontrado = objets.filter(tag => tag.tag == "Orcos");
                grillaDeObjetosUI(encontrado);
            };
        }
     })
}