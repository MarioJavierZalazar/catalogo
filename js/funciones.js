const grillaDeObjetosUI = (lista) =>{
    $('#listaDeObjetos').empty();
    for (const product of lista) {
        $('#listaDeObjetos').append(`
        <div class="card col-10 col-sm-3 mx-sm-3 mx-auto mb-4 p-0">
            <a href="#" data-bs-toggle="modal" data-bs-target="#${product.code}">
              <img src="${product.picture}" class="card-img-top img-fluid" alt="${product.name}">
            </a>
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <div class="tags">
                <span class="badge rounded-pill tag">Fantasia</span>
                <span class="badge rounded-pill tag">Elfo Oscuro</span>
              </div>
            </div>
            <div>
              <div class="modal fade" id="${product.code}" tabindex="-1" aria-labelledby="${product.code}Label"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="${product.code}Label">${product.name}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                      <img src="${product.picture}" class="img-fluid" alt="${product.name}">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
    }
}