import React from 'react';
import { UserPlus, ClipboardCheck, Calendar, Play } from 'lucide-react';

interface EnrollmentProcessProps {
  onRegisterClick?: () => void;
}

const EnrollmentProcess = ({ onRegisterClick }: EnrollmentProcessProps) => {
  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: 'تسجيل الاهتمام',
      description: 'املأ النموذج عبر الموقع الإلكتروني'
    },
    {
      icon: ClipboardCheck,
      number: '02',
      title: 'تقييم المستوى',
      description: 'تقييم سريع لتحديد المسار المناسب'
    },
    {
      icon: Calendar,
      number: '03',
      title: 'مواءمة الجدول',
      description: 'اختيار نمط الحضور وتوقيع اتفاقية التدريب'
    },
    {
      icon: Play,
      number: '04',
      title: 'الانطلاق',
      description: 'تفعيل الوصول للمحتوى والمختبرات والبدء في التعلّم'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            آلية الالتحاق
          </h2>
          <p className="text-xl text-gray-600">
            4 خطوات بسيطة للبدء في رحلتك المهنية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-200 transition-colors">
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="absolute -top-2 -right-2 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onRegisterClick}
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            سجّل الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcess;