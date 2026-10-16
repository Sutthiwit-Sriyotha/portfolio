import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={
 title:'Sutthiwit Sriyotha — Creative Software Portfolio',
 description:'Software Developer / Business Analyst / QA Engineer. Enterprise software workflows, QA testing and frontend development.',
 openGraph:{title:'Sutthiwit Sriyotha — Portfolio',description:'Software development, BA and QA project work.',type:'website'}
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body>{children}</body></html>
}