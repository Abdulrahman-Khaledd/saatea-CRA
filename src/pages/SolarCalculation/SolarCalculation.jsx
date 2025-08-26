import { useState } from "react";
import { Header, Footer } from "../../components";
import {airCondImg, fridgeImg, washingMachineImg, dishWasherImg, microwaveImg, electronicOvenImg, clothesIronImg,hairDryerImg, televisionImg, pcComputerImg, printerImg, ceilingFanImg, waterHeaterImg, waterPumpImg, windowAirConditionerImg, energySavingLampImg, fluorescentLampImg, regularLampImg, handBlenderImg, breadMakerImg, toasterImg, multifunctionBlenderImg, roomCoolerImg, waterCoolerImg, exhaustFanImg, deepFreezerImg, roomHeaterImg, kettleImg, handDryerImg, laptopImg, scannerImg, faxImg, playstationImg, xboxImg, lcdTelevisionImg, regularTelevisionImg, dvdImg, radioImg, receiverImg, homeTheaterImg, walkingMachineImg, exerciseBikeImg, orbitrekImg, crazyFitImg, waterPurifierImg, insectZapperImg, vacuumCleanerImg, airPurifierImg, sewingMachineImg, cordlessPhoneImg, mobileChargerImg, regularFanImg} from "../../assets/electronic_devices"
import "./SolarCalculation.css";
import { Govs } from "../../data";

