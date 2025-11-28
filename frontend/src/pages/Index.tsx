import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Certificates from '@/components/Certificates';
import Achievements from '@/components/Achievements';
import BackToTop from '@/components/BackToTop';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import '../i18n/config';

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Update meta tags
    document.title = "Anushka Markandeya Dussa - Web Developer & DevOps Enthusiast";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Anushka Markandeya Dussa - Computer Science Engineering student passionate about Web Development and DevOps. Skilled in Java, MERN Stack, and AWS.');
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Certificates />
      <Achievements />
        
        <footer className="glass-strong border-t border-primary/20 py-12 px-4 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Anushka Markandeya Dussa
                </h3>
                <p className="text-muted-foreground mb-4">
                  Web Developer • DevOps Enthusiast
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                <a 
                  href="mailto:anushkadussa.nbnscoe.comp@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  <span>anushkadussa.nbnscoe.comp@gmail.com</span>
                </a>
                <a 
                  href="tel:+918446543893"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                  <span>+91-8446543893</span>
                </a>
                <a 
                  href="https://linkedin.com/in/anushkadussa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  <span>linkedin.com/in/anushkadussa</span>
                </a>
                <a 
                  href="https://github.com/dussaanushka1605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                  <span>github.com/dussaanushka1605</span>
                </a>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-primary/20">
              <p className="text-muted-foreground">
                © 2025 Anushka Markandeya Dussa — {t('footer.text')}
              </p>
            </div>
          </div>
        </footer>
      </main>

      <BackToTop />
    </div>
  );
};

export default Index;
