function notaFinal() {
    let sumaNotas = 0;
    const Alumno = prompt('Nombre completo del alumno: ');
    for (let i = 1; i <= 3; i++) {      
        const nota = parseFloat(prompt(`Ingrese nota del trimestre N` + i ));

        if (nota >= 0 && nota <= 10) {
            console.log('Nota valida');
        } else{
            console.log('nota invalida');
            return
        }
        sumaNotas += nota;
    }

    const finalNota = sumaNotas / 3;

        if (finalNota >= 7){
             console.log( Alumno + ' ' + `estas aprobado con :` + finalNota);
        } else{
              console.log('Estas desaprobado. Tu nora final es ');
        }
}
notaFinal();
