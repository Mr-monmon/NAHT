import React from 'react';
import { GraduationCap, Award, Briefcase, ArrowLeft } from 'lucide-react';

interface ProgramsProps {
  onRegisterClick?: () => void;
}

const Programs = ({ onRegisterClick }: ProgramsProps) => {
  const programs = [
    {
      id: 'university',
      icon: GraduationCap,
      title: 'التدريب الجامعي',
      duration: '2–3 أشهر',
      price: '2000 ريال/شهريًا',
      target: 'طلاب/طالبات وخريجون',
      provider: 'الدائرة الخضراء للأمن السيبراني',
      features: [
        'نظرة شاملة على أقسام الأمن السيبراني',
        'تدريب عملي على أدوات أساسية',
        'مشاريع قصيرة ومحاكاة بيئات عمل',
        'جلسات توجيه أسبوعية',
        'شهادة فني أمن سيبراني',
        'Voucher بقيمة 20% من المبلغ المدفوع'
      ],
      cta: 'ابدأ مسارك الجامعي',
      highlight: false
    },
    {
      id: 'ceh',
      icon: Award,
      title: 'دورة الاحتراف — CEH',
      duration: ' 40  ساعة / 5 أيام + تدريب إضافي',
      price: '7000 ريال',
      originalPrice: '12000 ريال',
      target: 'المحترفون والمتقدمون',
      provider: 'الأكاديمية الوطنية العليا للتدريب',
      features: [
        'محتوى CEH عملي + مختبرات تطبيقية',
        'تدريب على التفكير الهجومي',
        'تحضير منهجي للاختبار',
        'إمكانية استرداد الرسوم عبر هدف'
      ],
      cta: 'احجز مقعدك في CEH',
      highlight: true
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مسارات البرنامج
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختر المسار المناسب لمستواك وأهدافك المهنية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                program.highlight ? 'ring-2 ring-emerald-500 transform scale-105' : ''
              }`}
            >
              {program.highlight && (
                <div className="bg-emerald-500 text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                  الأكثر شعبية
                </div>
              )}
              
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center ml-4">
                  <program.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  <p className="text-sm text-gray-600">{program.target}</p>
                  <p className="text-xs text-emerald-600 font-medium">{program.provider}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">المدة:</span>
                  <span className="font-medium text-gray-900">{program.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">الرسوم:</span>
                  <div className="text-left">
                    {program.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">{program.originalPrice}</span>
                    )}
                    <span className="font-medium text-emerald-600">{program.price}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                program.disabled
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : program.highlight 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              onClick={program.disabled ? undefined : onRegisterClick}
              disabled={program.disabled}
              >
                {program.cta}
                {!program.disabled && <ArrowLeft className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;