# Mapeo de uso de CSS — style.css

**Proyecto:** REMEC S.A.S.  
**Hoja de estilos:** `css/style.css`  
**Páginas analizadas:** 9

---

## 1. Variables, Reset y Utilidades Globales

> **Usadas por TODAS las páginas.**

### Variables CSS (`:root`)
Definidas en `style.css` líneas 7-45. Son consumidas indirectamente por casi todas las reglas y por estilos `inline` en el HTML.

| Variable | Valor |
|----------|-------|
| `--remec` | `#09875a` |
| `--blue` | `#007bff` |
| `--indigo` | `#6610f2` |
| `--purple` | `#6f42c1` |
| `--pink` | `#e83e8c` |
| `--red` | `#dc3545` |
| `--orange` | `#fd7e14` |
| `--yellow` | `#ffc107` |
| `--green` | `#28a745` |
| `--teal` | `#20c997` |
| `--cyan` | `#17a2b8` |
| `--white` | `#fff` |
| `--gray` | `#6c757d` |
| `--gray-dark` | `#343a40` |
| `--primary` | `#007bff` |
| `--secondary` | `#6c757d` |
| `--success` | `#28a745` |
| `--info` | `#17a2b8` |
| `--warning` | `#ffc107` |
| `--danger` | `#dc3545` |
| `--light` | `#f8f9fa` |
| `--dark` | `#343a40` |
| `--breakpoint-xs` | `0` |
| `--breakpoint-sm` | `576px` |
| `--breakpoint-md` | `768px` |
| `--breakpoint-lg` | `992px` |
| `--breakpoint-xl` | `1200px` |
| `--font-family-sans-serif` | stack de fuentes |
| `--font-family-monospace` | stack de fuentes |
| `--rmc2-maxw` | `1200px` |
| `--rmc2-border` | `#e2e5e8` |

### Reset base
- `* { box-sizing: border-box; }`  
- `html { scroll-behavior: smooth; }`  
- `body { margin: 0; background: var(--white); color: var(--dark); font-family: var(--font-family-sans-serif); -webkit-font-smoothing: antialiased; line-height: 1.6; overflow-x: hidden; }`  
- `img { max-width: 100%; display: block; }`  
- `a { color: inherit; text-decoration: none; }`  
- `ul { margin: 0; padding: 0; }`  
- `h1, h2, h3, h4 { margin: 0; font-weight: 800; letter-spacing: -0.01em; }`

