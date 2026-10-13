# Sistema de Diseño & Plantilla Editable para Claude Design — Spaz Altor (2026)

Este documento contiene:
1. **Los Tokens del Sistema de Diseño (*Editorial Athletic Studio*)** para mantener coherencia visual en las diapositivas.
2. **Elinventario de Módulos Maquetados (Alcance Frontend UI/UX)**.
3. **La Plantilla de Prompt Editable para Claude Design / Artifacts**, estructurada con bloques `[EDITABLE]` para que puedas cambiar textos, alcances, precios o tiempos antes de generar tus slides.

---

## 1. Tokens Visuales para las Slides (*Editorial Athletic Studio*)

- **Tipografía**:
  - **Titulares y Números**: `Bebas Neue` (Uppercase, tracking `-0.02em` a `0.04em`).
  - **Cuerpo, Tablas y Labels**: `Inter` (`400`, `500`, `600`, `700`).
- **Paleta de Color**:
  - `Blanco Estudio`: `#FFFFFF` (Fondo principal)
  - `Piedra Suave`: `#F7F7F8` (Fondos secundarios y contenedores de fotos)
  - `Negro Profundo`: `#0A0A0A` (Tipografía principal, botones primarios, bloque de Newsletter y Footer)
  - `Rojo Altor`: `#E50914` (Acento de marca, indicadores activos y CTAs principales)
  - `Verde Spaz`: `#5CB811` (Sellos de tecnología textil UPF 50+ y confirmaciones visuales)
  - `Filetes / Bordes`: `#E5E5E7` (`1px solid`, esquinas a `0px` sin bordes redondeados)

---

## 2. Inventario de Vistas y Componentes Maquetados (Fase Frontend)

1. **Barra de Anuncio + Header con Mega-Menús Desplegables**:
   - Logos vectoriales oficiales (`Spaz` + `Altor`).
   - Navegación con mega-menús al pasar el cursor para **Mujeres**, **Hombres**, **Niños**, **Deporte** (4 columnas) y **Ofertas** (2 columnas) + buscador desplegable y contador de bolsa.
2. **Hero Full-Bleed + Marquee de Ingeniería Textil**:
   - Fotografía panorámica con degradado lateral sutil y tipografía limpia.
   - Cinta inferior animada con las 6 propiedades técnicas (UPF 50+, Bi-Stretch, Sportsec, Costuras Planas, Ajuste Anatómico, Envíos Nacionales).
3. **Lookbook de Categorías (3 Columnas a Sangre)**:
   - División visual para **Mujeres**, **Hombres** e **Infantil** con fotografía editorial y micro-interacción de zoom suave.
4. **Catálogo "Unboxed" + Tarjetas con Selector de Color en Vivo**:
   - Grilla limpia de 4 columnas sin cajas pesadas, pestañas minimalistas subrayadas y swatches circulares que cambian la foto de la prenda al pasar el cursor.
5. **Sección Editorial de Tecnología Textil (Estilo Revista)**:
   - Composición asimétrica con fotografía a la izquierda e índice numerado (`01` a `04`) separado por filetes de `1px`.
6. **Ficha Detallada de Producto (Product Detail View)**:
   - Galería principal `4:5` + miniaturas y fichas técnicas (`ficha-*.jpg`), selectores geométricos (`0px`) de Versión, Corte, Color y Talla, y tabla desplegable de medidas.
7. **Llamado a la Acción (Newsletter CTA) + Footer Oficial + 5 Páginas Informativas**:
   - Bloque de suscripción al boletín en alto contraste (`#0A0A0A`).
   - Footer con datos de Medellín y acceso a 5 vistas informativas maquetadas (*Sobre Nosotros*, *Guía de Tallas*, *Envíos y Entregas*, *Devoluciones y Cambios*, *Política de Privacidad*).
8. **Drawer de Bolsa de Compras + Modal Visual de Checkout**:
   - Interfaz completa de carrito lateral y formulario de despacho listos a nivel visual para conectarse al backend en la siguiente etapa.

---

## 3. Prompt Maestro Editable para Claude Design (Copiar, Editar y Pegar)

> **Instrucciones**: Reemplaza o ajusta los textos entre corchetes **`[EDITAR: ...]`** según lo que quieras presentar o negociar con el cliente, y pégalo en **Claude**.

