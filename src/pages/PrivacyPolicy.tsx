// src/pages/PrivacyPolicy.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-6">
        <div className="rounded-2xl border border-emerald-200 bg-white shadow p-8 flex items-start gap-4">
          <div className="shrink-0 w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Shield className="w-7 h-7 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-2">
              سياسة الخصوصية
            </h1>
            <p className="text-gray-600">
              هذه السياسة تشرح بشكل عام كيفية جمع واستخدام ومشاركة بياناتك. استمرارك
              في استخدام المنصة يعني موافقتك على الشروط أدناه.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 pb-12 space-y-6 leading-7 text-gray-700">
        <h2 className="font-bold text-xl">1. المقدمة</h2>
        <p>
          تلتزم الأكاديمية الوطنية العالي للتدريب (NAHT) و«الدائرة الخضراء للأمن السيبراني»
          بحماية خصوصية مستخدمينا ضمن الحدود المعقولة والمتعارف عليها تجاريًا. هذه
          السياسة عامة وقابلة للتغيير في أي وقت.
        </p>

        <h2 className="font-bold text-xl">2. البيانات التي قد يتم جمعها</h2>
        <ul className="list-disc pr-6 space-y-1">
          <li>الاسم، البريد الإلكتروني، رقم الهاتف.</li>
          <li>بيانات تقنية مثل عنوان IP وملفات تعريف الارتباط.</li>
          <li>تفاصيل التسجيل في البرامج التدريبية.</li>
          <li>أي بيانات أخرى قد نحصل عليها أثناء استخدامك للخدمات.</li>
        </ul>

        <h2 className="font-bold text-xl">3. الأغراض</h2>
        <p>
          قد تُستخدم بياناتك لأغراض متعددة مثل: تسيير العملية التدريبية، التواصل،
          تحسين الخدمات، الامتثال للمتطلبات التنظيمية، أو أي استخدام نراه مناسبًا.
        </p>

        <h2 className="font-bold text-xl">4. مشاركة البيانات</h2>
        <p>
          لا نبيع بياناتك، لكن قد نشاركها مع مزودي خدمة أو جهات تنظيمية بقدر ما نراه
          مناسبًا أو مطلوبًا. لسنا مسؤولين عن ممارسات الخصوصية للأطراف الثالثة.
        </p>

        <h2 className="font-bold text-xl">5. حقوقك</h2>
        <p>
          قد يكون لديك حقوق قانونية معينة (الوصول، التصحيح، الحذف). نحن لا نلتزم
          بضمان تلك الحقوق إلا في الحدود التي يفرضها النظام صراحة.
        </p>

        <h2 className="font-bold text-xl">6. أمن البيانات</h2>
        <p>
          نبذل جهودًا معقولة لتأمين بياناتك، لكن لا يمكننا ضمان الحماية الكاملة من
          أي خرق أمني. استمرارك بالخدمة يعني أنك تقبل هذا الخطر.
        </p>

        <h2 className="font-bold text-xl">7. الاحتفاظ بالبيانات</h2>
        <p>
          نحتفظ بالبيانات طالما نراه ضروريًا لأغراض تشغيلية أو قانونية أو تجارية،
          دون التزام زمني محدد.
        </p>

        <h2 className="font-bold text-xl">8. حدود المسؤولية</h2>
        <p>
          يتم تقديم الخدمات كما هي وحسب توافرها. لا نتحمل أي التزامات أو ضمانات
          بخصوص دقة أو استمرارية الخدمة. لا نتحمل مسؤولية الأضرار المباشرة أو
          غير المباشرة الناتجة عن استخدامك للخدمة.
        </p>

        <h2 className="font-bold text-xl">9. التعديلات</h2>
        <p>
          نحتفظ بالحق الكامل في تعديل أو تحديث هذه السياسة في أي وقت. استمرارك
          بالخدمة بعد النشر يعتبر موافقة على النسخة الجديدة.
        </p>

        <h2 className="font-bold text-xl">10. التواصل</h2>
        <p>
          لأي استفسار متعلق بالخصوصية (من غير التزام بالرد الفوري):{" "}
          <a href="mailto:cstraining@naht.sa" className="text-emerald-600 underline">
            cstraining@naht.sa
          </a>{" "}
          —{" "}
          <a href="tel:0538889708" className="text-emerald-600 underline">
            0538889708
          </a>
        </p>
      </section>

      {/* Button */}
      <div className="flex justify-center pb-12">
        <button
          onClick={() => navigate("/register")}
          className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-all duration-300 flex items-center gap-2 shadow-md"
        >
          العودة للتسجيل
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </main>
  );
}
