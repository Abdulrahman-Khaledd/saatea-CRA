
import { useState } from "react";
import Navbar from "../../components/Header/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import heroimg from "../../assets/hero-img.gif";
import img_1 from "../../assets/New entries-cuate.svg";
import img_2 from "../../assets/img-2.svg";
import img_3 from "../../assets/img-3.svg";
import "./Home.css"
// import "../home/home.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    <Navbar/>
      <div className="home">

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <hgroup>
              <h1>احصل على توصيات لألواح طاقة شمسية مخصصة لمنزلك</h1>
              <p>
                اكتشف الآن ما هي أفضل الحلول المستدامة للطاقة الشمسية لمنزلك
                بالتفصيل.
              </p>
            </hgroup>
            <Link to="/signup" >
              <button>
                ابدأ الآن
              </button>
            </Link>
          </div>
          <div className="hero-image-container">
            <img src={heroimg} className="hero-image" alt="صورة متحركه للطاقه الشمسيه" />
          </div>
        </section>

        {/* How it works */}
        <section className="how-it-works">
          <h2>كيف تعمل المنصة</h2>
          <div className="steps">
            <div>
              <img src={img_1} alt="صوره إدخال البيانات" />
              <p>إدخال البيانات</p>
            </div>
            <div>
              <img src={img_2} alt="صوره احتساب التوصيات" />
              <p>احتساب التوصيات</p>
            </div>
            <div>
              <img src={img_3} alt="صوره الحصول على توصية" />
              <p>الحصول على توصية</p>
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
