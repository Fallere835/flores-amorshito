// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "You and me", time: 24 },
  { text: "Endless history", time: 29 },
  { text: "I became your star", time: 34 },
  { text: "A comet came to me", time: 40 },
  { text: "As if I’ve been waiting for it", time: 43 },
  { text: "We almost touched", time: 47 },
  { text: "When I'm with you", time: 51 },
  { text: "There is no one else", time: 56 },
  { text: "I feel this forever, ayy, ayy", time: 61 },
  { text: "A life of darkness", time: 67 },
  { text: "It sends a flicker of light", time: 72 },
  { text: "For you to find me", time: 76 },
  { text: "Hear the melody of the stars", time: 88 },
  { text: "In this Milky Way that is shining", time: 94 },
  { text: "When I'm with you", time: 99 },
  { text: "There is no one else", time: 104 },
  { text: "I feel this way forever, ayy, ayy", time: 109 },
  { text: "You and me", time: 115 },
  { text: "Like that star and the moon", time: 119 },
  { text: "We talk all night long", time: 125 },
  { text: "And I am you", time: 130 },
  { text: "We are each other's stars", time: 135 },
  { text: "I'm just a traveller", time: 147 },
  { text: "Who found you by chance", time: 151 },
  { text: "A starlight that shined on me", time: 156 },
  { text: "You’re the only one I see", time: 161 },
  { text: "When I'm with you", time: 166 },
  { text: "There is no one else", time: 172 },
  { text: "I have you and it feels like I’m weightless", time: 177 },
  { text: "When I'm with you", time: 182 },
  { text: "There is no one else", time: 187 },
  { text: "I see my future in your eyes", time: 192 },
  { text: "And I love you", time: 218 },
  { text: "And I love you", time: 224 },
  { text: "And I love you", time: 229 },
  { text: "And I love you", time: 234 },
  { text: "And I love you", time: 239 },
  { text: "And I love you", time: 245 },
  { text: "And I love you", time: 250 },
  { text: "And I love you", time: 255 }
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
