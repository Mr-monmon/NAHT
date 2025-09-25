import React from 'react';
import { Check } from 'lucide-react';

const PricingTable = () => {
  const pricingData = [
    {
      program: 'التدريب الجامعي',
      duration: '2–3 أشهر',
      price: '2000 ريال/شهر',
      attendance: 'حضوري / عن بُعد / مرن',
      benefits: 'تغطية شاملة + أدوات السوق + Voucher 20%',
      provider: 'الدائرة الخضراء للأمن السيبراني'
    },
    {
      program: 'CEH',
      duration: 'شهر',
      price: '7000 ريال (بدلاً من 12000)',
      attendance: 'حضوري / عن بُعد / مرن',
      benefits: 'مختبرات عملية + تحضير للاختبار',
      provider: 'الأكاديمية الوطنية العليا للتدريب'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خطط الأسعار والميزات
          </h2>
          <p className="text-xl text-gray-600">
            اختر الخطة التي تناسب احتياجاتك ومستواك
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-6 py-4 text-right font-semibold">المسار</th>
                <th className="px-6 py-4 text-right font-semibold">الجهة المقدمة</th>
                <th className="px-6 py-4 text-right font-semibold">المدة</th>
                <th className="px-6 py-4 text-right font-semibold">الرسوم</th>
                <th className="px-6 py-4 text-right font-semibold">الحضور</th>
                <th className="px-6 py-4 text-right font-semibold">مزايا رئيسية</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-emerald-50 transition-colors`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">{row.program}</td>
                  <td className="px-6 py-4 text-emerald-600 text-sm font-medium">{row.provider}</td>
                  <td className="px-6 py-4 text-gray-700">{row.duration}</td>
                  <td className="px-6 py-4 font-medium text-emerald-600">{row.price}</td>
                  <td className="px-6 py-4 text-gray-700">{row.attendance}</td>
                  <td className="px-6 py-4 text-gray-700">{row.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            <strong>ملاحظة:</strong> استرداد الرسوم عبر هدف (Hadaf) يخضع للأهلية ومعايير البرنامج والجهة المموّلة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;