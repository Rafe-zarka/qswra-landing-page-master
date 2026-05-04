import { useLanguage } from "@/polymet/components/language-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Mail,
  Upload,
  BarChart2,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  PenTool,
  AlertTriangle,
  TrendingDown,
  Award,
  Clock,
  Zap,

  UserCheck,
  ChevronDown,
} from "lucide-react";

export default function CyberPhishProduct() {
  const { getText, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // ─── DATA ─────────────────────────────────────────────────────────────

  const problems = [
    {
      icon: AlertTriangle,
      statAr: "91%",
      statEn: "91%",
      titleAr: "الموظف هو الحلقة الأضعف",
      titleEn: "Employees Are the Weakest Link",
      bodyAr:
        "91% من الهجمات تبدأ بخطأ بسيط من موظف، شخص واحد غير مدرّب ممكن يفتح الباب بالكامل للمهاجم",
      bodyEn:
        "91% of cyberattacks begin with human error, and one untrained employee is all it takes to open the door to attackers",
    },
    {
      icon: Clock,
      statAr: "أيام",
      statEn: "Days",
      titleAr: "إعداد التدريب متعب وبطيء",
      titleEn: "Building Training Is Slow and Costly",
      bodyAr:
        "تبغى تسوي دورة؟ بتقعد أيام تكتب وتصمم وتراجع قبل ما حتى أول موظف يشوفها",
      bodyEn:
        "Creating one training module manually takes days of writing, design and review before a single employee sees it",
    },
    {
      icon: TrendingDown,
      statAr: "يومياً",
      statEn: "Daily",
      titleAr: "الهجمات قاعدة تزيد كل يوم",
      titleEn: "Phishing Attacks Are Escalating Daily",
      bodyAr:
        "المهاجمين يطورون أساليبهم يومياً، وفريقك غالباً متأخر خطوة",
      bodyEn:
        "Attackers launch new campaigns every day while your team remains unprepared and exposed",
    },
  ];

  const trainingMethods = [
    {
      icon: Sparkles,
      bg: "bg-green-50",
      border: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
      accentColor: "text-green-600",
      badgeBg: "bg-green-100 text-green-700",
      labelAr: "ذكاء اصطناعي",
      labelEn: "AI-Generated",
      titleAr: "تدريب بالذكاء الاصطناعي",
      titleEn: "AI-Generated Training",
      descAr:
        "بس اكتب الموضوع، والباقي علينا  دورة كاملة خلال ثواني",
      descEn:
        "Type a topic and get a complete training course in seconds: lessons, slides, narration and quizzes",
      pointsAr: [
        "إنشاء دروس وشرائح تلقائياً",
        "تعليق صوتي + اختبار جاهز",
        "جاهز للنشر خلال أقل من دقيقة",
      ],
      pointsEn: [
        "Auto-generated lessons and slides",
        "Voice narration and knowledge quizzes",
        "Ready to publish in under a minute",
      ],
    },
    {
      icon: Upload,
      bg: "bg-teal-50",
      border: "border-teal-200",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-700",
      accentColor: "text-teal-600",
      badgeBg: "bg-teal-100 text-teal-700",
      labelAr: "SCORM",
      labelEn: "SCORM",
      titleAr: "رفع SCORM",
      titleEn: "SCORM-Based Training",
      descAr:
        "عندك محتوى جاهز؟ ارفعه مباشرة وخله يشتغل ويتتبع بدون وجع راس",
      descEn:
        "Upload your content from Articulate or iSpring directly, and Cyberphish hosts, tracks and certifies it",
      pointsAr: [
        "تشغيل مباشر لحزم SCORM",
        "تتبع + شهادات تلقائية",
        "ربط مع المهام والمواعيد",
      ],
      pointsEn: [
        "Instant hosting and playback of SCORM packages",
        "Completion tracking and certificate issuance",
        "Integrated with assignments and deadlines",
      ],
    },
    {
      icon: PenTool,
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
      accentColor: "text-emerald-600",
      badgeBg: "bg-emerald-100 text-emerald-700",
      labelAr: "يدوي",
      labelEn: "Manual",
      titleAr: "إنشاء يدوي",
      titleEn: "Manual Training",
      descAr:
        "تبغى تحكم كامل؟ ابنِ دوراتك بنفسك بالطريقة اللي تناسبك",
      descEn:
        "Build your own courses and upload custom content that fits your company culture and training needs",
      pointsAr: [
        "رفع أي نوع محتوى",
        "مسارات تدريب مرنة",
        "تحكم كامل في كل التفاصيل",
      ],
      pointsEn: [
        "Upload custom multimedia content",
        "Design flexible learning paths",
        "Full control over course structure",
      ],
    },
  ];

  const journeySteps = [
    {
      num: "01",
      icon: Sparkles,
      sectionBg: "bg-white",
      numColor: "text-green-200",
      badgeBg: "bg-green-100 text-green-700 border-green-200",
      iconCardBg: "bg-gradient-to-br from-green-500 to-teal-500",
      labelAr: "الخطوة الأولى",
      labelEn: "Step One",
      titleAr: "ابدأ التدريب",
      titleEn: "Create Training",
      descAr:
        "اختر طريقتك: AI أو SCORM أو يدوي، وعيّن الدورات حسب الفريق أو الدور",
      descEn:
        "Choose your preferred method: AI, SCORM or manual, then assign courses to employees or teams by job role or risk level",
      highlightsAr: ["3 طرق إنشاء", "تعيين حسب الفريق", "فوري أو مجدول"],
      highlightsEn: ["3 flexible creation methods", "Assign by team or role", "Instant or scheduled launch"],
      screenshot: "step1-create-course.png",
    },
    {
      num: "02",
      icon: Mail,
      sectionBg: "bg-green-50",
      numColor: "text-green-200",
      badgeBg: "bg-teal-100 text-teal-700 border-teal-200",
      iconCardBg: "bg-gradient-to-br from-teal-500 to-green-500",
      labelAr: "الخطوة الثانية",
      labelEn: "Step Two",
      titleAr: "اختبرهم بتصيد",
      titleEn: "Launch Phishing Simulations",
      descAr:
        "أرسل حملات تصيد واقعية وشوف مين ممكن ينخدع قبل ما يصير الهجوم الحقيقي",
      descEn:
        "Send realistic phishing campaigns via email and SMS to test employee readiness and identify weak points before attackers do",
      highlightsAr: ["إيميل + SMS", "سيناريوهات حقيقية", "تسجيل تلقائي للتدريب"],
      highlightsEn: ["Email and SMS phishing simulations", "Realistic and up-to-date scenarios", "Auto-enrollment in remedial training"],
      screenshot: "step2-phishing-sim.png",
    },
    {
      num: "03",
      icon: UserCheck,
      sectionBg: "bg-white",
      numColor: "text-green-200",
      badgeBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
      iconCardBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      labelAr: "الخطوة الثالثة",
      labelEn: "Step Three",
      titleAr: "درّب بشكل ذكي",
      titleEn: "Train Employees",
      descAr:
        "أي موظف يغلط، ينضاف مباشرة لتدريب علاجي بدون تدخل منك",
      descEn:
        "Deliver courses automatically based on simulation results, and employees who fail phishing tests are instantly enrolled in remedial training with no manual intervention",
      highlightsAr: ["توصيل تلقائي", "تذكيرات", "متابعة فردية"],
      highlightsEn: ["Automatic course delivery", "Reminders and deadlines", "Individual and team follow-up"],
      screenshot: "step3-interactive-labs.png",
    },
    {
      num: "04",
      icon: BarChart2,
      sectionBg: "bg-green-50",
      numColor: "text-green-200",
      badgeBg: "bg-green-100 text-green-700 border-green-200",
      iconCardBg: "bg-gradient-to-br from-green-600 to-emerald-500",
      labelAr: "الخطوة الرابعة",
      labelEn: "Step Four",
      titleAr: "تابع وطور",
      titleEn: "Track & Improve",
      descAr:
        "راقب كل شيء من لوحة تحكم وحدة  واعرف مين يحتاج تدخل",
      descEn:
        "Monitor completion rates, risk scores and simulation results through a comprehensive real-time dashboard, and know who is ready and who needs immediate attention",
      highlightsAr: ["لوحة تحكم مباشرة", "مخاطر لكل موظف", "تقارير جاهزة"],
      highlightsEn: ["Real-time comprehensive dashboard", "Individual employee risk profiles", "Compliance-ready reports"],
      screenshot: "step4-analytics.png",
    },
  ];

  const results = [
    { statAr: "↓68%", statEn: "↓68%", labelAr: "انخفاض النقر على التصيد", labelEn: "Reduction in phishing click rates" },
    { statAr: "10×", statEn: "10×", labelAr: "سرعة إنشاء الدورات", labelEn: "Faster course creation" },
    { statAr: "100%", statEn: "100%", labelAr: "رؤية كاملة للمخاطر", labelEn: "Real-time employee risk visibility" },
    { statAr: "∞", statEn: "∞", labelAr: "قابلية توسع بدون حدود", labelEn: "Scale without limits" },
  ];

  const features = [
    { icon: Sparkles, titleAr: "AI Course Builder", titleEn: "AI Course Generator", descAr: "دورة كاملة من فكرة واحدة خلال أقل من دقيقة", descEn: "Full courses from one topic in under 60 seconds" },
    { icon: Upload, titleAr: "دعم SCORM", titleEn: "SCORM Support", descAr: "رفع وتشغيل وتتبع كامل", descEn: "Host, track and certify SCORM packages" },
    { icon: PenTool, titleAr: "إنشاء يدوي", titleEn: "Manual Builder", descAr: "تحكم كامل بالمحتوى", descEn: "Build custom courses with multimedia content" },
    { icon: Mail, titleAr: "محاكاة التصيد", titleEn: "Phishing Simulations", descAr: "هجمات واقعية لتجربة حقيقية", descEn: "Realistic, up-to-date email and SMS campaigns" },
    { icon: Zap, titleAr: "أتمتة كاملة", titleEn: "Automated Campaigns", descAr: "تعيين + تذكير + متابعة تلقائية", descEn: "Assign, remind and escalate without manual work" },
    { icon: BarChart2, titleAr: "تحليلات", titleEn: "Analytics Dashboard", descAr: "تشوف كل شيء لحظياً", descEn: "Real-time view of training, phishing and risk results" },
    { icon: Users, titleAr: "مخاطر الموظفين", titleEn: "Employee Risk Tracking", descAr: "ملف لكل موظف", descEn: "Dynamic risk profile for every employee" },
    { icon: Award, titleAr: "الشهادات", titleEn: "Certificate Management", descAr: "شهادات تلقائية جاهزة", descEn: "Auto-issued certificates and audit trails for compliance" },
  ];


  const faqs = [
    {
      qAr: "كيف يشتغل الذكاء الاصطناعي هنا؟",
      qEn: "How does the AI course generator work?",
      aAr: "بس تكتب موضوع، والنظام يولد لك دورة كاملة مع دروس وشرائح واختبار خلال أقل من دقيقة",
      aEn: "You type a topic like 'password security' or 'social engineering' and the AI generates a complete training course with structured lessons, slides, voice narration and a knowledge quiz in under 60 seconds",
    },
    {
      qAr: "أقدر أستخدم محتواي؟",
      qEn: "Can I use my own existing content?",
      aAr: "أكيد، تقدر تستخدم AI أو ترفع SCORM أو تبني بنفسك",
      aEn: "Yes, Cyberphish supports three methods: AI generation, uploading SCORM packages from tools like Articulate or iSpring, and manual creation with custom content, and you choose what works for you",
    },
    {
      qAr: "كيف التصيد يشتغل؟",
      qEn: "How do phishing simulations work?",
      aAr: "نرسل حملات وهمية، واللي ينخدع يدخل تدريب تلقائي",
      aEn: "You launch realistic phishing campaigns via email or SMS, employees who click are automatically enrolled in immediate remedial training, and you can track every result in the dashboard",
    },
    {
      qAr: "كيف أتابع الموظفين؟",
      qEn: "How does employee progress tracking work?",
      aAr: "كل موظف له ملف مخاطر واضح قدامك",
      aEn: "Every employee has a live risk profile including course completion, quiz scores and phishing simulation results, managers see team-level dashboards while HR sees org-wide analytics",
    },
    {
      qAr: "في تكامل مع Active Directory؟",
      qEn: "Can I import users from Active Directory?",
      aAr: "نعم، تقدر تستورد المستخدمين بسهولة",
      aEn: "Yes, Cyberphish supports LDAP/Active Directory integration, and you can bulk-import users by OU or group with optional compliance enforcement through account locking",
    },
  ];

  const partners = ["FinanceCore", "HealthSec", "RetailMax", "TechVault", "GovShield", "EduSafe"];

  // ─── RENDER ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white">

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">

        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[700px] h-[500px] bg-green-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-teal-200/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #16a34a 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        {/* ── Hero Content ── */}
        <div className="relative container mx-auto px-6 pt-14 pb-12 md:pt-20 md:pb-20 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Copy side */}
            <div className={`space-y-7 ${isRTL ? "text-right" : "text-left"}`}>

              {/* ── Cyberphish brand mark ── */}
              <div className={`flex items-center gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                <img
                  src={`${import.meta.env.BASE_URL}screenshots/cyberphish-icon.png`}
                  alt="Cyberphish"
                  className="w-10 h-10 rounded-xl object-cover shrink-0 shadow-md shadow-green-200"
                />
                <span className="text-2xl font-black text-gray-900 tracking-tight">Cyberphish</span>
                <Badge className="bg-green-100 text-green-700 border border-green-200 text-[10px] px-2 py-0.5 font-semibold rounded-full hidden sm:inline-flex ms-1">
                  🇸🇦 {getText("سعودي", "Saudi")}
                </Badge>
              </div>

              <Badge className="inline-flex bg-green-100 text-green-700 border border-green-200 text-sm px-4 py-1.5 rounded-full font-medium">
                {getText("منصة توعية أمنية مرنة فعلاً", "The Most Flexible Security Awareness Platform")}
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight text-gray-900">
                {isRTL ? (
                  <>
                    درّب فريقك، اختبره،{" "}
                    <span className="bg-gradient-to-l from-green-500 to-teal-500 bg-clip-text text-transparent">
                      واحمه بطريقتك
                    </span>
                  </>
                ) : (
                  <>
                    Train, Test &{" "}
                    <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                      Protect.
                    </span>
                    <br />
                    <span className="text-3xl md:text-4xl text-gray-500 font-semibold">Three flexible ways.</span>
                  </>
                )}
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed">
                {getText(
                  "سايبرفيش يجمع لك التدريب بالذكاء الاصطناعي + SCORM + الإنشاء اليدوي في مكان واحد، عشان تحمي موظفينك من الهجمات بدون تعقيد",
                  "Cyberphish brings together AI training, SCORM content and manual creation in one platform  so you can protect your team from cyber threats your way."
                )}
              </p>

              <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-500 text-white px-8 h-14 rounded-xl shadow-lg shadow-green-200 font-semibold text-base transition-colors"
                  onClick={() => window.open("https://cyberphish-staging.laravel.cloud/register", "_blank")}
                >
                  {isRTL
                    ? <><ArrowIcon className="ms-2 h-4 w-4" />{getText("ابدأ مجاناً", "Get Started Free")}</>
                    : <>{getText("ابدأ مجاناً", "Get Started Free")}<ArrowIcon className="ms-2 h-4 w-4" /></>}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50 bg-white px-8 h-14 rounded-xl font-semibold text-base transition-colors"
                  onClick={() => window.open("https://cyberphish-staging.laravel.cloud/dashboard", "_blank")}
                >
                  {getText(" ديمو", "Demo")}
                </Button>
              </div>

              <div className={`flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-gray-500 ${isRTL ? "justify-end" : ""}`}>
                {[
                  { ar: "تدريب يدوي أو بالذكاء الاصطناعي", en: "Manual or AI-generated courses" },
                  { ar: "محاكاة تصيد تلقائية", en: "Automated phishing simulations" },
                  { ar: "مصمم للشركات الكبيرة", en: "Built for enterprise" },
                ].map((b) => (
                  <span key={b.en} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    {getText(b.ar, b.en)}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero screenshot */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-green-200/40 to-teal-200/30 rounded-3xl blur-3xl pointer-events-none" />
              <div className="relative bg-white rounded-2xl border border-green-100 shadow-2xl shadow-green-200/50 overflow-hidden">
                {/* Browser chrome strip */}
                <div className="bg-gradient-to-r from-green-600 to-teal-500 px-4 py-2.5 flex items-center gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
                  </div>
                  <div className="flex-1 bg-white/15 rounded px-2.5 py-0.5 text-xs text-white/70 font-mono truncate">
                    app.cyberphish.io
                  </div>
                </div>
                {/* Platform screenshot */}
                <img
                  src={`${import.meta.env.BASE_URL}screenshots/hero-dashboard.png`}
                  alt="Cyberphish Platform Dashboard"
                  className="w-full h-auto block"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-10">
          <ChevronDown className="h-8 w-8 text-green-400 animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2THE PROBLEM
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-50 text-red-600 border border-red-100 text-sm px-4 py-1 rounded-full">
              {getText("المشكلة", "The Problem")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              {isRTL ? (
                <>ليش فريقك فعلياً <span className="text-green-600">معرض للخطر؟</span></>
              ) : (
                <>Why does your team need <span className="text-green-600">protection now?</span></>
              )}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((card) => (
              <div key={card.titleEn} className="bg-white border border-gray-100 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md hover:border-green-200 transition-all group">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <card.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="text-4xl font-black text-green-500">{getText(card.statAr, card.statEn)}</div>
                </div>
                <h3 className="text-gray-900 font-bold text-lg leading-snug">{getText(card.titleAr, card.titleEn)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{getText(card.bodyAr, card.bodyEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. THE SHIFT (Turning Point)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-teal-600 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-teal-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Badge className="bg-white/20 text-white border border-white/30 text-sm px-5 py-1.5 rounded-full">
            {getText("نقطة التحول", "The Turning Point")}
          </Badge>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {isRTL ? (
              <>"طيب لو التدريب يصير <span className="text-green-200">تلقائي وسهل</span> ويتوسع معك؟"</>
            ) : (
              <>"What if training was <span className="text-green-200">automated, flexible,</span> and scalable?"</>
            )}
          </h2>

          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {getText(
              "سايبرفيش يعطيك حرية كاملة، استخدم الطريقة اللي تناسبك أو امزج بينهم كلهم",
              "Cyberphish doesn't lock you into one method, choose what works for your team or use all three together"
            )}
          </p>

          <div className="flex justify-center pt-2">
            <ChevronDown className="h-8 w-8 text-green-300 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. TRAINING CREATION (Three Equal Methods)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="features" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border border-green-200 text-sm px-4 py-1 rounded-full">
              {getText("طرق إنشاء التدريب", "Training Creation Methods")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {isRTL ? (
                <>3 طرق  <span className="text-green-600">وانت تختار</span></>
              ) : (
                <>Three methods, <span className="text-green-600">One choice for you.</span></>
              )}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {getText(
                "كل شركة لها أسلوبها، وسايبرفيش يعطيك المرونة كاملة",
                "Every company has different needs, and Cyberphish gives you complete flexibility in how you create training content"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trainingMethods.map((method) => (
              <div key={method.titleEn} className={`${method.bg} border ${method.border} rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all`}>
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 ${method.iconBg} rounded-2xl flex items-center justify-center`}>
                    <method.icon className={`h-7 w-7 ${method.iconColor}`} />
                  </div>
                  <Badge className={`${method.badgeBg} border-0 text-xs font-bold px-3 py-1 rounded-full`}>
                    {getText(method.labelAr, method.labelEn)}
                  </Badge>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-gray-900 font-extrabold text-xl mb-2">{getText(method.titleAr, method.titleEn)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{getText(method.descAr, method.descEn)}</p>
                </div>

                {/* Feature points */}
                <ul className="space-y-2.5">
                  {(isRTL ? method.pointsAr : method.pointsEn).map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle className={`h-4 w-4 ${method.accentColor} shrink-0 mt-0.5`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Equal weight notice */}
          <p className="text-center text-sm text-gray-400 mt-8 italic">
            {getText(
              "✦ كل الطرق متوفرة في جميع الباقات ✦",
              "✦ All three methods are fully available on every plan ✦"
            )}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5–8JOURNEY STEPS (1 → 2 → 3 → 4)
      ═══════════════════════════════════════════════════════════════ */}

      {/* Step progress indicator */}
      <section id="how-it-works" className="bg-green-50 py-12 border-y border-green-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-green-600 mb-8">
            {getText("رحلة سايبرفيش خطوة بخطوة", "The Cyberphish Journey from Start to Results")}
          </p>
          <div className="grid grid-cols-4 gap-2 relative">
            <div className="hidden md:block absolute top-5 start-[12.5%] end-[12.5%] h-px bg-gradient-to-r from-green-300 via-green-400 to-green-300" />
            {[
              { numAr: "١", numEn: "1", labelAr: "ابدأ", labelEn: "Create" },
              { numAr: "٢", numEn: "2", labelAr: "اختبر", labelEn: "Launch" },
              { numAr: "٣", numEn: "3", labelAr: "درّب", labelEn: "Train" },
              { numAr: "٤", numEn: "4", labelAr: "تابع", labelEn: "Track" },
            ].map((s, i) => (
              <div key={i} className="relative z-10 text-center space-y-2">
                <div className="mx-auto w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-black text-sm shadow-md shadow-green-200">
                  {getText(s.numAr, s.numEn)}
                </div>
                <p className="text-xs font-semibold text-green-700">{getText(s.labelAr, s.labelEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {journeySteps.map((step, index) => (
        <section key={step.num} className={`${step.sectionBg} py-20 md:py-28`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 && !isRTL ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : index % 2 === 1 && isRTL ? "md:[&>*:first-child]:order-1 md:[&>*:last-child]:order-2" : ""}`}>

              {/* Content side */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className={`${step.badgeBg} border text-xs font-bold px-3 py-1 rounded-full`}>
                    {getText(step.labelAr, step.labelEn)}
                  </Badge>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  {getText(step.titleAr, step.titleEn)}
                </h2>

                <p className="text-gray-500 text-lg leading-relaxed">
                  {getText(step.descAr, step.descEn)}
                </p>

                <ul className="space-y-3">
                  {(isRTL ? step.highlightsAr : step.highlightsEn).map((h) => (
                    <li key={h} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot side */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-100/60 to-teal-100/40 rounded-3xl blur-2xl pointer-events-none" />
                <div className="relative bg-white rounded-2xl border border-green-100 shadow-xl shadow-green-100/50 overflow-hidden">
                  {/* Mini browser chrome */}
                  <div className={`bg-gradient-to-r ${step.iconCardBg} px-3 py-2 flex items-center gap-2`}>
                    <div className="flex gap-1 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <div className="w-2 h-2 rounded-full bg-white/80" />
                    </div>
                    <div className="flex-1 bg-white/15 rounded px-2 py-0.5 text-[10px] text-white/70 font-mono truncate">
                      app.cyberphish.io
                    </div>
                    <span className="text-white/60 text-[10px] font-bold shrink-0">{step.num}</span>
                  </div>
                  {/* Platform screenshot */}
                  <img
                    src={`${import.meta.env.BASE_URL}screenshots/${step.screenshot}`}
                    alt={`${getText(step.titleAr, step.titleEn)} - Cyberphish`}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════════════════════════
          9. RESULTS
      ═══════════════════════════════════════════════════════════════ */}
      <section id="results" className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 md:py-28 border-y border-green-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border border-green-200 text-sm px-4 py-1 rounded-full">
              {getText("النتائج", "Results")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              {isRTL ? (
                <>أرقام <span className="text-green-600">تتكلم</span></>
              ) : (
                <>Results that are <span className="text-green-600">measurable and real.</span></>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r) => (
              <div key={r.labelEn} className="bg-white rounded-2xl border border-green-100 p-8 text-center shadow-sm hover:shadow-md hover:border-green-300 transition-all space-y-3">
                <div className="text-5xl font-black text-green-600">{getText(r.statAr, r.statEn)}</div>
                <p className="text-sm text-gray-600 font-medium leading-snug">{getText(r.labelAr, r.labelEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. FEATURES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border border-green-200 text-sm px-4 py-1 rounded-full">
              {getText("مميزات المنصة", "Platform Features")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              {isRTL ? (
                <>كل اللي تحتاجه  <span className="text-green-600">بدون تعقيد</span></>
              ) : (
                <>Everything you need, <span className="text-green-600">Nothing you don't.</span></>
              )}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.titleEn} className="group bg-green-50 border border-green-100 rounded-2xl p-6 space-y-4 hover:bg-white hover:shadow-md hover:border-green-300 transition-all">
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <f.icon className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="text-gray-900 font-bold text-sm leading-snug">{getText(f.titleAr, f.titleEn)}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{getText(f.descAr, f.descEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          12. PARTNERS & CLIENTS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-green-50 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm font-bold text-gray-900 mb-2">
            {getText("عملاؤنا وشركاؤنا", "Our Partners & Clients")}
          </p>
          <p className="text-xs text-gray-400 mb-10">
            {getText("شركات كثيرة تعتمد علينا", "Trusted by leading organizations worldwide")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {partners.map((name) => (
              <div key={name} className="px-3 py-5 bg-green-50 rounded-xl border border-green-100 flex items-center justify-center hover:border-green-300 hover:bg-white transition-all">
                <span className="text-xs font-extrabold text-gray-400 tracking-wide">{name}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-400 text-xs max-w-md mx-auto">
            {getText(
              "مئات الفرق تستخدم سايبرفيش يومياً",
              "Hundreds of security-conscious teams rely on Cyberphish to protect their organizations"
            )}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          13. CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="bg-green-50 py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-teal-500 px-8 py-16 md:py-20 text-center shadow-2xl shadow-green-300/40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative space-y-6">
              <Badge className="bg-white/20 text-white border border-white/30 text-sm px-5 py-1.5 rounded-full">
                {getText("الهجوم الجاي ممكن يكون عليك", "Your next attack is already planned")}
              </Badge>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                {isRTL ? (
                  <>جاهزين <span className="text-green-100">ولا لا؟</span></>
                ) : (
                  <>Is your team <span className="text-green-100">ready?</span></>
                )}
              </h2>

              <p className="text-green-50 text-lg max-w-xl mx-auto leading-relaxed">
                {getText(
                  "ابدأ اليوم  بدون تعقيد وبدون بطاقة ائتمان",
                  "Start protecting your company today, no technical expertise needed, no credit card"
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 h-14 rounded-xl font-bold text-base shadow-lg transition-colors"
                  onClick={() => window.open("https://cyberphish-staging.laravel.cloud/register", "_blank")}>
                  {getText("ابدأ الآن", "Start Now")}
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 px-8 h-14 rounded-xl font-semibold text-base transition-colors"
                  onClick={() => window.open("https://cyberphish-staging.laravel.cloud/dashboard", "_blank")}>
                  {getText("احجز ديمو", "Book a Demo")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          14. FAQ
      ═══════════════════════════════════════════════════════════════ */}
      <section id="faq" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {getText("أسئلة ممكن تجيك", "Frequently Asked Questions")}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border border-green-100 bg-green-50/30 rounded-xl px-6 data-[state=open]:border-green-300 data-[state=open]:bg-green-50 transition-colors">
                <AccordionTrigger className="font-semibold text-gray-900 hover:no-underline py-5 text-sm md:text-base text-start">
                  {getText(faq.qAr, faq.qEn)}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-5 text-sm text-start">
                  {getText(faq.aAr, faq.aEn)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}
