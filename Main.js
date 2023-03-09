let num1 = parseInt(prompt("Ingrese el primero numero: "))
let num2 = parseInt(prompt("Ingrese el segundo numero: "))

const op = (num, num2) => { 
    if(num<num2) console.log(`La suma es ${num + num2}, y la diferencia es ${num - num2}`)
    if(num>num2) console.log(`El producto es ${num * num2}, y la division es ${num / num2}`)  
}
op(num1, num2)