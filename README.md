# 🕵️ El Impostor

Juego de fiesta multijugador estilo "El Impostor / Infiltrado". Jugable desde un solo celular (modo local) o desde cada celular de los jugadores (modo online). Instalable como app nativa en iPhone y Android.

---

## 🎮 Cómo se juega

Hay una **palabra secreta**. Todos los jugadores la ven... menos el impostor.

El impostor tiene que hacerse pasar por alguien que sí sabe la palabra, participar de la conversación sin delatarse, y evitar ser votado fuera.

Los ciudadanos tienen que descubrir quién no sabe la palabra y votarlo.

### Flujo de una partida

1. El host configura la partida: categorías, cantidad de impostores, pistas
2. Cada jugador mantiene presionado en su turno para ver su rol en secreto
3. Todos debaten hablando sobre el tema (sin decir la palabra directamente)
4. Se vota: ¿quién es el impostor?
5. Se revelan los resultados

### Roles

| Rol | Qué ven | Objetivo |
|---|---|---|
| **Ciudadano** | La palabra secreta y la categoría | Encontrar al impostor |
| **Impostor** | Solo "SOS IMPOSTOR" (+ categoría y/o pista si el host las activó) | Pasar desapercibido y no ser votado |

### Modos especiales
- **Modo Pista** — El impostor recibe una pista indirecta para no estar tan a ciegas
- **Modo Caos** — Todos son impostores 😈
- **Multi-impostor** — Podés configurar más de un impostor

---

## 📱 Modos de juego

### Local — Un solo celular
Se va pasando el celular de mano en mano. Cada jugador mantiene presionado para ver su rol en privado, suelta y pasa al siguiente. No requiere internet (funciona offline si la app fue abierta antes con conexión).

### Online — Cada uno desde su celular
Cada jugador entra desde su propio celular. El host crea la sala y comparte el código. Todos se unen y el host arranca la partida.

---

## 🔧 Setup para desarrollo

### Requisitos
- Node.js 18+
- npm

### Instalación

```bash
npm install
```

### Correr en local (client + server juntos)

```bash
npm run dev
```

Esto levanta:
- **Vite** (frontend) en `http://localhost:5173`
- **Node server** (Socket.IO) en `http://localhost:3001`

### Build de producción

```bash
npm run build
```

Genera el frontend en `/dist` y el servidor se encarga de servirlo vía Express.

### Iniciar el servidor de producción

```bash
npm start
```

---

## 🏗️ Stack técnico

### Frontend

| Tecnología | Versión | Rol |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Tipado estático |
| Vite | 7 | Bundler y dev server |
| TailwindCSS | 3.4 | Estilos |
| Zustand | 5 | Estado global |
| Framer Motion | 12 | Animaciones |
| Socket.IO Client | 4.8 | WebSockets |
| Lucide React | — | Íconos |
| vite-plugin-pwa | — | PWA / instalable offline |

### Servidor

| Tecnología | Versión | Rol |
|---|---|---|
| Node.js | ≥18 | Runtime |
| Express | 5 | HTTP server |
| Socket.IO | 4.8 | Tiempo real |
| TypeScript | 5.9 | Tipado |
| ts-node | — | Ejecuta TS sin compilar |
| nodemon | — | Hot reload en dev |

---

## 📁 Estructura del proyecto

```
impostor/
├── server/
│   └── index.ts          # Servidor completo (Express + Socket.IO)
│
├── src/
│   ├── app/
│   │   ├── App.tsx        # Router de fases + botón back global
│   │   └── providers.tsx
│   │
│   ├── features/
│   │   ├── game/
│   │   │   ├── domain/    # assignImpostors.ts, gameMachine.ts
│   │   │   ├── store/     # gameStore.ts — cerebro del juego (Zustand)
│   │   │   └── ui/        # ModeSelectPage, JoiningPage, PlayingPage, VotingPage
│   │   ├── reveal/
│   │   │   └── ui/        # RevealPage, HoldToReveal
│   │   ├── setup/
│   │   │   └── ui/        # SetupPage, CategoryPicker, PlayersEditor
│   │   └── summary/
│   │       └── ui/        # SummaryPage
│   │
│   └── shared/
│       ├── data/          # categories.ts — todo el contenido del juego
│       ├── types/         # game.ts — interfaces (Player, GameState, etc.)
│       ├── ui/            # Button, Card, Toggle, Stepper, Modal...
│       └── utils/
│
├── vite.config.ts
└── package.json
```

---

## 🔌 Eventos Socket.IO

### Cliente → Servidor

