# Huella — Research y Decisiones de Producto

## Sobre este proyecto

Huella es una app de rescate y adopción de mascotas en la que trabajé como diseñadora de producto, en colaboración con un equipo de desarrollo voluntario. El proyecto no llegó a lanzarse, pero recorrí el proceso completo: investigación, definición de alcance y diseño de los flujos principales. Esta documentación reúne la investigación que hice, las decisiones de producto que tomé a partir de ella, y el alcance que definí para esta iteración.

---

## Problem Statement

Quienes encuentran una mascota en situación de calle, o pierden la propia, no tienen un canal centralizado para reportarlo ni para conectarse rápido con quien puede ayudar (familias de tránsito, adoptantes). Esto genera demoras en la ayuda y reduce las posibilidades de un reencuentro o de una adopción exitosa.

## Objetivo (esta iteración)

Diseñar una app que:

1. Conecte a quienes encuentran mascotas con familias de paso y adoptantes en una sola plataforma.
2. Permita reportar mascotas encontradas o perdidas de manera fácil.
3. Facilite la búsqueda de perros y gatos para adopción con filtros claros.
4. Brinde seguridad y confianza mediante validación de usuarios.

**Conectar con fundaciones queda fuera del objetivo de esta iteración** — es una ampliación que dejo planteada a futuro, no parte del alcance actual.

## Funcionalidades clave

1. **Registro** — alta de usuario con validación de identidad, pensada para dar confianza entre quienes van a interactuar (quien reporta, quien ofrece tránsito, quien adopta).
2. **Búsqueda** — exploración de publicaciones (mascotas perdidas, en tránsito, en adopción) con filtros claros, sin depender de un mapa.
3. **Reporte** — flujo para reportar una mascota encontrada o perdida: foto, descripción, estado y ubicación por zona/texto.
4. **Conexión con la red** — vínculo entre quien reporta y quienes pueden ayudar (familias de paso, adoptantes), con seguimiento del estado del reporte.

## Solución propuesta

La app se organiza alrededor de un feed de publicaciones con un sistema de semáforo que comunica el estado de cada caso de un vistazo (emergencia, activo/en curso, resuelto). Desde ahí, cualquier usuario puede reportar una mascota encontrada o perdida en pocos pasos, hacer seguimiento a sus propios reportes, y conectarse con familias de paso o adoptantes a través de las fichas de cada publicación. El alcance de especies se limita a perros y gatos, y deliberadamente no incluye un mapa interactivo ni una sección de fundaciones en esta iteración (ver "Alcance" más abajo).

---

## Investigación

Para validar el problema y las decisiones de diseño usé un proceso de research exprés, apoyado en prácticas de **Lean UX** (Jeff Gothelf) y de **Design Sprint** (Jake Knapp / Google Ventures): hipótesis tempranas, una protopersona inicial, una encuesta corta, benchmarking competitivo y, a partir de esos datos, una user persona validada — iterando rápido en vez de hacer una investigación exhaustiva de varias semanas.

### Protopersona (hipótesis inicial)

Antes de salir a validar nada, armé esta protopersona en base a supuestos del equipo, para alinear con quién creíamos que estábamos diseñando.

**Laura Torres** — 29 años, diseñadora gráfica freelance, Buenos Aires.
- *Contexto:* suele encontrarse perros perdidos en su barrio.
- *Necesidades:* un canal único para reportar y conectarse con quien pueda ayudar.
- *Frustraciones:* publica en redes sociales, pero rara vez obtiene respuesta o una conexión directa con quien puede dar tránsito o adoptar.

### Encuesta (17 respuestas)

**Objetivo de la encuesta:** entender cómo actúa hoy la gente cuando encuentra o pierde una mascota, y qué tan dispuesta estaría a usar una app como Huella.

**Perfil general del participante:** mayormente personas de Argentina que ya se habían encontrado alguna vez con un perro o gato perdido/en situación de calle.

| Pregunta | Resultado |
|---|---|
| ¿Encontraste alguna vez un perro/gato perdido o en situación de calle? | Sí: 16/17 |
| ¿Qué tan difícil fue saber qué hacer? | Muy difícil: 10 · Algo difícil: 6 · Fácil: 1 |
| ¿Usarías una app para reportarlo y contactar ayuda? | Sí, definitivamente: 11 · Probablemente sí: 4 · No seguro: 2 |
| Información que te gustaría incluir al reportar (multi-respuesta) | Foto: 17 · Ubicación/mapa: 15 · Descripción: 14 · Contacto con fundaciones: 11 · Contacto con familias de paso: 11 · Seguimiento del reporte: 10 |
| ¿Qué te motivaría más a usar la app? (multi-respuesta) | Ayudar al animal: 17 · Seguridad/confiabilidad: 5 · Respuesta rápida: 3 |
| Tiempo que estarías dispuesto a invertir en reportar | Más de 3 min: 8 · 1–3 min: 6 · Menos de 1 min: 3 |

**Respuestas abiertas** (motivación, textual):

> "denunciar maltrato, robos de canes, criaderos clandestinos, lucro x peleas de perros / carreras de galgos, maltrato de equinos / que se conecte la denuncia c policía"

> "que más personas en la zona se involucren / permita mayor organización para encontrar hogar de tránsito, veterinario, transporte"

