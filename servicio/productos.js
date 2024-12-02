import ModelFactory from "../model/DAOs/productosFactory.js"

import config from '../config.js'
import { validar } from "./validaciones/producto.js"

//console.log( validar({nombre: 'CPU', precio: false, stock: 495}) )

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id => {
        if (id) {
            const producto = await this.model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.model.obtenerProductos()
            return productos
        }
    }

    guardarProducto = async producto => {
        //validación específica del producto a guardar 
        const rta = validar(producto)
        if (rta.result) {
            const productoGuardado = await this.model.guardarProducto(producto)
            return productoGuardado
        }
        else {
            throw rta.error
        }
    }
}

export default Servicio