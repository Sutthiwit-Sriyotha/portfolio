'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';
import {ArrowUpRight,ArrowDown,ArrowLeft,ChevronLeft,ChevronRight,ExternalLink,X,Menu,CheckCircle2,FileCode2,Github,Mail,Layers3,MoveUpRight} from 'lucide-react';
import {projects,type Project} from '@/data/projects';
import {asset} from '@/lib/asset';

export function ScrollEffects(){
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let cancelled=false;
  Promise.all([import('gsap'),import('gsap/ScrollTrigger')]).then(([g,st])=>{
   if(cancelled)return;
   const gsap=g.gsap;const ScrollTrigger=st.ScrollTrigger;gsap.registerPlugin(ScrollTrigger);
   const ctx=gsap.context(()=>{
    gsap.utils.toArray<HTMLElement>('[data-rise]').forEach(el=>{
     gsap.fromTo(el,{y:54,opacity:0,filter:'blur(7px)'},{y:0,opacity:1,filter:'blur(0px)',duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}});
    });
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach(el=>{
     gsap.fromTo(el,{yPercent:6},{yPercent:-6,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:.7}});
    });
    gsap.utils.toArray<HTMLElement>('.hero-copy h1 span, .role-line, .hero-tagline, .hero-actions').forEach((el,i)=>{
      gsap.fromTo(el,{y:38,opacity:0,filter:'blur(10px)'},{y:0,opacity:1,filter:'blur(0px)',duration:.85,delay:.11*i,ease:'power3.out'});
    });
    gsap.utils.toArray<HTMLElement>('.project-image-button').forEach((el,i)=>{
      gsap.fromTo(el,{clipPath:i%2===0?'inset(0 100% 0 0 round 25px)':'inset(0 0 0 100% round 25px)'},{clipPath:'inset(0 0% 0 0% round 25px)',duration:1.15,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}});
    });
    const ribbon=document.querySelector<HTMLElement>('[data-horizontal-track]');
    if(ribbon){gsap.fromTo(ribbon,{xPercent:6},{xPercent:-8,ease:'none',scrollTrigger:{trigger:ribbon,start:'top bottom',end:'bottom top',scrub:1}})}
    const cards=gsap.utils.toArray<HTMLElement>('[data-float-card]');
    cards.forEach((el,i)=>{
     gsap.fromTo(el,{y:110,rotateX:6,rotateY:i%2?4:-4,scale:.94,opacity:.25},{y:0,rotateX:0,rotateY:0,scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:el,start:'top 100%',end:'top 60%',scrub:.7}})
    });
    gsap.utils.toArray<HTMLElement>('[data-line]').forEach(el=>{
      gsap.fromTo(el,{scaleY:0},{scaleY:1,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:el,start:'top 82%',end:'bottom 65%',scrub:true}})
    });
   });
   window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
   (window as unknown as {__portfolioGsapCleanup?:()=>void}).__portfolioGsapCleanup=()=>ctx.revert();
  });
  return()=>{cancelled=true;(window as unknown as {__portfolioGsapCleanup?:()=>void}).__portfolioGsapCleanup?.()};
 },[]);
 return null;
}

export function Navigation(){
 const[active,setActive]=useState('home'); const[scrolled,setScrolled]=useState(false); const[open,setOpen]=useState(false);
 useEffect(()=>{
  const update=()=>{setScrolled(window.scrollY>28);let id='home';document.querySelectorAll<HTMLElement>('section[id],header[id]').forEach(el=>{if(el.getBoundingClientRect().top<200)id=el.id});setActive(id)};
  update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);
 },[]);
 const nav=[['home','Home'],['about','About'],['projects','Projects'],['experience','Experience'],['skills','Skills'],['contact','Contact']];
 return <nav className={'site-nav '+(scrolled?'is-scrolled':'')} aria-label="Main navigation"><div className="nav-inner">
  <Link href="/#home" className="wordmark">SUTTHIWIT<span>.</span></Link>
  <div className={'nav-links '+(open?'nav-open':'')}>{nav.map(([id,label])=><Link key={id} href={'/#'+id} onClick={()=>setOpen(false)} className={active===id?'active':''}>{label}</Link>)}</div>
  <div className="nav-right"><span className="availability"><i/>Available for opportunities</span><button type="button" className="menu-button" onClick={()=>setOpen(o=>!o)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X size={21}/>:<Menu size={21}/>}</button></div>
 </div></nav>
}

