class Boleta {
    constructor(idBoleta, idFuncion, idPuesto, idCliente, precio, fechaCompra) {
        this.idBoleta = idBoleta;
        this.idFuncion = idFuncion;
        this.idPuesto = idPuesto;
        this.idCliente = idCliente;
        this.precio = precio;
        this.fechaCompra = fechaCompra;
    }
}

module.exports = Boleta;
