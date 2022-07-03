const boom = require('@hapi/boom');
const db = require('./dbService');

class lenguajes_programacionService {
    
    constructor() {
      this.generate();
    }
    
    generate() {
    }

    //Funcion Asincrona para Registrar Lenguajes de Programacion
    async create(lenguajes_programacion) {
        const result = await db.query(`INSERT INTO lenguajes_programacion(nombre, year) VALUES ('${lenguajes_programacion.nombre}','${lenguajes_programacion.year}')`);
        let message = 'Error al Registrar el Lenguaje de Programacion';
        if (result.affectedRows) {
          message = 'Se Registro correctamente el Lenguaje de Programacion';
        } 
        return {message};
      }

    //Funcion Asincrona para Consultar TODOS los Lenguajes de Programacion  
    async find() {
        const rows= await db.query(`SELECT * FROM lenguajes_programacion`);
        return rows
    }

    //Funcion Asincrona para Consultar de Forma Particular los Lenguajes de Programacion
    async findOne(id) {
        const rows = await db.query(`SELECT * FROM lenguajes_programacion WHERE id= ${id}`);
        return rows[0]
    }

    //Funcion Asincrona para Modificar los Lenguajes de Programacion
    async update(id, lenguajes_programacion) {
        const result = await db.query(`UPDATE lenguajes_programacion SET nombre="${lenguajes_programacion.nombre}", year="${lenguajes_programacion.year}" WHERE id=${id}`);
        let message = 'Error al actualizar el Lenguaje de Programacion';
        if (result.affectedRows) {
          message = 'Lenguaje de Programacion Modificado correctamente';
        }
        return {message};
    }

    //Funcion Asincrona para Eliminar los Lenguajes de Programacion
    async delete(id) {
        const result = await db.query(`DELETE FROM lenguajes_programacion WHERE id=${id}`);
        let message = 'Error al eliminar el Lenguaje de Programacion';
        if (result.affectedRows) {
          message = 'Lenguaje de Programacion Eliminada correctamente';
        }
        return {message};
    }

}

module.exports = lenguajes_programacionService;