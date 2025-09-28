import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, Calendar, ArrowLeft, Sparkles } from 'lucide-react';

const NonSpecialistsBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            دورة متخصصة جديدة
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-right lg:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                الأمن السيبراني 
                <span className="text-blue-200 block">لغير المختصين</span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                دورة مكثفة مصممة خصيصًا للموظفين والإداريين والفرق غير التقنية
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-blue-200 mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">للإداريين</div>
                  <div className="text-blue-200 text-xs">والموظفين</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-blue-200 mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">5 أيام</div>
                  <div className="text-blue-200 text-xs">15 ساعة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Calendar className="w-6 h-6 text-blue-200 mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">مرن</div>
                  <div className="text-blue-200 text-xs">حضوري/عن بُعد</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/non-specialists"
                className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                اكتشف التفاصيل
                <ArrowLeft className="w-5 h-5" />
              </Link>

              {/* Provider Info */}
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                <img 
                  src="/logo/logo_1.png" 
                  alt="الدائرة الخضراء للأمن السيبراني" 
                  className="h-8 w-auto"
                />
                <span className="text-blue-200 text-sm">مقدمة من الدائرة الخضراء للأمن السيبراني</span>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="text-white">أنظمة وحلول (EDR/DLP/IAM/SIEM)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="text-white">تشريعات وقوانين (PDPL/NCA)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="text-white">بناء برامج الأمن السيبراني</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="text-white">المسؤوليات والمخاطر</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <span className="text-white">KPIs وقراءة تقارير SOC</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                جديد!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold transform -rotate-12">
                خصومات للشركات
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonSpecialistsBanner;
