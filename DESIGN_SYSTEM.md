# Sistema de Diseño & Guía de Presentación Comercial — Spaz Altor (2026)

Este documento contiene el **Sistema de Diseño completo** del nuevo e-commerce de **Spaz Altor** y el **Prompt Maestro listo para copiar y pegar en Claude** (Artifacts / Claude Design) para generar las diapositivas de venta del proyecto ante el cliente.

---

## 1. Filosofía y Dirección de Arte: *Editorial Athletic Studio*

El rediseño abandona la estética genérica de plantillas oscuras saturadas de cajas redondeadas para adoptar el lenguaje visual de las marcas líderes de ropa técnica mundial (**On Running, Tracksmith, Zara Athleticz, Lululemon**):

1. **Luz de Estudio y Fidelidad Textil**: Quien compra ropa deportiva necesita ver el tono real de la prenda (Azul Rey, Verde Antioquia, Terracota, Fucsia). El lienzo blanco puro (`#FFFFFF`) y piedra suave (`#F7F7F8`) actúa como una galería de luz natural.
2. **Diseño Arquitectónico "Unboxed" (Cero Cajas Artificiales)**: Se eliminan las tarjetas con bordes grises, sombras pesadas e íconos encerrados en cuadritos. La estructura se sostiene mediante **fotografía a sangre**, **espacio en blanco generoso** y **líneas divisorias finas de `1px` (`#E5E5E7`)**.
3. **Jerarquía Tipográfica Deportiva**: Contraste extremo entre titulares condensados de impacto (`Bebas Neue`) y textos técnicos limpios con alto espaciado entre letras (`Inter`).

---

## 2. Tokens de Color (Paleta Oficial)

| Token / Variable | Código HEX | Uso en el Sistema |
|---|---|---|
| `brand-black` | `#0A0A0A` | Textos principales, botones primarios de compra, barra de anuncio superior. |
| `brand-red` | `#E50914` | Acento insignia de Altor. Titulares clave (*"SIN LÍMITES"*), indicadores activos, alertas de stock/bolsa. |
| `brand-green` | `#5CB811` | Acento funcional Spaz. Certificación UPF 50+, disponibilidad inmediata y canal oficial de WhatsApp. |
| `studio-bg` | `#FFFFFF` | Fondo general de la tienda, Header y fichas de producto. |
| `studio-muted` | `#F7F7F8` | Pedestal fotográfico de las prendas (relación `3:4`) y fondo de secciones editoriales. |
| `studio-border` | `#E5E5E7` | Líneas divisorias sutiles (`1px solid`) para estructurar sin encerrar en cajas. |
| `text-secondary` | `#525252` | Descripciones técnicas, subtítulos y especificaciones de tela. |
| `text-muted` | `#A3A3A3` | Migas de pan, etiquetas de categoría secundarias y referencias. |

---

## 3. Sistema Tipográfico

### A. Fuente de Impacto (Display): **`Bebas Neue`**
- **Hero Principal (`H1`)**: `72px – 88px` | `line-height: 0.92` | `tracking: -0.02em` | Uppercase.
- **Títulos de Sección (`H2`)**: `48px – 60px` | `line-height: 1.0` | Uppercase.
- **Nombres de Prenda en Catálogo (`H3`)**: `24px` | `line-height: 1.15` | `tracking: 0.04em`.
- **Numeración de Ingeniería (`01 – 04`)**: `28px` en color `#E50914`.

### B. Fuente de Interfaz y Lectura (UI & Body): **`Inter`**
- **Eyebrows / Tags superiores**: `11px` | `font-weight: 700` | `tracking: 0.2em` | Uppercase.
- **Botones de Acción (CTA)**: `12px` | `font-weight: 700` | `tracking: 0.18em` | Uppercase.
- **Párrafos Descriptivos**: `15px – 16px` | `line-height: 1.6` | `font-weight: 400`.
- **Precios**: `14px` (`font-weight: 600`) en grilla; `30px` (`Bebas Neue`) en ficha de producto.