Encuesta completa: [Encuesta HUELLA — App de adopción y rescate de mascotas (Respuestas)](https://docs.google.com/spreadsheets/d/1R5GwZhO61abdHL-OqsHRj-sgEpMyRvHCjYrPUAt28t4/edit?gid=1375136340#gid=1375136340)

### User Persona (validada con la encuesta)

A diferencia de la protopersona, esta no sale de un supuesto: la armé a partir de los patrones que vi en las 17 respuestas.

**Lucía Ramírez** — 28 años, CABA.
- *Contexto y hábitos:* ya se encontró más de una vez con un perro o gato perdido/en situación de calle — como el 94% de quienes respondieron la encuesta (16/17).
- *Dolor:* cuando le pasa, no sabe bien qué hacer — el 94% de los encuestados calificó la situación como "muy difícil" o "algo difícil" de resolver. Hoy coordina por distintos canales sueltos (WhatsApp, redes, boca en boca) y no confía en que un posteo suelto llegue a la persona correcta a tiempo.
- *Motivación principal:* ayudar al animal, por encima de cualquier otro incentivo — fue la respuesta más marcada en la encuesta (17 de 17), muy por delante de "seguridad" (5) o "respuesta rápida" (3).
- *Qué espera de un reporte:* que incluya foto (17), ubicación o zona (15) y descripción (14), y que le permita hacer seguimiento del estado del caso (10) y contactar directamente a familias de paso (11).
- *Disposición a usar la app:* alta — 11 de 17 dijeron que "sí, definitivamente" la usarían, y 4 más "probablemente sí".
- *Tiempo que está dispuesta a invertir:* la mayoría acepta más de un minuto (8 más de 3 min, 6 entre 1 y 3 min), siempre que sienta que el reporte realmente va a llegar a alguien que puede ayudar.

### Benchmark

Antes de definir el alcance final, investigué tres apps que resuelven partes del mismo problema, para entender qué cubrir y qué dejar fuera.

| App | Enfoque | Puntos fuertes | Áreas de mejora |
|---|---|---|---|
| **Pet It** | Adopción + comunidad | Feed social, chat, fichas de salud; el mapa lo sumaron recién en versiones posteriores (no fue parte del MVP original) | Producto más maduro y complejo de lo que necesito para esta iteración |
| **Pet Care App** (Argentina) | Mascotas perdidas + adopción | Filtros por provincia/localidad (sin mapa GPS), reporte de maltrato, veterinarias de emergencia, sección de adopción conectada a organizaciones | No usa geolocalización en tiempo real; depende de filtros manuales |
| **My Pets** | Mapa de avistamientos + perfiles | Mapa compartido de avistamientos (no colecta GPS), perfiles de mascotas pre-registrados, calendario de mascotas perdidas | Requiere pre-registro para aprovechar todo el valor |

**Insights y oportunidades identificadas:**

- Ninguna de las tres resuelve bien, al mismo tiempo, el reporte rápido *y* la conexión directa con quien puede dar tránsito o adoptar.
- El mapa en tiempo real no es un requisito inicial: incluso apps más maduras como Pet It lo sumaron después, y Pet Care App funciona bien solo con filtros por zona.
- La validación de identidad aparece como un factor de confianza que ninguna de las tres resalta como diferencial.
- La posibilidad de hacer seguimiento del reporte es algo que la gente valora y que no todas ofrecen de forma clara.
- Limitar el alcance inicial a perros y gatos está alineado con cómo operan estos competidores, que tampoco cubren todas las especies desde el día uno.

**Oportunidad de Huella:** ninguno de los tres competidores conecta, en un solo flujo simple, a quien encuentra una mascota con quien puede darle tránsito o adoptarla — sin pedir pre-registro, sin depender de un mapa en tiempo real, y con una capa de validación de usuarios que da confianza desde el primer reporte.

Fuentes: [Pet It — App Store](https://apps.apple.com/app/id6444870086) · [Pet Care App — ámbito.com](https://www.ambito.com/lifestyle/la-aplicacion-que-creo-un-argentino-encontrar-las-mascotas-si-se-pierden-y-que-ya-es-furor-n6160306) · [My Pets — iProUp](https://www.iproup.com/innovacion/44698-my-pets-asi-es-la-app-que-ayuda-a-encontrar-mascotas-perdidas)

---

## Decisiones de producto

### Alcance de esta iteración (MoSCoW)

| Must have | Should have | Could have | Won't have (esta vez) |
|---|---|---|---|
| Reporte de mascota perdida/encontrada | Seguimiento del estado del reporte | Notificaciones push | Conexión directa con fundaciones |
| Registro con validación de identidad | Filtros de búsqueda por estado/zona | Perfil extendido con medallas/puntaje | Mapa interactivo en tiempo real |
| Feed/galería de publicaciones con semáforo de estado | Sección de favoritos ("me gusta") | Chat interno | Soporte a especies distintas de perros y gatos |
| Ficha de detalle por publicación | | | Dr. Virtual con IA, red social antes/después (ideas a futuro) |

Esto refleja lo que decidí priorizar para esta iteración: resolver bien el reporte y la conexión básica entre quien encuentra y quien puede ayudar, antes de sumar capas como fundaciones, mapa o funciones sociales más avanzadas.

### Sistema de semáforo y decisiones de interfaz

| Color | Estado | Significado |
|---|---|---|
| 🔴 Rojo | Emergencia | Caso urgente que necesita atención inmediata |
| 🟡 Amarillo | Activo / en curso | Perdido, en tránsito o en adopción: el caso sigue abierto |
| 🟢 Verde | Resuelto | Reencontrado o con hogar definitivo |

- **Registro:** se pide al momento de publicar un reporte, no antes — para no poner una barrera de entrada a quien solo quiere ayudar puntualmente.
- **Ubicación:** por zona/texto, sin mapa interactivo en esta iteración.
- **Tipos de reporte:** mascota perdida, mascota encontrada, en tránsito, en adopción.
- **Especie:** limitado a perros y gatos.

### Próximos pasos

Reconstruir en Figma, manteniendo los colores y la tipografía del sistema ya existente:

1. Onboarding
2. Login / Registro
3. Home (feed con semáforo)
4. Flujo de reporte
