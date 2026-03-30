import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ExternalLink, Code2, Database, Layout, Terminal, Send, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-sky-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          >
            Aryan.
          </motion.h1>
          <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`transition-colors hover:text-sky-400 ${activeSection === item.toLowerCase() ? 'text-sky-400' : 'text-slate-400'}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </motion.header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-sky-500/30 bg-sky-500/5 text-sky-400 text-sm font-medium"
          >
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Aryan B Renake
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            Artificial Intelligence & Data Science Student crafting 
            <span className="text-sky-400"> intelligent software solutions</span>.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://github.com/AryanBR04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-bold transition-transform hover:-translate-y-1"
            >
              <FaGithub size={20} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aryan-renake/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all hover:border-white/40"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown className="text-slate-500" />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
               <span className="h-1 w-12 bg-sky-500 rounded-full"></span>
               About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I'm Aryan, currently pursuing my B.E. in <span className="text-white font-medium">Artificial Intelligence and Data Science</span> at East West Institute of Technology, Bengaluru. 
              </p>
              <p>
                I am a focused developer who enjoys creating impactful software and solving complex algorithmic challenges. My journey is driven by a curiosity for how data and AI can transform real-world problems into elegant solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new tech stacks, strengthening my computer science fundamentals, or contributing to open-source projects.
              </p>
            </div>
          </motion.div>

          <motion.div 
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl rotate-3 absolute inset-0 opacity-20 blur-2xl" />
            <div className="aspect-square glass rounded-3xl flex items-center justify-center border-white/10 relative overflow-hidden group">
              <Terminal size={120} className="text-sky-500/40 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border-white/10 text-sm font-mono leading-tight">
                <span className="text-sky-400">Aryan:</span><span className="text-slate-300">~ $</span> cat goals.txt<br/>
                <span className="text-slate-400">1. Build scalable AI tools</span><br/>
                <span className="text-slate-400">2. Master Data Engineering</span><br/>
                <span className="text-slate-400">3. Create user-centric UI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-slate-400">Technical toolkit and specialized domains</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Programming", icon: <Code2 />, skills: ["Python", "JavaScript", "C++"] },
              { title: "Core CS", icon: <Database />, skills: ["DSA", "OOP", "DBMS"] },
              { title: "Tools", icon: <Terminal />, skills: ["Git", "Docker", "VS Code"] },
              { title: "Frontend", icon: <Layout />, skills: ["React", "Tailwind", "Next.js"] }
            ].map((category, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="group p-8 rounded-3xl glass hover:bg-white/5 transition-all cursor-default border-white/5 hover:border-sky-500/30"
              >
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-400">Building products from concept to deployment</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sky-400 hover:underline">
            All Projects <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "LMS Platform",
              desc: "A comprehensive Learning Management System designed to streamline educational workflows and curated learning paths.",
              tech: ["React", "Node.js", "MongoDB"],
              color: "from-sky-500/20 to-blue-600/20"
            },
            {
              title: "Netflix Cloud Clone",
              desc: "High-performance streaming interface with dynamic content loading and adaptive layout for all devices.",
              tech: ["Tailwind", "Firebase", "React"],
              color: "from-red-500/20 to-purple-600/20"
            }
          ].map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl bg-slate-900 border border-white/5 overflow-hidden"
            >
              <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <Code2 size={60} className="text-white/20 group-hover:scale-125 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-4 text-slate-400">
                    <FaGithub size={20} className="hover:text-white cursor-pointer" />
                    <ExternalLink size={20} className="hover:text-white cursor-pointer" />
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-md border border-white/5 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass rounded-[40px] p-8 md:p-16 text-center border-sky-500/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div 
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to initiate<br/>a conversation?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to say hi, my inbox is always open.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
              <a href="mailto:aryanrenake@gmail.com" className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5">
                <Mail size={20} className="text-sky-400" /> aryanrenake@gmail.com
              </a>
              <a href="tel:+918088232020" className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5">
                <Phone size={20} className="text-sky-400" /> +91 8088232020
              </a>
            </div>

            <motion.button
              whileActive={{ scale: 0.95 }}
              className="px-12 py-5 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto shadow-2xl shadow-sky-500/30 transition-all"
            >
              Get In Touch <Send size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-slate-500 mb-6">Designed & Built by Aryan B Renake</p>
        <div className="flex justify-center gap-6 text-slate-400">
          <a href="#" className="hover:text-white transition-colors"><FaGithub size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><FaLinkedin size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
        <p className="mt-8 text-xs text-slate-600">© 2026 all rights reserved</p>
      </footer>
    </div>
  );
}
