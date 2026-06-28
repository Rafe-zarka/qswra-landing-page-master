import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileTextIcon, ScaleIcon, AlertTriangleIcon, CheckCircleIcon } from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";

export default function TermsOfUse() {
  const { getText, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-6">
            <ScaleIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {getText("شروط الاستخدام", "Terms of Use")}
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
                "مرحباً بك في موقع قسورة (Qswra). من خلال الوصول إلى موقعنا الإلكتروني واستخدامه، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام موقعنا.",
                "Welcome to Qswra's website. By accessing and using our website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website."
              )}
            </p>
            <p>
              {getText(
                "قسورة (Qswra) هي شركة تقنية سعودية مسجلة في المملكة العربية السعودية. تخضع هذه الشروط للقوانين واللوائح المحلية في المملكة العربية السعودية.",
                "Qswra is a Saudi technology company registered in the Kingdom of Saudi Arabia. These terms are subject to local laws and regulations in the Kingdom of Saudi Arabia."
              )}
            </p>
          </CardContent>
        </Card>

        {/* Acceptance of Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              {getText("قبول الشروط", "Acceptance of Terms")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "باستخدام موقعنا الإلكتروني، فإنك تقر وتوافق على:",
                "By using our website, you acknowledge and agree to:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "أنك قد قرأت وفهمت هذه الشروط",
                  "That you have read and understood these terms"
                )}
              </li>
              <li>
                {getText(
                  "أنك توافق على الالتزام بجميع الشروط والأحكام",
                  "That you agree to comply with all terms and conditions"
                )}
              </li>
              <li>
                {getText(
                  "أنك مسؤول قانونياً عن أي انتهاك لهذه الشروط",
                  "That you are legally responsible for any violation of these terms"
                )}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Use of Website */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("استخدام الموقع", "Use of Website")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "يُسمح لك باستخدام موقعنا الإلكتروني للأغراض القانونية فقط. أنت توافق على عدم:",
                "You are permitted to use our website for lawful purposes only. You agree not to:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "استخدام الموقع بطريقة تنتهك أي قوانين أو لوائح محلية أو دولية",
                  "Use the website in a way that violates any local or international laws or regulations"
                )}
              </li>
              <li>
                {getText(
                  "محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو الأنظمة المرتبطة به",
                  "Attempt unauthorized access to any part of the website or associated systems"
                )}
              </li>
              <li>
                {getText(
                  "إدخال أو نشر أي محتوى ضار أو خبيث",
                  "Introduce or post any harmful or malicious content"
                )}
              </li>
              <li>
                {getText(
                  "استخدام الموقع لإرسال رسائل غير مرغوب فيها أو رسائل ترويجية",
                  "Use the website to send spam or promotional messages"
                )}
              </li>
              <li>
                {getText(
                  "نسخ أو إعادة إنتاج أو توزيع أي محتوى من الموقع دون إذن",
                  "Copy, reproduce, or distribute any content from the website without permission"
                )}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("الملكية الفكرية", "Intellectual Property")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "جميع المحتويات الموجودة على موقعنا الإلكتروني، بما في ذلك النصوص والرسومات والشعارات والصور والبرمجيات، هي ملك لقسورة (Qswra) أو مرخصة لنا، ومحمية بموجب قوانين حقوق النشر والعلامات التجارية.",
                "All content on our website, including text, graphics, logos, images, and software, is owned by Qswra or licensed to us, and is protected by copyright and trademark laws."
              )}
            </p>
            <p>
              {getText(
                "لا يجوز لك استخدام أو نسخ أو تعديل أو توزيع أي من هذه المحتويات دون الحصول على إذن كتابي صريح من قسورة (Qswra).",
                "You may not use, copy, modify, or distribute any of this content without obtaining explicit written permission from Qswra."
              )}
            </p>
          </CardContent>
        </Card>

        {/* Services and Products */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("الخدمات والمنتجات", "Services and Products")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "نقدم خدمات ومنتجات الأمن السيبراني بما في ذلك:",
                "We provide cybersecurity services and products including:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "CyberPhish - حل التوعية الأمنية",
                  "CyberPhish - Security Awareness Solution"
                )}
              </li>
              <li>
                {getText(
                  "Phish Agent - وكيل الذكاء الاصطناعي",
                  "Phish Agent - AI Agent"
                )}
              </li>
              <li>
                {getText(
                  "GRC Platform - منصة الحوكمة والامتثال",
                  "GRC Platform - Governance and Compliance Platform"
                )}
              </li>
            </ul>
            <p className="mt-4">
              {getText(
                "جميع الخدمات والمنتجات تخضع لاتفاقيات خدمة منفصلة. يرجى مراجعة اتفاقية الخدمة المحددة لكل منتج قبل الاستخدام.",
                "All services and products are subject to separate service agreements. Please review the specific service agreement for each product before use."
              )}
            </p>
          </CardContent>
        </Card>

        {/* User Accounts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("حسابات المستخدمين", "User Accounts")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "إذا قمت بإنشاء حساب على موقعنا، فأنت مسؤول عن:",
                "If you create an account on our website, you are responsible for:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "الحفاظ على سرية معلومات تسجيل الدخول الخاصة بك",
                  "Maintaining the confidentiality of your login information"
                )}
              </li>
              <li>
                {getText(
                  "جميع الأنشطة التي تحدث تحت حسابك",
                  "All activities that occur under your account"
                )}
              </li>
              <li>
                {getText(
                  "الإبلاغ فوراً عن أي استخدام غير مصرح به لحسابك",
                  "Immediately reporting any unauthorized use of your account"
                )}
              </li>
            </ul>
            <p className="mt-4">
              {getText(
                "نحتفظ بالحق في تعليق أو إنهاء أي حساب ينتهك هذه الشروط.",
                "We reserve the right to suspend or terminate any account that violates these terms."
              )}
            </p>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
              {getText("تحديد المسؤولية", "Limitation of Liability")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "في أقصى حد يسمح به القانون:",
                "To the maximum extent permitted by law:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "لا نضمن أن موقعنا سيكون خالياً من الأخطاء أو متاحاً بشكل مستمر",
                  "We do not guarantee that our website will be error-free or continuously available"
                )}
              </li>
              <li>
                {getText(
                  "لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام موقعنا",
                  "We will not be liable for any direct or indirect damages resulting from the use of our website"
                )}
              </li>
              <li>
                {getText(
                  "نقدم الموقع \"كما هو\" دون أي ضمانات صريحة أو ضمنية",
                  "We provide the website \"as is\" without any express or implied warranties"
                )}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Indemnification */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("التعويض", "Indemnification")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "أنت توافق على تعويض وحماية قسورة (Qswra) وموظفيها ووكلائها من أي مطالبات أو أضرار أو خسائر أو التزامات ناتجة عن:",
                "You agree to indemnify and hold Qswra, its employees, and agents harmless from any claims, damages, losses, or liabilities resulting from:"
              )}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {getText(
                  "استخدامك لموقعنا الإلكتروني",
                  "Your use of our website"
                )}
              </li>
              <li>
                {getText(
                  "انتهاكك لهذه الشروط",
                  "Your violation of these terms"
                )}
              </li>
              <li>
                {getText(
                  "انتهاكك لحقوق أي طرف ثالث",
                  "Your violation of any third party's rights"
                )}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("القانون الحاكم", "Governing Law")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن هذه الشروط سيتم حله في محاكم المملكة العربية السعودية.",
                "These terms are governed by and interpreted in accordance with the laws of the Kingdom of Saudi Arabia. Any dispute arising from these terms will be resolved in the courts of the Kingdom of Saudi Arabia."
              )}
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {getText("تغييرات على الشروط", "Changes to Terms")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {getText(
                "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنقوم بنشر الشروط المحدثة على موقعنا مع تاريخ التحديث. استمرار استخدامك للموقع بعد أي تغييرات يعني موافقتك على الشروط المحدثة.",
                "We reserve the right to modify these terms at any time. We will post the updated terms on our website with the update date. Your continued use of the website after any changes means you agree to the updated terms."
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
                "إذا كان لديك أي أسئلة حول شروط الاستخدام هذه، يرجى الاتصال بنا:",
                "If you have any questions about these Terms of Use, please contact us:"
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