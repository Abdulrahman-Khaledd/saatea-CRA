
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../../components";
import heroimg from "../../assets/pages_images/hero-img.gif";
import img_1 from "../../assets/pages_images/New entries-cuate.svg";
import img_2 from "../../assets/pages_images/undraw_result_d6p8.svg";
import img_3 from "../../assets/pages_images/undraw_choice_dzxz.svg";
import "./Home.css"


export default function Home() {
const [showPopup, setShowPopup] = useState(false);

  return (
    <>

    <Header pageLocation={'Home'}/>

      <div className="home">

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <hgroup>
              <h1>طاقة أنظف، حسابات أوضح</h1>
              <p>
                أدخِل أجهزتك، واحصل على تقرير شامل وعدد الألواح المطلوب.
              </p>
            </hgroup>
            <Link to="/register" >

              <button>
                ابدأ الآن
              </button>
            </Link>
          </div>
          <div className="hero-image-container">
            <img loading="lazy" src={heroimg} className="hero-image" alt="صورة متحركه للطاقه الشمسيه" />
          </div>
        </section>

        {/* How it works */}
        <section className="how-it-works">
          <h2>
              <span style={{backgroundColor:"#00b3e6",backgroundClip:"text"}} >ثلاث </span>خطوات لحساب احتياجك
          </h2>
          <div className="steps d-flex flex-column flex-lg-row justify-content-around align-items-center flex-wrap">
            <div>
              <img loading="lazy" src={img_1} alt="صوره إدخال البيانات" />
              <p>
                أدخل بيانات الإستهلاك
              </p>
            </div>  
            <div>
              <img loading="lazy" src={img_2} alt="صوره رؤيه النتيجه" />
              <p>
                رؤية النتيجة
              </p>
            </div>
            <div>
              <img loading="lazy" src={img_3} alt="صوره اتخاذ القرار " />
              <p>
                اتخاذ القرار
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits">
          <h3>ما هي فوائد الطاقة الشمسية</h3>
          <p>
            الطاقة الشمسية هي مصدر متجدد ومستدام للطاقة يساهم في تقليل فاتورة
            الكهرباء والحفاظ على البيئة وتقليل الاعتماد على المصادر التقليدية.
          </p>
        </section>



        {/* Popup */}
        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h3>من نحن؟</h3>
              <p>
                "هدفنا في ساطع هو إننا نسهّل عليكم كل شيء لما يخص الطاقة الشمسية،
                ونخليكم جزء من المستقبل في استخدام حلول الطاقة المتجددة. فلو
                مستنيين تبدأوا، كل اللي عليكم هو إنكم تتابعونا في المراحل الجاية
                من التطوير. إحنا جاهزين نكون معاكم في المستقبل!"
              </p>
              <button onClick={() => setShowPopup(false)}>خروج</button>
            </div>
          </div>
        )}
      </div>
    <Footer/>
    </>
  );
}
