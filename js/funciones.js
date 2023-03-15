const grillaDeObjetosUI = (lista) => {
  $('#listaDeObjetos').empty();
  for (const object of lista) {
    $('#listaDeObjetos').append(`
        <div class="card col-10 col-sm-3 mx-sm-3 mx-auto mb-4 p-0">
            <a href="#" data-bs-toggle="modal" data-bs-target="#${object.code}">
              <img src="../img/objetos/${object.picture}" class="card-img-top img-fluid" alt="${object.name}">
            </a>
            <div class="card-body">
              <h5 class="card-title">${object.name}</h5>
              <div class="tags">
                <span class="badge rounded-pill tag">${object.tag}</span>
              </div>
            </div>
            <div>
              <div class="modal fade" id="${object.code}" tabindex="-1" aria-labelledby="${object.code}Label"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="${object.code}Label">${object.name}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                      <img src="../img/objetos/${object.picture}" class="img-fluid" alt="${object.name}">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
  }
}