/**
 * Google Apps Script للتعامل مع نموذج التسجيل
 * يجب نسخ هذا الكود في Google Apps Script وإنشاء Web App
 */

function doPost(e) {
  try {
    // الحصول على البيانات من الطلب
    const data = JSON.parse(e.postData.contents);
    
    // فتح Google Sheet (استبدل SHEET_ID بمعرف الشيت الخاص بك)
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // إضافة العناوين إذا كانت الورقة فارغة
    if (sheet.getLastRow() === 0) {
      const headers = [
        'التاريخ والوقت',
        'الاسم الكامل',
        'البريد الإلكتروني',
        'رقم الجوال',
        'المدينة',
        'الحالة الحالية',
        'الجامعة/التخصص',
        'سنوات الخبرة',
        'المسار المرغوب',
        'طريقة التدريب',
        'نوع الطلب',
        'نوع التسجيل',
        'عدد المشاركين',
        'ملاحظات',
        'مصدر الطلب'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // تنسيق العناوين
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#10b981');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // تحضير البيانات للإدراج
    const rowData = [
      new Date(data.submittedAt),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.city || '',
      getRoleText(data.role),
      data.university || '',
      data.experienceYears || '',
      getTrackText(data.track),
      getModeText(data.mode),
      getContactTypeText(data.contactType),
      data.registrationType ? getRegistrationTypeText(data.registrationType) : '',
      data.expectedParticipants || '',
      data.note || '',
      data.source || ''
    ];
    
    // إضافة البيانات إلى الشيت
    sheet.appendRow(rowData);
    
    // تنسيق الصف الجديد
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(lastRow, 1, 1, rowData.length);
    range.setBorder(true, true, true, true, true, true);
    
    // إرسال إشعار بريد إلكتروني (اختياري)
    sendNotificationEmail(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'تم حفظ البيانات بنجاح'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getRoleText(role) {
  const roles = {
    'student': 'طالب جامعي',
    'fresh': 'خريج جديد',
    'pro': 'محترف/على رأس العمل'
  };
  return roles[role] || role;
}

function getTrackText(track) {
  const tracks = {
    'internship': 'التدريب الجامعي',
    'ceh': 'دورة CEH الاحترافية',
    'nonspecialists': 'الأمن السيبراني لغير المختصين'
  };
  return tracks[track] || track;
}

function getModeText(mode) {
  const modes = {
    'office': 'في المكاتب المجهزة',
    'remote': 'عن بعد',
    'flex': 'مرن (مزيج)'
  };
  return modes[mode] || mode;
}

function getContactTypeText(type) {
  const types = {
    'register': 'تسجيل اهتمام',
    'consult': 'طلب اتصال استشاري'
  };
  return types[type] || type;
}

function getRegistrationTypeText(type) {
  const types = {
    'individual': 'فردي',
    'group': 'مجموعة/شركة'
  };
  return types[type] || type;
}

function sendNotificationEmail(data) {
  try {
    // استبدل بالبريد الإلكتروني الذي تريد إرسال الإشعارات إليه
    const notificationEmail = 'cstraining@naht.sa';
    
    const subject = `طلب تسجيل جديد - ${data.fullName}`;
    const body = `
تم استلام طلب تسجيل جديد:

الاسم: ${data.fullName}
البريد الإلكتروني: ${data.email}
رقم الجوال: ${data.phone}
المسار: ${getTrackText(data.track)}
نوع الطلب: ${getContactTypeText(data.contactType)}

يرجى المتابعة مع المتقدم في أقرب وقت ممكن.
    `;
    
    MailApp.sendEmail(notificationEmail, subject, body);
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
}