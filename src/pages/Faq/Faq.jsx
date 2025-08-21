import { Header, Footer } from "../../components";
import faqImg from '../../assets/pages_images/faq.gif'
import { useState } from 'react';
import './Faq.css';

function Faq() {
  document.title = 'الأسئلة الشائعة';

  const [activeIndex, setActiveIndex] = useState(0);

  const questions = [
    {
      title: "ما هي الالواح الشمسية و كيف تعمل؟",
      content:
        "الالواح الشمسية هي أجهزة تحول الطاقة الشمسية إلى طاقة كهربائية. تعمل من خلال استخدام خلايا شمسية مصنوعة من مواد شبه موصلة مثل السيليكون، حيث تمتص الضوء الشمسي وتولد تيارًا كهربائيًا.",
    },
    {
      title: "ما هي أنواع الالواح الشمسية؟",
      content: "هناك نوعان رئيسيان من الألواح الشمسية: الألواح أحادية البلورة (Monocrystalline) والألواح متعددة البلورة (Polycrystalline). الألواح أحادية البلورة أكثر كفاءة ولكنها أغلى، بينما الألواح متعددة البلورة أقل كفاءة ولكنها أكثر تكلفة مناسبة.",
    },
    {
      title: "ما هي فوائد استخدام الالواح الشمسية؟",
      content:
        "تقدم الألواح الشمسية العديد من الفوائد، منها تقليل فواتير الكهرباء، تقليل الاعتماد على مصادر الطاقة التقليدية، وتقليل انبعاثات الكربون.",
    },
    {
      title: "كيف يمكن تركيب الألواح الشمسية؟",
      content:
        "يمكن تركيب الألواح الشمسية على أسطح المنازل أو المباني التجارية. يتطلب التركيب عادةً استشارة فني متخصص لضمان التثبيت الصحيح والفعال.",
    },
    {
      title: "ما هي تكلفة تركيب الألواح الشمسية؟",
      content:
        "تختلف تكلفة تركيب الألواح الشمسية بناءً على عدة عوامل، مثل حجم النظام، نوع الألواح، وتكاليف التركيب. بشكل عام، يمكن أن تتراوح التكلفة من عدة آلاف إلى عشرات الآلاف من الجنيهات.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <Header pageLocation={'Faq'} />
      <main className="faq-section container" style={{flex:1}}>
        <div className="faq-content">
          <div className="faq-accordion" dir="rtl">
            <h2 className="faq-title">الأسئلة الشائعة</h2>
            {questions.map((question, index) => (
              <div className="accordion-item" key={index}>
                <div 
                  className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="accordion-title">{question.title}</h3>
                  <span className="accordion-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                  <p className="accordion-text">{question.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-image">
            <img
              src={faqImg}
              className="faq-gif"
              alt="FAQ illustration"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Faq;