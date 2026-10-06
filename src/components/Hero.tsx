import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Smartphone, Terminal, Clock, Palette, Globe, Monitor, Server, Cpu, Download, Phone, Star } from 'lucide-react';
import { TechLogo } from './TechLogos';

const mobileTechs = [
  { name: "Flutter", logo: "flutter" },
  { name: "Dart", logo: "dart" },
  { name: "Android", logo: "android" },
  { name: "Kotlin", logo: "kotlin" }
];

const webTechs = [
  { name: "React", logo: "react" },
  { name: "Next.js", logo: "nextjs" },
  { name: "Tailwind CSS", logo: "tailwindcss" },
  { name: "Redux Toolkit", logo: "redux" }
];

const backendTechs = [
  { name: "Node.js", logo: "nodejs" },
  { name: "Express.js", logo: "express" },
  { name: "MongoDB", logo: "mongodb" },
  { name: "PostgreSQL", logo: "postgresql" },
  { name: "Docker", logo: "docker" },
  { name: "AWS", logo: "aws" }
];

// Helper to check if a PNG logo is available in public folder
const getLogoSrc = (logoName: string): string => {
  const norm = logoName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const availablePngs = [
    'flutter', 'dart', 'android', 'kotlin', 'react',
    'tailwindcss', 'redux', 'nodejs', 'mongodb', 'docker', 'aws'
  ];
  if (availablePngs.includes(norm)) {
    return `/${norm}.png`;
  }
  return '';
};

// Math helper for 3D orbital projection to 2D flat coordinates
const getProjectedCoords = (thetaDeg: number, R: number, tiltXDeg: number, tiltYDeg: number) => {
  const theta = (thetaDeg * Math.PI) / 180;
  const alpha = (tiltXDeg * Math.PI) / 180;
  const beta = (tiltYDeg * Math.PI) / 180;

  // 3D coordinates after Y-rotation then X-rotation
  const x = R * Math.cos(theta) * Math.cos(beta);
  const y = R * Math.sin(theta) * Math.cos(alpha) + R * Math.cos(theta) * Math.sin(beta) * Math.sin(alpha);
  const z = -R * Math.cos(theta) * Math.sin(beta) * Math.cos(alpha) + R * Math.sin(theta) * Math.sin(alpha);

  return { x, y, z };
};

const orbitStyles = `
  .orbit-container-3d {
    perspective: 1200px;
    transform-style: preserve-3d;
  }
  .orbit-ring-3d {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 1px dashed rgba(226, 184, 87, 0.15);
    transform-style: preserve-3d;
    pointer-events: none;
  }
`;

