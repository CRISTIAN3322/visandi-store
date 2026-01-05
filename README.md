# 🛒 Visandi Store

Tienda online moderna construida con Astro, implementando arquitectura Atomic Design y metodología BEM para CSS. Sistema de pedidos integrado con WhatsApp.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Arquitectura](#arquitectura)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes](#componentes)
- [Estilos y Diseño](#estilos-y-diseño)
- [Responsive Design](#responsive-design)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 📱 **Totalmente Responsive**: Adaptado a todos los dispositivos (móvil, tablet, desktop)
- 🛒 **Carrito de Compras**: Sistema completo con validación y resumen de pedidos
- 📲 **Integración WhatsApp**: Envío de pedidos directamente por WhatsApp
- 🎯 **Atomic Design**: Arquitectura de componentes escalable y mantenible
- 🎨 **BEM Methodology**: Nomenclatura CSS clara y consistente
- ⚡ **Performance**: Optimizado para velocidad y SEO

## 🏗️ Arquitectura

### Atomic Design

El proyecto sigue la metodología **Atomic Design**, organizando los componentes en 5 niveles:

```
src/components/
├── atoms/          # Componentes básicos e indivisibles
│   ├── Button.astro
│   ├── CartBadge.astro
│   └── ProductImage.astro
│
├── molecules/      # Combinaciones de átomos
│   ├── CartTable.astro
│   └── ProductCard.astro
│
└── organisms/      # Componentes complejos
    ├── CartSummary.astro
    ├── ProductGrid.astro
    └── ShoppingCart.astro
```

#### **Atoms (Átomos)**
Componentes básicos que no pueden dividirse más:
- `Button`: Botón reutilizable con variantes
- `CartBadge`: Badge para mostrar cantidad en carrito
- `ProductImage`: Imagen de producto optimizada

#### **Molecules (Moléculas)**
Combinaciones de átomos que forman componentes más complejos:
- `ProductCard`: Tarjeta completa de producto con imagen, precio, botones
- `CartTable`: Tabla de productos en el carrito

#### **Organisms (Organismos)**
Componentes complejos que forman secciones completas:
- `ProductGrid`: Grid responsivo de productos
- `ShoppingCart`: Carrito lateral completo
- `CartSummary`: Resumen del pedido con totales

## 📁 Estructura del Proyecto

```
visandi-store/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes Atomic Design
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├── config/             # Configuraciones
│   │   └── whatsapp.ts
│   ├── data/              # Datos estáticos
│   │   └── products.json
│   ├── layouts/           # Layouts de página
│   │   └── Layout.astro
│   ├── pages/             # Páginas (rutas)
│   │   ├── index.astro
│   │   └── cart.astro
│   ├── services/          # Servicios y lógica
│   │   └── cartService.ts
│   ├── styles/            # Estilos CSS organizados
│   │   ├── base.css       # Estilos base y reset
│   │   ├── tokens.css     # Design tokens (variables)
│   │   ├── components.css # Estilos de componentes
│   │   ├── layout.css     # Estilos de layout
│   │   ├── pages.css      # Estilos de páginas
│   │   ├── accessibility.css
│   │   └── performance.css
│   └── types/             # Tipos TypeScript
│       └── Product.ts
├── package.json
└── README.md
```

## 🧩 Componentes

### Atoms

#### Button
Botón reutilizable con múltiples variantes y tamaños.

**Props:**
- `text`: Texto del botón
- `type`: 'primary' | 'secondary'
- `onClick`: Función JavaScript a ejecutar
- `fullWidth`: Boolean para ancho completo
- `icon`: Emoji o icono opcional

**Uso:**
```astro
<Button 
  text="Agregar al carrito" 
  type="primary" 
  onClick="addToCart(...)"
  fullWidth={true}
  icon="🛒"
/>
```

### Molecules

#### ProductCard
Tarjeta completa de producto con todas sus funcionalidades.

**Props:**
- `id`: ID único del producto
- `name`: Nombre del producto
- `price`: Precio del producto
- `images`: Array de URLs de imágenes
- `description`: Descripción del producto
- `stock`: Cantidad disponible
- `discount`: Porcentaje de descuento (opcional)
- `isNew`: Boolean para badge "Nuevo"
- `isFeatured`: Boolean para badge "Destacado"
- `rating`: Puntuación del producto (opcional)
- `category`: Categoría del producto (opcional)

**Características:**
- Carrusel de imágenes automático
- Badges de descuento, nuevo y destacado
- Indicador de stock
- Botón de favoritos
- Vista rápida
- Rating con estrellas

### Organisms

#### ProductGrid
Grid responsivo que muestra todos los productos.

**Props:**
- `products`: Array de productos

**Características:**
- Grid adaptativo (1-4 columnas según pantalla)
- Animaciones de entrada escalonadas
- Optimizado para performance

#### ShoppingCart
Carrito lateral deslizable con funcionalidad completa.

**Características:**
- Abre/cierra desde el header
- Muestra productos agregados
- Total dinámico
- Botones de acción (enviar, vaciar)
- Persistencia en localStorage

## 🎨 Estilos y Diseño

### Metodología BEM

El proyecto utiliza **BEM (Block Element Modifier)** para nombrar las clases CSS:

```css
/* Block */
.product-card { }

/* Element */
.product-card__title { }
.product-card__image { }

/* Modifier */
.product-card--featured { }
.product-card__badge--discount { }
```

### Design Tokens

Todos los valores de diseño están centralizados en `tokens.css`:

- **Colores**: Paleta de azules con variantes
- **Espaciado**: Sistema de 8px (--space-1 a --space-24)
- **Tipografía**: Tamaños y pesos de fuente
- **Bordes**: Radios y anchos
- **Sombras**: Sistema de sombras escalonado
- **Transiciones**: Duraciones y curvas

### Organización de Estilos

```
styles/
├── base.css          # Reset, normalización, utilidades base
├── tokens.css        # Variables CSS (design tokens)
├── components.css    # Estilos de componentes (atoms, molecules, organisms)
├── layout.css        # Header, footer, layout general
├── pages.css         # Estilos específicos de páginas
├── accessibility.css # Mejoras de accesibilidad
└── performance.css   # Optimizaciones de performance
```

## 📱 Responsive Design

El proyecto está completamente adaptado para todos los dispositivos:

### Breakpoints

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm - Tablets pequeñas */ }
@media (min-width: 768px)  { /* md - Tablets */ }
@media (min-width: 1024px) { /* lg - Desktop */ }
@media (min-width: 1280px) { /* xl - Desktop grande */ }
```

### Grid de Productos

- **Mobile (< 640px)**: 1 columna
- **Tablet (640px - 1024px)**: 2 columnas
- **Desktop (1024px - 1280px)**: 3 columnas
- **Desktop Grande (> 1280px)**: 4 columnas

### Carrito Lateral

- **Mobile**: Ocupa 100% del ancho
- **Desktop**: Ancho máximo de 28rem (448px)

### Hero Section

- **Mobile**: Padding reducido, texto más pequeño
- **Desktop**: Padding completo, texto grande, botones en fila

## ⚙️ Configuración

### Número de WhatsApp

El número de WhatsApp del distribuidor se configura en:

```typescript
// src/config/whatsapp.ts
export const DEFAULT_WHATSAPP_NUMBER = '573123293314';
```

**Configuración desde la UI:**
1. Ir a la página del carrito (`/cart`)
2. En el campo "Número de WhatsApp del distribuidor"
3. Ingresar el número en formato internacional (solo dígitos)
4. Se guarda automáticamente en localStorage

### Productos

Los productos se definen en `src/data/products.json`:

```json
{
  "id": "1",
  "name": "Nombre del Producto",
  "price": 50000,
  "images": ["/images/product.jpg"],
  "description": "Descripción del producto"
}
```

## 🚀 Desarrollo

### Requisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run astro` | Ejecuta comandos de Astro CLI |

### Estructura de Desarrollo

1. **Componentes**: Crear en la carpeta correspondiente según Atomic Design
2. **Estilos**: Agregar estilos en el archivo CSS apropiado usando BEM
3. **Páginas**: Crear nuevas páginas en `src/pages/`
4. **Datos**: Modificar productos en `src/data/products.json`

## 📦 Despliegue

### Build de Producción

```bash
npm run build
```

El build se genera en la carpeta `./dist/` lista para desplegar.

### Plataformas Recomendadas

- **Vercel**: Despliegue automático desde GitHub
- **Netlify**: Despliegue automático desde GitHub
- **Cloudflare Pages**: Despliegue rápido y global
- **GitHub Pages**: Gratis para proyectos públicos

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico. El número de WhatsApp se configura desde la UI.

## 🎯 Mejores Prácticas

### BEM

- Usar nombres descriptivos y claros
- Mantener la jerarquía Block > Element > Modifier
- Evitar anidamientos profundos (> 2 niveles)

### Atomic Design

- Mantener componentes pequeños y reutilizables
- Atoms no deben depender de otros componentes
- Organisms pueden usar molecules y atoms

### Performance

- Imágenes optimizadas (usar formatos modernos)
- Lazy loading para imágenes fuera del viewport
- Minimizar JavaScript en el cliente
- Usar CSS puro cuando sea posible

### Accesibilidad

- Semántica HTML correcta
- Atributos ARIA cuando sea necesario
- Contraste de colores adecuado
- Navegación por teclado funcional

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Atomic Design](https://atomicdesign.bradfrost.com/)
- [BEM Methodology](http://getbem.com/)
- [Design Tokens](https://www.designtokens.org/)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Desarrollado con ❤️ usando Astro, Atomic Design y BEM**
