// 1. Crear el constructor de Alumno
class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}

// 2. Crear los alumnos
const alumnos = [
    new Alumno("Alumno 1", 18, "DAW"),
    new Alumno("Alumno 2", 19, "DAW"),
    new Alumno("Alumno 3", 20, "DAW"),
    new Alumno("Alumno 4", 21, "DAW"),
    new Alumno("Alumno 5", 22, "DAW"),
    new Alumno("Alumno 6", 19, "DAW"),
    new Alumno("Alumno 7", 18, "DAW"),
    new Alumno("Alumno 8", 21, "DAW"),
    new Alumno("Alumno 9", 20, "DAW"),
    new Alumno("Alumno 10", 22, "DAW"),
    new Alumno("Alumno 11", 21, "DAW"),
    new Alumno("Alumno 12", 19, "DAW"),
    new Alumno("Alumno 13", 18, "DAW"),
    new Alumno("Alumno 14", 20, "DAW"),
    new Alumno("Alumno 15", 21, "DAW"),
    new Alumno("Alumno 16", 19, "DAW"),
    new Alumno("Alumno 17", 22, "DAW"),
    new Alumno("Alumno 18", 18, "DAW"),
    new Alumno("Alumno 19", 21, "DAW"),
    new Alumno("Alumno 20", 20, "DAW"),
    new Alumno("Alumno 21", 22, "DAW"),
    new Alumno("Alumno 22", 18, "DAW")
];

// Array para almacenar los alumnos generados
let alumnosGenerados = [];

// 3. Seleccionar el contenedor y el botón
const alumnosContainer = document.getElementById('alumnosContainer');
const generarAlumnoBtn = document.getElementById('generarAlumnoBtn');

// 4. Función para generar un alumno aleatorio
function generarAlumno() {
    // Verificar si ya se han generado los 22 alumnos
    if (alumnosGenerados.length >= alumnos.length) {
        alert("Ya has generado todos los alumnos.");
        return;
    }

    // Generar un índice aleatorio y seleccionar un alumno que no se haya generado
    let alumno;
    do {
        const indiceAleatorio = Math.floor(Math.random() * alumnos.length);
        alumno = alumnos[indiceAleatorio];
    } while (alumnosGenerados.includes(alumno));

    // Agregar el alumno al array de generados
    alumnosGenerados.push(alumno);

    // Crear la carta del alumno
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p>Nombre: ${alumno.nombre}</p>
        <p>Edad: ${alumno.edad}</p>
        <p>Curso: ${alumno.curso}</p>
        <button class="borrarBtn">Borrar</button>
    `;

    // 5. Botón para eliminar la carta
    const borrarBtn = card.querySelector('.borrarBtn');
    borrarBtn.addEventListener('click', () => {
        card.remove();
        // Eliminar el alumno del array de generados para poder generarlo de nuevo
        alumnosGenerados = alumnosGenerados.filter(a => a !== alumno);
    });

    // Agregar la carta al contenedor
    alumnosContainer.appendChild(card);
}

// 6. Asignar el evento al botón de generar
generarAlumnoBtn.addEventListener('click', generarAlumno);
