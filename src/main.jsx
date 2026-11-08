import { StrictMode, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  { id: '01', category: 'AI-Assisted Video Production', title: 'Automotive in Motion', image: 'automotive-cover.png', video: 'automotive.mp4', alt: 'Black Toyota SUV on a sunlit forest road', caption: 'AI-assisted automotive client film', description: 'AI-assisted camera movements bring a new perspective to an automotive showcase.', role: 'AI-assisted camera movement', detail: 'I contributed AI-assisted camera movements to an automotive showcase for an auto gallery client, creating the opening arc and most zoom-in and zoom-out movements from supplied footage. Original filming and final editing were handled by others. Client name and remaining production credits have not been supplied.', tags: ['AI camera movement', 'Client work'] },
  { id: '02', category: 'AI Product Visuals & Creative Experiments', title: 'YANI — Tabriz Perfume Reveal', image: 'tabriz-cover.png', video: 'yani-tabriz.mp4', alt: 'Tabriz perfume bottle beside the clock tower in Saat Square', caption: 'AI-generated perfume reveal', description: 'A cinematic product reveal connecting a fragrance to the city that inspired it.', role: 'Concept, AI image & video generation, editing', detail: 'An AI-generated perfume reveal for YANI’s Tabriz fragrance, set in Saat Square. Drones lift patterned fabric to unveil an oversized bottle, connecting the product to its namesake city. I developed the concept and handled the full production, including image generation, video generation and editing.', tags: ['Generative AI', 'Visual storytelling'] },
  { id: '03', category: 'Natural Language Processing', title: 'Biomedical NLP for Cancer Research', image: 'nlp-classifier.jpg', slides: [{image:'nlp-classifier.jpg', title:'Entity Relation Classifier'}, {image:'nlp-methodology.jpg', title:'Research Methodology'}, {image:'nlp-supervision.jpg', title:'Distant Supervision'}, {image:'nlp-results.jpg', title:'Final Results'}], alt: 'Presentation slide explaining sentence-level miRNA–gene relation classification', caption: 'Adapted research presentation slide', description: 'An academic review of how NLP can extract miRNA–gene relationships from biomedical literature.', role: 'Research review & presentation', detail: 'I researched and presented a Microsoft/Miroculus case study on extracting relationships between microRNAs and genes from biomedical literature. My contribution is the study and presentation of its methods and findings, including distant supervision and text classification. The model implementation and reported benchmark results belong to the cited study. This work concerns literature analysis, not a clinically validated diagnosis system.', source: 'https://devblogs.microsoft.com/ise/training-a-classifier-for-relation-extraction-from-medical-literature/', tags: ['Research synthesis', 'NLP'] },
  { id: '04', category: 'Computer Vision', title: 'Hand Tracking', image: 'hand-tracking.jpg', video: 'hand-tracking.mp4', alt: 'Illustrative laptop mockup showing hand landmarks', caption: 'AI-generated project illustration and animation', description: 'Exploring hand tracking and visual interaction through computer vision.', role: 'Computer vision project', detail: 'An exploration of hand tracking and visual interaction. The cover and animated film are AI-generated project illustrations, rather than recordings of the application. Project source code remains private.', tags: ['Computer vision', 'Human–computer interaction'] },
]

function Arrow({ diagonal = false }) { return <span aria-hidden="true">{diagonal ? '↗' : '↗'}</span> }

