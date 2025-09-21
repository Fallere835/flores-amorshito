// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tú y yo", time: 14, endTime: 16 },
  { text: "Una historia que no terminará", time: 17, endTime: 20 },
  { text: "Te convertiste en mi universo", time: 21, endTime: 24 },
  { text: "Nuestra historia", time: 25, endTime: 27 },
  { text: "Como ese asteroide que flota sin rumbo", time: 29, endTime: 32 },
  { text: "Yo también estaba simplemente a la deriva", time: 33, endTime: 36 },
  { text: "Todos mis sueños que encontré en la oscuridad", time: 37, endTime: 39 },
  { text: "Una historia que comenzará de nuevo", time: 40, endTime: 43 },
  { text: "Cuando estoy contigo", time: 48, endTime: 50 },
  { text: "No hay nadie más", time: 51, endTime: 57 },
  { text: "Siento que tengo el cielo para mí solo", time: 58, endTime: 60 },
  { text: "Cuando estoy contigo", time: 61, endTime: 63 },
  { text: "No hay nadie más", time: 64, endTime: 71 },
  { text: "Siento algo que nunca antes había sentido", time: 72, endTime: 74 },
  { text: "Tú y yo", time: 92, endTime: 95 },
  { text: "Como estrellas que no se apagan", time: 96, endTime: 98 },
  { text: "Me convierto en tu sueño", time: 99, endTime: 102 },
  { text: "Viajando por el universo", time: 103, endTime: 105 },
  { text: "Como la Vía Láctea que ilumina el camino oscuro", time: 106, endTime: 110 },
  { text: "Estabas brillando hacia mí", time: 111, endTime: 114 },
  { text: "La única luz que encontré en la oscuridad", time: 115, endTime: 118 },
  { text: "Mi camino que se dirige hacia ti", time: 119, endTime: 121 },
  { text: "Cuando estoy contigo", time: 126, endTime: 129 },
  { text: "No hay nadie más", time: 130, endTime: 137 },
  { text: "Siento que tengo el cielo para mí solo", time: 138, endTime: 141 },
  { text: "Cuando estoy contigo", time: 142, endTime: 147 },
  { text: "No hay nadie más", time: 148, endTime: 155 },
  { text: "Siento algo que nunca antes había sentido", time: 156, endTime: 159 },
  { text: "Siento algo que nunca antes había sentido", time: 160, endTime: 163 },
  { text: "Cuando estoy contigo", time: 173, endTime: 176 },
  { text: "No hay nadie más", time: 177, endTime: 184 },
  { text: "Siento que tengo el cielo para mí solo", time: 185, endTime: 189 },
  { text: "Cuando estoy contigo", time: 190, endTime: 193 },
  { text: "No hay nadie más", time: 194, endTime: 197 },
  { text: "Como una chispa en tus ojos", time: 202, endTime: 204 },
  { text: "El cielo se manifiesta", time: 205, endTime: 208 },
  { text: "Y te amo", time: 211, endTime: 216 },
  { text: "Y te amo mucho Catalina Lisethe", time: 229, endTime: 235 }
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