export function SceneHero(){
 const ref=useRef<HTMLDivElement>(null); const reduce=useReducedMotion();
 const move=(e:React.PointerEvent<HTMLDivElement>)=>{
  if(reduce||!ref.current||window.matchMedia('(pointer:coarse)').matches)return;
  const r=ref.current.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  ref.current.style.setProperty('--rx',`${-y*7}deg`);ref.current.style.setProperty('--ry',`${x*9}deg`);
 };
 return <div ref={ref} onPointerMove={move} onPointerLeave={()=>{ref.current?.style.setProperty('--rx','0deg');ref.current?.style.setProperty('--ry','0deg')}} className="hero-scene" aria-label="Illustrative 3D quality assurance workflow">
  <div className="hero-back-orbit orbit-one"/><div className="hero-back-orbit orbit-two"/>
  <div className="scene-depth depth-back"><span className="scene-badge badge-a">01 / REQUIREMENTS</span><span className="scene-badge badge-b">02 / VALIDATION</span></div>
  <div className="scene-depth depth-main"><Image src={asset('/visuals/hero.webp')} alt="Illustrative layered QA dashboard with requirements, API checks, defect tracking and database validation" fill priority sizes="(max-width: 900px) 100vw, 52vw" /></div>
  <div className="scene-depth depth-front"><span className="float-pill pill-left"><CheckCircle2 size={15}/> TESTED</span><span className="float-pill pill-right"><Layers3 size={15}/> 3D WORKFLOW</span></div>
 </div>
}

export function TicketConcept(){return <div className="ticket-concept" aria-label="Illustrative ticket management interface with fictional data"><div className="ticket-ui-header"><span>Tickets / Overview</span><span>All priorities <span className="ticket-ui-dot"/></span></div><div className="ticket-columns"><div><b>TO DO <small>02</small></b><div className="ticket-ui-card"><span>TK-021 · HIGH</span><strong>Access request</strong><i>Support team</i></div><div className="ticket-ui-card"><span>TK-024 · LOW</span><strong>Profile update</strong><i>HR team</i></div></div><div><b>IN PROGRESS <small>01</small></b><div className="ticket-ui-card accent"><span>TK-030 · MEDIUM</span><strong>SLA escalation</strong><i>IT operations</i></div></div><div><b>DONE <small>02</small></b><div className="ticket-ui-card done"><span>TK-018 · CLOSED</span><strong>API validation</strong><i>Engineering</i></div><div className="ticket-ui-card done"><span>TK-019 · CLOSED</span><strong>Issue retested</strong><i>Quality team</i></div></div></div><div className="ticket-ui-bottom">ILLUSTRATIVE UI · FICTIONAL DEMO DATA</div></div>}

export function TiltCard({project,onOpen}:{project:Project,onOpen:(p:Project)=>void}){
 const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();
 const onMove=(e:React.PointerEvent<HTMLElement>)=>{
  if(reduced||!ref.current||window.matchMedia('(pointer:coarse)').matches)return;
  const r=ref.current.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  ref.current.style.setProperty('--tiltx',`${-y*5}deg`);ref.current.style.setProperty('--tilty',`${x*7}deg`);ref.current.style.setProperty('--px',`${x*13}px`);ref.current.style.setProperty('--py',`${y*12}px`)
 };
 return <article ref={ref} onPointerMove={onMove} onPointerLeave={()=>{if(ref.current){ref.current.style.setProperty('--tiltx','0deg');ref.current.style.setProperty('--tilty','0deg');ref.current.style.setProperty('--px','0px');ref.current.style.setProperty('--py','0px')}}} className="project-card" data-float-card>
  <button className="project-image-button" type="button" onClick={()=>onOpen(project)} aria-label={`Open ${project.title} 3D project gallery`}>
   <div className="image-layer layer-shadow"/><div className="image-layer layer-back"/><div className="image-layer layer-mid"/>
   <Image src={asset(project.thumbnail)} alt={`${project.title} — ${project.previewType==='concept'?'illustrative concept graphic':'project image'}`} fill sizes="(max-width: 800px) 100vw, 48vw" className="project-art"/>
   <span className="image-overlay-label">{project.previewType==='concept'?'CONCEPT VISUAL · NOT A PRODUCT SCREENSHOT':'PROJECT IMAGE'}</span>
   <span className="image-launch"><MoveUpRight size={17}/></span>
  </button>
  <div className="project-info"><div className="project-info-top"><span>{project.id} / {project.eyebrow}</span><span>{project.category}</span></div><div className="project-title-row"><h3>{project.title}<span>{project.subtitle}</span></h3><button onClick={()=>onOpen(project)} aria-label={`Preview ${project.title}`} className="round-link" type="button"><ArrowUpRight size={23}/></button></div><p>{project.description}</p><div className="project-bottom">{project.technologies.length?project.technologies.slice(0,4).map(t=><span className="tech-tag" key={t}>{t}</span>):<span className="tech-tag">Unverified details intentionally omitted</span>}<Link className="case-route-link" href={`/projects/${project.slug}/`}>Full case study <ArrowUpRight size={15}/></Link></div></div>
 </article>
}

