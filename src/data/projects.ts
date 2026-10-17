export type PreviewType = 'real' | 'concept' | 'placeholder';
export type Project = {
 slug:string; id:string; title:string; subtitle:string; eyebrow:string; category:string;
 role:string | null; description:string; technologies:string[]; contributions:string[];
 thumbnail:string; screenshots:{src:string;label:string;previewType:PreviewType}[];
 previewType:PreviewType; overview:string; goals:string[]; challenges:string[];
 process:string[]; lessons:string[]; externalLinks:{label:string;href:string}[];
};

export const projects: Project[] = [
 {
 slug:'joins-plus',id:'01',title:'JOiNS+ HR Portal',subtitle:'Enterprise HR Management System',eyebrow:'ENTERPRISE HR',category:'Enterprise HR Platform',
 role:'Business Analyst & QA / Tester',
 description:'Improving leave and recruitment workflows for employees, HR teams and applicants.',
 technologies:['Taiga','Figma','DBeaver','PostgreSQL','SSMS','Docker','Fork'],
 contributions:['Requirement analysis and SRS documentation','User flow and workflow analysis','Test plans, cases and scripts','Functional and regression testing','UI and responsive verification','Bug tracking, retesting and UAT support','Data verification'],
 thumbnail:'/projects/joins-plus/cover.webp',
 screenshots:[{src:'/projects/joins-plus/cover.webp',label:'Illustrative HR workflow concept — not a company screenshot',previewType:'concept'}],previewType:'concept',
 overview:'A business-analysis and testing internship project covering HR leave requests, approvals and recruitment workflows.',
 goals:['Understand HR user needs and business rules','Translate workflows into testable acceptance conditions','Support reliable UAT and defect follow-up'],
 challenges:['Turning approval and leave rules into precise test cases','Verifying data consistency across workflows','Coordinating requirement changes with users and developers'],
 process:['Gathered and documented requirements and SRS','Mapped workflow and user flows','Prepared test plans, test cases and test scripts','Executed functional, responsive and regression testing','Recorded issues, supported UAT and retested fixes'],
 lessons:['Clarifying requirements early prevents costly rework','Test evidence and clear defect reports improve developer collaboration'],
 externalLinks:[]
 },
 {
 slug:'mega-t',id:'02',title:'MEGA-T ITSM Platform',subtitle:'Enterprise IT Service Management',eyebrow:'ENTERPRISE ITSM · CONCEPT ART',category:'Enterprise IT Service Management',
 role:'BA & QA Tester Intern',description:'Enterprise ITSM testing across ticket workflows, priority handling, SLA rules and role-based access.',
 technologies:['Playwright','Vitest','PostgreSQL','API testing'],contributions:['Tested ticket workflows, priority rules and SLA calculations','Verified access permissions and data isolation','Investigated defects through API payloads, database records and logs'],
 thumbnail:'/projects/ticket-system/concept.webp',screenshots:[{src:'/projects/ticket-system/concept.webp',label:'Illustrative ITSM interface — not an actual screenshot',previewType:'concept'}],previewType:'concept',
 overview:'MEGA-T ITSM Platform — internship QA work involving ticket workflows, SLAs, RBAC and data verification. The visual remains illustrative until an approved project screenshot is available.',
 goals:['Validate ticket, permission and SLA behavior','Check expected versus actual behavior for critical workflow rules'],challenges:['Investigating issues across UI, API and database layers'],process:['Designed and executed UI and API tests','Checked access permissions and data isolation','Reproduced defects and supported retesting'],lessons:[],externalLinks:[]
 },
 {
 slug:'up-psf',id:'03',title:'UP-PSF Digital Assessment System',subtitle:'Professional Standards Framework',eyebrow:'UNIVERSITY PLATFORM',category:'Enterprise Education Platform',
 role:'Software Developer — Frontend Focus',description:'University teaching-standard assessment and document workflow platform.',
 technologies:['Next.js','React','TypeScript','Tailwind CSS','NestJS REST API','MinIO'],
 contributions:['Developed responsive frontend interfaces and dynamic assessment forms','Implemented role-based access interfaces','Integrated REST APIs and file-upload/preview flows','Supported cross-browser verification and UAT'],
 thumbnail:'/projects/up-psf/actual-screen.png',screenshots:[{src:'/projects/up-psf/actual-screen.png',label:'Actual UP-PSF system screenshot',previewType:'real'}],previewType:'real',
 overview:'UP-PSF is a University of Phayao platform for professional teaching-standard assessment, document submission and approvals.',
 goals:['Make complex assessment forms understandable and responsive','Connect secure workflows to backend services','Support structured document handling and review'],
 challenges:['Dynamic forms and different permission states','Upload and preview integration with MinIO','Coordinating frontend changes with backend delivery'],
 process:['Built responsive UI using Next.js and TypeScript','Integrated NestJS REST APIs','Implemented role-aware screens and dynamic form behavior','Supported browser testing and UAT'],
 lessons:['Clear UI states matter in multi-step enterprise flows','Frontend testing benefits from early backend collaboration'],externalLinks:[]
 },
 {
 slug:'restaurant-management',id:'04',title:'Restaurant Management Web App',subtitle:'QR Ordering & Restaurant Operations',eyebrow:'FULL-STACK DEVELOPMENT',category:'Development Project',
 role:'Full-stack Development',description:'QR ordering, restaurant staff workflows and dashboard management.',
 technologies:['REST API','Dashboard','QR Ordering','Excel reporting'],
 contributions:['Built QR-based ordering and real-time order tracking','Developed store dashboard, payment confirmation and Excel reporting'],
 thumbnail:'/projects/restaurant-management/actual-screen.png',
 screenshots:[{src:'/projects/restaurant-management/actual-screen.png',label:'Actual Restaurant Management Web App screenshot',previewType:'real'}],previewType:'real',
 overview:'A restaurant web application supporting QR ordering and operational workflows for staff.',
 goals:['Support convenient ordering and restaurant operations'],challenges:[],
 process:['Implemented ordering and order-tracking features','Built operational dashboard and reporting'],
 lessons:[],externalLinks:[]
 },
 {
 slug:'tamroi',id:'05',title:'TAMROI Online Plant Store',subtitle:'Responsive E-commerce Experience',eyebrow:'UX/UI & FRONTEND',category:'UX/UI & Front-end Project',
 role:'UX/UI & Front-end Design',description:'Responsive online plant store experience for browsing and buying plants.',
 technologies:['Figma','UX/UI','Responsive UI'],
 contributions:['Conducted user research and created Figma prototypes','Worked on responsive shopping interface design'],
 thumbnail:'/projects/tamroi/actual-screen.png',
 screenshots:[{src:'/projects/tamroi/actual-screen.png',label:'Actual TAMROI Online Plant Store screenshot',previewType:'real'}],previewType:'real',
 overview:'A plant-store project focused on shopping experience and responsive interface design.',
 goals:['Improve clarity of browsing and buying plants'],challenges:[],
 process:['Conducted user research','Produced UX/UI prototypes in Figma','Worked on responsive UI'],
 lessons:[],externalLinks:[]
 }
];
export function getProject(slug:string){return projects.find(project=>project.slug===slug)}