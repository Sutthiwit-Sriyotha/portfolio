import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowUpRight,ChevronRight,CheckCircle2} from 'lucide-react';
import {projects,getProject} from '@/data/projects';
import {Navigation,ScrollEffects} from '@/components/Interactive';
import {asset} from '@/lib/asset';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const{slug}=await params;const p=getProject(slug);
 return {title:p?`${p.title} — Sutthiwit Sriyotha`:'Project not found'};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const{slug}=await params;const project=getProject(slug);if(!project)notFound();
 const idx=projects.findIndex(p=>p.slug===slug),next=projects[(idx+1)%projects.length];
 return <><ScrollEffects/><Navigation/><main className="case-page"><div className="container"><Link href="/#projects" className="back-link"><ArrowLeft size={17}/> Back to projects</Link><div className="case-top" data-rise><span className="eyebrow">{project.id} / {project.category}</span><h1>{project.title}<span>{project.subtitle}</span></h1><div className="case-top-bottom"><p>{project.description}</p><span>{project.role||'Role and implementation details pending verification'}</span></div></div>
 <div className="case-main-image" data-rise><Image src={asset(project.thumbnail)} alt={`${project.title} ${project.previewType==='concept'?'illustrative concept visual':'project image'}`} fill priority sizes="100vw"/><span className="case-image-label">{project.previewType==='concept'?'CONCEPT VISUAL · NOT ACTUAL PRODUCTION UI':'PROJECT VISUAL'}</span></div>
 <div className="case-meta"><div><span className="eyebrow">ROLE</span><p>{project.role||'To be confirmed'}</p></div><div><span className="eyebrow">TYPE</span><p>{project.category}</p></div><div><span className="eyebrow">TECHNOLOGIES</span><p>{project.technologies.length?project.technologies.join(' · '):'Not yet verified'}</p></div></div>
 <div className="case-content-grid"><aside><span className="eyebrow">PROJECT BREAKDOWN</span><h2>The story<br/>behind the work.</h2></aside><div className="case-sections">
 <section data-rise><span className="case-number">01 / CONTEXT</span><h3>Overview</h3><p>{project.overview}</p></section>
 <section data-rise><span className="case-number">02 / OBJECTIVES</span><h3>What mattered</h3>{project.goals.length?<ul>{project.goals.map(x=><li key={x}>{x}</li>)}</ul>:<p>To be confirmed.</p>}</section>
 <section data-rise><span className="case-number">03 / CHALLENGES</span><h3>The challenges</h3>{project.challenges.length?<ul>{project.challenges.map(x=><li key={x}>{x}</li>)}</ul>:<p>Project challenges await verified details.</p>}</section>
 <section data-rise><span className="case-number">04 / PROCESS</span><h3>Approach & process</h3>{project.process.length?<ol>{project.process.map(x=><li key={x}>{x}</li>)}</ol>:<p>Process details are intentionally not invented.</p>}</section>
 <section data-rise><span className="case-number">05 / CONTRIBUTIONS</span><h3>My responsibilities</h3>{project.contributions.length?<ul>{project.contributions.map(x=><li key={x}>{x}</li>)}</ul>:<p>Role and contributions pending confirmation.</p>}</section>
 <section data-rise><span className="case-number">06 / TAKEAWAYS</span><h3>Lessons learned</h3>{project.lessons.length?<ul>{project.lessons.map(x=><li key={x}>{x}</li>)}</ul>:<p>Will be updated when project details are verified.</p>}</section>
 </div></div>
 <div className="case-gallery-section" data-rise><span className="eyebrow">VISUAL PRESENTATION</span><h2>Behind the interface.</h2><div className="case-gallery-grid">{project.screenshots.map((shot,i)=><div className="case-gallery-image" key={shot.src}><Image src={asset(shot.src)} alt={`${shot.label} — ${shot.previewType}`} fill sizes="(max-width: 800px) 90vw, 55vw"/><span>{String(i+1).padStart(2,'0')} — {shot.label}<em>{shot.previewType==='concept'?' / CONCEPT PREVIEW':''}</em></span></div>)}</div><p className="visual-disclaimer">Visuals labelled Concept Preview are illustrative and can be replaced with approved project screenshots without changing the site components.</p></div>
 <Link href={`/projects/${next.slug}/`} className="next-project"><span>NEXT PROJECT / {next.id}</span><strong>{next.title}</strong><ArrowUpRight size={33}/></Link></div></main><footer className="footer"><div className="container"><Link href="/#home">SUTTHIWIT.</Link><span>© 2026</span></div></footer></>}