export function LayeredProjectGallery({project,onClose}:{project:Project,onClose:()=>void}){
 const[index,setIndex]=useState(0);const[expanded,setExpanded]=useState(false);const reduce=useReducedMotion();
 const shots=project.screenshots;
 useEffect(()=>{
  const prior=document.activeElement as HTMLElement|null;
  document.body.style.overflow='hidden';
  const key=(e:KeyboardEvent)=>{
   if(e.key==='Escape'){if(expanded)setExpanded(false);else onClose()}
   if(e.key==='ArrowRight')setIndex(i=>(i+1)%shots.length);
   if(e.key==='ArrowLeft')setIndex(i=>(i-1+shots.length)%shots.length);
  };document.addEventListener('keydown',key);
  return()=>{document.body.style.overflow='';document.removeEventListener('keydown',key);prior?.focus()}
 },[onClose,expanded,shots.length]);
 return <motion.div className="gallery-backdrop" role="presentation" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
 <div className="gallery-scrim" onClick={onClose}/>
 <motion.section role="dialog" aria-modal="true" aria-label={`${project.title} project gallery`} className="gallery-panel" initial={reduce?false:{y:45,opacity:0,scale:.97}} animate={{y:0,opacity:1,scale:1}} exit={{y:30,opacity:0,scale:.98}} transition={{duration:.43,ease:[.16,1,.3,1]}}>
 <div className="gallery-head"><div><span className="eyebrow">IMMERSIVE CASE STUDY / {project.id}</span><h2>{project.title}</h2><p>{project.subtitle}</p></div><button type="button" onClick={onClose} aria-label="Close gallery" className="gallery-close"><X size={22}/></button></div>
 <div className="gallery-stage">
 <div className="gallery-layer gallery-rear" aria-hidden="true"/><div className="gallery-layer gallery-mid" aria-hidden="true"/>
 <button type="button" className="gallery-image" onClick={()=>setExpanded(true)} aria-label="Enlarge active visual"><Image src={asset(shots[index].src)} alt={`${shots[index].label} — ${shots[index].previewType==='concept'?'illustration':'screenshot'}`} fill sizes="(max-width: 800px) 90vw, 65vw" /><span className="gallery-zoom">Click to enlarge <ArrowUpRight size={15}/></span></button>
 </div>
 <div className="gallery-foot"><div><b>{shots[index].label}</b><span>{shots[index].previewType==='concept'?'Illustrative concept — not a production screenshot':'Project screen'}</span></div><div className="gallery-controls"><button type="button" onClick={()=>setIndex(i=>(i-1+shots.length)%shots.length)} disabled={shots.length<2} aria-label="Previous screenshot"><ChevronLeft/></button><span>{String(index+1).padStart(2,'0')} / {String(shots.length).padStart(2,'0')}</span><button type="button" onClick={()=>setIndex(i=>(i+1)%shots.length)} disabled={shots.length<2} aria-label="Next screenshot"><ChevronRight/></button><Link href={`/projects/${project.slug}/`} onClick={onClose}>Full case study <ArrowUpRight size={16}/></Link></div></div>
 </motion.section>
 {expanded&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded project image"><button type="button" onClick={()=>setExpanded(false)} aria-label="Close expanded image" className="gallery-close lightbox-close"><X/></button><div className="lightbox-img"><Image src={asset(shots[index].src)} alt={shots[index].label} fill sizes="100vw"/></div><span>{shots[index].previewType==='concept'?'CONCEPT VISUAL · NOT A REAL SCREENSHOT':shots[index].label}</span></div>}
 </motion.div>
}

export function ProjectsGrid(){const[selected,setSelected]=useState<Project|null>(null);return <><div className="projects-grid">{projects.map(project=><TiltCard key={project.slug} project={project} onOpen={setSelected}/>)}</div><AnimatePresence>{selected&&<LayeredProjectGallery key={selected.slug} project={selected} onClose={()=>setSelected(null)}/>}</AnimatePresence></>}

export function ContactButton(){const ref=useRef<HTMLAnchorElement>(null);const reduce=useReducedMotion();return <a ref={ref} href="mailto:sutthiwitsriyotha@gmail.com" className="magnetic-btn" onPointerMove={e=>{if(reduce||!ref.current||window.matchMedia('(pointer:coarse)').matches)return;const r=ref.current.getBoundingClientRect();ref.current.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`}} onPointerLeave={()=>{if(ref.current)ref.current.style.transform='translate(0,0)'}}>Let&apos;s connect <ArrowUpRight size={23}/></a>}