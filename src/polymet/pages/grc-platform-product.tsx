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
  FileCheck,
  CheckCircle,
  Star,
  ArrowRight,
  ArrowLeft,
  Clock,
  Shield,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GrcPlatformProduct() {
  const { getText, isRTL } = useLanguage();
  const product = products.find((p) => p.id === "grc-platform");

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
              <FileCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
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
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              {getText("اطلب معلومات أكثر", "Request Information")}
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
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Clock className="h-6 w-6" />

                {getText("قريباً", "Coming Soon")}
              </CardTitle>
              <CardDescription className="text-green-100 text-lg">
                {getText(
                  "نعمل على تطوير منصة شاملة للحوكمة والمخاطر والامتثال لمساعدة المؤسسات على تحقيق الامتثال التنظيمي",
                  "We are developing a comprehensive GRC platform to help organizations achieve regulatory compliance"
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* GRC Components */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {getText(
                "مكونات منصة الحوكمة والمخاطر والامتثال",
                "GRC Platform Components"
              )}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>{getText("الحوكمة", "Governance")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getText(
                    "إدارة السياسات والإجراءات وضمان الامتثال للمعايير التنظيمية",
                    "Policy and procedure management and ensuring compliance with regulatory standards"
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-red-100 dark:bg-red-900/30 rounded-full w-fit">
                  <BarChart3 className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>{getText("المخاطر", "Risk")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getText(
                    "تحديد وتقييم وإدارة المخاطر المؤسسية بطريقة منهجية",
                    "Systematic identification, assessment, and management of organizational risks"
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit">
                  <FileCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>{getText("الامتثال", "Compliance")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getText(
                    "مراقبة الامتثال للقوانين واللوائح والمعايير الصناعية",
                    "Monitoring compliance with laws, regulations, and industry standards"
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
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

      {/* Compliance Standards */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {getText("المعايير المدعومة", "Supported Standards")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {getText(
                "ستدعم المنصة مجموعة واسعة من المعايير المحلية والدولية للامتثال",
                "The platform will support a wide range of local and international compliance standards"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "ISO 27001",
                description: getText("أمان المعلومات", "Information Security"),
              },
              {
                name: "NIST",
                description: getText(
                  "إطار الأمن السيبراني",
                  "Cybersecurity Framework"
                ),
              },
              {
                name: "SOC 2",
                description: getText("ضوابط الأمان", "Security Controls"),
              },
              {
                name: getText("معايير محلية", "Local Standards"),
                description: getText("معايير المملكة", "Kingdom Standards"),
              },
            ].map((standard, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{standard.name}</CardTitle>
                  <CardDescription>{standard.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardHeader>
              <CardTitle className="text-3xl">
                {getText("اهتمام مبكر؟", "Early Interest?")}
              </CardTitle>
              <CardDescription className="text-green-100 text-lg">
                {getText(
                  "تواصل معنا لمعرفة المزيد عن منصة الحوكمة والمخاطر والامتثال وكيف يمكنها مساعدة مؤسستك",
                  "Contact us to learn more about the GRC platform and how it can help your organization"
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  {getText("اطلب معلومات", "Request Information")}
                  <ArrowIcon className="h-4 w-4 mr-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
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
