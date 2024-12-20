import express from 'express'
import Controlador from '../controlador/productos.js'

class Router {
    constructor() {
        this.controlador = new Controlador()
    }

    start() {
        const router = express.Router()
        router.get('/', this.controlador.obtenerProductos)
        router.post('/', this.controlador.guardarProducto)
        return router
    }
}

export default Router