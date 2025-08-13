import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/Logo-Icon.png';
// import logoAnimated from '../../assets/solar-panel.gif';

export default function Login() {
  document.title = 'تسجيل دخول';
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.email) newErrors.email = 'مطلوب';
    if (!form.password) newErrors.password = 'مطلوب';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('تم تسجيل الدخول:', form);

    }
  };

  return (
    <div className="body-log">
      <div className="auth-container">
        <div className="logos-container">
          <img src={logo} alt="شعار ساطع" className="logo-style" />
          {/* <img src={logoAnimated} alt="طاقة شمسية" className="logo-icon" /> */}
        </div>
        <h1>
          تسجيل الدخول
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="كلمة المرور"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit">سجل الآن</button>
        </form>

        <p className="auth-link">ليس لديك حساب؟ <Link to="/">أنشئ حساباً</Link></p>
      </div>
    </div>
  );
}