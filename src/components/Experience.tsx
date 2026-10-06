import { Smartphone, Globe, Cloud, Blocks, History } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Techdock Labs",
    duration: "Feb 2025 - Feb 2026 · 1 yr 1 mo",
    location: "Lucknow, Uttar Pradesh, India · Remote",
    description: "Rejoined Techdock Labs to develop and maintain cross-platform mobile applications using Flutter. Worked on REST APIs, Firebase, Node.js services, and collaborated with the team to deliver scalable, high-performance applications.",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Node.js", "MERN Stack"],
    color: "gold",
    initials: "TL"
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Weblord Infotech & Education Pvt Ltd",
    duration: "Jan 2024 - Dec 2024 · 1 yr",
    location: "Mumbai, India · Remote",
    description: "Developed scalable web applications using Next.js and Node.js and built cross-platform mobile applications with Flutter. Integrated REST APIs, optimized application performance, and collaborated with cross-functional teams to deliver production-ready solutions.",
    skills: ["Next.js", "Node.js", "Flutter", "React.js", "REST APIs", "Electron"],
    color: "bronze",
    initials: "WI"
  },
  {
    id: 3,
    role: "Technical Project Manager & Full Stack Developer",
    company: "Adsup Software Solutions",
    duration: "Apr 2023 - Dec 2023 · 9 mos",
    location: "Barasat, India · On-site",
    description: "Led development projects while building web and mobile applications using the MERN stack and Flutter. Managed client requirements, coordinated with development teams, integrated third-party APIs, and improved application performance.",
    skills: ["Project Management", "Node.js", "Flutter", "React.js", "Client Relations"],
    color: "champagne",
    initials: "AD"
  },
  {
    id: 4,
    role: "Software Developer",
    company: "Techdock Labs",
    duration: "Mar 2022 - Mar 2023 · 1 yr 1 mo",
    location: "Lucknow, Uttar Pradesh, India · Remote",
    description: "Developed responsive web and mobile applications using Flutter and modern JavaScript technologies. Focused on performance optimization, API integration, and building scalable applications with clean architecture.",
    skills: ["Flutter", "Firebase", "REST APIs", "OOP", "Problem Solving"],
    color: "gold",
    initials: "TL"
  },
  {
    id: 5,
    role: "Junior Flutter Developer",
    company: "ChemWorld",
    duration: "Feb 2021 - Dec 2021 · 10 mos",
    location: "Kolkata, West Bengal, India",
    description: "Developed Android applications using Flutter, Dart, and Java. Worked on UI implementation, API integration, debugging, and object-oriented programming while collaborating with senior developers.",
    skills: ["Flutter", "Dart", "Java", "Android Studio", "OOP"],
    color: "champagne",
    initials: "CW"
  }
];

const colorMap: Record<string, any> = {
  gold: {
    dot: "bg-[#E2B857] ring-4 ring-[#08080A] group-hover:ring-[#E2B857]/30 shadow-[0_0_10px_rgba(226,184,87,0.5)]",
    card: "hover:border-[#E2B857]/30",
    title: "group-hover:text-[#E2B857]",
    badge: "text-[#E2B857] bg-[#E2B857]/10"
  },
  bronze: {
    dot: "bg-[#C58F4F] ring-4 ring-[#08080A] group-hover:ring-[#C58F4F]/30 shadow-[0_0_10px_rgba(197,143,79,0.5)]",
    card: "hover:border-[#C58F4F]/30",
    title: "group-hover:text-[#C58F4F]",
    badge: "text-[#C58F4F] bg-[#C58F4F]/10"
  },
  champagne: {
    dot: "bg-[#D4A373] ring-4 ring-[#08080A] group-hover:ring-[#D4A373]/30 shadow-[0_0_10px_rgba(212,163,115,0.5)]",
    card: "hover:border-[#D4A373]/30",
    title: "group-hover:text-[#D4A373]",
    badge: "text-[#D4A373] bg-[#D4A373]/10"
  }
};

