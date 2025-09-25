import React from 'react';
import { Target, Settings, Users, TrendingUp } from 'lucide-react';

const WhyNAHT = () => {
  const features = [
    {
      icon: Target,
      title: 'تدريب عملي مكثّف',
      description: 'مبني على سيناريوهات من الواقع'
    },
    {
      icon: Settings,
      title: 'تغطية شاملة',
      description: 'جميع أقسام الأمن السيبراني مع أدوات السوق'
    },
    {
      icon: Users,
      title: 'مرونة الحضور',
      description: 'مكاتب مجهّزة / عن بُعد / مرن (Hybrid)'
    },
    {
      icon: TrendingUp,
      title: 'مسارات واضحة',
      description: 'من التهيئة → الاحتراف (CEH) → التدريب أثناء الوظيفة'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            لماذا NAHT؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            منصة تدريب متكاملة تؤهلك لسوق العمل في الأمن السيبراني
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-emerald-50 group"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNAHT;