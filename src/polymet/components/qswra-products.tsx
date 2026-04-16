import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldIcon,
  BotIcon,
  FileCheckIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ClockIcon,
} from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  nameAr: string;
  status: string;
  statusEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  benefits: string[];
  benefitsEn: string[];
  icon: string;
  color: string;
}

interface QswraProductsProps {
  products: Product[];
}

const iconMap = {
  Shield: ShieldIcon,
  Bot: BotIcon,
  FileCheck: FileCheckIcon,
};

const colorMap = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  green: "from-green-500 to-green-600",
};

export default function QswraProducts({ products }: QswraProductsProps) {
  const { getText, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeftIcon : ArrowRightIcon;

  const getProductRoute = (productId: string) => {
    switch (productId) {
      case "cyberphish":
        return "/products/cyberphish";
      case "phish-agent":
        return "/products/phish-agent";
      case "grc-platform":
        return "/products/grc-platform";
      default:
        return "#";
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {getText("منتجاتنا", "Our Products")}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            {getText(
              "حلول الأمن السيبراني المتطورة",
              "Advanced Cybersecurity Solutions"
            )}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {getText(
              "نقدم مجموعة شاملة من المنتجات المدعومة بالذكاء الاصطناعي لحماية مؤسستك من التهديدات السيبرانية",
              "We offer a comprehensive suite of AI-powered products to protect your organization from cyber threats"
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => {
            const IconComponent = iconMap[product.icon as keyof typeof iconMap];
            const gradientColor =
              colorMap[product.color as keyof typeof colorMap];

            return (
              <Card
                key={product.id}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                <CardHeader className="relative pb-2">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${gradientColor} text-white`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {getText(product.status, product.statusEn) ===
                      getText("متاح الآن", "Available Now") ? (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs">
                          <CheckIcon
                            className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                          />

                          {getText(product.status, product.statusEn)}
                        </Badge>
                      ) : (
                        <Badge
                          variant="secondary"
                          className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 text-xs"
                        >
                          <ClockIcon
                            className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                          />

                          {getText(product.status, product.statusEn)}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-xl mb-2">
                    {getText(product.nameAr, product.name)}
                  </CardTitle>

                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {getText(product.description, product.descriptionEn)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative pt-4">
                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${gradientColor} hover:opacity-90`}
                  >
                    <Link to={getProductRoute(product.id)}>
                      {getText("اعرف المزيد", "Learn More")}
                      <ArrowIcon
                        className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"}`}
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {getText(
              "هل تحتاج حلول مخصصة لمؤسستك؟",
              "Need custom solutions for your organization?"
            )}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="px-8"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {getText("تحدث مع خبرائنا", "Talk to Our Experts")}
          </Button>
        </div>
      </div>
    </section>
  );
}
