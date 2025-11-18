Visandi Store - Guía rápida

Descripción
Visandi Store es una tienda en Astro con flujo de compra vía WhatsApp. Incluye catálogo, carrito con resumen y validaciones, y envío del pedido por WhatsApp con un número configurable.

Características clave
- Catálogo con tarjetas modernas, carrusel de imágenes, badges y rating.
- Inventario mostrado en tarjeta; configurado a 1 unidad por producto en el grid.
- Carrito con formulario validado, totales dinámicos y envío por WhatsApp.
- Número de WhatsApp configurable y persistente (localStorage).
- Botones flotantes (FAB) globales: WhatsApp y Carrito.

Configurar el número de WhatsApp del distribuidor
1) En la página de carrito (/cart):
   - En el bloque “Resumen del Pedido” aparece el campo “Número de WhatsApp del distribuidor”.
   - Ingresa el número en formato internacional, solo dígitos. Ejemplo: 573001234567
   - Se valida (10–15 dígitos) y se guarda automáticamente en el navegador.

2) Uso del número:
   - Se usa al enviar desde: botón principal del resumen, botón inferior de la página y FAB de WhatsApp.
   - En Inicio, el FAB de WhatsApp toma el número guardado; si no existe, usa el fallback 573045428015.

Estructura relevante
- src/pages/index.astro: Home, grid de productos y FAB de WhatsApp.
- src/components/organisms/ProductGrid.astro: Render del grid (stock=1).
- src/components/molecules/ProductCard.astro: Tarjeta de producto y sus estilos.
- src/pages/cart.astro: Carrito, validación, envío a WhatsApp y configuración del número.
- src/layouts/Layout.astro: Estilos globales de FAB.

Inventario de productos
- Por requerimiento, cada producto en el grid se presenta con stock=1.
- La tarjeta muestra el indicador de stock y estados visuales.

Envío del pedido por WhatsApp
- El mensaje incluye datos del cliente, detalle de productos, subtotales, envío, total y métodos de pago.
- Plantilla editable en src/pages/cart.astro dentro de sendToWhatsApp().

Desarrollo
Requisitos: Node 18+

Comandos típicos
```bash
npm install
npm run dev
npm run build
npm run preview
```

Notas de estilo
- Tarjetas con estilo moderno (glass/dark), transiciones suaves y enfoque en legibilidad.
- FABs globales definidos en Layout para reutilización en todas las páginas.

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
