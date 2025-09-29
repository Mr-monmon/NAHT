// src/pages/PrivacyPolicy.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield, FileText, Users, Share2, KeyRound, Lock, ArrowRight
} from "lucide-react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 text-gray-800">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-6">
        <div className="rounded-2xl border border-emerald-200 bg-white shadow-lg p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Shield className="w-7 h-7 text-emerald-500" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700">
                سياسة الخصوصية
              </h1>
              <p className="mt-3 text-gray-600">
                نحن نستخدم بياناتك فقط لتقديم الخدمة التعليمية وتسهيل التواصل معك،
                ولا نشاركها إلا في الحدود اللازمة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* محتوى السياسة */}
      <section className="max-w-5xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-6">
        <Card icon={FileText} title="ما البيانات التي نجمعها؟">
          <ul className="list-disc pr-5 space-y-1 text-gray-600">
            <li>الاسم وبيانات التواصل (الجوال والبريد الإلكتروني).</li>
            <li>تفاصيل الدورة المختارة والتسجيل.</li>
            <li>ملاحظات استخدام أساسية لتحسين الموقع.</li>
          </ul>
        </Card>

        <Card icon={Users} title="كيف نستخدمها؟">
          <ul className="list-disc pr-5 space-y-1 text-gray-600">
            <li>للتواصل معك بخصوص التسجيل والبرامج.</li>
            <li>إصدار الشهادات والإشعارات.</li>
            <li>تحسين تجربة المستخدم.</li>
          </ul>
        </Card>

        <Card icon={KeyRound} title="الأساس القانوني">
          <p className="text-gray-600">
            تتم المعالجة بناءً على موافقتك عند التسجيل أو لتنفيذ الخدمة المطلوبة.
          </p>
        </Card>

        <Card icon={Share2} title="مشاركة البيانات">
          <p className="text-gray-600">
            لا نبيع بياناتك إطلاقًا. المشاركة تقتصر على مزوّدي الخدمة (مثل الدفع أو الإرسال) وبالقدر الضروري فقط.
          </p>
        </Card>

        <Card icon={Lock} title="الأمان والاحتفاظ">
          <p className="text-gray-600">
            نتبع ضوابط أساسية لحماية بياناتك، ونحتفظ بها فقط طالما هناك حاجة لتقديم الخدمة أو كما يفرض النظام.
          </p>
        </Card>
      </section>

      {/* زر العودة */}
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

function Card({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-500" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-emerald-700">{title}</h3>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
