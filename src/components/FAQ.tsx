import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'هل يشترط خبرة سابقة؟',
      answer: 'لا، يكفي اهتمام جاد واستعداد للتعلّم. التقييم الأولي يحدّد المسار الأنسب.'
    },
    {
      question: 'هل البرنامج حضوري فقط؟',
      answer: 'نوفر مكاتب مجهّزة، وعن بُعد، ونمط مرن (Hybrid) لتناسب احتياجاتك.'
    },
    {
      question: 'كيف يعمل الـVoucher (20%)؟',
      answer: 'يُمنح بعد إتمام التدريب الجامعي، ويُستخدم لأي دورة داخل NAHT خلال فترة محددة.'
    },
    {
      question: 'هل CEH مجاني للجميع؟',
      answer: 'مجانًا فقط لمن أكمل مسار التدريب الجامعي لدينا. أمّا الملتحقون مباشرةً بـCEH فيسدّدون 30% مع إمكانية الاسترداد عبر هدف حسب الأهلية.'
    },
    {
      question: 'هل تضمنون وظيفة؟',
      answer: 'نقدّم خبرة عملية حقيقية وشهادة خبرة سنة بعد إتمام المسارات الثلاثة، ونساعدك في الجاهزية، لكن لا نعد بوظيفة مضمونة.'
    },
    {
      question: 'طرق الدفع؟',
      answer: 'تحويل بنكي/مدى/بطاقات ائتمانية. تتوفر خطط دفع شهرية للمسار الجامعي.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            أسئلة شائعة
          </h2>
          <p className="text-xl text-gray-600">
            إجابات على الأسئلة الأكثر شيوعًا حول برامج NAHT
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;