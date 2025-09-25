import React from 'react';
import { ArrowLeft, Download, Phone } from 'lucide-react';

interface HeroProps {
  onRegisterClick?: () => void;
}

const Hero = ({ onRegisterClick }: HeroProps) => {
  return (
    <section className="bg-gradient-to-bl from-emerald-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ابدأ مسارك المهني في 
            <span className="text-emerald-600 block">الأمن السيبراني مع NAHT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            تعلّم الأدوات، نفّذ مشاريع حقيقية، وارتقِ بمهاراتك حتى الجاهزية لسوق العمل
          </p>

          {/* Partner Logos */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <img 
                src="https://alamlms.ams3.digitaloceanspaces.com/training/public/ksa-tourismtraining/uploads/settings/9f69519bcd592462a4871dcecb68bdda.png" 
                alt="الأكاديمية الوطنية العالي للتدريب" 
                className="h-16 w-auto mx-auto mb-2"
              />
              <p className="text-xs text-gray-600">الأكاديمية الوطنية العالي للتدريب</p>
            </div>
            <div className="text-center">
              <img 
                src="https://sa.grcico.com/storage/logo-greencircle.png" 
                alt="الدائرة الخضراء للأمن السيبراني" 
                className="h-16 w-auto mx-auto mb-2"
              />
              <p className="text-xs text-gray-600">الدائرة الخضراء للأمن السيبراني</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">تدريب عملي</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">مرونة الحضور</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">مشاريع حقيقية</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">شهادة خبرة سنة</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button 
              onClick={onRegisterClick}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              سجّل اهتمامك الآن
            </button>
            <button 
              onClick={onRegisterClick}
              className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              اطلب اتصال استشاري
            </button>
            <button className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              حمّل البروشور
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cybersecurity Training" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;