// src/pages/PrivacyPolicy.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 text-gray-800">
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold mb-6">سياسة الخصوصية</h1>

        <p className="mb-4 text-gray-600">
          في الأكاديمية الوطنية العالي للتدريب (NAHT) و«الدائرة الخضراء للأمن السيبراني»،
          نلتزم بحماية خصوصية بياناتك الشخصية واستخدامها فقط للأغراض المحددة في هذه السياسة.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-2">1) ما البيانات التي نجمعها؟</h2>
            <ul className="list-disc pr-6 space-y-1 text-gray-700">
              <li>بيانات الهوية والاتصال: الاسم، البريد الإلكتروني، رقم الجوال.</li>
              <li>بيانات التسجيل والدورات: البرنامج المختار، المواعيد، حالة الدفع.</li>
              <li>بيانات الاستخدام الأساسية للموقع لأغراض التحسين والأمان.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2) كيف نستخدم بياناتك؟</h2>
            <ul className="list-disc pr-6 space-y-1 text-gray-700">
              <li>التواصل بخصوص البرامج التدريبية والتسجيل والدعم.</li>
              <li>إصدار شهادات الحضور/الإنجاز وإشعارات الدفع.</li>
              <li>الامتثال للمتطلبات التنظيمية (مثل برامج «هدف» عند الاقتضاء).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3) أساس المعالجة</h2>
            <p className="text-gray-700">
              نعالج بياناتك بناءً على موافقتك الصريحة، أو لتنفيذ عقد التسجيل، أو للوفاء بالالتزامات القانونية.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4) المشاركة مع أطراف ثالثة</h2>
            <p className="text-gray-700">
              لا نبيع بياناتك. قد نشارك الحد الأدنى اللازم مع مزودي الخدمة (الدفع/إرسال البريد) أو الجهات
              الداعمة مثل «هدف» عند الحاجة وبما يتوافق مع القوانين.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">5) حقوقك</h2>
            <ul className="list-disc pr-6 space-y-1 text-gray-700">
              <li>الوصول إلى بياناتك وتصحيحها.</li>
              <li>سحب الموافقة أو طلب الحذف متى لم يعد هناك أساس نظامي للاحتفاظ.</li>
              <li>الاعتراض على التواصل التسويقي في أي وقت.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">6) الأمان والاحتفاظ</h2>
            <p className="text-gray-700">
              نتبع ضوابط تقنية وتنظيمية معقولة لحماية البيانات، ونحتفظ بها للمدة اللازمة للأغراض المذكورة
              أو كما يقتضيه النظام.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">7) التواصل</h2>
            <p className="text-gray-700">
              لأي استفسار يتعلق بالخصوصية: <a className="text-emerald-600 underline" href="mailto:cstraining@naht.sa">cstraining@naht.sa</a>
              {" "}— هاتف: <a className="text-emerald-600 underline" href="tel:0538889708">0538889708</a>
            </p>
          </section>
        </div>

        {/* زر العودة للتسجيل */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/register")}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center gap-2"
          >
            العودة للتسجيل
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