---

## 4. Reglas de Componentes Clave

1. **Botones Arquitectónicos (`0px border-radius`)**:
   - **Primario Hero**: Fondo `#E50914`, texto `#FFFFFF`, padding `16px 32px`, flecha animada al pasar el cursor (`translate-x-1`).
   - **Primario E-commerce**: Fondo `#0A0A0A`, texto `#FFFFFF`, ancho completo en barra de compra.
   - **Secundario / Ghost**: Fondo `#FFFFFF`, texto `#0A0A0A`, borde `#D4D4D8` (`1px`).
2. **Hero Full-Bleed + Marquee Técnico**:
   - Imagen de atletas a pantalla completa con viñeta lateral izquierda (`from-black/75 via-black/40 to-transparent`) para lectura limpia sin parches ni cajas.
   - Banda inferior en movimiento continuo horizontal (`28s linear infinite`) exhibiendo las 6 propiedades textiles (UPF 50+, Bi-Stretch, Sportsec, Costuras Planas, Ajuste Anatómico, Pago Contra Entrega).
3. **Lookbook de Categorías (3 Columnas a Sangre)**:
   - División tripartita (`Mujeres` / `Hombres` / `Infantil`) de `600px` de alto, sin márgenes intermedios, con zoom suave (`scale-105` en `700ms`) y activación directa del filtro del catálogo.
4. **Exhibición de Producto "Unboxed"**:
   - Contenedor vertical `3:4` en `#F7F7F8` sin bordes externos.
   - Selector de color interactivo (círculos de `14px` con anillo activo `ring-neutral-900`) que cambia la foto de la prenda en tiempo real sin recargar la página.
5. **Manifiesto de Ingeniería Textil (Estilo Revista)**:
   - Composición asimétrica `5 columnas (Foto) + 7 columnas (Índice técnico 01-04)` separada únicamente por filetes horizontales de `1px`.

---

## 5. Prompt Maestro para Copiar y Pegar en Claude (Generador de Slides de Venta)

Copia todo el bloque de abajo y pégalo directamente en **Claude** (con Artifacts activado) para que te construya la presentación interactiva lista para exponer ante el cliente:

