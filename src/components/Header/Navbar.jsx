// import navlogo from "../home/home_image/nav-logo.svg";
import {Logo} from "../Logo"
// import user_img from "../home/home_image/user-img.png";
// import "./home.css";
import "./header.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
  const onShowPopup = () => {
    setShowPopup(true);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <header className="header">
      {/* <div cla  ssName="logo"> */}
        {/* img src={navlogo} alt="ساطع" /> */}
        <Logo size="2"/>

      {/* </div> */}

      {/* Mobile Menu Toggle */}
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={()=>{setIsMobileMenuOpen(!isMobileMenuOpen)}}
        aria-label="فتح القائمة"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`nav ${isMobileMenuOpen ? "active" : ""} d-flex  justify-content-between align-items-lg-center`}>
        <div className="nav-links d-flex flex-md-row flex-column order-first justify-content-between align-items-center">
       
          <Link to="/" className="nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
            الرئيسية
          </Link>
          <Link to="/faq" className="nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
            الأسئلة
          </Link>
          <Link to="/contact" className="nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
            التواصل
          </Link>
          <button
          className="nav-link"
          onClick={() => {
            onShowPopup();
            setIsMobileMenuOpen(false);
          }}
        >
          من نحن؟
        </button>

       </div>
      {/* User Profile */}
      <div className=" d-flex flex-column gap-3 flex-md-row align-items-center justify-content-md-center justify-content-between">
        {/* <span className="user-name">المستخدم</span> */}
        {/* <img className="user-avatar" src={user_img} alt="المستخدم" /> */}
          <Link to="/signup" className="nav-btn">
          سجل الآن
        </Link>
        <Link to="/login" className="nav-btn-outline">
          دخول
        </Link>
      </div>

      </nav>


      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={()=>{setIsMobileMenuOpen(false)}}></div>
      )}
    </header>
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
    </>
  );
}
