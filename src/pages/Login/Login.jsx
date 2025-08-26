import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header, Footer } from "../../components";
import './Login.css';
export default function Login() {
  document.title = 'تسجيل دخول';
  const Navigate = useNavigate();
  const [form, setForm] = useState({
    phone: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {

    const newErrors = {};

    if (!form.phone) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^(\+20|0)?1[0125][0-9]{8}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }

    if (!form.password) newErrors.password = ' رقم المرور غير صحيح';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = (process.env.NODE_ENV || 'production') === 'development'
    ? 'http://192.168.1.20'
    : 'https://saatea.great-site.net';


    if (validateForm()) {

      try{
        const res = await fetch(URL + '/api/login',{
          method: 'POST',
          body:JSON.stringify(form),
          headers: {
          'Content-Type': 'application/json'
          }

        })

        const data = await res.json()

        if (data.success){
          window.localStorage.setItem('token',data.token)
          Navigate('/')
        }

        if (!data.success &&  data.error === "invalid_credentials"){
          setErrors({password:'رقم الهاتف أو كلمة السر خاطئة!'})
        }

      }catch(err){
        console.log('Error: ',err)
      }

    }
  };



  return (
   <>
   <Header/>
        <main className="login-container" style={{flex:1 ,justifuySelf:"center"}}>
    
          <div className="login-form">
    
            <form onSubmit={handleSubmit}>

              <h1>
                تسجيل دخول
              </h1>

              <div className="input-group">
                  <input
                    name="phoneNumber"
                    type="tel"
                    placeholder="رقم الهاتف"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value.trim().replaceAll(/\s/g, '')})}
                  />
                  {errors.phone && <span className="error">{errors.phone}</span>}
              </div>


              <div className="input-group">
                  <div className="password-input-container">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="كلمة المرور"
                      value={form.password}
                      onChange={(e) => setForm({...form, password: e.target.value})}
                    />
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && <span className="error">{errors.password}</span>}
              </div>
    
              <button type="submit">
                
                تسجيل دخول

              </button>
            </form>
    
            <p className="auth-link">
              ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link>
            </p>
          </div>
        </main>
    <Footer/>
  </>
  );
}