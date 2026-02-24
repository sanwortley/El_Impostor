# Impostor Party 🕵️‍♂️🔥

¡Bienvenido a **Impostor Party**! Una aplicación web diseñada para jugar con amigos al estilo "Impostor" (o "Infiltrado") usando UN solo celular.

## 🚀 Cómo empezar

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```
2.  **Correr en local:**
    ```bash
    npm run dev
    ```
3.  **Construir para producción:**
    ```bash
    npm run build
    ```

## 🎮 Reglas del Juego

1.  **Jugadores:** Mínimo 3, máximo 12.
2.  **Roles:**
    *   **Infiltrados:** No conocen la categoría ni la palabra secreta. Deben mentir y pasar desapercibidos.
    *   **Ciudadanos:** Conocen la categoría y los parámetros. Deben encontrar a los impostores.
3.  **Modos Especiales:**
    *   **Modo Caos:** ¡Todos son impostores! 😈
    *   **Modo Pista:** Los ciudadanos solo ven una pista corta en lugar de toda la información.
4.  **Flujo:**
    *   El Host configura la partida.
    *   Se pasa el celular de mano en mano.
    *   Cada jugador mantiene presionado para ver su rol.
    *   ¡Debaten y votan quién es el impostor!

## 📂 Arquitectura

El proyecto sigue una estructura profesional **feature-based**:
- `src/features`: Lógica dividida por secciones del juego (Setup, Reveal, Summary).
- `src/shared`: Componentes UI reutilizables, tipos, utilidades y datos.
- `src/app`: Proveedores y orquestación principal.
- **Zustand** para el estado global (sin boilerplates pesados).
- **TailwindCSS** para un diseño ultra-premium y responsivo.

## 📝 Agregar más categorías

Para agregar tus propias categorías, simplemente edita:
`src/shared/data/categories.ts`

Cada categoría sigue este formato:
```typescript
{
  id: 'unique-id',
  name: 'Nombre de la Categoría',
  description: 'Breve descripción',
  parameters: ['Opción 1', 'Opción 2', 'Opción 3'],
  hint: 'Una pista sutil'
}
```

---
Creado con ❤️ para noches de juegos inolvidables.
