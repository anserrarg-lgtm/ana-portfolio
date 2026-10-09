import React from 'react'
import { ArrowDown, Building2, Phone, Handshake, User, Settings2, Inbox, Filter, Compass, Ticket, Sparkle } from 'lucide-react'
import anaPhoto from '../assets/ana.png'
import camilaPhoto from '../assets/camila.png'
import manuelaPhoto from '../assets/manuela.png'
import valentinPhoto from '../assets/valentin.png'
import federicoPhoto from '../assets/federico.png'
import marcelaPhoto from '../assets/marcela.png'
import danielaPhoto from '../assets/daniela.png'
import notionIcon from '../assets/notion-icon.png'
import theavelingPhoto from '../assets/theaveling.png'
import pipelinePhoto from '../assets/pipeline.png'
import logoPhoto from '../assets/logo.png'
import mobilePhoto from '../assets/mobile.png'
import mobilePhoto2 from '../assets/mobile2.png'
import mobileTheaveling from '../assets/mobiletheaveling.png'
import logoThea from '../assets/logothea.png'
import telonDerecho from '../assets/telonderecho.png'
import telonIzquierdo from '../assets/telonizquierdo.png'
import beaconMockup from '../assets/mockup-beacon.webp'
import capturePipeline from '../assets/capture-pipeline.png'
import cardBeacon from '../assets/card-beacon.webp'
import cardTheaveling from '../assets/card-theaveling.webp'
import procesoBea1 from '../assets/proceso-beacon-1.webp'
import mockupBeacon from '../assets/mockup-beacon.webp'
import partnerstack from '../assets/partnerstack.webp'
import crossbeam from '../assets/crossbeam.webp'
import impartner from '../assets/impartner.webp'
import demoBeacon from '../assets/demo-beacon.mp4'
import pipelineImg from '../assets/pipeline-orbit.png'
import notificacionesImg from '../assets/Notificaciones.png'
import pulsecheckImg from '../assets/Pulsecheck.png'
import primeraImg from '../assets/primera.png'
import segundaImg from '../assets/segunda.png'
import terceraImg from '../assets/tercera.png'
import cuartaImg from '../assets/cuarta.png'
import logoGithub from '../assets/github.png'
import logoTally from '../assets/tally.png'
import logoChatgpt from '../assets/chatgpt.png'
import logoNotebooklm from '../assets/notebooklm.png'
import logoClaude from '../assets/claude.png'
import logoLovable from '../assets/lovable.png'
import logoGranola from '../assets/granola.png'
import logoVercel from '../assets/vercel.png'
import handPinch from '../assets/hand-pinch.png'
import collage01 from '../assets/collage/collage-01.jpg'
import collage02 from '../assets/collage/collage-02.jpg'
import collage03 from '../assets/collage/collage-03.jpg'
import collage04 from '../assets/collage/collage-04.jpg'
import collage05 from '../assets/collage/collage-05.jpg'
import collage06 from '../assets/collage/collage-06.jpg'
import collage07 from '../assets/collage/collage-07.jpg'
import collage08 from '../assets/collage/collage-08.jpg'
import collage09 from '../assets/collage/collage-09.jpg'
import collage10 from '../assets/collage/collage-10.jpg'
import collage11 from '../assets/collage/collage-11.jpg'
import collage12 from '../assets/collage/collage-12.jpg'
import cardCuradoTheaveling from '../assets/curar-cards/card-01-consagracion-otono.png'
import cardMasReservados from '../assets/curar-cards/card-03-mas-reservados-casa-silencios.png'
import cardMasDescubrimientos from '../assets/curar-cards/card-02-descubrimiento-chorus-line.png'
// 2026-10-08 (sexagésima novena vuelta), a pedido de Ana: primera pieza
// suelta del moodboard (cortina roja), va a la izquierda debajo de todo
// el bloque de "Diseño", sin margen.
import theaCortinaIzq from '../assets/thea-cortina-izq.webp'
// 2026-10-08, a pedido de Ana: mockup interactivo de scroll libre para el
// case de Thea, debajo de "La card despierta el interés. La experiencia
// necesita contexto para sostenerlo". Es una captura REAL, no una pieza
// inventada: son 9 screenshots tomadas en vivo de
// https://theaveling.vercel.app/experiencia/a-chorus-line (vista
// mobile 375x812, el detalle real de "A Chorus Line: Historias Reales de
// Bogotá") cosidas en una sola tira continua. El header y el botón "Ver
// opciones" son sticky en la app real, así que se recortaron de cada
// captura (si no, se repetirían 5 veces al apilar) y se reconstruyen como
// elementos reales de React más abajo (ThemeComiteScrollMockup) para que
// el scroll se sienta igual de "vivo" que en la app, en vez de ser una
// imagen estática larga.
//
// 2026-10-08 (segunda vuelta), a pedido de Ana ("No quiero ese, quiero a
// chorus line"): el mockup mostraba antes el detalle de "Comité del
// Fracaso: Ensayo Abierto" (`thea-comite-scroll.jpg`) — se reemplaza por
// esta nueva captura de "A Chorus Line", mismo método (scroll-capture +
// stitch), el archivo viejo se deja sin usar en `assets/` por si hace
// falta volver atrás.
import theaChorusLineScroll from '../assets/thea-chorusline-scroll.jpg'
// 2026-10-08 (segunda vuelta): marco real de iPhone 15 (de un mockup que
// mandó Ana), procesado para dejar la pantalla transparente — ver la nota
// grande junto a `thea-chorusline-scroll.jpg` más abajo en este archivo.
import theaIphoneBezel from '../assets/thea-iphone-bezel.png'

// Orden de "tiro" del collage (no es el orden de los archivos): primero la
// foto mas ancha del grupo 1 (collage-04, panoramica), cae al centro. Luego
// una al ladito, luego otra al extremo opuesto (sin separarse mucho), y de
// ahi en adelante se va rellenando el medio con el resto — grupo 1, luego
// grupo 2 (perrita), luego grupo 3 (viajes). Los dos videos cierran la
// secuencia, uno a cada lado (no en la misma linea).
const collageMedia = [
  { type: 'image', src: collage04 }, // mas ancha del grupo 1 -> al centro
  { type: 'image', src: collage01 }, // al ladito
  { type: 'image', src: collage05 }, // al otro extremo
  { type: 'image', src: collage02 }, // relleno del medio en adelante
  { type: 'image', src: collage03 },
  { type: 'image', src: collage06 },
  { type: 'image', src: collage07 },
  { type: 'image', src: collage08 },
  { type: 'image', src: collage09 },
  { type: 'image', src: collage10 },
  { type: 'image', src: collage11 },
  { type: 'image', src: collage12 },
  { type: 'video', src: '/videos/collage-13.mp4' }, // izquierda, un poco abajo
  { type: 'video', src: '/videos/collage-14.mp4' }  // derecha, un poco arriba
]

// Cards del bloque "Curar también es dar contexto" (sección de Thea). Orden
// fijo de entrada (de izquierda a derecha en el resultado final): Curado por
// Theaveling -> Más reservados -> Más descubrimientos.
//
// Las 3 capturas vienen en tamaños originales distintos (Curado: 442x592,
// Más reservados: 336x461, Más descubrimientos: 375x387) — Curado es
// literalmente la imagen más grande de las tres. Si las 3 se muestran al
// mismo ancho fijo, esa diferencia de tamaño real desaparece (todas se ven
// "iguales" salvo por el alto). Para que se note cuál es más grande, cada
// card se escala con el MISMO factor (no cada una a su propio ancho fijo):
// se parte del ancho/alto original de cada imagen y se multiplica por un
// solo factor de escala, así que la que es más grande en la realidad queda
// más grande en pantalla también.
const CURAR_SCALE = 260 / 442 // Curado (la imagen más grande) queda en 260px de ancho (subido de 200 para que se lea mejor)
const curarCards = [
  { label: 'Curado por Theaveling', src: cardCuradoTheaveling, w: 442, h: 592 },
  { label: 'Más reservados', src: cardMasReservados, w: 336, h: 461 },
  { label: 'Más descubrimientos', src: cardMasDescubrimientos, w: 375, h: 387 }
].map(c => ({ ...c, renderW: Math.round(c.w * CURAR_SCALE), renderH: Math.round(c.h * CURAR_SCALE) }))

// El track está alineado por ARRIBA (alignItems:'flex-start'), no por abajo
// — así las etiquetas y el borde superior de las 3 cards quedan a la misma
// altura, y solo el borde de abajo varía según el tamaño real de cada una
// (que es justo lo que se pidió: que se note cuál es más grande).
//
// NOTA: esto YA NO es scroll-jacking (ni sticky, ni fixed, ni traducción en
// X atada al scroll). Varios intentos con eso se veían mal (el bloque
// bajando, la animación invisible o demasiado rápida). Ahora es mucho más
// simple y robusto: las cards viven en flujo normal, y lo único que pasa es
// que la PRIMERA VEZ que esta sección llega a cierto punto de la pantalla
// (ver el IntersectionObserver más abajo, cerca de curarGalleryWrapRef) se
// dispara una sola animación de entrada (fade + un desliz hacia arriba,
// como un swatch), con un pequeño desfase entre cards. Se activa una sola
// vez por carga de página y se queda así para siempre (no se repite si se
// sube y baja el scroll).
const CURAR_GAP = 24

// Puesto fijo de cada foto/video, en el mismo orden que collageMedia (osea
// en orden de "tiro"). Nada de abanico ni de diagonal uniforme: cada una
// tiene su propio punto, repartidas mas que nada en horizontal, tratando de
// no separarse demasiado entre si. Los dos ultimos (los videos) van a los
// extremos, uno abajo-izquierda y el otro arriba-derecha.
const collagePositions = [
  { x: 0,    y: -10, rot: -2 },  // collage-04, centro
  { x: 150,  y: 25,  rot: 4  },  // collage-01, al ladito
  { x: -160, y: 15,  rot: -5 },  // collage-05, al otro extremo
  { x: -40,  y: 60,  rot: 3  },  // collage-02, relleno
  { x: 55,   y: -55, rot: -3 },  // collage-03
  { x: -95,  y: -35, rot: 5  },  // collage-06
  { x: 100,  y: 65,  rot: -2 },  // collage-07
  { x: -140, y: -65, rot: 2  },  // collage-08
  { x: 165,  y: -20, rot: -4 },  // collage-09
  { x: -30,  y: 85,  rot: 3  },  // collage-10
  { x: 30,   y: -85, rot: -2 },  // collage-11
  { x: 125,  y: 90,  rot: 4  },  // collage-12
  { x: -190, y: 80,  rot: -3 },  // video 13, izquierda-abajo
  { x: 210,  y: -75, rot: 2  }   // video 14, derecha-arriba
]

function TypingText({ text, speed = 50 }) {
  const [displayed, setDisplayed] = React.useState('')
  const [done, setDone] = React.useState(false)

  React.useEffect(() => {
    let i = 0
    setDisplayed('')
    setDone(false)
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <div style={{marginTop: '24px'}}>
      {displayed.split('\n').map((line, i, arr) => (
        <p key={i} style={{
          fontFamily:"'IBM Plex Mono', monospace",
          fontWeight: 300,
          fontSize: '14px',
          color: 'rgba(245,242,238,0.6)',
          margin: '2px 0',
          display: 'flex',
          alignItems: 'center'
        }}>
          {line}
          {i === arr.length - 1 && !done && (
            <span style={{
              display:'inline-block',
              width:'2px',
              height:'14px',
              background:'#888',
              marginLeft:'2px'
            }}/>
          )}
        </p>
      ))}
    </div>
  )
}

function SentidoAnimation() {
  const [phase, setPhase] = React.useState(3)
  const [frame, setFrame] = React.useState(0)

  const frames = [
    { text: 'ƨeᴎ tidₒ', duration: 80 },
    { text: 'ƨeᴎtidₒ', duration: 80 },
    { text: 'tidₒƨeᴎ', duration: 60 },
    { text: 'ᴉodʇƨeᴎ', duration: 60 },
    { text: 'oisdetn', duration: 60 },
    { text: 'tdsoiεn', duration: 60 },
    { text: 'noisted', duration: 60 },
    { text: 'iosdetn', duration: 60 },
    { text: 'sen tido', duration: 120 },
    { text: '', duration: 80 },
    { text: 'sen-tido', duration: 150 },
    { text: '', duration: 80 },
    { text: 'sen tido', duration: 100 },
    { text: 'sentido', color: 'rgba(123,88,248,0.5)', duration: 400 },
    { text: '', duration: 80 },
    { text: '', duration: 60 },
  ]

  React.useEffect(() => {
    let timeout
    if (phase === 'anim') {
      if (frame < frames.length) {
        timeout = setTimeout(() => setFrame(f => f + 1), frames[frame].duration)
      } else {
        timeout = setTimeout(() => { setPhase('done'); setFrame(0) }, 100)
      }
    } else if (phase === 'done') {
      timeout = setTimeout(() => { setPhase('anim'); setFrame(0) }, 3000)
    } else {
      timeout = setTimeout(() => { setPhase('anim'); setFrame(0) }, 3000)
    }
    return () => clearTimeout(timeout)
  }, [phase, frame])

  const getText = () => {
    if (phase === 'anim') return frames[frame]?.text ?? 'sentido'
    return 'sentido'
  }

  return (
    <span style={{
      display: 'inline-block',
      minWidth: '7ch',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      color: getText() === 'sentido' ? '#FF6B35' : (frames[frame]?.color || 'inherit'),
      textAlign: 'left'
    }}>
      {getText()}.
    </span>
  )
}

function DisintegrationEffect({ active, onComplete }) {
  const [chars, setChars] = React.useState([])
  const [started, setStarted] = React.useState(false)

  React.useEffect(() => {
    if (!active) {
      setStarted(false)
      setChars([])
      return
    }
    if (started) return
    setStarted(true)
    window._disStart = Date.now()

    const spans = document.querySelectorAll('.note-char')
    const proyectosEl = document.getElementById('proyectos')
    const proyectosRect = proyectosEl ? proyectosEl.getBoundingClientRect() : { top: window.innerHeight, left: window.innerWidth / 2 }
    const newChars = []

    spans.forEach((span, i) => {
      const rect = span.getBoundingClientRect()
      newChars.push({
        id: i,
        spanId: span.id,
        char: span.textContent,
        x: rect.left,
        y: rect.top + window.scrollY,
        active: false,
        delay: Math.random() * 5000,
        vx: 0,
        vy: 0,
        gravity: 0.003 + Math.random() * 0.005,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 2,
        opacity: 1,
        phase: 0,
        shakePhase: 0,
        shaking: false,
        shakeDuration: 800 + Math.random() * 400,
        shakeStart: null,
        originY: rect.top + window.scrollY,
        targetX: proyectosRect.left + Math.random() * 400,
        targetY: proyectosRect.top
      })
    })

    setChars(newChars)
  }, [active])

  React.useEffect(() => {
    if (!started || chars.length === 0) return

    const interval = setInterval(() => {
      setChars(prev => prev.map(c => {
        const elapsed = Date.now() - (window._disStart || 0)

        if (!c.active && !c.shaking && elapsed > c.delay) {
          return { ...c, shaking: true, shakeStart: Date.now() }
        }

        if (c.shaking && !c.active) {
          const shakeElapsed = Date.now() - c.shakeStart
          const progress = shakeElapsed / c.shakeDuration
          const shakeX = Math.sin(progress * Math.PI * 8) * (3 * progress)
          const shakeY = Math.sin(progress * Math.PI * 6) * (1 * progress)

          if (shakeElapsed >= c.shakeDuration) {
            const originalSpan = document.getElementById(c.spanId)
            if (originalSpan) originalSpan.style.visibility = 'hidden'
            return { ...c, active: true, shaking: false, x: c.x + shakeX, y: c.y + shakeY }
          }

          const originalSpan = document.getElementById(c.spanId)
          if (originalSpan) {
            originalSpan.style.transform = `translate(${shakeX}px, ${shakeY}px)`
          }
          return c
        }

        if (!c.active) return c

        const time = Date.now() * 0.0005
        const wobble = Math.sin(time + c.id * 0.3) * 0.02
        const newVx = c.vx + wobble
        const newVy = c.vy + 0.025
        const newX = c.x + newVx
        const newY = c.y + newVy
        const newRotation = c.rotation + Math.sin(time + c.id) * 0.15

        const newOpacity = newY > window.innerHeight * 0.88
          ? Math.max(0, c.opacity - 0.008)
          : c.opacity

        return { ...c, x: newX, y: newY, vy: newVy, vx: newVx, rotation: newRotation, opacity: newOpacity }
      }))
    }, 16)

    return () => clearInterval(interval)
  }, [started])

  if (!active && !started) return null

  return (
    <div style={{position:'fixed', top:0, left:0, width:'100vw', height:'100vh', pointerEvents:'none', zIndex:999}}>
      {chars.map(c => (
        <span key={c.id} style={{
          position:'fixed',
          left: c.x,
          top: c.y - window.scrollY,
          fontFamily:"'IBM Plex Mono', monospace",
          fontSize:'13px',
          fontWeight:300,
          color:'#1A1A1A',
          opacity: c.active ? c.opacity : 1,
          transform: c.active ? `rotate(${c.rotation}deg) translateZ(0)` : 'translateZ(0)',
          transformOrigin: 'center center',
          backfaceVisibility: 'hidden',
          pointerEvents:'none',
          whiteSpace:'pre',
          display: 'inline-block',
          willChange: 'transform',
          imageRendering: 'pixelated',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '1.8'
        }}>
          {c.char}
        </span>
      ))}
    </div>
  )
}

const SequentialTyping = React.forwardRef(({ onComplete, keepCursorVisible, hideCursor }, ref) => {
  const lines = [
    '¿Por qué el usuario hace esto?',
    '¿Por qué la empresa necesita esto?',
    '¿Por qué ambas respuestas son distintas?',
    '',
    '> no querían más seguimiento, querían más visibilidad.',
    '',
    '✗ Agregar otra métrica.',
    '   No responde ninguna pregunta.',
    '✗ Cambiar el color.',
    '   El problema no era visual.',
    '',
    'knowledge/',
    '├── research/',
    '├── interviews/',
    '├── insights/',
    '├── decisions/',
    '├── product/',
    '├── visual-language/',
    '├── systems/',
    '└── notes/',
    '',
    '// field notes:',
    '> Fricción en las entrevistas: Primera pregunta demasiado\nabierta / Falta de historias concretas / La pregunta de\nautomatización no tuvo respuesta.'
  ]

  const [visibleLines, setVisibleLines] = React.useState([])
  const [currentLine, setCurrentLine] = React.useState(0)
  const [currentChar, setCurrentChar] = React.useState(0)
  const [done, setDone] = React.useState(false)

  React.useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true)
      if (onComplete) onComplete()
      return
    }
    const line = lines[currentLine]
    if (line === '') {
      setVisibleLines(prev => [...prev, ''])
      setCurrentLine(l => l + 1)
      setCurrentChar(0)
      return
    }
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setVisibleLines(prev => {
          const updated = [...prev]
          updated[currentLine] = line.slice(0, currentChar + 1)
          return updated
        })
        setCurrentChar(c => c + 1)
      }, 35)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar])


  return (
    <div style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'13px', color:'#1A1A1A', fontWeight:300, lineHeight:1.8, position:'relative', overflow:'visible', minHeight:'400px', maxWidth:'520px'}}>
      {visibleLines.map((line, i) => (
        <p key={i} style={{margin:'2px 0', minHeight:'20px', whiteSpace:'pre-wrap'}}>
          {line}
          {i === visibleLines.length - 1 && !done && (
            <span style={{display:'inline-block', width:'2px', height:'13px', background:'#888', marginLeft:'2px', animation:'blink 1s step-end infinite'}}/>
          )}
        </p>
      ))}
      {done && (
        <span ref={ref} style={{
          display: hideCursor ? 'none' : 'inline-block',
          width: '1px',
          height: '13px',
          background: '#1A1A1A',
          animation: 'blink 1s step-end infinite',
          position: 'relative',
          zIndex: 1000,
          opacity: 1,
          marginLeft: '2px'
        }}/>
      )}
    </div>
  )
})

function CarouselDots({ count, activeIndex, onChange, duration = 14000, color = '#2ECCA6' }) {
  const [autoPlay, setAutoPlay] = React.useState(true)

  React.useEffect(() => {
    if (!autoPlay) return
    const timer = setTimeout(() => {
      const next = (activeIndex + 1) % count
      onChange(next)
      if (next === 0) setAutoPlay(false)
    }, duration)
    return () => clearTimeout(timer)
  }, [autoPlay, activeIndex, count, duration, onChange])

  const handleClick = (i) => {
    setAutoPlay(false)
    onChange(i)
  }

  return (
    <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex
        return (
          <div
            key={i}
            onClick={() => handleClick(i)}
            style={{
              position:'relative',
              width: isActive ? '28px' : '10px',
              height:'10px',
              borderRadius:'4px',
              background:'rgba(255,255,255,0.3)',
              cursor:'pointer',
              overflow:'hidden',
              flexShrink:0,
              transition:'width 0.3s ease'
            }}
          >
            {isActive && autoPlay && (
              <div
                key={`progress-${activeIndex}`}
                style={{position:'absolute', top:0, left:0, bottom:0, width:'0%', background:color, borderRadius:'4px', transition:`width ${duration}ms linear`}}
                ref={(el) => {
                  if (el) {
                    requestAnimationFrame(() => {
                      requestAnimationFrame(() => {
                        el.style.width = '100%'
                      })
                    })
                  }
                }}
              />
            )}
            {isActive && !autoPlay && (
              <div style={{position:'absolute', top:0, left:0, bottom:0, width:'100%', background:color, borderRadius:'4px'}}/>
            )}
          </div>
        )
      })}
    </div>
  )
}

function VerProductoBtn({ texto = 'Ver producto', icon, href, width = '130px', hoverWidth = '145px' }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={href ? () => window.open(href, '_blank', 'noopener,noreferrer') : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'flex-end'
      }}
    >
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 12px',
        boxShadow: 'inset 0 0 0 1px #1A1A1A, 2px 2px 0px #1A1A1A',
        width: hovered ? hoverWidth : width,
        overflow: 'hidden',
        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: '#F5F2EE',
        justifyContent: 'center'
      }}>
        {icon && (
          <img src={icon} alt="" style={{width:'16px', height:'16px', borderRadius:'4px', marginRight:'8px', flexShrink:0}}/>
        )}
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '13px',
          fontWeight: 400,
          color: '#1A1A1A',
          whiteSpace: 'nowrap',
          flex: 'none'
        }}>
          {texto}
        </span>
        {hovered && (
          <svg style={{flexShrink:0, marginLeft:'8px'}} width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </div>
      {!hovered && (
        <div style={{
          width: '36px',
          height: '36px',
          boxShadow: 'inset 0 0 0 1px #1A1A1A',
          background: '#F5F2EE',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '6px',
          flexShrink: 0
        }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      )}
    </div>
  )
}

function PulseButtons() {
  const [active, setActive] = React.useState(0)
  React.useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % 3), 1500)
    return () => clearInterval(t)
  }, [])
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'8px', flexShrink:0}}>
      {['Deal cerrado', 'En negociación', 'Bloqueado'].map((label, i) => (
        <div key={i} style={{
          padding:'8px 16px',
          borderRadius:'8px',
          border: active === i ? '1px solid #B0FF92' : '1px solid rgba(255,255,255,0.2)',
          color: active === i ? '#B0FF92' : 'rgba(255,255,255,0.4)',
          fontFamily:"'Plus Jakarta Sans', sans-serif",
          fontSize:'13px',
          fontWeight: active === i ? 500 : 300,
          transition:'all 0.3s ease',
          background: active === i ? 'rgba(176,255,146,0.08)' : 'transparent',
          cursor:'pointer',
          transform: active === i ? 'scale(1.02)' : 'scale(1)'
        }}>{label}</div>
      ))}
    </div>
  )
}

