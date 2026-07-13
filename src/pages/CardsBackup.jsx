/* BEACON CARD BACKUP (lines 428-497)

<div style={{
  borderRadius:'0',
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
    <p style={{fontSize:'12px', letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(176,255,146,0.7)', marginBottom:'16px', fontFamily:"'Instrument Sans', sans-serif"}}>UX/UI · Product Design · AI</p>
    <p style={{fontSize:'13px', color:'rgba(255,255,255,0.7)', lineHeight:1.7, marginBottom:'32px', fontFamily:"'Instrument Sans', sans-serif"}}>
      Diseñé y construí con IA una herramienta para recuperar miles de dólares en ventas indirectas. Pipeline, pulse checks automáticos y cero atribuciones perdidas.
    </p>
    <a href="#" style={{
      display:'inline-flex',
      alignItems:'center',
      gap:'8px',
      fontSize:'13px',
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

*/


/* THEAVELING CARD BACKUP (lines 500-570)

<div style={{
  borderRadius:'0',
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
    fontWeight:300,
    color:'#F31006',
    letterSpacing:'-0.03em',
    lineHeight:1,
    flexShrink:0
  }}>
    Theaveling
  </h2>

  {/* Right: description + button */}
  <div style={{maxWidth:'300px', marginLeft:'auto', position:'relative', zIndex:2}}>
    <p style={{fontSize:'12px', letterSpacing:'0.08em', textTransform:'uppercase', color:'#888', marginBottom:'16px', fontFamily:"'Instrument Sans', sans-serif"}}>UX/UI · Research · Mobile</p>
    <p style={{fontSize:'13px', color:'#555', lineHeight:1.7, marginBottom:'32px', fontFamily:"'Instrument Sans', sans-serif"}}>
      Una app para viajeros y locales que buscan experiencias artísticas alternativas — teatro, danza, performance — en cualquier ciudad. Proceso completo de Design Thinking: research, benchmarking, testing con usuarios y UI Kit propio.
    </p>
    <a href="#" style={{
      display:'inline-flex',
      alignItems:'center',
      gap:'8px',
      fontSize:'13px',
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

*/
