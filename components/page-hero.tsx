import { Reveal } from './reveal';
export function PageHero({index,kicker,title,copy}:{index:string,kicker:string,title:string,copy:string}){return <section className="page-hero"><div className="page-orbit"/><Reveal><p className="eyebrow">{index} / {kicker}</p><h1>{title}</h1><p className="lede">{copy}</p></Reveal></section>}
