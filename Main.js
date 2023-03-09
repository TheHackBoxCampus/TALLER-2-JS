let x = 0; 
let notes = []; 

const average_calc = (arr, cont) => {
    while(cont < 3){
        let note = parseInt(prompt("Ingrese la nota: "))
        if (!note) return;
        arr.push(note)
        cont+=1
    }

    let average = arr.reduce((ac, it) => (ac + it))
    return (average / 3) <= 3.9 ? "Estudie, mire su promedio " + (average / 3) : "Becado, excelente" 
}

window.alert("\t La calificacion se tomara en formato de 1 a 10, contando decimales")
console.log(average_calc(notes, x))


