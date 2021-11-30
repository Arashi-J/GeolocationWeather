require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer.js');
const Busquedas = require('./models/busquedas.js');

const main = async () => {

    const busquedas = new Busquedas();
    let opt;

    do {

        opt = await inquirerMenu();


        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                //Buscar el lugar
                const lugares = await busquedas.ciudad(termino);
                
                //Seleccione el lugar
                const id = await listarLugares(lugares);
                console.log({ id });
                const lugarSel  = lugares.find(l => l.id === id);
                console.log(lugarSel);

                //Clima
                const clima = await busquedas.climaLugar(lugarSel)
                console.log(clima)
                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura:');
                console.log('Mínima: ');
                console.log('Máxima: ');
                console.log('Cómo está el clima: ');

                break;

            case 2:

                break;
        }


        if (opt !== 0) {
            await pausa();
        } else {
            console.clear();
        }

    } while (opt !== 0)


}

main();