function ProjectCover({ project }) {
  if (project.slides) return <div className="nlp-cover" aria-label="Biomedical NLP research cover">
    <span className="eyebrow">Research / Language / Discovery</span>
    <div className="relation-art" aria-hidden="true"><span>miRNA</span><i /><span>gene</span></div>
    <strong>Biomedical NLP<br /><em>for Cancer Research</em></strong>
    <small>Research review & presentation · 4 slides</small>
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

function App() {
  const dialog = useRef(null)
  const [active, setActive] = useState(null)
  function openProject(project) { setActive(project); dialog.current.showModal() }
  function closeProject() { dialog.current.querySelector('video')?.pause(); dialog.current.close() }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header wrap">
      <a className="wordmark" href="#" aria-label="Taha Pourhassani home">TAHA<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a className="nav-contact" href="#contact">Let’s connect <Arrow /></a></nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-art" src="/media/moai-hero.jpg" alt="Cinematic Moai stone sculpture with emerald lighting and a distant Eiffel Tower" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Paris, France <span className="eyebrow-divider">/</span> Technology meets imagination</p>
            <h1 id="hero-title">Taha<br /><span>Pourhassani</span><span className="name-dot">.</span></h1>
            <p className="headline">Creative Technologist <span>|</span> Generative AI Creator <span>|</span> Computer Engineer</p>
            <p className="bio">I'm Taha, a Paris-based creative technologist with a background in Computer Engineering and professional experience in AI-driven media production. My work brings together generative AI, visual storytelling, and software engineering.</p>
            <div className="hero-actions"><a className="button primary" href="#work">Explore My Work <Arrow /></a><button className="button secondary" disabled title="The résumé PDF will be added soon">Resume coming soon <span aria-hidden="true">↓</span></button></div>
          </div>
          <div className="hero-bottom"><span>ENGINEERING × CREATIVE INTELLIGENCE</span><a href="#work">Scroll to explore <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>
      <section id="work" className="work wrap" aria-labelledby="work-title">
        <div className="section-top"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Ideas, made <em>tangible.</em></h2></div><p className="section-intro">From understanding intelligence<br />to creating with it.</p></div>
        <div className="project-grid">
          {projects.map(project => <article className="project" key={project.id}>
            <button className={`project-cover ${project.video ? 'film-cover' : ''}`} onClick={() => openProject(project)} aria-label={`View ${project.title}`}>
              <ProjectCover project={project} />
              <span className="cover-number">{project.id}</span><span className="cover-action">{project.video ? 'View film' : project.slides ? 'View 4 slides' : 'Explore project'} <Arrow /></span>
            </button>
            <div className="project-meta"><p className="eyebrow">{project.category}</p><span aria-hidden="true">↗</span></div>
            <h3><button onClick={() => openProject(project)}>{project.title}</button></h3>
            <p className="project-description">{project.description}</p>
            <p className="project-role">{project.role}</p>
          </article>)}
        </div>
      </section>
      <section id="about" className="about wrap" aria-labelledby="about-title"><p className="eyebrow">02 / At the intersection</p><div className="about-grid"><h2 id="about-title">A technical mind.<br /><em>A creative perspective.</em></h2><div><p>My work brings together generative AI, visual storytelling, and software engineering.</p><div className="disciplines"><span>Computer Engineering</span><span>Generative AI</span><span>AI-driven Media</span></div></div></div></section>
      <section id="contact" className="contact wrap" aria-labelledby="contact-title"><p className="eyebrow">03 / Connect</p><div className="contact-row"><h2 id="contact-title">Let’s make<br /><em>something matter.</em></h2><a className="button primary" href="https://github.com/tahapourhassani" target="_blank" rel="noreferrer">Connect on GitHub <Arrow /></a></div></section>
    </main>
    <footer className="wrap footer"><a className="wordmark" href="#">TAHA<span>.</span></a><p>© {new Date().getFullYear()} Taha Pourhassani</p><a href="#main">Back to top ↑</a></footer>
    <dialog ref={dialog} className="project-dialog" onClick={e => { if(e.target === e.currentTarget) closeProject() }} onCancel={closeProject}>
      {active && <div className="dialog-content"><button className="close-dialog" onClick={closeProject} aria-label="Close project">✕</button><p className="eyebrow">{active.category}</p><h2>{active.title}</h2><ProjectMedia key={active.id} project={active} /><p className="media-caption">{active.caption}</p><p className="detail-role">{active.role}</p><p className="detail-copy">{active.detail}</p>{active.source && <a className="source-link" href={active.source} target="_blank" rel="noreferrer">Read the original Microsoft/Miroculus case study ↗</a>}<div className="disciplines">{active.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>}
    </dialog>
  </>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
