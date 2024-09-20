
const factory = (id, nombre_alumno, edad_alumno,nota1, nota2,nota3 )=>{
    const estudiante = {
        id,
        nombre_alumno, 
        edad_alumno,
        nota1, 
        nota2, 
        nota3,
        
    }
    setTimeout(()=>{
        let promedio= (nota1+nota2+nota3)/3;
        let resultado = promedio.toFixed(0);
        console.log(estudiante, `Promedio: ${resultado}`);
    },3000)
}
factory(1, "Sandra", 23, 80, 63, 96);
factory(2, "Leticia", 20, 75, 90, 90);
factory(3, "Amalia", 30, 70, 89, 73);
factory(4, "Rosalia", 21, 50, 90, 76);
factory(5, "Isaias", 23, 65, 98, 70);