import React, { useState } from 'react';
import { CheckCircle2, Loader2, Mail, Phone, User, Building2, GraduationCap, MapPin, ArrowRight, Shield } from 'lucide-react';
import { submitToGoogleSheets, saveToLocalStorage, FormSubmission } from '../utils/googleSheets';

type TrackKey = 'internship' | 'ceh' | 'onjob';
type ContactType = 'register' | 'consult';
type RegistrationType = 'individual' | 'group';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  role: 'student' | 'fresh' | 'pro';
  university?: string;
  experienceYears?: string;
  track: TrackKey | 'nonspecialists';
  mode: 'office' | 'remote' | 'flex';
  note?: string;
  agree: boolean;
  contactType: ContactType;
  registrationType?: RegistrationType;
  expectedParticipants?: string;
};

const TRACKS: Record<TrackKey | 'nonspecialists', string> = {
  internship: 'التدريب الجامعي (2–3 أشهر)',
  ceh: 'دورة CEH الاحترافية',
  onjob: 'تدريب أثناء الوظيفة',
  nonspecialists: 'الأمن السيبراني لغير المختصين (5 أيام)',
};

interface RegistrationFormProps {
  onBackToHome: () => void;
}

const RegistrationForm = ({ onBackToHome }: RegistrationFormProps) => {
  const [data, setData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    role: 'student',
    university: '',
    experienceYears: '',
    track: 'internship',
    mode: 'flex',
    note: '',
    agree: false,
    contactType: 'register',
    registrationType: 'individual',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const trackOptions = [
    { value: 'internship', label: TRACKS.internship },
    { value: 'ceh', label: TRACKS.ceh },
    { value: 'nonspecialists', label: TRACKS.nonspecialists },
  ];

  function validate(values: FormData) {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!values.fullName.trim()) e.fullName = 'الاسم الكامل مطلوب';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'بريد إلكتروني غير صالح';
    if (!values.phone.trim() || !/^[0-9+\-\s()]{8,20}$/.test(values.phone)) e.phone = 'رقم هاتف غير صالح';
    if (!values.agree) e.agree = 'يجب الموافقة على سياسة الخصوصية';
    if (!values.track) e.track = 'يرجى اختيار المسار';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    try {
      const payload: FormSubmission = {
        ...data,
        submittedAt: new Date().toISOString(),
        source: window.location.href,
      };

      // إرسال البيانات إلى Google Sheets
      const success = await submitToGoogleSheets(payload);
      
      if (success) {
        console.log('Data submitted to Google Sheets successfully');
      } else {
        console.log('Failed to submit to Google Sheets, saving locally');
        saveToLocalStorage(payload);
      }

      setSuccess(true);
    } catch (err) {
      console.error('Submission error:', err);
      // حفظ البيانات محلياً في حالة الفشل
      const payload: FormSubmission = {
        ...data,
        submittedAt: new Date().toISOString(),
        source: window.location.href,
      };
      saveToLocalStorage(payload);
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 font-cairo">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4 space-x-reverse">
                {/* NAHT Logo */}
                <img 
                  src="/logo/logo_2.png" 
                  alt="الأكاديمية الوطنية العالي للتدريب" 
                  className="h-10 w-auto"
                />
                {/* Green Circle Logo */}
                <img 
                  src="/logo/logo_1.png" 
                  alt="الدائرة الخضراء للأمن السيبراني" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Success Content */}
        <div className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                تم استلام طلبك بنجاح
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                شكرًا لتسجيل اهتمامك في برامج NAHT. سيتواصل معك فريقنا خلال 24 ساعة لإكمال الخطوات التالية.
              </p>

              <div className="bg-emerald-50 p-6 rounded-xl mb-8">
                <h3 className="font-semibold text-emerald-800 mb-2">الخطوات التالية:</h3>
                <ul className="text-right text-emerald-700 space-y-2">
                  <li>• مراجعة طلبك من قبل فريق القبول</li>
                  <li>• تحديد موعد للتقييم الأولي</li>
                  <li>• إرسال تفاصيل البرنامج والجدول الزمني</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBackToHome}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  العودة للرئيسية
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => {
                    setSuccess(false);
                    setData({
                      fullName: '',
                      email: '',
                      phone: '',
                      city: '',
                      role: 'student',
                      university: '',
                      experienceYears: '',
                      track: 'internship',
                      mode: 'flex',
                      note: '',
                      agree: false,
                      contactType: 'register',
                      registrationType: 'individual',
                    });
                  }}
                  className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
                >
                  إرسال طلب جديد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              {/* NAHT Logo */}
              <img 
                src="https://alamlms.ams3.digitaloceanspaces.com/training/public/ksa-tourismtraining/uploads/settings/9f69519bcd592462a4871dcecb68bdda.png" 
                alt="الأكاديمية الوطنية العالي للتدريب" 
                className="h-10 w-auto"
              />
              {/* Green Circle Logo */}
              <img 
                src="https://sa.grcico.com/storage/logo-greencircle.png" 
                alt="الدائرة الخضراء للأمن السيبراني" 
                className="h-10 w-auto"
              />
            </div>
            
            <button
              onClick={onBackToHome}
              className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              العودة للرئيسية
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Form Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              سجّل اهتمامك في برامج NAHT
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ابدأ الخطوة الأولى نحو مسارك المهني في الأمن السيبراني. عبئ البيانات التالية وسيتواصل معك فريقنا لتحديد المسار الأنسب.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* نوع التواصل */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">نوع الطلب</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: 'register', label: 'تسجيل اهتمام', desc: 'للانضمام لأحد البرامج' },
                    { v: 'consult', label: 'طلب اتصال استشاري', desc: 'للحصول على استشارة مجانية' },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => setData((d) => ({ ...d, contactType: opt.v as ContactType }))}
                      className={`p-4 rounded-xl border-2 transition-all text-right ${
                        data.contactType === opt.v
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-emerald-300'
                      }`}
                    >
                      <div className="font-semibold">{opt.label}</div>
                      <div className="text-sm opacity-75">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* البيانات الأساسية */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="الاسم الكامل" error={errors.fullName} required>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="اكتب اسمك الثلاثي"
                      value={data.fullName}
                      onChange={(e) => setData({ ...data, fullName: e.target.value })}
                    />
                  </div>
                </Field>

                <Field label="البريد الإلكتروني" error={errors.email} required>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="name@example.com"
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                  </div>
                </Field>

                <Field label="رقم الجوال" error={errors.phone} required>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      inputMode="tel"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="05xxxxxxxx"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                    />
                  </div>
                </Field>

                <Field label="المدينة">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="الرياض، جدة، الدمام..."
                      value={data.city}
                      onChange={(e) => setData({ ...data, city: e.target.value })}
                    />
                  </div>
                </Field>

                <Field label="حالتك الحالية" required>
                  <select
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={data.role}
                    onChange={(e) => setData({ ...data, role: e.target.value as FormData['role'] })}
                  >
                    <option value="student">طالب جامعي</option>
                    <option value="fresh">خريج جديد</option>
                    <option value="pro">محترف/على رأس العمل</option>
                  </select>
                </Field>

                {data.role !== 'pro' && (
                  <Field label="الجامعة/التخصص">
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="مثال: جامعة الملك سعود – أمن سيبراني"
                        value={data.university}
                        onChange={(e) => setData({ ...data, university: e.target.value })}
                      />
                    </div>
                  </Field>
                )}

                {data.role !== 'student' && (
                  <Field label="سنوات الخبرة">
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="0، 1، 2، 3+ سنوات"
                        value={data.experienceYears}
                        onChange={(e) => setData({ ...data, experienceYears: e.target.value })}
                      />
                    </div>
                  </Field>
                )}
              </div>

              {/* اختيار المسار + نمط التدريب */}
              <div className="space-y-6">
                <Field label="اختر المسار المرغوب" error={errors.track} required>
                  <select
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={data.track}
                    onChange={(e) => setData({ ...data, track: e.target.value as TrackKey | 'nonspecialists' })}
                  >
                    {trackOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* نوع التسجيل لدورة غير المختصين */}
                {data.track === 'nonspecialists' && (
                  <Field label="نوع التسجيل" required>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { v: 'individual', label: 'فردي', desc: 'تسجيل شخصي' },
                        { v: 'group', label: 'مجموعة/شركة', desc: 'تسجيل جماعي أو مؤسسي' },
                      ].map((opt) => (
                        <button
                          key={opt.v}
                          type="button"
                          onClick={() => setData((d) => ({ ...d, registrationType: opt.v as RegistrationType }))}
                          className={`p-4 rounded-xl border-2 transition-all text-right ${
                            data.registrationType === opt.v
                              ? 'bg-blue-50 border-blue-500 text-blue-700'
                              : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-300'
                          }`}
                        >
                          <div className="font-semibold">{opt.label}</div>
                          <div className="text-sm opacity-75">{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </Field>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="طريقة التدريب المفضلة" required>
                    <select
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      value={data.mode}
                      onChange={(e) => setData({ ...data, mode: e.target.value as FormData['mode'] })}
                    >
                      <option value="office">في المكاتب المجهزة</option>
                      <option value="remote">عن بعد</option>
                      <option value="flex">مرن (مزيج)</option>
                    </select>
                  </Field>

                  {/* معلومات إضافية للمجموعات/الشركات */}
                  {data.track === 'nonspecialists' && data.registrationType === 'group' && (
                    <Field label="عدد المشاركين المتوقع">
                      <input
                        type="number"
                        min="2"
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="عدد الموظفين المشاركين"
                        value={data.expectedParticipants || ''}
                        onChange={(e) => setData({ ...data, expectedParticipants: e.target.value })}
                      />
                    </Field>
                  )}
                </div>
              </div>

              {/* ملاحظات */}
              <Field label="ملاحظات أو متطلبات خاصة">
                <textarea
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="اكتب أي تفاصيل تهم فريقنا (أوقات التواصل المفضلة، أهدافك المهنية، احتياجات خاصة...)"
                  value={data.note}
                  onChange={(e) => setData({ ...data, note: e.target.value })}
                />
              </Field>

              {/* الموافقة */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.agree}
                    onChange={(e) => setData({ ...data, agree: e.target.checked })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    أوافق على سياسة الخصوصية ومعالجة بياناتي الشخصية للتواصل حول البرامج التدريبية والتسجيل. 
                    <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">اقرأ سياسة الخصوصية</a>
                  </span>
                </label>
                {errors.agree && <p className="text-red-600 text-sm mt-2">{errors.agree}</p>}
              </div>

              {/* أزرار الإجراء */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : data.contactType === 'consult' ? (
                    'إرسال طلب الاتصال'
                  ) : (
                    'إرسال طلب التسجيل'
                  )}
                  {data.track === 'nonspecialists' && data.registrationType === 'group' && ' للمجموعة'}
                </button>

                <button
                  type="button"
                  onClick={onBackToHome}
                  className="flex-1 bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  العودة للرئيسية
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* معلومات إضافية */}
              <div className="bg-emerald-50 p-6 rounded-xl text-center">
                {data.track === 'nonspecialists' && data.registrationType === 'group' ? (
                  <>
                    <p className="text-emerald-800 font-medium mb-2">
                      تسجيل المجموعات والشركات
                    </p>
                    <p className="text-emerald-700 text-sm">
                      سيتواصل معك فريقنا لتحديد عرض سعر مخصص وجدولة التدريب حسب احتياجات مؤسستك.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-emerald-800 font-medium mb-2">
                      هل تحتاج مساعدة في ملء النموذج؟
                    </p>
                    <p className="text-emerald-700 text-sm">
                      يمكنك التواصل معنا مباشرة عبر الواتساب أو البريد الإلكتروني للحصول على المساعدة.
                    </p>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function Field({
  label,
  error,
  required = false,
  className = '',
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default RegistrationForm;
