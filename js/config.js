// ============================================================
//  CONFIGURACIÓN DEL COMPLEJO
//  Solo editá este archivo para personalizar por cliente
// ============================================================

const CONFIG = {
  nombre: "Luna Asua Centro Sport",
  direccion: "Cjal. C. Bossi 504, Alta Gracia, Córdoba",
  telefono: "03547465714",
  whatsapp: "5493547465714",      // 549 + número sin 0 adelante

  // Pago de seña
  alias: "LUNA.ASUA.MP",
  cbu: "0000000000000000000000",
  montoSena: 2000,                // en pesos

  // Deportes
  deportes: [
    {
      id: "padel",
      nombre: "Pádel",
      emoji: "🎾",
      descripcion: "Canchas blindex panorámicas con iluminación LED",
      precio: 30000,
      caracteristicas: ["Iluminación incluida", "Alquiler de paletas", "Blindex panorámico"]
    },
    {
      id: "futbol",
      nombre: "Fútbol",
      emoji: "⚽",
      descripcion: "Césped sintético de última generación",
      precio: 112000,
      caracteristicas: ["Iluminación incluida", "Pelotas disponibles", "Césped sintético"]
    }
  ],

  // Horarios disponibles
  horarios: [
    "08:00","09:00","10:00","11:00","12:00","13:00",
    "14:00","15:00","16:00","17:00","18:00","19:00",
    "20:00","21:00","22:00","23:00"
  ],

  mapsUrl: "https://maps.app.goo.gl/wzFxwqLCJkePP8dd9",

  // Mensaje automático al confirmar el turno
  // Variables disponibles: {nombre}, {deporte}, {fecha}, {hora}
  mensajeConfirmacion: "Hola {nombre}! 🎉 Te confirmamos tu turno en Luna Asua Centro Sport.\n\n Deporte: {deporte}\n Fecha: {fecha}\n Hora: {hora}\n\nTe esperamos! Cualquier consulta estamos acá."
};