```text
Actúa como un Director Creativo Senior y Estratega de E-commerce Deportivo. Necesito que crees una presentación interactiva en HTML/Tailwind (tipo Pitch Deck de 8 diapositivas navegables con teclado y botones) para venderle al dueño de la marca colombiana "Spaz Altor" (Medellín) el nuevo rediseño completo de su tienda en línea.

### REGLAS VISUALES ESTRICTAS (DESIGN SYSTEM SPAZ ALTOR):
PROHIBIDO usar el estilo típico de IA (nada de modo oscuro pesado, nada de gradientes morados/azules, nada de decenas de tarjetas redondeadas con sombras ni iconitos en cajas).
Debes aplicar estrictamente nuestro Design System "Editorial Athletic Studio" (inspirado en On Running, Tracksmith y Zara Athleticz):
- Fuentes (cárgalas de Google Fonts): 'Bebas Neue' para todos los titulares, métricas y números grandes; 'Inter' para textos, etiquetas y tablas.
- Paleta de colores exacta:
  - Fondo principal: Blanco estudio (#FFFFFF) y Gris piedra suave (#F7F7F8).
  - Texto principal y botones: Negro profundo (#0A0A0A).
  - Acento Primario (Rojo Altor): #E50914.
  - Acento Funcional (Verde Spaz): #5CB811.
  - Líneas divisorias: 1px solid #E5E5E7 (usa líneas finas y grillas arquitectónicas de bordes rectos 0px en lugar de cajas redondeadas).

### ESTRUCTURA DE LAS 8 SLIDES QUE DEBES GENERAR:

1. **SLIDE 1 — PORTADA EDITORIAL**:
   - Eyebrow: "PROPUESTA DE REDISEÑO E-COMMERCE · MEDELLÍN 2026"
   - Título masivo en Bebas Neue: "SPAZ ALTOR: DE CATÁLOGO DIGITAL A MARCA DE ALTO RENDIMIENTO."
   - Subtítulo sobre cómo la nueva plataforma eleva el valor percibido de las prendas nacionales al estándar de marcas globales.

2. **SLIDE 2 — EL DIAGNÓSTICO (ANTES VS. AHORA)**:
   - Comparativa clara en tabla editorial (sin cajas redondeadas):
     - Antes: Dependencia de servicios externos inactivos, estética sobrecargada, peso excesivo del código (717 kB), línea infantil oculta.
     - Ahora: Arquitectura propia ultrarrápida (205 kB, -71% de peso), estética limpia de estudio, catálogo de 20 referencias 100% funcional hoy mismo.

3. **SLIDE 3 — DIRECCIÓN DE ARTE: ¿POR QUÉ LUZ DE ESTUDIO?**:
   - Explicación visual de cómo el fondo blanco/piedra (#FFFFFF / #F7F7F8) hace que los 18 colores reales de licras y buzos (Azul Rey, Verde Antioquia, Fucsia, Terracota) se vean con fidelidad real, aumentando la confianza de compra.
   - Muestra visualmente los swatches del Design System (#0A0A0A, #E50914, #5CB811, #F7F7F8) y la dupla tipográfica (Bebas Neue + Inter).

4. **SLIDE 4 — EL NUEVO HERO & NARRATIVA DE INGENIERÍA**:
   - Explica el impacto de los primeros 3 segundos: Fotografía a pantalla completa + Cinta horizontal en movimiento continuo (Marquee) que educa al cliente en las 4 tecnologías de Altor: Protección Solar UPF 50+, Tejido Bi-Stretch, Secado Sportsec y Costuras Antifricción.

5. **SLIDE 5 — APERTURA COMERCIAL: MUJERES, HOMBRES Y LÍNEA INFANTIL**:
   - Muestra el nuevo Lookbook de 3 columnas a sangre.
   - Argumento de negocio: Al darle protagonismo directo a la "Línea Infantil & Escuelas" junto a Mujeres y Hombres, se abre la puerta a ventas para clubes de patinaje y escuelas deportivas en toda Colombia.

6. **SLIDE 6 — EXPERIENCIA DE PRODUCTO INTERACTIVA ("UNBOXED")**:
   - Explica cómo el cliente puede cambiar el color de cada prenda en vivo desde el catálogo, alternar entre versión Infantil ($40.000) y Adulto ($50.000 - $70.000), elegir corte Hombre/Dama y consultar la ficha técnica oficial sin fricción.

7. **SLIDE 7 — MOTOR DE CONVERSIÓN PARA COLOMBIA (CONTRA ENTREGA + WHATSAPP)**:
   - Diagrama limpio del flujo de cierre de ventas:
     - Productos con precio confirmado -> Bolsa de compras deslizable -> Formulario rápido de Pago Contra Entrega (sin pasarelas complicadas que frenen la compra).
     - Productos por cotizar o ventas al por mayor -> Botón inteligente que abre WhatsApp (+57 311 433 7982) con el nombre, corte y color exacto de la prenda ya redactado.

8. **SLIDE 8 — IMPACTO Y PRÓXIMOS PASOS**:
   - Resumen de métricas técnicas (Carga en ~0.35s, 20 productos modelados, 151 fotografías WebP optimizadas, diseño modular escalable).
   - Llamado a la acción final para aprobar e implementar en el dominio oficial spazaltor.com.co.

Incluye controles elegantes en la parte inferior para avanzar/retroceder entre diapositivas, indicador de progreso (ej. "01 / 08") y soporte para flechas del teclado.
```
