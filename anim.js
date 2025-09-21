// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tú y yo", time: 24 },
  { text: "Una historia sin fin", time: 29 },
  { text: "Me convertí en tu estrella", time: 34 },
  { text: "Un cometa vino a mí", time: 40 },
  { text: "Como si lo hubiera estado esperando", time: 43 },
  { text: "Casi nos tocamos", time: 47 },
  { text: "Cuando estoy contigo", time: 51 },
  { text: "No hay nadie más", time: 56 },
  { text: "Siento esto para siempre, ayy, ayy", time: 61 },
  { text: "Una vida de oscuridad", time: 67 },
  { text: "Envía un destello de luz", time: 72 },
  { text: "Para que me encuentres", time: 76 },
  { text: "Escucha la melodía de las estrellas", time: 88 },
  { text: "En esta Vía Láctea que está brillando", time: 94 },
  { text: "Cuando estoy contigo", time: 99 },
  { text: "No hay nadie más", time: 104 },
  { text: "Me siento así para siempre, ayy, ayy", time: 109 },
  { text: "Tú y yo", time: 115 },
  { text: "Como esa estrella y la luna", time: 119 },
  { text: "Hablamos toda la noche", time: 125 },
  { text: "Y yo soy tú", time: 130 },
  { text: "Somos la estrella del otro", time: 135 },
  { text: "Solo soy un viajero", time: 147 },
  { text: "Que te encontró por casualidad", time: 151 },
  { text: "Una luz de estrella que brilló sobre mí", time: 156 },
  { text: "Eres lo único que veo", time: 161 },
  { text: "Cuando estoy contigo", time: 166 },
  { text: "No hay nadie más", time: 172 },
  { text: "Te tengo y se siente como si no pesara nada", time: 177 },
  { text: "Cuando estoy contigo", time: 182 },
  { text: "No hay nadie más", time: 187 },
  { text: "Veo mi futuro en tus ojos", time: 192 },
  { text: "Y te amo", time: 218 },
  { text: "Y te amo", time: 224 },
  { text: "Y te amo", time: 229 },
  { text: "Y te amo", time: 234 },
  { text: "Y te amo", time: 239 },
  { text: "Y te amo", time: 245 },
  { text: "Y te amo", time: 250 },
  { text: "Y te amo", time: 255 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