| Evento | Descripción |
|---|---|
| `create_room` | Crea una sala nueva con código de 5 letras |
| `join_room` | Se une a una sala (o reconecta si ya estaba) |
| `start_game` | Host inicia la partida con roles y configuración |
| `next_phase` | Host avanza la fase del juego |
| `cast_vote` | Jugador emite su voto |
| `skip_voting` | Host cierra la votación anticipadamente |
| `leave_room` | Sale de la sala (si es host, cierra la sala para todos) |
| `update_settings` | Sincroniza la configuración en tiempo real |

### Servidor → Cliente

| Evento | Descripción |
|---|---|
| `room_created` | Confirma la creación de sala al host |
| `room_updated` | Broadcast del estado completo de la sala |
| `game_started` | Dispara la transición a fase `reveal` |
| `room_closed` | El host cerró la sala, todos vuelven al menú |

---

## 📦 Flujo de fases

```
mode_select → joining → setup → reveal → playing → voting → summary
                                                      ↑          |
                                                      └──────────┘
                                                    (si nadie ganó)
```

---

## 📝 Agregar categorías

Las categorías están en `src/shared/data/categories.ts`. Cada una sigue esta interfaz:

```typescript
{
  id: 'mi-categoria',
  name: 'Nombre de la Categoría',
  description: 'Descripción breve',
  items: ['Palabra 1', 'Palabra 2', 'Palabra 3'],  // palabras posibles
  hint: 'Pista genérica para el impostor',          // si no hay pista específica por palabra
  itemHints: {                                       // opcional: pista específica por palabra
    'Palabra 1': 'Pista muy indirecta sobre Palabra 1',
  }
}
```

**Criterio para las pistas:** Deben ser asociaciones indirectas de una sola palabra o frase corta. Lo suficientemente útiles para que el impostor no esté perdido, pero no tan obvias como para delatar la palabra.

---

## 📲 Instalar como app (PWA)

### iPhone (Safari)
1. Abrí el juego en Safari
2. Tocá el botón de compartir (cuadrado con flecha)
3. "Añadir a pantalla de inicio"
4. Ya funciona como app nativa y **offline** en modo local

### Android (Chrome)
1. Abrí el juego en Chrome
2. Menú → "Instalar app" o el banner que aparece solo

---

## 🔁 Reconexión automática

Si un jugador pierde señal o manda la app al background (común en iPhone), tiene **5 minutos** para reconectarse sin perder su lugar en la sala. Al volver, el juego lo reintegra automáticamente con su rol intacto.

---

## 🗃️ Estado del servidor

El servidor **no usa base de datos**. Todas las salas viven en memoria RAM. Si el servidor se reinicia, las partidas en curso se pierden — aceptable para un juego de fiesta.

---


## 🛠 Code Review & Arquitectura

### Estructura del Proyecto

El proyecto está organizado siguiendo una arquitectura modular y tipada con TypeScript:

- **`src/shared/data/categories.ts`**: El corazón del juego. Contiene el diccionario completo (`CATEGORIES`) con sus ítems y el sistema de **pistas crípticas**. Es el archivo principal para la expansión de contenido.
- **`src/shared/types/game.ts`**: Define los contratos de datos (Interfaces). Aquí se especifica qué es un `Player`, un `GameState` y una `Category`.
- **`src/shared/utils/random.ts`**: Lógica de aleatorización. Se encarga de mezclar los jugadores, asignar roles (Impostor, Víctima en Modo Joda) y elegir quién arranca.
- **`src/modules/game/`**: Lógica del modo **Local**. Maneja el flujo de turnos, la visualización de palabras y la votación en una misma pantalla.
- **`src/modules/online/`**: Lógica del modo **Online**. Gestiona la sincronización de estados, salas y eventos en tiempo real.
- **`src/shared/ui/`**: Componentes visuales reutilizables (Botones, Modals, Cards) con un diseño premium y consistente.

### Análisis Técnico

1. **Gestión de Estado**: Se utiliza un sistema reactivo para manejar los cambios de fase del juego (Lobby -> Roles -> Discusión -> Votación).
2. **Sistema de Pistas**: Implementa una lógica de asociación lateral. Las pistas están diseñadas para ser tangenciales al objeto, obligando al Impostor a deducir el contexto sin tener la palabra directa.
3. **Escalabilidad**: El sistema de categorías permite agregar miles de palabras sin tocar la lógica del motor del juego.
4. **Modo Joda**: Una implementación creativa de "Impostor inverso" donde la mayoría engaña a uno solo, integrada fluidamente en el flujo de asignación de roles.

---