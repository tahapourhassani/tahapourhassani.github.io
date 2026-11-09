import { StrictMode, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  { id: '01', category: 'AI-Assisted Video Production', title: 'Automotive in Motion', image: 'automotive-cover.png', video: 'automotive.mp4', alt: 'Black Toyota SUV on a sunlit forest road', caption: 'AI-assisted automotive client film', description: 'AI-assisted camera movements bring a new perspective to an automotive showcase.', role: 'AI-assisted camera movement', detail: 'I contributed AI-assisted camera movements to an automotive showcase for an auto gallery client, creating the opening arc and most zoom-in and zoom-out movements from supplied footage. Original filming and final editing were handled by others. ', tags: ['AI camera movement', 'Client work'] },
  { id: '02', category: 'AI Product Visuals & Creative Experiments', title: 'YANI — Tabriz Perfume Reveal', image: 'tabriz-cover.png', video: 'yani-tabriz.mp4', alt: 'Tabriz perfume bottle beside the clock tower in Saat Square', caption: 'AI-generated perfume reveal', description: 'A cinematic product reveal connecting a fragrance to the city that inspired it.', role: 'Concept, AI image & video generation, editing', detail: 'An AI-generated perfume reveal for YANI’s Tabriz fragrance, set in Saat Square. Drones lift patterned fabric to unveil an oversized bottle, connecting the product to its namesake city. I developed the concept and handled the full production, including image generation, video generation and editing.', tags: ['Generative AI', 'Visual storytelling'] },
  { id: '03', category: 'Natural Language Processing', title: 'Biomedical NLP for Cancer Research', image: 'nlp-classifier.jpg', slides: [{image:'nlp-classifier.jpg', title:'Entity Relation Classifier'}, {image:'nlp-methodology.jpg', title:'Research Methodology'}, {image:'nlp-supervision.jpg', title:'Distant Supervision'}, {image:'nlp-results.jpg', title:'Final Results'}], alt: 'Presentation slide explaining sentence-level miRNA–gene relation classification', caption: 'Adapted research presentation slide', description: 'An academic review of how NLP can extract miRNA–gene relationships from biomedical literature.', role: 'Final academic project · Research & presentation', detail: 'I researched and presented a Microsoft/Miroculus case study on extracting relationships between microRNAs and genes from biomedical literature. This was my final academic project, recognised as a top project by the Head of Computer Engineering at Islamic Azad University, Tabriz. My contribution is the study and presentation of its methods and findings, including distant supervision and text classification. The model implementation and reported benchmark results belong to the cited study. This work concerns literature analysis, not a clinically validated diagnosis system.', source: 'https://devblogs.microsoft.com/ise/training-a-classifier-for-relation-extraction-from-medical-literature/', tags: ['Research synthesis', 'NLP'] },
  { id: '04', category: 'Computer Vision', title: 'Hand Tracking', image: 'hand-tracking.jpg', video: 'hand-tracking.mp4', alt: 'Illustrative laptop mockup showing hand landmarks', caption: 'AI-generated project illustration and animation', description: 'Exploring hand tracking and visual interaction through computer vision.', role: 'Computer vision project', detail: 'An exploration of hand tracking and visual interaction. The cover and animated film are AI-generated project illustrations, rather than recordings of the application. Project source code remains private.', tags: ['Computer vision', 'Human–computer interaction'] },
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function ProjectCover({ project }) {
  if (project.slides) return <div className="nlp-cover" aria-label="Biomedical NLP research cover">
    <span className="eyebrow">Research / Language / Discovery</span>
    <div className="relation-art" aria-hidden="true"><span>miRNA</span><i /><span>gene</span></div>
    <strong>Biomedical NLP<br /><em>for Cancer Research</em></strong>
    <small>Final academic project · 4 slides</small>
  </div>
  return <><img src={`/media/${project.image}`} alt={project.alt} loading="lazy" width="1200" height="675" />{project.video && <span className="poster-title"><small>{project.category}</small><strong>{project.title}</strong></span>}</>
}

function ProjectMedia({ project }) {
  const [slide, setSlide] = useState(0)
  const [playing, setPlaying] = useState(false)
  if(project.slides) return <div className="slide-gallery">
    <img className="slide-stage" src={`/media/${project.slides[slide].image}`} alt={project.slides[slide].title} />
    <div className="slide-controls"><button onClick={()=>setSlide((slide+3)%4)} aria-label="Previous slide">←</button><p aria-live="polite">{slide+1} / 4 · {project.slides[slide].title}</p><button onClick={()=>setSlide((slide+1)%4)} aria-label="Next slide">→</button></div>
    <div className="slide-thumbnails">{project.slides.map((item,index)=><button key={item.image} aria-label={`Show slide ${index+1}: ${item.title}`} aria-pressed={slide===index} onClick={()=>setSlide(index)}><img src={`/media/${item.image}`} alt="" /><span>{index+1}. {item.title}</span></button>)}</div>
  </div>
  if(project.video) return playing ? <video controls autoPlay playsInline preload="metadata" poster={`/media/${project.image}`}><source src={`/media/${project.video}`} type="video/mp4" />Your browser does not support video playback.</video> : <button className="film-poster" onClick={()=>setPlaying(true)} aria-label={`Play ${project.title}`}><img src={`/media/${project.image}`} alt={project.alt} /><span className="poster-title"><small>{project.category}</small><strong>{project.title}</strong></span><span className="play-badge">▶ <span>Play film</span></span></button>
  return <img src={`/media/${project.image}`} alt={project.alt} />
}

const cvUrl = '/resume/Taha-Pourhassani-CV.pdf'
const linkedInUrl = 'https://www.linkedin.com/in/taha-pourhassani-2266b6228/'

const socialProfiles = [
  { name: 'LinkedIn', icon: 'linkedin', url: linkedInUrl },
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/tahaprhs' },
  { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/33755794222' },
  { name: 'X', icon: 'x', url: 'https://x.com/tahapourhassani' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/tahapourhasani' },
  { name: 'Telegram', icon: 'telegram', url: 'https://t.me/tahaphs' },
  { name: 'Clubhouse', icon: 'clubhouse', url: 'https://www.clubhouse.com/@tahaphs' },
  { name: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/user/taha_pourhasani' },
]

function SocialIcon({ name }) {
  const common = { viewBox: '0 0 24 24', width: 22, height: 22, 'aria-hidden': true, focusable: false }
  if (name === 'instagram') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" /></svg>
  if (name === 'telegram') return <svg {...common} fill="currentColor"><path d="M21.4 3.1 2.8 10.3c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.5c.2.6.1.8.8.8.5 0 .8-.2 1.1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8L23 4.4c.3-1.3-.5-1.8-1.6-1.3ZM8.2 12.9l10.7-6.8c.5-.3 1-.1.6.2l-8.8 8-.3 3.4-2.2-4.8Z" /></svg>
  if (name === 'spotify') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M6.7 9.1c3.5-1 7.3-.7 10.5 1M7.5 12.3c2.9-.8 6.2-.5 8.9.8M8.3 15.4c2.4-.6 4.9-.4 7.1.6" /></svg>
  if (name === 'clubhouse') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m7.4 12.6-2.5-5a1.3 1.3 0 0 1 2.3-1.2l2.7 4.9-2.6-7a1.3 1.3 0 0 1 2.4-.9l2.7 6.9-1.3-7.1a1.3 1.3 0 0 1 2.6-.5l1.4 7.5.2-5.4a1.3 1.3 0 0 1 2.6.1l-.1 7.6 1.3-2a1.4 1.4 0 0 1 2.2 1.6l-3.1 5.7c-2.6 4.6-8.2 4.7-10.7.3l-2.8-4.2c-1-1.5.8-3 2-1.7l2.5 2.6" /><path d="M3 3.8 2 2.6M20 5l1.7-.7M3 18l-1.5.5" /></svg>
  if (name === 'github') return <svg {...common} fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.5v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.8-5.5 6.1.4.4.8 1.1.8 2.2V22c0 .3.2.6.8.5A11.1 11.1 0 0 0 12 .9Z" /></svg>
  if (name === 'x') return <svg {...common} fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L2 2h6.5l4.9 6.5L18.9 2ZM17.8 20h1.7L7.5 3.9H5.7L17.8 20Z" /></svg>
  if (name === 'whatsapp') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M20.6 6.8A9.2 9.2 0 0 0 3.2 11a9 9 0 0 0 1.2 4.6L3 21l5.5-1.4a9.3 9.3 0 0 0 13.4-8.2c0-1.6-.4-3.2-1.3-4.6Z" /><path d="M8.1 6.9c-.4-.2-.7.1-1 .5-.6.8-.4 2.1.4 3.5 1.3 2.4 3.1 4.2 5.6 5.1 1.4.5 2.5.2 2.9-.4.3-.5.5-1.1.2-1.4l-2.1-1c-.4-.2-.6 0-.9.4l-.5.6c-.2.2-.4.2-.7.1-1.6-.7-2.8-1.9-3.5-3.3-.1-.3-.1-.5.1-.7l.6-.7c.2-.2.2-.5.1-.8L8.1 6.9Z" fill="currentColor" stroke="none" /></svg>
  return <svg {...common} fill="currentColor"><path d="M5.1 3.4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.5 7h3.2v14H1.5V7Zm5.8 0h3.1v1.9h.1c.4-.8 1.5-2.2 3.8-2.2 4 0 4.7 2.6 4.7 5.9V21h-3.3v-7.5c0-1.8 0-4-2.5-4s-2.9 1.9-2.9 3.9V21H7.3V7Z" /></svg>
}

function SocialLinks() {
  return <nav className="social-icons" aria-label="Social profiles">{socialProfiles.map(profile => <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`${profile.name} (opens in a new tab)`} title={profile.name}><SocialIcon name={profile.icon} /></a>)}</nav>
}

function Resume() {
  return <section id="resume" className="resume wrap" aria-labelledby="resume-title">
    <div className="section-top resume-heading"><div><p className="eyebrow">03 / Resume</p><h2 id="resume-title">Experience &amp; <em>Education</em></h2></div><a className="button secondary" href={cvUrl} download>Download CV <span aria-hidden="true">↓</span><span className="sr-only"> (PDF)</span></a></div>
    <div className="resume-grid">
      <div className="resume-column">
        <h3 className="resume-label">Professional experience</h3>
        <article className="resume-entry"><p className="resume-date">2025–2026 <span> / ASA Advertising Agency</span></p><h4>Digital Content Producer<br />&amp; AI Content Creator</h4><ul><li>Created social media content within an agency serving more than 20 clients across various industries.</li><li>Produced social media posts and Instagram reels, including AI-assisted content.</li><li>Designed large-format billboards displayed around the city.</li></ul></article>
        <article className="resume-entry"><p className="resume-date">2024 <span> / Ata Varagh Azarbaijan · Tabriz, Iran</span></p><h4>Internship</h4><p>Internship involving an online examination system.</p></article>
        <h3 className="resume-label">Education</h3>
        <article className="resume-entry"><p className="resume-date">September 2026–September 2027 <span> / Expected</span></p><h4>Master’s in Telecommunication and Network <span className="degree-level">M1</span></h4><p>Le Cnam · Paris, France</p></article>
        <article className="resume-entry"><p className="resume-date">2020–2025</p><h4>B.Sc. Computer Engineering<br />– Information Technology</h4><p>Islamic Azad University · Tabriz, Iran</p></article>
      </div>
      <div className="resume-column">
        <h3 className="resume-label">Skills</h3>
        <dl className="skill-list"><div><dt>Programming</dt><dd>Python; C for AVR projects. Familiarity with C++ and C#.</dd></div><div><dt>Web &amp; data</dt><dd>WordPress theme editing, plugins and content design; MySQL.</dd></div><div><dt>Creative</dt><dd>AI image and video generation for social media and content creation.</dd></div><div><dt>Tools</dt><dd>VS Code, Navicat, Cisco Packet Tracer, CodeVision, Proteus, Microsoft Office; basic Adobe Photoshop.</dd></div></dl>
        <h3 className="resume-label">Languages</h3><dl className="language-list"><div><dt>Persian &amp; Turkish</dt><dd>Native</dd></div><div><dt>English</dt><dd>Fluent · IELTS Academic 6.5</dd></div><div><dt>German</dt><dd>A2</dd></div></dl>
        <h3 className="resume-label">Leadership &amp; honors</h3>
        <article className="resume-entry"><p className="resume-date">2023–2025</p><h4>Head of Computer Engineering Scientific Association</h4><p>Islamic Azad University, Tabriz. Organised student workshops, seminars and academic events; coordinated student teams and communications.</p></article>
        <article className="resume-entry"><p className="resume-date">11th RINOTEX Technology Exhibition</p><h4>Selected University Representative</h4><p>Selected to represent Islamic Azad University, Tabriz.</p></article>
      </div>
    </div>
    <div className="academic-project"><div><p className="eyebrow">Final academic project</p><h3>Biomedical NLP<br /><em>for Cancer Research</em></h3><span className="recognition-tag">Recognised as a top project</span></div><div><p>Studied and presented a Microsoft/Miroculus case study on extracting miRNA–gene relationships from biomedical literature, explaining distant supervision, text features and logistic regression.</p><p>Recognised as a top project by the Head of Computer Engineering at Islamic Azad University, Tabriz. My contribution was research synthesis and presentation of the existing study’s methods and findings.</p><a className="text-link" href="#work">Explore the project <Arrow /></a></div></div>
    <details className="engineering-details"><summary>Engineering projects <span aria-hidden="true">+</span></summary><div className="engineering-grid"><article><h4>AVR Microcontroller Systems</h4><p className="resume-date">Course project · C, CodeVision, Proteus</p><p>Developed and simulated control systems including temperature sensing, traffic lights, clocks, timers and a digital door lock.</p></article><article><h4>Warehouse Management System</h4><p className="resume-date">Class project · Python</p><p>Built a system for tracking inventory and orders, with a simple database schema and features for querying and updating stock.</p></article><article><h4>Round-Trip Time Measurement Tool</h4><p className="resume-date">Class project · Python sockets</p><p>Created a client-server tool to measure response times and explore network latency.</p></article><article><h4>Proxy Server</h4><p className="resume-date">Personal project · Python sockets</p><p>Developed a basic proxy server with request filtering and logging.</p></article></div></details>
  </section>
}

function App() {
  const dialog = useRef(null)
  const [active, setActive] = useState(null)
  function openProject(project) { setActive(project); dialog.current.showModal() }
  function closeProject() { dialog.current.querySelector('video')?.pause(); dialog.current.close() }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header wrap">
      <a className="wordmark" href="#" aria-label="Taha Pourhassani home">TP<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#resume">Resume</a><a className="nav-contact" href="#contact">Let’s connect</a></nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-art" src="/media/moai-hero.jpg" alt="Cinematic Moai stone sculpture with emerald lighting and a distant Eiffel Tower" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Paris, France <span className="eyebrow-divider">/</span> Technology meets imagination</p>
            <h1 id="hero-title">Taha<br /><span>Pourhassani</span></h1>
            <p className="headline">Computer Engineer <span>|</span> Generative AI &amp; Visual Media Producer</p>
            <p className="bio">I'm Taha, a Computer Engineering graduate and master’s student based in Paris. I bring together technical project as a generative AI and visual media producer.</p>
            <div className="hero-actions"><a className="button primary" href="#work">Explore My Work</a><a className="button secondary" href={cvUrl} download>Download CV <span className="sr-only"> (PDF)</span></a></div>
          </div>
          <div className="hero-bottom"><span>ENGINEERING × CREATIVE INTELLIGENCE</span><a href="#work">Scroll to explore <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>
      <section id="work" className="work wrap" aria-labelledby="work-title">
        <div className="section-top"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Projects &amp; <em>Productions</em></h2></div><p className="section-intro">From understanding intelligence<br />to creating with it.</p></div>
        <div className="project-grid">
          {projects.map(project => <article className="project" key={project.id}>
            <button className={`project-cover ${project.video ? 'film-cover' : ''}`} onClick={() => openProject(project)} aria-label={`View ${project.title}`}>
              <ProjectCover project={project} />
              <span className="cover-number">{project.id}</span><span className="cover-action">{project.video ? 'View film' : project.slides ? 'View 4 slides' : 'Explore project'} <Arrow /></span>
            </button>
            <div className="project-meta"><p className="eyebrow">{project.category}</p></div>
            <h3><button onClick={() => openProject(project)}>{project.title}</button></h3>
            <p className="project-description">{project.description}</p>
            <p className="project-role">{project.role}</p>
          </article>)}
        </div>
      </section>
      <section id="about" className="about wrap" aria-labelledby="about-title"><p className="eyebrow">02 / About me</p><div className="about-grid"><div><h2 id="about-title">Background</h2><div className="disciplines"><span>Computer Engineering</span><span>Generative AI</span><span>Visual Media</span></div></div><div className="about-copy"><p>I’m Taha Pourhassani, a Computer Engineering graduate currently studying Telecommunication and Network at Le Cnam in Paris.</p><p>My work connects technical problem-solving with visual storytelling. At ASA Advertising Agency, I created social media posts, Instagram reels and AI-assisted content within a team serving more than 20 clients. I also designed large-format billboards displayed around the city.</p><p>Alongside creative production, my technical work spans Python networking, inventory management and AVR microcontroller systems. My final academic project explored biomedical NLP through the study and presentation of an existing research case study.</p><a className="text-link" href="#resume">Read my resume <Arrow /></a></div></div></section>
      <Resume />
      <section id="contact" className="contact wrap" aria-labelledby="contact-title"><p className="eyebrow">04 / Connect</p><div className="contact-row"><div><h2 id="contact-title">Let’s make<br /><em>something matter.</em></h2><p className="contact-note">For creative work, technical projects or a conversation.</p></div><div className="contact-options"><a className="button primary" href="mailto:pourhasani80@gmail.com">Email me</a><SocialLinks /></div></div></section>
    </main>
    <footer className="wrap footer"><a className="wordmark" href="#" aria-label="Taha Pourhassani home">TP<span>.</span></a><p>© {new Date().getFullYear()} Taha Pourhassani</p><a href="#main">Back to top ↑</a></footer>
    <dialog ref={dialog} aria-labelledby="project-dialog-title" className="project-dialog" onClick={e => { if(e.target === e.currentTarget) closeProject() }} onCancel={closeProject}>
      {active && <div className="dialog-content"><button className="close-dialog" onClick={closeProject} aria-label="Close project">✕</button><p className="eyebrow">{active.category}</p><h2 id="project-dialog-title">{active.title}</h2><ProjectMedia key={active.id} project={active} /><p className="media-caption">{active.caption}</p><p className="detail-role">{active.role}</p><p className="detail-copy">{active.detail}</p>{active.source && <a className="source-link" href={active.source} target="_blank" rel="noreferrer">Read the original Microsoft/Miroculus case study ↗</a>}<div className="disciplines">{active.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>}
    </dialog>
  </>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
