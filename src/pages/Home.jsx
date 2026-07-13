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
import processBea1 from '../assets/process-beacon-1.png'
import processBea2 from '../assets/process-beacon-2.png'
import processThea1 from '../assets/process-thea-1.png'
import processThea2 from '../assets/process-thea-2.png'

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

function SequentialTyping() {
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
    '> Fricción en las entrevistas: Primera pregunta demasiado abierta / Falta de historias concretas / La pregunta de automatización no tuvo respuesta.'
  ]

  const [visibleLines, setVisibleLines] = React.useState([])
  const [currentLine, setCurrentLine] = React.useState(0)
  const [currentChar, setCurrentChar] = React.useState(0)
  const [done, setDone] = React.useState(false)

  React.useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true)
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
    <div style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'13px', color:'#1A1A1A', fontWeight:300, lineHeight:1.8}}>
      {visibleLines.map((line, i) => (
        <p key={i} style={{margin:'2px 0', minHeight:'20px'}}>
          {line}
          {i === visibleLines.length - 1 && !done && (
            <span style={{
              display:'inline-block',
              width:'2px',
              height:'13px',
              background:'#888',
              marginLeft:'2px',
              animation:'blink 1s step-end infinite'
            }}/>
          )}
        </p>
      ))}
      {done && (
        <span style={{
          display:'inline-block',
          width:'2px',
          height:'13px',
          background:'#888',
          marginLeft:'2px',
          animation:'blink 1s step-end infinite'
        }}/>
      )}
    </div>
  )
}

