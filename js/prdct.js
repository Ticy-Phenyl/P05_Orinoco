class Products {
    constructor(varnish, id, name, price, description, imageUrl, quantity) {
        this.varnish = varnish;
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
    }
}

export { Products };