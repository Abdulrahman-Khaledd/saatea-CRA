// import { Link } from "react-router-dom";
import "./footer.css";

const CurrentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="footer">
      {/* <div className="links d-flex flex-lg-row flex-column gap-2 align-items-center justify-content-center">
      <Link to="/contact">اتصل بنا </Link>
      <Link to="/faq">الأسئلة الشائعة</Link>
      <Link to="/">الرئيسية</Link>
      </div> */}
      <p className="">
        جميع الحقوق محفوظة <span className="text-primary" > ساطع </span> &copy; {CurrentYear}
      </p>
    </footer>
  );
}
