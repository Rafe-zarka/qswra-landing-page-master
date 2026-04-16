import QswraHero from "@/polymet/components/qswra-hero";
import QswraProducts from "@/polymet/components/qswra-products";
import QswraFeatures from "@/polymet/components/qswra-features";
// import QswraTestimonials from "@/polymet/components/qswra-testimonials";
import QswraContact from "@/polymet/components/qswra-contact";
import {
  companyInfo,
  products,
  features,
  // testimonials,
} from "@/polymet/data/qswra-data";

export default function QswraLanding() {
  return (
    <div className="min-h-screen flex flex-col flex-1">
      {/* Hero Section */}
      <QswraHero companyInfo={companyInfo} />

      {/* Products Section */}
      <QswraProducts products={products} />

      {/* Features Section */}
      <QswraFeatures features={features} />

      {/* Testimonials Section - Hidden */}
      {/* <QswraTestimonials testimonials={testimonials} /> */}

      {/* Contact Section */}
      <QswraContact />
    </div>
  );
}