export function Hero() {
  const [angle, setAngle] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);

  // Drive animation with smooth frame loop (slowed down for a gentle feel)
  useEffect(() => {
    let animId: number;
    const tick = () => {
      setAngle((prev) => (prev + 0.08) % 360);
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Window resize handler to scale orbits for mobile/tablet screen sizes
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScaleFactor(0.52); // Scale down on mobile
      } else if (width < 1024) {
        setScaleFactor(0.75); // Scale down on tablet
      } else {
        setScaleFactor(1.0);  // Full size on desktop
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Orbit 1 config (Mobile - dynamic gyroscopic tilts)
  const r1 = 180 * scaleFactor;
  const tX1 = 60 + Math.sin((angle * 1.5 * Math.PI) / 180) * 12;
  const tY1 = -20 + Math.cos((angle * 1.2 * Math.PI) / 180) * 12;
  const d1 = 60; // 60s rotation duration

  // Orbit 2 config (Web - dynamic gyroscopic tilts)
  const r2 = 250 * scaleFactor;
  const tX2 = 60 + Math.sin(((angle * 1.2 + 120) * Math.PI) / 180) * 12;
  const tY2 = 20 + Math.cos(((angle * 1.5 + 120) * Math.PI) / 180) * 12;
  const d2 = 60; // 60s rotation duration

  // Orbit 3 config (Backend - dynamic gyroscopic tilts)
  const r3 = 320 * scaleFactor;
  const tX3 = 60 + Math.sin(((angle * 1.0 + 240) * Math.PI) / 180) * 12;
  const tY3 = 0 + Math.cos(((angle * 1.0 + 240) * Math.PI) / 180) * 12;
  const d3 = 60; // 60s rotation duration

  return (
    <>
      <style>{orbitStyles}</style>
      <section id="home" className="w-full min-h-screen flex items-center relative z-10 overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-4 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

          {/* Left Text Content */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E2B857]/20 bg-[#E2B857]/5 w-fit mx-auto lg:mx-0 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2B857] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E2B857]"></span>
              </span>
              <span className="text-xs font-semibold text-[#E2B857] tracking-wide uppercase">Open to work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              <span className="block text-white mb-2">I build things as a</span>
              <span className="text-gradient block min-h-[2.5em] lg:min-h-[1.2em] lg:whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-lg text-slate-400 w-full sm:w-[450px] md:w-[550px] lg:w-[600px] max-w-full mx-auto lg:mx-0 leading-relaxed">
              I'm <strong className="text-white font-semibold">Mohan Biswas</strong>. Crafting premium digital experiences with Flutter, React, and Cloud. Building scalable applications and intuitive interfaces.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
              <a
                href="/Mohan_Biswas_CV.pdf"
                download="Mohan_Biswas_CV.pdf"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-[#E2B857] text-[#08080A] text-base font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(226,184,87,0.3)]"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="tel:+919163745364"
                className="h-12 px-8 rounded-lg glass-card text-white text-base font-medium hover:bg-white/5 transition-colors border border-white/10 hover:border-[#E2B857]/30 flex items-center gap-2"
              >
                <Phone size={18} />
                <span>Call Me</span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4 opacity-80">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="text-sm text-slate-500 font-medium mr-2">Best TechStacks in 3 Platforms:</span>
                <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="flex items-center gap-1 text-slate-400 hover:text-[#02569B] transition-colors cursor-default" title="Mobile">
                    <Smartphone size={16} /> <span className="text-xs font-bold">Flutter</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 hover:text-[#61DAFB] transition-colors cursor-default" title="Web">
                    <Globe size={16} /> <span className="text-xs font-bold">React</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 hover:text-[#47848F] transition-colors cursor-default" title="Desktop">
                    <Monitor size={16} /> <span className="text-xs font-bold">ElectronJS</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="text-sm text-slate-500 font-medium mr-2">More Pros:</span>
                <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="flex items-center gap-1 text-slate-400 hover:text-[#68A063] transition-colors cursor-default">
                    <Server size={16} /> <span className="text-xs font-bold">Backend</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 hover:text-[#4EAA25] transition-colors cursor-default">
                    <Terminal size={16} /> <span className="text-xs font-bold">Shell</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 hover:text-[#FF9900] transition-colors cursor-default">
                    <Cpu size={16} /> <span className="text-xs font-bold">Custom ROMs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual: 3D Tech Solar System Orbit */}
          <div className="flex-1 w-full flex items-center justify-center min-h-[380px] sm:min-h-[640px] lg:min-h-[720px] relative z-20">
            <div className="orbit-container-3d relative w-80 h-80 sm:w-[600px] sm:h-[600px] lg:w-[680px] lg:h-[680px] flex items-center justify-center">

              {/* Central Sun (Mohan's Image - Enlarged & Responsive) */}
              <div className="relative z-10 w-28 h-28 sm:w-72 sm:h-72 rounded-full border-4 border-[#E2B857]/45 shadow-[0_0_80px_rgba(226,184,87,0.25)] bg-[#121216] overflow-hidden flex items-end justify-center p-0.5">
                <img
                  src="/myimage.png"
                  alt="Mohan Biswas"
                  className="w-[95%] h-[95%] object-contain object-bottom translate-y-2 sm:translate-y-4 relative z-10"
                />
                <div className="absolute inset-0 bg-[#E2B857]/5 rounded-full animate-pulse" />
              </div>

              {/* Orbit 1 Ring (Mobile) */}
              <div
                className="orbit-ring-3d"
                style={{
                  width: `${r1 * 2}px`,
                  height: `${r1 * 2}px`,
                  transform: `translate(-50%, -50%) rotateY(${tY1}deg) rotateX(${tX1}deg)`,
                }}
              />

              {/* Orbit 1 Items */}
              {mobileTechs.map((tech, idx) => {
                const itemAngle = angle * (360 / d1) + (360 / mobileTechs.length) * idx;
                const { x, y, z } = getProjectedCoords(itemAngle, r1, tX1, tY1);
                const pngSrc = getLogoSrc(tech.logo);

                return (
                  <div
                    key={tech.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) scale(${0.85 + 0.15 * (z / r1)})`,
                      zIndex: z > 0 ? 30 : 5,
                      opacity: z > 0 ? 1 : 0.65,
                      transition: 'transform 0.05s ease-out, opacity 0.05s ease-out',
                    }}
                  >
                    <div className="w-10 h-10 sm:w-18 sm:h-18 rounded-full border border-white/10 bg-[#121216]/95 shadow-[0_8px_16px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform group relative flex items-center justify-center p-1.5 sm:p-2 cursor-pointer">
                      {pngSrc ? (
                        <img src={pngSrc} alt={tech.name} className="w-full h-full object-contain" />
                      ) : (
                        <TechLogo name={tech.logo} className="w-5 h-5 sm:w-7 sm:h-7" />
                      )}
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-full mb-2 bg-[#08080A]/95 border border-[#E2B857]/20 text-[#E2B857] text-[10px] px-2 py-0.5 rounded shadow-lg pointer-events-none whitespace-nowrap z-50">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Orbit 2 Ring (Web) */}
              <div
                className="orbit-ring-3d"
                style={{
                  width: `${r2 * 2}px`,
                  height: `${r2 * 2}px`,
                  transform: `translate(-50%, -50%) rotateY(${tY2}deg) rotateX(${tX2}deg)`,
                }}
              />

              {/* Orbit 2 Items */}
              {webTechs.map((tech, idx) => {
                // Counter-clockwise
                const itemAngle = -angle * (360 / d2) + (360 / webTechs.length) * idx;
                const { x, y, z } = getProjectedCoords(itemAngle, r2, tX2, tY2);
                const pngSrc = getLogoSrc(tech.logo);

                return (
                  <div
                    key={tech.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) scale(${0.85 + 0.15 * (z / r2)})`,
                      zIndex: z > 0 ? 30 : 5,
                      opacity: z > 0 ? 1 : 0.65,
                      transition: 'transform 0.05s ease-out, opacity 0.05s ease-out',
                    }}
                  >
                    <div className="w-10 h-10 sm:w-18 sm:h-18 rounded-full border border-white/10 bg-[#121216]/95 shadow-[0_8px_16px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform group relative flex items-center justify-center p-1.5 sm:p-2 cursor-pointer">
                      {pngSrc ? (
                        <img src={pngSrc} alt={tech.name} className="w-full h-full object-contain" />
                      ) : (
                        <TechLogo name={tech.logo} className="w-5 h-5 sm:w-7 sm:h-7" />
                      )}
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-full mb-2 bg-[#08080A]/95 border border-[#E2B857]/20 text-[#E2B857] text-[10px] px-2 py-0.5 rounded shadow-lg pointer-events-none whitespace-nowrap z-50">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Orbit 3 Ring (Backend) */}
              <div
                className="orbit-ring-3d"
                style={{
                  width: `${r3 * 2}px`,
                  height: `${r3 * 2}px`,
                  transform: `translate(-50%, -50%) rotateY(${tY3}deg) rotateX(${tX3}deg)`,
                }}
              />

              {/* Orbit 3 Items */}
              {backendTechs.map((tech, idx) => {
                const itemAngle = angle * (360 / d3) + (360 / backendTechs.length) * idx;
                const { x, y, z } = getProjectedCoords(itemAngle, r3, tX3, tY3);
                const pngSrc = getLogoSrc(tech.logo);

                return (
                  <div
                    key={tech.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) scale(${0.85 + 0.15 * (z / r3)})`,
                      zIndex: z > 0 ? 30 : 5,
                      opacity: z > 0 ? 1 : 0.65,
                      transition: 'transform 0.05s ease-out, opacity 0.05s ease-out',
                    }}
                  >
                    <div className="w-10 h-10 sm:w-18 sm:h-18 rounded-full border border-white/10 bg-[#121216]/95 shadow-[0_8px_16px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform group relative flex items-center justify-center p-1.5 sm:p-2 cursor-pointer">
                      {pngSrc ? (
                        <img src={pngSrc} alt={tech.name} className="w-full h-full object-contain" />
                      ) : (
                        <TechLogo name={tech.logo} className="w-5 h-5 sm:w-7 sm:h-7" />
                      )}
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-full mb-2 bg-[#08080A]/95 border border-[#E2B857]/20 text-[#E2B857] text-[10px] px-2 py-0.5 rounded shadow-lg pointer-events-none whitespace-nowrap z-50">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Floating Stat Card */}
              <div className="absolute bg-[#121216]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E2B857]/20 shadow-lg flex items-center gap-1.5 -bottom-6 z-30">
                <Star className="w-3.5 h-3.5 fill-[#E2B857] text-[#E2B857]" />
                <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide uppercase">3 Platforms • 14+ Techs</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer statistics cards */}
      <section className="w-full max-w-[1200px] mx-auto px-4 pb-20 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-[#E2B857]/10 text-[#E2B857] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">5+ Years Experience</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering robust full-stack solutions since 2019. I've grown from simple scripts to complex enterprise architectures.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-[#C58F4F]/10 text-[#C58F4F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Coding Since Age 13</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A lifelong passion for code. Started with simple HTML pages, now architecting scalable cloud infrastructure.
            </p>
          </div>
          <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-[#A88B60]/10 text-[#A88B60] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Modern UI/UX</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              I don't just write code; I design experiences. Focusing on glassmorphism, accessibility, and smooth animations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
