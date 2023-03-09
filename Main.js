const max_age = () => {
    let i = 0; 
    let valid = /^([0-9])*$/; 
    let ages = [];
    
    while (i < 3){
        let age = parseInt(prompt("\t Ingresa tu edad")); 
        if(!age || !valid.test(age)) return;
        ages.push(age); 
        i+= 1;
    }   
    return `La edad mas alta fue: ${Math.max(...ages)}`
}

console.log(max_age())