### Utilidades globales
| Clase | Uso |
|-------|-----|
| `.rmc2-mono` | Fuente monoespaciada en: index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-wrap` | Contenedor máximo en: index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-reveal` | Animación de entrada en: index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-d1`, `.rmc2-d2`, `.rmc2-d3` | Delays de animación en: index, Servicios, Filo, Arquimedex, Contacto |
| `.rmc2-eyebrow` | Etiqueta superior en: index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |

---

## 2. Mapeo por Bloques CSS

### A) GLOBAL — Usado en TODAS las páginas

| Bloque / Selector | Páginas que lo usan |
|-------------------|---------------------|
| **Header / Navegación** | |
| `.rmc2-header` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-navrow` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-brand` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-brand img` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-navlinks` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-navlinks ul` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-navlinks a` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-navlinks a:hover` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-navlinks a::after` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-navlinks a.rmc2-active` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-navlinks a.rmc2-active::after` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-cta-btn` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-burger` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-burger span` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| **Menú móvil** | |
| `.rmc2-scrim` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-mobile-menu` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-mobile-menu ul` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-mobile-menu a` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-mobile-menu a:hover` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-mobile-menu a.rmc2-active` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-mobile-menu .rmc2-cta-btn` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| **Botones** | |
| `.rmc2-btn` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-btn-solid` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| **Secciones** | |
| `.rmc2-section` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| **Footer** | |
| `.rmc2-footer` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer-grid` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer-brand` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer-brand img` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer p` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer h6` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer-links` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer-links a` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer-links a:hover` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer-bottom` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-footer-bottom span` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| **Social** | |
| `.rmc2-social-row` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-social-row button` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-box` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-box:before` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-box:after` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-box:hover` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-box:hover:before` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-box:hover:after` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| **Strips / Cintas** | |
| `.rmc2-quote-strip` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-quote-strip p` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |
| `.rmc2-cta-strip` | index, Servicios, Filo, AP, Arquimedex, Artplasma, Clientes, Galeria, Contacto |

---

### B) ESPECÍFICO — Solo en algunas páginas

#### B.1) Solo en `index.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-hero` | Hero principal con grid |
| `.rmc2-hero-grid` | Layout 2 columnas del hero |
| `.rmc2-hero-copy` | Columna de texto del hero |
| `.rmc2-hero-copy h1` | Título principal (con `em` para color) |
| `.rmc2-hero-copy h1 em` | Palabra resaltada en verde |
| `.rmc2-hero-copy p` | Párrafo de introducción |
| `.rmc2-hero-actions` | Grupo de botones del hero |
| `.rmc2-btn-outline` | Botón bordeado (usado en hero y CTA band) |
| `.rmc2-btn-outline:hover` | Hover botón outline |
| `.rmc2-hero-media` | Columna multimedia del hero |
| `.rmc2-hero-media-frame` | Marco con clip-path |
| `.rmc2-hero-media-frame img`, `.rmc2-hero-media-frame video` | Multimedia inside frame |
| `.rmc2-hero-tag` | Etiqueta “EST. 1960” |
| `.rmc2-cut` | Divisor diagonal |
| `.rmc2-swatch-strip` | Franja de chips de colores |
| `.rmc2-swatch-chip` | Chip individual |
| `.rmc2-swatch-dot` | Punto de color del chip |
| `.rmc2-stats` | Banda de estadísticas |
| `.rmc2-stats-row` | Grid de stats |
| `.rmc2-stat` | Bloque individual de stat |
| `.rmc2-stat-num` | Número (contador animado) |
| `.rmc2-stat-label` | Etiqueta del stat |
| `.rmc2-about` | Grid “Nosotros” |
| `.rmc2-about-copy` | Texto de filosofía |
| `.rmc2-about-copy p` | Párrafos de about |
| `.rmc2-about-copy strong` | Texto resaltado |
| `.rmc2-mv-grid` | Grid Misión / Visión |
| `.rmc2-mv-card` | Tarjeta MV |
| `.rmc2-mv-card.mv-a` | Tarjeta Misión (fondo verde) |
| `.rmc2-mv-card.mv-b` | Tarjeta Visión (fondo oscuro) |
| `.rmc2-mv-card h4` | Título MV |
| `.rmc2-mv-card p` | Texto MV |
| `.rmc2-svc-grid` | Grid de 9 tarjetas de servicio |
| `.rmc2-svc-card` | Tarjeta de servicio |
| `.rmc2-svc-card:hover` | Hover tarjeta |
| `.rmc2-svc-tagnum` | Número de línea (ej: “LÍNEA 01 · ROJO”) |
| `.rmc2-svc-card h3` | Título del servicio |
| `.rmc2-svc-card p` | Descripción del servicio |
| `.rmc2-svc-card.c-red`, `.c-orange`, `.c-purple`, `.c-blue`, `.c-indigo`, `.c-teal`, `.c-cyan`, `.c-remec`, `.c-pink` | Variantes de color de borde |
| `.rmc2-brand-grid` | Grid de marcas propias |
| `.rmc2-brand-card` | Tarjeta de marca (Arte Plasma / Arquimedex) |
| `.rmc2-brand-card img` | Imagen de fondo |
| `.rmc2-brand-card:hover img` | Zoom imagen |
| `.rmc2-brand-card::after` | Gradiente oscuro |
| `.rmc2-brand-copy` |Texto superpuesto |
| `.rmc2-brand-copy .rmc2-eyebrow` | Eyebrow blanco |
| `.rmc2-brand-copy .rmc2-eyebrow::before` | Línea blanca |
| `.rmc2-brand-copy h3` | Título marca |
| `.rmc2-brand-copy p` | Texto marca |
| `.rmc2-cert-grid` | Grid de certificaciones |
| `.rmc2-cert` | Certificación individual |
| `.rmc2-cert h5` | Nombre certificación |
| `.rmc2-cert span` | Detalle / año |
| `.rmc2-cta-band` | Banda CTA verde |
| `.rmc2-cta-band h2` | Título CTA band |
| `.rmc2-cta-band p` | Texto CTA band |
| `.rmc2-cta-band .rmc2-btn-outline` | Botón outline dentro de CTA band |
| `.rmc2-cta-band .rmc2-btn-outline:hover` | Hover del botón |
| `.rmc2-contact` | Grid contacto / mapa |
| `.rmc2-contact-info` | Bloque info |
| `.rmc2-contact-info h2` | Título contacto |
| `.rmc2-contact-info p` | Texto contacto |
| `.rmc2-contact-map` | Mapa |
| `.rmc2-contact-map iframe` | Iframe de Google Maps |

#### B.2) Solo en `Servicios.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-page-hero` | Hero de página secundaria |
| `.rmc2-page-hero-img` | Imagen de fondo del hero |
| `.rmc2-page-hero-img img` | Imagen |
| `.rmc2-page-hero-scrim` | Capa oscura |
| `.rmc2-page-hero-content` | Contenido del hero |
| `.rmc2-page-hero-content .rmc2-eyebrow` | Eyebrow blanco |
| `.rmc2-page-hero-content .rmc2-eyebrow::before` | Línea verde |
| `.rmc2-page-hero-content h1` | Título de página |
| `.rmc2-page-hero-content h1 em` | Palabra resaltada |
| `.rmc2-page-hero-content p` | Párrafo del hero |
| `.rmc2-sec-head` | Encabezado de sección |
| `.rmc2-sec-head h2` | Título de sección |
| `.rmc2-sec-head p` | Texto de sección |
| `.rmc2-detail-block` | Bloque detalle imagen + texto |
| `.rmc2-detail-img` | Imagen lateral |
| `.rmc2-detail-img img` | Imagen |
| `.rmc2-detail-block:hover .rmc2-detail-img img` | Zoom hover |
| `.rmc2-detail-body` | Cuerpo de texto |
| `.rmc2-detail-body h3` | Título del servicio |
| `.rmc2-detail-body ul` | Lista |
| `.rmc2-detail-body li` | Item de lista |
| `.rmc2-detail-body li::before` |guión lateral |
| `.rmc2-detail-body li strong` | Negrita en ítem |

#### B.3) Solo en `Filo.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-page-hero` | Hero de página |
| `.rmc2-page-hero-img` | Imagen fondo |
| `.rmc2-page-hero-img img` | Imagen |
| `.rmc2-page-hero-scrim` | Scrim |
| `.rmc2-page-hero-content` | Contenido hero |
| `.rmc2-page-hero-content .rmc2-eyebrow` | Eyebrow |
| `.rmc2-page-hero-content .rmc2-eyebrow::before` | Línea |
| `.rmc2-page-hero-content h1` | Título |
| `.rmc2-page-hero-content h1 em` | Resaltado |
| `.rmc2-page-hero-content p` | Párrafo |
| `.rmc2-dot-list` | Lista de puntos (SGI) |
| `.rmc2-dot-list li` | Item |
| `.rmc2-dot-list li::before` | Punto verde |
| `.rmc2-sec-head` | Encabezado sección Valores |
| `.rmc2-sec-head h2` | Título |
| `.rmc2-value-grid` | Grid de valores |
| `.rmc2-value-card` | Tarjeta de valor |
| `.rmc2-value-card h4` | Título valor |
| `.rmc2-value-card p` | Texto valor |
| `.rmc2-photo-grid` | Grid de certificados (2 items) |
| `.rmc2-photo-item` | Item foto (inline, no usan hover ni num en este caso) |

#### B.4) Solo en `AP.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-page-hero` | Hero Postes |
| `.rmc2-page-hero-img` | Imagen fondo |
| `.rmc2-page-hero-img img` | Imagen |
| `.rmc2-page-hero-scrim` | Scrim |
| `.rmc2-page-hero-content` | Contenido hero |
| `.rmc2-page-hero-content .rmc2-eyebrow` | Eyebrow |
| `.rmc2-page-hero-content .rmc2-eyebrow::before` | Línea |
| `.rmc2-page-hero-content h1` | Título |
| `.rmc2-page-hero-content h1 em` | Resaltado |
| `.rmc2-page-hero-content p` | Párrafo |
| `.rmc2-photo-grid` | Grid de fotos de postes |
| `.rmc2-photo-item` | Item |
| `.rmc2-photo-num` | Número superpuesto |
| `.rmc2-lightbox` | Lightbox (modal) |
| `.rmc2-lightbox-close` | Botón cerrar |
| `.rmc2-lightbox img` | Imagen ampliada |

#### B.5) Solo en `Arquimedex.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-page-hero` | Hero Arquimedex |
| `.rmc2-page-hero-img` | Imagen fondo |
| `.rmc2-page-hero-img img` | Imagen |
| `.rmc2-page-hero-scrim` | Scrim |
| `.rmc2-page-hero-content` | Contenido hero |
| `.rmc2-page-hero-content .rmc2-eyebrow` | Eyebrow |
| `.rmc2-page-hero-content .rmc2-eyebrow::before` | Línea |
| `.rmc2-page-hero-content h1` | Título |
| `.rmc2-page-hero-content h1 em` | Resaltado |
| `.rmc2-page-hero-content p` | Párrafo |
| `.rmc2-logo-frame` | Marco del logo Arquimedex |
| `.rmc2-logo-frame img` | Logo |
| `.rmc2-dot-list` | Lista Beneficios / Aplicaciones |
| `.rmc2-dot-list li` | Item |
| `.rmc2-dot-list li::before` | Punto |
| `.rmc2-photo-grid` | Grid de fotos de bombas |
| `.rmc2-photo-item` | Item |
| `.rmc2-photo-num` | Número |
| `.rmc2-lightbox` | Lightbox |
| `.rmc2-lightbox-close` | Cerrar |
| `.rmc2-lightbox img` | Imagen ampliada |

#### B.6) Solo en `Artplasma.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-brand-text` | Texto “REMEC S.A.S.” junto al logo (solo esta página) |
| `.rmc2-page-hero` | Hero Arte Plasma |
| `.rmc2-page-hero-img` | Imagen fondo |
| `.rmc2-page-hero-img img` | Imagen |
| `.rmc2-page-hero-scrim` | Scrim |
| `.rmc2-page-hero-content` | Contenido hero |
| `.rmc2-page-hero-content .rmc2-eyebrow` | Eyebrow |
| `.rmc2-page-hero-content .rmc2-eyebrow::before` | Línea |
| `.rmc2-page-hero-content h1` | Título |
| `.rmc2-page-hero-content h1 em` | Resaltado |
| `.rmc2-page-hero-content p` | Párrafo |
| `.rmc2-logo-frame` | Marco logo Arte Plasma |
| `.rmc2-logo-frame img` | Logo |
| `.rmc2-photo-grid` | Grid de piezas |
| `.rmc2-photo-item` | Item |
| `.rmc2-photo-num` | Número |
| `.rmc2-lightbox` | Lightbox |
| `.rmc2-lightbox-close` | Cerrar |
| `.rmc2-lightbox img` | Imagen ampliada |

#### B.7) Solo en `Clientes.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-page-hero` | Hero Clientes |
| `.rmc2-page-hero-img` | Imagen fondo |
| `.rmc2-page-hero-img img` | Imagen |
| `.rmc2-page-hero-scrim` | Scrim |
| `.rmc2-page-hero-content` | Contenido hero |
| `.rmc2-page-hero-content .rmc2-eyebrow` | Eyebrow |
| `.rmc2-page-hero-content .rmc2-eyebrow::before` | Línea |
| `.rmc2-page-hero-content h1` | Título |
| `.rmc2-page-hero-content h1 em` | Resaltado |
| `.rmc2-page-hero-content p` | Párrafo |
| `.rmc2-client-manifest` | Lista de clientes |
| `.rmc2-client-manifest li` | Item cliente |
| `.rmc2-cl-num` | Número de cliente |
| `.rmc2-cl-name` | Nombre de cliente |

#### B.8) Solo en `Galeria.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-page-hero` | Hero Galería |
| `.rmc2-page-hero-img` | Imagen fondo |
| `.rmc2-page-hero-img img` | Imagen |
| `.rmc2-page-hero-scrim` | Scrim |
| `.rmc2-page-hero-content` | Contenido hero |
| `.rmc2-page-hero-content .rmc2-eyebrow` | Eyebrow |
| `.rmc2-page-hero-content .rmc2-eyebrow::before` | Línea |
| `.rmc2-page-hero-content h1` | Título |
| `.rmc2-page-hero-content h1 em` | Resaltado |
| `.rmc2-page-hero-content p` | Párrafo |
| `.rmc2-masonry` | Layout masonry |
| `.rmc2-masonry-item` | Item de galería |
| `.rmc2-masonry-item img` | Imagen |
| `.rmc2-masonry-item:hover img` | Zoom hover |
| `.rmc2-lightbox` | Lightbox |
| `.rmc2-lightbox-close` | Cerrar |
| `.rmc2-lightbox img` | Imagen ampliada |

#### B.9) Solo en `Contacto.html`

| Bloque / Selector | Descripción |
|-------------------|-------------|
| `.rmc2-page-hero` | Hero Contacto |
| `.rmc2-page-hero-img` | Imagen fondo |
| `.rmc2-page-hero-img img` | Imagen |
| `.rmc2-page-hero-scrim` | Scrim |
| `.rmc2-page-hero-content` | Contenido hero |
| `.rmc2-page-hero-content .rmc2-eyebrow` | Eyebrow |
| `.rmc2-page-hero-content .rmc2-eyebrow::before` | Línea |
| `.rmc2-page-hero-content h1` | Título |
| `.rmc2-sec-head` | Encabezado “¿Dónde estamos?” |
| `.rmc2-sec-head h2` | Título sección |
| `.rmc2-btn-outline` | Botón outline en sección WhatsApp |

> **Nota:** En `Contacto.html` no se usan las clases `.rmc2-contact`, `.rmc2-contact-info`, `.rmc2-contact-map` ni `.rmc2-contact-map iframe`. En su lugar hay un `div` con estilos `inline` y un `iframe` sin contenedor específico.

---

## 3. Resumen de selectores no usados en HTML

> Definidos en `style.css` pero no aparecen en ningún archivo HTML (se activan por JavaScript).

| Selector | Motivo |
|----------|--------|
| `.rmc2-header.rmc2-scrolled` | Agregado por JS al hacer scroll |
| `.rmc2-burger.rmc2-open` | Agregado por JS al abrir menú |
| `.rmc2-mobile-menu.rmc2-open` | Agregado por JS |
| `.rmc2-scrim.rmc2-open` | Agregado por JS |
| `body.rmc2-locked` | Agregado por JS para bloquear scroll |

---

## 4. Resumen de cobertura

| Página | Clases CSS usadas (aprox.) | Tipo |
|--------|---------------------------|------|
| `index.html` | ~75 | Mixto (global + específico) |
| `Servicios.html` | ~35 | Mixto (global + detail-block) |
| `Filo.html` | ~30 | Mixto (global + dot-list / value-grid / photo-grid) |
| `AP.html` | ~28 | Mixto (global + photo-grid + lightbox) |
| `Arquimedex.html` | ~32 | Mixto (global + logo-frame + dot-list + photo-grid + lightbox) |
| `Artplasma.html` | ~32 | Mixto (global + logo-frame + photo-grid + lightbox) |
| `Clientes.html` | ~25 | Mixto (global + client-manifest) |
| `Galeria.html` | ~26 | Mixto (global + masonry + lightbox) |
| `Contacto.html` | ~25 | Mixto (global + page-hero + sec-head + btn-outline) |

> **Reglas exclusivas de `index.html`:** ~40 selectores (hero, swatch, stats, about, service cards, brand teasers, certifications, CTA band, contact grid).  
> **Reglas compartidas por páginas secundarias:** ~25 selectores (page-hero, dot-list, value-grid, detail-block, logo-frame, photo-grid, masonry, client-manifest, lightbox).  
> **Reglas globales puras:** ~50 selectores (variables, reset, utilidades, header, footer, botones sociales, quote-strip, cta-strip).
