// ============================================================
//  CONFIGURACIÓN DEL COMPLEJO
//  Solo editá este archivo para personalizar por cliente
// ============================================================

const CONFIG = {
  nombre: "Luna Asua Centro Sport",
  direccion: "Cjal. C. Bossi 504, Alta Gracia, Córdoba",
  telefono: "03547465714",
  whatsapp: "5493547465714",

  alias: "LUNA.ASUA.MP",
  cbu: "0000000000000000000000",
  montoSena: 2000,

  deportes: [
    {
      id: "padel",
      nombre: "Pádel",
      emoji: "🎾",
      descripcion: "Canchas blindex panorámicas con iluminación LED",
      precio: 30000,
      caracteristicas: ["Iluminación incluida", "Alquiler de paletas", "Blindex panorámico"],
      canchas: ["Cancha 1", "Cancha 2"]
    },
    {
      id: "futbol",
      nombre: "Fútbol",
      emoji: "⚽",
      descripcion: "Césped sintético de última generación",
      precio: 112000,
      caracteristicas: ["Iluminación incluida", "Pelotas disponibles", "Césped sintético"],
      canchas: ["Cancha 1", "Cancha 2"]
    }
  ],

  horarios: [
    "08:00","09:00","10:00","11:00","12:00","13:00",
    "14:00","15:00","16:00","17:00","18:00","19:00",
    "20:00","21:00","22:00","23:00"
  ],
amenities: [
    { emoji: "🎾", titulo: "Canchas de Pádel", descripcion: "Blindex y césped sintético" },
    { emoji: "⚽", titulo: "Canchas de Fútbol", descripcion: "Césped sintético de última generación" },
    { emoji: "🅿️", titulo: "Estacionamiento", descripcion: "Amplio y seguro" },
    { emoji: "💡", titulo: "Iluminación", descripcion: "LED profesional" },
    { emoji: "🍻", titulo: "Tercer Tiempo", descripcion: "Espacios para quedarse después del partido" },
    { emoji: "🕐", titulo: "Abierto todos los días", descripcion: "De 08:00 a 01:00 am" }
  ],
  mapsUrl: "https://maps.app.goo.gl/wzFxwqLCJkePP8dd9",
instagram: "https://www.instagram.com/luna.asua.centrosport/",
  mensajeConfirmacion: "Hola {nombre}! 🎉 Te confirmamos tu turno en Luna Asua Centro Sport.\n\n Deporte: {deporte}\n Cancha: {cancha}\n Fecha: {fecha}\n Hora: {hora}\n\nTe esperamos!"
};