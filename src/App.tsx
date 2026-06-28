import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import QswraLayout from "@/polymet/layouts/qswra-layout";
import QswraLanding from "@/polymet/pages/qswra-landing";
import CyberPhishProduct from "@/polymet/pages/cyberphish-product";
import CyberPhishFeatures from "@/polymet/pages/cyberphish-features";
import CyberPhishSolutions from "@/polymet/pages/cyberphish-solutions";
import CyberPhishAbout from "@/polymet/pages/cyberphish-about";
import CyberPhishContact from "@/polymet/pages/cyberphish-contact";
import PhishAgentProduct from "@/polymet/pages/phish-agent-product";
import GrcPlatformProduct from "@/polymet/pages/grc-platform-product";
import PrivacyPolicy from "@/polymet/pages/privacy-policy";
import TermsOfUse from "@/polymet/pages/terms-of-use";
import MeddiccQualifier from "@/polymet/pages/meddicc-qualifier";

export default function QswraPrototype() {
  return (
    <Router basename="/qswra-landing-page-master">
      <Routes>
        <Route
          path="/"
          element={
            <QswraLayout>
              <QswraLanding />
            </QswraLayout>
          }
        />

        <Route
          path="/landing"
          element={
            <QswraLayout>
              <QswraLanding />
            </QswraLayout>
          }
        />

        <Route
          path="/products/cyberphish"
          element={
            <QswraLayout>
              <CyberPhishProduct />
            </QswraLayout>
          }
        />

        <Route
          path="/products/phish-agent"
          element={
            <QswraLayout>
              <PhishAgentProduct />
            </QswraLayout>
          }
        />

        <Route
          path="/products/grc-platform"
          element={
            <QswraLayout>
              <GrcPlatformProduct />
            </QswraLayout>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <QswraLayout>
              <PrivacyPolicy />
            </QswraLayout>
          }
        />

        <Route
          path="/terms-of-use"
          element={
            <QswraLayout>
              <TermsOfUse />
            </QswraLayout>
          }
        />

        <Route
          path="/products/cyberphish/features"
          element={<QswraLayout><CyberPhishFeatures /></QswraLayout>}
        />
        <Route
          path="/products/cyberphish/solutions"
          element={<QswraLayout><CyberPhishSolutions /></QswraLayout>}
        />
        <Route
          path="/products/cyberphish/pricing"
          element={<Navigate to="/products/cyberphish/contact" replace />}
        />
        <Route
          path="/products/cyberphish/resources"
          element={<Navigate to="/products/cyberphish" replace />}
        />
        <Route
          path="/products/cyberphish/about"
          element={<QswraLayout><CyberPhishAbout /></QswraLayout>}
        />
        <Route
          path="/products/cyberphish/contact"
          element={<QswraLayout><CyberPhishContact /></QswraLayout>}
        />
        <Route
          path="/tools/meddicc-qualifier"
          element={
            <QswraLayout>
              <MeddiccQualifier />
            </QswraLayout>
          }
        />
      </Routes>
    </Router>
  );
}
