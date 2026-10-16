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
 slug:'joins-plus',id:'01',title:'JOINS+',subtitle:'Leave & Recruitment Management',eyebrow:'ENTERPRISE HR',category:'Enterprise HR Platform',
 role:'Business Analyst & QA / Tester',
 description:'Improving leave and recruitment workflows for employees, HR teams and applicants.',
 technologies:['Taiga','Figma','DBeaver','PostgreSQL','SSMS','Docker','Fork'],
 contributions:['Requirement analysis and SRS documentation','User flow and workflow analysis','Test plans, cases and scripts','Functional and regression testing','UI and responsive verification','Bug tracking, retesting and UAT support','Data verification'],
 thumbnail:'/projects/joins-plus/cover.svg',
 screenshots:[{src:'/projects/joins-plus/cover.svg',label:'HR workflow visual',previewType:'concept'}],previewType:'concept',
 overview:'A business-analysis and testing internship project covering HR leave requests, approvals and recruitment workflows.',
 goals:['Understand HR user needs and business rules','Translate workflows into testable acceptance conditions','Support reliable UAT and defect follow-up'],
 challenges:['Turning approval and leave rules into precise test cases','Verifying data consistency across workflows','Coordinating requirement changes with users and developers'],
 process:['Gathered and documented requirements and SRS','Mapped workflow and user flows','Prepared test plans, test cases and test scripts','Executed functional, responsive and regression testing','Recorded issues, supported UAT and retested fixes'],
 lessons:['Clarifying requirements early prevents costly rework','Test evidence and clear defect reports improve developer collaboration'],
 externalLinks:[]
 },
 {
 slug:'ticket-system',id:'02',title:'Ticket Management System',subtitle:'Workflow & Issue Management',eyebrow:'ILLUSTRATIVE CONCEPT',category:'Workflow / Issue Management',
 role:null,description:'A visual concept for organizing tickets, priorities, statuses, filters and issue details.',
 technologies:[],contributions:[],
 thumbnail:'/projects/ticket-system/concept.svg',screenshots:[{src:'/projects/ticket-system/concept.svg',label:'Ticket workflow illustration',previewType:'concept'}],previewType:'concept',
 overview:'An illustrative ticket-management interface presentation. The project role, real implementation features and technology stack are intentionally left unverified until confirmed.',
 goals:['Present a legible and replaceable ticket-workflow concept'],challenges:[],process:[],lessons:[],externalLinks:[]
 },
 {
 slug:'up-psf',id:'03',title:'UP-PSF',subtitle:'Professional Standards Framework',eyebrow:'UNIVERSITY PLATFORM',category:'Enterprise Education Platform',
 role:'Software Developer — Frontend Focus',description:'University teaching-standard assessment and document workflow platform.',
 technologies:['Next.js','React','TypeScript','Tailwind CSS','NestJS REST API','MinIO'],
 contributions:['Developed responsive frontend interfaces and dynamic assessment forms','Implemented role-based access interfaces','Integrated REST APIs and file-upload/preview flows','Supported cross-browser verification and UAT'],
 thumbnail:'/projects/up-psf/cover.svg',screenshots:[{src:'/projects/up-psf/cover.svg',label:'Assessment workflow visual',previewType:'concept'}],previewType:'concept',
 overview:'UP-PSF is a University of Phayao platform for professional teaching-standard assessment, document submission and approvals.',
 goals:['Make complex assessment forms understandable and responsive','Connect secure workflows to backend services','Support structured document handling and review'],
 challenges:['Dynamic forms and different permission states','Upload and preview integration with MinIO','Coordinating frontend changes with backend delivery'],
 process:['Built responsive UI using Next.js and TypeScript','Integrated NestJS REST APIs','Implemented role-aware screens and dynamic form behavior','Supported browser testing and UAT'],
 lessons:['Clear UI states matter in multi-step enterprise flows','Frontend testing benefits from early backend collaboration'],externalLinks:[]
 }
];
export function getProject(slug:string){return projects.find(project=>project.slug===slug)}