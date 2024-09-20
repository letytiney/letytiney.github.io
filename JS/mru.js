function calcularVelocidadMRU(){
    let distancia =  parseFloat(document.getElementById("distanciaIngresada").value);
    let tiempo = parseFloat(document.getElementById("tiempoIngresado").value);
    let resultadoV = document.getElementById("resultadoVelocidad");

        if(!isNaN(distancia) & !isNaN(tiempo)){
            let resultadoFormula = "";
            let encontrarVelocidad = distancia / tiempo;
            resultadoFormula = `${encontrarVelocidad} m/s`;
            resultadoV.innerHTML = `La velocidad es: ${resultadoFormula}`;
        }else{
            alert("Ingrese los datos correctamente en el formulario")
        }
    
    }
    function calcularDistanciaMRU(){
    let velocidad = parseFloat(document.getElementById("velocidadIngresada").value);
    let tiempo = parseFloat(document.getElementById("tiempoIngresado2").value);
    let resultadoD = document.getElementById("resultadoDistancia");
    if(!isNaN(velocidad) & !isNaN(tiempo)){
        let resultadoFormulaDistancia = "";
        let encontrarDistancia = velocidad * tiempo;
        resultadoFormulaDistancia = `${encontrarDistancia} metros`;
            resultadoD.innerHTML = `La distancia es: ${resultadoFormulaDistancia}`;
    }
    else{
        alert("Ingrese los datos correctamente en el formulario")
    }

  
    }
    function calcularTiempoMRU(){

        
    let velocidad = parseFloat(document.getElementById("velocidadIngresada2").value);
    let distancia =  parseFloat(document.getElementById("distanciaIngresada2").value);
    let resultadoT = document.getElementById("resultadoTiempo");
    if(!isNaN(velocidad) & !isNaN(distancia)){
        let resultadoFormula = "";
        let encontrarTiempo = distancia / velocidad;
        resultadoFormula = `${encontrarTiempo} segundos`;
            resultadoT.innerHTML = `Tarda en recorrer: ${resultadoFormula}`;
    }
    else{
        alert("Ingrese los datos correctamente en el formulario")
    }


 
    }