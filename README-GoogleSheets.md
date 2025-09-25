# ربط نموذج التسجيل بـ Google Sheets

## الخطوات المطلوبة:

### 1. إنشاء Google Sheet جديد
- اذهب إلى [Google Sheets](https://sheets.google.com)
- أنشئ ملف جديد
- احفظ معرف الملف (SHEET_ID) من الرابط

### 2. إعداد Google Apps Script
- اذهب إلى [Google Apps Script](https://script.google.com)
- أنشئ مشروع جديد
- انسخ محتوى ملف `google-apps-script.js` إلى المحرر
- استبدل `YOUR_SHEET_ID` بمعرف الشيت الخاص بك
- استبدل `info@naht.sa` بالبريد الإلكتروني المطلوب للإشعارات

### 3. نشر Web App
- في Google Apps Script، اضغط على "Deploy" > "New deployment"
- اختر نوع "Web app"
- اضبط الإعدادات:
  - Execute as: Me
  - Who has access: Anyone
- اضغط "Deploy"
- انسخ رابط Web App

### 4. تحديث الكود
- في ملف `src/utils/googleSheets.ts`
- استبدل `YOUR_SCRIPT_ID` برابط Web App الذي حصلت عليه

### 5. الاختبار
- جرب إرسال نموذج من الموقع
- تحقق من وصول البيانات إلى Google Sheet

## الميزات:
- ✅ حفظ تلقائي للبيانات في Google Sheets
- ✅ إرسال إشعارات بريد إلكتروني للطلبات الجديدة
- ✅ تنسيق تلقائي للبيانات
- ✅ حفظ احتياطي محلي في حالة فشل الإرسال
- ✅ ترجمة القيم إلى العربية في الشيت

## ملاحظات:
- البيانات محفوظة بشكل آمن في Google Sheets
- يمكن تصدير البيانات إلى Excel أو CSV
- يمكن مشاركة الشيت مع فريق العمل
- الإشعارات الفورية عبر البريد الإلكتروني