import React from 'react'
import { ArrowDown, Building2, Phone, Handshake, User, Settings2 } from 'lucide-react'
import anaPhoto from '../assets/ana.png'
import theavelingPhoto from '../assets/theaveling.png'
import pipelinePhoto from '../assets/pipeline.png'
import logoPhoto from '../assets/logo.png'
import mobilePhoto from '../assets/mobile.png'
import mobilePhoto2 from '../assets/mobile2.png'
import mobileTheaveling from '../assets/mobiletheaveling.png'
import logoThea from '../assets/logothea.png'
import telonDerecho from '../assets/telonderecho.png'
import telonIzquierdo from '../assets/telonizquierdo.png'
import beaconMockup from '../assets/mockup-beacon.png'
import capturePipeline from '../assets/capture-pipeline.png'
import cardBeacon from '../assets/card-beacon.png'
import cardTheaveling from '../assets/card-theaveling.png'

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
          color: '#1A1A1A',
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
      color: frames[frame]?.color || 'inherit',
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
    '// Research notes:',
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

function VerProductoBtn({ texto = 'Ver producto' }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
        width: hovered ? '145px' : '130px',
        overflow: 'hidden',
        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: '#F5F2EE',
        justifyContent: 'center'
      }}>
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

function ProjectTransition({ color, onClose, projectName, projectColor }) {
  const [progress, setProgress] = React.useState(0)
  const [showRightContent, setShowRightContent] = React.useState(false)
  const [closing, setClosing] = React.useState(false)
  const [closeProgress, setCloseProgress] = React.useState(0)

  React.useEffect(() => {
    let start = null
    const duration = 800
    const animate = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const p = Math.min(1, elapsed / duration)
      setProgress(p)
      if (p >= 1) setShowRightContent(true)
      if (p < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [])

  return (
    <>
      <div className="left-panel" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: closing ? `${(1 - closeProgress) * 63}vw` : `${progress * 63}vw`,
        height: '100vh',
        background: color,
        zIndex: 9999,
        transition: 'none',
        overflowY: 'auto',
        overflowX: 'hidden'
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
          }}>
            {projectName}
          </p>
          {projectName === 'Beacon' && (
            <>
              <div style={{position: 'relative'}}>
                <p style={{
                  fontFamily: "'Satoshi', sans-serif",
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
                maxWidth: `${progress * 63}vw`,
                textAlign: 'center',
                zIndex: 10000
              }}>
                <p style={{
                  fontFamily:"'DM Sans', sans-serif",
                  fontWeight:300,
                  fontSize:'22px',
                  color:'rgba(255,255,255,0.5)',
                  textAlign:'left',
                  lineHeight:1.5
                }}>
                  Antes de enseñarte lo que hice...<br/>
                  déjame mostrarte el mundo que tuve que entender.
                </p>
                <ArrowDown size={72} color="#B0FF92" strokeWidth={1.5} style={{animation:'bounceArrow 2s ease-in-out infinite', flexShrink:0, transform:'rotate(-90deg)'}}/>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                marginTop: '32px',
                paddingLeft: '8px',
                width: '90%',
                maxWidth: '70%',
                textAlign: 'justify'
              }}>
                <span style={{color:'#B0FF92'}}>Beacon no nació porque alguien pidiera una herramienta. </span><span style={{color:'rgba(255,255,255,0.5)'}}>Nació porque distintas personas describían el mismo problema desde perspectivas diferentes.</span><br/>
                <br/>
                <span style={{color:'rgba(255,255,255,0.5)'}}>Cada entrevista iluminó una pieza distinta.</span> <span style={{color:'#B0FF92'}}>Mi trabajo fue unirlas.</span>
              </p>
              <div style={{marginTop:'30px', paddingLeft:'8px'}}>
                <div style={{
                  display:'flex',
                  alignItems:'flex-start',
                  gap:'8px',
                  marginTop:'100px',
                  marginBottom:'60px',
                  justifyContent:'center',
                  width: `${progress * 63}vw`
                }}>
                  {[
                    { label:'Vendor', icon: <Building2 size={32} color="#7B58F8" strokeWidth={1}/>, color: 'rgba(255,255,255,0.5)' },
                    { label:'Asesor', icon: <Phone size={32} color="#7B58F8" strokeWidth={1}/>, color: 'rgba(255,255,255,0.5)' },
                    { label:'CAM', icon: <Settings2 size={32} color="#B0FF92" strokeWidth={1}/>, color: '#B0FF92', highlight: true },
                    { label:'Partners', icon: <Handshake size={32} color="#7B58F8" strokeWidth={1}/>, color: 'rgba(255,255,255,0.5)' },
                    { label:'Cliente', icon: <User size={32} color="#7B58F8" strokeWidth={1}/>, color: 'rgba(255,255,255,0.5)' }
                  ].map((item, i) => (
                    <React.Fragment key={i}>
                      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px'}}>
                        {item.icon}
                        <span style={{fontFamily:"'DM Sans', sans-serif", fontWeight: item.color === '#B0FF92' ? 700 : 300, fontSize:'20px', color: item.color}}>{item.label}</span>
                      </div>
                      {i < 4 && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" style={{marginTop:'12px'}}>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p style={{
                  fontFamily:"'DM Sans', sans-serif",
                  fontWeight:300,
                  fontSize:'14px',
                  color:'rgba(255,255,255,0.5)',
                  lineHeight:1.6,
                  width:'90%',
                  marginTop:'24px',
                  maxWidth: '70%',
                  textAlign: 'justify'
                }}>
                  <span style={{fontWeight:700, fontSize:'30px', color:'#F5F7F7'}}>CAM: </span>
                  Channel Account Manager, un rol estratégico que escala las ventas indirectas potenciando a la red de distribuidores, revendedores y aliados de negocio.
                </p>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                  <p style={{
                    fontFamily:"'DM Sans', sans-serif",
                    fontWeight:700,
                    fontSize:'30px',
                    color:'#F5F7F7',
                    marginTop:'40px',
                    textAlign:'center',
                    width:'80%'
                  }}>PROBLEMA:</p>
                  <p style={{
                    fontFamily:"'DM Sans', sans-serif",
                    fontWeight:300,
                    fontSize:'16px',
                    color:'rgba(255,255,255,0.5)',
                    textAlign:'center',
                    marginTop:'40px',
                    width:'80%'
                  }}>
                    En ecosistemas de venta por canal B2B, una vez que una oportunidad pasa al partner, el CAM pierde visibilidad sobre su estado real. No sabe si el partner la está trabajando, si está bloqueada o si ya se cerró. Para saberlo, tiene que salir a buscar esa información entre múltiples herramientas y conversaciones, un proceso manual que consume tiempo y que no siempre da una respuesta clara.
                  </p>
                </div>
                <p style={{
                  fontFamily:"'DM Sans', sans-serif",
                  fontWeight:300,
                  fontSize:'14px',
                  color:'rgba(255,255,255,0.5)',
                  textAlign:'justify',
                  marginTop:'40px',
                  width:'60%'
                }}>
                  Ellos ya sabían hacer seguimiento pero las herramientas los obligaban a ir a buscar lo que debería llegar solo.
                </p>
                <p style={{
                  fontFamily:"'DM Sans', sans-serif",
                  fontWeight:300,
                  fontSize:'14px',
                  color:'#B0FF92',
                  marginTop:'4px',
                  width:'60%'
                }}>
                  Los usuarios no querían más seguimiento, querían recuperar la visibilidad.
                </p>
              </div>
            </>
          )}
          {projectName === 'Theaveling' && (
            <p style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 300,
              fontSize: '48px',
              color: '#F5F2EE',
              marginTop: '8px',
              paddingLeft: '8px'
            }}>
              Arte local, donde sea que estés.
            </p>
          )}
        </div>
      </div>
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: closing ? `${(1 - closeProgress) * 37}vw` : `${100 - progress * 63}vw`,
        height: '100vh',
        background: '#F5F2EE',
        zIndex: 9999,
        transition: 'none'
      }}>
        <div style={{overflow:'hidden'}}>
          <p style={{
            position: 'absolute',
            top: '0',
            left: '20px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: '90px',
            color: '#1A1A1A',
            lineHeight: 1,
            transform: closing ? 'translateY(-100%)' : showRightContent ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: closing ? (1 - closeProgress) : 1,
            transitionProperty: 'opacity, transform'
          }}>
            {projectName}
          </p>
        </div>
        <div style={{
          position: 'absolute',
          top: '120px',
          left: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          marginTop: '8px'
        }}>
          {(projectName === 'Beacon' ?
            ['Channel Sales', 'B2B', 'Pipeline', 'Partners', 'Visibilidad'] :
            ['Arte', 'Teatro', 'Viaje', 'Cultura', 'Conexión humana']
          ).map((tag, i) => (
            <div key={i} style={{overflow:'hidden'}}>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                color: '#1A1A1A',
                lineHeight: 1.2,
                overflow: 'hidden',
                transform: closing ? 'translateY(-100%)' : showRightContent ? 'translateY(0)' : 'translateY(-100%)',
                transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 60}ms`
              }}>
                {tag}
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

  React.useEffect(() => {
    const sections = ['intro', 'proyectos', 'sobre-mi', 'contacto']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveLink(id === 'intro' ? 'Intro' : 'Proyectos')
          }
        },
        { threshold: 0.5 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const typeProjectsText = () => {
    if (typingIntervalRef.current) {
      clearTimeout(typingIntervalRef.current)
      typingIntervalRef.current = null
    }
    setTimeout(() => {
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
          setTimeout(() => setShowBeaconCard(true), 4000)
          setTimeout(() => setShowTheaCard(true), 4300)
          setTimeout(() => setShowBeaconName(true), 4900)
          setTimeout(() => setShowTheaName(true), 5200)
          setTimeout(() => setShowBeaconT(true), 5600)
          setTimeout(() => setShowTheaT(true), 5900)
          setTimeout(() => setShowBeaconInfo(true), 1100)
          setTimeout(() => setShowTheaInfo(true), 1400)
        }
      }, 120)
      typingIntervalRef.current = interval
    }, 1500)
  }

  React.useEffect(() => {
    const handleWheel = (e) => {
      if (phase === 'projects' && showBeaconT) {
        return
      }

      if (phase === 'notes') {
        if (!notesCompleteRef.current) return
        e.preventDefault()
        setPhase('zooming')
        zoomProgressRef.current = 0
        setZoomProgress(0)
        return
      }

      if (phase === 'zooming') {
        e.preventDefault()
        const delta = e.deltaY > 0 ? 0.05 : -0.05
        const next = Math.max(0, Math.min(1, zoomProgressRef.current + delta))
        zoomProgressRef.current = next
        setZoomProgress(next)
        if (next >= 1) {
          setPhase('projects')
          if (!projectsTypedRef.current) {
            projectsTypedRef.current = true
            typeProjectsText()
          }
        } else if (next <= 0) {
          setPhase('notes')
        }
        return
      }

      if (phase === 'projects' && !showBeaconCard && e.deltaY > 0) {
        e.preventDefault()
        return
      }

      if (phase === 'projects' && e.deltaY < 0) {
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
          const rewind = () => {
            zoomProgressRef.current = Math.max(0, zoomProgressRef.current - 0.02)
            setZoomProgress(zoomProgressRef.current)
            if (zoomProgressRef.current > 0) {
              requestAnimationFrame(rewind)
            } else {
              setPhase('notes')
              wheelLockRef.current = false
            }
          }
          requestAnimationFrame(rewind)
        }, 1800)
        return
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [phase])

  return (
    <div style={{background:'#F5F2EE', minHeight:'100vh', color:'#1A1A1A', fontFamily:'sans-serif', paddingTop:'200px', overflowY: phase === 'projects' ? 'auto' : 'hidden', height: phase === 'projects' ? 'auto' : '100vh'}}>

      {/* NAVBAR */}
      <div style={{
        position: 'fixed',
        top: '40px',
        left: '80px',
        right: '80px',
        transform: 'none',
        width: 'calc(100% - 160px)',
        display: 'flex',
        gap: '0',
        zIndex: 100,
        justifyContent: scrolled ? 'flex-end' : 'space-between',
        border: scrolled ? 'none' : '1px solid #1A1A1A',
        boxShadow: scrolled ? 'none' : '2px 2px 0px #1A1A1A',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          borderRight: '1px solid #1A1A1A',
          padding: '8px 16px',
          display: scrolled ? 'none' : 'flex',
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
          {['Intro', 'Proyectos'].map((link, i) => (
            <a key={link} href={`#${link}`} className="nav-link" onClick={() => setActiveLink(link)} style={{
              padding: '8px 16px',
              borderLeft: i === 0 ? 'none' : '1px solid #1A1A1A',
              display: 'flex',
              alignItems: 'center',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              background: activeLink === link ? '#1A1A1A' : 'transparent',
              color: activeLink === link ? '#F5F2EE' : '#1A1A1A',
              textDecoration: 'none'
            }}>
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section id="intro" style={{
        padding:'120px 0 120px 0',
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        gap:'80px',
        transform: phase === 'zooming' || phase === 'projects' || phase === 'rewinding'
          ? `scale(${1 + zoomProgress * 6})`
          : 'scale(1)',
        transition: 'none',
        transformOrigin: cursorPos
          ? `${cursorPos.x}px ${cursorPos.y}px`
          : 'center center'
      }}>
        <div style={{flex:1, marginTop:'20px', opacity: phase === 'zooming' ? Math.max(0, 1 - zoomProgress * 2) : phase === 'projects' ? 0 : 1}}>
          <div style={{position:'relative', display:'inline-block'}}>
            <span style={{
              position:'absolute',
              top:'-24px',
              right:'0',
              fontSize:'13px',
              letterSpacing:'0.05em',
              textTransform:'uppercase',
              color:'#1A1A1A',
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
              maxWidth:'800px',
              minHeight:'120px'
            }}>
              Hola soy Ana, y nunca doy por terminada una interfaz hasta que incluso el <span style={{
                outline: 'none',
                position: 'relative',
                padding: '2px 8px',
                display: 'inline-block'
              }}>
                <span style={{position:'absolute', top:0, left:0, width:'8px', height:'8px', borderTop:'1px solid #555', borderLeft:'1px solid #555', transition: 'border-radius 0.8s ease', borderRadius: brRounded ? '4px 0 0 0' : '0'}}/>
                <span style={{position:'absolute', top:0, right:0, width:'8px', height:'8px', borderTop:'1px solid #555', borderRight:'1px solid #555', transition: 'border-radius 0.8s ease', borderRadius: brRounded ? '0 4px 0 0' : '0'}}/>
                <span style={{position:'absolute', bottom:0, left:0, width:'8px', height:'8px', borderBottom:'1px solid #555', borderLeft:'1px solid #555', transition: 'border-radius 0.8s ease', borderRadius: brRounded ? '0 0 0 4px' : '0'}}/>
                <span style={{position:'absolute', bottom:0, right:0, width:'8px', height:'8px', borderBottom:'1px solid #555', borderRight:'1px solid #555', transition: 'border-radius 0.8s ease', borderRadius: brRounded ? '0 0 4px 0' : '0'}}/>
                border radius
              </span> tenga{' '}<span style={{display:'inline-block', minWidth:'7ch', fontFamily:'inherit', fontSize:'inherit', fontWeight:'inherit'}}><SentidoAnimation /></span>
            </h1>
            <h3 style={{
              fontFamily:"'Plus Jakarta Sans', sans-serif",
              fontWeight:200,
              fontSize:'30px',
              color:'#1A1A1A',
              marginTop:'16px',
              marginBottom:'24px'
            }}>
              Porque cada detalle influye en la forma en que las personas entienden, perciben y confían en un producto.
            </h3>
            <TypingText text={`// Research notes:\n> buscando sentido antes de diseñar soluciones.`} speed={40} />
          </div>
        </div>
        <div style={{flex:1, paddingTop:'0', marginTop:'-180px', position:'relative', opacity: phase === 'zooming' ? Math.max(0, 1 - zoomProgress * 1.5) : phase === 'projects' ? 0 : 1}}>
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
        <div className="projects-overlay" style={{
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
          overflowY:'scroll',
          touchAction:'pan-y'
        }}>
          <div style={{
            transform: showBeaconCard ? 'translateY(-100px)' : 'translateY(0)',
            opacity: showBeaconCard ? 0 : 1,
            transition: 'transform 0.8s ease, opacity 0.8s ease',
            paddingTop: '40px'
          }}>
            <div style={{display:'flex', alignItems:'center', fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:700, fontSize:'48px', color:'#1A1A1A'}}>
              {projectsText}
              <span style={{display:'inline-block', width: zoomProgress >= 1 ? '3px' : '1px', height: zoomProgress >= 1 ? '48px' : '13px', background:'#1A1A1A', marginLeft:'4px', animation:'blink 1s step-end infinite', transition:'width 0.4s ease, height 0.4s ease'}}/>
            </div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:200, fontSize:'30px', color:'#1A1A1A', marginTop:'16px', opacity: showSubtitle ? 1 : 0, transform: showSubtitle ? 'translateX(0)' : 'translateX(-30px)', transition:'opacity 0.8s ease, transform 0.8s ease'}}>
              Donde las notas terminan convirtiéndose en producto.
            </h3>
          </div>

          <div style={{display:'flex', gap:'40px', position:'absolute', top:'12px', left:'80px', right:'80px'}}>
            <div style={{flex:1, opacity: showBeaconCard ? 1 : 0, transform: showBeaconCard ? 'translateY(0)' : 'translateY(100vh)', transition:'opacity 0.8s ease, transform 0.8s ease', position:'relative', alignSelf:'stretch', height:'70vh'}} onMouseEnter={() => {
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
              <p style={{fontFamily:"'Satoshi', sans-serif", fontWeight:700, fontSize:'48px', color:'#1A1A1A', marginTop:'12px', marginLeft:'20px', opacity: showBeaconName ? 1 : 0, transform: showBeaconName ? 'translateX(0)' : 'translateX(-100px)', transition:'opacity 0.6s ease, transform 0.6s ease'}}>Beacon</p>
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
            <div style={{flex:1, opacity: showTheaCard ? 1 : 0, transform: showTheaCard ? 'translateY(0)' : 'translateY(100vh)', transition:'opacity 0.8s ease, transform 0.8s ease', paddingLeft:'40px', position:'relative', height:'70vh'}} onMouseEnter={() => {
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
              <p style={{fontFamily:"'Sansita', sans-serif", fontWeight:700, fontSize:'48px', color:'#F31006', marginTop:'12px', marginLeft:'20px', opacity: showTheaName ? 1 : 0, transform: showTheaName ? 'translateX(0)' : 'translateX(100px)', transition:'opacity 0.6s ease, transform 0.6s ease'}}>Theaveling</p>
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
                    Theaveling es una app móvil que diseñé para ayudar a viajeros amantes del arte a descubrir experiencias culturales con una perspectiva más local y humana, conectando con personas que asistirán al mismo evento y explorando una ciudad más allá de sus rutas turísticas. Encuentra experiencias artísticas relevantes en pocos minutos y descubre una ciudad desde una perspectiva más local.
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
        </div>
      )}

      {/* PROYECTOS */}
      <section id="proyectos" style={{padding:'80px 80px 0 80px', borderTop:'1px solid rgba(0,0,0,0.08)', display: phase === 'notes' ? 'block' : 'none'}}>
        <div ref={proyectosRef} style={{position:'relative', height:'70px', marginBottom:'0'}}>
          <div style={{
            position:'absolute',
            left: proyectosVisible ? '110px' : '-300px',
            transition:'left 0.5s cubic-bezier(0.16,1,0.3,1)',
            border:'1px solid #1A1A1A',
            padding:'8px 20px',
            fontFamily:"'Plus Jakarta Sans', sans-serif",
            fontSize:'42px',
            fontWeight:700,
            color:'#1A1A1A',
            background:'#F5F2EE',
            zIndex:1
          }}>
            proyectos
          </div>
          <div style={{
            position:'absolute',
            left: misVisible ? '0' : '-300px',
            transition:'left 0.6s cubic-bezier(0.16,1,0.3,1), border-radius 0.4s ease',
            border:'1px solid #1A1A1A',
            borderRadius: misRounded ? '20px' : '0px',
            padding:'8px 20px',
            fontFamily:"'Plus Jakarta Sans', sans-serif",
            fontSize:'42px',
            fontWeight:700,
            color:'#1A1A1A',
            background:'#F5F2EE',
            zIndex:2
          }}>
            Mis
          </div>
        </div>

        <h3 style={{fontFamily:"'Plus Jakarta Sans', sans-serif", fontWeight:200, fontSize:'30px', color:'#1A1A1A', marginTop:'0', marginBottom:'0'}}>
          Donde las notas terminan convirtiéndose en producto.
        </h3>
      </section>

      {projectTransition && (
        <ProjectTransition
          color={projectTransition === 'beacon' ? '#121716' : '#112C2C'}
          projectName={projectTransition === 'beacon' ? 'Beacon' : 'Theaveling'}
          projectColor={projectTransition === 'beacon' ? '#121716' : '#112C2C'}
          onClose={() => {
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
    </div>
  )
}
