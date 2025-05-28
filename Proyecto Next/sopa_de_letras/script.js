const palabras = [
    "AMOR", "KARMA", "QUESO", "GARCIA", "RETO", "CASA", "LIMON", "PERRO", "MUÑECO", "HUGO",
  ];
let remaining = palabras.length
let score = 0


//Tamaño del lado de la tabla
const size = 20;
//Generamos un tablero vacio
let tablero = Array.from({ length: size }, () => Array(size).fill(''))

//Creo un array con las palabras en arrays de letras
function crearArrayDeArrayDeLetras(palabras) {
    const result = [];
    
    for (let i = 0; i < palabras.length; i++) {
      const positionArr = [];
      
      for (let j = 0; j < palabras[i].length; j++) {
        positionArr.push(palabras[i][j]);
      }
  
      result.push(positionArr);
    }
  
    return result;
}


//Funcion para invertir el contenido de un array indicado dentro de otro
function invertirArrayPorIndice(array, index){
    let copy = []
    let position = 0
    for (let i = array[index].length - 1; 0 <= i; i--) {
        copy[position] = array[index][i]
        position++
        
    }
    array[index] = copy
}

//Invertimos aleatoriamente alguno de los arrays con la funcion anteiror
function randomInvertArray(array){
    for (let i = 0; i < array.length; i++) {
        //Coin Flip 50/50 para aleatorizar la funcion
        let coin = Math.round(Math.random()) + 1
        if (coin == 1) {
            invertirArrayPorIndice(array,i)
        }
        
    }
}

const direcciones = [
    [0, 1], // Horizontal derecha
    [1, 0], // Vertical abajo
    [1, 1], // Diagonal abajo derecha
    [1, -1], // Diagonal abajo izquierda
  ];

var backupPositions = []

  // Función para colocar palabras en el tablero
  function placeWord(word) {
    const direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    let placed = false;
  
    // Intentamos colocar la palabra en el tablero hasta 100 intentos
    for (let attempts = 0; attempts < 100 && !placed; attempts++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
  
      if (canPlaceWord(x, y, direccion, word)) {
        for (let i = 0; i < word.length; i++) {
          const nx = x + direccion[0] * i;
          const ny = y + direccion[1] * i;
          tablero[nx][ny] = word[i];
        }
        placed = true;
        placedPositionSave(backupPositions,x,y,direccion,word)
      }
    }
  }

  function placedPositionSave(backup,x, y, direccion, word){
    backup.push([x, y, direccion, word])
  }
  
  // Verificar si la palabra puede colocarse en esa posición y dirección
  function canPlaceWord(x, y, direccion, word) {
    for (let i = 0; i < word.length; i++) {
      const nx = x + direccion[0] * i;
      const ny = y + direccion[1] * i;
  
      if (nx < 0 || ny < 0 || nx >= size || ny >= size || tablero[nx][ny] !== '') {
        return false;
      }
    }
    return true;
  }
  
  // Rellenar los espacios vacíos con letras aleatorias
  function fillBoard() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (tablero[i][j] === '') {
            tablero[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
        }
      }
    }
  }


  // Muestra todo el tablero
  function mostrarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        let linea = ""
        for (let j = 0; j < tablero[i].length; j++) {
            linea += (tablero[i][j])
            linea += " "
        }
        console.log(linea)
    }
  }

  function marcar(x,y,direccion,word, tablero) {
    for (let i = 0; i < word.length; i++) {
      const nx = x + (direccion[0] * i);
      const ny = y + (direccion[1] * i);
      if (nx >= 0 && nx < tablero.length && ny >= 0 && ny < tablero[0].length) {
        tablero[nx][ny] = `\x1b[32m${tablero[nx][ny]}\x1b[0m`;
      }
    }
  }
  


    let palabrasArrayLetras = crearArrayDeArrayDeLetras(palabras)
    let palabrasArrayLetrasAleatorio = randomInvertArray(palabrasArrayLetras)


    for (let i = 0; i < palabrasArrayLetras.length; i++) {
    placeWord(palabrasArrayLetras[i])    
    }

    var encontradas = []
    var malas = []


    function imprimirArrary(arr) {
        if (arr.length != 0){
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            } 
        }
    }

    function show_score(){
      if (score >= 0) {
          console.log("Puntaje: " + score)
      } else {
        console.log("Puntaje: " + 0)
      }
  }
     


    function bucleJuego() {
        fillBoard()

        mostrarTablero(tablero)

        var palabraIntroducida

        do {
            palabraIntroducida = ""
            palabraIntroducida = prompt("Coloca las palabras encontradas: ")
            palabraIntroducida = palabraIntroducida.toUpperCase()
            //console.log(backupPositions)
            
            console.log(" ")
            console.log(palabraIntroducida);
            console.log(" ")

            if (palabras.indexOf(palabraIntroducida)> -1) {
                let introPalabrasPosition = palabras.indexOf(palabraIntroducida)
                    
                if (backupPositions[introPalabrasPosition] != null) {
                    encontradas.push(palabraIntroducida)
                    marcar(backupPositions[0], backupPositions[1], backupPositions[2], backupPositions[3],tablero)
                    backupPositions[introPalabrasPosition] = null
                    remaining--
                    score++
                    if (remaining == 0) {
                        break
                    }
                    console.log("Te quedan " + remaining + " palabras")
                    show_score()
                    console.log("Encontradas: ")
                    imprimirArrary(encontradas)
                    console.log("Malas: ")
                    imprimirArrary(malas)

                } else {
                    console.log("Palabra ya encontrada")
                    console.log("Te quedan " + remaining + " palabras")
                    show_score()
                    console.log("Encontradas: ")
                    imprimirArrary(encontradas)
                    console.log("Malas: ")
                    imprimirArrary(malas)
                    

                }
            } else {
                malas.push(palabraIntroducida)
  
                console.log("Esa palabra no está")
                score--
                show_score()
                console.log("Te quedan " + remaining + " palabras")
                console.log()
                console.log("Encontradas: ")
                imprimirArrary(encontradas)
                console.log("Malas: ")
                imprimirArrary(malas)
            }
            console.log(" ")
            mostrarTablero(tablero)
        } while (true);
        console.log(" ")
        console.log("Felicidades encontraste todas las palabras")
    }

    bucleJuego()
    

    