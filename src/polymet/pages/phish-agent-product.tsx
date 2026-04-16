import { useLanguage } from "@/polymet/components/language-context";
import { products } from "@/polymet/data/qswra-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bot,
  CheckCircle,
  Star,
  ArrowRight,
  ArrowLeft,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PhishAgentProduct() {
  const { getText, isRTL } = useLanguage();
  const product = products.find((p) => p.id === "phish-agent");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">
          {getText("المنتج غير موجود", "Product not found")}
        </h1>
      </div>
    );
  }

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <Bot className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <Badge
              variant="secondary"
              className="text-sm bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
            >
              <Clock className="h-3 w-3 mr-1" />

              {getText(product.status, product.statusEn)}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {getText(product.nameAr, product.name)}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {getText(product.description, product.descriptionEn)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              {getText("اشترك في القائمة البريدية", "Join Waitlist")}
              <ArrowIcon className="h-4 w-4 mr-2" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/#contact">{getText("تواصل معنا", "Contact Us")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Clock className="h-6 w-6" />

                {getText("قريباً", "Coming Soon")}
              </CardTitle>
              <CardDescription className="text-purple-100 text-lg">
                {getText(
                  "نعمل حالياً على تطوير وكيل التصيد الذكي. سيكون متاحاً قريباً مع ميزات متقدمة للحماية من التهديدات السيبرانية",
                  "We are currently developing the intelligent Phish Agent. It will be available soon with advanced features for cybersecurity threat protection"
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="features">
                {getText("المميزات المخطط لها", "Planned Features")}
              </TabsTrigger>
              <TabsTrigger value="benefits">
                {getText("الفوائد المتوقعة", "Expected Benefits")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {(
                  getText(product.features, product.featuresEn) as string[]
                ).map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />

                        {feature}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {(
                  getText(product.benefits, product.benefitsEn) as string[]
                ).map((benefit, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Star className="h-5 w-5 text-yellow-600" />

                        {benefit}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {getText("تقنية الذكاء الاصطناعي", "AI Technology")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {getText(
                "يستخدم وكيل التصيد أحدث تقنيات الذكاء الاصطناعي لتحليل الرسائل الإلكترونية وكشف محاولات التصيد الاحتيالي بدقة عالية",
                "Phish Agent uses the latest AI technologies to analyze emails and detect phishing attempts with high accuracy"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-purple-600" />

                  {getText("تحليل ذكي", "Smart Analysis")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getText(
                    "تحليل متقدم للرسائل الإلكترونية باستخدام خوارزميات التعلم الآلي",
                    "Advanced email analysis using machine learning algorithms"
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />

                  {getText("كشف فوري", "Instant Detection")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getText(
                    "كشف فوري لمحاولات التصيد مع تنبيهات مباشرة للمستخدمين",
                    "Instant phishing detection with direct user alerts"
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-600" />

                  {getText("تعلم مستمر", "Continuous Learning")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getText(
                    "تحسين مستمر للأداء من خلال التعلم من التهديدات الجديدة",
                    "Continuous performance improvement through learning from new threats"
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle className="text-3xl">
                {getText("كن من الأوائل", "Be Among the First")}
              </CardTitle>
              <CardDescription className="text-purple-100 text-lg">
                {getText(
                  "اشترك في قائمتنا البريدية لتكون من أول من يعلم عند إطلاق وكيل التصيد",
                  "Subscribe to our mailing list to be among the first to know when Phish Agent launches"
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  {getText("اشترك الآن", "Subscribe Now")}
                  <ArrowIcon className="h-4 w-4 mr-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                  asChild
                >
                  <Link to="/">
                    {getText("العودة للرئيسية", "Back to Home")}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
