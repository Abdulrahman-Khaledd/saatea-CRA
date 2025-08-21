import { useEffect, useState } from 'react';
import { Header, Footer } from "../../components";
import defaultAvatar from '../../assets/pages_images/default-avatar.svg';
import { Govs } from '../../data';
import { Link } from 'react-router-dom';
import './Account.css';

function Account() {
  document.title = 'حسابك الشخصي';

  const [userData,setUserData] = useState({
    fullName: '',
    phone: '',
    governorate: 0, 
    joinDate: '',
    lastLogin: ''
  });
  

  
  
  useEffect(()=>{
    const fetchData = async ()=>{

      const URL = (process.env.NODE_ENV || 'production') === 'development'
      ? 'http://192.168.1.20'
      : 'https://saatea.great-site.net';
      
      try {
        
        const res = await fetch(URL + '/api/myaccount',{
          method:'POST',
          headers:{
          'Authorization':`Bearer ${localStorage.getItem('token')}`,
          'Content-Type':'application/json'
          }

        })

        const data = await res.json()

        if (data.success){

          setUserData({
            fullName : data.name,
            phone : data.phone,
            governorate : data.gov,
            joinDate : data.join_date,
            lastLogin : data.last_login
          })

        }

      } catch (err) {
        console.log("Error: ",err)
      }

    }

    fetchData()

  },[])

  const getGovernorateName = (govId) => {
    const governorate = Govs.find(gov => gov.id === govId);
    return governorate ? governorate.name : 'غير محدد';
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
      <main className="account-container" style={{flex:1}} >
        <div className="account-card">
          {/* Account Header with Logo */}
          <div className="account-header">
            <div className="account-avatar">
              <img src={defaultAvatar} alt="صورة الحساب" className="avatar-image" width={120} />
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
                  <span dir='ltr'>+2{userData.phone}</span>
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
            <Link to="/login" className="btn btn-danger" onClick={()=>{window.localStorage.removeItem('token')}} >
              <i className="fas fa-sign-out"></i>
              تسجيل خروج
            </Link>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Account;