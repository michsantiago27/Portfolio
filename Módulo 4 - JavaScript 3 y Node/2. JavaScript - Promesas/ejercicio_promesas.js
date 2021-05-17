/* 
Simular una conexión a BD
Vamos a declarar un arreglo de 3 objetos. Persona con nombre, edad y correo

Mediante una promesa ejecutar 3 procesos/tareas
1. Mandar un mensaje de bienvenida
2. Imprimir después de 3 segundos los objetos
3. Mandar un mensaje de que se ejecutó correctamente la consulta de BD
Debe tener manejo de errores cuando esté vacío
*/

var personas = [
    {
        nombre: 'Mike Wasowski',
        edad: 31,
        correo: 'wasowski@gmail.com'
    },
    {
        nombre: 'Remi Gaillard',
        edad: 49,
        correo: 'gaillardRemi@gmail.com'
    },
    {
        nombre: 'Santiago Antón',
        edad: 28,
        correo: 'michsantiago27@hotmail.com',
    }
]

var promesa = new Promise ( (resolve, reject) => {
    console.log("Bienvenido a la base de datos de Cranky Kong!")
    if (personas.length > 0) {
        setTimeout( () => resolve(personas), 2500)
    } else {
        reject("La base de datos está vacía.")
    }    
})

promesa.then( varResolve => {  // Trucha, solo el primer then puede cachar al resolve
    for (var i=0; i<varResolve.length; i++){
        console.log(personas[i])
    }
}).then(() => console.log("Se ejecutó correctamente la consulta en la base de datos.")
).catch(varReject => console.log(varReject))
