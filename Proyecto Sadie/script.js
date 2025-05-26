const tituloOriginal = document.title;

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        document.title = "🫨 Vuelve!!! 🫨";
      } else {
        document.title = tituloOriginal;
      }
    });

    function randomNumIncluded(max, min) {
        let num = Math.random() * (max+1 - min)
        return Math.trunc(num)
    }

    var used = []
    function giftRandomUniqueColor() {
        
        let num = randomNumIncluded(8, 0)
        if (used.indexOf(num) != -1) {
            return giftRandomUniqueColor()
        } else {
            used.push(num)
            let color = "color"
            color += num
            return color
        }
    }

const seccionPoemas = document.getElementById("poemas")

const poemas = [
    ["Dame",[
        "Dame la mano y danzaremos",
        "dame la mano y me amarás.",
        "Como una sola flor seremos,",
        "como una flor, y nada más..."
    ],"https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"],
    ["Loco",[
        "Loco la mano y danzaremos",
        "loco la mano y me amarás.",
        "Mano una sola flor seremos,",
        "mano una flor, y nada más..."
    ],"https://img.freepik.com/foto-gratis/lindo-bebe-erizo-closeup-sobre-hierba-fondo-negro_488145-2951.jpg?semt=ais_hybrid&w=740"],
]

const titulo = document.createElement('h2')
    titulo.textContent = 'Poemas';
    titulo.classList.add("poemaTitle")
    seccionPoemas.appendChild(titulo)

    for (let i = 0; i < poemas.length; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        row.classList.add('position-relative')
        row.addEventListener('click', function() {openGift(this);});
        row.id = `poema${i}`
        seccionPoemas.appendChild(row)

        /* CONST */
        const thisRow = document.getElementById(`poema${i}`)
        const giftBox = document.createElement('div')
        const xLine = document.createElement('div')
        const yLine = document.createElement('div')
        const giftIcon = document.createElement('div')
        const giftFillBox = document.createElement('div')
        const colPoema = document.createElement('div')
        const tituloPoema = document.createElement('h3')
        const parrafo = document.createElement('p')
        const colImagen = document.createElement('div')
        const imag = document.createElement('img')
        const separator = document.createElement('hr')
        const poemBox = document.createElement('div')
        const colPoemaShow = document.createElement('div')
        const tituloPoemaShow = document.createElement('h3')
        const parrafoShow = document.createElement('p')
        const colImagenShow = document.createElement('div')
        const imagShow = document.createElement('img')


        if (i % 2 == 0) {

            /* Regalo */
            giftBox.classList.add('row')
            giftBox.classList.add(`box-gift`)
            giftBox.classList.add(giftRandomUniqueColor())
            giftBox.classList.add('vertically-centered-flex')
            giftBox.classList.add('position-absolute')
            giftBox.classList.add('z-1')
            giftBox.id = `poema-tapa${i}`
            thisRow.appendChild(giftBox)

            xLine.classList.add('x-line')
            yLine.classList.add('y-line')

            giftIcon.classList.add('regalo')
            giftIcon.textContent = "🎁"

            giftBox.appendChild(xLine)
            giftBox.appendChild(yLine)
            giftBox.appendChild(giftIcon)

            giftFillBox.classList.add('row')
            giftFillBox.classList.add('innerBox')
            giftFillBox.classList.add('hidden')

            /* Relleno para el tamaño -Mala Práctica-*/
            giftBox.appendChild(giftFillBox)

            colPoema.classList.add('col-sm-7')
            giftFillBox.appendChild(colPoema)

            tituloPoema.textContent = poemas[i][0]
            tituloPoema.classList.add('mt-3')
            colPoema.appendChild(tituloPoema)

            parrafo.textContent =poemas[i][1].join('\n')
            parrafo.classList.add('poema')
            colPoema.appendChild(parrafo)

            colImagen.classList.add('col-sm-5')
            giftFillBox.appendChild(colImagen)
            
            imag.src = poemas[i][2]
            imag.classList.add('img-fluid')
            colImagen.appendChild(imag)

            /* Mostrado */
            poemBox.classList.add('row')
            poemBox.classList.add('innerBox')
            poemBox.classList.add('box-poema')
            thisRow.appendChild(poemBox)

            colPoemaShow.classList.add('col-sm-7')
            poemBox.appendChild(colPoemaShow)

            tituloPoemaShow.textContent = poemas[i][0]
            tituloPoemaShow.classList.add('mt-3')
            colPoemaShow.appendChild(tituloPoemaShow)

            parrafoShow.textContent =poemas[i][1].join('\n')
            parrafoShow.classList.add('poema')
            colPoemaShow.appendChild(parrafoShow)
            
            colImagenShow.classList.add('col-sm-5')
            poemBox.appendChild(colImagenShow)
            
            imagShow.src = poemas[i][2]
            imagShow.classList.add('img-fluid')
            colImagenShow.appendChild(imagShow)

            seccionPoemas.appendChild(separator)

        } else {
            
            /* Regalo */
            giftBox.classList.add('row')
            giftBox.classList.add(`box-gift`)
            giftBox.classList.add(giftRandomUniqueColor())
            giftBox.classList.add('vertically-centered-flex')
            giftBox.classList.add('position-absolute')
            giftBox.classList.add('z-1')
            giftBox.id = `poema-tapa${i}`
            thisRow.appendChild(giftBox)

            xLine.classList.add('x-line')
            yLine.classList.add('y-line')

            giftIcon.classList.add('regalo')
            giftIcon.textContent = "🎁"

            giftBox.appendChild(xLine)
            giftBox.appendChild(yLine)
            giftBox.appendChild(giftIcon)

            giftFillBox.classList.add('row')
            giftFillBox.classList.add('innerBox')
            giftFillBox.classList.add('hidden')

            /* Relleno para el tamaño -Mala Práctica-*/
            giftBox.appendChild(giftFillBox)

            colImagen.classList.add('col-sm-5')
            giftFillBox.appendChild(colImagen)
            
            imag.src = poemas[i][2]
            imag.classList.add('img-fluid')
            colImagen.appendChild(imag)

            colPoema.classList.add('col-sm-7')
            giftFillBox.appendChild(colPoema)

            tituloPoema.textContent = poemas[i][0]
            tituloPoema.classList.add('mt-3')
            colPoema.appendChild(tituloPoema)

            parrafo.textContent =poemas[i][1].join('\n')
            parrafo.classList.add('poema')
            colPoema.appendChild(parrafo)
            

            /* Mostrado */
            poemBox.classList.add('row')
            poemBox.classList.add('innerBox')
            poemBox.classList.add('box-poema')
            thisRow.appendChild(poemBox)

            colImagenShow.classList.add('col-sm-5')
            poemBox.appendChild(colImagenShow)
            
            imagShow.src = poemas[i][2]
            imagShow.classList.add('img-fluid')
            colImagenShow.appendChild(imagShow)

            colPoemaShow.classList.add('col-sm-7')
            poemBox.appendChild(colPoemaShow)

            tituloPoemaShow.textContent = poemas[i][0]
            tituloPoemaShow.classList.add('mt-3')
            colPoemaShow.appendChild(tituloPoemaShow)

            parrafoShow.textContent =poemas[i][1].join('\n')
            parrafoShow.classList.add('poema')
            colPoemaShow.appendChild(parrafoShow)

            seccionPoemas.appendChild(separator)

        }
    }

const mainTitle = document.querySelector('.wave');
const content = mainTitle.textContent;
    
    mainTitle.innerHTML = '';
        [...content].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${i * 0.1}s`;
        mainTitle.appendChild(span);
        });
    
    function openGift(element) {        
        const del = element.querySelector(".box-gift");
        del.classList.add('hide-Gift');
        setTimeout(() => {
            del.remove();
        }, 3000);  
    }