import { Link,NavLink } from "react-router-dom";
const links=[["الرئيسية","/"],["الدورات","/catalog"],["المنح والفرص","/scholarships"],["لوحتي","/dashboard"]];
export default function Header(){
 return <header className="header">
  <div className="actions"><button className="iconBtn">⌕</button><button className="iconBtn">♢</button></div>
  <nav>{links.map(([label,to])=><NavLink key={to} to={to} end={to==="/"}>{label}</NavLink>)}</nav>
  <Link className="brand" to="/"><span>أكاديمية خوارزم</span><b>خ</b></Link>
 </header>
}