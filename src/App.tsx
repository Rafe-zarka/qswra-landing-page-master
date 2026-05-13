import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QswraLayout from "@/polymet/layouts/qswra-layout";
import QswraLanding from "@/polymet/pages/qswra-landing";
import CyberPhishProduct from "@/polymet/pages/cyberphish-product";
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
