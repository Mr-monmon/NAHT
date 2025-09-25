import React from 'react';
import { Shield, FileText, Eye, Bug, Settings } from 'lucide-react';

const WhatYouLearn = () => {
  const skills = [
    {
      icon: Shield,
      title: 'أساسيات الأمن السيبراني',
      description: 'مفاهيم التهديدات والمخاطر والحماية'
    },
    {
      icon: FileText,
      title: 'مبادئ GRC',
      description: 'بناء السياسات والإجراءات والامتثال'
    },
    {
      icon: Eye,
      title: 'تشغيل حالات استخدام SOC',
      description: 'مراقبة، تنبيهات، واستجابة أولية'
    },
    {
      icon: Bug,
      title: 'مفاهيم VAPT',
      description: 'استكشاف ثغرات واختبار اختراق وتقارير احترافية'
    },
    {
      icon: Settings,
      title: 'أدوات السوق الأساسية',
      description: 'أفضل الممارسات المهنية والأدوات المطلوبة'
    }
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ماذا ستتعلّم؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            منهج شامل يغطي جميع جوانب الأمن السيبراني بطريقة عملية ومتقدمة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            النتيجة النهائية
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full ml-3"></div>
              <span className="text-gray-700 font-medium">شهادة خبرة لمدة سنة</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full ml-3"></div>
              <span className="text-gray-700 font-medium">خبرة عملية حقيقية تعزّز فرص التوظيف</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;