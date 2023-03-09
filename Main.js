//Ley de Ohm 
let voltage_end; 
let Intesidad = parseInt(prompt("Ingrese la intesidad de corriente: "))
let Resistencia = parseInt(prompt("Ingrese la Resistencia: "))


const voltage = (I, R, V) => {
    V = I * R; 
    console.log(`La cantidad de voltaje que se genero fue: \n   
    V = ${I}A x ${R}Ω = ${V}V`)

}; 

voltage(Intesidad, Resistencia, voltage_end)
