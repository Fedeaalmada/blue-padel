const CONFIG = {
  nombre: "Blue Padel",
  direccion: "Prudencio Bustos, Alta Gracia, Córdoba",
  telefono: "3547544042",
  whatsapp: "5493547544042",

  alias: "BLUE.PADEL.MP",
  cbu: "0000000000000000000000",
  montoSena: 2000,

  deportes: [
    {
      id: "padel",
      nombre: "Pádel",
      emoji: "🎾",
      descripcion: "3 canchas de sintético y blindex",
      precio: 30000,
      caracteristicas: ["Iluminación incluida", "Alquiler de paletas", "Sintético y blindex"],
      canchas: ["Cancha 1", "Cancha 2", "Cancha 3"]
    }
  ],

  horarios: [
    "08:00","09:00","10:00","11:00","12:00","13:00",
    "14:00","15:00","16:00","17:00","18:00","19:00",
    "20:00","21:00","22:00","23:00"
  ],

  amenities: [
    { emoji: "🎾", titulo: "3 Canchas de Pádel", descripcion: "Sintético y blindex de calidad" },
    { emoji: "🍻", titulo: "Restobar", descripcion: "Para el tercer tiempo" },
    { emoji: "💡", titulo: "Iluminación", descripcion: "LED profesional" },
    { emoji: "🅿️", titulo: "Estacionamiento", descripcion: "Amplio y seguro" },
    { emoji: "🎾", titulo: "Alquiler de paletas", descripcion: "Disponible en el predio" },
    { emoji: "🕐", titulo: "Abierto todos los días", descripcion: "Consultá horarios" }
  ],

  mapsUrl: "https://www.google.com/maps/place/Blue+Padel/@-31.6495552,-64.4307911,960m/data=!3m2!1e3!4b1!4m6!3m5!1s0x942d5730e460534d:0x2aab6a268e8e647a!8m2!3d-31.6495598!4d-64.4282162",
  instagram: "https://www.instagram.com/blue.padel/",

  mensajeConfirmacion: "Hola {nombre}! 🎉 Te confirmamos tu turno en Blue Padel.\n\n🎾 Cancha: {cancha}\n📅 Fecha: {fecha}\n⏰ Hora: {hora}\n\nTe esperamos!"
};