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

export default function Home() {
  return (
    <div style={{background:'#F5F2EE', minHeight:'100vh', color:'#1A1A1A', fontFamily:'sans-serif'}}>

      {/* NAVBAR */}
      <nav style={{
        padding:'24px 80px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottom:'1px solid rgba(0,0,0,0.08)',
        position:'sticky',
        top:0,
        zIndex:100,
        background:'#F5F2EE'
      }}>
        <span style={{fontWeight:700, fontSize:'16px', letterSpacing:'-0.01em', fontFamily:'Bricolage Grotesque, sans-serif'}}>Ana Maria Serrano</span>
        <a href="mailto:tu@email.com" style={{
          fontSize:'14px',
          color:'#1A1A1A',
          textDecoration:'none',
          padding:'8px 20px',
          border:'1px solid rgba(0,0,0,0.15)',
          borderRadius:'20px'
        }}>
          Contacto
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        padding:'120px 80px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center'
      }}>
        <div style={{position:'relative', display:'inline-block'}}>
          <span style={{
            position:'absolute',
            top:'-24px',
            right:'0',
            fontSize:'22px',
            letterSpacing:'0.05em',
            textTransform:'uppercase',
            color:'#888',
            fontFamily:'Bricolage Grotesque, sans-serif',
            fontWeight:300
          }}>
            UX/UI Designer
          </span>
          <h1 style={{
            fontSize:'120px',
            fontWeight:300,
            lineHeight:1.05,
            letterSpacing:'-0.03em',
            fontFamily:'Fraunces, serif',
            marginBottom:'32px'
          }}>
            Ojo de artista,<br/>cabeza de negocio.
          </h1>
        </div>
        <p style={{
          fontSize:'18px',
          color:'#555',
          lineHeight:1.7,
          maxWidth:'540px',
          fontFamily:'Bricolage Grotesque, sans-serif'
        }}>
          Diseño productos digitales que se ven bien y resuelven problemas reales.
          Formación en arte, experiencia en Customer Experience y obsesión por el detalle
          que hace la diferencia.
        </p>
      </section>

      {/* PROYECTOS */}
      <section style={{padding:'80px 80px', borderTop:'1px solid rgba(0,0,0,0.08)'}}>
        <p style={{fontSize:'14px', letterSpacing:'0.05em', textTransform:'uppercase', color:'#999', marginBottom:'48px', fontFamily:'Bricolage Grotesque, sans-serif', fontWeight:300}}>
          Proyectos
        </p>

        {/* BEACON CARD */}
        <div style={{
          borderRadius:'16px',
          background:'#0D1512',
          boxShadow:'0 2px 20px rgba(0,0,0,0.15)',
          position:'relative',
          overflow:'hidden',
          minHeight:'480px',
          display:'flex',
          alignItems:'center',
          padding:'60px',
          marginBottom:'48px'
        }}>
          {/* Aurora background */}
          <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}} viewBox="0 0 1000 480" preserveAspectRatio="none">
            <defs>
              <linearGradient id="a1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(176,255,146,0)" />
                <stop offset="40%" stopColor="rgba(100,220,80,0.6)" />
                <stop offset="70%" stopColor="rgba(123,88,248,0.4)" />
                <stop offset="100%" stopColor="rgba(123,88,248,0)" />
              </linearGradient>
              <linearGradient id="a2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(123,88,248,0)" />
                <stop offset="40%" stopColor="rgba(123,88,248,0.5)" />
                <stop offset="100%" stopColor="rgba(100,220,80,0)" />
              </linearGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="8"/></filter>
            </defs>
            <path d="M 1000 480 C 750 380 500 200 300 150 C 100 100 0 40 0 0 C 150 80 400 260 600 310 C 800 360 1000 460 1000 500 Z" fill="url(#a1)" filter="url(#glow)" opacity="0.7"/>
            <path d="M 1000 480 C 700 350 450 170 250 110 C 50 50 0 10 0 0 C 100 70 350 220 550 270 C 750 320 1000 450 1000 490 Z" fill="url(#a2)" filter="url(#glow)" opacity="0.5"/>
          </svg>

          {/* Left: Beacon title + mockups */}
          <div style={{position:'relative', zIndex:1, flex:1}}>
            <h2 style={{
              fontFamily:"'Satoshi', sans-serif",
              fontSize:'96px',
              fontWeight:700,
              color:'#F5F5F5',
              letterSpacing:'-0.04em',
              lineHeight:1,
              marginBottom:'40px'
            }}>
              Beacon
            </h2>
            <img src={beaconMockup} style={{width:'500px', flexShrink:0}}/>
          </div>

          {/* Right: description + button */}
          <div style={{position:'relative', zIndex:1, maxWidth:'340px'}}>
            <p style={{fontSize:'12px', letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(176,255,146,0.7)', marginBottom:'16px', fontFamily:'Arial, sans-serif'}}>UX/UI · Product Design · AI</p>
            <p style={{fontSize:'18px', color:'rgba(255,255,255,0.7)', lineHeight:1.7, marginBottom:'32px', fontFamily:'Bricolage Grotesque, sans-serif'}}>
              Diseñé y construí con IA una herramienta para recuperar miles de dólares en ventas indirectas. Pipeline, pulse checks automáticos y cero atribuciones perdidas.
            </p>
            <a href="#" style={{
              display:'inline-flex',
              alignItems:'center',
              gap:'8px',
              fontSize:'14px',
              fontWeight:600,
              color:'#B0FF92',
              textDecoration:'none',
              padding:'12px 24px',
              border:'1.5px solid rgba(176,255,146,0.4)',
              borderRadius:'100px'
            }}>
              Ver caso de estudio →
            </a>
          </div>
        </div>

        {/* THEAVELING CARD */}
        <div style={{
          borderRadius:'16px',
          background:'#FFFFFF',
          boxShadow:'0 2px 20px rgba(0,0,0,0.08)',
          position:'relative',
          overflow:'hidden',
          minHeight:'480px',
          display:'flex',
          alignItems:'center',
          padding:'60px',
          gap:'60px',
          marginBottom:'48px'
        }}>
          <img src={telonIzquierdo} style={{
            position:'absolute',
            top:0,
            left:'-20px',
            height:'100%',
            pointerEvents:'none',
            zIndex:0
          }}/>
          <img src={telonDerecho} style={{
            position:'absolute',
            top:0,
            right:'-20px',
            height:'100%',
            pointerEvents:'none',
            zIndex:0
          }}/>

          {/* Left: mobile mockup */}
          <div style={{position:'relative', zIndex:1, display:'flex', alignItems:'flex-start'}}>
            <img src={mobileTheaveling} style={{width:'240px', flexShrink:0, zIndex:2, position:'relative'}}/>
            <img src={logoThea} style={{width:'240px', flexShrink:0, marginTop:'30px', marginLeft:'-20px', zIndex:1, position:'relative'}}/>
          </div>

          {/* Center: title */}
          <h2 style={{
            fontFamily:"'Sansita', sans-serif",
            fontSize:'72px',
            fontWeight:700,
            color:'#F31006',
            letterSpacing:'-0.03em',
            lineHeight:1,
            flexShrink:0
          }}>
            Theaveling
          </h2>

          {/* Right: description + button */}
          <div style={{maxWidth:'300px', marginLeft:'auto', position:'relative', zIndex:2}}>
            <p style={{fontSize:'12px', letterSpacing:'0.08em', textTransform:'uppercase', color:'#888', marginBottom:'16px', fontFamily:'Arial, sans-serif'}}>UX/UI · Research · Mobile</p>
            <p style={{fontSize:'16px', color:'#555', lineHeight:1.7, marginBottom:'32px', fontFamily:'Bricolage Grotesque, sans-serif'}}>
              Una app para viajeros y locales que buscan experiencias artísticas alternativas — teatro, danza, performance — en cualquier ciudad. Proceso completo de Design Thinking: research, benchmarking, testing con usuarios y UI Kit propio.
            </p>
            <a href="#" style={{
              display:'inline-flex',
              alignItems:'center',
              gap:'8px',
              fontSize:'14px',
              fontWeight:600,
              color:'#1A1A1A',
              textDecoration:'none',
              padding:'12px 24px',
              border:'1.5px solid #1A1A1A',
              borderRadius:'100px'
            }}>
              Ver caso de estudio →
            </a>
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
          <p style={{fontSize:'22px', letterSpacing:'0.05em', textTransform:'uppercase', color:'#888', marginBottom:'24px', fontFamily:'Bricolage Grotesque, sans-serif', fontWeight:300}}>
            Sobre mí
          </p>
          <h2 style={{fontFamily:"'Fraunces', serif", fontSize:'40px', fontWeight:300, letterSpacing:'-0.02em', lineHeight:1.2, marginBottom:'32px'}}>
            Del arte al diseño,<br/>sin soltar ninguno de los dos.
          </h2>
          <p style={{fontSize:'16px', color:'#555', lineHeight:1.8, marginBottom:'20px', fontFamily:'Bricolage Grotesque, sans-serif'}}>
            Me formé en artes y eso me dio un ojo crítico que no se aprende en un bootcamp: cuido la tipografía, los bordes, los degradados. Cada detalle visual comunica algo, y sé exactamente qué.
          </p>
          <p style={{fontSize:'16px', color:'#555', lineHeight:1.8, marginBottom:'20px', fontFamily:'Bricolage Grotesque, sans-serif'}}>
            Trabajé en Customer Experience antes de entrar al diseño de producto, y eso me cambió la perspectiva: diseño desde la experiencia real del usuario, no desde lo que se ve bonito en una presentación.
          </p>
          <p style={{fontSize:'16px', color:'#555', lineHeight:1.8, fontFamily:'Bricolage Grotesque, sans-serif'}}>
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
        <p style={{fontSize:'22px', letterSpacing:'0.05em', textTransform:'uppercase', color:'#888', marginBottom:'24px', fontFamily:'Bricolage Grotesque, sans-serif', fontWeight:300}}>
          Contacto
        </p>
        <h2 style={{fontFamily:'Fraunces, serif', fontSize:'48px', fontWeight:300, letterSpacing:'-0.02em', lineHeight:1.2, marginBottom:'16px'}}>
          ¿Hablamos?
        </h2>
        <p style={{fontSize:'18px', color:'#555', lineHeight:1.7, marginBottom:'48px', maxWidth:'480px', margin:'0 auto 48px', fontFamily:'Bricolage Grotesque, sans-serif'}}>
          Estoy disponible para proyectos freelance y oportunidades de trabajo.
        </p>
        <div style={{display:'flex', gap:'16px', justifyContent:'center'}}>
          <a href="mailto:anserrarg@gmail.com" style={{
            display:'inline-flex',
            alignItems:'center',
            gap:'8px',
            fontSize:'16px',
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
            fontSize:'16px',
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
