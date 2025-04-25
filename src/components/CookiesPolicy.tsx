import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CookiesPolicy: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Cookies Policy | Indigo Chic Villas";
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="bg-[#F4F3EB] w-full pt-28 md:pt-32">
      {/* Header Section with increased top padding to avoid navbar overlap */}
      <div className="max-w-6xl mx-auto px-4 pb-8 text-center">
        <h2 className="text-5xl font-['Roboto'] text-[#3A3532] uppercase tracking-wide leading-tight mb-8">
          Cookies Policy
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
            Welcome to Indigo Chic Villas. This Cookies Policy explains how we use cookies and similar technologies on our website (www.icantiparos.com). By continuing to browse our site, you consent to our use of cookies as described in this policy.
          </p>
          
          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            2. What Are Cookies?
          </h3>
          <p className="mb-6 leading-relaxed">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites. They are widely used to make websites work more efficiently, provide a better browsing experience, and give website owners information about how visitors use their site.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            3. Types of Cookies We Use
          </h3>
          <p className="mb-4 leading-relaxed">
            We use the following types of cookies on our website:
          </p>
          <ul className="mb-6 list-disc pl-6">
            <li className="mb-4">
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
            </li>
            <li className="mb-4">
              <strong>Preference Cookies:</strong> These cookies allow us to remember choices you make and provide enhanced, personalized features. For example, they may remember your language preferences or booking information.
            </li>
            <li className="mb-4">
              <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the functionality of our website.
            </li>
            <li className="mb-4">
              <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. They are used to display ads that are relevant and engaging for individual users.
            </li>
          </ul>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            4. Specific Cookies We Use
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#8E7D67]">
                  <th className="py-3 text-left">Cookie Name</th>
                  <th className="py-3 text-left">Purpose</th>
                  <th className="py-3 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#3A3532]/10">
                  <td className="py-3">_ga</td>
                  <td className="py-3">Google Analytics - Used to distinguish users</td>
                  <td className="py-3">2 years</td>
                </tr>
                <tr className="border-b border-[#3A3532]/10">
                  <td className="py-3">_gid</td>
                  <td className="py-3">Google Analytics - Used to distinguish users</td>
                  <td className="py-3">24 hours</td>
                </tr>
                <tr className="border-b border-[#3A3532]/10">
                  <td className="py-3">session_id</td>
                  <td className="py-3">Maintains user session data</td>
                  <td className="py-3">Session</td>
                </tr>
                <tr className="border-b border-[#3A3532]/10">
                  <td className="py-3">pref_currency</td>
                  <td className="py-3">Remembers user currency preference</td>
                  <td className="py-3">1 year</td>
                </tr>
                <tr className="border-b border-[#3A3532]/10">
                  <td className="py-3">fb_pixel</td>
                  <td className="py-3">Facebook Pixel for advertising</td>
                  <td className="py-3">3 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            5. Third-Party Cookies
          </h3>
          <p className="mb-6 leading-relaxed">
            Some cookies are placed by third parties on our website. These third parties include:
          </p>
          <ul className="mb-6 list-disc pl-6">
            <li className="mb-2">Google Analytics (for website analytics)</li>
            <li className="mb-2">Facebook (for advertising and social media features)</li>
            <li className="mb-2">Booking platforms (for reservation functionality)</li>
            <li className="mb-2">Payment processors (for secure transaction processing)</li>
          </ul>
          <p className="mb-6 leading-relaxed">
            These third parties may use cookies, web beacons, and similar technologies to collect or receive information from our website. This information may be used to provide measurement services, target ads, or enhance the functionality of our booking systems.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            6. Managing Cookies
          </h3>
          <p className="mb-6 leading-relaxed">
            Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, but they can usually be found in the 'settings', 'preferences' or 'tools' menu.
          </p>
          <p className="mb-6 leading-relaxed">
            Please note that blocking or deleting cookies may impact your experience on our website, as some features may not function properly without cookies.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            7. Cookie Consent
          </h3>
          <p className="mb-6 leading-relaxed">
            When you first visit our website, you will be shown a cookie banner requesting your consent to set non-essential cookies. You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            8. Changes to Our Cookies Policy
          </h3>
          <p className="mb-6 leading-relaxed">
            We may update this Cookies Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.
          </p>

          <h3 className="text-xl font-['Roboto'] text-[#3A3532] mt-10 mb-4">
            9. Contact Us
          </h3>
          <p className="mb-6 leading-relaxed">
            If you have questions about our use of cookies, please contact us at:
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

export default CookiesPolicy; 