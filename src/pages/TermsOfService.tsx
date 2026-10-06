export function TermsOfService() {
  return (
    <main className="relative z-10 max-w-4xl mx-auto px-4 py-32 min-h-screen">
      <div className="glass-card p-8 md:p-12 rounded-2xl border border-[#1F2026] bg-[#121216]/80 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by these terms, please do not 
              use this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, compilation, magnetic translation, digital 
              conversion and other matters related to the Site are protected under applicable copyrights, 
              trademarks and other proprietary rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or 
              software) on this website for personal, non-commercial transitory viewing only. This is 
              the grant of a license, not a transfer of title.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Disclaimer</h2>
            <p>
              The materials on this website are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a 
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Limitations</h2>
            <p>
              In no event shall we or our suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or 
              inability to use the materials on this website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
