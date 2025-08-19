function imc(peso, alt){
    let imc = (peso / (Math.pow(alt, 2)))
    if(imc < 18.5){
        return `IMC: ${imc.toFixed(2)} - Abaixo do peso`
    }
    else if(imc >= 18.5 && imc <= 24.9){
        return `IMC: ${imc.toFixed(2)} - Peso normal`
    }
    else if(imc >= 25 && imc <= 29.9){
        
        return `IMC: ${imc.toFixed(2)} - Peso normal`
    }
    else{
        return `IMC: ${imc.toFixed(2)} - Obeso`
    }
}