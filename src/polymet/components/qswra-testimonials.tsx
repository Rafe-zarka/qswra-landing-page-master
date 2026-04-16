import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon, StarIcon } from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";

interface Testimonial {
  name: string;
  nameEn?: string;
  position: string;
  positionEn?: string;
  company: string;
  companyEn?: string;
  content: string;
  contentEn?: string;
  avatar: string;
}

interface QswraTestimonialsProps {
  testimonials: Testimonial[];
}

export default function QswraTestimonials({
  testimonials,
}: QswraTestimonialsProps) {
  const { getText } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {getText("آراء عملائنا", "Client Testimonials")}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            {getText(
              "ماذا يقول عملاؤنا عنا؟",
              "What Our Clients Say About Us?"
            )}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {getText(
              "نفتخر بثقة عملائنا ونسعى دائماً لتقديم أفضل الحلول التي تلبي توقعاتهم وتتجاوزها",
              "We are proud of our clients' trust and always strive to provide the best solutions that meet and exceed their expectations"
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-16 translate-x-16 opacity-50" />

              <CardContent className="relative p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <QuoteIcon className="h-8 w-8 text-blue-500 opacity-50" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  "
                  {getText(
                    testimonial.content,
                    testimonial.contentEn || testimonial.content
                  )}
                  "
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />

                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {getText(
                        testimonial.name,
                        testimonial.nameEn || testimonial.name
                      )}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {getText(
                        testimonial.position,
                        testimonial.positionEn || testimonial.position
                      )}
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {getText(
                        testimonial.company,
                        testimonial.companyEn || testimonial.company
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {getText(
              "ينضم إلينا أكثر من 50+ مؤسسة سعودية",
              "Trusted by 50+ Saudi Organizations"
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {/* Mock Company Logos */}
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium">
                {getText("شركة الرياض", "Riyadh Corp")}
              </span>
            </div>
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium">
                {getText("مؤسسة جدة", "Jeddah Foundation")}
              </span>
            </div>
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium">
                {getText("شركة الدمام", "Dammam Company")}
              </span>
            </div>
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium">
                {getText("مجموعة المدينة", "Madinah Group")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
