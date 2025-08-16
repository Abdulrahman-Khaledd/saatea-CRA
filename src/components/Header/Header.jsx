import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Logo } from "../"
import user_img from "../../assets/pages_images/default-avatar.svg";
import "./header.css"

export default function Header({pageLocation}) {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

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

        <Logo size="2"/>

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
        <nav className={`nav ${isMobileMenuOpen ? "active" : ""} d-flex align-items-lg-center`}>
          <div className="nav-links d-flex flex-md-row flex-column justify-content-between align-items-center">
        
            {pageLocation == 'Home' ? <Link to="/" className="active-link nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
              الرئيسية
            </Link> : <Link to="/" className="nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
              الرئيسية
            </Link> }
            
            { pageLocation == 'SolarCalculation' ? <Link to="/SolarCalculation" className="active-link nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
              حاسبة ساطع
            </Link> : <Link to="/SolarCalculation" className="nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
              حاسبة ساطع
            </Link>}

            <Link to="/faq" className="nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
              الأسئلة
            </Link>

            {pageLocation == 'Contact' ? <Link to="/contact" className="active-link nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
              التواصل
            </Link> : <Link to="/contact" className="nav-link" onClick={()=>{setIsMobileMenuOpen(false)}}>
              التواصل
            </Link>}

            <button
            className="nav-link"
            onClick={() => {
              setShowPopup(true);
              setIsMobileMenuOpen(false);
            }}
          >
            من نحن؟
          </button>

        </div>
        {/* User Profile */}
        <div className={`${isMobileMenuOpen && isLoggedIn ? "order-first" : "" } btn-group d-flex gap-3 align-items-center justify-content-lg-center justify-content-between`}>

            {isLoggedIn ? (
              <Link to="/profile" className={`user-profile d-flex align-items-center gap-2`} onClick={()=>{setIsMobileMenuOpen(false)}}>
                <img className="user-avatar" loading="lazy" src={user_img} alt="المستخدم" />
                {isMobileMenuOpen && (<div>حسابي</div>)}
              </Link>
            ) : (
            <>
              <Link to="/register" className="nav-btn">
                سجل الآن
              </Link>
              <Link to="/login" className="nav-btn-outline">
                دخول
              </Link>
            </>
            )}
        </div>

        </nav>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && ( <div className="mobile-overlay" onClick={()=>{setIsMobileMenuOpen(false)}}></div> )}

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
