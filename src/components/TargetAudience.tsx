import React from 'react';
import { Users, RefreshCw, TrendingUp } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: Users,
      title: 'طلاب وحديثو التخرّج',
      description: 'طلاب/طالبات المرحلة الجامعية وحديثو التخرّج الراغبون في بناء مسار مهني في الأمن السيبراني'
    },
    {
      icon: RefreshCw,
      title: 'راغبو التحوّل المهني',
      description: 'المهنيون من خلفيات مختلفة الذين يرغبون بالانتقال إلى مجال الأمن السيبراني'
    },
    {
      icon: TrendingUp,
      title: 'موظفون يطمحون للتطوير',
      description: 'الموظفون الحاليون الذين يرغبون برفع جاهزيتهم التقنية والعملية'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            لمن هذا البرنامج؟
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            برنامج NAHT مصمم لفئات متنوعة من المتعلمين والمهنيين
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-emerald-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {audience.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            نبرة الثقة والالتزام
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-right">
            <div>
              <p className="text-emerald-50 leading-relaxed">
                محتوى عملي يواكب متطلبات سوق العمل في السعودية والمنطقة
              </p>
            </div>
            <div>
              <p className="text-emerald-50 leading-relaxed">
                إشراف مهني، مراجعات دورية، ومخرجات ملموسة لكل متدرّب
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;