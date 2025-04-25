import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Privacy Policy | Indigo Chic Villas";
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="bg-[#F4F3EB] w-full pt-28 md:pt-32">
      {/* Header Section with increased top padding to avoid navbar overlap */}
      <div className="max-w-6xl mx-auto px-4 pb-8 text-center">
        <h2 className="text-5xl font-['Roboto'] text-[#3A3532] uppercase tracking-wide leading-tight mb-8">
          Privacy Policy
        </h2>
        <div className="w-24 h-px bg-[#8E7D67] mx-auto mb-8"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pb-20">
        <div className="prose prose-lg max-w-none text-[#3A3532] font-['Roboto']">
          <p className="mb-6 leading-relaxed">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            1. Introduction
          </h3>
          <p className="mb-6 leading-relaxed">
            At Indigo Chic Villas, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, process, and store your personal information when you visit our website, make a reservation, or interact with us in any way.
          </p>
          
          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            2. Information We Collect
          </h3>
          <p className="mb-4 leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul className="mb-6 list-disc pl-6">
            <li className="mb-2">Contact information (name, email address, phone number, postal address)</li>
            <li className="mb-2">Reservation details (dates of stay, room preferences, special requests)</li>
            <li className="mb-2">Payment information (credit card details, billing address)</li>
            <li className="mb-2">Identity information (passport or ID details) as required by Greek law</li>
            <li className="mb-2">Communication preferences and marketing opt-ins</li>
            <li className="mb-2">Website usage data (IP address, browser type, pages visited)</li>
          </ul>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            3. How We Use Your Information
          </h3>
          <p className="mb-4 leading-relaxed">
            We use your personal information for the following purposes:
          </p>
          <ul className="mb-6 list-disc pl-6">
            <li className="mb-2">To manage your reservation and provide our hospitality services</li>
            <li className="mb-2">To process payments and fulfill our contractual obligations</li>
            <li className="mb-2">To communicate with you about your stay</li>
            <li className="mb-2">To comply with legal obligations, including tourism regulations</li>
            <li className="mb-2">To improve our services and website experience</li>
            <li className="mb-2">To send you marketing communications (with your consent)</li>
          </ul>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            4. Legal Basis for Processing
          </h3>
          <p className="mb-6 leading-relaxed">
            We process your personal data based on: contractual necessity (to fulfill our reservation agreement), legal obligations (compliance with Greek tourism laws), legitimate interests (to improve our services), and consent (for marketing communications).
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            5. Data Sharing and Third Parties
          </h3>
          <p className="mb-6 leading-relaxed">
            We may share your information with service providers who help us operate our business (payment processors, booking platforms, IT services), legal authorities when required by law, and business partners with your explicit consent. We do not sell your personal data to third parties.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            6. Data Security
          </h3>
          <p className="mb-6 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All payment transactions are encrypted using SSL technology.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            7. Data Retention
          </h3>
          <p className="mb-6 leading-relaxed">
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. For reservation data, we typically retain records for up to 7 years as required by Greek tax authorities.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            8. Your Rights
          </h3>
          <p className="mb-4 leading-relaxed">
            Under applicable data protection laws, you have the right to:
          </p>
          <ul className="mb-6 list-disc pl-6">
            <li className="mb-2">Access your personal data</li>
            <li className="mb-2">Rectify inaccurate or incomplete data</li>
            <li className="mb-2">Request erasure of your data</li>
            <li className="mb-2">Restrict or object to certain processing activities</li>
            <li className="mb-2">Data portability</li>
            <li className="mb-2">Withdraw consent at any time</li>
          </ul>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            9. International Transfers
          </h3>
          <p className="mb-6 leading-relaxed">
            As we operate in Greece and serve international guests, your data may be transferred outside your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            10. Changes to This Privacy Policy
          </h3>
          <p className="mb-6 leading-relaxed">
            We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting the new policy on our website.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            11. Contact Us
          </h3>
          <p className="mb-6 leading-relaxed">
            If you have questions about this privacy policy or wish to exercise your rights, please contact us at:
          </p>
          <p className="mb-6 leading-relaxed">
            Email: privacy@icantiparos.com<br />
            Address: Indigo Chic Villas, Agios Georgios, Antiparos 84007, Cyclades, Greece<br />
            Phone: +30 22840 61000
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 