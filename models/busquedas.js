class Busquedas{
    historial = ['Tegucigalpa', 'Madrid', 'San José', 'Bogotá'];

    constructor() {
        //TODO: leer DB si existe
    }

    async ciudad (lugar = ''){
        //Petición HTTP
        console.log(lugar);

        return []; //Ciudades resultados
    }
}

module.exports = Busquedas;