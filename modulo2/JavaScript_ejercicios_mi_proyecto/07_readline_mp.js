const { stdin, stdout } = require("process");
const lectura = require("readline");

const auto = lectura.createInterface({
    input: process.stdin,
    output: process.stdout
});

auto.question("Ingrese el ID del vehiculo: ", (idVehiculo) => {
    console.log(`Despachando unidad: ${idVehiculo}`)
    auto.close();
})
