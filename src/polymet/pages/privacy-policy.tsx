import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldIcon, LockIcon, EyeIcon, FileTextIcon } from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";

export default function PrivacyPolicy() {
  const { getText, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <ShieldIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {getText("سياسة الخصوصية", "Privacy Policy")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {getText(
              "آخر تحديث: 5 سبتمبر 2024",
              "Last Updated: September 5, 2024"
            )}
          </p>
          <Badge variant="secondary" className="mt-4">
            🇸🇦 {getText("متوافق مع قوانين المملكة العربية السعودية", "Compliant with Saudi Arabia Laws")}
          </Badge>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileTextIcon className="h-5 w-5" />
              {getText("مقدمة", "Introduction")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              {getText(
                "قسورة (Qswra) تحترم خصوصيتك وتلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات التي نجمعها منك عند استخدام موقعنا الإلكتروني وخدماتنا.",
                "Qswra respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the information we gather from you when you use our website and services."
              )}
            </p>
            <p>
              {getText(
                "نحن شركة سعودية مسجلة في المملكة العربية السعودية ونلتزم بجميع القوانين واللوائح المحلية المتعلقة بحماية البيانات والخصوصية.",
                "We are a Saudi company registered in the Kingdom of Saudi Arabia and comply with all local laws and regulations regarding data protection and privacy."
              )}
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <EyeIcon className="h-5 w-5" />
              {getText("المعلومات التي نجمعها", "Information We Collect")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-lg">
                {getText("المعلومات الشخصية", "Personal Information")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  {getText(
                    "الاسم الكامل وعنوان البريد الإلكتروني",
                    "Full name and email address"
                  )}
                </li>
                <li>
                  {getText(
                    "رقم الهاتف وبيانات الاتصال",
                    "Phone number and contact information"
                  )}
                </li>
                <li>
                  {getText(
                    "اسم الشركة والمنصب الوظيفي",
                    "Company name and job title"
                  )}
                </li>
                <li>
                  {getText(
                    "أي معلومات أخرى تقدمها طواعية",
                    "Any other information you voluntarily provide"
                  )}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">
                {getText("معلومات الاستخدام", "Usage Information")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  {getText(
                    "عنوان IP وموقعك الجغرافي",
                    "IP address and geographic location"
                  )}
                </li>
                <li>
                  {getText(
                    "نوع المتصفح ونظام التشغيل",
                    "Browser type and operating system"
                  )}
                </li>
                <li>
                  {getText(
                    "صفحات الموقع التي تزورها",
                    "Website pages you visit"
                  )}
                </li>
                <li>
                  {getText(
                    "وقت وتاريخ الوصول",
                    "Access time and date"
                  )}
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("كيف نستخدم المعلومات", "How We Use Information")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "نستخدم المعلومات التي نجمعها للأغراض التالية:",
                "We use the information we collect for the following purposes:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "تقديم وتحسين خدماتنا ومنتجاتنا",
                  "To provide and improve our services and products"
                )}
              </li>
              <li>
                {getText(
                  "التواصل معك بشأن استفساراتك وطلباتك",
                  "To communicate with you regarding your inquiries and requests"
                )}
              </li>
              <li>
                {getText(
                  "إرسال التحديثات والإشعارات المهمة",
                  "To send important updates and notifications"
                )}
              </li>
              <li>
                {getText(
                  "تحليل استخدام الموقع لتحسين تجربة المستخدم",
                  "To analyze website usage to improve user experience"
                )}
              </li>
              <li>
                {getText(
                  "الامتثال للقوانين واللوائح المحلية",
                  "To comply with local laws and regulations"
                )}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LockIcon className="h-5 w-5" />
              {getText("حماية البيانات", "Data Protection")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "نحن نستخدم تدابير أمنية متقدمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. تشمل هذه التدابير:",
                "We use advanced security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "التشفير الآمن للبيانات الحساسة",
                  "Secure encryption of sensitive data"
                )}
              </li>
              <li>
                {getText(
                  "جدران الحماية وأنظمة الكشف عن التسلل",
                  "Firewalls and intrusion detection systems"
                )}
              </li>
              <li>
                {getText(
                  "الوصول المحدود للمعلومات على أساس الحاجة إلى المعرفة",
                  "Limited access to information on a need-to-know basis"
                )}
              </li>
              <li>
                {getText(
                  "المراقبة المنتظمة لأنظمتنا الأمنية",
                  "Regular monitoring of our security systems"
                )}
              </li>
              <li>
                {getText(
                  "الاستضافة المحلية داخل المملكة العربية السعودية",
                  "Local hosting within the Kingdom of Saudi Arabia"
                )}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("مشاركة البيانات", "Data Sharing")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:",
                "We do not sell or rent your personal information to third parties. We may only share your information in the following cases:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "عندما يكون ذلك مطلوباً بموجب القانون أو اللوائح",
                  "When required by law or regulations"
                )}
              </li>
              <li>
                {getText(
                  "مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل أعمالنا",
                  "With trusted service providers who help us operate our business"
                )}
              </li>
              <li>
                {getText(
                  "لحماية حقوقنا القانونية أو منع الاحتيال",
                  "To protect our legal rights or prevent fraud"
                )}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("حقوقك", "Your Rights")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:",
                "You have the following rights regarding your personal information:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "الحق في الوصول إلى معلوماتك الشخصية",
                  "Right to access your personal information"
                )}
              </li>
              <li>
                {getText(
                  "الحق في تصحيح المعلومات غير الدقيقة",
                  "Right to correct inaccurate information"
                )}
              </li>
              <li>
                {getText(
                  "الحق في حذف معلوماتك الشخصية",
                  "Right to delete your personal information"
                )}
              </li>
              <li>
                {getText(
                  "الحق في الاعتراض على معالجة معلوماتك",
                  "Right to object to processing of your information"
                )}
              </li>
              <li>
                {getText(
                  "الحق في نقل بياناتك",
                  "Right to data portability"
                )}
              </li>
            </ul>
            <p className="mt-4">
              {getText(
                "لممارسة أي من هذه الحقوق، يرجى الاتصال بنا على: info@qswra.com أو +966 57 504 3074",
                "To exercise any of these rights, please contact us at: info@qswra.com or +966 57 504 3074"
              )}
            </p>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("ملفات تعريف الارتباط (Cookies)", "Cookies")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.",
                "We use cookies to improve your experience on our website. You can manage your cookie preferences through your browser settings."
              )}
            </p>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("تغييرات على السياسة", "Changes to Policy")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عن طريق نشر السياسة المحدثة على موقعنا مع تاريخ التحديث.",
                "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website with the update date."
              )}
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("اتصل بنا", "Contact Us")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، يرجى الاتصال بنا:",
                "If you have any questions or concerns about this Privacy Policy, please contact us:"
              )}
            </p>
            <div className="space-y-2">
              <p>
                <strong>{getText("البريد الإلكتروني:", "Email:")}</strong> info@qswra.com
              </p>
              <p>
                <strong>{getText("الهاتف:", "Phone:")}</strong> +966 57 504 3074
              </p>
              <p>
                <strong>{getText("العنوان:", "Address:")}</strong>{" "}
                {getText(
                  "الرياض، المملكة العربية السعودية",
                  "Riyadh, Kingdom of Saudi Arabia"
                )}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}