export default function Home() {
  const [activeLink, setActiveLink] = React.useState('Intro')
  const [scrolled, setScrolled] = React.useState(false)
  const [brRounded, setBrRounded] = React.useState(false)
  const [proyectosVisible, setProyectosVisible] = React.useState(false)
  const [misVisible, setMisVisible] = React.useState(false)
  const [misRounded, setMisRounded] = React.useState(true)
  const proyectosRef = React.useRef(null)
  const [stackScroll, setStackScroll] = React.useState(0)
  const [note1Text, setNote1Text] = React.useState('')
  const [note2Text, setNote2Text] = React.useState('')
  const [image1Settled, setImage1Settled] = React.useState(false)
  const [image2Settled, setImage2Settled] = React.useState(false)
  const [noteThea1Text, setNoteThea1Text] = React.useState('')
  const [noteThea2Text, setNoteThea2Text] = React.useState('')
  const [image3Settled, setImage3Settled] = React.useState(false)
  const [image4Settled, setImage4Settled] = React.useState(false)
  const [cardsVisible, setCardsVisible] = React.useState(false)
  const [cardsExpanded, setCardsExpanded] = React.useState(false)
  const stackRef = React.useRef(null)

  const NOTE1_STATIC = '> ¿Por qué una venta puede desaparecer entre dos equipos que trabajan por el mismo objetivo? Trabajar con una red de partners significa convivir con decenas de oportunidades abiertas al mismo tiempo. Saber cuál necesita tu atención no siempre es evidente.'
  const NOTE1_TYPING = '\n\n> Comprender este ecosistema de partners fue mucho más complejo que construir la interfaz.\n\n> No querían más seguimiento, querían más visibilidad. Fue el insight que cambió todo el producto.'
  const NOTE1 = NOTE1_STATIC + NOTE1_TYPING
  const NOTE2 = '> No querían más seguimiento, querían más visibilidad. Fue el insight que cambió todo el producto.'
  const NOTE_THEA1_STATIC = '// insight:\n"Me encanta todo lo que tiene que ver con arte y me atrae la cultura de los países a los que viajo"'
  const NOTE_THEA1_TYPING = '\n\n> "Cuando llegué a vivir a este país,\ndejé de recorrer la ciudad como turista."\n\n> "Me aburren los planes comunes. Si voy a otro país, voy a ver qué hacen o ven realmente"\n\n> "Descubrí que las mejores experiencias llegaban de recomendaciones de personas."\n\nNota: Theaveling nació de esa diferencia.'
  const NOTE_THEA1 = NOTE_THEA1_STATIC + NOTE_THEA1_TYPING
  const NOTE_THEA2 = '> "Descubrí que las mejores experiencias llegaban de recomendaciones de personas."\n\nNota: Theaveling nació de esa diferencia.'

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
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
    const handleScroll = () => {
      if (!stackRef.current) return
      const rect = stackRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
      setStackScroll(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    if (stackScroll < 0.02) {
      setImage1Settled(false)
      setImage2Settled(false)
      setNote1Text('')
      setNote2Text('')
    }
    if (stackScroll < 0.2) {
      setImage2Settled(false)
      setNote2Text('')
    }
    if (stackScroll < 0.45) {
      setImage3Settled(false)
      setNoteThea1Text('')
    }
    if (stackScroll < 0.68) {
      setImage4Settled(false)
      setNoteThea2Text('')
    }
    if (stackScroll >= 0.02 && !image1Settled) {
      setImage1Settled(true)
    }
    if (stackScroll >= 0.3 && !image2Settled) {
      setImage2Settled(true)
    }
    if (stackScroll >= 0.7 && !image3Settled) {
      setImage3Settled(true)
    }
    if (stackScroll >= 0.78 && !image4Settled) {
      setImage4Settled(true)
    }
    if (stackScroll >= 0.9 && !cardsVisible) {
      setCardsVisible(true)
    }
    if (stackScroll < 0.8) {
      setCardsVisible(false)
    }
    if (stackScroll >= 0.88) setCardsExpanded(true)
    else setCardsExpanded(false)
  }, [stackScroll])

  React.useEffect(() => {
    if (!image1Settled) return
    setNote1Text('')
    const timer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i < NOTE1_TYPING.length) {
          setNote1Text(prev => NOTE1_TYPING.slice(0, i + 1))
          i++
        } else clearInterval(interval)
      }, 25)
      return () => clearInterval(interval)
    }, 2500)
    return () => clearTimeout(timer)
  }, [image1Settled])

  React.useEffect(() => {
    if (!image2Settled) return
    setNote2Text('')
    let i = 0
    const interval = setInterval(() => {
      if (i < NOTE2.length) {
        setNote2Text(NOTE2.slice(0, i + 1))
        i++
      } else clearInterval(interval)
    }, 25)
    return () => clearInterval(interval)
  }, [image2Settled])

  React.useEffect(() => {
    if (!image3Settled) return
    setNoteThea1Text('')
    const timer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i < NOTE_THEA1_TYPING.length) {
          setNoteThea1Text(NOTE_THEA1_TYPING.slice(0, i + 1))
          i++
        } else clearInterval(interval)
      }, 20)
      return () => clearInterval(interval)
    }, 1500)
    return () => clearTimeout(timer)
  }, [image3Settled])

  React.useEffect(() => {
    if (!image4Settled) return
    setNoteThea2Text('')
    let i = 0
    const interval = setInterval(() => {
      if (i < NOTE_THEA2.length) {
        setNoteThea2Text(NOTE_THEA2.slice(0, i + 1))
        i++
      } else clearInterval(interval)
    }, 25)
    return () => clearInterval(interval)
  }, [image4Settled])

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
          <span style={{fontFamily:"'Instrument Sans', sans-serif", fontWeight:300, fontSize:'20px', color:'#1A1A1A', lineHeight:1.3}}>Ana María</span>
          <span style={{fontFamily:"'Instrument Sans', sans-serif", fontWeight:300, fontSize:'20px', color:'#1A1A1A', lineHeight:1.3}}>Serrano</span>
        </div>
        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'stretch',
          background: '#F5F2EE'
        }}>
          {['Intro', 'Proyectos', 'Sobre mí', 'Contáctame'].map((link, i) => (
            <a key={link} href={`#${link}`} className="nav-link" onClick={() => setActiveLink(link)} style={{
              padding: '8px 16px',
              borderLeft: i === 0 ? 'none' : '1px solid #1A1A1A',
              display: 'flex',
              alignItems: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
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
      <section style={{
        padding:'120px 0 120px 0',
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        gap:'80px'
      }}>
        <div style={{flex:1, marginTop:'20px'}}>
          <div style={{position:'relative', display:'inline-block'}}>
            <span style={{
              position:'absolute',
              top:'-24px',
              right:'0',
              fontSize:'13px',
              letterSpacing:'0.05em',
              textTransform:'uppercase',
              color:'#1A1A1A',
              fontFamily:"'Instrument Sans', sans-serif",
              fontWeight:300
            }}>
              <span style={{fontSize:'20px', fontWeight:300, marginRight:'4px'}}>✳</span>Product Designer
            </span>
            <h1 style={{
              fontSize:'42px',
              fontWeight:700,
              lineHeight:1.1,
              letterSpacing:'-0.01em',
              fontFamily:"'Instrument Sans', sans-serif",
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
              fontFamily:"'Instrument Sans', sans-serif",
              fontWeight:300,
              fontSize:'24px',
              color:'#1A1A1A',
              marginTop:'16px',
              marginBottom:'24px'
            }}>
              Porque cada detalle influye en la forma en que las personas entienden, perciben y confían en un producto.
            </h3>
            <TypingText text={`// Research notes:\n> buscando sentido antes de diseñar soluciones.`} speed={40} />
          </div>
        </div>
        <div style={{flex:1, paddingTop:'0', marginTop: '-180px'}}>
          <SequentialTyping />
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" style={{padding:'80px 80px 0 80px', borderTop:'1px solid rgba(0,0,0,0.08)'}}>
        <div ref={proyectosRef} style={{position:'relative', height:'70px', marginBottom:'0'}}>
          <div style={{
            position:'absolute',
            left: proyectosVisible ? '110px' : '-300px',
            transition:'left 0.5s cubic-bezier(0.16,1,0.3,1)',
            border:'1px solid #1A1A1A',
            padding:'8px 20px',
            fontFamily:"'Instrument Sans', sans-serif",
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
            fontFamily:"'Instrument Sans', sans-serif",
            fontSize:'42px',
            fontWeight:700,
            color:'#1A1A1A',
            background:'#F5F2EE',
            zIndex:2
          }}>
            Mis
          </div>
        </div>

        <h3 style={{fontFamily:"'Instrument Sans', sans-serif", fontWeight:300, fontSize:'24px', color:'#1A1A1A', marginTop:'0', marginBottom:'0'}}>
          Donde las notas terminan convirtiéndose en producto.
        </h3>

        {/* STACK SCROLL SECTION */}
        <div ref={stackRef} style={{height:'400vh', position:'relative', marginBottom:'0', marginTop:'0', marginLeft:'-80px', marginRight:'-80px'}}>
          <div style={{
            position:'sticky',
            top:'0',
            height:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent: cardsExpanded ? 'center' : 'center',
            overflow:'hidden'
          }}>
            {/* Left: text notes */}
            <div style={{
              position:'absolute',
              right: image3Settled ? '100px' : 'auto',
              left: image3Settled ? 'auto' : '0',
              top:'80px',
              width:'340px',
              zIndex:2,
              display: cardsExpanded ? 'none' : 'block'
            }}>
              <p style={{
                fontFamily:"'IBM Plex Mono', monospace",
                fontWeight:300,
                fontSize:'14px',
                color:'#1A1A1A',
                lineHeight:1.7,
                whiteSpace:'pre-wrap'
              }}>
                {image3Settled
                  ? NOTE_THEA1_STATIC + noteThea1Text + (noteThea1Text.length < NOTE_THEA1_TYPING.length ? '|' : '')
                  : NOTE1_STATIC + note1Text + (note1Text.length < NOTE1_TYPING.length ? '|' : '')
                }
              </p>
            </div>

            {/* Right: stacked images */}
            <div style={{
              position:'relative',
              width: cardsExpanded ? '1100px' : '580px',
              height: cardsExpanded ? '400px' : '80vh',
              flexShrink:0,
              transition:'all 0.7s ease'
            }}>
              <div style={{
                position:'absolute',
                top:0,
                left: cardsExpanded ? '-60px' : '0',
                width: cardsExpanded ? '420px' : '100%',
                height: cardsExpanded ? '400px' : '100%',
                borderRadius:'12px',
                overflow:'hidden',
                transition:'all 0.7s ease',
                zIndex:1
              }}>
                <img src={processBea1} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              </div>

              <div style={{
                position:'absolute',
                top:0,
                left: cardsExpanded ? '680px' : '0',
                width: cardsExpanded ? '420px' : '100%',
                height: cardsExpanded ? '400px' : '100%',
                borderRadius:'12px',
                overflow:'hidden',
                transition:'left 0.7s ease, width 0.7s ease, height 0.7s ease',
                zIndex: cardsExpanded ? 1 : 3,
                transform: cardsExpanded ? 'none' : `translateY(${Math.max(0,(1-Math.max(0,(stackScroll-0.55)/0.35))*100)}vh)`
              }}>
                <img src={processThea1} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display:'flex',
          gap:'40px',
          justifyContent:'center',
          marginTop:'80px',
          opacity: cardsVisible ? 1 : 0,
          transform: cardsVisible ? 'translateY(0)' : 'translateY(40px)',
          transition:'opacity 0.6s ease, transform 0.6s ease'
        }}>
          {/* Beacon card */}
          <div style={{width:'340px', display:'flex', flexDirection:'column', gap:'16px'}}>
            <img src={processBea1} style={{width:'100%', height:'240px', objectFit:'cover', borderRadius:'8px', display:'block'}}/>
            <p style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'12px', fontWeight:300, color:'#888'}}>Product Designer</p>
            <p style={{fontFamily:"'Instrument Sans', sans-serif", fontSize:'14px', fontWeight:300, color:'#1A1A1A', lineHeight:1.7}}>
              Beacon es una herramienta web que diseñé desde cero con IA para ayudar a equipos B2B a no perder de vista oportunidades de hasta USD 400.000 anuales.
            </p>
          </div>

          {/* Theaveling card */}
          <div style={{width:'340px', display:'flex', flexDirection:'column', gap:'16px'}}>
            <img src={processThea1} style={{width:'100%', height:'240px', objectFit:'cover', borderRadius:'8px', display:'block'}}/>
            <p style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'12px', fontWeight:300, color:'#888'}}>Product Designer</p>
            <p style={{fontFamily:"'Instrument Sans', sans-serif", fontSize:'14px', fontWeight:300, color:'#1A1A1A', lineHeight:1.7}}>
              Se trata la investigación y diseño de una app móvil que ayuda a turistas a descubrir planes artísticos y culturales alternativos en nuevas ciudades. El proyecto incluyó investigación de usuarios, definición del problema, ideación y prototipado en Figma, validando cada etapa con feedback iterativo.
            </p>
          </div>
        </div>

      </section>

      {/* SOBRE MÍ */}
      <section style={{
        padding:'120px 80px',
        borderTop:'1px solid rgba(0,0,0,0.08)',
        display:'flex',
        gap:'80px',
        alignItems:'center'
      }}>
        <img src={anaPhoto} style={{
          width:'320px',
          height:'400px',
          objectFit:'cover',
          borderRadius:'16px',
          flexShrink:0
        }}/>
        <div>
          <p style={{fontSize:'13px', letterSpacing:'0.05em', textTransform:'uppercase', color:'#888', marginBottom:'24px', fontFamily:"'Instrument Sans', sans-serif", fontWeight:300}}>
            Sobre mí
          </p>
          <h2 style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'32px', fontWeight:400, letterSpacing:'-0.02em', lineHeight:1.2, marginBottom:'32px', color:'#1A1A1A'}}>
            Del arte al diseño,<br/>sin soltar ninguno de los dos.
          </h2>
          <p style={{fontSize:'13px', color:'#555', lineHeight:1.8, marginBottom:'20px', fontFamily:"'Instrument Sans', sans-serif"}}>
            Me formé en artes y eso me dio un ojo crítico que no se aprende en un bootcamp: cuido la tipografía, los bordes, los degradados. Cada detalle visual comunica algo, y sé exactamente qué.
          </p>
          <p style={{fontSize:'13px', color:'#555', lineHeight:1.8, marginBottom:'20px', fontFamily:"'Instrument Sans', sans-serif"}}>
            Trabajé en Customer Experience antes de entrar al diseño de producto, y eso me cambió la perspectiva: diseño desde la experiencia real del usuario, no desde lo que se ve bonito en una presentación.
          </p>
          <p style={{fontSize:'13px', color:'#555', lineHeight:1.8, fontFamily:"'Instrument Sans', sans-serif"}}>
            Hoy diseño con IA, entiendo el código y construyo soluciones que se ven bien y tienen impacto en el negocio. No debato de píxeles — los resuelvo.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{
        padding:'120px 80px',
        borderTop:'1px solid rgba(0,0,0,0.08)',
        textAlign:'center'
      }}>
        <p style={{fontSize:'13px', letterSpacing:'0.05em', textTransform:'uppercase', color:'#888', marginBottom:'24px', fontFamily:"'Instrument Sans', sans-serif", fontWeight:300}}>
          Contacto
        </p>
        <h2 style={{fontFamily:"'IBM Plex Mono', monospace", fontSize:'38px', fontWeight:400, letterSpacing:'-0.02em', lineHeight:1.2, marginBottom:'16px', color:'#1A1A1A'}}>
          ¿Hablamos?
        </h2>
        <p style={{fontSize:'13px', color:'#555', lineHeight:1.7, marginBottom:'48px', maxWidth:'480px', margin:'0 auto 48px', fontFamily:"'Instrument Sans', sans-serif"}}>
          Estoy disponible para proyectos freelance y oportunidades de trabajo.
        </p>
        <div style={{display:'flex', gap:'16px', justifyContent:'center'}}>
          <a href="mailto:anserrarg@gmail.com" style={{
            display:'inline-flex',
            alignItems:'center',
            gap:'8px',
            fontSize:'13px',
            fontWeight:600,
            color:'#fff',
            textDecoration:'none',
            padding:'14px 32px',
            background:'#1A1A1A',
            borderRadius:'8px'
          }}>
            anserrarg@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/anaserrano15" target="_blank" style={{
            display:'inline-flex',
            alignItems:'center',
            gap:'8px',
            fontSize:'13px',
            fontWeight:600,
            color:'#1A1A1A',
            textDecoration:'none',
            padding:'14px 32px',
            border:'1.5px solid #1A1A1A',
            borderRadius:'8px'
          }}>
            LinkedIn →
          </a>
        </div>
      </section>

    </div>
  )
}
