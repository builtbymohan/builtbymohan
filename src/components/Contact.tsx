import { MapPin, Mail, Send, Github, Linkedin, Twitter, Instagram, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#E2B857]/5 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-[blob_7s_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-[#C58F4F]/5 rounded-full blur-[100px] mix-blend-screen opacity-20 animate-[blob_7s_infinite_2s]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="flex flex-col justify-center space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2B857]/10 border border-[#E2B857]/20 text-[#E2B857] text-sm font-medium w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2B857] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E2B857]"></span>
                </span>
                Available for new projects
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2B857] to-[#C58F4F]">extraordinary</span>.
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#121216]/50 transition-colors group">
                <div className="p-3 rounded-lg bg-[#E2B857]/10 text-[#E2B857] group-hover:bg-[#E2B857] group-hover:text-[#08080A] transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-slate-400">Kolkata, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#121216]/50 transition-colors group">
                <div className="p-3 rounded-lg bg-[#E2B857]/10 text-[#E2B857] group-hover:bg-[#E2B857] group-hover:text-[#08080A] transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <a href="tel:+916289761298" className="text-slate-400 hover:text-[#E2B857] transition-colors">6289761298</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#121216]/50 transition-colors group">
                <div className="p-3 rounded-lg bg-[#E2B857]/10 text-[#E2B857] group-hover:bg-[#E2B857] group-hover:text-[#08080A] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a href="mailto:hello@devdrm.com" className="text-slate-400 hover:text-[#E2B857] transition-colors">itsmohan025@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4 pt-4 px-4">
                <a href="https://www.linkedin.com/in/dream-25in/" className="h-12 w-12 flex items-center justify-center rounded-lg border border-[#1F2026] bg-[#121216] text-slate-400 hover:border-[#E2B857] hover:text-[#E2B857] transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/dream-25" className="h-12 w-12 flex items-center justify-center rounded-lg border border-[#1F2026] bg-[#121216] text-slate-400 hover:border-[#E2B857] hover:text-[#E2B857] transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.instagram.com/its.mohan25/" className="h-12 w-12 flex items-center justify-center rounded-lg border border-[#1F2026] bg-[#121216] text-slate-400 hover:border-[#E2B857] hover:text-[#E2B857] transition-all duration-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative group/form-container">
            <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full px-4 py-3 border border-white/10 rounded-lg bg-black/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E2B857] focus:border-[#E2B857] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-4 py-3 border border-white/10 rounded-lg bg-black/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E2B857] focus:border-[#E2B857] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full px-4 py-3 border border-white/10 rounded-lg bg-black/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E2B857] focus:border-[#E2B857] transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent text-sm font-bold rounded-lg text-[#08080A] bg-[#E2B857] hover:bg-[#C58F4F] focus:outline-none focus:ring-2 focus:ring-[#E2B857] focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 shadow-lg shadow-[#E2B857]/20 cursor-pointer">
                      <Send size={18} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
