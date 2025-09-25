// Google Sheets integration utility
export interface FormSubmission {
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  role: 'student' | 'fresh' | 'pro';
  university?: string;
  experienceYears?: string;
  track: string;
  mode: 'office' | 'remote' | 'flex';
  note?: string;
  contactType: 'register' | 'consult';
  registrationType?: 'individual' | 'group';
  expectedParticipants?: string;
  submittedAt: string;
  source: string;
}

// Google Apps Script Web App URL - يجب استبداله بالرابط الفعلي
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxERr9DwC-eVjz_PR9saY0Y_6wlU7hfqn-L1hvpynotn423jR0pUafU8FqoVeMJJ9dSEA/exec';

export async function submitToGoogleSheets(data: FormSubmission): Promise<boolean> {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // مطلوب للتعامل مع Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    // بسبب no-cors mode، لا يمكننا قراءة الاستجابة
    // لكن إذا لم يحدث خطأ، فهذا يعني أن الطلب تم إرساله
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}

// دالة احتياطية لحفظ البيانات محلياً في حالة فشل الإرسال
export function saveToLocalStorage(data: FormSubmission): void {
  try {
    const existingData = localStorage.getItem('naht_submissions') || '[]';
    const submissions = JSON.parse(existingData);
    submissions.push(data);
    localStorage.setItem('naht_submissions', JSON.stringify(submissions));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}