import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and an admin dashboard.',
    image: 'https://picsum.photos/seed/ecommerce/800/600?blur=2',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'SaaS application that leverages OpenAI to generate marketing copy, blog posts, and social media content.',
    image: 'https://picsum.photos/seed/ai/800/600?blur=2',
    tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-time Chat App',
    description: 'A modern chat application featuring end-to-end encryption, file sharing, and voice messages.',
    image: 'https://picsum.photos/seed/chat/800/600?blur=2',
    tags: ['Socket.io', 'Express', 'React', 'Redis'],
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E2B857]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] to-transparent opacity-80" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-[#E2B857] transition-colors flex items-center gap-2 text-sm font-medium">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
