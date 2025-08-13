import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './Register.css'
import logoIcon from '../../assets/Logo-Icon.png';

export default function Register() {
  document.title = 'أنشئ حسابك الخاص';
  const navigate = useNavigate();
  
  // Egyptian governorates list
  const governorates = [
    'القاهرة',
    'الجيزة',
    'الإسكندرية',
    'الدقهلية',
    'الشرقية',
    'المنوفية',
    'الغربية',
    'كفر الشيخ',
    'دمياط',
    'البحيرة',
    'الإسماعيلية',
    'بورسعيد',
    'السويس',
    'شمال سيناء',
    'جنوب سيناء',
    'بني سويف',
    'الفيوم',
    'المنيا',
    'أسيوط',
    'سوهاج',
    'قنا',
    'الأقصر',
    'أسوان',
    'الوادي الجديد',
    'مطروح',
    'البحر الأحمر',
    'الوادي الجديد'
  ];

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    region: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Full name validation
    if (!form.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    } else if (form.fullName.trim().length < 3) {
      newErrors.fullName = 'الاسم الكامل يجب أن يكون 3 أحرف على الأقل';
    }
    
    // Email validation
    if (!form.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^(\+20|0)?1[0125][0-9]{8}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }
    
    // Region validation
    if (!form.region) {
      newErrors.region = 'المحافظة مطلوبة';
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
      // console.log('Form submitted successfully:', form);
      navigate('/login');
    }
  };
  
  return (
    <div className="register-container">
    {/* logo */}

        {/* <div className="register-image"></div> */}
    
      {/* form */}
      <div className="register-form">
        <img src={logoIcon} alt="شعار ساطع" className="logo" />
        <h1>أنشئ حسابك الآن</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              name='fullName'
              id='fullName'
              autoComplete='new-fullName'
              type="text"
              placeholder="الاسم الكامل"
              value={form.fullName}
              onChange={(e) => setForm({...form, fullName: e.target.value})}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="input-group">
            <input
              name='email'
              id='email'
              autoComplete='new-email'
              type="email"
              placeholder="البريد الإلكتروني"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <input
              name='phoneNumber'
              id='phoneNumber'
              dir='rtl'
              type="tel"
              placeholder="رقم الهاتف"
              value={form.phone}
              autoComplete='new-phonenumber'
              onChange={(e) => setForm({...form, phone: e.target.value})}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="input-group">
            <select
              name='governorate'
              id='governorate'
              value={form.region}
              onChange={(e) => setForm({...form, region: e.target.value})}
              className="governorate-select"
            >
              <option value="" selected disabled>اختر المحافظة</option>
              {governorates.map((governorate, index) => (
                <option key={index} value={governorate}>
                  {governorate}
                </option>
              ))}
            </select>
            {errors.region && <span className="error">{errors.region}</span>}
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
              autoComplete='confirm-new-password'
              onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

          <button type="submit">أنشئ الحساب</button>
        </form>

        <p className="auth-link">
          لديك حساب بالفعل؟ <Link to="/login">سجل الآن</Link>
        </p>
      </div>
    </div>
  );
}
