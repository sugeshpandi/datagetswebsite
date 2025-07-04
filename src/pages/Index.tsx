import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import Footer from "@/components/Footer";
import PersonalizationRibbon from "@/components/PersonalizationRibbon";
import CRMMarketingSection from "@/components/CRMMarketingSection";
import TabCardSection from "@/components/TabCardSection";
import BrandLiftSection from "@/components/BrandLiftSection";
import WhyDataGetsSection from "@/components/WhyDataGetsSection";
import WorkWithPlatformSection from "@/components/WorkWithPlatformSection";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="space-y-0">
        {/* Hero Section - Top */}
        <Hero />
        
        {/* Primary Offering - Ribbon 1: Personalization */}
        <PersonalizationRibbon />

        {/* Primary Offering - Ribbon 2: CRM Marketing 2.0 */}
        <CRMMarketingSection />

        {/* Tab Card Section */}
        <TabCardSection />

        {/* Brand Lift Section */}
        <BrandLiftSection />

        {/* Why DataGets Section */}
        <WhyDataGetsSection />

        {/* Work with Platform Section */}
        <WorkWithPlatformSection />

        {/* Card Grid Section */}
        
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
