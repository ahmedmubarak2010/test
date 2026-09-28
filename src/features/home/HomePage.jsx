import {Link} from "react-router-dom";
import {courses,opportunities} from "../../data/demo";
import CourseCard from "../../components/ui/CourseCard";
export default function HomePage(){
 return <main>
  <section className="hero"><span className="eyebrow">منصة التعلم العربية للطلاب والطموحين</span><h1>تعلّم بذكاء.<br/><em>ابنِ مستقبلك.</em></h1><p>دورات عملية، منح وفرص، مسابقات وفعاليات — كل ما تحتاجه لتتقدم خطوة كل يوم.</p>
  <div className="search"><span>⌕</span><input placeholder="ابحث عن دورة، منحة، مسابقة..."/><Link to="/catalog">بحث</Link></div>
  <div className="quick"><span>مقترح:</span><Link to="/catalog">Python</Link><Link to="/catalog">تحليل البيانات</Link><Link to="/scholarships">منح</Link></div></section>
  <section className="announcement"><div><small>فرصة جديدة</small><h3>ابدأ رحلة التعلم وحقق أول إنجاز لك</h3><p>تابع تقدمك واحصل على شهادات عند إكمال المسارات.</p></div><Link to="/catalog">استكشف الدورات</Link></section>
  <section className="section twin"><div><div className="sectionHead"><Link to="/catalog">عرض الكل ←</Link><h2>دورات مميزة <i>▤</i></h2></div><div className="cards">{courses.slice(0,2).map(c=><CourseCard key={c.id} course={c}/>)}</div></div>
  <div><div className="sectionHead"><Link to="/scholarships">عرض الكل ←</Link><h2>المنح والفرص <i>✦</i></h2></div><div className="cards">{opportunities.slice(0,2).map((x,i)=><article className="scholarCard" key={x}><span className="chip">ينتهي خلال {i?18:7} يوم</span><h3>{x}</h3><p>فرصة تطوير مهارات، تدريب عملي وشهادة للطلاب والمهتمين بالتقنية.</p><Link to="/scholarships">عرض التفاصيل</Link></article>)}</div></div></section>
  <section className="stats"><div><b>12K+</b><span>متعلم نشط</span></div><div><b>180+</b><span>دورة ومسار</span></div><div><b>65+</b><span>منحة وفرصة</span></div><div><b>40+</b><span>مسابقة وفعالية</span></div></section>
 </main>
}