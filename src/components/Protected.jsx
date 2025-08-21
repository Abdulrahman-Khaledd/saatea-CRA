import { Link } from "react-router-dom";
import { Header, Footer } from "./";
import { useAuth } from "../hooks/useAuth";
import unauthImg from "../assets/pages_images/unauth.svg"
const Protected = ({children , forceAppear = false }) => {

  const {isValidUser , isLoading} = useAuth()

  return (
    <>

      {isLoading && (        
        <div className="loading-overlay">
          <div className="loading-content text-center">
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">جاري التحميل...</span>
            </div>
              <h2>جاري التحميل...</h2>
          </div>
        </div>
      ) }


      {!isValidUser || forceAppear ? (<>
        <Header />

        <main className="d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
          <img 
            src={unauthImg} 
            alt="Unauthorized access" 
            className="img-fluid mb-4" 
            style={{ maxWidth: "400px", width: "80%" }} 
          />

          {!forceAppear ? (
            <div className="account-container text-center d-flex flex-column align-items-center gap-3 px-3">
              <h1 className="fw-bold">سجل دخولك أولًا للوصول إلى هذه الصفحة</h1>
              <Link to="/login" className="btn btn-secondary w-100 w-md-50">
                تسجيل الدخول
              </Link>
          </div>
          ) : (
            <div className="account-container text-center d-flex flex-column align-items-center gap-3 px-3">
              <h1 className="fw-bold">غير مصرح لك بالوصول إلى هذه الصفحة</h1>
              <Link to="/" className="btn btn-secondary w-100 w-md-50">
                العودة الى الرئيسية
              </Link>
            </div>
          )}
        </main>

        <Footer />
      </>)
    : (children) }

    </>

  ); 

}

export default Protected;
