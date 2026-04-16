import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainIcon, ServerIcon, LanguagesIcon, LockIcon } from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";

interface Feature {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
}

interface QswraFeaturesProps {
  features: Feature[];
}

const iconMap = {
  Brain: BrainIcon,
  Server: ServerIcon,
  Languages: LanguagesIcon,
  Lock: LockIcon,
};

export default function QswraFeatures({ features }: QswraFeaturesProps) {
  const { getText } = useLanguage();

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {getText("مميزاتنا", "Our Features")}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            {getText("لماذا تختار قسورة؟", "Why Choose Qswra?")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {getText(
              "نجمع بين الابتكار التقني والخبرة المحلية لنقدم حلول أمنية متطورة تناسب احتياجات السوق السعودي",
              "We combine technical innovation with local expertise to provide advanced security solutions that meet the needs of the Saudi market"
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500",
              "from-green-500 to-emerald-500",
              "from-orange-500 to-red-500",
            ];

            const gradient = gradients[index % gradients.length];

            return (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                <CardHeader className="relative text-center pb-4">
                  <div
                    className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white w-fit`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {getText(feature.title, feature.titleEn || feature.title)}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative text-center">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {getText(
                      feature.description,
                      feature.descriptionEn || feature.description
                    )}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
