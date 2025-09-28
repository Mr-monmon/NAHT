import React from 'react';
import { Shield, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

interface FooterProps {
  onRegisterClick?: () => void;
}

const Footer = ({ onRegisterClick }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Call to Action Section */}
      <div className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز تبدأ؟ انضم الآن واصنع فرقًا في مسارك المهني
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-3xl mx-auto">
            ابدأ رحلتك في الأمن السيبراني مع منصة تدريب متكاملة ومعتمدة
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onRegisterClick}
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              سجّل اهتمامك
            </button>
            <button 
              onClick={onRegisterClick}
              className="bg-emerald-700 text-white border-2 border-emerald-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              تحدث مع مستشار
            </button>
            <button 
              onClick={onRegisterClick}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              اطلب جدول الدفعة القادمة
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <img 
                      src="/naht.png" 
                      alt="الأكاديمية الوطنية العالي للتدريب" 
                      className="h-12 w-auto"
                  />
                  <img 
                      src="/greencircle.png" 
                      alt="الدائرة الخضراء للأمن السيبراني" 
                      className="h-12 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">برنامج مشترك</h3>
                <p className="text-sm text-gray-400">الأكاديمية الوطنية العالي للتدريب × الدائرة الخضراء للأمن السيبراني</p>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                منصة تدريب متكاملة في الأمن السيبراني تهدف إلى تأهيل الكوادر المتخصصة لسوق العمل من خلال برامج عملية ومتقدمة.
              </p>
              <a 
                href="https://naht.edu.sa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2"
              >
                زيارة الموقع الرسمي
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">البرامج</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">الأسعار</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">معلومات التواصل</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-emerald-400 ml-2" />
                  <span className="text-gray-400 text-sm">0112093090</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-emerald-400 ml-2" />
                  <span className="text-gray-400 text-sm">0554132178</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-emerald-400 ml-2" />
                  <span className="text-gray-400 text-sm">cstraining@naht.sa</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-emerald-400 ml-2" />
                  <span className="text-gray-400 text-sm">  المملكة العربية السعودية,الرياض</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 NAHT - الأكاديمية الوطنية العالي للتدريب. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
