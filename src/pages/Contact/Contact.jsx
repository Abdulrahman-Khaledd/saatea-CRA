import { useState } from "react";
import { Header, Footer } from "../../components";
import contactImage from "../../assets/Mention-cuate.svg";
import "./Contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "صيغة البريد الإلكتروني غير صحيحة.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "الموضوع مطلوب.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <>
      <Header/>

      <div className="contact-page" style={{flex:1}}>
        <div className="contact-card">
          <div className="contact-form-section">
            <h1 className="contact-title">اتصل بنا</h1>
            <p className="contact-subtitle">
              نحن هنا لمساعدتك والإجابة على استفساراتك.
            </p>

            {isSubmitted && (
              <div className="success-message">
               تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">الاسم</label>
                <input
                  type="text"
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">الموضوع</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="موضوع الرسالة"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? "input-error" : ""}
                />
                {errors.subject && (
                  <span className="error-message">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea
                  id="message"
                  placeholder="اكتب رسالتك هنا..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "input-error" : ""}
                />
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="submit-btn">
                <span className="submit-btn-text">إرسال</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

          <div className="contact-info-section order-first">
            <img src={contactImage} alt="اتصل بنا" className="contact-image" />
            <h2 className="info-title">تواصل معنا</h2>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <span>201016058253+</span>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>saatea.team@gmail.com</span>
            </div>
            <div className="social-media">
              <a
                href="https://www.instagram.com/saatea.team/"
                target="blank"
                className="social-link"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/people/Saatea/61578973186751/"
                target="blank"
                className="social-link"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/saatea-platform/"
                target="blank"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