// El typing effect del "insight" (el texto tipo comentario de código, "//
// insight: ...") escribía letra por letra con un setInterval de 25ms que
// vivía como estado DE ProjectTransition (insightTyping). Cada una de esas
// ~85 actualizaciones (una por letra) re-renderizaba TODO ProjectTransition
// — un componente gigante con el case study completo adentro — y eso medía
// 80-150ms de verdad en las pruebas, mucho más de lo que dura el intervalo
// de 25ms entre letra y letra. El resultado: durante los ~2 segundos que
// tarda en escribirse el texto, el panel se sentía trabado/a los saltos —
// exactamente el síntoma de "se congela un rato y de repente avanza", solo
// que esta vez el disparador no era la animación de entrada (esa ya se
// arregló aparte) sino ESTE typing effect, que arranca justo cuando la
// animación de entrada termina. La solución: sacar el typing a su PROPIO
// componente memoizado, con su propio estado interno. Así, cada letra que
// se escribe solo re-renderiza este párrafo chiquito, no el case study
// entero. `ref` se reenvía al <p> real porque el loop de la animación de
// entrada necesita medir su posición (offsetTop) para saber cuándo el
// scroll ya lo dejó a la vista.
const INSIGHT_TEXT = '// insight: Los usuarios no querían más seguimiento. Querían recuperar la visibilidad.'
const InsightTypingText = React.memo(React.forwardRef(function InsightTypingText({ active }, ref) {
  const [typed, setTyped] = React.useState('')
  React.useEffect(() => {
    if (!active) return
    let i = 0
    const interval = setInterval(() => {
      if (i < INSIGHT_TEXT.length) {
        setTyped(INSIGHT_TEXT.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 25)
    return () => clearInterval(interval)
  }, [active])
  return (
    <p ref={ref} style={{
      fontFamily:"'IBM Plex Mono', monospace",
      fontWeight:150,
      fontSize:'14px',
      color:'rgba(255,255,255,0.5)',
      marginTop:'40px',
      width:'80%',
      lineHeight:1.8
    }}>
      {typed}
      {typed.length < INSIGHT_TEXT.length && active && (
        <span style={{display:'inline-block', width:'1px', height:'13px', background:'rgba(255,255,255,0.5)', marginLeft:'2px', animation:'blink 1s step-end infinite'}}/>
      )}
    </p>
  )
}))

function ProjectTransition({ color, onClose, projectName, projectColor }) {
  const [progress, setProgress] = React.useState(0)
  const [showRightContent, setShowRightContent] = React.useState(false)
  const [closing, setClosing] = React.useState(false)
  const [closeProgress, setCloseProgress] = React.useState(0)
  const [quoteIndex, setQuoteIndex] = React.useState(0)
  const [theaCardsLayer, setTheaCardsLayer] = React.useState(0)
  const [activeSection, setActiveSection] = React.useState(0)
  const [imageVisible, setImageVisible] = React.useState(false)
  const [arrowStep, setArrowStep] = React.useState(-1)
  const [diagramVisible, setDiagramVisible] = React.useState(false)
  const diagramRef = React.useRef(null)
  const [checkVisible, setCheckVisible] = React.useState(false)
  const checkRef = React.useRef(null)
  const [brandIndex, setBrandIndex] = React.useState(0)
  const [isCarouselTransitioning, setIsCarouselTransitioning] = React.useState(false)
  const brandAutoRef = React.useRef(false)
  const [dotHovered, setDotHovered] = React.useState(false)
  const [dotPressed, setDotPressed] = React.useState(false)
  const [slideOffset, setSlideOffset] = React.useState(0)
  const [slideIndex, setSlideIndex] = React.useState(0)
  const slideTimerRef = React.useRef(null)
  const [discoveryVisible, setDiscoveryVisible] = React.useState(false)
  const discoveryRef = React.useRef(null)
  const [colorStep, setColorStep] = React.useState(-1)
  const colorTimerRef = React.useRef(null)
  const colorRef = React.useRef(null)
  const sec01Ref = React.useRef(null)
  const sec02Ref = React.useRef(null)
  const sec03Ref = React.useRef(null)
  const sec04Ref = React.useRef(null)
  const sec05Ref = React.useRef(null)
  const sec06Ref = React.useRef(null)
  const sec07Ref = React.useRef(null)
  const sec08Ref = React.useRef(null)

  // Para Thea, "Descubrimiento" dejó de ser una sección propia en la barra:
  // ese contenido (desde "Lo que encontré" hasta justo antes de "De
  // encontrar experiencias a diseñar el descubrimiento") ahora es parte de
  // "Investigación". Por eso el array de refs de Thea salta sec03Ref (el
  // viejo inicio de "Descubrimiento") y va directo de sec02Ref a sec04Ref —
  // sec03Ref sigue existiendo como ref en el JSX pero ya no marca un límite
  // de sección en la barra. El índice de cada ref acá tiene que alinear
  // 1 a 1 con el índice del mismo texto en sectionLabels de abajo.
  const sectionRefs = projectName === 'Theaveling'
    ? [sec01Ref, sec02Ref, sec04Ref, sec05Ref, sec06Ref, sec07Ref]
    : [sec01Ref, sec02Ref, sec03Ref, sec04Ref, sec05Ref, sec06Ref, sec07Ref, sec08Ref]

  const sectionLabels = projectName === 'Theaveling'
    ? ['Origen', 'Investigación', 'Decisiones de producto', 'Diseño', 'Testing', 'Aprendizajes']
    : ['Contexto', 'Investigación', 'Discovery', 'Decisiones de producto', 'Diseño', 'IA aplicada', 'Impacto', 'Aprendizajes']

  // sec06Ref/sec07Ref en el case de Thea todavía son parte de "Decisiones
  // de producto" (el framework Recopilar/Curar/Descubrir/Reservar,
  // TODO/ESCENA/CULTURA, "Curar también es dar contexto...") — Testing y
  // Aprendizajes todavía NO tienen su propio contenido con encabezado
  // propio. "Diseño" (sec05Ref) ya sí tiene el suyo (2026-10-08, sexagésima
  // tercera vuelta: "La interfaz tenía que sentirse como la escena que
  // estaba intentando descubrir."), así que el cap sube de 3 a 4. Por eso
  // el scroll-spy no debe resaltar más allá de "Diseño" (índice 3) todavía,
  // aunque la barra sí muestre "Testing"/"Aprendizajes" como lo que viene.
  // Esto se actualiza el día que cada uno tenga su propio título dentro
  // del case.
  const sectionHighlightCap = projectName === 'Theaveling' ? 4 : sectionLabels.length

  const scrollToSection = (i) => {
    if (sectionRefs[i].current && contentRef.current) {
      contentRef.current.scrollTop = sectionRefs[i].current.offsetTop - 40
    }
  }

  React.useEffect(() => {
    const el = contentRef.current
    if (!el) return
    // Solo recorremos hasta sectionHighlightCap, no hasta sectionLabels.length:
    // la barra puede mostrar más nombres de los que ya tienen contenido
    // propio (ver comentario junto a sectionHighlightCap), y no queremos
    // que el scroll "le robe" el resaltado a la última sección que sí
    // existe de verdad solo porque el usuario llegó al final del scroll.
    const activeCount = sectionHighlightCap
    const handleScroll = () => {
      const scrollPos = el.scrollTop + 80
      let current = 0
      for (let i = 0; i < activeCount; i++) {
        const ref = sectionRefs[i].current
        if (ref && ref.offsetTop <= scrollPos) current = i
      }
      // Cuando una sección final cae a menos de un viewport del final del
      // panel, su offsetTop nunca llega a ser "alcanzable" por scrollPos
      // (el scrollTop máximo es scrollHeight - clientHeight). Por eso, al
      // llegar al fondo del panel forzamos la última sección que exista
      // DENTRO del tope (activeCount) — nunca una que todavía no tenga
      // contenido propio.
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 20) {
        for (let i = activeCount - 1; i >= 0; i--) {
          if (sectionRefs[i].current) { current = i; break }
        }
      }
      setActiveSection(current)
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  // Las líneas verdes que se difuminan bajo los títulos a veces caen en una
  // posición vertical con decimales (ej. top: 1024.96875px) dependiendo de
  // cuánto contenido se acumuló arriba. El navegador antialiasa cada una
  // distinto según esos decimales, y eso hace que una se vea más delgada
  // y otra más gruesa aunque el CSS sea idéntico. Esto las "clava" a un
  // píxel entero para que todas rendericen con el mismo grosor.
  React.useEffect(() => {
    const snapGradientLines = () => {
      const el = contentRef.current
      if (!el) return
      // ANTES esto buscaba por color (ej. 'rgba(176,255,146,...)') entre
      // TODOS los divs del panel. El problema: ese mismo verde se usa
      // también en cosas que no son líneas (íconos, puntitos, sombras), y
      // la búsqueda por color las enganchaba igual y las movía un par de
      // píxeles sin que hiciera falta. Ahora cada línea se marca
      // explícitamente con data-hairline='true' en su JSX, así que acá
      // solo se tocan esas, nunca otra cosa por casualidad de color.
      const divs = el.querySelectorAll('[data-hairline="true"]')
      divs.forEach((div) => {
        div.style.transform = 'translateY(0px)'
        const rect = div.getBoundingClientRect()
        // Usamos rect.top + el.scrollTop (posición fija dentro del
        // contenido, no la posición en pantalla) porque el panel se
        // mueve/anima su scroll al abrirse: si midiéramos solo rect.top
        // el resultado cambiaría según el instante exacto en que corre
        // este efecto, en vez de ser una propiedad fija de cada línea.
        const staticTop = rect.top + el.scrollTop
        // Antes esto redondeaba al píxel CSS entero más cercano asumiendo
        // devicePixelRatio=1 implícitamente. En pantallas con escalado no
        // entero (ej. macOS en modo "más espacio", DPR tipo 1.5 o 1.8 en
        // vez de 1 o 2), un top que cae justo en un píxel CSS entero puede
        // seguir cayendo a la MITAD de un píxel físico real, y ahí el
        // navegador antialiasa distinto línea por línea sin que el CSS
        // tenga ninguna diferencia. Ahora redondeamos al píxel físico real
        // (usando devicePixelRatio), que es la unidad que de verdad importa
        // para que el grosor se vea idéntico sin importar el escalado.
        const dpr = window.devicePixelRatio || 1
        const snappedTop = Math.round(staticTop * dpr) / dpr
        const diff = staticTop - snappedTop
        div.style.transform = diff !== 0 ? `translateY(${(-diff).toFixed(4)}px)` : 'translateY(0px)'
      })
    }
    snapGradientLines()
    // contentRef mide siempre 100vh (overflowY:auto) así que su propio
    // tamaño nunca "cambia" aunque el contenido de adentro sí — un
    // ResizeObserver puesto ahí no se entera de nada. Lo que sí cambia es
    // el contenido mismo: el efecto de "escribir" texto, e imágenes que
    // terminan de cargar (eso no dispara MutationObserver, por eso se
    // escucha aparte con 'load' en cada <img>). Recalculamos cada vez que
    // algo de esto pasa, hasta que el contenido deja de moverse.
    // OJO: no observamos cambios de "style" acá — nuestra propia corrección
    // escribe style.transform en cada línea, y observarlo causaría un loop
    // infinito (la corrección dispararía otra corrección, por siempre).
    let rafId = null
    const scheduleSnap = () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      rafId = window.requestAnimationFrame(snapGradientLines)
    }
    const mo = new MutationObserver(scheduleSnap)
    mo.observe(contentRef.current, { childList: true, subtree: true, characterData: true })
    const imgs = contentRef.current.querySelectorAll('img')
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', scheduleSnap)
    })
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleSnap)
    }
    window.addEventListener('resize', scheduleSnap)
    return () => {
      mo.disconnect()
      imgs.forEach((img) => img.removeEventListener('load', scheduleSnap))
      window.removeEventListener('resize', scheduleSnap)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  // Animación de entrada (una sola vez) de las cards de "Curar también es
  // dar contexto" (solo existe en Thea; en Beacon curarGalleryWrapRef queda
  // null y el effect no hace nada). Ya no es scroll-jacking: las cards
  // viven en flujo normal, y lo único que hace este effect es detectar el
  // momento en que la sección llega a cierto punto de la pantalla (un
  // poco por debajo de la mitad, bajando) y ahí disparar setCurarRevealed
  // (true) UNA sola vez — el CSS (más abajo, en el map de curarCards) hace
  // el resto: cada card pasa de opacity:0 + un poco corrida hacia abajo a
  // su posición final, con un pequeño desfase entre ellas.
  //
  // IntersectionObserver con rootMargin negativo del lado de abajo: eso
  // "achica" el área del panel contra la que se mide la intersección —
  // dejando solo el 60% de arriba del panel como zona válida — así que
  // intersecting pasa a true justo cuando el borde superior de la sección
  // cruza esa línea (60% hacia abajo desde arriba del panel = un poco por
  // debajo de la mitad), que es exactamente el punto que se pidió.
  React.useEffect(() => {
    const wrap = curarGalleryWrapRef.current
    const panel = contentRef.current
    if (!wrap || !panel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurarRevealed(true)
          observer.disconnect()
        }
      },
      { root: panel, rootMargin: '0px 0px -40% 0px', threshold: 0 }
    )
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [])

  const quotes = [
    [
      '"Las herramientas que usamos no están optimizadas para que esa búsqueda se realice de una manera rápida."',
      '"Si hubiese una manera donde se nos notifique, por medio de las herramientas que usamos, que ya una venta está generando atribución, en lugar de nosotros tener que buscar, sería beneficioso."',
      '"Si no se cierra en un marco de tiempo, ese dinero de la venta no nos atribuye a nosotros."'
    ],
    [
      '"Lo mas frustrante es que el cliente o el partner no respondan seguido o no mantengan la conversación activa. Muchas oportunidades se caen por eso"',
      '"Si me ha pasado, no he podido reclamar lo de esa compra y queda cerrada como lost, pierdo esa opp, pierdo tambien para mis métricas. Por eso intento tener cuidado."',
      '"Yo personalmente manejo partner grandes, muchas opps quedan perdidas porque no me da el tiempo de revisar cada una con un manager diferente, entonces podría reorganizar mejor"'
    ]
  ]

  const theaCardLayers = [
    [
      { title: 'El conocimiento local abre puertas.', desc: null, quote: '"Son muy de nicho entonces tienes acceso a ellas solo si estás ahí dentro."', name: 'Valentín', photo: valentinPhoto },
      { title: 'La información está fragmentada.', desc: 'Instagram, Google, webs, perfiles, comunidades, recomendaciones...', quote: '"Yo creo que la información no está en un mismo lugar, está muy regada…"', name: 'Camila', photo: camilaPhoto },
      { title: 'Encontrar algo relevante cuesta tiempo.', desc: null, quote: '"Invierto mucho tiempo y a veces ni siquiera encuentro cosas que me interesen de verdad…"', name: 'Manuela', photo: manuelaPhoto }
    ],
    [
      { title: null, desc: null, quote: '"No conocer los lugares donde se presentan estos descubrimientos."', name: 'Federico', photo: federicoPhoto },
      { title: null, desc: null, quote: '"Solo encuentro algo realmente relevante cuando hay algún festival, entonces la info circula más, me parece."', name: 'Marcela', photo: marcelaPhoto },
      { title: null, desc: null, quote: '"Que me toca buscar mucho a veces."', name: 'Daniela', photo: danielaPhoto }
    ]
  ]

  const ellосRef = React.useRef(null)
  const [ellosTyping, setEllosTyping] = React.useState('')
  const [ellosStarted, setEllosStarted] = React.useState(false)
  const [insightStarted, setInsightStarted] = React.useState(false)
  const insightRef = React.useRef(null)
  const imageRef = React.useRef(null)
  const contentRef = React.useRef(null)
  const colorPanelRef = React.useRef(null)
  const rightPanelRef = React.useRef(null)
  const curarGalleryWrapRef = React.useRef(null)
  const [curarRevealed, setCurarRevealed] = React.useState(false)
  // 2026-10-08: header sticky del mockup de "A Chorus Line" (ver
  // ThemeComiteScrollMockup más abajo) — arranca transparente (tal como la
  // app real lo muestra sobre la foto principal) y pasa a sólido apenas se
  // scrollea, igual que en https://theaveling.vercel.app.
  const [comiteHeaderSolid, setComiteHeaderSolid] = React.useState(false)

  React.useEffect(() => {
    const duration = 1400
    let cancelled = false

    const start = () => {
      if (cancelled) return
      const imagePos = imageRef.current ? imageRef.current.offsetTop : 0
      const startTime = performance.now()

      // ANTES esto llamaba setProgress(eased) cada ~90ms durante los 1400ms
      // que dura la entrada (14-15 veces). El problema NO era la frecuencia
      // en sí — era que CADA una de esas llamadas re-renderiza TODO este
      // panel (que es un componente gigante: observers, textos, secciones,
      // el contenido entero de Beacon o Theaveling), y reconciliar todo eso
      // de verdad toma tiempo de CPU real, medido acá mismo con capturas de
      // frame en el sandbox: 100-150ms por cada re-render, más de lo que
      // dura el intervalo entre uno y otro. O sea, el re-render de la
      // llamada anterior todavía no terminaba cuando ya tocaba la
      // siguiente — eso satura el hilo principal, la animación (que ahora
      // se pinta por ref, no depende de React) se ve congelada mientras
      // React está ocupado reconciliando, y cuando por fin termina, salta
      // varios frames de golpe. Eso es exactamente "se queda fraccionado un
      // rato y luego avanza": no es un problema de assets pesados (esos ya
      // se optimizaron aparte), es el COSTO del re-render mismo, repetido
      // ~15 veces durante la animación.
      // AHORA: nada de esto (ancho, clip-path, scroll) depende de
      // `progress` — todo se escribe directo por ref, cuadro a cuadro, así
      // que no hace falta que React vuelva a renderizar NADA mientras la
      // animación corre. Lo único que de verdad dependía de `progress`
      // durante el recorrido (no al final) era el typing effect del
      // "insight", que se disparaba cuando el scroll (animado acá mismo)
      // pasaba cierto punto — ese chequeo se hace ahora directo acá, leyendo
      // el scroll real en cada frame, sin pasar por React hasta que
      // realmente hay que prender el typing (un solo setState, no quince).
      // `setProgress` se llama UNA sola vez, al final (t>=1), que es lo
      // único que el resto del componente (botón de cerrar, arrowStep)
      // necesita saber: que la animación ya terminó.
      let insightCheckDone = false
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const t = Math.min(1, elapsed / duration)
        const eased = 1 - Math.pow(1 - t, 3)

        if (colorPanelRef.current) {
          colorPanelRef.current.style.width = `${eased * 60}vw`
        }
        let liveScrollTop = 0
        if (contentRef.current) {
          contentRef.current.style.opacity = eased > 0.1 ? '1' : '0'
          contentRef.current.style.clipPath = `inset(0 ${Math.max(0, 100 - eased * 100)}% 0 0)`
          liveScrollTop = imagePos * (1 - eased)
          contentRef.current.scrollTop = liveScrollTop
        }
        if (rightPanelRef.current) {
          rightPanelRef.current.style.width = `${Math.max(0, 100 - eased * 60)}vw`
          rightPanelRef.current.style.visibility = eased > 0.05 ? 'visible' : 'hidden'
        }

        if (!insightCheckDone && insightRef.current && contentRef.current) {
          const insightTop = insightRef.current.offsetTop
          const containerHeight = contentRef.current.clientHeight
          if (liveScrollTop + containerHeight > insightTop) {
            insightCheckDone = true
            // El typing letra-por-letra ya no vive acá — lo maneja
            // InsightTypingText solo, en su propio estado interno, para no
            // re-renderizar todo ProjectTransition 85 veces (ver el
            // comentario junto a esa definición). Acá solo hace falta
            // avisarle que arranque.
            setInsightStarted(true)
          }
        }

        if (t < 1) {
          requestAnimationFrame(animate)
        } else {
          setProgress(1)
          setShowRightContent(true)
        }
      }

      requestAnimationFrame(animate)
    }

    // Antes esto arrancaba con un simple setTimeout(start, 50) — 50ms fijos
    // después de montar, sin importar si el navegador ya había terminado de
    // acomodar todo el layout de arriba (todo el texto de las secciones
    // anteriores, con sus fuentes ya en su tamaño final). `imagePos` se mide
    // leyendo offsetTop de la imagen, que depende PRECISAMENTE de esa altura
    // de arriba — la primera vez que se abre un case study (motor de fuentes
    // y de layout todavía "fríos"), 50ms a veces no alcanzaban y la medición
    // salía más chica de lo real, así que la animación arrancaba con una
    // posición vieja y el destape terminaba desalineado (se veía cortado).
    // La segunda vez ya todo estaba "caliente" (fuentes y layout ya
    // resueltos de la vez anterior) y por eso se veía bien. Ahora se espera
    // primero a que las fuentes estén realmente cargadas (document.fonts.
    // ready) y encima con un doble requestAnimationFrame (espera a que el
    // navegador ya haya pintado ese layout final) antes de medir — así la
    // primera vez se comporta igual que la segunda.
    const waitTwoFrames = () => {
      requestAnimationFrame(() => requestAnimationFrame(() => { if (!cancelled) start() }))
    }

    // La espera a document.fonts.ready no tiene garantía de resolver rápido:
    // si una fuente externa (como Satoshi, que viene de Fontshare) se demora
    // en cargar o queda bloqueada por la red, esa promesa puede tardar mucho
    // o directamente no resolver nunca — y como `progress` (lo que hace
    // crecer el panel negro) no se mueve hasta que arranca la animación, el
    // panel se quedaba trabado sin crecer. Por eso se corre una carrera
    // contra un tope de 350ms: si las fuentes no están listas para entonces,
    // se arranca igual.
    let fontsReady = Promise.resolve()
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      fontsReady = document.fonts.ready.catch(() => {})
    }
    const fontsTimeout = new Promise(resolve => setTimeout(resolve, 350))
    Promise.race([fontsReady, fontsTimeout]).then(waitTwoFrames)

    return () => { cancelled = true }
  }, [])

  React.useEffect(() => {
    const el = ellосRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !ellosStarted) {
          setEllosStarted(true)
          let i = 0
          const text = 'Ellos ya sabían hacer seguimiento pero las herramientas los obligaban a ir a buscar lo que debería llegar solo.'
          const interval = setInterval(() => {
            if (i < text.length) {
              setEllosTyping(text.slice(0, i + 1))
              i++
            } else clearInterval(interval)
          }, 25)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ellosStarted])

  // El chequeo de "¿ya se scrolleó lo suficiente como para mostrar el
  // insight?" vivía acá antes, en un useEffect atado a `progress`. Se movió
  // adentro del requestAnimationFrame de la animación de entrada (ver más
  // abajo, `insightCheckDone`) porque ese es el único momento en que el
  // scroll realmente se mueve (es una animación automática), y hacerlo ahí
  // evita depender de un cambio de estado de React para algo que ya se está
  // leyendo/escribiendo por ref cuadro a cuadro. El typing letra-por-letra
  // en sí (y su propio setInterval) ahora vive DENTRO de InsightTypingText,
  // no acá — por eso ya no hace falta un ref de intervalo en este
  // componente.

  React.useEffect(() => {
    if (!imageRef.current || imageVisible) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setImageVisible(true)
      },
      { threshold: 0, root: contentRef.current }
    )
    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [imageVisible])

  React.useEffect(() => {
    if (progress < 1 || arrowStep >= 3) return
    const timer = setTimeout(() => setArrowStep(s => s + 1), 500)
    return () => clearTimeout(timer)
  }, [arrowStep, progress])

  React.useEffect(() => {
    if (!diagramRef.current || diagramVisible) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setDiagramVisible(true)
      },
      { threshold: 0.3, root: contentRef.current }
    )
    observer.observe(diagramRef.current)
    return () => observer.disconnect()
  }, [diagramVisible])

  React.useEffect(() => {
    if (!discoveryRef.current || discoveryVisible) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setDiscoveryVisible(true)
      },
      { threshold: 0.3, root: contentRef.current }
    )
    observer.observe(discoveryRef.current)
    return () => observer.disconnect()
  }, [discoveryVisible])

  React.useEffect(() => {
    setColorStep(0)
    colorTimerRef.current = setInterval(() => {
      setColorStep(s => (s + 1) % 4)
    }, 2500)
    return () => clearInterval(colorTimerRef.current)
  }, [])

  React.useEffect(() => {
    if (!checkRef.current || checkVisible) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setCheckVisible(true)
      },
      { threshold: 0.5, root: contentRef.current }
    )
    observer.observe(checkRef.current)
    return () => observer.disconnect()
  }, [checkVisible])

  React.useEffect(() => {
    if (brandAutoRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !brandAutoRef.current) {
          brandAutoRef.current = true
          let count = 0
          const timer = setInterval(() => {
            count++
            setIsCarouselTransitioning(true)
            setTimeout(() => {
              setBrandIndex(i => (i + 1) % 5)
              setTimeout(() => setIsCarouselTransitioning(false), 50)
            }, 300)
            if (count >= 4) clearInterval(timer)
          }, 2000)
        }
      },
      { threshold: 0.3, root: contentRef.current }
    )
    const el = document.querySelector('.brand-carousel')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* width/opacity/clipPath de estos dos paneles y del panel blanco de
          más abajo (rightPanelRef) ya NO se calculan a partir de `progress`
          acá — son valores fijos (los de arranque, antes de que la entrada
          empiece) a propósito. `progress` sigue existiendo como estado para
          lo poco que todavía lo necesita reactivamente (el botón de cerrar,
          el efecto del "insight"), y ese estado se sigue actualizando cada
          tanto durante la animación — pero como React solo vuelve a tocar
          el DOM cuando el VALOR del style cambia respecto al render
          anterior, si acá dejamos un valor fijo que nunca cambia, React
          jamás lo vuelve a pisar. Antes, cuando esto SÍ leía `progress`,
          cada vez que React volvía a renderizar (por el estado, o por
          CUALQUIER otro estado de este componente tan grande — un typing
          effect, lo que sea) pisaba el ancho/clip con el valor de
          `progress` de ESE render, que iba atrasado respecto al frame real
          de la animación (dibujada por rAF más abajo) — eso se veía como un
          parpadeo/flicker bien feo entre "panel abierto" y "panel angosto
          de nuevo", que es exactamente el bug reportado. Ahora el rAF de
          más abajo escribe el ancho/clip real DIRECTO sobre el elemento
          (por ref) en cada frame, y como React nunca vuelve a tocar estas
          propiedades, no hay con qué pelear. */}
      <div ref={colorPanelRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '0vw',
        height: '100vh',
        background: color,
        zIndex: 9999,
        transition: 'none',
        overflow: 'hidden'
      }}/>
      <div ref={contentRef} className="left-panel" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '60vw',
        height: '100vh',
        zIndex: 10000,
        overflowY: 'auto',
        overflowX: 'hidden',
        opacity: 0,
        clipPath: 'inset(0 100% 0 0)',
        filter: dotPressed ? 'blur(8px)' : 'none',
        transition: 'filter 0.3s ease',
        padding: '0'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '8px',
          padding: '0',
          opacity: closing ? (1 - closeProgress) : 1
        }}>
          <p style={{
            fontFamily: projectColor === '#121716' ? "'Satoshi', sans-serif" : "'Sansita', sans-serif",
            fontWeight: 700,
            fontSize: '150px',
            color: projectColor === '#121716' ? '#F5F2EE' : '#F31006',
            lineHeight: 1,
            // Este textShadow estaba fijo en verde (rgba(176,255,146,...),
            // el mint de BEACON) sin importar qué proyecto fuera — para
            // Theaveling (texto rojo sobre fondo verde oscuro) eso se veía
            // como un halo verde random detrás del título, sin relación con
            // su paleta. Theaveling no lleva glow — se saca del todo para
            // ese proyecto, y Beacon mantiene el suyo.
            textShadow: projectColor === '#121716'
              ? '0 0 20px rgba(176,255,146,0.1), 0 0 40px rgba(176,255,146,0.05)'
              : 'none'
          }}>
            {projectName}
          </p>
          {projectName === 'Beacon' && (
            <>
              <div style={{position: 'relative'}}>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 100,
                  fontSize: '72px',
                  color: '#F5F7F7',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  margin: '0',
                  paddingLeft: '8px',
                  textShadow: '0 0 40px rgba(176,255,146,0.15), 0 0 120px rgba(176,255,146,0.08)'
                }}>
                  Sin ops en la oscuridad
                  <span style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#B0FF92',
                    boxShadow: '0 0 6px #B0FF92, 0 0 12px rgba(176,255,146,0.5)',
                    verticalAlign: 'top',
                    marginLeft: '2px',
                    top: '-4px'
                  }}/>
                </p>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '4px',
                marginTop: '32px',
                width: '100%',
                maxWidth: '60vw',
                textAlign: 'center',
                zIndex: 10000
              }}>
                <p ref={sec01Ref} style={{
                  fontFamily:"'Plus Jakarta Sans', sans-serif",
                  fontWeight:300,
                  fontSize:'32px',
                  color:'rgba(255,255,255,0.5)',
                  textAlign:'left',
                  lineHeight:1.5
                }}>
                  Antes de enseñarte lo que hice...<br/>
                  déjame mostrarte el mundo que tuve que entender.
                </p>
                <ArrowDown size={100} color="#B0FF92" strokeWidth={1.5} style={{animation:'bounceArrow 2s ease-in-out infinite', flexShrink:0, transform:'rotate(-90deg)', marginTop:'8px', verticalAlign:'middle'}}/>
              </div>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontVariationSettings: "'wght' 150",
                fontWeight: 150,
                fontSize: '18px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                marginTop: '32px',
                paddingLeft: '8px',
                width: '95%'
              }}>
                <span style={{color:'rgba(255,255,255,0.5)'}}>Beacon no nació porque alguien pidiera una herramienta. </span><span style={{color:'#B0FF92'}}>Nació porque distintas</span><br/><span style={{color:'#B0FF92'}}>personas describían el mismo problema desde perspectivas diferentes.</span>
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'12px', paddingLeft:'8px', whiteSpace:'nowrap'}}>
                Cada entrevista iluminó una pieza distinta. <span style={{color:'#B0FF92'}}>Mi trabajo fue unirlas.</span>
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', marginTop:'60px', paddingLeft:'8px', width:'80%'}}>
                <span style={{fontWeight:500, fontSize:'30px', color:'#F5F7F7'}}>C.A.M. </span>Un Channel Account Manager es el responsable de coordinar ventas a través de partners y distribuidores.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', marginTop:'16px', paddingLeft:'8px', width:'80%'}}>
                Su trabajo no termina cuando entrega una oportunidad. En realidad, ahí empieza la parte más difícil: seguir siendo visible dentro del proceso.
              </p>
              <div style={{marginTop:'30px', paddingLeft:'8px'}}>
                <div ref={diagramRef} style={{
                  display:'flex',
                  alignItems:'flex-start',
                  gap:'8px',
                  marginTop:'100px',
                  marginBottom:'60px',
                  justifyContent:'center',
                  width: 'fit-content',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px',
                  padding: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  opacity: diagramVisible ? 1 : 0,
                  transform: diagramVisible ? 'scale(1)' : 'scale(0.95)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease'
                }}>
                  {[
                    { label:'Vendor', icon: <Building2 size={32} color="#7B58F8" strokeWidth={1.5}/>, color: 'rgba(255,255,255,0.5)' },
                    { label:'Asesor', icon: <Phone size={32} color="#7B58F8" strokeWidth={1.5}/>, color: 'rgba(255,255,255,0.5)' },
                    { label:'CAM', icon: <Settings2 size={32} color="#B0FF92" strokeWidth={1.5}/>, color: '#B0FF92', highlight: true },
                    { label:'Partners', icon: <Handshake size={32} color="#7B58F8" strokeWidth={1.5}/>, color: 'rgba(255,255,255,0.5)' },
                    { label:'Cliente', icon: <User size={32} color="#7B58F8" strokeWidth={1.5}/>, color: 'rgba(255,255,255,0.5)' }
                  ].map((item, i) => (
                    <React.Fragment key={i}>
                      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
                        {item.icon}
                        <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight: item.color === '#B0FF92' ? 700 : 300, fontSize:'20px', color: item.color}}>{item.label}</span>
                      </div>
                      {i < 4 && (
                        <svg width="40" height="16" viewBox="0 0 40 16" fill="none" style={{marginTop:'12px', flexShrink:0}}>
                          <line x1="0" y1="8" x2="34" y2="8" stroke="#F5F7F7" strokeWidth="3" strokeLinecap="round"/>
                          <polyline points="28 3 34 8 28 13" stroke="#F5F7F7" strokeWidth="3" strokeLinecap="round" fill="none"/>
                        </svg>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                  <p style={{
                    fontFamily:"'Satoshi', sans-serif",
                    fontWeight:500,
                    fontSize:'30px',
                    color:'#F5F7F7',
                    marginTop:'40px',
                    textAlign:'left',
                    width:'80%'
                  }}>El punto ciego del pipeline.</p>
                  <div data-hairline='true' style={{width:'70%', height:'2px', background:'linear-gradient(to right, rgba(176,255,146,0.3), transparent)', marginTop:'16px'}}/>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'40px', width:'80%', textAlign:'left', alignSelf:'flex-start'}}>
                    En ecosistemas de venta por canal B2B, una vez que una oportunidad pasa al partner, el CAM pierde visibilidad sobre su estado real.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%'}}>
                    No sabe si la oportunidad sigue activa, si está bloqueada o si ya se cerró.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', textAlign:'left', alignSelf:'flex-start'}}>
                    Para averiguarlo tiene que reconstruir manualmente la historia del deal entre CRMs, correos, dashboards y conversaciones.
                  </p>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', marginTop:'120px', width:'90%', marginLeft:'20px', marginRight:'auto', position:'relative'}}>
                    <div style={{position:'absolute', top:0, bottom:0, left:'50%', width:'1px', marginLeft:'-0.5px', background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)'}}/>
                    <div style={{position:'absolute', left:0, right:0, top:'50%', height:'1px', marginTop:'-0.5px', background:'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)'}}/>
                    {[
                      { num:'15 min', label:'Seguimiento manual por oportunidad.', desc:'Tiempo promedio que un CAM invierte verificando el estado de un solo deal entre diferentes herramientas.' },
                      { num:'70–80', label:'Oportunidades activas simultáneas.', desc:'Un volumen que hace prácticamente imposible mantener el seguimiento de forma manual.' },
                      { num:'2 meses', label:'Ventana para registrar la atribución.', desc:'Si una venta no se registra a tiempo, la comisión puede perderse aunque el trabajo comercial ya se haya realizado.' },
                      { num:'USD 400K', label:'Valor de una sola oportunidad.', desc:'Un deal puede representar cientos de miles de dólares y perderse simplemente por falta de visibilidad.' }
                    ].map((item, i) => (
                      <div key={i} style={{display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'48px', color:'#B0FF92', lineHeight:1}}>{item.num}</p>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'18px', color:'#7B58F8', marginTop:'8px'}}>{item.label}</p>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'14px', color:'rgba(255,255,255,0.5)', marginTop:'4px', lineHeight:1.7}}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:100, fontSize:'18px', color:'rgba(255,255,255,0.5)', marginTop:'120px', lineHeight:1.8, textAlign:'left', paddingLeft:'8px', maxWidth:'80%'}}>
                  Ellos ya sabían hacer seguimiento pero las herramientas los obligaban a ir a buscar lo que debería llegar solo.
                </p>
                <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontVariationSettings: "'wght' 150", fontWeight:150, fontSize:'18px', color:'#B0FF92', marginTop:'4px', width:'80%', lineHeight:1.8, textAlign:'left', paddingLeft:'8px'}}>
                  Los usuarios no querían más seguimiento, querían recuperar la visibilidad.
                </p>
                <InsightTypingText ref={insightRef} active={insightStarted} />
                <div style={{
                  display:'flex',
                  justifyContent:'center',
                  marginTop:'120px',
                  width:'100%'
                }}>
                  <img ref={imageRef} src={procesoBea1} style={{width:'80%', borderRadius:'12px', display:'block', opacity: imageVisible ? 1 : 0, transform: imageVisible ? 'translateY(0)' : 'translateY(60px)', transition: 'opacity 0.3s ease, transform 0.3s ease'}} onError={(e) => console.log('Error loading:', e.target.src)} />
                </div>
                <div style={{marginTop:'120px', paddingLeft:'8px'}}>
                  <p ref={sec02Ref} style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', marginBottom:'8px'}}>
                    Hablé con quienes viven este problema.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'4px', width:'80%', whiteSpace:'nowrap'}}>
                    No quería empezar dibujando pantallas.<br/>Primero necesitaba entender si el problema era realmente tan grande como parecía.
                  </p>
                  <span style={{fontFamily:"'Didact Gothic', sans-serif", fontSize:'200px', fontWeight:700, color:'transparent', WebkitTextStroke:'0.1px #B0FF92', lineHeight:0.5, display:'block', marginBottom:'-40px', marginTop:'60px'}}>❝</span>
                  <div style={{width:'90%', marginTop:'60px', paddingLeft:'40px'}}>
                    <div style={{display:'flex', flexDirection:'row', gap:'40px', alignItems:'flex-start'}}>
                      {quotes[quoteIndex].map((quote, i) => (
                        <p key={i} style={{
                          fontFamily:"'Plus Jakarta Sans', sans-serif",
                          fontWeight:150,
                          fontSize:'18px',
                          color:'rgba(255,255,255,0.8)',
                          lineHeight:1.8,
                          width:'33%',
                          textShadow:'0 0 20px rgba(255,255,255,0.1)'
                        }}>{quote}
                          <span style={{display:'inline-block', width:'6px', height:'6px', borderRadius:'50%', background:'#B0FF92', boxShadow:'0 0 6px #B0FF92', marginLeft:'6px', verticalAlign:'middle'}}/>
                        </p>
                      ))}
                    </div>
                    <div style={{display:'flex', marginTop:'24px'}}>
                      <CarouselDots count={quotes.length} activeIndex={quoteIndex} onChange={setQuoteIndex} color="#B0FF92" />
                    </div>
                  </div>
                  <span style={{fontFamily:"'Didact Gothic', sans-serif", fontSize:'200px', fontWeight:700, color:'transparent', WebkitTextStroke:'0.1px #B0FF92', lineHeight:0.5, display:'block', textAlign:'right', marginTop:'-10px', paddingRight:'40px'}}>❞</span>
                  <div style={{marginTop:'40px', width:'80%', display:'flex'}}>
                    <VerProductoBtn texto="Contexto de investigación" icon={notionIcon} href="https://app.notion.com/p/M-todos-de-investigaci-n-Beacon-3ecf6a9b190480ebbecac014f5587491?source=copy_link" width="230px" hoverWidth="250px" />
                  </div>
                  <p style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'32px', color:'rgba(255,255,255,0.5)', marginTop:'120px'}}>
                    {'Eso fue lo primero que quedó claro.'}
                    <span ref={checkRef} style={{opacity: checkVisible ? 1 : 0, transition:'opacity 0.5s ease'}}>
                      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#B0FF92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline-block', marginLeft:'8px', verticalAlign:'middle'}}>
                        <polyline points="4 12 9 17 20 6" strokeDasharray="35" strokeDashoffset={checkVisible ? "0" : "35"} style={{transition:'stroke-dashoffset 1s ease 0.2s'}}/>
                      </svg>
                    </span>
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', marginTop:'8px'}}>
                    Lo siguiente era comprobar si el mercado ya había resuelto ese problema.
                  </p>
                  <p style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7', marginTop:'160px'}}>
                    Lo que empezó a repetirse.
                  </p>
                  <div data-hairline='true' style={{width:'calc(70% + 5.6px)', height:'2px', marginLeft:'-8px', background:'linear-gradient(to right, rgba(176,255,146,0.3), transparent)', marginTop:'16px'}}/>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'24px', marginTop:'60px', width:'90%', marginLeft:'24px'}}>
                    {[
                      {num:'01', text:'El problema no era gestionar más oportunidades. Era saber cuáles necesitaban atención.'},
                      {num:'02', text:'El seguimiento dependía de buscar información en varias herramientas desconectadas.'},
                      {num:'03', text:'Cada minuto dedicado a verificar un deal era tiempo que dejaban de invertir en vender.'}
                    ].map((item, i) => (
                      <div key={i} style={{position:'relative', display:'flex', flexDirection:'column', gap:'16px', border:'1px solid rgba(255,255,255,0.15)', borderRadius:'12px', padding:'24px', paddingTop:'40px', background:'rgba(255,255,255,0.05)', backdropFilter:'blur(10px)', boxShadow:'0 8px 32px rgba(0,0,0,0.3)'}}>
                        <span style={{position:'absolute', top:'-20px', left:'16px', color:'#B0FF92', fontSize:'36px', fontWeight:700, fontFamily:"'Plus Jakarta Sans', sans-serif"}}>{item.num}</span>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.8)', lineHeight:1.8, margin:0}}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', marginTop:'120px', lineHeight:1.2}}>
                    Pensé que alguien ya habría resuelto esto.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'12px', width:'90%', textAlign:'left'}}>
                    Encontré herramientas muy buenas.<br/><span style={{color:'#B0FF92'}}>Pero descubrí que todas estaban optimizadas para resolver problemas diferentes.</span><br/>Y ahí entendí cuál era realmente el espacio de Beacon.
                  </p>
                  <div className="brand-carousel" style={{width:'100%', marginTop:'-90px', position:'relative'}}>
                    <div style={{display:'flex', gap:'8px', justifyContent:'flex-start', paddingLeft:'8px', position:'absolute', top:'110px', left:'8px', zIndex:2}}>
                      {[0,1,2,3,4].map(i => (
                        <div key={i} onClick={() => {
                          setIsCarouselTransitioning(true)
                          setTimeout(() => {
                            setBrandIndex(i)
                            setTimeout(() => setIsCarouselTransitioning(false), 50)
                          }, 300)
                        }} style={{
                          width: brandIndex === i ? '28px' : '10px',
                          height:'10px',
                          borderRadius:'4px',
                          background: brandIndex === i ? '#B0FF92' : 'rgba(255,255,255,0.3)',
                          cursor:'pointer',
                          zIndex: 10,
                          position: 'relative',
                          transition:'all 0.3s ease'
                        }}/>
                      ))}
                    </div>
                    <div style={{position:'relative', width:'100%', height:'55vw', overflow:'hidden', borderRadius:'12px', marginTop:'16px'}}>
                      {[partnerstack, crossbeam, impartner, mockupBeacon, demoBeacon].map((src, i) => (
                        i === 4 ? (
                          <div key={i} style={{
                            position:'absolute', top:0, left:0, width:'100%', height:'100%',
                            opacity: brandIndex === i ? 1 : 0,
                            transition:'opacity 0.4s ease',
                            borderRadius:'16px',
                            overflow:'hidden',
                            background:'transparent',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            padding:'20px'
                          }}>
                            <div style={{
                              width:'80%',
                              borderRadius:'12px',
                              overflow:'hidden',
                              boxShadow:'0 0 40px rgba(176,255,146,0.15)',
                              marginLeft: '-5%'
                            }}>
                              <div style={{
                                background:'#1E2433',
                                padding:'8px 12px',
                                display:'flex',
                                gap:'6px',
                                alignItems:'center'
                              }}>
                                <div style={{width:'10px',height:'10px',borderRadius:'50%',background:'#FF5F57'}}/>
                                <div style={{width:'10px',height:'10px',borderRadius:'50%',background:'#FFBD2E'}}/>
                                <div style={{width:'10px',height:'10px',borderRadius:'50%',background:'#28C840'}}/>
                              </div>
                              <video autoPlay loop muted playsInline style={{width:'100%', display:'block'}}>
                                <source src={demoBeacon} type="video/mp4"/>
                              </video>
                            </div>
                          </div>
                        ) : (
                          <img key={i} src={src} style={{
                            position:'absolute', top:0, left:0, width:'100%', height:'100%',
                            objectFit:'contain', padding:'24px',
                            opacity: brandIndex === i ? (isCarouselTransitioning ? 0.3 : 1) : 0,
                            filter: isCarouselTransitioning ? 'blur(4px) brightness(0.8)' : 'none',
                            transform: isCarouselTransitioning ? 'translateX(20px)' : 'translateX(0)',
                            transition:'filter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease'
                          }}/>
                        )
                      ))}
                    </div>
                    {brandIndex !== 3 && brandIndex !== 4 && (
                      <div style={{
                        marginTop:'-130px',
                        background:'rgba(255,255,255,0.05)',
                        backdropFilter:'blur(10px)',
                        border:'1px solid rgba(255,255,255,0.1)',
                        borderRadius:'12px',
                        position:'relative',
                        zIndex:1,
                        display:'grid',
                        gridTemplateColumns:'1fr 1fr 1fr',
                        overflow:'hidden',
                        width:'90%',
                        marginLeft:'3%',
                        marginRight:'auto',
                        transform: isCarouselTransitioning ? 'translateX(-20px)' : 'translateX(0)',
                        opacity: isCarouselTransitioning ? 0 : 1,
                        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease'
                      }}>
                        <div style={{position:'absolute', top:0, bottom:0, left:'33.3%', width:'1px', background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)'}}/>
                        <div style={{position:'absolute', top:0, bottom:0, left:'66.6%', width:'1px', background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)'}}/>
                        {[
                          {icon:'✓', value: brandIndex === 0 ? 'Automatiza afiliados y pagos.' : brandIndex === 1 ? 'Descubre oportunidades compartidas.' : brandIndex === 2 ? 'Gestiona programas de partners.' : brandIndex === 3 ? 'Beacon fue diseñado alrededor de una única pregunta.' : ''},
                          {icon:'✔', value: brandIndex === 0 ? 'Excelente para SaaS.' : brandIndex === 1 ? 'Muy bueno para generar negocio.' : brandIndex === 2 ? 'Procesos corporativos.' : brandIndex === 3 ? '¿Qué necesita saber el CAM ahora mismo para tomar la siguiente decisión?' : ''},
                          {icon:'✖', value: brandIndex === 0 ? 'El seguimiento operativo no es su prioridad.' : brandIndex === 1 ? 'No dice qué pasó con un deal existente.' : brandIndex === 2 ? 'Depende de que todos alimenten el sistema.' : ''}
                        ].map((col, i) => (
                          <div key={i} style={{padding:'10px 16px', display:'flex', alignItems:'center', gap:'8px'}}>
                            <span style={{fontFamily:"'IBM Plex Mono', monospace", fontWeight:300, fontSize: col.icon === '✓' ? '16px' : '14px', color: col.icon === '✓' ? '#B0FF92' : col.icon === '✔' ? '#B0FF92' : '#FF6B35', lineHeight: col.icon === '✓' ? 1 : 'inherit', verticalAlign: 'middle', marginTop: col.icon === '✓' ? '0' : '0', flexShrink:0}}>{col.icon}</span>
                            <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'14px', color:'#7B58F8', lineHeight:1.4, margin:0}}>{col.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {brandIndex === 3 && (
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, margin:'-130px auto 0', width:'80%', textAlign:'center'}}>
                        Beacon fue diseñado alrededor de una única pregunta.<br/>
                        <span style={{color:'#B0FF92'}}>¿Qué necesita saber el CAM ahora mismo para tomar la siguiente decisión?</span>
                      </p>
                    )}
                    {brandIndex === 4 && (
                      <div style={{
                        marginTop:'-150px',
                        padding:'10px 16px',
                        background:'rgba(255,255,255,0.05)',
                        backdropFilter:'blur(10px)',
                        border:'1px solid rgba(255,255,255,0.1)',
                        borderRadius:'12px',
                        width:'90%',
                        marginLeft:'3%',
                        display:'grid',
                        gridTemplateColumns:'1fr 1fr 1fr',
                        overflow:'hidden',
                        position:'relative'
                      }}>
                        <div style={{position:'absolute', top:0, bottom:0, left:'33.3%', width:'1px', background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)'}}/>
                        <div style={{position:'absolute', top:0, bottom:0, left:'66.6%', width:'1px', background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)'}}/>
                        {['Ver qué oportunidades requieren atención.', 'Saber cuándo actuar.', 'Recuperar la visibilidad sin perseguir información.'].map((text, i) => (
                          <div key={i} style={{padding:'4px 16px', display:'flex', alignItems:'center', gap:'8px'}}>
                            <span style={{color:'#B0FF92', fontSize:'16px', flexShrink:0}}>✓</span>
                            <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'14px', color:'rgba(255,255,255,0.7)', lineHeight:1.4, margin:0}}>{text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <p ref={sec03Ref} style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', marginTop:'120px', lineHeight:1.2}}>
                    Antes de diseñar, validé la oportunidad utilizando un framework de Discovery para asegurarme de que el producto respondía a un problema real.
                  </p>
                  <p style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7', marginTop:'40px', lineHeight:1.2}}>
                    Seis preguntas que guiaron la definición del producto.
                  </p>
                  <div data-hairline='true' style={{width:'calc(70% + 5.6px)', height:'2px', marginLeft:'-8px', background:'linear-gradient(to right, rgba(176,255,146,0.3), transparent)', marginTop:'16px'}}/>
                  <div style={{display:'flex', flexDirection:'column', gap:'12px', marginTop:'24px', width:'80%'}}>
                    {['¿Qué problema resuelve?', '¿Quién lo tiene?', '¿Cómo lo resuelven hoy?', '¿Qué existe?', '¿Qué oportunidad hay?', '¿Qué evidencia tengo?'].map((q, i) => (
                      <div key={i} style={{display:'flex', alignItems:'center', gap:'12px'}}>
                        <span style={{width:'6px', height:'6px', borderRadius:'50%', background:'#B0FF92', boxShadow:'0 0 6px #B0FF92, 0 0 12px rgba(176,255,146,0.4)', flexShrink:0, display:'inline-block'}}/>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', margin:0}}>{q}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'40px', width:'80%'}}>
                    Respondiendo a estas preguntas escribí la PRD y prioricé el MVP utilizando MoSCoW. La prioridad ya no era construir mucho.<br/>
                    Era construir únicamente lo que eliminaba el problema principal.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#B0FF92', lineHeight:1.7, marginTop:'8px', width:'80%'}}>
                    Ya sabía qué problema resolver. Ahora tenía que decidir cómo hacerlo.
                  </p>
                  <p ref={sec04Ref} style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7', marginTop:'80px', textAlign:'left', width:'80%'}}>
                    Decisiones que hicieron Beacon
                  </p>
                  <div data-hairline='true' style={{width:'calc(70% + 5.6px)', height:'2px', marginLeft:'-8px', background:'linear-gradient(to right, rgba(176,255,146,0.3), transparent)', marginTop:'16px'}}/>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#B0FF92', lineHeight:1.7, marginTop:'40px', width:'80%'}}>
                    La primera decisión fue dejar de pensar en listas.
                  </p>
                  <div style={{position:'relative', marginTop:'8px', height:'40px', width:'100%'}}>
                    <>
                      <div
                        style={{
                          position:'absolute',
                          right:'40px',
                          top:'50%',
                          transform:'translateY(-50%)',
                          width:'10px',
                          height:'10px',
                          borderRadius:'50%',
                          background:'rgba(255,255,255,0.9)',
                          boxShadow:'0 0 8px rgba(255,255,255,0.7)',
                          cursor:'pointer',
                          zIndex:3,
                          animation: 'dotPulse 2s ease-in-out infinite'
                        }}
                      onMouseEnter={() => setDotHovered(true)}
                      onMouseDown={() => {
                        setDotPressed(true)
                        setSlideIndex(0)
                        slideTimerRef.current = setInterval(() => {
                          setSlideIndex(i => (i + 1) % 3)
                        }, 2000)
                      }}
                      onMouseUp={() => {
                        setDotPressed(false)
                        setSlideIndex(0)
                        clearInterval(slideTimerRef.current)
                      }}
                      onMouseLeave={() => {
                        setDotPressed(false)
                        setDotHovered(false)
                        setSlideIndex(0)
                        clearInterval(slideTimerRef.current)
                      }}
                    />
                    {dotHovered && (
                      <div style={{position:'absolute', right:'0px', top:'120%', transform:'translateY(-50%)', display:'flex', alignItems:'center', animation:'slideHandIn 0.6s cubic-bezier(0.4,0,0.2,1) forwards', pointerEvents:'none', zIndex:4}}>
                        <img src={handPinch} style={{width:'60px', filter:'invert(1)', display:'block'}}/>
                        <div style={{width:'24px', height:'20px', background:'rgba(255,255,255,0.9)', borderRadius:'0 6px 8px 0', marginLeft:'-6px', marginTop:'40px', transform:'rotate(15deg)'}}/>
                      </div>
                    )}
                    </>
                  </div>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'4px', width:'80%'}}>
                    Cuando generé las primeras pantallas con IA obtuve un dashboard bastante genérico. Las oportunidades seguían apareciendo en una lista con etiquetas de estado. Era una interfaz correcta, pero no resolvía el problema que acababa de descubrir durante las entrevistas.<br/><br/>
                    El CAM no necesitaba leer ochenta oportunidades una por una.<br/>
                    Necesitaba entender el estado de su pipeline con un solo vistazo.<br/><br/>
                    <span style={{color:'#B0FF92'}}>Ahí apareció el Kanban.</span><br/><br/>
                    En ese momento entendí que las columnas no debían representar etapas comerciales, sino el nivel de atención que requería cada oportunidad.
                  </p>
                  <div style={{width:'calc(100% + 24px)', height:'1px', background:'rgba(255,255,255,0.1)', marginTop:'60px', marginLeft:'-24px', display:'block'}}/>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#B0FF92', marginTop:'60px', lineHeight:1.2}}>
                    Si el sistema podía preguntar, el CAM no debía hacerlo.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'24px', width:'80%'}}>
                    Durante las entrevistas apareció una frase varias veces.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'16px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'16px', width:'80%'}}>
                    <span style={{color:'#B0FF92'}}>"</span>Si hubiese una manera donde se nos notifique...<span style={{color:'#B0FF92'}}>"</span>
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'16px', width:'80%'}}>
                    Ese comentario terminó convirtiéndose en la funcionalidad principal de Beacon.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#B0FF92', marginTop:'60px'}}>
                    Así nació el Pulse Check.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'24px', width:'80%'}}>
                    En lugar de obligar al CAM a perseguir al partner, Beacon invierte el flujo: el sistema pregunta y la respuesta vuelve automáticamente al pipeline.
                  </p>
                  <div style={{width:'calc(100% + 24px)', height:'1px', background:'rgba(255,255,255,0.1)', marginTop:'60px', marginLeft:'-24px', display:'block'}}/>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'60px', width:'80%'}}>
                    <span style={{color:'#B0FF92'}}>Reducir fricción también era una decisión de producto.</span><br/><br/>
                    En un principio pensé en construir un portal para partners.<br/>
                    Lo descarté rápidamente.<br/><br/>
                    Pedirle al partner que aprendiera otra herramienta añadía exactamente la fricción que quería eliminar.<br/><br/>
                    Por eso el partner responde desde un email, sin registrarse y sin crear una cuenta.
                  </p>
                  <div style={{display:'flex', alignItems:'center', gap:'40px', marginTop:'24px'}}>
                    <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:0, width:'auto'}}>
                      <span style={{color:'#F5F7F7', fontWeight:400}}>Tres opciones.<br/>Un clic.<br/>Nada más.</span>
                    </p>
                    <PulseButtons/>
                  </div>
                  <p ref={sec05Ref} style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7', marginTop:'80px', textAlign:'left', width:'80%'}}>
                    Diseñando Beacon
                  </p>
                  <div data-hairline='true' style={{width:'calc(70% + 5.6px)', height:'2px', marginLeft:'-8px', background:'linear-gradient(to right, rgba(176,255,146,0.3), transparent)', marginTop:'16px'}}/>
                  <div style={{display:'flex', gap:'40px', alignItems:'flex-start', marginTop:'60px'}}>
                    <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:0, width:'80%', flex:1, paddingTop:'60px'}}>
                      <span style={{color:'#B0FF92'}}>La IA no diseñó Beacon. Aceleró su construcción.</span><br/><br/>
                      Utilicé Claude Code para transformar decisiones de producto<br/>en interfaces funcionales.<br/>
                      <span style={{display:'block', marginTop:'16px'}}>Las primeras propuestas fueron genéricas.</span><br/>
                      A partir de ahí fui iterando cada pantalla hasta que el producto<br/>reflejara el comportamiento que había identificado durante<br/>la investigación.<br/><br/>
                      <span style={{color:'#B0FF92'}}>La IA ejecutó.<br/>Las decisiones fueron a partir del discovery.</span>
                    </p>
                    <div ref={discoveryRef} style={{
                      display:'block',
                      marginTop:'-20px',
                      marginRight:'150px',
                      border:'1px solid rgba(255,255,255,0.15)',
                      borderRadius:'12px',
                      padding:'16px 20px',
                      background:'rgba(255,255,255,0.05)',
                      backdropFilter:'blur(10px)',
                      boxShadow:'0 8px 32px rgba(0,0,0,0.3)'
                    }}>
                      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'4px'}}>
                        {[
                          {label:'Idea', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B58F8" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>},
                          {label:'Discovery', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B58F8" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>},
                          {label:'Claude Code', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0FF92" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, highlight:true},
                          {label:'Producto', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B58F8" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>},
                          {label:'Feedback', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B58F8" strokeWidth="1.5" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>},
                          {label:'Iteración', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B58F8" strokeWidth="1.5" strokeLinecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>}
                        ].map((item, i, arr) => (
                          <React.Fragment key={i}>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'6px'}}>
                              {item.icon}
                              <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight: item.highlight ? 700 : 300, fontSize:'14px', color: item.highlight ? '#B0FF92' : 'rgba(255,255,255,0.6)'}}>{item.label}</span>
                            </div>
                            {i < arr.length - 1 && (
                              <svg width="16" height="40" viewBox="0 0 16 40" fill="none">
                                <line x1="8" y1="0" x2="8" y2="34" stroke="#F5F7F7" strokeWidth="3" strokeLinecap="round"/>
                                <polyline points="3 28 8 34 13 28" stroke="#F5F7F7" strokeWidth="3" strokeLinecap="round" fill="none"/>
                              </svg>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{width:'calc(100% + 24px)', height:'1px', background:'rgba(255,255,255,0.1)', marginTop:'120px', marginLeft:'-24px', display:'block'}}/>
                  <div ref={colorRef} style={{position:'relative', display:'flex', gap:'40px', alignItems:'flex-start', marginTop:'0px'}}>
                    <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#F5F7F7', lineHeight:1.8, marginTop:'80px', flex:1, textShadow:'0 0 20px rgba(245,247,247,0.3)'}}>
                      El color también tenía una función.<br/><br/>
                      Al principio utilicé un semáforo tradicional.<br/>
                      <span style={{color:'rgba(255,255,255,0.5)'}}>Rojo.</span> <span style={{color:'rgba(255,255,255,0.5)'}}>Amarillo.</span> <span style={{color:'rgba(255,255,255,0.5)'}}>Verde.</span><br/><br/>
                      Pronto entendí que el rojo transmitía urgencia<br/>permanente en un producto que debía generar claridad.<br/><br/>
                      Rediseñé completamente la paleta.<br/><br/>
                      El verde comunica estabilidad.<br/>
                      El morado representa espera.<br/>
                      El azul confirma.<br/>
                      El naranja indica que una oportunidad necesita<br/>atención, sin transmitir fracaso.
                    </p>
                    <div style={{position:'relative', width:'220px', height:'360px', flexShrink:0, marginTop:'170px', marginRight:'100px'}}>
                      {[
                        {src:primeraImg, color:'#7B58F8'},
                        {src:segundaImg, color:'#B0FF92'},
                        {src:terceraImg, color:'#4488ff'},
                        {src:cuartaImg, color:'#FF6B35'}
                      ].map((item, i) => (
                        <div key={i} style={{
                          position:'absolute',
                          top:0,
                          left:0,
                          width:'220px',
                          background:'rgba(255,255,255,0.04)',
                          border:`1px solid ${item.color}40`,
                          borderRadius:'12px',
                          overflow:'hidden',
                          boxShadow: colorStep === i ? `0 0 60px ${item.color}40, 0 0 120px ${item.color}20` : `0 0 20px ${item.color}15`,
                          opacity: colorStep === i ? 1 : 0,
                          transform: colorStep === i ? 'translateX(0) scale(1)' : 'translateX(20px) scale(0.97)',
                          filter: colorStep === i ? 'blur(0px) brightness(1)' : 'blur(4px) brightness(0.8)',
                          transition:'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}>
                          <img src={item.src} style={{width:'100%', display:'block'}}/>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{width:'calc(100% + 24px)', height:'1px', background:'rgba(255,255,255,0.1)', marginTop:'60px', marginLeft:'-24px', display:'block'}}/>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#B0FF92', lineHeight:1.8, marginTop:'60px', width:'80%'}}>
                    El MVP estuvo listo cuando...
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'16px', width:'80%'}}>
                    No cuando todas las funcionalidades existían. Sino cuando la promesa del producto<br/>ya podía cumplirse.
                  </p>
                  <div style={{display:'flex', flexDirection:'column', gap:'8px', marginTop:'60px', width:'80%'}}>
                    {['Nueva oportunidad', 'Pulse Check', 'Respuesta', 'Pipeline actualizado', 'Notificación', 'Visibilidad recuperada'].map((item, i) => (
                      <div key={i} style={{display:'flex', alignItems:'center', gap:'16px'}}>
                        <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#B0FF92', flexShrink:0, minWidth:'24px'}}>{String(i+1).padStart(2,'0')}</span>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.8)', margin:0}}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, marginTop:'40px', width:'80%'}}>
                    Cuando ese flujo funcionó de principio a fin, Beacon estaba listo para empezar.
                  </p>
                  <p ref={sec06Ref} style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7', marginTop:'40px', textAlign:'left', width:'80%'}}>
                    Flujo de trabajo con IA
                  </p>
                  <div data-hairline='true' style={{width:'calc(70% + 5.6px)', height:'2px', marginLeft:'-8px', background:'linear-gradient(to right, rgba(176,255,146,0.3), transparent)', marginTop:'12px'}}/>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'0', background:'rgba(255,255,255,0.05)', backdropFilter:'blur(10px)', boxShadow:'0 8px 32px rgba(0,0,0,0.3)', borderRadius:'12px', overflow:'hidden', marginTop:'40px', width:'90%', position:'relative', marginLeft:'20px'}}>
                    <div style={{position:'absolute', top:0, bottom:0, left:'33.3%', width:'1px', background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)'}}/>
                    <div style={{position:'absolute', top:0, bottom:0, left:'66.6%', width:'1px', background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)'}}/>
                    <div style={{position:'absolute', left:0, right:0, top:'55%', height:'1px', background:'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)'}}/>
                    {[
                      {label:'Descubrimiento', logos:[logoNotebooklm, logoClaude]},
                      {label:'Investigación', logos:[logoTally, logoGranola, logoChatgpt]},
                      {label:'Definición', logos:[logoClaude]},
                      {label:'Diseño', logos:[logoClaude, logoLovable]},
                      {label:'Desarrollo', logos:[logoClaude, logoGithub]},
                      {label:'Lanzamiento', logos:[logoVercel]}
                    ].map((item, i) => (
                      <div key={i} style={{background:'rgba(255,255,255,0.03)', padding:'16px', display:'flex', flexDirection:'column', gap:'12px'}}>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'14px', color:'#B0FF92', margin:0}}>{item.label}</p>
                        <div style={{display:'flex', gap:'8px', flexWrap:'wrap', alignItems:'center'}}>
                          {item.logos.map((src, j) => (
                            <img key={j} src={src} style={{height: (i === 1 && j === 2) ? '60px' : '20px', width:'auto', filter:'brightness(0) invert(1)', opacity:0.8}}/>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p ref={sec07Ref} style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7', marginTop:'120px', textAlign:'left', width:'80%'}}>
                    ¿Qué cambia con Beacon?
                  </p>
                  <div data-hairline='true' style={{width:'calc(70% + 5.6px)', height:'2px', marginLeft:'-8px', background:'linear-gradient(to right, rgba(176,255,146,0.3), transparent)', marginTop:'16px'}}/>
                  <div style={{
                    display:'grid',
                    gridTemplateColumns:'1fr 1fr',
                    gap:'0',
                    marginTop:'60px',
                    width:'90%',
                    position:'relative',
                    marginLeft:'20px'
                  }}>
                    <div style={{position:'absolute', top:0, bottom:0, left:'50%', width:'1px', marginLeft:'-0.5px', background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)'}}/>
                    <div style={{position:'absolute', left:0, right:0, top:'50%', height:'1px', marginTop:'-0.5px', background:'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)'}}/>
                    {[
                      {num:'13.3 h', label:'Recuperadas al mes por CAM.', desc:'Al automatizar el seguimiento y centralizar la visibilidad del pipeline.'},
                      {num:'1 clic', label:'Para conocer el estado de un deal.', desc:'En lugar de revisar múltiples herramientas y conversaciones.'},
                      {num:'0 cuentas', label:'Que el partner necesita crear.', desc:'Toda la interacción ocurre desde un email, reduciendo la fricción de adopción.'},
                      {num:'100 %', label:'De Pulse Checks contextualizados con IA.', desc:'Cada mensaje se adapta automáticamente al estado de la oportunidad.'}
                    ].map((item, i) => (
                      <div key={i} style={{padding:'32px', display:'flex', flexDirection:'column', gap:'8px'}}>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'48px', color:'#B0FF92', lineHeight:1, margin:0}}>{item.num}</p>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:600, fontSize:'16px', color:'#7B58F8', margin:0}}>{item.label}</p>
                        <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'14px', color:'rgba(255,255,255,0.5)', lineHeight:1.6, margin:0}}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'40px', width:'85%'}}>
                    Beacon no busca vender más.<br/><span style={{color:'#B0FF92'}}>Busca devolver el tiempo y la visibilidad que permiten vender mejor.</span>
                  </p>
                  <p ref={sec08Ref} style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', marginTop:'120px', lineHeight:1.2}}>
                    Beacon me enseñó que un buen producto no nace<br/>de tener más funcionalidades.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', marginTop:'8px', lineHeight:1.7}}>
                    Nace de eliminar las fricciones correctas.
                  </p>
                  <div style={{display:'flex', flexDirection:'column', gap:'24px', marginTop:'80px', width:'fit-content', minWidth:'300px', marginLeft:'auto', marginRight:'auto'}}>
                    {[
                      {num:'01', text:'Investigar bien\nevita construir de más.'},
                      {num:'02', text:'La IA acelera la ejecución.\n\nEl criterio sigue siendo humano.'},
                      {num:'03', text:'La parte más difícil no fue diseñar Beacon.\n\nFue decidir qué podía esperar a la siguiente versión.'}
                    ].map((item, i) => (
                      <div key={i} style={{position:'relative', paddingTop:'20px'}}>
                        <span style={{position:'absolute', top:'-10px', left:'16px', color:'#B0FF92', fontSize:'36px', fontWeight:700, fontFamily:"'Plus Jakarta Sans', sans-serif"}}>{item.num}</span>
                        <div style={{
                          padding:'24px',
                          background:'rgba(255,255,255,0.05)',
                          backdropFilter:'blur(10px)',
                          border:'1px solid rgba(255,255,255,0.15)',
                          borderRadius:'12px',
                          boxShadow:'0 8px 32px rgba(0,0,0,0.3)'
                        }}>
                          <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.8)', lineHeight:1.5, margin:0, whiteSpace:'pre-line', textAlign:'center'}}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{marginTop:'120px', paddingBottom:'80px', display:'flex', flexDirection:'column', alignItems:'center', gap:'24px'}}>
                    <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', textAlign:'center'}}>
                      Explora otros proyectos
                    </p>
                    <div
                      onClick={() => {
                        onClose()
                      }}
                      style={{
                        display:'inline-flex',
                        alignItems:'center',
                        cursor:'pointer',
                        border:'1px solid rgba(255,255,255,0.3)',
                        height:'36px',
                        padding:'0 16px',
                        gap:'8px',
                        transition:'all 0.3s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.7)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.3)'}
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M12 7H2M2 7L6 3M2 7L6 11" stroke="#F5F7F7" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'13px', fontWeight:400, color:'#F5F7F7'}}>Volver a proyectos</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {projectName === 'Theaveling' && (
            <>
              <p ref={sec01Ref} style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '48px',
                color: '#F5F2EE',
                marginTop: '32px',
                paddingLeft: '8px'
              }}>
                Descubre la escena artística alternativa de una ciudad.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'32px', width:'100%', paddingLeft:'8px', whiteSpace:'nowrap'}}>
                Viví la diferencia entre conocer una ciudad y<br/>conocer su escena.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                <span style={{color:'#F5F2EE', fontWeight:500}}>Theaveling empezó con una experiencia personal que abrió una pregunta.</span><br/><br/>
                Cuando viajé a Buenos Aires, empecé conociendo las experiencias artísticas de los circuitos más visibles. Mi deseo era descubrir algo diferente a lo que encontraba en Avenida Corrientes, el gran corredor teatral de Buenos Aires. Había una oferta enorme, <span style={{color:'#2ECCA6', fontWeight:150}}>pero no necesariamente el tipo de experiencia artística que llamaba mi atención.</span><br/><br/>
                En ese momento, mi desconocimiento hacía que dependiera de lo más conocido o fácil de encontrar. Al adentrarme en la ciudad, descubrí que había mucho más.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Cuando me quedé a vivir, fui conociendo la ciudad y también a personas que me llevaron a espacios independientes, <span style={{color:'#F5F2EE', fontWeight:500}}>teatro, danza, performance, música y otras propuestas culturales</span> <span style={{color:'#2ECCA6', fontWeight:150}}>que no habían aparecido en mis primeras búsquedas.</span><br/><br/>
                El acceso a esa escena llegó, en gran parte, a través de personas que ya sabían dónde mirar.<br/><br/>
                Ahí apareció una pregunta:
              </p>
              <p style={{
                fontFamily:"'Plus Jakarta Sans', sans-serif",
                fontWeight:500,
                fontSize:'18px',
                color:'#F5F2EE',
                lineHeight:1.7,
                marginTop:'32px',
                textAlign:'left',
                width:'80%',
                paddingLeft:'8px'
              }}>¿Qué hace difícil descubrir una experiencia artístico-cultural relevante cuando quieres encontrar algo diferente?</p>
              <p ref={sec02Ref} style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'88px', width:'80%', paddingLeft:'8px'}}>
                Esa experiencia fue el punto de partida.<br/>
                La investigación tenía que decirme qué había realmente detrás.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Hablé con personas interesadas en descubrir experiencias escénicas y culturales, que buscaban propuestas nuevas, diferentes o menos conocidas.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Quería entender qué hacían cuando no sabían dónde mirar.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Algunas exploraban por su cuenta, otras seguían recomendaciones o recurrían a personas dentro de la escena, y otras recorrían distintas fuentes online hasta encontrar algo que realmente les interesara.
              </p>
              <p ref={sec03Ref} style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'48px', width:'80%', paddingLeft:'8px'}}>
                <span style={{display:'inline-block', width:'4px', height:'22px', background:'#2ECCA6', borderRadius:'2px', marginRight:'10px', verticalAlign:'middle', position:'relative', top:'-6px'}}/><span style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7'}}>Lo que encontré</span>
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                La escena estaba ahí. Lo difícil era saber por dónde empezar a descubrirla.
              </p>
              <div ref={imageRef} style={{display:'flex', flexDirection:'row', gap:'40px', width:'92%', margin:'64px auto 24px auto', minHeight:'245px'}}>
                {theaCardLayers[theaCardsLayer].map((card, i) => (
                  <div key={i} style={{display:'flex', flexDirection:'column', flex:1}}>
                    <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', gap:'10px'}}>
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'17px', color:'rgba(255,255,255,0.85)', lineHeight:1.5, margin:0}}>
                        <span style={{color:'#2ECCA6'}}>{card.quote.charAt(0)}</span>{card.quote.slice(1, -1)}<span style={{color:'#2ECCA6'}}>{card.quote.slice(-1)}</span>
                      </p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', gap:'8px', marginTop:'12px', alignSelf:'flex-start'}}>
                      {card.photo && (
                        <img src={card.photo} alt={card.name} style={{width:'80px', height:'80px', borderRadius:'50%', objectFit:'cover', flexShrink:0}}/>
                      )}
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'13px', color:'rgba(255,255,255,0.4)', lineHeight:1.4, margin:0, textAlign:'left'}}>
                        — {card.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex', marginTop:'20px', width:'92%', margin:'20px auto 0 auto', justifyContent:'flex-end'}}>
                <CarouselDots count={theaCardLayers.length} activeIndex={theaCardsLayer} onChange={setTheaCardsLayer} color="#2ECCA6" />
              </div>
              <div style={{marginTop:'64px', width:'80%', paddingLeft:'8px', display:'flex'}}>
                <VerProductoBtn texto="Contexto de entrevistas" icon={notionIcon} href="https://app.notion.com/p/Entrevistas-Theaveling-1a5f6a9b19048048bc19e69f946917fe?source=copy_link" width="230px" hoverWidth="250px" />
              </div>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'56px', width:'80%', paddingLeft:'8px'}}>
                Tres cosas hacían especialmente difícil el descubrimiento:
              </p>
              <div style={{display:'flex', flexDirection:'column', gap:'20px', marginTop:'32px', width:'80%', paddingLeft:'48px'}}>
                {[
                  {num:'1', text:'La información está fragmentada.'},
                  {num:'2', text:'El conocimiento local abre puertas.'},
                  {num:'3', text:'Encontrar algo relevante cuesta tiempo.'}
                ].map((item, i) => (
                  <div key={i} style={{display:'flex', alignItems:'baseline', gap:'16px'}}>
                    <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'20px', color:'#2ECCA6', flexShrink:0, width:'20px'}}>{item.num}</span>
                    <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.85)', lineHeight:1.5, margin:0}}>{item.text}</p>
                  </div>
                ))}
              </div>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'40px', width:'80%', paddingLeft:'8px'}}>
                Pero había algo más.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'32px', width:'80%', paddingLeft:'8px'}}>
                Las personas no buscaban simplemente una actividad.<br/>Buscaban señales que les permitieran reconocer si aquello podía ser para ellas.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Descubrir no era solamente encontrar. Era saber qué valía la pena mirar.
              </p>
              <p ref={sec04Ref} style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'64px', width:'100%', paddingLeft:'8px', whiteSpace:'nowrap'}}>
                <span style={{display:'inline-block', width:'4px', height:'22px', background:'#2ECCA6', borderRadius:'2px', marginRight:'10px', verticalAlign:'middle', position:'relative', top:'-6px'}}/><span style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7'}}>De encontrar experiencias a diseñar el descubrimiento</span>
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Si la oferta ya existía, el reto no podía ser simplemente acumularla.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                El reto estaba en diseñar <span style={{color:'#2ECCA6'}}>cómo una persona llega hasta algo que todavía no conoce, pero que podría interesarle.</span>
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'40px', width:'80%', paddingLeft:'8px'}}>
                Ahí cambió el enfoque.
              </p>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight:500,
                fontSize:'18px',
                color:'#F5F2EE',
                lineHeight:1.7,
                marginTop:'32px',
                textAlign:'left',
                width:'80%',
                paddingLeft:'8px'
              }}>¿Cómo pasar de recopilar experiencias a crear una forma de descubrirlas?</p>
              <div style={{
                display:'flex',
                alignItems:'flex-start',
                gap:'8px',
                marginTop:'64px',
                marginBottom:'40px',
                justifyContent:'center',
                width: 'fit-content',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '16px',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                {[
                  { label:'Recopilar', icon: <Inbox size={32} color="#2ECCA6" strokeWidth={1.5}/> },
                  { label:'Curar', icon: <Filter size={32} color="#2ECCA6" strokeWidth={1.5}/> },
                  { label:'Descubrir', icon: <Compass size={32} color="#2ECCA6" strokeWidth={1.5}/> },
                  { label:'Reservar', icon: <Ticket size={32} color="#2ECCA6" strokeWidth={1.5}/> }
                ].map((item, i) => (
                  <React.Fragment key={i}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
                      {item.icon}
                      <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'20px', color:'#F5F2EE'}}>{item.label}</span>
                    </div>
                    {i < 3 && (
                      <svg width="40" height="16" viewBox="0 0 40 16" fill="none" style={{marginTop:'12px', flexShrink:0}}>
                        <line x1="0" y1="8" x2="34" y2="8" stroke="#F5F7F7" strokeWidth="3" strokeLinecap="round"/>
                        <polyline points="28 3 34 8 28 13" stroke="#F5F7F7" strokeWidth="3" strokeLinecap="round" fill="none"/>
                      </svg>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'0px', marginTop:'24px', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
                {[
                  { label:'Recopilar', desc:'La oferta cultural ya existe, pero está distribuida entre espacios, cuentas, plataformas y comunidades.' },
                  { label:'Curar', desc:'No todo necesita la misma visibilidad. Había que seleccionar y dar contexto.' },
                  { label:'Descubrir', desc:'La persona no necesariamente sabe qué está buscando. El producto tenía que ayudarle a reconocer algo que podía interesarle.' },
                  { label:'Reservar', desc:'El descubrimiento debía poder convertirse en una experiencia concreta.' }
                ].map((item, i) => (
                  <React.Fragment key={i}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:'8px', padding:'16px 0'}}>
                      <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'20px', color:'#2ECCA6'}}>{item.label}</span>
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'16px', color:'rgba(255,255,255,0.5)', lineHeight:1.6, margin:0, maxWidth:'480px'}}>{item.desc}</p>
                    </div>
                    {i < 3 && (
                      <span style={{color:'#2ECCA6', fontSize:'18px', lineHeight:1}}>↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'64px', width:'80%', paddingLeft:'8px'}}>
                Theaveling no necesitaba mostrarlo todo. Necesitaba diseñar una mejor forma de llegar a experiencias que podían ser relevantes para cada persona.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'40px', width:'80%', paddingLeft:'8px'}}>
                La investigación cambió la pregunta inicial.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'18px', color:'#F5F2EE', lineHeight:1.7, marginTop:'48px', width:'80%', paddingLeft:'8px'}}>
                Antes
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'16px', width:'80%', paddingLeft:'8px'}}>
                Theaveling partía de una idea más amplia de descubrimiento:
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'16px', width:'80%', paddingLeft:'8px'}}>
                ¿Cómo ayudar a las personas a encontrar y conectar con experiencias artísticas y culturales?
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'18px', color:'#F5F2EE', lineHeight:1.7, marginTop:'48px', width:'80%', paddingLeft:'8px'}}>
                Después
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                ¿Cómo ayudar a las personas a descubrir experiencias artísticas y culturales relevantes cuando todavía no conocen la escena ni saben por dónde empezar?
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:500, fontSize:'18px', color:'#F5F2EE', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Theaveling dejó de ser una plataforma centrada en encontrar experiencias y empezó a diseñar la forma en que una persona entra en una escena artística y cultural que todavía no conoce.
              </p>
              <div data-hairline='true' style={{width:'calc(100% + 8px)', height:'0.5px', marginTop:'64px', marginLeft:'-8px', backgroundColor:'rgba(255,255,255,0.12)'}}/>
              {/* 2026-10-08 (sexagésima tercera vuelta): `ref={sec05Ref}` se
               * saca de acá — este párrafo sigue siendo parte de
               * "Decisiones de producto", no el inicio real de "Diseño".
               * El ref se mueve al título con barrita menta al final del
               * bloque ("La interfaz tenía que sentirse..."), que Ana
               * confirmó que sí es donde empieza Diseño de verdad. */}
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'48px', width:'80%', paddingLeft:'8px'}}>
                No todo se descubre de la misma manera.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Organicé la experiencia alrededor de distintas puertas de entrada al descubrimiento, según lo que una persona puede querer explorar.
              </p>
              <div ref={sec06Ref} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'20px', width:'80%', margin:'110px auto 0 auto'}}>
                {[
                  {label:'TODO', items:['Curado por Theaveling', 'Más reservados', 'Más descubrimientos']},
                  {label:'ESCENA', items:['Teatro', 'Danza', 'Performance', 'Música']},
                  {label:'CULTURA', items:['Cine local', 'Cineclub', 'Charlas', 'Talleres', 'Festivales']}
                ].map((group, i) => (
                  <div key={i} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'6px'}}>
                    <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'14px', letterSpacing:'0.1em', color:'#F5F2EE', textAlign:'center'}}>{group.label}</span>
                    <span style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', gap:'8px', fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'17px', color:'rgba(255,255,255,0.5)', lineHeight:1.6, textAlign:'center'}}>
                      {group.items.map((term, j) => (
                        <React.Fragment key={j}>
                          {j > 0 && <Sparkle size={12} color="#2ECCA6" fill="#2ECCA6" strokeWidth={0}/>}
                          <span>{term}</span>
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'70px', width:'80%', paddingLeft:'8px'}}>
                <span style={{color:'#2ECCA6'}}>Cada entrada responde a una intención diferente:</span> dejarse guiar por una selección, explorar lo más reservado, encontrar nuevos descubrimientos o entrar directamente por una disciplina o tipo de propuesta.
              </p>
              <div style={{marginTop:'40px', width:'80%', paddingLeft:'8px', display:'flex'}}>
                <VerProductoBtn texto="Arquitectura" icon={notionIcon} href="https://app.notion.com/p/Sitemap-Theaveling-3eef6a9b19048009a898f668635ec529?source=copy_link" width="150px" hoverWidth="170px" />
              </div>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'40px', width:'80%', paddingLeft:'8px'}}>
                Llegar a este punto, también fue posible analizando si alguien más había encontrado esta oportunidad.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Entender primero cómo cambió el enfoque de Thea era necesario para saber por qué hacía algo tan diferente a todo lo que encontré en el mercado.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Las plataformas no daban el mismo valor a la oferta. Algunas agregaban, otras organizaban, otras transaccionaban y otras introducían un criterio editorial.
                <span style={{display:'block', marginTop:'16px'}}>Ahí encontré el espacio para Theaveling: no solo reunir experiencias, <span style={{color:'#2ECCA6'}}>sino decidir cómo hacerlas visibles y descubribles.</span></span>
              </p>
              <div style={{marginTop:'40px', width:'80%', paddingLeft:'8px', display:'flex'}}>
                <VerProductoBtn texto="Benchmark" icon={notionIcon} href="#" width="140px" hoverWidth="160px" />
              </div>
              <div data-hairline='true' style={{width:'calc(100% + 8px)', height:'0.5px', marginTop:'64px', marginLeft:'-8px', backgroundColor:'rgba(255,255,255,0.12)'}}/>
              <p ref={sec07Ref} style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'48px', width:'80%', paddingLeft:'8px'}}>
                Curar también es dar contexto.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Una experiencia no se vuelve relevante solo porque aparezca en la pantalla.<br/>
                Para decidir si algo puede interesarle, una persona necesita suficiente contexto para imaginar qué va a encontrar.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Por eso, curar no era solamente seleccionar experiencias.<br/>
                <span style={{color:'#2ECCA6'}}>También implicaba decidir qué información debía acompañarlas, qué lugar debía ocupar y cuánto contexto necesitaba cada propuesta para poder ser descubierta.</span>
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'18px', color:'#F5F2EE', lineHeight:1.7, marginTop:'48px', width:'80%', paddingLeft:'8px'}}>
                Las cards son el primer filtro.
              </p>
              <div ref={curarGalleryWrapRef} style={{position:'relative', width:'calc(100% + 8px)', marginLeft:'-8px', marginTop:'72px', display:'flex', alignItems:'flex-start', justifyContent:'center', gap:`${CURAR_GAP}px`, flexWrap:'wrap'}}>
                {curarCards.map((c, i) => (
                  <div key={i} style={{
                    display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', width:`${c.renderW}px`, flexShrink:0,
                    opacity: curarRevealed ? 1 : 0,
                    transform: curarRevealed ? 'translateY(0)' : 'translateY(32px)',
                    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.14}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.14}s`
                  }}>
                    {/* Alto fijo para la etiqueta (36px, cabe 1 o 2 líneas) con el
                        texto pegado abajo (alignItems:'flex-end') — así, sin
                        importar si el label de una card ocupa 1 línea o 2 (como
                        "Más descubrimientos"), la distancia hasta la imagen
                        siempre es la misma y el borde superior de las 3 cards
                        queda alineado. */}
                    <div style={{height:'36px', width:'100%', display:'flex', alignItems:'flex-end', justifyContent:'flex-start'}}>
                      <span style={{
                        display:'inline-flex', alignItems:'center', gap:'6px',
                        fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'13px', letterSpacing:'0.08em', color:'#F5F2EE', textTransform:'uppercase',
                        textAlign:'left'
                      }}>
                        <Sparkle size={12} color="#2ECCA6" fill="#2ECCA6" strokeWidth={0}/>{c.label}
                      </span>
                    </div>
                    <img src={c.src} style={{width:`${c.renderW}px`, height:`${c.renderH}px`, display:'block', borderRadius:'18px', boxShadow:'0 12px 32px rgba(0,0,0,0.35)'}}/>
                  </div>
                ))}
              </div>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'90px', width:'80%', paddingLeft:'8px'}}>
                No todas las experiencias se presentan desde la misma lógica. La card cambia según la razón por la que esa experiencia está siendo mostrada.
              </p>
              {/* 2026-10-08 (quincuagésima segunda vuelta), a pedido de Ana
               * ("por este texto 'Pero la card no podía contarlo todo.'
               * mejor encima de 'La card despierta el interés...'"): este
               * párrafo vivía más abajo, después del mockup (antes de "La
               * información debía acompañar la decisión..."). Se mueve
               * acá, justo antes de "La card despierta el interés...",
               * sin tocar su estilo. */}
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'32px', color:'rgba(255,255,255,0.5)', lineHeight:1.5, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Pero la card no podía contarlo todo.
              </p>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                La card despierta el interés. La experiencia necesita contexto para sostenerlo.
              </p>

              {/*
               * 2026-10-08, a pedido de Ana: mockup interactivo de la pantalla
               * de detalle real ("A Chorus Line: Historias Reales de
               * Bogotá"), para que quien lee el case pueda scrollear el
               * contexto que la card no alcanza a dar. `theaChorusLineScroll`
               * son 9 screenshots reales tomadas en vivo de
               * theaveling.vercel.app (vista mobile, 375x812) cosidas en una
               * sola tira continua — no es una pieza ilustrativa, es la app
               * real. El header y el botón "Ver opciones" de abajo SÍ son
               * reales (React, no parte de la imagen): en la app son
               * elementos sticky, así que se recortaron de cada captura (si
               * no, se habrían repetido varias veces al apilar las imágenes)
               * y se reconstruyen acá para que el scroll se sienta igual de
               * "vivo" que en la app — el header pasa de transparente a
               * sólido apenas se empieza a scrollear, igual que en el sitio
               * real.
               *
               * 2026-10-08 (segunda vuelta), a pedido de Ana: reemplaza el
               * mockup original de "Comité del Fracaso: Ensayo Abierto" por
               * este de "A Chorus Line" — mismo método de captura (9 scrolls
               * en vez de 8, mismos puntos de "relleno" a mitad de camino
               * entre cada par para no perder contenido que el header/CTA
               * sticky tapaban en cada captura individual).
               */}
              <style>{`.thea-chorusline-scroll::-webkit-scrollbar { display: none; }`}</style>
              <div style={{
                width:'calc(100% + 8px)', marginLeft:'-8px', marginTop:'72px', marginBottom:'24px',
                display:'flex', flexDirection:'column', alignItems:'center', gap:'18px'
              }}>
                {/*
                 * 2026-10-08 (segunda vuelta), a pedido de Ana: reemplaza el
                 * bisel dibujado en CSS por un marco de iPhone 15 real. Ana
                 * mandó un zip con mockups (de una herramienta que renderiza
                 * un logo subido dentro de un iPhone real — por eso
                 * `logo-portrait.png` traía el splash de Theaveling ya
                 * puesto). La imagen entera era opaca (sin ningún hueco
                 * transparente para la pantalla), así que no se podía usar
                 * directo como marco — se proceso aparte (Python/Pillow): se
                 * detectó el área de pantalla por color (el relleno era
                 * exactamente rgb(17,44,44), el verde real de Thea) y se puso
                 * en transparente, dejando el marco metálico, el notch y los
                 * botones intactos. Resultado: `thea-iphone-bezel.png`, un
                 * marco real con un hueco exacto para meter la pantalla.
                 *
                 * El hueco mide, sobre los 1419x2796px de la imagen original:
                 * x:[129,1288] y:[120,2619] — de ahí salen los % de inset de
                 * abajo. La pantalla scrolleable (`thea-chorusline-scroll`) va
                 * absolutamente posicionada DEBAJO de esa imagen, dentro de
                 * ese hueco exacto; el marco va ENCIMA con pointer-events:none
                 * (para no bloquear el scroll) y zIndex más alto que el
                 * header/CTA internos — así el notch real tapa el contenido
                 * igual que en un celular de verdad, sin tener que dibujar
                 * nada a mano.
                 *
                 * 2026-10-08 (octava vuelta), a pedido de Ana ("se ve que
                 * esta mal ubicado el contenido o agregarte mas marco"):
                 * tenía razón — cuando más tarde se le quitó la barrita del
                 * home indicator a la imagen (ver nota junto a
                 * `thea-iphone-bezel.png` más arriba), el hueco transparente
                 * real CRECIÓ (sobre todo abajo), pero estos % de inset se
                 * quedaron con la medida vieja. Medido de nuevo por
                 * componentes conectados (para no contar el borde
                 * transparente que rodea todo el recorte del celular, solo
                 * el hueco real de adentro): x:[127,1290] y:[118,2677]. Eso
                 * es lo que se usa abajo ahora — no era "mucho marco" del
                 * iPhone real, era este cálculo desactualizado dejando ~15px
                 * de hueco real sin aprovechar, sobre todo abajo.
                 */}
                {/* 2026-10-08 (tercera vuelta), a pedido de Ana: mockup más
                 * grande. 380px de ancho (antes 300px), manteniendo la
                 * proporción real de la imagen del marco (2796/1419) para
                 * que el notch/botones no se deformen — por eso la altura
                 * sube a 748px, no es un valor suelto. */}
                <div style={{ position:'relative', width:'380px', height:'748px', flexShrink:0 }}>
                  <div
                    className="thea-chorusline-scroll"
                    onScroll={(e) => setComiteHeaderSolid(e.currentTarget.scrollTop > 24)}
                    style={{
                      position:'absolute', left:'8.95%', right:'9.09%', top:'4.22%', bottom:'4.26%',
                      // 2026-10-08 (décima vuelta), a pedido de Ana ("ponerle
                      // bordes a lo que va abajo, se ve algo extraño"): el
                      // contenedor tenía esquinas cuadradas justo donde el
                      // vidrio real del celular es redondeado (más notorio
                      // abajo, en la zona del botón "Ver opciones", desde que
                      // el inset inferior se corrigió para llegar hasta el
                      // borde real). El radio de acá aproxima la curva real
                      // del hueco de pantalla para que no choque contra el
                      // bisel.
                      borderRadius:'26px', // bajado de 34px: Ana notó que se veía "ligeramente más ancha" que la curva real
                      overflowY:'auto', overflowX:'hidden', background:'#112c2c',
                      scrollbarWidth:'none', zIndex:1
                    }}
                  >
                    {/*
                     * 2026-10-08 (cuarta vuelta), a pedido de Ana: preguntó
                     * por qué esta franja se veía sólida en vez de
                     * transparente sobre la foto. El bug: `position:sticky`
                     * SÍ ocupa espacio en el flujo del documento (a
                     * diferencia de `fixed`/`absolute`) — entonces aunque el
                     * background estuviera en 'transparent', el header
                     * empujaba la foto hacia abajo, y lo que se veía detrás
                     * era el fondo propio del contenedor (#112c2c), no
                     * transparencia real.
                     *
                     * 2026-10-08 (decimoprimera vuelta) — el arreglo de
                     * entonces fue un `marginBottom` negativo en el propio
                     * header para que no empujara la foto. Resultó frágil:
                     * Ana reportó contenido duplicado/fantasma al scrollear
                     * (el header "pegado" dejaba una copia visual de sí
                     * mismo y de la foto en su posición original además de
                     * la posición sticky) — combinación conocida y poco
                     * confiable de `position:sticky` + margen negativo.
                     * Arreglo distinto, sin margen negativo: se envuelve el
                     * header en un contenedor de `height:0` (no ocupa
                     * espacio real, así que no empuja la foto) y el sticky
                     * vive ADENTRO de ese contenedor — sigue pegándose al
                     * scrollear porque sticky busca el ancestro con scroll
                     * (el contenedor de la pantalla), no su padre inmediato.
                     */}
                    {/* 2026-10-08 (vigésima sexta vuelta), a pedido de Ana
                     * ("necesito que cuando el scroll baje salga el resumen
                     * de pagina en el header como en el video"): probé y la
                     * barra sólida NUNCA aparecía al scrollear — ni título
                     * ni íconos, nada. Encontré la causa real con una
                     * réplica aislada (Playwright + esta misma imagen):
                     * el truco de arriba (envolver el sticky en un
                     * contenedor `height:0` para que no empuje la foto)
                     * rompe `position:sticky` del todo. El dato clave:
                     * `getBoundingClientRect()` del header, ya scrolleado,
                     * daba `y: -268px` — se estaba yendo de la pantalla en
                     * vez de quedarse pegado. La razón: un elemento sticky
                     * solo puede "pegarse" dentro de los límites de su
                     * propio contenedor directo (su "containing block"), NO
                     * del ancestro con scroll — si ese contenedor directo
                     * mide 0px de alto, no hay ningún rango donde pueda
                     * quedarse pegado, así que simplemente sigue scrolleando
                     * con todo lo demás. La nota de la vuelta anterior sobre
                     * "sticky busca el ancestro con scroll, no su padre
                     * inmediato" (arriba) está mal — sí importa el padre
                     * inmediato, y por eso nunca funcionó.
                     *
                     * Arreglo real: se saca el contenedor `height:0` del
                     * todo. El header ahora es un hijo normal del contenedor
                     * scrolleable (ocupa su alto real, ~47px) con
                     * `position:sticky, top:0` — patrón estándar de header
                     * sticky, sin trucos. Como ahora SÍ ocupa espacio real,
                     * ya no hace falta el div separado de 32px que empujaba
                     * la foto hacia abajo (ver nota vieja más abajo, ya no
                     * aplica) — el header mismo cumple ese rol. Y como ya no
                     * es un overlay transparente sobre la foto sino un
                     * bloque con su propio espacio, el fondo "sin scroll"
                     * pasa de `transparent` (que dejaba ver el verde
                     * #112c2c del contenedor, el parche que Ana reportó
                     * hace unas vueltas) a el mismo casi-negro
                     * (`#010101`) que ya usábamos para matchear el tope
                     * real de la foto. */}
                    {/* 2026-10-08 (vigésima octava vuelta), a pedido de Ana
                     * ("ya está saliendo el tema del resumen... necesitas
                     * echarlo un poquito más para abajo", con captura
                     * mostrando "9:41" superpuesto sobre "A Chorus Line"):
                     * ahora que este header sí se ve (vuelta 26/27), queda
                     * demasiado arriba — su caja empieza pegada al borde de
                     * arriba de `.thea-chorusline-scroll` (~31.6px del
                     * marco) y el texto queda centrado ahí mismo, justo
                     * donde cae la barra de estado (hora/señal/wifi/batería,
                     * `top:'42px'`, más abajo en este archivo) — se pisan.
                     * No se puede bajar el header completo con `top` (es
                     * `sticky`, ese valor define DÓNDE se pega al scrollear,
                     * no una posición fija — subirlo dejaría un hueco
                     * transparente arriba mientras se scrollea). En vez de
                     * eso se sube el padding de arriba (14px → 28px, el de
                     * abajo queda igual) — mueve el texto/íconos hacia abajo
                     * DENTRO de la misma caja, que sigue pegada arriba del
                     * todo (sigue tapando la barra de estado con su fondo),
                     * solo que ahora el contenido visual cae más abajo, ya
                     * libre de la hora. Como la caja ahora mide más alto, la
                     * foto de abajo también baja un poco más (bien, más
                     * margen todavía antes de que los íconos del cel la
                     * pisen). */}
                    {/* 2026-10-08 (vigésima novena vuelta), a pedido de Ana
                     * ("un poco mas abajo porfa"): no alcanzó con 28px de
                     * padding-top, se sube a 38px (mismo mecanismo que la
                     * vuelta anterior — el padding mueve el contenido
                     * adentro de la caja, no la caja en sí, que sigue
                     * pegada arriba del todo). */}
                    {/* 2026-10-08 (trigésima vuelta), a pedido de Ana ("un
                     * poco mas porfa"): todavía faltaba, sube de 38px a
                     * 46px. */}
                    {/* 2026-10-08 (trigésima primera vuelta), a pedido de
                     * Ana ("puedes bajarlo un poquito más"): sube de 46px a
                     * 54px. */}
                    {/* 2026-10-08 (trigésima tercera vuelta), a pedido de
                     * Ana ("súbela un poco más" — el header con back/share/
                     * corazón): baja de 54px a 46px, de vuelta hacia arriba
                     * un toque. */}
                    {/* 2026-10-08 (trigésima cuarta vuelta), a pedido de Ana
                     * ("mas"): confirma que la dirección era subir — baja de
                     * 46px a 38px. */}
                    {/* 2026-10-08 (trigésima quinta vuelta), a pedido de Ana
                     * ("mas"): sigue subiendo — baja de 38px a 30px. */}
                    {/* 2026-10-08 (trigésima sexta vuelta), a pedido de Ana
                     * ("un poquitico mas y ya estamos"): último ajuste,
                     * chiquito — baja de 30px a 26px. */}
                    {/* 2026-10-08 (trigésima séptima vuelta), a pedido de Ana
                     * ("el header de resumen tambien [debe ir en verde
                     * deep]"): el sólido al scrollear pasa de `#112c2c`
                     * (thea-green) a `rgb(1,20,20)` (thea-deep, el mismo
                     * verde-casi-negro que usa el botón de abajo — ver nota
                     * de la trigésima octava vuelta en ese botón). También
                     * sube el padding-bottom de 14px a 20px — más aire entre
                     * el texto del título y el borde de abajo del header. */}
                    {/* 2026-10-08 (cuadragésima vuelta), a pedido de Ana
                     * ("YO NO TE PEDI QUE HICIERAS LO DE LA REF, TE DIJE QUE
                     * LE DIERAS MAS ESPACIO POR DEBAJO, PERO NO TE DIJE SUBE
                     * EL TEXTO... hacer el contenedor un poquito mas grande
                     * y ya, con tal de que no se suba en los iconos"): las
                     * vueltas 33-36 (bajar el padding-top de 54px a 26px,
                     * "súbela"/"mas"/"mas") movieron el texto hacia arriba
                     * otra vez, hasta volver a montarse sobre la hora/iconos
                     * (mismo problema original de la vigésima séptima
                     * vuelta). El pedido de "más espacio debajo" (vuelta 37)
                     * nunca pedía mover el texto, solo agrandar el
                     * contenedor — mal interpretado al combinarlo con el
                     * padding-top ya reducido. Arreglo: padding-top vuelve a
                     * subir de 26px a 38px (el último valor sin solape
                     * conocido, antes de las vueltas 35-36), y padding-
                     * bottom sube de 20px a 24px — el contenedor crece hacia
                     * ABAJO únicamente, el texto no vuelve a subir hacia los
                     * iconos. */}
                    {/* 2026-10-08 (cuadragésima cuarta vuelta), a pedido de
                     * Ana ("el contenedor del header... está muy subido y
                     * no se nota tanto la diferencia entre iconos del
                     * celular y esa parte... bájalo un poquito, pero sin
                     * afectar nada más"): padding-top sube de 38px a 48px —
                     * más separación respecto a la barra de hora/señal/
                     * batería de arriba. Mismo mecanismo ya usado antes
                     * (cuadragésima vuelta): el padding mueve el contenido
                     * DENTRO de la caja, la caja sigue pegada arriba del
                     * todo, así que esto no puede volver a montarse sobre
                     * la hora (eso solo pasa si baja, no si sube). No se
                     * toca nada del botón de abajo (cuadragésima tercera
                     * vuelta), tal como pidió Ana. */}
                    {/* 2026-10-08 (cuadragésima quinta vuelta), a pedido de
                     * Ana ("la imagen está súper abajo, súper lejos de la
                     * iconografía del celular"): esto pasa en el estado
                     * INICIAL (scrollTop=0, antes de que el header se ponga
                     * sólido) — ahí no se ve texto/título (opacity 0), pero
                     * la CAJA del header sigue ocupando el mismo alto
                     * (padding-top + 18px + padding-bottom), empujando la
                     * foto hacia abajo igual que si el texto se viera. El
                     * padding-top (48px, vuelta 44) es el que da la
                     * separación respecto a la hora cuando SÍ se ve el
                     * título — eso se queda igual, no se toca. Lo que se
                     * reduce es el padding-bottom (24px→4px): ese espacio
                     * solo separaba el título de la foto de abajo, nadie
                     * pidió aire ahí, y bajarlo reduce el alto total de la
                     * caja (quedando incluso más bajo que el total de la
                     * vuelta 40 original: antes 38+18+24=80px, ahora
                     * 48+18+4=70px) — la foto sube más de lo que estaba
                     * incluso antes de la vuelta 44. */}
                    {/* 2026-10-08 (cuadragésima sexta vuelta), a pedido de
                     * Ana ("súbelo un poco más"): padding-bottom baja de
                     * 4px a 0px — ya es el mínimo posible en esta palanca
                     * (no puede bajar más sin tocar padding-top, que es el
                     * que separa de la hora y eso se queda fijo). */}
                    {/* 2026-10-08 (cuadragésima séptima vuelta), a pedido de
                     * Ana ("MAS"): el padding-bottom ya estaba en el piso
                     * (0px, vuelta 46) — para subir más no queda otra que
                     * tocar el padding-top (48px, el que separa del "9:41").
                     * Baja de 48px a 40px: sigue siendo más que el original
                     * de la vuelta 40 (38px), para no perder toda la
                     * separación que pidió, pero cede un poco de esa
                     * separación a cambio de subir la foto más. */}
                    {/* 2026-10-08 (cuadragésima octava vuelta), a pedido de
                     * Ana ("el header quedó sin contenedor, se ve como en
                     * el aire la letra"): efecto secundario real de dejar
                     * padding-bottom en 0 (vuelta 46) — sin nada de aire
                     * entre el texto/íconos y el borde de abajo, la caja
                     * oscura del header no se distingue de la foto oscura
                     * que viene justo debajo (se pegan, mismo tono), así
                     * que el texto se ve flotando sin caja propia en vez de
                     * dentro de una barra. Arreglo: padding-bottom sube de
                     * 0px a 8px — lo mínimo para que la caja se note como
                     * caja (ayuda también el borderBottom ya existente,
                     * que ahora sí tiene aire para leerse como borde y no
                     * como línea pegada contra el icono). Sigue siendo
                     * mucho menos que el 24px original — la foto no baja
                     * casi nada comparado con donde ya estaba. */}
                    {/* 2026-10-08 (cuadragésima novena vuelta), a pedido de
                     * Ana ("ya cubre la letra, pero diminuto, necesito que
                     * tenga más espacio abajo, sin que dañes nada más"):
                     * 8px ya se notaba como caja, pero muy apretado —
                     * padding-bottom sube de 8px a 14px. Nada más se toca
                     * (padding-top sigue en 40px, el botón de abajo sigue
                     * igual). */}
                    {/* 2026-10-08 (quincuagésima vuelta), a pedido de Ana
                     * ("dale un poco más de espacio, baja un poquito el
                     * texto, o haz el contenedor más grande por arriba, sin
                     * dañar nada más"): padding-top sube de 40px a 48px —
                     * vuelve al valor de la vuelta 44 (la separación que ya
                     * había funcionado bien respecto a la hora/señal/
                     * batería), cediendo la concesión que se había hecho en
                     * la vuelta 47 para subir la foto. Solo se toca este
                     * valor — padding-bottom se queda en 14px (vuelta 49),
                     * el botón de abajo no se toca. (Esto volvió a alejar
                     * la foto — ver nota de la quincuagésima primera vuelta,
                     * que corrige esto de raíz.) */}
                    {/* 2026-10-08 (quincuagésima primera vuelta) — arreglo de
                     * raíz, a pedido de Ana ("necesito hablar muy
                     * seriamente... otra vez volviste a dañar la foto"):
                     * desde la vuelta 44, padding-top venía siendo UN SOLO
                     * número usado para dos cosas distintas a la vez — (a)
                     * la separación entre el título y la hora cuando SÍ se
                     * ve el título (`comiteHeaderSolid`=true, scrolleado) y
                     * (b) cuánto empuja la foto hacia abajo en el estado
                     * INICIAL (`comiteHeaderSolid`=false, scrollTop=0,
                     * título invisible). Subir el número arreglaba (a) y
                     * rompía (b); bajarlo arreglaba (b) y rompía (a) — de
                     * ahí todo el ir y venir de las vueltas 44-50, siempre
                     * dando vueltas sobre el mismo número.
                     *
                     * Arreglo real: separar en DOS valores, uno por estado,
                     * usando el mismo booleano `comiteHeaderSolid` que ya
                     * controla el color de fondo. Sólido (scrolleado):
                     * 48px — la separación de la hora que ya se había
                     * validado (vuelta 44). Transparente (inicio, título
                     * invisible): 8px — ya no hay texto que separar de la
                     * hora en este estado, así que no hace falta nada de
                     * aire extra ahí; la foto arranca casi pegada al header,
                     * tan arriba como permite el diseño. padding-bottom se
                     * queda igual (14px, vuelta 49) en ambos estados — ese
                     * no tenía este problema. A partir de acá, subir la
                     * separación de la hora YA NO vuelve a alejar la foto,
                     * y viceversa — cada pedido futuro sobre uno de los dos
                     * no debería volver a afectar el otro. */}
                    <div style={{
                        position:'sticky', top:0, zIndex:2, display:'flex', alignItems:'center', gap:'12px',
                        padding: comiteHeaderSolid ? '48px 12px 14px' : '8px 12px 14px', height:'18px',
                        background: comiteHeaderSolid ? 'rgb(1, 20, 20)' : '#010101',
                        borderBottom: comiteHeaderSolid ? '1px solid rgba(251,251,251,0.08)' : '1px solid transparent',
                        transition:'background 0.25s ease, border-color 0.25s ease'
                      }}>
                        {/* 2026-10-08 (vigésima segunda vuelta), a pedido de
                         * Ana ("quita esos iconos que se supone que son de
                         * la foto, que estan literalmente ahi plasmados en
                         * la captura... quitalos el cora el share y la
                         * flecha"): se sacaron los 3 SVG (flecha atrás,
                         * compartir, corazón) — el razonamiento era correcto
                         * a MEDIAS: el primer screenshot (scrollY=0, el
                         * único que no se recorta por arriba) sí trae esos
                         * mismos 3 íconos reales flotando sobre la foto, así
                         * que mostrarlos ahí (arriba del todo, sin scroll)
                         * sí era un duplicado. Pero una vez que se scrollea,
                         * el sitio real los sigue mostrando junto al título
                         * (video que mandó Ana, "Theaveling... 10-25-35") —
                         * y ESA parte del contenido NO viene en ninguna
                         * captura (se recorta junto con el resto del header
                         * sticky de cada screenshot scrolleado, ver nota
                         * grande junto al `<style>` más arriba). Entonces no
                         * sobraban del todo: les faltaba el mismo fade que
                         * ya tenía el título (`opacity` atado a
                         * `comiteHeaderSolid`) en vez de estar siempre
                         * visibles. Vuelven con ese mismo fade — invisibles
                         * arriba (ahí sí los tapa la foto real) y aparecen
                         * junto con el título al scrollear, igual que en el
                         * video. */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                          style={{ opacity: comiteHeaderSolid ? 1 : 0, transition:'opacity 0.25s ease', flexShrink:0 }}>
                          <polyline points="15 18 9 12 15 6"/>
                        </svg>
                        <span style={{
                          fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:'13px', fontWeight:600, color:'#fbfbfb',
                          whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', flex:1,
                          opacity: comiteHeaderSolid ? 1 : 0, transition:'opacity 0.25s ease'
                        }}>A Chorus Line: Historias ...</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                          style={{ opacity: comiteHeaderSolid ? 1 : 0, transition:'opacity 0.25s ease', flexShrink:0 }}>
                          <circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><line x1="8.3" y1="10.6" x2="15.6" y2="6.6"/><line x1="8.3" y1="13.4" x2="15.6" y2="17.4"/>
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                          style={{ opacity: comiteHeaderSolid ? 1 : 0, transition:'opacity 0.25s ease', flexShrink:0 }}>
                          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                        </svg>
                      </div>

                    {/* 2026-10-08 (vigésima tercera a vigésima quinta
                     * vuelta), a pedido de Ana: estas vueltas agregaron un
                     * div separado de 32px antes de la imagen (con
                     * `background:'#010101'`, el casi-negro que matchea el
                     * tope real de la foto) para que la imagen no arrancara
                     * pisada por la barra de estado nativa. Ya NO hace falta
                     * — ver la nota grande junto al header más arriba
                     * (vigésima sexta vuelta): el header ahora es parte del
                     * flujo normal (dejó de estar envuelto en un contenedor
                     * `height:0`) y ocupa ese mismo espacio él solo, con ese
                     * mismo color de fondo. Un div aparte acá duplicaría el
                     * espaciado. */}
                    <img
                      src={theaChorusLineScroll}
                      alt="Scroll completo del detalle real de 'A Chorus Line: Historias Reales de Bogotá' en Theaveling"
                      style={{ width:'100%', display:'block' }}
                    />

                    {/* 2026-10-08 (séptima vuelta), a pedido de Ana: el botón
                     * más abajo — se bajó el padding inferior de 16px a 6px
                     * (menos aire entre el botón y el borde real de la
                     * pantalla). */}
                    {/* 2026-10-08 (decimosegunda vuelta): botón un poco más arriba (antes 6px de padding inferior, ahora 14px) */}
                    {/* 2026-10-08 (decimotercera vuelta): mismo cambio de
                     * color que el header de arriba — rgb(1,20,20) → #112c2c
                     * (verde real de la app), para que no se vea un parche
                     * de color distinto pegado contra el resto de la
                     * pantalla ("se ve como si el celular estuviera roto
                     * abajo", reportado por Ana con captura). */}
                    {/* 2026-10-08 (trigésima octava vuelta), a pedido de Ana
                     * ("el contenedor del boton debe ir en el verde deep"):
                     * se revierte el cambio de la decimotercera vuelta —
                     * vuelve de `#112c2c` a `rgb(1,20,20)` (thea-deep). */}
                    {/* 2026-10-08 (trigésima novena vuelta), a pedido de Ana,
                     * con captura de las esquinas inferiores ("se ve como
                     * quebrado el color plateado... se alcanza a ver un poco
                     * de contenido por debajo del contenedor del boton"):
                     * este contenedor es un rectángulo de esquinas cuadradas
                     * sticky al fondo de `.thea-chorusline-scroll`, que SÍ
                     * tiene esquinas redondeadas (`borderRadius:26px`) y
                     * recorta (`overflow`) lo que se sale de esa curva. Como
                     * las esquinas del contenedor son cuadradas, quedaba una
                     * rendija curva, justo en las esquinas inferiores, donde
                     * se alcanzaba a ver el verde base del contenedor
                     * scrolleable (`#112c2c`, más claro) en vez del thea-deep
                     * del botón — esa rendija de color distinto, justo donde
                     * debería verse sólido el bisel plateado de encima, es
                     * el "quebrado" que reportó Ana. Arreglo: se le pone el
                     * mismo radio (26px) a las esquinas inferiores del
                     * contenedor, para que su forma combine exacto con la
                     * curva que recorta — ya no sobra rendija. `bottom` baja
                     * de 0 a -4px (Ana: "bajandolo un poquito casi nada")
                     * para que el contenedor se pase un poco de más del
                     * borde real — de sobra, no de corto — y sea el propio
                     * recorte (`overflow` + el nuevo radio) el que define el
                     * borde limpio, no el valor exacto de `bottom`. */}
                    {/* 2026-10-08 (cuadragésima primera vuelta), a pedido de
                     * Ana ("podría subir un poquito el botón... ponle una
                     * rayita mínima en el borde superior... la rayita es
                     * así como la que le pusiste al contenedor del header"):
                     * dos cambios. (1) padding-top baja de 12px a 6px — sube
                     * el botón dentro del mismo contenedor, que sigue
                     * terminando en el mismo borde de abajo (sigue "viéndose
                     * en el contenedor", nada se sale). (2) se agrega
                     * borderTop con el mismo estilo que ya usa el header de
                     * arriba (back/título/compartir/corazón) cuando está
                     * sólido — `1px solid rgba(251,251,251,0.08)` — para
                     * marcar sutilmente dónde empieza este contenedor,
                     * mismo lenguaje visual que el resto del mockup. */}
                    {/* 2026-10-08 (cuadragésima segunda vuelta — CORREGIDA en
                     * la cuadragésima tercera, ver nota de abajo): este
                     * cambio (padding-top 6px→2px) estaba mal. Se deja
                     * tachado como registro: NO describe el código actual. */}
                    {/* 2026-10-08 (cuadragésima tercera vuelta), a pedido de
                     * Ana ("subelo"... "encima le redujiste el contenedor,
                     * no le reduzcas el contenedor... si quieres haz el
                     * contenedor un poquito más grande de abajo"): la vuelta
                     * 42 tocaba el padding equivocado. Este contenedor es
                     * `position:sticky; bottom:-4px` — una vez pegado abajo
                     * del todo (que es como Ana lo está viendo, scrolleado
                     * hasta el final), su borde de ABAJO es el que queda
                     * fijo, no el de arriba. Con el borde de abajo fijo, la
                     * posición del botón depende solo del padding-BOTTOM
                     * (distancia entre el botón y ese borde fijo) — el
                     * padding-top, una vez pegado, solo cambia dónde
                     * empieza la caja por ARRIBA (y por lo tanto el
                     * contenedor se hace más chico si se reduce, exactamente
                     * lo que Ana NO quería). Arreglo real: padding-top
                     * vuelve a 12px (el valor original, antes de tocar nada
                     * — ya no hace falta reducirlo, no era la palanca
                     * correcta) y padding-bottom sube de 14px a 30px — eso
                     * sí sube el botón de verdad (más distancia al borde
                     * fijo de abajo) Y agranda el contenedor hacia abajo,
                     * como pidió. */}
                    <div style={{
                        position:'sticky', bottom:'-4px', zIndex:2, padding:'12px 12px 30px',
                        background:'rgb(1, 20, 20)',
                        borderTop:'1px solid rgba(251,251,251,0.08)',
                        borderBottomLeftRadius:'26px', borderBottomRightRadius:'26px'
                      }}>
                      <div style={{
                        width:'100%', height:'40px', borderRadius:'12px', background:'#fbfbfb',
                        display:'flex', alignItems:'center', justifyContent:'center',
                        fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:600, fontSize:'13px', color:'#112c2c'
                      }}>
                        Ver opciones
                      </div>
                    </div>
                  </div>

                  {/*
                   * 2026-10-08 (quinta vuelta), a pedido de Ana: barra de
                   * estado inventada (hora + señal/wifi/batería), igual que
                   * la de cualquier iPhone — no es contenido real de
                   * Theaveling, es chrome del sistema operativo, por eso no
                   * sale de ninguna captura. Va fija en la misma fila que el
                   * notch (no vive dentro del contenedor que scrollea, así
                   * que nunca se mueve), con zIndex entre el contenido
                   * (header = 2) y el marco del celular (bisel = 5) para que
                   * el notch real siga tapándola en el centro, como en un
                   * iPhone de verdad.
                   *
                   * 2026-10-08 (sexta vuelta), a pedido de Ana: esta barra
                   * quedaba pegada contra el header de la app (back/título/
                   * compartir/corazón), así que los íconos se superponían.
                   * Se bajó esta barra a 34px (antes 28px, para que caiga
                   * DENTRO del hueco de pantalla real, no tapada por el
                   * bisel que empieza en 32px) y el header de la app (más
                   * abajo en este archivo) pasó de `top:0` a `top:'26px'`
                   * dentro de su contenedor — así quedan en dos filas
                   * separadas, igual que en la referencia que mandó Ana.
                   */}
                  {/*
                   * 2026-10-08 (decimotercera vuelta — YA NO APLICA, ver nota
                   * de la vigésima séptima vuelta más abajo): esta franja se
                   * agregó cuando el header de back/título/compartir/corazón
                   * era un overlay `height:0` sin fondo real (ver vuelta 22-
                   * 26) — en ese momento SÍ hacía falta un fondo externo
                   * independiente detrás de la barra de estado. Se deja el
                   * texto viejo tachado acá abajo solo como registro de por
                   * qué existía, no describe el código actual (el div ya no
                   * existe, ver abajo).
                   *
                   * 2026-10-08 (vigésima séptima vuelta), a pedido de Ana
                   * ("quita ese contenedor verde que sale ahí" + video +
                   * captura mostrando un bloque verde sólido tapando el
                   * header en vez del back/título/compartir/corazón): ESTA
                   * franja era justo ese bloque verde. Causa real,
                   * confirmada leyendo el stacking real del árbol (no
                   * adivinando): este div vive AFUERA de `.thea-chorusline-
                   * scroll` como hermano directo, con `zIndex:2`.
                   * `.thea-chorusline-scroll` es `position:absolute` con
                   * `zIndex:1` — al estar posicionado con z-index propio,
                   * CREA su propio contexto de apilamiento, así que el
                   * `zIndex:2` del header sticky que vive ADENTRO (vuelta 26)
                   * nunca compite directo con esta franja: compite el
                   * contenedor scrolleable COMPLETO (zIndex:1) contra esta
                   * franja (zIndex:2) — y pierde, entero, header incluido.
                   * Resultado: cuando `comiteHeaderSolid` se activa, esta
                   * franja (opaca, mismo verde #112c2c) se pinta ENCIMA de
                   * todo el contenedor scrolleable, tapando el header real
                   * que está debajo tratando de mostrar el título y los 3
                   * íconos — por eso se veía un bloque verde liso en vez del
                   * resumen. Ya no hace falta este div de todos modos: desde
                   * la vuelta 26 el header real vive DENTRO del contenedor
                   * scrolleable con su propio fondo (`#112c2c` sólido /
                   * `#010101` transparente-aparente, línea ~2441) — cumple
                   * el mismo rol de fondo para la barra de estado sin
                   * necesitar una franja externa duplicada. Se borra el div
                   * entero.
                   */}

                  <div style={{
                    // 2026-10-08 (décima vuelta): left/right subidos de
                    // 9.09%/9.23% a 11.5%/11.8% — cerca de esta altura (34px
                    // desde arriba) la curva de la esquina come más espacio
                    // que en el cuerpo de la pantalla, y el "9:41" se cortaba
                    // contra el bisel.
                    // 2026-10-08 (vigésima primera vuelta), a pedido de Ana
                    // ("tirame todo el bloque de iconos del celu hacia
                    // abajo, ojo que sigan alineaddos"): top sube de 34px a
                    // 42px — baja TODO el bloque (hora + íconos) junto, ya
                    // que ambos viven en esta misma fila flex con
                    // `alignItems:center`, así que se mueven parejo sin
                    // perder la alineación entre ellos. Sigue dentro de la
                    // franja de fondo del status bar (empieza ~31.6px, mide
                    // 58px → termina ~89.6px), con margen de sobra antes del
                    // header de la app más abajo.
                    position:'absolute', top:'42px', left:'11.5%', right:'11.8%', zIndex:4,
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                    pointerEvents:'none'
                  }}>
                    {/* 2026-10-08 (novena vuelta), a pedido de Ana: los
                     * íconos (1.4x) quedaron más grandes de lo necesario —
                     * se bajan a ~1.1x (entre el tamaño original, que era
                     * diminuto, y el 1.4x que resultó excesivo). */}
                    {/* 2026-10-08 (decimocuarta vuelta), a pedido de Ana
                     * ("pon mas chicos los iconos del celular"): bajan de
                     * nuevo, ~0.78x sobre la medida anterior (hora 15px→13px,
                     * señal/wifi/batería escaladas igual, mismo viewBox así
                     * que no se deforman, solo el `width`/`height` renderizado
                     * cambia) y el gap entre íconos de 5px a 4px para que
                     * sigan viéndose agrupados a la nueva escala. */}
                    {/* 2026-10-08 (decimoquinta vuelta), a pedido de Ana
                     * ("como sin tanta negrita"): la hora bajó de 600
                     * (semibold, el peso real de iOS) a 400 (regular) — a
                     * esta escala más chica el semibold se veía más pesado/
                     * negrita de lo que Ana quería acá. */}
                    {/* 2026-10-08 (decimosexta vuelta), a pedido de Ana
                     * ("corre la hora un poco mas hacia la derecha"):
                     * marginLeft para separarla del borde izquierdo sin
                     * mover el grupo de íconos de la derecha (siguen
                     * pegados al otro extremo por el `justifyContent:
                     * space-between` del contenedor). */}
                    {/* 2026-10-08 (decimoséptima vuelta), a pedido de Ana
                     * ("tiralo un poco mas"): marginLeft sube de 6px a
                     * 14px — mismo mecanismo de arriba, solo más separación. */}
                    {/* 2026-10-08 (decimoctava vuelta), a pedido de Ana
                     * ("MUCHO MAS"): marginLeft sube de 14px a 60px — salto
                     * grande, no otro ajuste chico. Sigue siendo seguro: el
                     * grupo de íconos de la derecha vive aparte (space-
                     * between) y el hueco entre los dos extremos del status
                     * bar es bastante más ancho que esto. */}
                    {/* 2026-10-08 (decimonovena vuelta), a pedido de Ana
                     * ("menos ahora"): 60px se pasó — baja a 30px, a medio
                     * camino entre el 14px de antes y el 60px que resultó
                     * excesivo. */}
                    {/* 2026-10-08, a pedido de Ana, con captura real de un
                     * iPhone ("PUEDES UTILIZAR UNA COMO ESTA? CREO QUE ES
                     * MAS DE IPHONE"): el stack anterior (-apple-system,
                     * BlinkMacSystemFont, 'SF Pro Text') SÍ es San Francisco
                     * real, pero solo en Mac/iOS/Safari — ahí el navegador
                     * ya trae esa fuente instalada. En Windows (donde Ana
                     * estaba probando) ninguno de esos nombres existe, así
                     * que caía al último de la lista (`sans-serif` ≈ Arial/
                     * Segoe UI), que se ve genérico y no como la referencia.
                     * San Francisco no se puede traer de Google Fonts (es
                     * de Apple, de uso restringido a sus propias
                     * plataformas) — se usa Inter en su lugar (ver nota en
                     * index.html), diseñada con métricas muy cercanas a SF
                     * Pro, y SÍ se ve igual en cualquier sistema operativo
                     * porque se descarga con la página. También sube el
                     * peso de 400 a 600 (semibold) — en la foto de
                     * referencia la hora se ve bastante más gruesa que un
                     * weight regular. */}
                    {/* 2026-10-08 (trigésima segunda vuelta), a pedido de
                     * Ana ("un poquito, pero casi nada, más chica"): fontSize
                     * baja de 13px a 12px — ajuste mínimo, no otro salto
                     * grande. */}
                    <span style={{
                      fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                      fontWeight:600, fontSize:'12px', color:'#fbfbfb', letterSpacing:'0.02em',
                      marginLeft:'30px'
                    }}>
                      9:41
                    </span>
                    {/* 2026-10-08 (vigésima vuelta), a pedido de Ana ("ahora
                     * tira los iconos del celu del lado derecho en bloque
                     * hacia la izq un poco"): marginRight en el grupo
                     * completo (señal+wifi+batería), mismo mecanismo que la
                     * hora pero del otro lado — los separa un poco del
                     * borde derecho sin tocar el gap entre ellos ni la
                     * posición de la hora. */}
                    <div style={{ display:'flex', alignItems:'center', gap:'4px', marginRight:'20px' }}>
                      {/* señal */}
                      <svg width="14" height="9" viewBox="0 0 16 11" fill="#fbfbfb">
                        <rect x="0" y="7" width="3" height="4" rx="0.5"/>
                        <rect x="4.5" y="5" width="3" height="6" rx="0.5"/>
                        <rect x="9" y="3" width="3" height="8" rx="0.5"/>
                        <rect x="13" y="0" width="3" height="11" rx="0.5"/>
                      </svg>
                      {/* wifi */}
                      <svg width="12" height="9" viewBox="0 0 14 11" fill="none" stroke="#fbfbfb" strokeWidth="1.3" strokeLinecap="round">
                        <path d="M1 4.2a8.5 8.5 0 0 1 12 0"/>
                        <path d="M3.3 6.7a5 5 0 0 1 7.4 0"/>
                        <path d="M5.6 9.1a1.7 1.7 0 0 1 2.8 0"/>
                      </svg>
                      {/* batería */}
                      <svg width="20" height="9" viewBox="0 0 23 11" fill="none">
                        <rect x="0.75" y="0.75" width="19.5" height="9.5" rx="2.5" stroke="#fbfbfb" strokeOpacity="0.4" strokeWidth="1"/>
                        <rect x="2.25" y="2.25" width="16.5" height="6.5" rx="1.3" fill="#fbfbfb"/>
                        <rect x="21.2" y="3.3" width="1.4" height="4.4" rx="0.7" fill="#fbfbfb" fillOpacity="0.4"/>
                      </svg>
                    </div>
                  </div>

                  <img
                    src={theaIphoneBezel}
                    alt=""
                    aria-hidden="true"
                    style={{
                      position:'absolute', inset:0, width:'100%', height:'100%',
                      pointerEvents:'none', zIndex:5,
                      filter:'drop-shadow(0 26px 56px rgba(0,0,0,0.5))'
                    }}
                  />
                </div>
                {/* 2026-10-08, a pedido de Ana ("quita este texto"): se
                 * quita el caption "↕ Capturas reales de theaveling.vercel.app
                 * — se puede scrollear" que iba debajo del mockup. */}
              </div>

              {/* 2026-10-08 (quincuagésima segunda vuelta), a pedido de Ana:
               * se quita el párrafo "Si algo despertaba interés... La
               * experiencia necesitaba contexto." que iba acá — ya no hace
               * falta, "Pero la card no podía contarlo todo." (que decía
               * algo parecido) se movió más arriba, antes del mockup. */}
              {/* 2026-10-08 (quincuagésima tercera vuelta), a pedido de Ana
               * ("esto en mint"): la segunda frase de este párrafo ("El
               * objetivo era...") se envuelve en un <span> con el mismo
               * verde menta (#2ECCA6) que ya se usa en otros acentos de
               * esta sección. */}
              {/* 2026-10-08 (quincuagésima cuarta vuelta), a pedido de Ana
               * ("separalo un poco hacia abajo"): marginTop sube de 24px a
               * 56px — más aire respecto al mockup justo encima. */}
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'56px', width:'80%', paddingLeft:'8px'}}>
                La información debía acompañar la decisión sin convertir la experiencia en una ficha interminable. <span style={{color:'#2ECCA6'}}>El objetivo era que una persona pudiera entender qué iba a encontrar, reconocer si conectaba con sus intereses y decidir si quería avanzar.</span>
              </p>
              {/* 2026-10-08 (quincuagésima sexta vuelta), a pedido de Ana
               * ("¿quién te dijo que esa monda iba ahí? Es abajo de todo lo
               * que llevamos"): la vuelta 55 había puesto esto justo
               * después de las tarjetas de Curar — mal, iba acá, al final
               * de todo el bloque (después del mockup y sus párrafos). Se
               * mueve para acá, mismo hairline + frase en menta, sin
               * cambiar el estilo. */}
              <div data-hairline='true' style={{width:'calc(100% + 8px)', height:'0.5px', marginTop:'64px', marginLeft:'-8px', backgroundColor:'rgba(255,255,255,0.12)'}}/>
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'48px', width:'80%', paddingLeft:'8px'}}>
                Descubrir tenía que llevar a algún lugar.
              </p>
              {/* 2026-10-08 (quincuagésima séptima vuelta), a pedido de Ana:
               * cierre del bloque de Descubrir — párrafo nuevo seguido de
               * la secuencia del flujo completo (Descubrir → conocer →
               * decidir → reservar). */}
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                El descubrimiento no terminaba cuando una experiencia llamaba la atención.<br/>
                Tenía que existir un camino claro entre encontrar algo interesante, entenderlo y convertir ese interés en una acción concreta.
              </p>
              {/* 2026-10-08 (quincuagésima octava vuelta), a pedido de Ana
               * ("esto ponlo normal y solo las flechas en mint"): se quita
               * negrita/tamaño grande/menta del texto completo — queda con
               * el mismo estilo de párrafo normal que el resto (fontWeight
               * 150, gris), y solo las 3 flechas (→) van en menta, cada una
               * en su propio <span>. */}
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'32px', width:'80%', paddingLeft:'8px'}}>
                Descubrir <span style={{color:'#2ECCA6'}}>→</span> conocer <span style={{color:'#2ECCA6'}}>→</span> decidir <span style={{color:'#2ECCA6'}}>→</span> reservar
              </p>
              {/* 2026-10-08 (quincuagésima novena vuelta), a pedido de Ana
               * ("abajo un boton de notion que diga userflow"): mismo
               * componente y estilo que el botón "Benchmark" de más arriba
               * (línea ~2230), solo cambia el texto. */}
              <div style={{marginTop:'40px', width:'80%', paddingLeft:'8px', display:'flex'}}>
                <VerProductoBtn texto="Userflow" icon={notionIcon} href="#" width="140px" hoverWidth="160px" />
              </div>
              {/* 2026-10-08 (sexagésima vuelta), a pedido de Ana ("con
               * barrita mint"): mismo patrón que los títulos de sección de
               * más arriba (p.ej. "Lo que encontré", línea ~2032) — la
               * barrita vertical menta (4px × 22px) seguida del texto en
               * Satoshi 30px. */}
              {/* 2026-10-08 (sexagésima tercera vuelta), a pedido de Ana
               * ("con ese texto de la barrita empieza el contenido de
               * diseño, para que lo tengas en cuenta en la barra de
               * contenido"): se le pone `ref={sec05Ref}` — es el índice 3
               * en `sectionRefs`/`sectionLabels`, que corresponde a
               * "Diseño". Antes `sec05Ref` apuntaba a un párrafo que
               * todavía era de "Decisiones de producto" (ver nota de
               * arriba). `sectionHighlightCap` sube de 3 a 4 para que la
               * barra de contenido ya resalte "Diseño" al llegar acá. */}
              <p ref={sec05Ref} style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'64px', width:'80%', paddingLeft:'8px'}}>
                <span style={{display:'inline-block', width:'4px', height:'22px', background:'#2ECCA6', borderRadius:'2px', marginRight:'10px', verticalAlign:'middle', position:'relative', top:'-6px'}}/><span style={{fontFamily:"'Satoshi', sans-serif", fontWeight:500, fontSize:'30px', color:'#F5F7F7'}}>La interfaz tenía que sentirse como la escena que estaba intentando descubrir.</span>
              </p>
              {/* 2026-10-08 (sexagésima primera vuelta), a pedido de Ana:
               * párrafo normal debajo del título con barrita. */}
              {/* 2026-10-08 (sexagésima segunda vuelta), a pedido de Ana
               * ("esto en mint"): el cierre de la frase se envuelve en
               * <span> menta, mismo mecanismo usado en otros acentos de
               * esta página. */}
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                El lenguaje visual de Theaveling debía alejarse de la lógica de catálogo turístico y transmitir una escena cultural más <span style={{color:'#2ECCA6'}}>independiente, contemporánea y editorial.</span>
              </p>
              {/* 2026-10-08 (sexagésima cuarta vuelta), a pedido de Ana:
               * "abajo de todo eso y solo en resaltado". Mismo patrón que
               * "La card despierta el interés..." (color:'#2ECCA6' entero,
               * sin la barrita ni el tamaño grande de los títulos). */}
              <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:150, fontSize:'18px', color:'#2ECCA6', lineHeight:1.7, marginTop:'24px', width:'80%', paddingLeft:'8px'}}>
                Una identidad que no compitiera con las experiencias.
              </p>
              {/* 2026-10-08 (sexagésima octava vuelta), a pedido de Ana
               * ("quita la img primro"): saca el moodboard de acá -- no
               * terminó de convencerle. Va a mandar las piezas por
               * separado para armar algo nuevo. El import y el archivo
               * (thea-moodboard.webp) se dejan en assets por si se
               * reusa, pero no se renderizan más. */}
              {/* 2026-10-08 (septuagésima vuelta), a pedido de Ana ("mas
               * grande y bajalo mas"): sube de 280px a 420px, y se le
               * agrega separación respecto al párrafo anterior
               * (marginTop 0 -> 64px) para bajarla. Sigue pegada al
               * borde izquierdo real (marginLeft:'-8px'). */}
              <img src={theaCortinaIzq} style={{width:'420px', marginTop:'64px', marginLeft:'-8px', display:'block'}}/>
            </>
          )}
        </div>
      </div>
      {dotPressed && (
        <div style={{position:'fixed', top:'5%', left:'2%', width:'58vw', height:'90vh', zIndex:999999, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none'}}>
          {[pipelineImg, notificacionesImg, pulsecheckImg].map((src, i) => (
            <div key={i} style={{
              position:'absolute',
              width:'90%',
              height:'90%',
              borderRadius:'24px',
              overflow:'hidden',
              opacity: slideIndex === i ? 1 : 0,
              transform: slideIndex === i ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.95)',
              filter: slideIndex === i ? 'blur(0px)' : 'blur(4px)',
              transition:'opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease'
            }}>
              <img src={src} style={{width:'100%', height:'100%', objectFit:'contain'}}/>
            </div>
          ))}
        </div>
      )}
      <div ref={rightPanelRef} style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: closing ? `${(1 - closeProgress) * 40}vw` : '100vw',
        height: '100vh',
        background: '#F5F2EE',
        zIndex: 9999,
        transition: 'none',
        visibility: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }}>
          {sectionLabels.map((item, i) => (
            <div key={i} style={{display:'flex', alignItems:'center', gap:'8px', padding:'6px 0'}}>
              <div style={{overflow:'hidden'}}>
                <div style={{width: activeSection === i ? '2px' : '1px', height:'20px', background: activeSection === i ? '#1A1A1A' : 'rgba(26,26,26,0.3)', transform: showRightContent ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'}}/>
              </div>
              <div style={{overflow:'hidden'}}>
                <p style={{
                  fontFamily:"'Plus Jakarta Sans', sans-serif",
                  fontSize:'14px',
                  fontWeight: activeSection === i ? 700 : 300,
                  color:'#1A1A1A',
                  cursor:'pointer',
                  letterSpacing:'0.05em',
                  transform: closing ? 'translateY(-100%)' : showRightContent ? 'translateY(0)' : 'translateY(-100%)',
                  transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 60}ms`
                }} onClick={() => {setActiveSection(i); scrollToSection(i)}}>{item}</p>
              </div>
            </div>
          ))}
        </div>
        {/* HISTORIAL DEL BUG DE LA "G" (para no repetir el error): el intento
            anterior aquí deslizaba el título ENTERO (translateY(-100%) ->
            translateY(0), un recorrido de 90px, el alto completo de la
            letra) atravesando una ventana de recorte (overflow:hidden) que
            se quedaba FIJA en su sitio. El razonamiento de "apagar el
            recorte cuando la transición ya terminó" (titleSettled) parecía
            lógico pero atacaba el síntoma equivocado: el problema NUNCA fue
            CUÁNDO se apagaba el recorte, sino que una caja de texto
            deslizándose hacia abajo A TRAVÉS de una ventana fija SIEMPRE
            muestra primero el BORDE INFERIOR de esa caja (donde vive la
            colita de la "g") — es pura geometría: cuando la caja está casi
            toda arriba de la ventana, lo único que alcanza a asomar dentro
            de la ventana es su punta de abajo. Por eso el gancho de la "g"
            aparecía solo, flotando, ANTES que el resto de la palabra, sin
            importar qué tan bien calibrado estuviera el timing del recorte.
            SOLUCIÓN ACTUAL: en vez de deslizar 90px completos a través de
            un recorte, el título ahora aparece con un fundido (opacity 0 ->
            1) combinado con un desplazamiento chiquito (14px, no 90px). Con
            opacity:0 durante el tramo en que todavía no llegó a su lugar,
            no hay NADA que ver — ni la "g" ni ninguna otra letra parcial —
            así que no hace falta ningún overflow:hidden ni calcular alturas
            a ojo. Cuando el fundido termina de subir a opacity:1, el título
            ya casi terminó su recorrido de 14px, así que se ve la palabra
            completa asentándose suavemente en su lugar, nunca una letra
            sola apareciendo antes que las demás. */}
        <div style={{ position: 'relative' }}>
          <p style={{
            position: 'absolute',
            top: '0',
            left: '20px',
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: '90px',
            color: '#1A1A1A',
            lineHeight: 1,
            transform: closing ? 'translateY(-14px)' : showRightContent ? 'translateY(0)' : 'translateY(-14px)',
            opacity: closing ? (1 - closeProgress) : showRightContent ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease'
          }}>
            {projectName}
          </p>
        </div>
        <div style={{
          position: 'absolute',
          top: '120px',
          left: '20px',
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
          {(projectName === 'Beacon' ?
            ['Channel Sales', 'B2B', 'Pipeline', 'Partners', 'Visibilidad'] :
            ['Arte', 'Teatro', 'Viaje', 'Cultura', 'Conexión humana']
          ).map((tag, i) => (
            <div key={i} style={{overflow:'hidden'}}>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                color: '#1A1A1A',
                lineHeight: 1.2,
                overflow: 'hidden',
                transform: closing ? 'translateY(-100%)' : showRightContent ? 'translateY(0)' : 'translateY(-100%)',
                transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 60}ms`
              }}>
                ✳ {tag}
              </p>
            </div>
          ))}
        </div>
        {projectName === 'Beacon' && (
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '20px'
          }}>
            {[
              {text:'Completado', size:'12px', weight:300, color:'#888'},
              {text:'Product Designer', size:'14px', weight:600, color:'#1A1A1A'},
              {text:'3 meses · 2026', size:'13px', weight:300, color:'#1A1A1A'}
            ].map((item, i) => (
              <div key={i} style={{overflow:'hidden'}}>
                <p style={{
                  fontFamily:"'Plus Jakarta Sans', sans-serif",
                  fontSize: item.size,
                  fontWeight: item.weight,
                  color: item.color,
                  marginBottom: i < 2 ? '4px' : '0',
                  transform: closing ? 'translateY(-100%)' : showRightContent ? 'translateY(0)' : 'translateY(-100%)',
                  transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 60}ms`
                }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}
        {showRightContent && (
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: 'auto',
            right: '20px',
            opacity: closing ? 0 : showRightContent ? 1 : 0,
            transform: closing ? 'translateY(20px)' : 'translateY(0)',
            transition: 'opacity 0.4s ease, transform 0.4s ease'
          }}>
            <VerProductoBtn texto="Ver producto" />
          </div>
        )}
      </div>
      {progress >= 1 && (
        <div
          onClick={() => {
            setClosing(true)
            let start = null
            const duration = 800
            const animate = (timestamp) => {
              if (!start) start = timestamp
              const elapsed = timestamp - start
              const p = Math.min(1, elapsed / duration)
              setCloseProgress(p)
              if (p < 1) requestAnimationFrame(animate)
              else {
                setClosing(false)
                onClose()
              }
            }
            requestAnimationFrame(animate)
          }}
          style={{
            position: 'fixed',
            top: '24px',
            right: '24px',
            width: '36px',
            height: '36px',
            border: '1px solid #1A1A1A',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10000,
            background: '#F5F2EE'
          }}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      )}
    </>
  )
}

export default function Home() {
  const [activeLink, setActiveLink] = React.useState('Intro')
  const [projectTransition, setProjectTransition] = React.useState(null)
  const [scrolled, setScrolled] = React.useState(false)
  const [brRounded, setBrRounded] = React.useState(false)
  const [proyectosVisible, setProyectosVisible] = React.useState(false)
  const [misVisible, setMisVisible] = React.useState(false)
  const [misRounded, setMisRounded] = React.useState(true)
  const [notesDisintegrating, setNotesDisintegrating] = React.useState(false)
  const [phase, setPhase] = React.useState('notes')
  const [zoomProgress, setZoomProgress] = React.useState(0)
  const [projectsText, setProjectsText] = React.useState('')
  const [showCards, setShowCards] = React.useState(false)
  // Cuando se entra a "Sobre mí" directo desde el nav (sin pasar por
  // Proyectos primero), las cards deben aparecer YA COLOCADAS, sin la
  // animación normal de "colocación" (que es la transición de 0.6-0.8s en
  // opacity/transform de cada tarjeta/nombre/subtítulo de abajo) — así el
  // panel de Sobre mí puede subir de una, sin esperar esa secuencia. Este
  // flag, mientras está en true, apaga esas transiciones puntuales (pone
  // transition:'none') para ESE cambio de estado únicamente; se prende y
  // apaga en el mismo click, así que no afecta ningún otro camino (scroll
  // normal o click directo en "Proyectos"), que siguen viendo la animación
  // de siempre.
  const [skipProjectsEntranceAnim, setSkipProjectsEntranceAnim] = React.useState(false)
  // Igual que arriba, pero para el panel de Sobre mí: cuando se entra
  // directo desde Intro, el panel queda arriba de una (detrás del
  // blackout, sin animar la subida) para que no se alcance a ver el flash
  // de Proyectos. El problema es que eso hace que, apenas se destapa el
  // blackout, todo el contenido (tirilla + foto + bio) ya esté ahí de
  // golpe — se siente agresivo/seco. aboutContentSoftEnter arranca en
  // true (contenido invisible/corrido un poco hacia abajo) apenas se arma
  // todo detrás del blackout, y pasa a false justo cuando el blackout
  // empieza a destaparse, disparando un fade-in suave de 0.5s. Solo se usa
  // en ese camino puntual; en cualquier otro (scroll normal, o entrar a
  // Sobre mí ya estando en Proyectos) el contenido se ve siempre a opacity
  // 1 sin este efecto.
  const [aboutContentSoftEnter, setAboutContentSoftEnter] = React.useState(false)
  const [showSubtitle, setShowSubtitle] = React.useState(false)
  const [showBeaconCard, setShowBeaconCard] = React.useState(false)
  const [showTheaCard, setShowTheaCard] = React.useState(false)
  const [showBeaconInfo, setShowBeaconInfo] = React.useState(false)
  const [showTheaInfo, setShowTheaInfo] = React.useState(false)
  const [showBeaconName, setShowBeaconName] = React.useState(false)
  const [showTheaName, setShowTheaName] = React.useState(false)
  const [showBeaconT, setShowBeaconT] = React.useState(false)
  const [showTheaT, setShowTheaT] = React.useState(false)
  const [cursorPos, setCursorPos] = React.useState(null)
  const [beaconHovered, setBeaconHovered] = React.useState(false)
  const [theaHovered, setTheaHovered] = React.useState(false)
  const [beaconTyping, setBeaconTyping] = React.useState('')
  const [theaTyping, setTheaTyping] = React.useState('')
  const [aboutPhase, setAboutPhase] = React.useState(null)
  const [aboutProgress, setAboutProgress] = React.useState(0)
  const [splashPhase, setSplashPhase] = React.useState('visible')
  const [collageIndex, setCollageIndex] = React.useState(0)
  // Blackout reutilizable para saltos directos Intro <-> Proyectos por nav
  // (mismo look del splash inicial: panel negro + favicon). null = no se
  // ve; 'enter-start'/'enter' = se cierra (cubre pantalla); 'exit' = se
  // corta hacia arriba y revela lo nuevo, ya cambiado por debajo.
  const [navBlackout, setNavBlackout] = React.useState(null)
  const beaconIntervalRef = React.useRef(null)
  const theaIntervalRef = React.useRef(null)
  const notesCompleteRef = React.useRef(false)
  const zoomProgressRef = React.useRef(0)
  const rafRef = React.useRef(null)
  const rewindRef = React.useRef(null)
  const proyectosRef = React.useRef(null)
  const notesRef = React.useRef(null)
  const endCursorRef = React.useRef(null)
  const projectsTypedRef = React.useRef(false)
  const typingIntervalRef = React.useRef(null)
  const wheelLockRef = React.useRef(false)
  const showBeaconCardRef = React.useRef(false)
  const showBeaconTRef = React.useRef(false)
  const showTheaTRef = React.useRef(false)
  const projectTransitionRef = React.useRef(null)
  const aboutPhaseRef = React.useRef(null)
  const aboutProgressRef = React.useRef(0)
  const projectsOverlayRef = React.useRef(null)
  const [tickerOffset, setTickerOffset] = React.useState(0)
  const tickerOffsetRef = React.useRef(0)
  const tickerActiveUntilRef = React.useRef(0)
  const tickerVelocityRef = React.useRef(0)
  const aboutPanelRef = React.useRef(null)
  // Token de la animación automática que hace subir el panel de Sobre mí
  // cuando se clickea "Sobre mí" estando ya en Proyectos (ver más abajo,
  // animateAbout). Es un simple contador: cada vez que arranca esa
  // animación guarda su propio número acá y lo compara en cada frame antes
  // de seguir — si alguien más lo cambió mientras tanto (por ejemplo, un
  // scroll real del usuario en handleWheel), esta animación vieja se corta
  // sola en vez de seguir empujando aboutProgress para siempre por encima
  // de lo que el usuario está intentando hacer con la rueda/trackpad.
  const aboutAutoAnimTokenRef = React.useRef(0)
  // Div de la tirilla ("> sobre-mi.md > sobre-mi.md ...") arriba del todo
  // del panel de Sobre mí. Se usa para detectar cuándo sale de la vista por
  // scroll (ver el efecto de navReadyToShow, más abajo).
  const tickerRowRef = React.useRef(null)
  const collageVideoRefs = React.useRef({})
  // El collage empieza a "tirarse" (foto por foto) recién cuando la persona
  // sale del primer bloque de foto+texto haciendo scroll, no desde que entra
  // a Sobre mí. collageStartSentinelRef es un div invisible justo al final
  // de ese bloque; en cuanto entra en el área visible del scroll interno
  // (ver el IntersectionObserver más abajo), se prende collageStarted UNA
  // sola vez y ahí arranca el timer de 1.9s por foto (ver el efecto que
  // avanza collageIndex). No toca nada de la tirilla ni del peel: solo
  // decide CUÁNDO empieza a correr ese timer.
  const collageStartSentinelRef = React.useRef(null)
  const [collageStarted, setCollageStarted] = React.useState(false)
  // El nav de arriba (Intro/Proyectos/Sobre mí/Conectemos) se pone POR
  // ENCIMA del panel negro de Sobre mí (z-index más alto) para poder seguir
  // usándolo mientras se lee el contenido — pero ese nav tiene fondo
  // semitransparente con blur (backdrop-filter), y como queda encima de un
  // contenido que se está scrolleando de verdad (scroll nativo), el
  // navegador tiene que recalcular ese blur en cada frame de scroll. Eso es
  // caro y es justo lo que hacía sentir pesado/no fluido el scroll dentro
  // de Sobre mí si el nav aparece en medio de un scroll activo.
  // Historial de intentos: (1) aparecía apenas el panel terminaba de subir
  // (aboutProgress>=1) — o sea, en el momento de más scroll activo posible:
  // sentía fricción. (2) atado a que la tirilla saliera de vista por
  // scroll, sin espera extra: la aparición de la nav justo ahí, en medio
  // del gesto, también se sentía como un golpe. (3) un timer fijo de 5s
  // desde que se entra al panel, sin mirar el scroll para nada: funcionaba
  // pero a Ana le resultó demasiado tiempo esperando sin nav. Ahora (4):
  // híbrido de (2) — cuando la tirilla sale de la vista por scroll, más un
  // segundo extra de margen (ver el efecto más abajo) para que no coincida
  // con el instante exacto del gesto de scroll. Mientras no le toca
  // aparecer, queda con z-index bajo — tapada por el panel negro (opaco),
  // invisible, pero sin el costo del blur encima del scroll.
  const [navReadyToShow, setNavReadyToShow] = React.useState(false)
  // Sonido de los videos del collage de "Sobre mí": por defecto CON sonido
  // (arrancan solos como parte de la secuencia del collage), pero con un
  // icono propio ahí mismo para que quien esté viendo la página lo pueda
  // silenciar si quiere. collageMutedRef existe para que el efecto que
  // reproduce/pausa los videos (más abajo) siempre lea el valor más
  // reciente sin tener que estar en las dependencias de ese efecto.
  const [collageMuted, setCollageMuted] = React.useState(false)
  const collageMutedRef = React.useRef(false)
  React.useEffect(() => { collageMutedRef.current = collageMuted }, [collageMuted])
  // "Conectemos": el panel negro de Sobre mí se destapa hacia arriba (como si
  // se lo estuvieran quitando de encima) para revelar Conectemos, que está
  // fijo debajo. 0 = tapado del todo (solo se ve Sobre mí). 1 = revelado del
  // todo. Al pasar cierto umbral haciendo scroll hacia abajo, se "suelta" y
  // termina de destaparse solo con una animación, sin necesitar más scroll.
  const [conectemosProgress, setConectemosProgress] = React.useState(0)
  const conectemosProgressRef = React.useRef(0)
  const conectemosAutoRef = React.useRef(false)
  const [emailCopied, setEmailCopied] = React.useState(false)

  React.useEffect(() => {
    // El favicon NO es hijo del panel negro: es un elemento aparte, fijo en
    // el centro de la pantalla, que no se mueve. El panel negro se corta
    // hacia arriba (translateY -100%) en 1.6s; el favicon se disuelve lento
    // (opacidad + blur, 0.8s), arrancando al mismo momento que el corte —
    // así termina de disolverse justo cuando el borde del corte llega al
    // centro de la pantalla (donde el favicon está, mitad del recorrido).
    const t1 = setTimeout(() => setSplashPhase('closing'), 700)
    const t2 = setTimeout(() => setSplashPhase('done'), 2300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  React.useEffect(() => {
    // Collage automático de "Sobre mí": las fotos avanzan solas cada 1.9s;
    // los videos (al final) avanzan cuando terminan de reproducirse (ver
    // onEnded más abajo), no por temporizador. Al llegar al final da toda
    // la vuelta (loop) y arranca de nuevo desde la primera foto. El timer
    // no arranca hasta collageStarted (ver el IntersectionObserver del
    // sentinel, más abajo) — o sea, hasta que la persona sale del primer
    // bloque de foto+texto haciendo scroll.
    if (aboutPhase !== 'ticker' || !collageStarted) return
    const current = collageMedia[collageIndex]
    if (!current || current.type !== 'image') return
    const id = setTimeout(() => {
      setCollageIndex(prev => (prev + 1) % collageMedia.length)
    }, 1900)
    return () => clearTimeout(id)
  }, [aboutPhase, collageIndex, collageStarted])

  React.useEffect(() => {
    // Prende collageStarted (una sola vez, no se vuelve a apagar) cuando el
    // sentinel al final del bloque de foto+texto queda TOTALMENTE arriba
    // del área visible del panel — o sea, cuando ese bloque ya salió por
    // completo de la vista haciendo scroll hacia abajo.
    // Ojo: probé primero con IntersectionObserver (isIntersecting con
    // threshold 0), pero ese bloque de foto+texto mide menos que un alto de
    // pantalla, así que el sentinel ya estaba visible desde el arranque
    // (scrollTop 0) y el collage se disparaba de una, sin que hubiera
    // scrolleado nada. Por eso acá se compara a mano, en cada scroll real
    // del panel, la posición del sentinel contra el borde de arriba del
    // panel (getBoundingClientRect, medido en vivo): solo cuando el
    // sentinel ya quedó completamente por encima de ese borde (sRect.bottom
    // <= pRect.top) se considera "salió del bloque".
    if (aboutPhase !== 'ticker') return
    const sentinel = collageStartSentinelRef.current
    const panel = aboutPanelRef.current
    if (!sentinel || !panel) return
    const checkScroll = () => {
      const sRect = sentinel.getBoundingClientRect()
      const pRect = panel.getBoundingClientRect()
      if (sRect.bottom <= pRect.top + 1) {
        setCollageStarted(true)
        panel.removeEventListener('scroll', checkScroll)
      }
    }
    panel.addEventListener('scroll', checkScroll, { passive: true })
    return () => panel.removeEventListener('scroll', checkScroll)
  }, [aboutPhase])

  React.useEffect(() => {
    // Ver el comentario de navReadyToShow más arriba (intento 4). Se
    // resetea (nav vuelve a quedar tapada) si se sale de "ticker" o si el
    // panel deja de estar del todo arriba (aboutProgress < 1).
    if (aboutPhase !== 'ticker' || aboutProgress < 1) {
      setNavReadyToShow(false)
      return
    }
    const panel = aboutPanelRef.current
    const tickerEl = tickerRowRef.current
    if (!panel || !tickerEl) return
    let showTimeoutId = null
    const clearShowTimeout = () => {
      if (showTimeoutId) {
        clearTimeout(showTimeoutId)
        showTimeoutId = null
      }
    }
    const checkScroll = () => {
      const tRect = tickerEl.getBoundingClientRect()
      const pRect = panel.getBoundingClientRect()
      const tickerOutOfView = tRect.bottom <= pRect.top + 1
      if (tickerOutOfView) {
        // Ya salió de la vista por scroll: si todavía no había arrancado
        // el segundo extra de margen, arranca ahora.
        if (!showTimeoutId) {
          showTimeoutId = setTimeout(() => setNavReadyToShow(true), 1000)
        }
      } else {
        // Volvió a verse (se scrolleó de nuevo hacia arriba, hacia la
        // tirilla): se cancela la espera y la nav vuelve a taparse.
        clearShowTimeout()
        setNavReadyToShow(false)
      }
    }
    checkScroll()
    panel.addEventListener('scroll', checkScroll, { passive: true })
    return () => {
      panel.removeEventListener('scroll', checkScroll)
      clearShowTimeout()
    }
  }, [aboutPhase, aboutProgress >= 1])

  React.useEffect(() => {
    // Reproduce/pausa los videos del collage SOLO cuando collageIndex cambia
    // de verdad (no en cada re-render). El ref de cada <video> ahora es
    // estable (solo guarda el elemento), así que este efecto no se dispara
    // por el loop de la tirilla, que re-renderiza el componente en cada
    // frame mientras aboutPhase === 'ticker'.
    Object.entries(collageVideoRefs.current).forEach(([idxStr, el]) => {
      if (!el) return
      const idx = Number(idxStr)
      if (idx === collageIndex) {
        if (el.paused) {
          el.currentTime = 0
          // Los videos del collage arrancan CON sonido por defecto (salvo
          // que la persona haya tocado el icono de silenciar, ahí mismo en
          // el collage — collageMutedRef guarda esa preferencia). Si el
          // navegador bloquea el autoplay con sonido (porque todavía no
          // hubo ningún click/tap en la página), cae a mute solo para que
          // el video no se quede "tostado" en el primer cuadro para
          // siempre — pero eso no cambia el icono ni la preferencia: en
          // cuanto haya un gesto en la página, el próximo video de la
          // secuencia sí va a sonar.
          el.muted = collageMutedRef.current
          el.play().catch(() => {
            el.muted = true
            el.play().catch(() => {})
          })
        }
      } else if (!el.paused) {
        el.pause()
      }
    })
  }, [collageIndex])

  React.useEffect(() => {
    if (aboutPhase !== 'ticker') return
    let rafId
    let lastTime = performance.now()
    const TICKER_SPEED = 1.25 // velocidad mientras hay scroll activo (antes 2.5, la mitad, para que se lea con más calma)
    // Al soltar el scroll, la tirilla no frena en seco: sigue deslizando un
    // ratito más, perdiendo impulso. Antes esa pérdida de impulso era
    // "lineal" (bajaba parejo, a ritmo constante) — ahora es una curva tipo
    // "algo que rueda y se va quedando sin fuerza": pierde velocidad rápido
    // al principio y cada vez más despacio hacia el final, en vez de un
    // frenado mecánico parejo. TICKER_HALF_LIFE es cada cuántos segundos le
    // queda la mitad de la velocidad que tenía — con 0.075s, a los ~0.3-0.4s
    // de soltar el scroll ya casi no le queda impulso (mismo "tiempito
    // extra" de antes, pero con esa sensación más suave/redondeada).
    const TICKER_HALF_LIFE = 0.075
    const loop = (now) => {
      const dt = now - lastTime
      lastTime = now
      // Antes acá también se exigía aboutProgressRef.current < 1 — o sea,
      // la tirilla solo podía estar "activa" mientras el panel todavía
      // estaba subiendo. En cuanto llegaba a 1 (panel arriba del todo),
      // esta condición se volvía imposible para siempre, sin importar que
      // la persona siguiera scrolleando de largo — por eso se sentía que
      // la tirilla igual paraba ahí, aunque ya no se la cortara en seco a
      // mano. Ahora "activo" depende solo de que haya habido un scroll de
      // verdad hace poquito (tickerActiveUntilRef, que se refresca en CADA
      // wheel mientras se está en Sobre mí, sea que el panel siga subiendo
      // o ya esté arriba del todo) — así que mientras se siga scrolleando,
      // sigue andando normal, y solo decae cuando de verdad se suelta.
      const active = aboutProgressRef.current > 0 && now < tickerActiveUntilRef.current
      if (active) {
        tickerVelocityRef.current = TICKER_SPEED
      } else if (tickerVelocityRef.current > 0.001) {
        tickerVelocityRef.current *= Math.pow(0.5, dt / (TICKER_HALF_LIFE * 1000))
      } else {
        tickerVelocityRef.current = 0
      }
      if (tickerVelocityRef.current > 0) {
        tickerOffsetRef.current = (((tickerOffsetRef.current + tickerVelocityRef.current * dt / 1000) % 50) + 50) % 50
        setTickerOffset(tickerOffsetRef.current)
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [aboutPhase])

  // handleWheel se registra en window solo cuando cambia `phase` (ver el
  // efecto de más abajo, dependencia [phase]) — por eso lee estas banderas
  // desde refs en vez de desde el estado directamente: si leyera el estado,
  // quedaría con los valores "congelados" de cuando `phase` cambió por
  // última vez, y nunca vería showBeaconT/showTheaT/aboutPhase actualizarse
  // más tarde (por eso la animación de "Sobre mí" nunca se activaba).
  React.useEffect(() => { showBeaconCardRef.current = showBeaconCard }, [showBeaconCard])
  React.useEffect(() => { showBeaconTRef.current = showBeaconT }, [showBeaconT])
  React.useEffect(() => { showTheaTRef.current = showTheaT }, [showTheaT])
  React.useEffect(() => { aboutPhaseRef.current = aboutPhase }, [aboutPhase])
  // El case study (Beacon/Theaveling) es un overlay que se monta ENCIMA de
  // Proyectos sin cambiar `phase` (sigue en 'projects' por debajo). El
  // wheel handler global de acá abajo no sabía nada de esto, así que
  // mientras el panel del case study estaba abierto, cada scroll dentro de
  // él (para leer el contenido) también le llegaba a este handler, que lo
  // evaluaba con la lógica de Proyectos (atBottom/atTop de
  // projectsOverlayRef) — a veces caía en una rama que hacía
  // preventDefault() y se robaba el scroll (para abrir "Sobre mí" o cerrar
  // Proyectos), y a veces no. Eso es justo el "a veces funciona, a veces se
  // queda medio pegado": dependía de en qué scroll estaba la grilla de
  // Proyectos que quedó tapada debajo, no de nada del case study en sí.
  React.useEffect(() => { projectTransitionRef.current = projectTransition }, [projectTransition])

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBrRounded(prev => !prev)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProyectosVisible(false)
          setMisVisible(false)
          setTimeout(() => setProyectosVisible(true), 300)
          setTimeout(() => setMisVisible(true), 800)
        }
      },
      { threshold: 0.3 }
    )
    if (proyectosRef.current) observer.observe(proyectosRef.current)
    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (!misVisible) return
    const interval = setInterval(() => {
      setMisRounded(prev => !prev)
    }, 1500)
    return () => clearInterval(interval)
  }, [misVisible])

  // (Antes había acá un IntersectionObserver de "scroll-spy" que vigilaba
  // #intro/#proyectos/#sobre-mi/#contacto para resaltar el link activo según
  // scroll real. Como el body tiene overflow:hidden (todo el movimiento acá
  // es simulado con transform/opacity, no scroll real) y solo #intro existe
  // en el DOM, ese observer terminaba siendo un forzador silencioso de
  // "Intro" como link activo — podía pisar el link correcto (p.ej. después
  // de saltar directo a "Sobre mí" o "Proyectos" desde el nav) sin ningún
  // aviso. Se quitó porque la navegación por click ya deja el link activo
  // correcto en cada caso.

  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  React.useEffect(() => {
    if (phase === 'projects') {
      // Si venimos de un salto directo a "Sobre mí" o "Conectemos" (que
      // también dejan `phase` en 'projects' por debajo, para tener las
      // cards armadas), no pisar el link activo que ya dejaron puesto.
      if (!aboutPhaseRef.current) setActiveLink('Proyectos')
    } else if (phase === 'notes' || phase === 'zooming') {
      setActiveLink('Intro')
    }
  }, [phase])

  // Blackout reutilizable (mismo look del splash de entrada) para saltar
  // directo entre Intro y Proyectos por click de nav, sin el zoom
  // tradicional: cierra (cubre toda la pantalla), cambia lo que hay debajo
  // ya tapado, y se corta hacia arriba para revelarlo.
  const runBlackoutNav = (applyFn) => {
    setNavBlackout('enter-start')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setNavBlackout('enter'))
    })
    setTimeout(() => {
      applyFn()
      setNavBlackout('exit')
      setTimeout(() => setNavBlackout(null), 750)
    }, 550)
  }

  // Cierra "Sobre mí" deslizando el panel hacia abajo (igual que hacer
  // scroll hacia arriba estando en la parte de arriba del panel), pero
  // disparado por click de nav en vez de por wheel — así entra a Proyectos
  // (que ya está debajo) con una transición suave, sin blackout.
  const animateAboutOut = () => {
    let last = performance.now()
    const step = (now) => {
      const dt = Math.max(1, now - last)
      last = now
      aboutProgressRef.current = Math.max(0, aboutProgressRef.current - 0.8 * dt / 1000)
      setAboutProgress(aboutProgressRef.current)
      if (aboutProgressRef.current > 0) {
        requestAnimationFrame(step)
      } else {
        aboutPhaseRef.current = null
        setAboutPhase(null)
        tickerOffsetRef.current = 0
        setTickerOffset(0)
        setActiveLink('Proyectos')
      }
    }
    requestAnimationFrame(step)
  }

  // Una vez que el "destape" de Conectemos pasa cierto punto haciendo scroll,
  // se suelta: ya no depende del scroll, termina de destaparse solo con un
  // ease-out, como si cayera por su propio peso.
  const runConectemosAutoReveal = (from) => {
    conectemosAutoRef.current = true
    const start = performance.now()
    const DURATION = 280
    const step = (now) => {
      const t = Math.min(1, (now - start) / DURATION)
      const eased = 1 - Math.pow(1 - t, 3)
      const val = from + (1 - from) * eased
      conectemosProgressRef.current = val
      setConectemosProgress(val)
      if (t < 1) {
        requestAnimationFrame(step)
      } else {
        conectemosAutoRef.current = false
        setActiveLink('Conectemos')
      }
    }
    requestAnimationFrame(step)
  }

  // Copia el correo al portapapeles (con fallback por si el navegador no
  // soporta la Clipboard API, por ejemplo en http o navegadores viejos).
  const copyEmail = () => {
    const text = 'anserrarg@gmail.com'
    const showCopied = () => {
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 1500)
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showCopied).catch(() => {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        try { document.execCommand('copy') } catch (err) {}
        document.body.removeChild(ta)
        showCopied()
      })
    } else {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch (err) {}
      document.body.removeChild(ta)
      showCopied()
    }
  }

  const typeProjectsText = () => {
    if (typingIntervalRef.current) {
      clearTimeout(typingIntervalRef.current)
      typingIntervalRef.current = null
    }
    let i = 0
    const text = '> Projects/'
    const interval = setInterval(() => {
      if (i < text.length) {
        setProjectsText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        typingIntervalRef.current = null
        setTimeout(() => setShowSubtitle(true), 300)
        setTimeout(() => setShowCards(true), 500)
        setTimeout(() => setShowBeaconCard(true), 1500)
        setTimeout(() => setShowTheaCard(true), 1800)
        setTimeout(() => setShowBeaconName(true), 2400)
        setTimeout(() => setShowTheaName(true), 2700)
        setTimeout(() => setShowBeaconT(true), 3100)
        setTimeout(() => setShowTheaT(true), 3400)
        setTimeout(() => setShowBeaconInfo(true), 1100)
        setTimeout(() => setShowTheaInfo(true), 1400)
      }
    }, 70)
    typingIntervalRef.current = interval
  }

  React.useEffect(() => {
    const handleWheel = (e) => {
      // Con el case study abierto (Beacon/Theaveling), el scroll es del
      // panel propio del case study (overflowY:'auto' nativo) — nada de lo
      // de acá abajo (Proyectos, "Sobre mí", etc.) le corresponde. Antes
      // este handler seguía corriendo igual por debajo y a veces se
      // robaba el evento; ahora se deja pasar de largo.
      if (projectTransitionRef.current) return
      if (aboutPhaseRef.current === 'ticker') {
        // Cualquier scroll real acá invalida la animación automática de
        // "subida" del panel (la que arranca al clickear Sobre mí estando
        // ya en Proyectos) — ver aboutAutoAnimTokenRef. Así el gesto de la
        // persona siempre manda y esa animación nunca sigue empujando
        // aboutProgress por su cuenta mientras se está scrolleando de
        // verdad.
        aboutAutoAnimTokenRef.current++
        // Cualquier wheel de verdad acá cuenta como "scroll activo" para la
        // tirilla (ver el loop de arriba y su comentario) — antes esto solo
        // se refrescaba mientras el panel estaba subiendo; ahora también
        // pasa con el panel ya arriba del todo, scrolleando el contenido,
        // para que la tirilla no se sienta "parar" apenas se llega arriba
        // si la persona sigue scrolleando de largo.
        tickerActiveUntilRef.current = performance.now() + 250
        const fullyRevealed = aboutProgressRef.current >= 1
        if (fullyRevealed) {
          const panelEl = aboutPanelRef.current
          const atTop = !panelEl || panelEl.scrollTop <= 4
          const atBottom = !panelEl || (panelEl.scrollHeight - panelEl.scrollTop - panelEl.clientHeight <= 4)

          // Subiendo desde el top del scroll interno, sin Conectemos destapado:
          // vuelve a Proyectos (comportamiento ya existente).
          if (e.deltaY < 0 && atTop && conectemosProgressRef.current <= 0) {
            e.preventDefault()
            const next = Math.max(0, aboutProgressRef.current + e.deltaY / 1800)
            aboutProgressRef.current = next
            setAboutProgress(next)
            if (next <= 0) {
              setAboutPhase(null)
              tickerOffsetRef.current = 0
              setTickerOffset(0)
              setActiveLink('Proyectos')
            }
            return
          }

          // Volviendo de Conectemos hacia Sobre mí (scroll hacia arriba con
          // el panel ya destapado, o a medio destapar).
          if (e.deltaY < 0 && conectemosProgressRef.current > 0 && !conectemosAutoRef.current) {
            e.preventDefault()
            const next = Math.max(0, conectemosProgressRef.current + e.deltaY / 900)
            conectemosProgressRef.current = next
            setConectemosProgress(next)
            if (next <= 0) setActiveLink('Sobre mí')
            return
          }

          // Al llegar al fondo del scroll interno de Sobre mí y seguir
          // bajando: el panel negro se empieza a destapar hacia arriba,
          // "pegado" al scroll 1 a 1 (nada de animación propia todavía, se
          // mueve exactamente lo que se scrollea). Recién casi al final —
          // pasado el 92%— se suelta y termina de destaparse solo con un
          // empujoncito corto (ver runConectemosAutoReveal). Antes el umbral
          // era muy bajo (0.4) y por eso se sentía que el panel se separaba
          // de golpe en vez de sentirse pegado al scroll.
          if (e.deltaY > 0 && atBottom && !conectemosAutoRef.current && conectemosProgressRef.current < 1) {
            e.preventDefault()
            const next = Math.min(1, conectemosProgressRef.current + e.deltaY / 900)
            conectemosProgressRef.current = next
            setConectemosProgress(next)
            if (next >= 0.92) {
              runConectemosAutoReveal(next)
            }
            return
          }

          if (conectemosAutoRef.current || conectemosProgressRef.current > 0) {
            e.preventDefault()
            return
          }

          // Scroll normal dentro del contenido del panel (ni en el borde de
          // arriba para volver a Proyectos, ni en el de abajo para pasar a
          // Conectemos). Antes acá se hacía `return` sin preventDefault,
          // dejando que el scroll nativo del navegador moviera el panel
          // solo (gracias a su overflowY:'auto'). El problema: ese
          // overflow:'auto' depende de un re-render de React después de que
          // `aboutProgress` (estado) llegue a 1 — pero esta rama ya se
          // decide con `fullyRevealed`, que lee la REF (aboutProgressRef),
          // que se actualiza al instante. Si llegaban varios eventos de
          // wheel seguidos muy rápido (scroll fuerte, con inercia) antes de
          // que el navegador alcanzara a pintar ese cambio, el DOM todavía
          // tenía overflow:'hidden' en ese momento y el navegador no tenía
          // nada que scrollear: el evento se perdía entero. Eso es
          // exactamente la sensación de que el panel se "encoca" justo al
          // llegar al borde superior — y cuanto más fuerte/rápido se
          // scrolleaba, más eventos quedaban atrapados en esa ventana antes
          // del repintado. Ahora se mueve el scroll a mano (scrollTop +=)
          // sin depender de que el navegador procese scroll nativo, así que
          // no importa si el overflow del DOM todavía no se actualizó.
          if (panelEl) {
            e.preventDefault()
            panelEl.scrollTop += e.deltaY
          }
          return
        }
        e.preventDefault()
        const prevAboutProgress = aboutProgressRef.current
        const rawAboutProgress = prevAboutProgress + e.deltaY / 1800
        const next = Math.max(0, Math.min(1, rawAboutProgress))
        aboutProgressRef.current = next
        setAboutProgress(next)
        if (next <= 0) {
          setAboutPhase(null)
          tickerOffsetRef.current = 0
          setTickerOffset(0)
          setActiveLink('Proyectos')
          return
        }
        if (next >= 1) {
          setActiveLink('Sobre mí')
          // Antes, si el mismo scroll traía más fuerza de la que hacía
          // falta para terminar de subir el panel (un scroll fuerte/
          // profundo), ese sobrante se tiraba entero a la basura porque
          // acá arriba ya hicimos e.preventDefault() — el navegador nunca
          // se enteraba de esa parte del scroll. Eso se sentía como que el
          // panel se quedaba "pegado" un instante justo al llegar arriba
          // del todo. Y como el sobrante no se perdía de verdad sino que
          // quedaba "guardado" en el próximo evento de scroll (que ya
          // encuentra el contenido habilitado y sí lo deja pasar tal cual,
          // sin dividir entre 1800 como acá), ese próximo scroll se sentía
          // carísimo/rapidísimo en comparación. Para que la transición se
          // sienta continua (ni frenazo ni arrancón), el sobrante de ESTE
          // mismo scroll se aplica de una, apenas el panel quede habilitado
          // para scrollear su contenido (por eso el requestAnimationFrame:
          // espera a que el próximo render ya haya puesto overflow:auto).
          if (rawAboutProgress > 1) {
            const neededDeltaY = (1 - prevAboutProgress) * 1800
            const leftoverDeltaY = e.deltaY - neededDeltaY
            if (leftoverDeltaY > 0) {
              requestAnimationFrame(() => {
                const panelEl = aboutPanelRef.current
                if (panelEl) panelEl.scrollTop += leftoverDeltaY
              })
            }
          }
          // La tirilla (el texto que se desliza arriba, "sobre-mi.md >
          // sobre-mi.md > ...") tiene su propia inercia: al soltar el
          // scroll no frena en seco, sigue deslizando un ratito más y va
          // bajando la velocidad de a poco (ver el efecto de arriba con
          // TICKER_SPEED/TICKER_HALF_LIFE). Acá, en el instante exacto en
          // que el panel TERMINA de subir, antes se la cortaba en seco
          // (tickerVelocityRef.current = 0) para que no se sintiera pegada
          // al scroll del contenido que arranca. Pero eso también se disparaba
          // cuando la persona NO había soltado nada y seguía scrolleando de
          // largo — ahí se sentía que la tirilla se frenaba de golpe sin
          // motivo, con el scroll todavía en marcha. Ahora simplemente no
          // se toca: sea que se soltó el scroll o que se siguió de largo,
          // la tirilla decae sola con la misma curva suave de siempre (ver
          // TICKER_HALF_LIFE), así que nunca da un frenazo seco acá.
        }
        tickerActiveUntilRef.current = performance.now() + 250
        return
      }

      // (Acá antes había un `if (phase === 'projects' && showBeaconT) return`
      // que bloqueaba TODO el manejo de wheel en Proyectos, incluyendo poder
      // volver al giro/Intro con scroll hacia arriba. Leía `showBeaconT` (el
      // estado) en vez de `showBeaconTRef` — normalmente ese estado queda
      // "congelado" en false dentro de este closure (ver el comentario de
      // arriba), así que nunca se notaba. Pero en los saltos directos de nav
      // que arman Proyectos ya con todo mostrado (Sobre mí y Conectemos
      // directo desde Intro), `showBeaconT` se pone en true en el MISMO
      // cambio de `phase`, así que el closure nuevo lo capturaba ya en true
      // — y eso dejaba el scroll de Proyectos trabado para siempre, incluido
      // volver al Intro. Se quitó: las líneas de abajo (subir/bajar dentro
      // de Proyectos) ya usan los refs correctos.)

      if (phase === 'notes') {
        if (!notesCompleteRef.current) return
        e.preventDefault()
        if (wheelLockRef.current) return
        wheelLockRef.current = true
        setPhase('zooming')
        zoomProgressRef.current = 0
        setZoomProgress(0)
        const animate = () => {
          zoomProgressRef.current = Math.min(1, zoomProgressRef.current + 0.03)
          setZoomProgress(zoomProgressRef.current)
          if (zoomProgressRef.current < 1) {
            requestAnimationFrame(animate)
          } else {
            setPhase('projects')
            setActiveLink('Proyectos')
            wheelLockRef.current = false
            if (!projectsTypedRef.current) {
              projectsTypedRef.current = true
              setTimeout(() => typeProjectsText(), 400)
            }
          }
        }
        requestAnimationFrame(animate)
        return
      }

      if (phase === 'projects' && e.deltaY > 0 && showBeaconCardRef.current && showBeaconTRef.current && showTheaTRef.current) {
        const el = projectsOverlayRef.current
        const maxScroll = el ? Math.max(0, el.scrollHeight - el.clientHeight) : 0
        const atBottom = !el || el.scrollTop >= maxScroll - 4
        if (!atBottom) return
        e.preventDefault()
        aboutProgressRef.current = Math.max(0.01, Math.min(1, e.deltaY / 1800))
        setAboutProgress(aboutProgressRef.current)
        aboutPhaseRef.current = 'ticker'
        setAboutPhase('ticker')
        tickerActiveUntilRef.current = performance.now() + 250
        return
      }

      if (phase === 'projects' && e.deltaY < 0) {
        const overlayEl = projectsOverlayRef.current
        const atTop = !overlayEl || overlayEl.scrollTop <= 4
        if (!atTop) return
        e.preventDefault()
        if (wheelLockRef.current) return
        wheelLockRef.current = true
        if (typingIntervalRef.current) clearTimeout(typingIntervalRef.current)
        projectsTypedRef.current = false
        setShowBeaconCard(false)
        setShowTheaCard(false)
        setShowBeaconInfo(false)
        setShowTheaInfo(false)
        setShowBeaconName(false)
        setShowTheaName(false)
        setShowBeaconT(false)
        setShowTheaT(false)

        setProjectsText('> Projects/')
        setShowSubtitle(true)

        setTimeout(() => {
          setShowSubtitle(false)
        }, 800)

        setTimeout(() => {
          setProjectsText('')
        }, 1400)

        setTimeout(() => {
          zoomProgressRef.current = 1
          setZoomProgress(1)
          setPhase('zooming')
          wheelLockRef.current = false
          setTimeout(() => { wheelLockRef.current = true }, 100)
          const rewind = () => {
            zoomProgressRef.current = Math.max(0, zoomProgressRef.current - 0.02)
            setZoomProgress(zoomProgressRef.current)
            if (zoomProgressRef.current > 0) {
              requestAnimationFrame(rewind)
            } else {
              setPhase('notes')
              setActiveLink('Intro')
              wheelLockRef.current = false
            }
          }
          requestAnimationFrame(rewind)
        }, 1800)
        return
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [phase])

  return (
    <div style={{background:'#F5F2EE', minHeight:'100vh', color:'#1A1A1A', fontFamily:'sans-serif', paddingTop:'200px', overflowY: phase === 'projects' ? 'auto' : 'hidden', overflowX:'hidden', height: phase === 'projects' ? 'auto' : '100vh'}}>

      {/* SPLASH DE ENTRADA */}
      {splashPhase !== 'done' && (
        <React.Fragment>
          {/* Panel negro: se corta hacia arriba y sale de pantalla */}
          <div style={{
            position: 'fixed',
            inset: 0,
            background: '#0A0A0A',
            zIndex: 99999,
            transform: splashPhase === 'closing' ? 'translateY(-100%)' : 'translateY(0)',
            transition: 'transform 1.6s cubic-bezier(0.76, 0, 0.24, 1)',
            pointerEvents: 'none'
          }}/>
          {/* Favicon: elemento aparte, fijo en el centro, no se mueve con
              el panel. Se disuelve lento (opacidad + blur), terminando
              justo cuando el borde del corte llega a su posición (mitad
              del tiempo del panel). */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 100000,
            pointerEvents: 'none'
          }}>
            <img
              src="/favicon.png"
              alt=""
              style={{
                width: '64px',
                height: '64px',
                imageRendering: '-webkit-optimize-contrast',
                opacity: splashPhase === 'closing' ? 0 : 1,
                filter: splashPhase === 'closing' ? 'blur(10px)' : 'blur(0px)',
                transition: 'opacity 0.8s ease, filter 0.8s ease',
                animation: splashPhase === 'visible' ? 'faviconPulse 1.5s ease-in-out infinite' : 'none'
              }}
            />
          </div>
        </React.Fragment>
      )}

      {/* BLACKOUT DE NAVEGACIÓN: mismo look del splash de entrada, para
          saltos directos Intro <-> Proyectos por click de nav (sin zoom).
          'enter-start' arranca el panel fuera de pantalla (abajo) sin
          transición; al frame siguiente pasa a 'enter' y el panel sube
          cubriendo todo mientras el favicon aparece y pulsa; ya tapado,
          cambia lo de abajo y pasa a 'exit', que corta hacia arriba y
          disuelve el favicon, igual que el splash inicial. */}
      {navBlackout && (
        <React.Fragment>
          <div style={{
            position: 'fixed',
            inset: 0,
            background: '#0A0A0A',
            zIndex: 99999,
            transform: navBlackout === 'exit' ? 'translateY(-100%)' : (navBlackout === 'enter' ? 'translateY(0)' : 'translateY(100%)'),
            transition: navBlackout === 'exit'
              ? 'transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)'
              : (navBlackout === 'enter' ? 'transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)' : 'none'),
            pointerEvents: 'none'
          }}/>
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 100000,
            pointerEvents: 'none'
          }}>
            <img
              src="/favicon.png"
              alt=""
              style={{
                width: '64px',
                height: '64px',
                imageRendering: '-webkit-optimize-contrast',
                opacity: navBlackout === 'enter' ? 1 : 0,
                filter: navBlackout === 'exit' ? 'blur(10px)' : 'blur(0px)',
                transition: navBlackout === 'exit' ? 'opacity 0.4s ease, filter 0.4s ease' : 'opacity 0.3s ease',
                animation: navBlackout === 'enter' ? 'faviconPulse 1.2s ease-in-out infinite' : 'none'
              }}
            />
          </div>
        </React.Fragment>
      )}

      {/* NAVBAR */}
      <div style={{
        position: phase === 'projects' ? 'fixed' : 'fixed',
        top: phase === 'projects' ? '12px' : '40px',
        right: phase === 'projects' ? '24px' : '80px',
        left: phase === 'projects' ? 'auto' : '80px',
        transform: 'none',
        width: phase === 'projects' ? 'auto' : 'calc(100% - 160px)',
        display: 'flex',
        gap: '0',
        zIndex: (aboutPhase === 'ticker' && aboutProgress >= 1 && navReadyToShow) ? 9500 : (phase === 'projects' ? 600 : 100),
        justifyContent: scrolled ? 'flex-end' : 'space-between',
        background: phase === 'projects' ? 'rgba(245,242,238,0.85)' : '#F5F2EE',
        backdropFilter: phase === 'projects' ? 'blur(8px)' : 'none',
        border: phase === 'projects' ? '1px solid rgba(26,26,26,0.2)' : (scrolled ? 'none' : '1px solid #1A1A1A'),
        boxShadow: phase === 'projects' ? 'none' : (scrolled ? 'none' : '2px 2px 0px #1A1A1A'),
        // El nav queda con z-index bajo (tapado por el panel negro) los
        // primeros 5s dentro de Sobre mí — pero antes, apenas el z-index
        // subía, como la opacity ya estaba en 1 de antes (nunca había
        // cambiado), el nav aparecía de golpe en el mismo frame, sin
        // transición ninguna: por eso se sentía como que "entraba muy
        // rápido". Ahora la opacity también arranca en 0 mientras está
        // tapado, así que al destaparse (navReadyToShow) sí hay una
        // transición real de 0 a 1 para animar.
        opacity: (aboutPhase === 'ticker' && aboutProgress > 0.55 && aboutProgress < 1) ? 0
          : (aboutPhase === 'ticker' && aboutProgress >= 1 && !navReadyToShow) ? 0
          : 1,
        pointerEvents: (aboutPhase === 'ticker' && aboutProgress > 0.55 && aboutProgress < 1) ? 'none' : 'auto',
        transition: 'background 0.5s ease, border 0.5s ease, box-shadow 0.5s ease, top 0.5s ease, right 0.5s ease, left 0.5s ease, width 0.5s ease, opacity 0.5s ease'
      }}>
        <div style={{
          borderRight: '1px solid #1A1A1A',
          padding: '8px 16px',
          display: scrolled || phase === 'projects' ? 'none' : 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#F5F2EE'
        }}>
          <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:400, fontSize:'20px', color:'#1A1A1A', lineHeight:1.3}}>Ana María</span>
          <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:400, fontSize:'20px', color:'#1A1A1A', lineHeight:1.3}}>Serrano</span>
        </div>
        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'stretch',
          background: '#F5F2EE'
        }}>
          {['Intro', 'Proyectos', 'Sobre mí', 'Conectemos'].map((link, i) => (
            <a key={link} href={`#${link}`} className="nav-link" onClick={() => {
              if (link !== 'Sobre mí') setActiveLink(link)
              if (link === 'Intro') {
                // Si ya estamos en Intro (y no en Sobre mí), no hay nada que hacer.
                if (phase === 'notes' && !aboutPhaseRef.current) return
                // Salto directo (sin zoom): mismo blackout del splash inicial.
                runBlackoutNav(() => {
                  aboutPhaseRef.current = null
                  setAboutPhase(null)
                  aboutProgressRef.current = 0
                  setAboutProgress(0)
                  conectemosProgressRef.current = 0
                  setConectemosProgress(0)
                  tickerOffsetRef.current = 0
                  setTickerOffset(0)
                  setPhase('notes')
                  setZoomProgress(0)
                  setProjectTransition(null)
                  // Volver a Intro por nav SIEMPRE deja el próximo ingreso a
                  // Proyectos listo para reproducirse como un recorrido
                  // completo si es por scroll: no solo el tipeo de
                  // "> Projects/" (projectsTypedRef), sino también la
                  // cascada de aparición (subtítulo, cards, nombres,
                  // taglines, info). Un salto directo por nav
                  // ("Proyectos"/"Sobre mí"/"Conectemos") deja todo esto en
                  // true de una (sin animar) — si no se resetea acá, un
                  // scroll orgánico posterior encontraba todo ya visible y
                  // la entrada se sentía rota a medias (el texto sí
                  // tipeaba, pero las cards aparecían de golpe en vez de en
                  // cascada). Mismo reset que ya hace scrollear hacia
                  // arriba para salir de Proyectos.
                  projectsTypedRef.current = false
                  setShowSubtitle(false)
                  setShowCards(false)
                  setShowBeaconCard(false)
                  setShowTheaCard(false)
                  setShowBeaconInfo(false)
                  setShowTheaInfo(false)
                  setShowBeaconName(false)
                  setShowTheaName(false)
                  setShowBeaconT(false)
                  setShowTheaT(false)
                  showBeaconCardRef.current = false
                  showBeaconTRef.current = false
                  showTheaTRef.current = false
                })
              }
              if (link === 'Proyectos') {
                if (aboutPhaseRef.current === 'ticker') {
                  // Si Conectemos estaba destapado, lo tapamos de nuevo antes
                  // de deslizar el panel hacia abajo, para que la transición
                  // salga siempre desde la posición normal de Sobre mí.
                  conectemosProgressRef.current = 0
                  setConectemosProgress(0)
                  // Ya en "Sobre mí": el panel se desliza hacia abajo y
                  // descubre las cards de Proyectos que ya están debajo.
                  animateAboutOut()
                  return
                }
                setActiveLink('Proyectos')
                if (phase === 'projects') return
                // Desde Intro: nada de zoom tradicional, blackout directo a las cards.
                // Click directo en el nav = vía rápida: todo aparece de una,
                // sin el tipeo ni la cascada de aparición (esa construcción
                // progresiva se reserva para cuando se llega haciendo scroll).
                runBlackoutNav(() => {
                  setPhase('projects')
                  zoomProgressRef.current = 1
                  setZoomProgress(1)
                  projectsTypedRef.current = true
                  if (typingIntervalRef.current) {
                    clearTimeout(typingIntervalRef.current)
                    typingIntervalRef.current = null
                  }
                  setProjectsText('> Projects/')
                  setShowSubtitle(true)
                  setShowCards(true)
                  setShowBeaconCard(true)
                  setShowTheaCard(true)
                  setShowBeaconName(true)
                  setShowTheaName(true)
                  setShowBeaconT(true)
                  setShowTheaT(true)
                  setShowBeaconInfo(true)
                  setShowTheaInfo(true)
                })
              }
              if (link === 'Sobre mí') {
                if (aboutPhaseRef.current === 'ticker') {
                  // Si Conectemos está destapado (o a medio destapar), lo
                  // volvemos a tapar para regresar a la vista normal de
                  // Sobre mí. Si no, ya estamos donde debemos y no hay nada
                  // que hacer.
                  if (conectemosProgressRef.current > 0) {
                    conectemosAutoRef.current = false
                    const from = conectemosProgressRef.current
                    const start = performance.now()
                    const DURATION = 500
                    const step = (now) => {
                      const t = Math.min(1, (now - start) / DURATION)
                      const eased = 1 - Math.pow(1 - t, 3)
                      const val = from * (1 - eased)
                      conectemosProgressRef.current = val
                      setConectemosProgress(val)
                      if (t < 1) {
                        requestAnimationFrame(step)
                      } else {
                        setActiveLink('Sobre mí')
                      }
                    }
                    requestAnimationFrame(step)
                  }
                  return
                }
                if (phase === 'projects') {
                  // Ya estamos viendo Proyectos (las cards ya están
                  // colocadas, sea porque se llegó por scroll o por click
                  // directo en "Proyectos"): acá no hay nada que tapar ni
                  // saltar, el panel de Sobre mí simplemente sube animado
                  // por encima, igual que si se hiciera scroll hacia
                  // adelante. Sin blackout.
                  tickerOffsetRef.current = 0
                  setTickerOffset(0)
                  aboutProgressRef.current = 0
                  setAboutProgress(0)
                  aboutPhaseRef.current = 'ticker'
                  setAboutPhase('ticker')
                  let lastAboutT = performance.now()
                  const myAnimToken = ++aboutAutoAnimTokenRef.current
                  const animateAbout = (now) => {
                    // Si mientras tanto hubo un scroll real (handleWheel
                    // invalida el token apenas detecta un wheel en fase
                    // "ticker") o se volvió a disparar otra vez esta misma
                    // animación, esta corrida vieja se corta acá y deja de
                    // pisar aboutProgress.
                    if (aboutAutoAnimTokenRef.current !== myAnimToken) return
                    const dt = Math.max(1, now - lastAboutT)
                    lastAboutT = now
                    aboutProgressRef.current = Math.min(1, aboutProgressRef.current + 0.45 * dt / 1000)
                    setAboutProgress(aboutProgressRef.current)
                    tickerActiveUntilRef.current = performance.now() + 250
                    if (aboutProgressRef.current < 1) {
                      requestAnimationFrame(animateAbout)
                    } else {
                      setActiveLink('Sobre mí')
                    }
                  }
                  requestAnimationFrame(animateAbout)
                  return
                }
                // Yendo directo de Intro a Sobre mí (todavía no se pasó por
                // Proyectos): igual que los otros saltos directos de nav
                // (Proyectos, Conectemos), se corta con blackout — por
                // debajo dejamos todo ya armado (cards de Proyectos
                // colocadas + panel de Sobre mí ya arriba del todo) y se
                // destapa de una vez, sin animar ni la colocación de las
                // cards ni la subida del panel. Antes esto se animaba con
                // el panel subiendo mientras las cards quedaban expuestas
                // sin blackout, lo que se veía como un flash raro de la
                // pantalla de Proyectos entre el hero de Intro y el panel
                // negro. skipProjectsEntranceAnim solo evita que las
                // transiciones de las cards se disparen ese instante (que
                // igual queda tapado por el blackout); se vuelve a apagar
                // dos frames después — así cualquier otra forma de llegar
                // a Proyectos (scroll normal o click directo en
                // "Proyectos") sigue viendo la animación de colocación de
                // siempre.
                runBlackoutNav(() => {
                  setSkipProjectsEntranceAnim(true)
                  setPhase('projects')
                  zoomProgressRef.current = 1
                  setZoomProgress(1)
                  projectsTypedRef.current = true
                  setProjectsText('> Projects/')
                  setShowSubtitle(true)
                  setShowCards(true)
                  setShowBeaconCard(true)
                  setShowTheaCard(true)
                  setShowBeaconName(true)
                  setShowTheaName(true)
                  setShowBeaconT(true)
                  setShowTheaT(true)
                  setShowBeaconInfo(true)
                  setShowTheaInfo(true)
                  showBeaconCardRef.current = true
                  showBeaconTRef.current = true
                  showTheaTRef.current = true
                  tickerOffsetRef.current = 0
                  setTickerOffset(0)
                  aboutProgressRef.current = 1
                  setAboutProgress(1)
                  aboutPhaseRef.current = 'ticker'
                  setAboutPhase('ticker')
                  setActiveLink('Sobre mí')
                  // El panel ya queda arriba del todo (detrás del blackout),
                  // pero su contenido (tirilla + foto + bio) arranca
                  // invisible/corrido un poco hacia abajo; apenas el
                  // blackout empieza a destaparse lo hacemos aparecer con
                  // un fade suave de 0.5s, en vez de que aparezca todo de
                  // golpe apenas se destapa (que era lo que se sentía
                  // agresivo).
                  setAboutContentSoftEnter(true)
                  setTimeout(() => setAboutContentSoftEnter(false), 60)
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => setSkipProjectsEntranceAnim(false))
                  })
                })
              }
              if (link === 'Conectemos') {
                if (aboutPhaseRef.current === 'ticker' && aboutProgressRef.current >= 1) {
                  // Ya estamos en Sobre mí (destapado o no): solo falta
                  // terminar de destapar Conectemos.
                  if (conectemosProgressRef.current < 1 && !conectemosAutoRef.current) {
                    runConectemosAutoReveal(conectemosProgressRef.current)
                  }
                  return
                }
                // Desde cualquier otro lado: blackout directo, dejamos todo
                // armado por debajo (Sobre mí completamente destapado +
                // Conectemos completamente destapado) y se corta hacia arriba.
                runBlackoutNav(() => {
                  setPhase('projects')
                  zoomProgressRef.current = 1
                  setZoomProgress(1)
                  projectsTypedRef.current = true
                  setProjectsText('> Projects/')
                  setShowSubtitle(true)
                  setShowCards(true)
                  setShowBeaconCard(true)
                  setShowTheaCard(true)
                  setShowBeaconName(true)
                  setShowTheaName(true)
                  setShowBeaconT(true)
                  setShowTheaT(true)
                  setShowBeaconInfo(true)
                  setShowTheaInfo(true)
                  showBeaconCardRef.current = true
                  showBeaconTRef.current = true
                  showTheaTRef.current = true
                  tickerOffsetRef.current = 0
                  setTickerOffset(0)
                  aboutProgressRef.current = 1
                  setAboutProgress(1)
                  aboutPhaseRef.current = 'ticker'
                  setAboutPhase('ticker')
                  conectemosProgressRef.current = 1
                  setConectemosProgress(1)
                  setActiveLink('Conectemos')
                })
              }
            }} style={{
              padding: '8px 16px',
              borderLeft: i === 0 ? 'none' : '1px solid #1A1A1A',
              display: 'flex',
              alignItems: 'center',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              background: activeLink === link ? (activeLink === 'Sobre mí' ? '#FF6B35' : '#1A1A1A') : 'transparent',
              color: activeLink === link ? '#F5F2EE' : '#1A1A1A',
              transition: 'background 0.3s ease',
              textDecoration: 'none'
            }}>
              {link}
            </a>
          ))}
        </div>
      </div>

      <div style={{
        position:'fixed',
        top:'64px',
        left:'8px',
        width:'64vw',
        bottom:'8px',
        background:'#1A1A1A',
        borderRadius:'8px',
        zIndex:0,
        pointerEvents:'none',
        opacity: phase === 'zooming' ? Math.max(0, 1 - zoomProgress * 2) : phase === 'projects' ? 0 : 1,
        transition:'opacity 0.6s ease'
      }}/>

      {/* HERO */}
      <section id="intro" style={{
        padding:'0px 0 120px 40px',
        display:'flex',
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'space-between',
        gap:'0px',
        overflow:'hidden',
        maxWidth:'100vw',
        transform: phase === 'zooming' || phase === 'projects' || phase === 'rewinding'
          ? `scale(${1 + zoomProgress * 6})`
          : 'scale(1)',
        transition: 'none',
        transformOrigin: cursorPos
          ? `${cursorPos.x}px ${cursorPos.y}px`
          : 'center center'
      }}>
        <div style={{flex:'0 0 62vw', marginTop:'100px', paddingLeft:'20px'}}>
          <div style={{position:'relative', display:'block'}}>
            <span style={{
              position:'absolute',
              top:'-24px',
              right:'60px',
              fontSize:'13px',
              letterSpacing:'0.05em',
              textTransform:'uppercase',
              color:'#F5F2EE',
              fontFamily:"'Plus Jakarta Sans', sans-serif",
              fontWeight:400
            }}>
              <span style={{fontSize:'20px', fontWeight:400, marginRight:'4px'}}>✳</span>Product Designer
            </span>
            <h1 style={{
              fontSize:'42px',
              fontWeight:700,
              lineHeight:1.1,
              letterSpacing:'-0.01em',
              fontFamily:"'Plus Jakarta Sans', sans-serif",
              marginBottom:'24px',
              color:'#F5F2EE'
            }}>
              {'Hola soy Ana, y nunca doy por terminada una interfaz hasta que incluso el '}
              <span style={{outline:'none',position:'relative',padding:'2px 8px',display:'inline-block'}}>
                <span style={{position:'absolute',top:0,left:0,width:'8px',height:'8px',borderTop:'1px solid #555',borderLeft:'1px solid #555',transition:'border-radius 0.8s ease',borderRadius:brRounded?'4px 0 0 0':'0'}}/>
                <span style={{position:'absolute',top:0,right:0,width:'8px',height:'8px',borderTop:'1px solid #555',borderRight:'1px solid #555',transition:'border-radius 0.8s ease',borderRadius:brRounded?'0 4px 0 0':'0'}}/>
                <span style={{position:'absolute',bottom:0,left:0,width:'8px',height:'8px',borderBottom:'1px solid #555',borderLeft:'1px solid #555',transition:'border-radius 0.8s ease',borderRadius:brRounded?'0 0 0 4px':'0'}}/>
                <span style={{position:'absolute',bottom:0,right:0,width:'8px',height:'8px',borderBottom:'1px solid #555',borderRight:'1px solid #555',transition:'border-radius 0.8s ease',borderRadius:brRounded?'0 0 4px 0':'0'}}/>
                border radius
              </span>
              {' tenga '}
              <SentidoAnimation/>
            </h1>
            <h3 style={{
              fontFamily:"'Plus Jakarta Sans', sans-serif",
              fontWeight:200,
              fontSize:'30px',
              color:'#F5F2EE',
              marginTop:'16px',
              marginBottom:'24px'
            }}>
              Porque cada detalle influye en la forma en que las personas entienden, perciben y confían en un producto.
            </h3>
            <TypingText text={`// working notes:\n> buscando sentido antes de diseñar soluciones.`} speed={40} />
          </div>
        </div>
        <div style={{flex:1, paddingTop:'0', marginTop:'-60px', paddingLeft:'40px', position:'relative', opacity: phase === 'zooming' ? Math.max(0, 1 - zoomProgress * 1.5) : phase === 'projects' ? 0 : 1}}>
          <div id="notes-container" ref={notesRef} style={{}}>
            <SequentialTyping ref={endCursorRef} keepCursorVisible={phase === 'zooming' || phase === 'rewinding'} hideCursor={phase === 'zooming' || phase === 'rewinding' || phase === 'projects'} onComplete={() => {
              notesCompleteRef.current = true
              setTimeout(() => {
                if (endCursorRef.current) {
                  const rect = endCursorRef.current.getBoundingClientRect()
                  setCursorPos({ x: rect.left + rect.width, y: rect.top })
                }
              }, 100)
            }} />
          </div>
          {notesDisintegrating && <DisintegrationEffect active={notesDisintegrating} />}
        </div>
      </section>

      {cursorPos && (phase === 'zooming') && (
        <span style={{
          position: 'fixed',
          left: cursorPos.x - (cursorPos.x - window.innerWidth * 0.2) * zoomProgress,
          top: cursorPos.y - (cursorPos.y - window.innerHeight * 0.5) * zoomProgress,
          width: `${1 + Math.max(0, (zoomProgress - 0.4) / 0.6) * 2}px`,
          height: `${13 + Math.max(0, (zoomProgress - 0.4) / 0.6) * 35}px`,
          background: '#1A1A1A',
          display: 'inline-block',
          animation: 'blink 1s step-end infinite',
          transform: 'none',
          transition: 'none',
          zIndex: 9999
        }}/>
      )}

      {(phase === 'projects' || (phase === 'zooming' && zoomProgress > 0.8)) && (
        <div ref={projectsOverlayRef} className="projects-overlay" onScroll={(e) => {
          const el = e.currentTarget
          const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight)
          const atBottom = el.scrollTop >= maxScroll - 4
          const engaged = aboutPhaseRef.current === 'ticker'
          const canEngage = showBeaconCardRef.current && showBeaconTRef.current && showTheaTRef.current
          if (!engaged) {
            if (atBottom && canEngage && el.scrollTop > maxScroll - 4) {
              aboutProgressRef.current = 0.02
              setAboutProgress(aboutProgressRef.current)
              aboutPhaseRef.current = 'ticker'
              setAboutPhase('ticker')
              el.scrollTop = maxScroll
            }
            return
          }
          // Mientras el panel de Sobre mí está activo, el wheel handler de
          // window es el ÚNICO que mueve aboutProgress. Este onScroll solo
          // existe para anclar el scroll nativo del overlay en su lugar
          // (si no, en algunos navegadores el scroll de fondo se movía en
          // paralelo al de wheel y duplicaba/aceleraba el avance).
          if (el.scrollTop !== maxScroll) {
            el.scrollTop = maxScroll
          }
        }} style={{
          position:'fixed',
          top:0,
          left:0,
          width:'100vw',
          height:'100vh',
          background:'#F5F2EE',
          zIndex:500,
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'stretch',
          padding:'0 80px',
          paddingBottom:'1200px',
          overflowY:'auto',
          touchAction:'pan-y'
        }}>
          <div style={{
            transform: showBeaconCard ? 'translateY(-100px)' : 'translateY(0)',
            opacity: showBeaconCard ? 0 : 1,
            transition: skipProjectsEntranceAnim ? 'none' : 'transform 0.8s ease, opacity 0.8s ease',
            paddingTop: '40px'
          }}>
            <div style={{display:'flex', alignItems:'center', fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'48px', color:'#1A1A1A'}}>
              {projectsText}
              <span style={{display:'inline-block', width: zoomProgress >= 1 ? '3px' : '1px', height: zoomProgress >= 1 ? '48px' : '13px', background:'#1A1A1A', marginLeft:'4px', animation:'blink 1s step-end infinite', transition:'width 0.4s ease, height 0.4s ease'}}/>
            </div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:200, fontSize:'30px', color:'#1A1A1A', marginTop:'16px', opacity: showSubtitle ? 1 : 0, transform: showSubtitle ? 'translateX(0)' : 'translateX(-30px)', transition: skipProjectsEntranceAnim ? 'none' : 'opacity 0.8s ease, transform 0.8s ease'}}>
              Donde las notas terminan convirtiéndose en producto.
            </h3>
          </div>

          <div style={{display:'flex', gap:'40px', position:'absolute', top:'12px', left:'80px', right:'80px'}}>
            <div style={{flex:1, opacity: showBeaconCard ? 1 : 0, transform: showBeaconCard ? 'translateY(0)' : 'translateY(100vh)', transition: skipProjectsEntranceAnim ? 'none' : 'opacity 0.8s ease, transform 0.8s ease', position:'relative', alignSelf:'stretch', height:'70vh'}} onMouseEnter={() => {
              setBeaconHovered(true)
              setBeaconTyping('')
              let i = 0
              const text = 'Una venta no siempre se pierde. A veces, simplemente deja de ser visible.'
              beaconIntervalRef.current = setInterval(() => {
                if (i < text.length) {
                  setBeaconTyping(text.slice(0, i + 1))
                  i++
                } else {
                  clearInterval(beaconIntervalRef.current)
                }
              }, 50)
            }} onMouseLeave={() => {
              setBeaconHovered(false)
              clearInterval(beaconIntervalRef.current)
              setBeaconTyping('')
            }}>
              <img src={cardBeacon} style={{width:'100%', height:'70vh', display:'block', objectFit:'contain', animation: showBeaconCard ? 'kenBurns 3s ease-out forwards' : 'none', filter: beaconHovered ? 'brightness(0.15)' : 'none', transition: 'filter 0.3s ease', cursor: 'pointer'}}/>
              {beaconHovered && (
                <div style={{
                  position:'absolute',
                  top:'0',
                  left:'0',
                  width:'100%',
                  height:'100%',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  flexDirection:'column',
                  padding:'0 32px'
                }}>
                  <div>
                    <p style={{
                      fontFamily:"'IBM Plex Mono', monospace",
                      fontSize:'14px',
                      fontWeight:150,
                      color:'rgba(255,255,255,0.5)',
                      marginBottom:'8px'
                    }}>// insight:</p>
                    <p style={{
                      fontFamily:"'IBM Plex Mono', monospace",
                      fontSize:'14px',
                      fontWeight:150,
                      color:'rgba(255,255,255,0.5)',
                      textAlign:'center',
                      lineHeight:1.8,
                      maxWidth:'280px'
                    }}>
                      {beaconTyping}
                      <span style={{display:'inline-block', width:'1px', height:'13px', background:'#fff', marginLeft:'2px', animation:'blink 1s step-end infinite'}}/>
                    </p>
                    <a onClick={(e) => { e.preventDefault(); setProjectTransition('beacon') }} style={{
                      fontFamily:"'IBM Plex Mono', monospace",
                      fontSize:'16px',
                      fontWeight:300,
                      color:'#FFFFFF',
                      textDecoration:'underline',
                      marginTop:'8px',
                      display:'block',
                      textAlign:'center',
                      cursor:'pointer'
                    }}>beacon.md</a>
                  </div>
                </div>
              )}
              <p style={{fontFamily:"'Satoshi', sans-serif", fontWeight:700, fontSize:'48px', color:'#1A1A1A', marginTop:'12px', marginLeft:'20px', opacity: showBeaconName ? 1 : 0, transform: showBeaconName ? 'translateX(0)' : 'translateX(-100px)', transition: skipProjectsEntranceAnim ? 'none' : 'opacity 0.6s ease, transform 0.6s ease'}}>Beacon</p>
              {showBeaconT && (
                <div style={{width:'100%', position:'relative', marginTop:'16px'}}>
                  <div style={{
                    width:'100%',
                    height:'1px',
                    background:'#1A1A1A',
                    position:'relative'
                  }}>
                    <div style={{
                      position:'absolute',
                      left:'50%',
                      top:'0',
                      width:'1.5px',
                      height:'40px',
                      background:'#1A1A1A',
                      transform:'translateX(-50%) translateY(-100%)'
                    }}/>
                  </div>
                  <p style={{
                    fontFamily:"'Plus Jakarta Sans', sans-serif",
                    fontSize:'14px',
                    fontWeight:240,
                    color:'#1A1A1A',
                    marginTop:'16px',
                    lineHeight:2
                  }}>
                    Investigación UX ✳ Estrategia de Producto ✳ Producto SaaS ✳ Desarrollo con IA aplicada
                  </p>
                  <p style={{
                    fontFamily:"'Plus Jakarta Sans', sans-serif",
                    fontSize:'20px',
                    fontWeight:600,
                    color:'#1A1A1A',
                    lineHeight:1.6,
                    marginTop:'8px'
                  }}>
                    Beacon es una herramienta web que diseñé desde cero con IA para ayudar a equipos comerciales B2B a no perder de vista oportunidades de hasta USD 400.000 anuales. Ayuda a detectar oportunidades en riesgo antes de que afecten las ventas y las comisiones.
                  </p>
                  <div style={{
                    position:'absolute',
                    right:'0',
                    top:'-52px',
                    marginLeft:'-8px'
                  }}>
                    <VerProductoBtn />
                  </div>
                </div>
              )}
            </div>
            <div style={{flex:1, opacity: showTheaCard ? 1 : 0, transform: showTheaCard ? 'translateY(0)' : 'translateY(100vh)', transition: skipProjectsEntranceAnim ? 'none' : 'opacity 0.8s ease, transform 0.8s ease', paddingLeft:'40px', position:'relative', height:'70vh'}} onMouseEnter={() => {
              setTheaHovered(true)
              setTheaTyping('')
              let i = 0
              const text = 'Un turista conoce una ciudad\na través de algoritmos.\nUn local,\na través de experiencias.'
              theaIntervalRef.current = setInterval(() => {
                if (i < text.length) {
                  setTheaTyping(text.slice(0, i + 1))
                  i++
                } else {
                  clearInterval(theaIntervalRef.current)
                }
              }, 50)
            }} onMouseLeave={() => {
              setTheaHovered(false)
              clearInterval(theaIntervalRef.current)
              setTheaTyping('')
            }}>
              <img src={cardTheaveling} style={{width:'100%', height:'70vh', objectFit:'contain', display:'block', animation: showTheaCard ? 'kenBurns 3s ease-out forwards' : 'none', filter: theaHovered ? 'brightness(0.15)' : 'none', transition: 'filter 0.3s ease', cursor: 'pointer'}}/>
              {theaHovered && (
                <div style={{
                  position:'absolute',
                  top:'0',
                  left:'0',
                  width:'100%',
                  height:'100%',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  flexDirection:'column',
                  padding:'0 32px'
                }}>
                  <div>
                    <p style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'14px', fontWeight:150, color:'rgba(255,255,255,0.5)', marginBottom:'8px'}}>// insight:</p>
                    <p style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'14px', fontWeight:150, color:'rgba(255,255,255,0.5)', textAlign:'center', lineHeight:1.8, maxWidth:'320px', whiteSpace:'normal'}}>
                      {theaTyping}
                      <span style={{display:'inline-block', width:'1px', height:'13px', background:'#fff', marginLeft:'2px', animation:'blink 1s step-end infinite'}}/>
                    </p>
                    <a onClick={(e) => { e.preventDefault(); setProjectTransition('theaveling') }} style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'16px', fontWeight:300, color:'#FFFFFF', textDecoration:'underline', marginTop:'8px', display:'block', textAlign:'center', cursor:'pointer'}}>theaveling.md</a>
                  </div>
                </div>
              )}
              <p style={{fontFamily:"'Sansita', sans-serif", fontWeight:700, fontSize:'48px', color:'#F31006', marginTop:'12px', marginLeft:'20px', opacity: showTheaName ? 1 : 0, transform: showTheaName ? 'translateX(0)' : 'translateX(100px)', transition: skipProjectsEntranceAnim ? 'none' : 'opacity 0.6s ease, transform 0.6s ease'}}>Theaveling</p>
              {showTheaT && (
                <div style={{width:'100%', position:'relative', marginTop:'16px'}}>
                  <div style={{
                    width:'100%',
                    height:'1px',
                    background:'#1A1A1A',
                    position:'relative'
                  }}>
                    <div style={{
                      position:'absolute',
                      left:'50%',
                      top:'0',
                      width:'1.5px',
                      height:'40px',
                      background:'#1A1A1A',
                      transform:'translateX(-50%) translateY(-100%)'
                    }}/>
                  </div>
                  <p style={{
                    fontFamily:"'Plus Jakarta Sans', sans-serif",
                    fontSize:'14px',
                    fontWeight:240,
                    color:'#1A1A1A',
                    marginTop:'16px',
                    lineHeight:2
                  }}>
                    Investigación UX ✳ Diseño de Interfaz ✳ Prototipado ✳ Testing
                  </p>
                  <p style={{
                    fontFamily:"'Plus Jakarta Sans', sans-serif",
                    fontSize:'20px',
                    fontWeight:600,
                    color:'#1A1A1A',
                    lineHeight:1.6,
                    marginTop:'8px'
                  }}>
                    Hay una escena artística detrás de cada ciudad. Pero, ¿cómo la descubres cuando no sabes dónde mirar?
                  </p>
                  <p style={{
                    fontFamily:"'Plus Jakarta Sans', sans-serif",
                    fontSize:'20px',
                    fontWeight:600,
                    color:'#1A1A1A',
                    lineHeight:1.6,
                    marginTop:'4px'
                  }}>
                    Diseñé Theaveling para acercar esa escena a quienes quieren descubrirla, con una selección curada de experiencias escénicas y culturales.
                  </p>
                  <p style={{
                    fontFamily:"'Plus Jakarta Sans', sans-serif",
                    fontSize:'20px',
                    fontWeight:600,
                    color:'#1A1A1A',
                    lineHeight:1.6,
                    marginTop:'4px'
                  }}>
                    De una búsqueda fragmentada a una forma más fácil de descubrir y reservar.
                  </p>
                  <div style={{
                    position:'absolute',
                    right:'0',
                    top:'-52px',
                    marginLeft:'-8px'
                  }}>
                    <VerProductoBtn />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div style={{height:'120vh', pointerEvents:'none'}}/>
        </div>
      )}

      {projectTransition && (
        <ProjectTransition
          key={projectTransition}
          // El panel izquierdo de Theaveling usaba '#112C2C', que es
          // "--color-thea-green" en el design system real de Theaveling
          // (el verde de CONTENIDO). Ana pidió el tono más oscuro — ese es
          // "--color-thea-deep" (rgb(1 20 20), el verde-casi-negro que usa
          // Theaveling para el chrome de navegación, no para contenido).
          color={projectTransition === 'beacon' ? '#121716' : 'rgb(1, 20, 20)'}
          projectName={projectTransition === 'beacon' ? 'Beacon' : 'Theaveling'}
          projectColor={projectTransition === 'beacon' ? '#121716' : 'rgb(1, 20, 20)'}
          onClose={() => {
            setPhase('projects')
            setActiveLink('Proyectos')
            setProjectTransition(null)
            setProjectsText('> Projects/')
            setShowSubtitle(true)
            setShowBeaconCard(true)
            setShowTheaCard(true)
            setShowBeaconName(true)
            setShowTheaName(true)
            setShowBeaconT(true)
            setShowTheaT(true)
          }}
        />
      )}

      {aboutPhase && (
        <div style={{
          position:'fixed',
          top:0, left:0, width:'100vw', height:'100vh',
          background: '#000',
          zIndex:9000,
          overflow:'visible',
          // overflow:visible (y no 'hidden') porque la barra "> Conectemos/"
          // ahora CUELGA hacia afuera del panel (su borde de arriba pegado
          // al borde de abajo del panel, el resto de la barra por fuera,
          // sobre el video) — si el panel recortara su propio contenido, la
          // barra quedaría cortada. El wrapper interno de scroll (más abajo)
          // ya recorta el texto/collage por su cuenta, así que este cambio
          // no afecta esa parte.
          // El panel (con la barra "> Conectemos/" pegada a su borde de
          // abajo) NO se va de la pantalla del todo: solo sube lo
          // necesario para que su borde de abajo quede justo en el borde de
          // arriba del video (36vh, ya que el video mide 64vh) y ahí se
          // queda fijo/pegado — no los 100vh completos, que lo hacían
          // desaparecer y encima duplicaba el negro con el fondo propio de
          // Conectemos.
          transform: `translateY(${(1 - aboutProgress) * 100 - conectemosProgress * 64}vh)`,
          willChange:'transform'
        }}>
          {/* Wrapper interno con el scroll del contenido de "Sobre mí". La
              barra de Conectemos vive AFUERA de este wrapper (como hermana,
              más abajo) para que el scroll interno del texto/collage nunca
              se la lleve por delante — antes, al estar el overflow:auto en
              el mismo elemento que la posicionaba, la barra hacía scroll
              junto con el resto del contenido y desaparecía apenas bajabas
              un poco. */}
          <div ref={aboutPanelRef} className="about-panel" style={{
            position:'absolute',
            top:0, left:0, width:'100%', height:'100%',
            overflowY: (aboutProgress >= 1 && conectemosProgress <= 0) ? 'auto' : 'hidden',
            overflowX:'hidden'
          }}>
          {aboutPhase === 'ticker' && (
            <div style={{
              minHeight:'100vh', display:'flex', flexDirection:'column',
              opacity: aboutContentSoftEnter ? 0 : 1,
              transform: aboutContentSoftEnter ? 'translateY(16px)' : 'translateY(0)',
              transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}>
              <div ref={tickerRowRef} style={{paddingTop:'18px', flexShrink:0}}>
                <div style={{width:'100%', overflow:'hidden', whiteSpace:'nowrap'}}>
                  <div style={{display:'inline-flex', transform:`translateX(-${tickerOffset}%)`}}>
                    {[0, 1].map((i) => (
                      <span key={i} style={{
                        fontFamily:"'IBM Plex Mono', monospace",
                        fontWeight:300,
                        fontSize:'28px',
                        lineHeight:1,
                        color:'#F5F2EE',
                        letterSpacing:'-0.01em',
                        paddingRight:'20px'
                      }}>
                        {Array(40).fill('> readme.md').join('   ')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', gap:'130px', paddingLeft:'80px', paddingRight:'80px', paddingTop:'120px', paddingBottom:'100px'}}>
                <img src={anaPhoto} style={{maxHeight:'75vh', width:'auto', maxWidth:'38vw', objectFit:'contain', flexShrink:0, borderRadius:'16px'}}/>
                <div style={{display:'flex', flexDirection:'column', gap:'38px', maxWidth:'480px', paddingTop:'0'}}>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:500, fontSize:'30px', lineHeight:1.3, letterSpacing:'-0.01em', color:'#F5F2EE', margin:0}}>
                    No llegué al diseño desde el diseño.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                    <span style={{color:'#F5F2EE', fontWeight:500}}>Me formé en artes visuales y dramáticas, entre la escenografía, la composición y el color.</span> Esa formación me enseñó a desarrollar un ojo crítico y una sensibilidad visual que no dependen de las tendencias: a entender por qué algo funciona, qué comunica y cómo cada detalle transforma una experiencia.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                    <span style={{color:'#F5F2EE', fontWeight:500}}>Antes de diseñar productos, trabajé en Customer Experience.</span> Estar del otro lado de la pantalla me enseñó que una buena experiencia no termina en Figma ni cuando un producto sale al aire. Termina cuando una persona entiende, confía, queda satisfecha y quiere volver.
                  </p>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                    <span style={{color:'#F5F2EE', fontWeight:500}}>Hoy combino ese criterio visual con una mirada de producto y una obsesión por entender cómo funcionan las cosas.</span> La IA me permite llevar esa mezcla mucho más lejos: explorar, prototipar y construir soluciones reales sin tener que elegir entre detalle y estructura, creatividad y negocio.
                  </p>
                </div>
              </div>

              {/* Sentinel invisible: marca dónde termina el bloque de
                  foto+texto. No tiene alto ni se ve — solo existe para que
                  el IntersectionObserver de arriba sepa cuándo la persona
                  ya scrolleó hasta acá y recién ahí arrancar el timer que
                  tira las fotos del collage. */}
              <div ref={collageStartSentinelRef} style={{height:'1px'}} />

              {/* Collage + texto de cierre: solo se montan cuando el panel
                  YA terminó de subir (aboutProgress >= 1). Mientras sube,
                  con overflow oculto, este bloque no se puede ver de todos
                  modos — pero re-renderizarlo en cada frame del rise (14
                  fotos/videos con estilos calculados) competía con la
                  animación de subida y la hacía verse entrecortada. Al no
                  montarlo hasta que el panel ya está arriba, la subida
                  queda libre para animar sola, suave y constante. */}
              {aboutProgress >= 1 && (
              <React.Fragment>
              {/* Collage automático tipo "las vas tirando en la mesa": cada
                  foto/video tiene un puesto fijo (collagePositions, en
                  orden de tiro) y se va SUMANDO a las anteriores — no
                  reemplaza a la de antes, todas se quedan puestas. No hay
                  efecto deslizante ni desvanecido suave: cada una aparece
                  de golpe ("tip, tip, tip"), ya en su lugar final, sin
                  animación de entrada. Al llegar a la última foto, con los
                  dos videos a los lados, da toda la vuelta: desaparecen
                  todas de golpe y empieza a tirarlas de nuevo desde la
                  primera. Centrado verticalmente en su propia pantalla. */}
              <div style={{minHeight:'72vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px 0'}}>
                <div style={{position:'relative', width:'820px', maxWidth:'94vw', height:'600px'}}>
                  {collageMedia.map((item, i) => {
                    const isPlaced = i <= collageIndex
                    const pos = collagePositions[i % collagePositions.length]
                    const cardStyle = isPlaced
                      ? {
                          transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.rot}deg)`,
                          opacity: 1,
                          zIndex: i + 1,
                          boxShadow: '0 18px 40px rgba(0,0,0,0.4)'
                        }
                      : {
                          transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.rot}deg)`,
                          opacity: 0,
                          zIndex: 0,
                          boxShadow: 'none'
                        }
                    const commonStyle = {
                      position:'absolute',
                      top:'50%',
                      left:'50%',
                      maxWidth:'380px',
                      maxHeight:'460px',
                      width:'auto',
                      height:'auto',
                      objectFit:'contain',
                      borderRadius:'20px',
                      transition:'opacity 0.05s linear',
                      ...cardStyle
                    }
                    if (item.type === 'video') {
                      // A diferencia de las fotos, el video va envuelto en un
                      // div que carga el transform/opacity/zIndex (en vez de
                      // ponérselo directo al <video>), para poder meterle
                      // adentro el icono de silenciar sin que se despegue de
                      // su tarjeta al moverse/rotar en el collage. El icono
                      // usa el MISMO estado compartido (collageMuted) que el
                      // otro video, así que silenciar cualquiera de los dos
                      // silencia también al que sigue en la secuencia.
                      return (
                        <div key={i} style={{
                          position:'absolute',
                          top:'50%',
                          left:'50%',
                          width:'fit-content',
                          height:'fit-content',
                          transition:'opacity 0.05s linear',
                          pointerEvents: isPlaced ? 'auto' : 'none',
                          ...cardStyle
                        }}>
                          <video
                            src={item.src}
                            playsInline
                            muted={collageMuted}
                            preload="auto"
                            onEnded={() => setCollageIndex(prev => (prev + 1) % collageMedia.length)}
                            ref={(el) => { collageVideoRefs.current[i] = el }}
                            style={{
                              display:'block',
                              maxWidth:'380px',
                              maxHeight:'460px',
                              width:'auto',
                              height:'auto',
                              objectFit:'contain',
                              borderRadius:'20px'
                            }}
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setCollageMuted(prev => {
                                const next = !prev
                                const currentEl = collageVideoRefs.current[collageIndex]
                                if (currentEl) currentEl.muted = next
                                return next
                              })
                            }}
                            aria-label={collageMuted ? 'Activar sonido' : 'Silenciar'}
                            style={{
                              position:'absolute',
                              bottom:'12px',
                              right:'12px',
                              background:'none',
                              border:'none',
                              padding:0,
                              margin:0,
                              cursor:'pointer',
                              color:'#F5F2EE',
                              filter:'drop-shadow(0 1px 3px rgba(0,0,0,0.7))',
                              display:'flex'
                            }}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
                              {collageMuted ? (
                                <React.Fragment>
                                  <line x1="16" y1="9" x2="21" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <line x1="21" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </React.Fragment>
                              ) : (
                                <React.Fragment>
                                  <path d="M16.5 8.5a5 5 0 0 1 0 7" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M19 6a9 9 0 0 1 0 12" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" />
                                </React.Fragment>
                              )}
                            </svg>
                          </button>
                        </div>
                      )
                    }
                    return (
                      <img
                        key={i}
                        src={item.src}
                        alt=""
                        style={commonStyle}
                      />
                    )
                  })}
                </div>
              </div>

              <div style={{display:'flex', justifyContent:'center', padding:'45px 80px 120px'}}>
                <div style={{display:'flex', flexDirection:'column', gap:'26px', maxWidth:'480px'}}>
                  <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:500, fontSize:'30px', lineHeight:1.3, letterSpacing:'-0.01em', color:'#F5F2EE', margin:0}}>
                    También sé hacer cosas que no son interfaces.
                  </p>
                  <div style={{display:'flex', flexDirection:'column', gap:'18px'}}>
                    <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:500, fontSize:'16px', lineHeight:1.65, color:'#F5F2EE', margin:0}}>
                      Por ejemplo:
                    </p>
                    <div style={{display:'flex', flexDirection:'column', gap:'6px'}}>
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                        &gt; Veo teatro.
                      </p>
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                        &gt; También hago.
                      </p>
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                        &gt; Viajo.
                      </p>
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                        &gt; Paso tiempo con (molesto a mi) perro.
                      </p>
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                        &gt; Hago fotos.
                      </p>
                      <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:300, fontSize:'16px', lineHeight:1.65, color:'rgba(245,242,238,0.7)', margin:0}}>
                        &gt; Desaparezco de internet por unas horas.
                      </p>
                    </div>
                    <p style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:500, fontSize:'16px', lineHeight:1.65, color:'#F5F2EE', margin:0}}>
                      No necesariamente en ese orden :)
                    </p>
                  </div>
                </div>
              </div>
              </React.Fragment>
              )}
            </div>
          )}
          </div>

          {/* Barra "> Conectemos/": hermana del wrapper con scroll (no
              descendiente), así que el overflow interno del texto/collage
              nunca la mueve. Antes usaba top:'100%' (borde de arriba fijo
              en el borde del panel, crecía hacia ABAJO sobre el video). Para
              agrandar la letra sin quitarle espacio al video, ahora se fija
              el borde de ABAJO con bottom:'-54px' (54px = lo que ya colgaba
              sobre el video antes de agrandar la letra, así que ese pedazo
              sobre el video se queda igual) y se deja el top libre: como el
              alto ahora es mayor (padding y letra más grandes), la barra
              crece hacia ARRIBA, mordiendo espacio del panel de Sobre mí en
              vez del video. Ese punto de referencia (borde de abajo del
              panel) es, cuando el peel ya completó, el mismo punto donde
              arranca el video (36vh, porque el video mide 64vh de alto).
              Como sigue siendo descendiente del panel, se mueve junto con
              todo él durante el peel. Ancho tipo nav de la Intro: no ocupa
              todo el ancho: pegada al borde izquierdo (left:0) y con el
              mismo ~2cm (80px) de aire respecto al borde derecho. Mismo
              estilo que la nav de la Intro: borde 1px sólido + sombra dura
              desplazada (2px 2px 0px), sin blur.
              OJO: la barra debe permanecer INVISIBLE hasta que
              conectemosProgress > 0 (antes de eso, ni rastro de ella —
              incluso recién arrancando a leer el texto de Sobre mí, mucho
              antes de llegar al final). Pero eso ahora se controla con
              opacity/pointerEvents en vez de con el montaje del <div> en
              sí: si el <div> completo entraba y salía del DOM justo en el
              instante en que conectemosProgress cruza 0 —el mismo instante
              en que el overflow interno del panel pasa de 'auto' a
              'hidden'—, el navegador tenía que montar y pintar por primera
              vez una caja nueva (con borde + sombra dura) exactamente en
              medio del scroll, y eso es lo que se sentía como que el
              scroll "se pegaba raro" justo cuando aparecía la barra. Ahora
              se monta desde que el panel termina de subir (mismo gate que
              el collage) pero con opacity:0 y pointerEvents:'none', así el
              navegador ya la tiene pintada de antemano y, al cruzar
              conectemosProgress > 0, solo cambia opacity — mucho más
              barato, sin tocar ni los umbrales del wheel handler, ni la
              tirilla, ni el layer del video. */}
          {aboutPhase === 'ticker' && aboutProgress >= 1 && (
            <div style={{
              position:'absolute',
              left:0,
              right:'80px',
              bottom:'-54px',
              display:'flex',
              alignItems:'center',
              justifyContent:'space-between',
              padding:'22px 40px',
              background:'#F5F2EE',
              border:'1px solid #1A1A1A',
              boxShadow:'2px 2px 0px #1A1A1A',
              gap:'24px',
              zIndex:20,
              opacity: conectemosProgress > 0 ? 1 : 0,
              pointerEvents: conectemosProgress > 0 ? 'auto' : 'none',
              willChange:'opacity'
            }}>
              <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'32px', color:'#1A1A1A', whiteSpace:'nowrap'}}>
                &gt; Conectemos/
              </span>
              <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:400, fontSize:'12px', letterSpacing:'0.04em', textTransform:'uppercase', color:'rgba(26,26,26,0.7)', textAlign:'right'}}>
                <span style={{fontSize:'17px', fontWeight:400, color:'rgba(26,26,26,0.85)', marginRight:'5px', verticalAlign:'-1px', display:'inline-block'}}>✳</span>BOGOTÁ &middot; COLOMBIA
              </span>
            </div>
          )}
        </div>
      )}

      {/* CONECTEMOS: fija debajo del panel negro de Sobre mí, se revela
          cuando ese panel se destapa hacia arriba (ver conectemosProgress).
          Solo se monta cuando Sobre mí ya subió del todo (aboutProgress>=1):
          si se montara desde antes, se vería por el hueco que deja el panel
          mientras sube desde Proyectos, tapando esa transición normal. */}
      {aboutProgress >= 1 && (
        <div style={{
          position:'fixed',
          top:0, left:0, width:'100vw', height:'100vh',
          background:'#000',
          zIndex:8000,
          overflow:'hidden'
        }}>
          {/* El video NO ocupa toda la pantalla: llega hasta un poco arriba
              de la mitad de la pantalla (no hasta el 78%), dejando la mitad
              de arriba en negro sólido (continuando el panel de Sobre mí). */}
          {/* La barra "> Conectemos/" NO va en este layer — vive dentro del
              panel negro de Sobre mí (al final de su contenido), para que
              esté pegada/sea parte de él y se mueva junto con el panel
              durante el peel, como se pidió. Ver el cierre del contenido de
              Sobre mí más abajo. */}
          <div style={{position:'absolute', bottom:0, left:0, width:'100%', height:'64%', overflow:'hidden'}}>
            <video
              src="/videos/conectemos-koi.mp4"
              autoPlay loop muted playsInline
              style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}
            />
            <div style={{position:'absolute', inset:0, background:'rgba(10,10,10,0.35)'}}/>
          </div>

          {/* El contenido (eyebrow + correo + footer) va ENCIMA DEL VIDEO,
              no de toda la pantalla: mismo cuadro que el video (bottom:0,
              height:64%), no un contenedor de 100vh centrado que termine
              quedando a medias en la franja negra de arriba. */}
          <div style={{position:'absolute', zIndex:1, bottom:0, left:0, width:'100%', height:'64%', display:'flex', flexDirection:'column'}}>
            {/* La barra ("> Conectemos/") ya NO va acá: ahora vive dentro del
                panel negro de Sobre mí (al final del todo), para que sea
                literalmente parte de ese panel y se destape/mueva junto con
                él, en vez de quedar pegada arriba de la pantalla como una
                segunda barra fija. Ver el cierre del contenido de Sobre mí. */}

            {/* contenido central */}
            <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 40px'}}>
              <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:400, fontSize:'18px', letterSpacing:'0.02em', textTransform:'none', color:'rgba(245,242,238,0.85)', marginBottom:'8px'}}>
                ¿Hablamos de un problema interesante?
              </span>
              <div style={{display:'flex', alignItems:'center', gap:'18px', flexWrap:'wrap'}}>
                <a href="mailto:anserrarg@gmail.com" style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:500, fontSize:'clamp(32px, 6vw, 72px)', color:'#F5F2EE', textDecoration:'none', wordBreak:'break-word'}}>
                  anserrarg@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  aria-label={emailCopied ? 'Correo copiado' : 'Copiar correo'}
                  title={emailCopied ? 'Copiado' : 'Copiar correo'}
                  style={{
                    background:'transparent',
                    border:'1px solid rgba(245,242,238,0.45)',
                    borderRadius:'50%',
                    width:'40px', height:'40px',
                    flexShrink:0,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    cursor:'pointer',
                    transition:'border-color 0.2s ease, background 0.2s ease'
                  }}
                >
                  {emailCopied ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#F5F2EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F2EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* footer */}
            <div style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'space-between',
              padding:'20px 40px',
              borderTop:'1px solid rgba(245,242,238,0.5)',
              flexShrink:0
            }}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'4px'}}>
                <a href="#" style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:400, fontSize:'13px', letterSpacing:'0.04em', textTransform:'uppercase', color:'#F5F2EE', textDecoration:'none'}}>
                  LinkedIn
                </a>
                <a href="#" style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:400, fontSize:'13px', letterSpacing:'0.04em', textTransform:'uppercase', color:'#F5F2EE', textDecoration:'none'}}>
                  CV
                </a>
              </div>
              <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'4px'}}>
                <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:400, fontSize:'13px', letterSpacing:'0.04em', textTransform:'uppercase', color:'#F5F2EE'}}>
                  &copy; Ana María Serrano
                </span>
                <span style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:400, fontSize:'11px', letterSpacing:'0.04em', textTransform:'uppercase', color:'rgba(245,242,238,0.6)'}}>
                  Hecho con demasiado cuidado
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{
        position:'fixed',
        top:'15%',
        right:'0',
        width:'900px',
        height:'800px',
        pointerEvents:'none',
        zIndex:0,
        maskImage:'radial-gradient(ellipse at 90% 40%, rgba(0,0,0,0.8) 0%, transparent 65%)',
        WebkitMaskImage:'radial-gradient(ellipse at 90% 40%, rgba(0,0,0,0.8) 0%, transparent 65%)'
      }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid2" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#1A1A1A" strokeWidth="0.4" opacity="0.85"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)"/>
        </svg>
      </div>

    </div>
  )
}
