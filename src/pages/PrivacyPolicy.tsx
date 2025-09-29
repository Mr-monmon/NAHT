// src/pages/PrivacyPolicy.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield, FileText, Users, Share2, KeyRound, Lock, Database,
  Scale, AlertTriangle, Info, ArrowRight, Mail, Phone, Clock
} from "lucide-react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <main dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* خلفية زخرفية ناعمة */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]">
        <svg className="absolute -top-24 right-0 w-[900px] h-[900px]" viewBox="0 0 800 800">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop stopColor="#10b981" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <circle cx="400" cy="400" r="320" fill="url(#g)" opacity="0.15" />
          <circle cx="460" cy="360" r="260" fill="url(#g)" opacity="0.13" />
        </svg>
      </div>

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-4 pt-14 pb-6">
        <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur p-6 md:p-10 shadow-[0_0_40px_-15px_rgba(16,185,129,.35)]">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-emerald-600/20 flex items-center justify-center">
              <Shield className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
                سياسة الخصوصية
              </h1>
              <p className="mt-3 text-slate-300 text-lg">
                في الأكاديمية الوطنية العالي للتدريب (NAHT) و«الدائرة الخضراء للأمن السيبراني»،
                نحترم خصوصيتك ونعالج بياناتك وفق ممارسات واضحة ومعلنة.
              </p>
              <p className="mt-1 text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4" /> آخر تحديث: 2025-09-29
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* أقسام ببطاقات وأيقونات */}
      <section className="relative max-w-5xl mx-auto px-4 pb-12 space-y-8">
        <Grid>
          <Card icon={Database} title="1) البيانات التي نجمعها">
            <ul className="list-disc pr-5 space-y-1 text-slate-300">
              <li>الهوية والاتصال: الاسم، البريد الإلكتروني، رقم الجوال.</li>
              <li>بيانات التسجيل والدورات: البرنامج، المواعيد، حالة الدفع.</li>
              <li>بيانات استخدام عامة لتحسين الأداء والأمان.</li>
            </ul>
          </Card>

          <Card icon={FileText} title="2) أغراض المعالجة">
            <ul className="list-disc pr-5 space-y-1 text-slate-300">
              <li>التواصل حول البرامج والتسجيل والدعم.</li>
              <li>إصدار شهادات الحضور/الإنجاز وإشعارات الدفع.</li>
              <li>الامتثال لمتطلبات الجهات الداعمة (مثل «هدف») عند الاقتضاء.</li>
            </ul>
          </Card>

          <Card icon={KeyRound} title="3) الأساس النظامي">
            <p className="text-slate-300">
              نعالج البيانات استنادًا إلى <span className="font-semibold text-white">الموافقة</span>، أو
              <span className="font-semibold text-white">تنفيذ العقد</span> (التسجيل)، أو
              <span className="font-semibold text-white">الالتزامات النظامية</span>.
            </p>
          </Card>

          <Card icon={Share2} title="4) الإفصاح لأطراف ثالثة">
            <p className="text-slate-300">
              لا نبيع بياناتك. قد نشارك الحدّ الأدنى اللازم مع مزوّدي خدمات (الدفع/الإرسال)
              أو الجهات الداعمة عند الحاجة وبما يتوافق مع الأنظمة المعمول بها.
            </p>
          </Card>

          <Card icon={Users} title="5) حقوقك">
            <ul className="list-disc pr-5 space-y-1 text-slate-300">
              <li>الوصول إلى بياناتك وتصحيحها.</li>
              <li>سحب الموافقة أو طلب الحذف حيث لا يوجد أساس للاحتفاظ.</li>
              <li>الاعتراض على الاتصالات التسويقية في أي وقت.</li>
            </ul>
          </Card>

          <Card icon={Lock} title="6) الأمان والاحتفاظ">
            <p className="text-slate-300">
              نتبع ضوابط تقنية وتنظيمية معقولة. نحتفظ بالبيانات للمدد اللازمة للأغراض
              المذكورة أو وفق المتطلبات النظامية.
            </p>
          </Card>
        </Grid>

        {/* بنود تقلّل الالتزامات القانونية */}
        <div className="grid md:grid-cols-2 gap-4">
          <Notice
            icon={Scale}
            title="حدود المسؤولية"
            body="لا نتحمّل أي مسؤولية عن أضرار غير مباشرة أو عرضية ناتجة عن استخدامك للموقع أو اعتمادك على المحتوى، ضمن الحدود التي يجيزها النظام."
          />
          <Notice
            icon={AlertTriangle}
            title="عدم تقديم ضمانات"
            body="يُقدَّم الموقع وخدماته «كما هي». لا نقدّم أي ضمانات صريحة أو ضمنية بخصوص الدقة أو الملاءمة أو التوافر المستمر."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Notice
            icon={Info}
            title="تحديثات السياسة"
            body="قد نُحدِّث هذه السياسة عند الحاجة. يُعدّ استمرار استخدامك للخدمات بعد النشر موافقةً على النسخة المحدّثة."
          />
          <Notice
            icon={Shield}
            title="الامتثال المحلي"
            body="نلتزم بالأنظمة السعودية ذات الصلة بحماية البيانات قدر الإمكان. أي نص تفسيري هنا لا يُعدّ استشارة قانونية."
          />
        </div>

        {/* تواصل */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-xl font-bold mb-2">التواصل بشأن الخصوصية</h3>
          <p className="text-slate-300">
            لأي استفسار:{" "}
            <a className="text-emerald-400 underline" href="mailto:cstraining@naht.sa">
              cstraining@naht.sa
            </a>{" "}
            —{" "}
            <a className="text-emerald-400 underline" href="tel:0538889708">
              0538889708
            </a>
          </p>
        </div>

        {/* أزرار تنقّل */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 pb-10">
          <button
            onClick={() => navigate("/register")}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-all duration-300 flex items-center gap-2"
          >
            العودة للتسجيل
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="/hrdf"
            className="px-8 py-3 rounded-lg font-semibold bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 transition-all duration-300 flex items-center gap-2"
          >
            آلية التعويض من هدف
          </a>
        </div>
      </section>
    </main>
  );
}

/* ============== Components ============== */

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-4">{children}</div>;
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-emerald-500/40 transition-colors">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-600/15 flex items-center justify-center group-hover:bg-emerald-600/25 transition-colors">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <div className="text-slate-300 leading-7">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Notice({
  icon: Icon,
  title,
  body,
}: {
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-600/15 flex items-center justify-center">
          <Icon className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h4 className="font-bold text-base">{title}</h4>
          <p className="text-slate-300 mt-1 leading-7">{body}</p>
        </div>
      </div>
    </div>
  );
}
