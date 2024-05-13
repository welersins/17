

let personas = [];

let persona1 = { nombre: "Juan", edad: 30};
let persona2 = { nombre: "Maria", edad: 40};

personas.push(persona1);
personas.push(persona2);

let personasJSON = JSON.stringify(personas);

localStorage.setItem("personas", personasJSON);

let personasRecuperadas = JSON.parse(localStorage.getItem("personas"));
const llamar = () => {
    personasRecuperadas.map((personaRecuperada) =>{
        const {nombre, edad} = personaRecuperada;
        console.log(nombre);
        console.log(edad);
    })
}

llamar();

const operador = (...personaRecuperada) {

}