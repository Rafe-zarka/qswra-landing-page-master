import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";

export default function QswraContact() {
  const { getText, isRTL } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {getText("تواصل معنا", "Contact Us")}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            {getText(
              "ابدأ رحلتك نحو الأمان الرقمي",
              "Start Your Digital Security Journey"
            )}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {getText(
              "تواصل مع فريق خبرائنا للحصول على استشارة مجانية وتعرف على كيفية حماية مؤسستك",
              "Contact our team of experts for a free consultation and learn how to protect your organization"
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                      <MailIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {getText("البريد الإلكتروني", "Email Address")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        info@qswra.com
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        sales@qswra.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
                      <PhoneIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {getText("الهاتف", "Phone")}
                      </h3>
                      <a 
                        href="tel:+966575741337"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +966 57 574 1337
                      </a>
                      <p className="text-sm text-gray-500">
                        {getText(
                          "الأحد - الخميس: 9:00 - 18:00",
                          "Sunday - Thursday: 9:00 - 18:00"
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
                      <MapPinIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {getText("العنوان", "Address")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {getText(
                          "الرياض، المملكة العربية السعودية",
                          "Riyadh, Kingdom of Saudi Arabia"
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="outline" className="py-2 px-4">
              🕒 {getText("استجابة خلال 24 ساعة", "24-hour response")}
            </Badge>
            <Badge variant="outline" className="py-2 px-4">
               {getText("استشارة مخصصة", "Customized consultation")}
            </Badge>
            <Badge variant="outline" className="py-2 px-4">
               {getText("سرية تامة", "Complete confidentiality")}
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {getText(
              "فريقنا جاهز لمساعدتك في بناء دفاعات سيبرانية قوية لمؤسستك",
              "Our team is ready to help you build strong cyber defenses for your organization"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
