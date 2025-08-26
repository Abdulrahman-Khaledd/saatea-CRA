import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header , Footer } from '../../components';
import { Govs } from '../../data'

import './Register.css'

export default function Register() {
  document.title = 'إنشاء حساب';
  const Navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    goverment: 0,
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const governorates = Govs

  const [errors, setErrors] = useState({});
  const newErrors = {};

  const validateForm = () => {

    
    if (!form.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    } else if (form.fullName.trim().length < 3) {
      newErrors.fullName = 'الاسم الكامل يجب أن يكون 3 أحرف على الأقل';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^(\+20|0)?1[0125][0-9]{8}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }
    
    if (!form.goverment) {
      newErrors.goverment = 'المحافظة مطلوبة';
    }

    if (!form.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (form.password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
    }
    
    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
    }
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = (process.env.NODE_ENV || 'production') === 'development'
    ? 'http://192.168.1.20'
    : 'https://saatea.great-site.net';

    
    if(validateForm()){

      try {

        const res = await fetch(URL + '/api/register' , {
          method:'POST',
          body:JSON.stringify({

            name:form.fullName,
            phone:form.phone,
            gov_id:form.goverment,
            password:form.password

          }),
          headers:{
          'Content-Type': 'application/json'
          }
        })

        const data = await res.json()
        console.log(data)

        if(data.success){
          window.localStorage.setItem("token",data.token)
          Navigate('/')

        }

        if (data.error === 'phone_exists'){
          setErrors({ ...errors ,phone:'رقم الهاتف موجود بالفعل !'})
        }
        
      } catch (err) {
        console.log("Error: " ,err)
      }

    }

  };
  
  return (
    <>
    <Header />
    <main className="register-container" style={{flex:1}}>

      <div className="register-form">

        <form onSubmit={handleSubmit}>
          <h1>
            
            إنشاء حساب
            
          </h1>
          <div className="input-group">
            <input
              name='fullName'
              id='fullName'
              autoComplete='new-fullName'
              type="text"
              placeholder="الاسم الكامل  "
              value={form.fullName}
              onChange={(e) => setForm({...form, fullName: e.target.value})}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="input-group">
            <input
              name='phonegovIdber'
              id='phonegovIdber'
              dir='rtl'
              type="tel"
              placeholder="رقم الهاتف "
              value={form.phone}
              autoComplete='tel'
              onChange={(e) => setForm({...form, phone: e.target.value})}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="input-group">
            <select
              name='governorate'
              id='governorate'
              value={form.goverment}
              onChange={(e) => setForm({...form, goverment: parseInt(e.target.value)})}
              className="governorate-select"
            >
              <option>اختر المحافظة </option>
              {governorates.map((governorate) => (
                <option key={governorate['id']} value={governorate['id']}>
                  {governorate['name']}
                </option>
              ))}
            </select>
            {errors.goverment && <span className="error">{errors.goverment}</span>}
          </div> 
          <div className="input-group">
            <div className="password-input-container">
              <input
                name='password'
                id='password'
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور"
                value={form.password}
                autoComplete='new-password'
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

          <div className="input-group">
            <div className="password-input-container">
              <input
                name='confirmPassword'
                id='confirmPassword'
                type={showConfirmPassword ? "text" : "password"}
                placeholder="تأكيد كلمة المرور"
                value={form.confirmPassword}
                autoComplete='confirm-password'
                onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
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
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

          <button type="submit">أنشئ الحساب</button>
        </form>

        <p className="auth-link">
          لديك حساب بالفعل؟ <Link to="/login">تسجيل دخول</Link>
        </p>
      </div>
    </main>
    <Footer/>
    </>
  );
}