const SolarCalculation = () => {
  document.title = 'حاسبة ساطع';

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "",
    isConsumptionFixed: "",
    appliances: [],
    installationType: "",
    agreeToDisclosure: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [stepDirection, setStepDirection] = useState('next');


  const appliancesList = [
    { id: 1, name: "مكيف هواء", image: airCondImg, averagePregnancy: 1250 },
    { id: 2, name: "ثلاجة", image: fridgeImg, averagePregnancy: 550},
    { id: 3, name: "غسالة ملابس", image: washingMachineImg, averagePregnancy: 700},
    { id: 4, name: "غسالة صحون", image: dishWasherImg, averagePregnancy: 650},
    { id: 5, name: "ميكروويف", image: microwaveImg, averagePregnancy: 1000},
    { id: 6, name: "فرن كهربائي", image: electronicOvenImg , averagePregnancy: 1250},
    { id: 7, name: "مكواة", image: clothesIronImg, averagePregnancy: 800 },
    { id: 8, name: "مجفف شعر", image: hairDryerImg, averagePregnancy: 1200 },
    { id: 9, name: "شاشة تلفاز", image: televisionImg, averagePregnancy: 325},
    { id: 10, name: "كمبيوتر", image: pcComputerImg, averagePregnancy: 200},
    { id: 11, name: "طابعة", image: printerImg, averagePregnancy: 185 },
    { id: 12, name: "مروحة سقف", image: ceilingFanImg, averagePregnancy: 65},
    { id: 13, name: "سخان مياه", image: waterHeaterImg, averagePregnancy: 3000},
    { id: 14, name: "مضخة مياه", image: waterPumpImg, averagePregnancy: 932},
    { id: 15, name: "مكيف شباك", image: windowAirConditionerImg, averagePregnancy: 1170},
    { id: 16, name: "مصابيح موفرة", image: energySavingLampImg, averagePregnancy: 14.5 },
    { id: 17, name: "مصابيح فلورسنت", image: fluorescentLampImg, averagePregnancy: 40 },
    { id: 18, name: "مصابيح", image: regularLampImg, averagePregnancy: 62.5 },
    { id: 19, name: "خلاط يدوي (هاند بليندر)", image: handBlenderImg, averagePregnancy: 287.5 },
    { id: 20, name: "صانع الخبز", image: breadMakerImg, averagePregnancy: 875 },
    { id: 21, name: "محمصة", image: toasterImg, averagePregnancy: 750 },
    { id: 22, name: "خلاط متعدد المهام", image: multifunctionBlenderImg, averagePregnancy: 600 },
    { id: 23, name: "مبرد غرفة", image: roomCoolerImg, averagePregnancy: 130 },
    { id: 24, name: "مبرد مياه", image: waterCoolerImg, averagePregnancy: 68 },
    { id: 25, name: "مروحة شفط", image: exhaustFanImg, averagePregnancy: 115 },
    { id: 26, name: "ديب فريزر", image: deepFreezerImg, averagePregnancy: 1166 },
    { id: 27, name: "مدفأة غرفة", image: roomHeaterImg, averagePregnancy: 1500 },
    { id: 28, name: "غلاية مياه", image: kettleImg, averagePregnancy: 2250 },
    { id: 29, name: "مجفف اليد", image: handDryerImg, averagePregnancy: 1625 },
    { id: 30, name: "لابتوب", image: laptopImg, averagePregnancy: 150 },
    { id: 31, name: "ماسح ضوئي", image: scannerImg, averagePregnancy: 100 },
    { id: 32, name: "فاكس", image: faxImg, averagePregnancy: 120 },
    { id: 33, name: "بلاي ستيشن", image: playstationImg, averagePregnancy: 190 },
    { id: 34, name: "اكس بوكس", image: xboxImg, averagePregnancy: 200 },
    { id: 35, name: "تلفزيون LCD", image: lcdTelevisionImg, averagePregnancy: 200 },
    { id: 36, name: "تلفزيون عادي", image: regularTelevisionImg, averagePregnancy: 225 },
    { id: 37, name: "دي في دي", image: dvdImg, averagePregnancy: 70 },
    { id: 38, name: "راديو", image: radioImg, averagePregnancy: 400 },
    { id: 39, name: "ريسيفر", image: receiverImg, averagePregnancy: 30 },
    { id: 40, name: "مسرح منزلي", image: homeTheaterImg, averagePregnancy: 100 },
    { id: 41, name: "الة تمارين المشي", image: walkingMachineImg, averagePregnancy: 1650 },
    { id: 42, name: "العجلة الرياضية", image: exerciseBikeImg, averagePregnancy: 1100 },
    { id: 43, name: "اوبتراك", image: orbitrekImg, averagePregnancy: 1540 },
    { id: 44, name: "كرازي فيت", image: crazyFitImg, averagePregnancy: 1700 },
    { id: 45, name: "جهاز تنقية المياه", image: waterPurifierImg, averagePregnancy: 37.5 },
    { id: 46, name: "صاعق الحشرات", image: insectZapperImg, averagePregnancy: 100 },
    { id: 47, name: "مكنسة كهربية", image: vacuumCleanerImg, averagePregnancy: 1450 },
    { id: 48, name: "منقي الهواء", image: airPurifierImg, averagePregnancy: 10 },
    { id: 49, name: "ماكينة خياطة", image: sewingMachineImg, averagePregnancy: 75 },
    { id: 50, name: "هاتف لاسلكي", image: cordlessPhoneImg, averagePregnancy: 10 },
    { id: 51, name: "شاحن موبايل", image: mobileChargerImg, averagePregnancy: 29 },
    { id: 52, name: "مروحة عادية", image: regularFanImg, averagePregnancy: 80 },
  ];

  const governorates = Govs 

  const installationTypes = ["شقة", "فيلا", "شركة"];


  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleApplianceChange = (applianceId, field, value) => {
    setFormData(prev => {
      const existingAppliance = prev.appliances.find(a => a.id === applianceId);
      if (existingAppliance) {
        return {
          ...prev,
          appliances: prev.appliances.map(a => 
            a.id === applianceId ? { ...a, [field]: value } : a
          )
        };
      } else {
        return {
          ...prev,
          appliances: [...prev.appliances, { id: applianceId, quantity: 1, dailyConsumption: 0 }]
        };
      }
    });
  };

  const getApplianceData = (applianceId) => {
    return formData.appliances.find(a => a.id === applianceId) || { quantity: 0, dailyConsumption: 0 };
  };

  const nextStep = () => {
    if (currentStep < 5 && !isTransitioning) {
      setStepDirection('next');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 1 && !isTransitioning) {
      setStepDirection('prev');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      
      // Calculate total daily consumption
      const totalConsumption = formData.appliances.reduce((total, appliance) => {
        const data = getApplianceData(appliance.id);
        const applianceConsumption = data.quantity * data.dailyConsumption;
        return total + applianceConsumption;
      }, 0);
      

      // Egyptian Grid System Calculation
      let systemSize, estimatedCost, recommendation, numberOfPanels;
      
      
      if (formData.isConsumptionFixed === 'fixed') {


        // Fixed consumption: System size = Daily consumption × 1.3 (30% buffer)
        systemSize = Math.ceil(totalConsumption * 1.3);
        estimatedCost = systemSize * 1200; // 1200 EGP per kW


      } else if (formData.isConsumptionFixed === 'summer') {


        // Summer increase: System size = Daily consumption × 1.5 (50% buffer for summer peak)
        systemSize = Math.ceil(totalConsumption * 1.5);
        estimatedCost = systemSize * 1200; // 1200 EGP per kW


      } else if (formData.isConsumptionFixed === 'winter') {


        // Winter increase: System size = Daily consumption × 1.4 (40% buffer for winter peak)
        systemSize = Math.ceil(totalConsumption * 1.4);
        estimatedCost = systemSize * 1200; // 1200 EGP per kW


      } else {

        // Default calculation
        systemSize = Math.ceil(totalConsumption * 1.3);
        estimatedCost = systemSize * 1200;

      }

      // Calculate number of panels (assuming 400W panels)
      // Each panel is approximately 400W = 0.4kW
      numberOfPanels = Math.ceil(systemSize / 0.4);

      // Determine recommendation based on system size
      if (systemSize > 15) {
        recommendation = "نظام كبير جداً - مناسب للمباني التجارية";
      } else if (systemSize > 10) {
        recommendation = "نظام كبير - مناسب للفيلات الكبيرة";
      } else if (systemSize > 5) {
        recommendation = "نظام متوسط - مناسب للفيلات الصغيرة";
      } else if (systemSize > 2) {
        recommendation = "نظام صغير - مناسب للشقق";
      } else {
        recommendation = "نظام مصغر - مناسب للاستخدام المحدود";
      }

      const finalResults = {
        dailyConsumption: totalConsumption.toFixed(2),
        systemSize: systemSize,
        numberOfPanels: numberOfPanels,
        recommendation: recommendation,
        estimatedCost: estimatedCost.toFixed(0)
      };
      
      setResults(finalResults);
    }, 1000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.location !== "";
      case 2:
        return formData.isConsumptionFixed !== "";
      case 3:
        // Check if user has selected at least one appliance with quantity > 0 and dailyConsumption > 0
        const validAppliances = formData.appliances.filter(appliance => {
          const data = getApplianceData(appliance.id);
          return data.quantity > 0 && data.dailyConsumption > 0;
        });
        return validAppliances.length > 0;
      case 4:
        return formData.installationType !== "";
      case 5:
        return formData.agreeToDisclosure !== null;
      default:
        return false;
    }
  };

  const renderStep1 = () => (
    <div className="step-content text-center">
      <h3 className="mb-4">مكان الألواح؟</h3>
      <div className="form-group">
        <select  
          className="form-select border border-3 form-select-lg text-center"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
        >
          <option>اختر المحافظة</option>
          {governorates.map((governorate) => (
            <option key={governorate['id']} value={governorate['id']}>
              {governorate['name']}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="step-content text-center">
      <h3 className="mb-4">هل الاستهلاك ثابت؟</h3>
      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        <button
          className={`btn btn-lg ${formData.isConsumptionFixed === 'fixed' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleInputChange('isConsumptionFixed', 'fixed')}
        >
          نعم
        </button>
        <button
          className={`btn btn-lg ${formData.isConsumptionFixed === 'summer' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleInputChange('isConsumptionFixed', 'summer')}
        >
          يزيد صيفاً
        </button>
        <button
          className={`btn btn-lg ${formData.isConsumptionFixed === 'winter' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleInputChange('isConsumptionFixed', 'winter')}
        >
          يزيد شتاءً
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => {
    // Calculate current total for display
    const currentTotal = formData.appliances.reduce((total, appliance) => {
      const data = getApplianceData(appliance.id);
      return total + (data.quantity * data.dailyConsumption);
    }, 0);

    return (
      <div className="step-content">
        <h3 className="mb-4 text-center">برجاء إدخال عدد الأجهزة الموجودة وعدد ساعات التشغيل</h3>
        
        {/* Summary display */}
        <div className="alert alert-info text-center mb-4">
          <strong>المجموع الحالي:</strong> {currentTotal.toFixed(2)} كيلو وات يومياً
        </div>
        
        <div className="appliances-grid">
          {appliancesList.map((appliance) => {
            const data = getApplianceData(appliance.id);
            return (
              <div key={appliance.id} className="appliance-card">
                <img className="appliance-img" src={appliance.image} loading="lazy" alt={appliance.name} title={appliance.name} />
                <h5 className="appliance-name">{appliance.name}</h5>
                <h6 className="appliance-averagePregnancy"> الحمل التقريبي: {appliance.averagePregnancy} واط</h6>
                <div className="quantity-selector">
                  <button
                    className="btn btn-sm btn-outline-warning bg-count"
                    onClick={() => handleApplianceChange(appliance.id, 'quantity', Math.max(0, data.quantity - 1))}
                  >
                    -
                  </button>
                  <span className="quantity-display">{data.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-warning bg-count"
                    onClick={() => handleApplianceChange(appliance.id, 'quantity', data.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <input
                  type="number"
                  className="form-control mt-2"
                  placeholder="كم ساعه تستخدم هذا الجهاز في اليوم"
                  value={data.dailyConsumption || ''}
                  onChange={(e) => handleApplianceChange(appliance.id, 'dailyConsumption', parseFloat(e.target.value) || 0)}
                  min="0"
                  step="0.1"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="step-content text-center">
      <h3 className="mb-4">ما هو مكان التركيب؟</h3>
      <div className="form-group">
        <select 
          className="form-select border border-3 form-select-lg text-center"
          value={formData.installationType}
          onChange={(e) => handleInputChange('installationType', e.target.value)}
        >
          <option value="">اختر نوع التركيب</option>
          {installationTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="step-content text-center">
      <h3 className="mb-4">هل توافق على الاعتماد على شركة الكهرباء في الليل او وقت الغيوم؟</h3>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button
          className={`btn btn-lg ${formData.agreeToDisclosure === true ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleInputChange('agreeToDisclosure', true)}
        >
          نعم
        </button>   
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="results-container">
      <h2 className="text-center mb-5">نتائج التحليل</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="result-card">
            <h4>استهلاك اليوم التقديري</h4>
            <p className="result-value">{results.dailyConsumption} كيلو وات</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="result-card">
            <h4>حجم النظام</h4>
            <p className="result-value">{results.systemSize} كيلو وات</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="result-card">
            <h4>عدد الألواح</h4>
            <p className="result-value">{results.numberOfPanels} لوح</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-4">
          <div className="result-card">
            <h4>التوصية</h4>
            <p className="result-value">{results.recommendation}</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-4">
          <div className="result-card">
            <h4>التكلفة التقديرية</h4>
            <p className="result-value">{results.estimatedCost} جنيه مصري</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
        <button className="btn btn-primary btn-lg w-100" onClick={() => window.location.reload()}>
          إحسب مرة اخرى
        </button>
        <button className="btn btn-success w-100 w btn-lg">
          أطبع النتيجة
        </button>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <>
        <Header pageLocation={'SolarCalculation'}/>
        <main className="placeholder-div" style={{flex:1}}></main>
        <div className="loading-overlay">
          <div className="loading-content text-center">
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">جاري التحميل...</span>
            </div>
            <h2>جارٍ تحليل البيانات...</h2>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (results) {
    return (
      <>
        <Header pageLocation={'SolarCalculation'} />
        <main className="container mt-5 mb-5">
          {renderResults()}
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header pageLocation={'SolarCalculation'} />
      <main className="container mt-5 mb-5">
        <div className="solar-calculation-container">
          <div className="progress-container mb-4">
            <div className="progress">
              <div 
                className="progress-bar" 
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
            <div className="step-indicators">
              {[1, 2, 3, 4, 5].map((step) => (
                <div 
                  key={step} 
                  className={`step-indicator ${currentStep >= step ? 'active' : ''}`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className={`step-wrapper ${isTransitioning ? 'transitioning' : ''} ${stepDirection === 'next' ? 'slide-next' : 'slide-prev'}`}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
            {currentStep === 5 && renderStep5()}
          </div>

          <div className="step-navigation d-flex justify-content-between mt-4 gap-2">
            <button
              className="btn btn-secondary btn-lg"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              السابق
            </button>
            
            {currentStep === 5 ? (
              <button
                className="btn btn-primary btn-lg"
                onClick={handleSubmit}
                disabled={!canProceed()}
              >
                إرسال
              </button>
            ) : (
              <button
                className="btn btn-primary btn-lg"
                onClick={nextStep}
                disabled={!canProceed()}
              >
                التالي
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SolarCalculation;
