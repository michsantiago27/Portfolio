var numero = 43

var promesa = new Promise ((resolve, reject) => {
    if (numero >= 40) {
        resolve("Sí, numero es mayor o igual a 40");
    } else {
        reject("Nel, numero es menos a 40");
    }
})

promesa.then( x => console.log(x)
).catch( x => console.log(x))