export function Experience() {
  return (
    <div id="experience" className="max-w-[960px] mx-auto px-4 sm:px-6 py-24">
      <div className="mb-16 text-center md:text-left relative">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#E2B857]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121216] border border-[#1F2026] mb-6 relative z-10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-slate-400">Available for new projects</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 relative z-10">
          Forging Digital <span className="bg-gradient-to-r from-[#E2B857] to-[#C58F4F] bg-clip-text text-transparent">Experiences</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl relative z-10">
          Full-stack expertise combining robust architecture with immersive UI/UX. Specialized in high-performance web & mobile ecosystems.
        </p>
      </div>

      <section className="mb-24 relative">
        <div className="flex items-center justify-between mb-8 relative z-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Blocks className="text-[#E2B857]" size={24} />
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="group relative overflow-hidden rounded-2xl bg-[#121216]/90 backdrop-blur-md border border-[#1F2026] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E2B857]/50 hover:shadow-[0_0_30px_-10px_rgba(226,184,87,0.2)]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Smartphone size={80} className="text-[#E2B857]" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-[#E2B857]/10 flex items-center justify-center mb-4 text-[#E2B857] group-hover:bg-[#E2B857] group-hover:text-[#08080A] transition-colors">
                <Smartphone size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mobile Development</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">Crafting native-like experiences with cross-platform efficiency using Flutter & Dart.</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">Flutter</span>
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">Dart</span>
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">iOS/Android</span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-[#121216]/90 backdrop-blur-md border border-[#1F2026] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C58F4F]/50 hover:shadow-[0_0_30px_-10px_rgba(197,143,79,0.2)]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={80} className="text-[#C58F4F]" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-[#C58F4F]/10 flex items-center justify-center mb-4 text-[#C58F4F] group-hover:bg-[#C58F4F] group-hover:text-[#08080A] transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Modern Web</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">Building scalable, reactive web applications with React ecosystem and TypeScript.</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">Next.js</span>
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">React</span>
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-[#121216]/90 backdrop-blur-md border border-[#1F2026] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A373]/50 hover:shadow-[0_0_30px_-10px_rgba(212,163,115,0.2)]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cloud size={80} className="text-[#D4A373]" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-[#D4A373]/10 flex items-center justify-center mb-4 text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#08080A] transition-colors">
                <Cloud size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cloud Infrastructure</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">Deploying secure, serverless architectures and managing robust backend databases.</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">AWS</span>
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">Firebase</span>
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-[#08080A]/50 border border-[#1F2026] text-slate-300">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="flex items-center justify-between mb-12 relative z-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <History className="text-[#C58F4F]" size={24} />
            Professional Journey
          </h2>
        </div>

        <div className="relative pl-4 sm:pl-0 z-10">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#E2B857] via-[#C58F4F] to-transparent hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp) => {
              const colors = colorMap[exp.color];
              return (
                <div key={exp.id} className="relative sm:pl-24 group">
                  <div className={`absolute left-[26px] top-2 w-3 h-3 rounded-full transition-all hidden sm:block z-10 ${colors.dot}`}></div>
                  <div className={`flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#121216]/90 backdrop-blur-md border border-[#1F2026] transition-all hover:translate-x-1 duration-300 ${colors.card}`}>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-[#121216] flex items-center justify-center text-white border border-[#1F2026] mb-4 sm:mb-0 shadow-inner">
                        <span className="font-bold text-lg">{exp.initials}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className={`text-lg font-bold text-white transition-colors ${colors.title}`}>{exp.role}</h3>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 ${colors.badge}`}>{exp.duration}</span>
                      </div>
                      <p className="text-md text-slate-300 mb-2 font-medium">{exp.company} <span className="text-slate-500 font-normal text-sm mx-2">•</span> {exp.location}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-1 text-[11px] font-medium rounded bg-[#1F2026] text-slate-300">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
