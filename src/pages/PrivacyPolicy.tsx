export function PrivacyPolicy() {
  return (
    <main className="relative z-10 max-w-4xl mx-auto px-4 py-32 min-h-screen">
      <div className="glass-card p-8 md:p-12 rounded-2xl border border-[#1F2026] bg-[#121216]/80 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a contact form, 
              subscribe to a newsletter, or communicate with us via email. This may include your name, email 
              address, and any other information you choose to provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide the services you request, 
              and improve our website and services. We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Cookies and Tracking</h2>
            <p>
              We may use cookies and similar tracking technologies to track activity on our website and hold 
              certain information. You can instruct your browser to refuse all cookies or to indicate when a 
              cookie is being sent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, please 
              be aware that no method of transmission over the internet or method of electronic storage is 
              100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@devdrm.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