```text
Actúa como un Director de Arte UI/UX Senior. Necesito que generes una presentación interactiva en HTML/Tailwind (Pitch Deck de 8 diapositivas navegables con flechas del teclado y botones en pantalla) para presentar el proyecto de Rediseño UI/UX y Maquetación Frontend de la marca deportiva "Spaz Altor".

### 1. DATOS EDITABLES DEL PROYECTO (USA ESTA INFORMACIÓN EN LAS SLIDES):
- Nombre del Cliente / Marca: [EDITAR: Diseños Spaz S.A.S. — Marcas Spaz y Altor (Medellín, Colombia)]
- Autor / Estudio que presenta: [EDITAR: Tu Nombre o Estudio de Diseño]
- Alcance de esta entrega (Fase 1): [EDITAR: Diseño de Sistema Visual (Design System) + Maquetación Frontend Completa en React, TypeScript y Tailwind CSS (100% UI/UX interactivo, sin lógica de backend)]
- Alcance de la siguiente etapa (Fase 2 - Futura): [EDITAR: Integración de Backend, Base de Datos, Reglas de Negocio, Inventario en tiempo real y Pasarela de Pagos / API]
- Propuesta de Valor Principal: [EDITAR: Pasar de una plantilla genérica y pesada a una interfaz editorial de estándar internacional (estilo On Running / Tracksmith / Zara Athleticz)]
- Inversión / Tiempos / Condiciones (Slide Final): [EDITAR: Definir aquí si quieres mostrar fases de entrega, cronograma o inversión, o dejarlo como cierre de aprobación de diseño]

### 2. REGLAS VISUALES ESTRICTAS PARA LAS SLIDES (DESIGN SYSTEM SPAZ ALTOR):
PROHIBIDO usar estética genérica de IA (nada de fondos oscuros morados/azulados, nada de tarjetas con bordes muy redondeados, nada de sombras difusas ni emojis).
Aplica estrictamente el sistema visual "Editorial Athletic Studio":
- Tipografías (Google Fonts): 'Bebas Neue' para todos los títulos, numeraciones (01, 02...) y métricas; 'Inter' para párrafos, tablas y etiquetas.
- Colores exactos:
  - Fondo principal: Blanco Estudio (#FFFFFF) y Gris Piedra (#F7F7F8).
  - Texto y bloques de contraste: Negro Profundo (#0A0A0A).
  - Acento primario: Rojo Altor (#E50914).
  - Acento secundario: Verde Spaz (#5CB811).
  - Líneas divisorias: 1px solid #E5E5E7 con esquinas rectas (border-radius: 0px).

### 3. ESTRUCTURA DE LAS 8 DIAPOSITIVAS:

- SLIDE 1 — PORTADA EDITORIAL:
  - Eyebrow: "PRESENTACIÓN DE DISEÑO UI/UX & MAQUETACIÓN FRONTEND"
  - Título en Bebas Neue: "SPAZ ALTOR: NUEVA EXPERIENCIA DIGITAL DE ALTO RENDIMIENTO"
  - Subtítulo y créditos según los datos editables.

- SLIDE 2 — DIAGNÓSTICO VISUAL Y ARQUITECTÓNICO (ANTES VS. REDISEÑO):
  - Comparativa clara en tabla editorial de bordes rectos:
    - Sitio Anterior: Estética saturada de cajas oscuras, navegación confusa, dependencias innecesarias de terceros y baja jerarquía fotográfica.
    - Nuevo Frontend: Código limpio hecho a medida, carga instantánea, cero dependencias basura y foco total en la fotografía real de las prendas.

- SLIDE 3 — SISTEMA DE DISEÑO "EDITORIAL ATHLETIC STUDIO":
  - Muestra visualmente la paleta (#FFFFFF, #F7F7F8, #0A0A0A, #E50914, #5CB811), la dupla tipográfica (Bebas Neue + Inter) y el principio de "Luz de Estudio" para que los 18 colores textiles reales se perciban con total fidelidad.

- SLIDE 4 — ARQUITECTURA DE NAVEGACIÓN & PRIMER IMPACTO:
  - Mega-menús desplegables estructurados por género (Mujeres, Hombres, Niños), por disciplina (Deporte en 4 columnas) y Ofertas.
  - Hero a pantalla completa + Cinta Marquee horizontal con las tecnologías textiles de la marca (UPF 50+, Bi-Stretch, Sportsec).

- SLIDE 5 — EXHIBICIÓN COMERCIAL: LOOKBOOK & CATÁLOGO "UNBOXED":
  - Lookbook tripartito a sangre (Mujeres / Hombres / Infantil).
  - Grilla de catálogo sin cajas artificiales ("Unboxed"), con selector visual de colores (swatches) que permite previsualizar cada variante sobre fondo neutro #F7F7F8.

- SLIDE 6 — VISTAS INTERNAS MAQUETADAS: FICHA DE PRODUCTO & PÁGINAS CORPORATIVAS:
  - Ficha de producto estilo estudio con galería técnica, selectores geométricos (Versión, Corte, Color, Talla) y guía de medidas integrada.
  - Bloque de suscripción a la Comunidad Altor (Newsletter CTA), Footer oficial y 5 páginas informativas completas (Sobre Nosotros, Guía de Tallas, Envíos, Cambios y Privacidad).

- SLIDE 7 — PREPARACIÓN PARA FASE 2 (ARQUITECTURA LISTA PARA BACKEND):
  - Explica claramente la separación de responsabilidades:
    - Lo que ya está listo hoy (Fase 1): 100% de la maquetación visual, componentes interactivos en React/TypeScript, vistas de carrito lateral y modal de checkout maquetados y libres de reglas de negocio rígidas.
    - Lo que se conectará en la Fase 2 (Backend): API de productos/stock, lógica de negocio en servidor, procesamiento de pedidos y panel administrativo.

- SLIDE 8 — HOJA DE RUTA Y PRÓXIMOS PASOS:
  - Resumen de entregables del Frontend y llamado a la acción según los datos editables.

Añade en la barra inferior controles limpios de navegación (Anterior / Siguiente), contador de slide ("01 / 08") y un botón opcional "Modo Edición de Textos" (que active contenteditable="true" en todos los textos de las slides para poder editar cualquier título o párrafo directamente en el navegador antes de presentar).
```
