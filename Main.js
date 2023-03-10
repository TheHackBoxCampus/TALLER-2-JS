let finalists = []
let position = []
let amound = parseInt(prompt("Ingrese el numero de finalistas:")); 
let options = ["Finalista: ", "metros"]; 
let y = 0; 

while(y < amound){
    for(let x = 0; x < options.length; x++){
        let name = prompt(options[0]);
        let meters = parseInt(prompt(options[1]));  
        finalists.push({name, meters})
        break; 
    }
    y+=1; 
}

if(finalists.length >= 1){
    let max_finalist  = finalists.sort((a,b) => b.name - a.name);
    max_finalist[max_finalist.length - 1].meters > 15.50 
    ? window.alert(`Rompio record, gano 500 millones el finalista ${max_finalist[max_finalist.length - 1].name} 
    con un puntaje de ${max_finalist[max_finalist.length - 1].meters}`) 
    : window.alert(`El que recorrio mas metros pero no rompio el record fue, 
    ${max_finalist[max_finalist.length - 1].name} con 
    ${max_finalist[max_finalist.length - 1].meters} metros recorridos`)
}else {
    console.log("vacio")
}
