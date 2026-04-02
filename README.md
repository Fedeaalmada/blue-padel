# Luna Asua Centro Sport — Sitio Web con Reservas

## Estructura del proyecto

```
luna-asua/
├── index.html          → Landing page pública
├── reservar.html       → Formulario de reserva (4 pasos)
├── admin.html          → Panel del dueño (login + gestión de turnos)
├── css/
│   └── style.css       → Estilos globales
├── js/
│   ├── config.js       → ⚙️  CONFIGURACIÓN DEL COMPLEJO (editar por cliente)
│   └── supabase-client.js → Conexión a base de datos
└── README.md
```

---

## Flujo de reserva

1. **Cliente** entra a `index.html` → toca "Reservar ahora"
2. **Paso 1:** Elige el deporte (pádel o fútbol)
3. **Paso 2:** Elige fecha y horario (horarios ocupados aparecen tachados)
4. **Paso 3:** Completa nombre, teléfono, paga la seña al alias y **sube el comprobante**
5. **Reserva queda en estado "pendiente"** en la base de datos

6. **Dueño** entra a `admin.html` → ve el turno pendiente con el comprobante
7. Verifica que le llegó la plata → toca **"Confirmar turno"**
8. Se abre WhatsApp automáticamente con el mensaje de confirmación listo para enviar al cliente

---

## 1. Configurar Supabase

### Crear proyecto
1. Entrá a https://supabase.com → creá cuenta gratis
2. Nuevo proyecto: nombre `luna-asua`, región `South America (São Paulo)`
3. Guardá bien la contraseña de la base de datos

### Crear tabla de reservas
Andá a **SQL Editor** y ejecutá:

```sql
create table reservas (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  telefono text not null,
  deporte text not null,
  fecha date not null,
  hora time not null,
  estado text default 'pendiente' check (estado in ('pendiente', 'confirmada', 'cancelada')),
  comprobante_path text,
  created_at timestamp with time zone default now()
);

-- Evitar doble reserva en el mismo horario
create unique index no_doble_reserva on reservas (deporte, fecha, hora)
  where estado != 'cancelada';
```

### Crear bucket para comprobantes
1. Andá a **Storage** → New bucket
2. Nombre: `comprobantes`
3. Marcá **Public bucket** (para poder ver las imágenes en el admin)

### Configurar autenticación del admin
1. Andá a **Authentication → Users** → Invite user
2. Ingresá el email del dueño del complejo
3. El dueño recibirá un mail para crear su contraseña

### Copiar credenciales
1. Andá a **Settings → API**
2. Copiá `Project URL` y `anon public key`
3. Pegálos en `js/supabase-client.js`:

```js
const SUPABASE_URL = "https://XXXXXXXXXXXX.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
```

---

## 2. Personalizar para cada cliente

Solo editás `js/config.js`:

```js
const CONFIG = {
  nombre: "Nombre del complejo",
  direccion: "Dirección del complejo",
  whatsapp: "5493547XXXXXX",     // 549 + número sin 0 adelante
  alias: "ALIAS.MERCADOPAGO",
  montoSena: 2000,                // monto en pesos
  deportes: [...],                // agregar/quitar deportes
  mensajeConfirmacion: "Hola {nombre}! Tu turno está confirmado..."
};
```

**Variables disponibles en el mensaje:**
- `{nombre}` → primer nombre del cliente
- `{deporte}` → deporte reservado
- `{fecha}` → fecha del turno
- `{hora}` → hora del turno

---

## 3. Correr en VS Code (desarrollo local)

1. Instalá la extensión **Live Server** en VS Code
2. Abrí la carpeta `luna-asua` en VS Code
3. Click derecho en `index.html` → **Open with Live Server**
4. El sitio abre en `http://127.0.0.1:5500` con recarga automática al guardar

---

## 4. Subir a GitHub

```bash
git init
git add .
git commit -m "v1.0 - luna asua centro sport"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/luna-asua.git
git push -u origin main
```

---

## 5. Publicar en Vercel (gratis)

1. Entrá a https://vercel.com → conectá con tu cuenta GitHub
2. **New Project** → importá el repositorio `luna-asua`
3. Framework: **Other** (no es React)
4. Deploy → el sitio queda en una URL tipo `luna-asua.vercel.app`
5. **Cada vez que hacés `git push`, el sitio se actualiza automáticamente**

---

## 6. Para cada nuevo cliente

1. Duplicá la carpeta del proyecto
2. Editá `js/config.js` con los datos del nuevo complejo
3. Creá un nuevo proyecto en Supabase (o usá el mismo con otra tabla)
4. Actualizá `js/supabase-client.js` con las credenciales nuevas
5. Subí a un nuevo repositorio de GitHub
6. Publicá en Vercel con un nuevo dominio

---

## Costos estimados

| Servicio | Costo |
|----------|-------|
| Supabase (hasta 500MB, 50.000 requests/mes) | **Gratis** |
| Vercel hosting | **Gratis** |
| GitHub | **Gratis** |
| Dominio propio (opcional) | ~$10 USD/año |

**Tu ganancia:** $300 USD setup + $50-70 USD/mes por cliente 🚀
