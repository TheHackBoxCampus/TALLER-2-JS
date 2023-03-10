let amount = parseInt(prompt("Ingrese la cantidad de estudiantes"))
let x = 0;
let M = 0; 
let F = 0; 
let save_and_options = {
    M: "Masculino",
    F: "Femenino",
    notes: []
};

while(x < amount){
    let name_student = prompt("\t Ingrese su nombre: ");
    let sex = prompt("\t Ingrese su sexo: \n\t M -- F");
    let note_definitive = parseInt(prompt("\t Ingrese su nota definita: "));
    if(save_and_options[sex.toUpperCase()] == undefined) {
        x = amount;
        window.alert(`Datos Incorrectos de ${name_student}`)
    } 
    else{
      save_and_options[sex.toUpperCase()] == "Masculino" ? M++ : F++;
      save_and_options.notes.push({name: name_student, note: note_definitive});
    }   
    x+=1;
}
const order = save_and_options.notes.sort((a,b) => a.note - b.note); 

// execute
console.log(`
 ---------------------------------------------
  \tEl Estudiante con mayor nota fue ${order[order.length - 1].name},
  \tcon una nota de ${order[order.length - 1].note}
  \tEl estudiante con menor nota fue ${order[0].name}
  \tcon una nota de ${order[0].note},
  \tMujeres en total: ${F}
  \tHombres en total: ${M}
 ---------------------------------------------
`);



