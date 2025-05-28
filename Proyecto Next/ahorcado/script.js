let guess_word;

let score = 0;
let times_left = 0;
let fails = 0;
let success = 0;
/* 
Por la cantidad de Sprites y la condicion de 150% de
oportunidades por numero de letras, una palabra como máximo
puede tener 7 letras y 9 oportunidades
para mas letras por palabras necesitaria hacer más sprites
7 si la regla del impar truncado se queda igual
*/

//palabras
const words = [
    "AMIGO", "BANCO", "CASA", "DONDE", "PELUCA", "FLORA", "GENTE", "HABLA", "PERRO", "JUEGO",
    "AMOR", "LETRA", "MADRE", "NIÑO", "PADRE", "PASEO", "PLATO", "RATON", "SABOR", "TENIS",
    "FUTBOL", "VACA", "WIFI", "GATO", "MESA", "ZAPAS", "BOLSA", "CARTA", "SILLA", "ESCUELA",
    "FABRICA", "GLOBO", "HORAS", "IGLUS", "JUGAR", "KAYAK", "LEYES", "MANGA", "PLAYA", "RAPIDO",
    "PAGOS", "QUARK", "RADIO", "SALUD", "TENOR", "UNICA", "VACIO", "RANGO", "XENON", "LEER",
    "LIBRO", "BAÑO", "CIRCO", "DANZA", "SANGRE", "TANQUE", "ZORRO", "LEON", "TAURO", "ESPAÑA",
    "KARMA", "LECHO", "MANGO", "FRANCIA", "FAUNA", "PANDA", "QUESO", "YOGURT", "HOTEL", "PISO",
    "RITMO", "MUSICA", "VIDEO", "HTML", "YOUTUBE", "COCHE", "MOTO", "ERIZO", "PELOTA", "CAFE",
    "JAVA", "CHINA", "PISCIS", "INDIA", "CLIMA", "TIEMPO", "LIMON", "NOVELA", "NARCO", "PEPINO",
    "PLANTA", "BICHO", "KILO", "CHAT", "LENTO", "LLENAR", "PONER", "HILO", "HUESO", "RETO"
  ];
  


const play =  document.getElementById("play")
const sprite =  document.getElementById("sprite")
const letters_btn =  document.querySelectorAll("#letters button")

end_game()


play.addEventListener("click",start)

function start(event) { 
    sprite.src="img/ahoracadossprites0.png"
    play.disabled = true;

    document.getElementById("result").innerHTML="---"
    document.getElementById("score").innerHTML=""
    document.getElementById("times_left").innerHTML=""

    show_score()

    
    fails = 0;
    success = 0;


    const guess_gap = document.getElementById("guess")
    guess_gap.innerHTML = ""

    const array_position = Math.floor(Math.random() * (words.length + 1))

    random_word = words[array_position];
    console.log(random_word)

    let show_limit = calc_limit(random_word)
    console.log("El limite es: " + show_limit)

    times_left = calc_limit(random_word);
    document.getElementById("times_left").innerHTML=times_left



    /* enable letter buttons */
    for (let i = 0; i < letters_btn.length; i++) {
        letters_btn[i].disabled = false; 
    }


    for (let i = 0; i < random_word.length; i++) {
        guess_gap.appendChild(document.createElement("span"))
    }
}

for (let i = 0; i < letters_btn.length; i++) {
    letters_btn[i].addEventListener("click",letter_clicked)
}

function letter_clicked(event){
    const spans = document.querySelectorAll("#guess span")

    const activator = event.target
    activator.disabled = true


    const letter = activator.innerHTML

    let guessed = false
    for (let i = 0; i < random_word.length; i++) {
        if (letter == random_word[i]) {
            spans[i].innerHTML = letter
            success++
            score++
            guessed = true
            show_score()
            document.getElementById("times_left").innerHTML=times_left


        }
        
    }

    if (guessed == false) {
        fails++
        sprite.src = `img/ahoracadossprites${fails}.png`
        score--
        show_score()
        times_left--
        document.getElementById("times_left").innerHTML=times_left

    }

    let limit = calc_limit(random_word)


    if (fails == limit) {
        document.getElementById("result").innerHTML="Perdiste,capon la palabra era " + random_word
        end_game()
        
    } else if (success == random_word.length) {
        document.getElementById("result").innerHTML="Ganaste, ole ole los caracoles"
        end_game()
    }

    console.log( "La letra " + letter + " en la palabra " + random_word + " ¿existe?: " + guessed );
}


function end_game() {
    for (let i = 0; i < letters_btn.length; i++) {
        letters_btn[i].disabled = true; 
    }
    score = 0
    play.disabled = false;
}

function show_score(){
    if (score >= 0) {
        document.getElementById("score").innerHTML=score
    } else {
        document.getElementById("score").innerHTML=0
    }
}

function calc_limit(word){
    let limit = 0
    //if odd limit equals the even before limit

    if (word.length % 2 != 0) {
        limit = (word.length-1) * 1.5
    } else {
        limit = (word.length) * 1.5
    }


    return limit
}