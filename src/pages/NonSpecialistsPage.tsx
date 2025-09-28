import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Calendar, CheckCircle, Target, Shield, FileText, TrendingUp, Award, Phone, Download } from 'lucide-react';
import RegistrationForm from '../components/RegistrationForm';

const NonSpecialistsPage = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  if (showRegistrationForm) {
    return <RegistrationForm onBackToHome={() => setShowRegistrationForm(false)} />;
  }

  const features = [
    {
      icon: Target,
      title: 'أنظمة وحلول',
      description: 'EDR / DLP / IAM / SIEM + تشريعات وقوانين (PDPL, NCA)'
    },
    {
      icon: Shield,
      title: 'بناء البرنامج',
      description: 'فجوات ومخاطر → سياسات وإجراءات (GRC) → ضوابط حماية → مراقبة واكتشاف → استجابة وتعافٍ'
    },
    {
      icon: Users,
      title: 'المسؤوليات والمخاطر',
      description: 'RACI (DPO/مالك البيانات…) + سجل مخاطر ومصفوفة أثر/احتمال'
    },
    {
      icon: FileText,
      title: 'الالتزامات القانونية',
      description: 'حماية البيانات، إشعار الخروقات ضمن المدد، الاحتفاظ والخصوصية، اتفاقيات المعالِجين'
    }
  ];

  const dailyPlan = [
    {
      day: 'اليوم الأول',
      title: 'الأساسيات والتشريعات',
      description: 'مفاهيم الأمن + PDPL/NCA وتأثيرها العملي'
    },
    {
      day: 'اليوم الثاني',
      title: 'المكوّنات والحلول',
      description: 'نظرة عملية على EDR/DLP/IAM/SIEM وQuick Wins'
    },
    {
      day: 'اليوم الثالث',
      title: 'المسؤوليات والمخاطر',
      description: 'RACI + بناء سجل مخاطر وتخطيط ضوابط التخفيف'
    },
    {
      day: 'اليوم الرابع',
      title: 'أفضل الممارسات',
      description: 'مكافحة التصيّد (Phishing) عملي، Cloud/Mobile/BYOD، قوائل تحقق'
    },
    {
      day: 'اليوم الخامس',
      title: 'التنفيذ منخفض التكلفة',
      description: 'أتمتة/OSS/خدمات مُدارة، لوحة مؤشرات (KPIs)، تمرين ختامي + اختبار بعدي'
    }
  ];

  const outputs = [
    'قوالب سياسات وقوائم تحقق',
    'نموذج RACI وسجل مخاطر',
    'تقرير أثر (Pre/Post)',
    'شهادة حضور وشارة رقمية'
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img 
                src="/logo/logo_1.png" 
                alt="الدائرة الخضراء للأمن السيبراني" 
                className="h-10 w-auto"
              />
              <div className="text-sm text-gray-600">
                <span className="font-medium">مقدمة من:</span> الدائرة الخضراء للأمن السيبراني
              </div>
            </div>
            
            <Link
              to="/"
              className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              العودة للرئيسية
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              الأمن السيبراني 
              <span className="text-blue-600 block">لغير المختصين</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              دورة مكثفة مصممة خصيصًا للموظفين والإداريين والفرق غير التقنية
            </p>

            {/* Course Info Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">الفئة المستهدفة</h3>
                <p className="text-sm text-gray-600">الموظفون والإداريون والفرق غير التقنية</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">المدة</h3>
                <p className="text-sm text-gray-600">5 أيام (40 ساعة)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">الرسوم</h3>
                <p className="text-sm text-gray-600">حسب الخطة (أفراد/شركات)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">الحضور</h3>
                <p className="text-sm text-gray-600">حضوري / عن بُعد / مرن</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button 
                onClick={() => setShowRegistrationForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                سجّل اهتمامك الآن
              </button>
              <button 
                onClick={() => setShowRegistrationForm(true)}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اطلب عرضًا للشركات
              </button>
              <button className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                حمّل البروشور
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cybersecurity Training for Non-Specialists" 
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">المحتوى المكثّف</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Plan */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">خطة الأيام الخمسة</h2>
          <div className="space-y-6">
            {dailyPlan.map((day, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{day.day}: {day.title}</h3>
                    <p className="text-gray-600 text-sm">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">المخرجات</h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {outputs.map((output, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 ml-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{output}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Benefits */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-8">مزايا إضافية للإداريين</h2>
            <div className="grid md:grid-cols-3 gap-8 text-blue-50">
              <div>
                <h3 className="font-semibold mb-3 text-xl">مؤشرات الأداء (KPIs)</h3>
                <p>تعلم كيفية قياس فعالية برامج الأمن السيبراني</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-xl">قراءة تقارير SOC</h3>
                <p>فهم التقارير الأمنية واتخاذ القرارات المناسبة</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-xl">قرارات مبنية على المخاطر</h3>
                <p>اتخاذ قرارات استراتيجية مدروسة ومبنية على تحليل المخاطر</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز لتطوير فهمك للأمن السيبراني؟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            انضم إلى دورة مصممة خصيصًا للموظفين والإداريين غير التقنيين
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button 
              onClick={() => setShowRegistrationForm(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              سجّل الآن
            </button>
            <button 
              onClick={() => setShowRegistrationForm(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              اطلب عرضًا للشركات
            </button>
          </div>
          
          <p className="text-gray-400 text-sm">
            خصومات خاصة للمجموعات والشركات • مقدمة من الدائرة الخضراء للأمن السيبراني
          </p>
        </div>
      </section>
    </div>
  );
};

export default NonSpecialistsPage;
