import React from "react";
import { UserPlus, MousePointerClick, MonitorSmartphone, FileSignature, Stamp, Paperclip, CreditCard, Clock, CalendarDays, ExternalLink, Phone, Mail, Download, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HrdfReimbursement() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              يعوِّض <span className="text-emerald-400">هدف</span> المستفيدين ماديًا عن تكاليف التدريب ورسوم الاختبارات
            </h1>
            <p className="mt-4 text-slate-300 text-lg">
              وذلك بعد الحصول على <span className="font-semibold text-white">الشهادة المهنية الاحترافية</span>، واتباع الخطوات المعتمدة عبر البوابة الوطنية للعمل.
            </p>
          </div>
          <a
            href="https://www.taqat.sa/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-white transition"
          >
            زيارة بوابة طاقات <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Steps Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">من خلال الخطوات التالية:</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* 01 */}
          <StepCard
            no={1}
            Icon={MonitorSmartphone}
            title="إنشاء حساب في البوابة الوطنية"
            desc="تسجيل المنشأة/الأفراد وتحديث بيانات الحساب البنكي (آيبان)."
          />
          {/* 02 */}
          <StepCard
            no={2}
            Icon={MousePointerClick}
            title="تقديم الطلب من خلال الصفحة الخاصة بالبرنامج"
            desc="اختيار البرنامج التدريبي المعتمد وإرساله للمراجعة."
          />
          {/* 03 */}
          <StepCard
            no={3}
            Icon={FileSignature}
            title="توقيع إقرار إلكتروني"
            desc="إقرار صحة الشهادة واعتمادها من الصندوق أو من يفوضه."
          />
          {/* 04 */}
          <StepCard
            no={4}
            Icon={Stamp}
            title="توقيع إقرار بعدم قيام جهة العمل بالدفع"
            desc="تأكيد أن المتقدّم هو من سدّد التكاليف وليس جهة العمل."
          />
          {/* 05 */}
          <StepCard
            no={5}
            Icon={Paperclip}
            title="رفع المطالبة عبر النظام"
            desc="إرفاق الفاتورة وإشعار السداد وصورة الشهادة التي حصل عليها المستفيد."
          />
          {/* 06 */}
          <StepCard
            no={6}
            Icon={CreditCard}
            title="تحويل التعويض مباشرة إلى الآيبان"
            desc="يتم الإيداع في حساب الفرد عبر الرقم الدولي (IBAN) بعد الموافقة."
          />
        </div>
      

      {/* Timing / SLAs */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard
            Icon={Clock}
            title="الوقت المستغرق لدراسة الأهلية"
            highlight="حتى 40 يومًا"
            desc="يُحتسب من تاريخ التقديم على البرنامج واستكمال البيانات."
          />
          <InfoCard
            Icon={CalendarDays}
            title="تاريخ الصرف"
            highlight="حتى 40 يومًا"
            desc="من تاريخ التقديم في حال اكتمال المتطلبات وقبول المطالبة."
          />
        </div>
      

      {/* Downloads */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
          <h3 className="text-xl font-bold mb-3">نماذج وروابط مهمة</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              نموذج كشف الحضور (PDF)
              <a className="text-emerald-400 underline mr-2" href="/docs/attendance-template.pdf">تنزيل</a>
            </li>
            <li className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              نموذج خطاب تفويض (DOCX)
              <a className="text-emerald-400 underline mr-2" href="/docs/authorization-letter.docx">تنزيل</a>
            </li>
          </ul>
          <p className="mt-3 text-xs text-slate-400">ضع الملفات داخل <code>/public/docs/</code> بنفس الأسماء أعلاه أو حدّث الروابط.</p>
        </div>
      </section>

      {/* Contact box */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
          <h3 className="text-xl font-bold mb-2">نساعدك في تجهيز ورفع المطالبة؟</h3>
          <p className="text-slate-300">خدمة التعويض الشامل: مراجعة الأهلية، ترتيب المستندات، رفع الطلب والمتابعة حتى الصرف.</p>
          <div className="mt-4 flex gap-3 flex-wrap">
            <a href="tel:0538889708" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition">
              <Phone className="w-4 h-4" /> 0538889708
            </a>
            <a href="mailto:cstraining@naht.sa" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition">
              <Mail className="w-4 h-4" /> cstraining@naht.sa
            </a>
          </div>
        </div>
      </section>
        {/* زر العودة للتسجيل */}
      <div className="max-w-6xl mx-auto px-4 pb-20 text-center">
        <button
          onClick={() => navigate("/register")}
          className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-all duration-300 flex items-center gap-2 shadow-md mx-auto"
        >
          العودة للتسجيل
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>  
    </main>
  );
}

function StepCard({ no, Icon, title, desc }: { no: number; Icon: any; title: string; desc: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/40 p-5">
      <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-emerald-600/10" />
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-600/15 flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-slate-700 text-xs">{no}</span>
            {title}
          </h3>
          <p className="text-slate-300 leading-7">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ Icon, title, highlight, desc }: { Icon: any; title: string; highlight: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 flex items-start gap-4">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-600/15 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="mt-1 text-emerald-400 font-bold">{highlight}</p>
        <p className="text-slate-300 mt-1">{desc}</p>
      </div>
    </div>
  );
}
