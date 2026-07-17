import React from 'react'
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

export default function Home() {
  const [activeLink, setActiveLink] = React.useState('Intro')
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
  const [cursorPos, setCursorPos] = React.useState(null)
  const notesCompleteRef = React.useRef(false)
  const zoomProgressRef = React.useRef(0)
  const rafRef = React.useRef(null)
  const rewindRef = React.useRef(null)
  const proyectosRef = React.useRef(null)
  const notesRef = React.useRef(null)
  const endCursorRef = React.useRef(null)
  const projectsTypedRef = React.useRef(false)
  const typingIntervalRef = React.useRef(null)


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
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
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
        }
      }, 120)
      typingIntervalRef.current = interval
    }, 1500)
  }

  React.useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()

      if (phase === 'notes') {
        if (!notesCompleteRef.current) return
        setPhase('zooming')
        zoomProgressRef.current = 0
        setZoomProgress(0)
        return
      }

      if (phase === 'zooming') {
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

      if (phase === 'projects' && e.deltaY < 0) {
        if (typingIntervalRef.current) clearTimeout(typingIntervalRef.current)
        projectsTypedRef.current = false
        setProjectsText('')
        setShowCards(false)
        setShowSubtitle(false)
        zoomProgressRef.current = 1
        setZoomProgress(1)
        setPhase('zooming')
        return
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [phase])

  return (
    <div style={{background:'#F5F2EE', minHeight:'100vh', color:'#1A1A1A', fontFamily:'sans-serif', paddingTop:'200px'}}>

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
              fontFamily:"'Ranade', sans-serif",
              fontWeight:200,
              fontSize:'20px',
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
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#F5F2EE',
          zIndex: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingLeft: '80px',
          paddingTop: '120px',
          opacity: phase === 'projects' ? 1 : (zoomProgress - 0.8) / 0.2
        }}>
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '48px',
            color: '#1A1A1A',
            display: 'flex',
            alignItems: 'center'
          }}>
            {projectsText}
            {phase === 'projects' && (
              <span style={{
                display: 'inline-block',
                width: '2px',
                height: '56px',
                background: '#1A1A1A',
                marginLeft: '4px',
                animation: 'blink 1s step-end infinite'
              }}/>
            )}
          </div>
          <h3 style={{
            fontFamily:"'Ranade', sans-serif",
            fontWeight:200,
            fontSize:'20px',
            color:'#1A1A1A',
            marginTop:'16px',
            opacity: showSubtitle ? 1 : 0,
            transform: showSubtitle ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}>
            Donde las notas terminan convirtiéndose en producto.
          </h3>
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

        <h3 style={{fontFamily:"'Ranade', sans-serif", fontWeight:200, fontSize:'20px', color:'#1A1A1A', marginTop:'0', marginBottom:'0'}}>
          Donde las notas terminan convirtiéndose en producto.
        </h3>
      </section>


    </div>
  )
}
