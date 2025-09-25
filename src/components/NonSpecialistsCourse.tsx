import React from 'react';
import { Users, Clock, Calendar, CheckCircle, Target, Shield, FileText, TrendingUp, Award } from 'lucide-react';

interface NonSpecialistsCourseProps {
  onRegisterClick?: () => void;
}

const NonSpecialistsCourse = ({ onRegisterClick }: NonSpecialistsCourseProps) => {
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
      description: 'مكافحة التصيّد (Phishing) عملي، Cloud/Mobile/BYOD، قوائم تحقق'
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            الأمن السيبراني لغير المختصين
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
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
        </div>

        {/* Content Overview */}
        <div className="mb-16" id="nonspecialists">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">المحتوى المكثّف</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Plan */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">خطة الأيام الخمسة</h3>
          <div className="space-y-4">
            {dailyPlan.map((day, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{day.day}: {day.title}</h4>
                    <p className="text-gray-600 text-sm">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outputs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">المخرجات</h3>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
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

        {/* Special Benefits */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">مزايا إضافية للإداريين</h3>
            <div className="grid md:grid-cols-3 gap-6 text-blue-50">
              <div>
                <h4 className="font-semibold mb-2">مؤشرات الأداء (KPIs)</h4>
                <p className="text-sm">تعلم كيفية قياس فعالية برامج الأمن السيبراني</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">قراءة تقارير SOC</h4>
                <p className="text-sm">فهم التقارير الأمنية واتخاذ القرارات المناسبة</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">قرارات مبنية على المخاطر</h4>
                <p className="text-sm">اتخاذ قرارات استراتيجية مدروسة ومبنية على تحليل المخاطر</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onRegisterClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              سجّل الآن
            </button>
            <button 
              onClick={onRegisterClick}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              اطلب عرضًا للشركات
            </button>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            خصومات خاصة للمجموعات والشركات
          </p>
        </div>
      </div>
    </section>
  );
};

export default NonSpecialistsCourse;