import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import {Header , Footer} from "../../components";

import './Register.css'

export default function Register() {
  document.title = 'إنشاء حساب';
  const navigate = useNavigate();
  
 // Egyptian governorates list
  const governorates = [
  { govName: 'القاهرة', govId: 1 },
  { govName: 'الجيزة', govId: 2 },
  { govName: 'الإسكندرية', govId: 3 },
  { govName: 'الدقهلية', govId: 4 },
  { govName: 'الشرقية', govId: 5 },
  { govName: 'المنوفية', govId: 6 },
  { govName: 'الغربية', govId: 7 },
  { govName: 'كفر الشيخ', govId: 8 },
  { govName: 'دمياط', govId: 9 },
  { govName: 'البحيرة', govId: 10 },
  { govName: 'الإسماعيلية', govId: 11 },
  { govName: 'بورسعيد', govId: 12 },
  { govName: 'السويس', govId: 13 },
  { govName: 'شمال سيناء', govId: 14 },
  { govName: 'جنوب سيناء', govId: 15 },
  { govName: 'بني سويف', govId: 16 },
  { govName: 'الفيوم', govId: 17 },
  { govName: 'المنيا', govId: 18 },
  { govName: 'أسيوط', govId: 19 },
  { govName: 'سوهاج', govId: 20 },
  { govName: 'قنا', govId: 21 },
  { govName: 'الأقصر', govId: 22 },
  { govName: 'أسوان', govId: 23 },
  { govName: 'الوادي الجديد', govId: 24 },
  { govName: 'مطروح', govId: 25 },
  { govName: 'البحر الأحمر', govId: 26 },
];


  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    goverment: 0,
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Full name validation
    if (!form.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    } else if (form.fullName.trim().length < 3) {
      newErrors.fullName = 'الاسم الكامل يجب أن يكون 3 أحرف على الأقل';
    }

    
    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^(\+20|0)?1[0125][0-9]{8}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }
    
    // goverment validation
    if (!form.goverment) {
      newErrors.goverment = 'المحافظة مطلوبة';
    }
    
    // Password validation
    if (!form.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (form.password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
    }
    
    // Confirm password validation
    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
    }
    
    setErrors(newErrors);
    
    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {

      navigate('/login');
    }
  };
  
  return (
    <>
    <Header />
    <div className="register-container" style={{flex:1}}>

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
              {governorates.map((governorate, index) => (
                <option key={governorate['govId']} value={governorate['govId']}>
                  {governorate['govName']}
                </option>
              ))}
            </select>
            {errors.goverment && <span className="error">{errors.goverment}</span>}
          </div>

          <div className="input-group">
            <input
              name='password'
              id='password'
              type="password"
              placeholder="كلمة المرور"
              value={form.password}
              autoComplete='new-password'
              onChange={(e) => setForm({...form, password: e.target.value})}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-group">
            <input
              name='confirmPassword'
              id='confirmPassword'
              type="password"
              placeholder="تأكيد كلمة المرور"
              value={form.confirmPassword}
              autoComplete='confirm-password'
              onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

          <button type="submit">أنشئ الحساب</button>
        </form>

        <p className="auth-link">
          لديك حساب بالفعل؟ <Link to="/login">تسجيل دخول</Link>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
