let numerics = []
let entered_values = 0;  

while(true){
  let numeric = parseInt(prompt("Ingrese un dato numerico: ")); 
  if (numeric == 0 || !numeric) break; 
  numerics.push(numeric)
  entered_values++; 
}

if(numerics.length >= 1){
    let summation = numerics.reduce((ac, itm) => ac + itm); 
    let average = summation / entered_values; 
    let max_number = Math.max(...numerics);
    let min_number = Math.min(...numerics); 

    window.alert(`
    \t La sumatoria fue ${summation} , 
    \t promedio de ${average},  
    \t el total de valores digitados fue ${entered_values}, 
    \t el numero maximo ${max_number}
    \t el numero menor ${min_number}`
    )
}else console.log("vacio")