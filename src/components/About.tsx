import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUp, CheckCircle2 } from 'lucide-react';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="w-full bg-[#121216]/30 border-y border-white/5 py-20 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#E2B857]/5 to-transparent pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 w-full relative lg:sticky lg:top-32">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-[#121216]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-black/60 text-white text-[10px] font-mono border border-white/10">main.dart</span>
                <span className="px-2 py-1 rounded bg-black/30 text-slate-400 text-[10px] font-mono border border-transparent">config.ts</span>
              </div>
              <div className="p-3 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 font-mono text-xs text-slate-300 shadow-lg">
                <span className="text-pink-400">const</span> developer = {'{'}<br />
                &nbsp;&nbsp;name: <span className="text-green-400">'Mohan Biswas'</span>,<br />
                &nbsp;&nbsp;experience: <span className="text-orange-400">5</span>,<br />
                &nbsp;&nbsp;skills: [<span className="text-green-400">'Flutter'</span>, <span className="text-green-400">'React'</span>, <span className="text-green-400">'Electron'</span>],<br />
                &nbsp;&nbsp;passion: <span className="text-blue-400">true</span><br />
                {'}'};
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-20" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "8px 8px" }}></div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            Professional Bio <span className="text-2xl">🚀</span>
          </h2>

          <div className="text-slate-400 leading-relaxed text-[17px] space-y-5">
            <p>
              I’m <strong className="text-white">Mohan Biswas</strong>, a passionate <strong className="text-white">Full-Stack Developer with 5+ years of experience</strong> building scalable <strong className="text-white">mobile, web, and desktop applications</strong>. I specialize in creating high-performance, user-focused solutions using <strong className="text-white">Flutter, React, Node.js, and modern cloud technologies</strong>.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-5 overflow-hidden"
                >
                  <p>
                    Over the years, I’ve developed and delivered <strong className="text-white">cross-platform mobile apps (Android & iOS), full-stack web platforms, and Electron desktop applications</strong> for startups, businesses, and enterprise clients. My expertise includes <strong className="text-white">Flutter, Dart, React, Next.js, Node.js, MongoDB, Firebase, AWS, and REST API development</strong>, enabling me to handle projects from concept to deployment.
                  </p>
                  <p>
                    I started my development journey at age 16 by building websites and soon expanded into Android and cross-platform app development. Since then, I’ve contributed to <strong className="text-white">e-commerce platforms, dating apps, fintech tools, business automation systems, streaming platforms, and utility apps</strong>, helping clients transform their ideas into real products.
                  </p>

                  <div className="pt-2 bg-white/5 p-5 rounded-xl border border-white/10">
                    <h3 className="text-white font-semibold mb-4 text-lg">What I bring:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-xl leading-none mt-0.5">📱</span>
                        <span><strong className="text-white">Cross-platform mobile development</strong> with Flutter (Android & iOS)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-xl leading-none mt-0.5">🌐</span>
                        <span><strong className="text-white">Full-stack web development</strong> with React, Next.js, Node.js, and MongoDB</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-xl leading-none mt-0.5">💻</span>
                        <span><strong className="text-white">Desktop app development</strong> using Electron</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-xl leading-none mt-0.5">☁️</span>
                        <span><strong className="text-white">Cloud & backend integration</strong> with Firebase and AWS</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-xl leading-none mt-0.5">⚡</span>
                        <span>Focus on <strong className="text-white">performance, scalability, and clean architecture</strong></span>
                      </li>
                    </ul>
                  </div>

                  <p className="pt-2">
                    I’m driven by solving real-world problems through technology and continuously learning new tools to stay ahead in the fast-evolving tech landscape.
                  </p>
                  <p>
                    <strong className="text-white">Goal:</strong> To help businesses and startups build reliable, scalable, and impactful digital products.
                  </p>
                  <p className="text-[#E2B857] font-medium bg-[#E2B857]/5 p-4 rounded-lg border border-[#E2B857]/20">
                    📩 Always open to collaborations, freelance projects, and full-time opportunities.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!isExpanded && (
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="text-[#E2B857]" size={20} />
                <span>Mobile Apps (Flutter)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="text-[#E2B857]" size={20} />
                <span>Web Platforms (React)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="text-[#E2B857]" size={20} />
                <span>Desktop (Electron)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="text-[#E2B857]" size={20} />
                <span>Cloud (AWS/Firebase)</span>
              </div>
            </div>
          )}

          <div className="mt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-[#E2B857] hover:text-[#08080A] font-semibold transition-colors group px-4 py-2 rounded-lg bg-[#E2B857]/10 hover:bg-[#E2B857] border border-[#E2B857]/20 hover:border-[#E2B857] w-fit cursor-pointer"
            >
              <span>{isExpanded ? 'Show Less' : 'Read Full Bio'}</span>
              {isExpanded ? (
                <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={16} />
              ) : (
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
