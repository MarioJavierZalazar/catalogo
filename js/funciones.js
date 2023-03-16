const grillaDeObjetosUI = (lista) => {
  $('#listaDeProductos').empty();
  lista = lista.sort((x, y) => y.fecha - x.fecha);
  for (const object of lista) {
    $('#listaDeProductos').append(`
        <div class="card col-10 col-sm-3 mx-sm-3 mx-auto mb-4 p-0">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modal${object.id}">
              <img src="../img/objetos/${object.picture}" class="card-img-top img-fluid" alt="${object.name}">
            </a>
            <div class="card-body">
              <h5 class="card-title">${object.name}</h5>
              <div class="tags d-flex justify-content-between">
                <span class="badge rounded-pill fecha align-self-end">Publicado: ${object.fecha}</span>
                <span class="badge rounded-pill tag">$${object.price}</span>
              </div>
            </div>
            <div>
              <div class="modal fade" id="modal${object.id}" tabindex="-1" aria-labelledby="modal${object.id}Label"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modal${object.id}Label">${object.name}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                      <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../img/objetos/${object.picture}" class="d-block w-100 img-fluid carouselImg" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="../img/objetos/${object.picture}" class="d-block w-100 img-fluid carouselImg" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="../img/objetos/${object.picture}" class="d-block w-100 img-fluid carouselImg" alt="...">
                          </div>
                        </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                      </div>
                      <div class="m-3">
                        ${object.text}
                      </div>
                      <div class="modal-footer d-flex justify-content-between">
                         <p>Precio: $${object.price}</p>
                        <a href="${object.usuario.contacto}" target="_blank" class="btn btn-primary">Contactar a ${object.usuario.name}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `);
  }
}