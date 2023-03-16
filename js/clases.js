class Product {
    constructor(id, name, price, picture,text,usuario, fecha) {
        this.id = id,
        this.name = name,
        this.price = price;
        this.picture = picture;
        this.text = text;
        this.usuario = usuario;
        this.fecha = fecha;
    }
};

class Usuario {
    constructor (id, name, contacto) {
        this.id = id,
        this.name = name,
        this.contacto = contacto
    }
}