# Animaciones — Portfolio Ana Maria Serrano

## Stack Scroll Section (Sección de Proyectos)

### Comportamiento general
Sección con scroll sticky de 450vh. Las fotos apilan una encima de la otra y al final se separan en cards.

---

### Foto 1 — Beacon (process-beacon-1.png)
- **Entrada:** aparece estática cuando el usuario llega a la sección
- **Texto izquierda — estático (aparece con la foto):**
  `> ¿Por qué una venta puede desaparecer entre dos equipos que trabajan por el mismo objetivo? Trabajar con una red de partners significa convivir con decenas de oportunidades abiertas al mismo tiempo. Saber cuál necesita tu atención no siempre es evidente.`
- **Texto izquierda — se escribe automáticamente después de 2.5 segundos:**
  `> Comprender este ecosistema de partners fue mucho más complejo que construir la interfaz.`
  `> No querían más seguimiento, querían más visibilidad. Fue el insight que cambió todo el producto.`
- **Tipografía:** IBM Plex Mono, 14px, 300, #1A1A1A

---

### Foto 3 — Theaveling (process-thea-1.png)
- **Entrada:** sube desde abajo con el scroll
- **Texto derecha — estático (aparece cuando la foto se posiciona):**
  `// insight: "Me encanta todo lo que tiene que ver con arte y me atrae la cultura de los países a los que viajo"`
- **Texto derecha — se escribe automáticamente después de 1.5 segundos:**
  `> "Cuando llegué a vivir a este país, dejé de recorrer la ciudad como turista."`
  `> "Me aburren los planes comunes. Si voy a otro país, voy a ver qué hacen o ven realmente"`
  `> "Descubrí que las mejores experiencias llegaban de recomendaciones de personas."`
  `Nota: Theaveling nació de esa diferencia.`
- **Tipografía:** IBM Plex Mono, 14px, 300, #1A1A1A

---

### Cards — Separación final
Con el último scroll las fotos se separan en cards lado a lado.

**Beacon (izquierda):**
- left: -60px, width: 420px
- Etiqueta: `Investigación UX / Estrategia de Producto / Desarrollo con IA`
- Línea horizontal (2px) con línea vertical (2px, 40px alto, separada 12px de la horizontal)
- Botón "Ver producto" alineado a la derecha de la T (top: 44px)
- Descripción: `Beacon es una herramienta web que diseñé desde cero con IA para ayudar a equipos comerciales B2B a no perder de vista oportunidades de hasta USD 400.000 anuales. Ayuda a detectar oportunidades en riesgo antes de que afecten las ventas y las comisiones.`

**Theaveling (derecha):**
- left: 680px, width: 420px
- Etiqueta: `Investigación UX / Design Thinking / Diseño de Interfaz`
- Misma estructura de líneas y botón
- Descripción: `Aplicación móvil para ayudar a turistas a descubrir experiencias artísticas y culturales relevantes en nuevas ciudades. Proyecto desarrollado siguiendo un proceso completo de Design Thinking, desde la investigación hasta la validación del prototipo.`

---

## Efecto reutilizable — Borde que alterna entre redondeado y recto

Usado en el label "Mis" de la sección de proyectos.

```javascript
const [misRounded, setMisRounded] = React.useState(true)

React.useEffect(() => {
  if (!misVisible) return
  const interval = setInterval(() => {
    setMisRounded(prev => !prev)
  }, 1500)
  return () => clearInterval(interval)
}, [misVisible])

// En el elemento:
borderRadius: misRounded ? '20px' : '0px'
transition: 'border-radius 0.4s ease'
```

---

## Animación SentidoAnimation

Palabra "sentido" en el H1 del hero que:
1. Se parte en "ƨeᴎ" y "tidₒ" con letras espejadas
2. Se desordena: "tidₒƨeᴎ", "oisdetn", etc.
3. Aparece "sen-tido" con guion (destello)
4. Aparece en color #7B58F8 al 50% opacidad
5. Se resuelve en "sentido" legible
6. Se pausa 3 segundos y reinicia en loop

---

## TypingText Component

Texto que se escribe letra por letra con cursor parpadeante.
- Cursor parpadea solo mientras escribe
- Desaparece cuando termina
- Usado para: `// Research notes:\n> buscando sentido antes de diseñar soluciones.`
