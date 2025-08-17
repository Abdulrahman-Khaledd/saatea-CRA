import { useState } from 'react';
import { Header, Footer } from "../../components";
import defaultAvatar from '../../assets/pages_images/default-avatar.svg';
import './Account.css';

function Account() {
  document.title = 'حسابك الشخصي';

  // Mock user data - in real app this would come from authentication context or API
  const [userData] = useState({
    fullName: 'أحمد محمد علي',
    phone: '+201234567890',
    governorate: 1, // القاهرة
    solarPanelLocation: 2, // الجيزة
    email: 'ahmed.mohamed@example.com',
    joinDate: '2024-01-15',
    lastLogin: '2024-01-20'
  });

  // Egyptian governorates list (same as Register.jsx)
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

  const getGovernorateName = (govId) => {
    const governorate = governorates.find(gov => gov.govId === govId);
    return governorate ? governorate.govName : 'غير محدد';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Header />
      <div className="account-container">
        <div className="account-card">
          {/* Account Header with Logo */}
          <div className="account-header">
            <div className="account-avatar">
              <img src={defaultAvatar} alt="صورة الحساب" className="avatar-image" />
            </div>
            <div className="account-title">
              <h1>حسابك الشخصي</h1>
              <p className="account-subtitle">مرحباً بك في ساطع</p>
            </div>
          </div>

          {/* Account Information */}
          <div className="account-info">
            <div className="info-section">
              <h2 >المعلومات الشخصية</h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>الاسم الكامل:</label>
                  <span>{userData.fullName}</span>
                </div>
                <div className="info-item">
                  <label>رقم الهاتف:</label>
                  <span dir='ltr'>{userData.phone}</span>
                </div>
                <div className="info-item">
                  <label>البريد الإلكتروني:</label>
                  <span>{userData.email}</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2 >معلومات الموقع</h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>المحافظة:</label>
                  <span>{getGovernorateName(userData.governorate)}</span>
                </div>
                <div className="info-item">
                  <label>مكان الألواح:</label>
                  <span>{getGovernorateName(userData.solarPanelLocation)}</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2 >معلومات الحساب</h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>تاريخ الانضمام:</label>
                  <span>{formatDate(userData.joinDate)}</span>
                </div>
                <div className="info-item">
                  <label>آخر تسجيل دخول:</label>
                  <span>{formatDate(userData.lastLogin)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="account-actions">
            <button className="btn btn-primary">
              <i className="fas fa-edit"></i>
              تعديل المعلومات
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-cog"></i>
              إعدادات الحساب
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;