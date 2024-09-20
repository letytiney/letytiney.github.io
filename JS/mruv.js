function calcularVelocidadFinal(){
    let velocidadInicial =  parseFloat(document.getElementById("velocidadInicialIngresada").value);
    let aceleracion = parseFloat(document.getElementById("aceleracionIngresado").value);
    let tiempo = parseFloat(document.getElementById("tiempoIngresado").value);
    let resultadoVF = document.getElementById("resultadoVelocidadFinal");

    if(!isNaN(velocidadInicial) & !isNaN(aceleracion)  & !isNaN(tiempo)){
        let resultadoFormula = "";
        //formula
            let encontrarVelocidadFinal = velocidadInicial + aceleracion * tiempo;
            resultadoFormula = `${encontrarVelocidadFinal} m/s`;
            resultadoVF.innerHTML = `La velocidad final es: ${resultadoFormula}`;
    }
    else
    {
        alert("Ingrese los datos correctamente en el formulario")
    }
    
    }

    function calcularDistancia(){
        let velocidadInicial =  parseFloat(document.getElementById("velocidadInicialIngresada2").value);
        let velocidadFinal = parseFloat(document.getElementById("velocidadFinalIngresada").value);
        let tiempo = parseFloat(document.getElementById("tiempoIngresado2").value);
        let resultadoVF = document.getElementById("resultadoDistancia");
    
        if(!isNaN(velocidadInicial) & !isNaN(velocidadFinal)  & !isNaN(tiempo))
            {
                 let resultadoFormula = "";
            //formula
                let encontrarVelocidadFinal = ((velocidadInicial + velocidadFinal)/2) * tiempo;
                resultadoFormula = `${encontrarVelocidadFinal} metros`;
                resultadoVF.innerHTML = `La distancia es: ${resultadoFormula}`;
            }
            else{
                alert("Ingrese los datos correctamente en el formulario")
            }

       
        }

    function calcularVelocidadFinal2(){
        let velocidadInicial =  parseFloat(document.getElementById("velocidadInicialIngresada3").value);
        let aceleracion = parseFloat(document.getElementById("aceleracionIngresado2").value);
        let distancia = parseFloat(document.getElementById("DistanciaIngresado").value);
        let resultadoVF = document.getElementById("VelocidadFinal");
    
        if(!isNaN(velocidadInicial) & !isNaN(aceleracion)  & !isNaN(distancia)){
            let resultadoFormula = "";
            //formula
            let Vf= Math.pow(velocidadInicial, 2);
    
                let foundVelocidadFinalSinTiempo = Vf + 2*aceleracion*distancia
                let resultadoRaiz = Math.sqrt(foundVelocidadFinalSinTiempo)
                let resultadoFinal = resultadoRaiz.toFixed(2);
                resultadoFormula = `${resultadoFinal} m/s`;
                resultadoVF.innerHTML = `La distancia es: ${resultadoFormula}`;
        }
        else
        {
            alert("Ingrese los datos correctamente en el formulario")
        }
     
    }