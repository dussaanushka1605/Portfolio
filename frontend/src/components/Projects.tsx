import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Github, Volume2, VolumeX } from 'lucide-react';
import { useVoiceController } from '@/hooks/useVoiceController';
import { useState } from 'react';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const { speak, stop, isSpeaking } = useVoiceController();
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const isEnglish = i18n.language === 'en';


  const projects = [
    {
      name: t('projects.bloodsetu.name'),
      description: t('projects.bloodsetu.desc'),
      features: t('projects.bloodsetu.features'),
      github: 'https://github.com/dussaanushka1605/bloodsetu',
      liveUrl: 'https://bloodsetu.netlify.app/',
      gradient: 'from-primary to-accent',
    },
    {
      name: t('projects.whisperoom.name'),
      description: t('projects.whisperoom.desc'),
      features: t('projects.whisperoom.features'),
      github: 'https://github.com/dussaanushka1605/whisperoom',
      liveUrl: 'https://whisperoom.netlify.app/',
      gradient: 'from-accent to-primary',
    },
  ];

  const handleSpeak = (text: string, index: number) => {
    if (isSpeaking && speakingIndex === index) {
      stop();
      setSpeakingIndex(null);
    } else {
      speak(text);
      setSpeakingIndex(index);
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground text-glow"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="glass rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              
              <h3 className="text-2xl font-bold mb-3 text-foreground">{project.name}</h3>
              <p className="text-accent font-semibold mb-4">{project.description}</p>
              <p className="text-muted-foreground mb-6">{project.features}</p>

              <div className="flex gap-3 flex-wrap">
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/50"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    {t('projects.bloodsetu.liveLink')}
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-2 hover:bg-primary/10 transition-all hover:shadow-lg hover:shadow-accent/50"
                  style={{ borderColor: 'hsl(var(--primary))' }}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                </Button>

                {isEnglish && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSpeak(`${project.name}. ${project.description}. ${project.features}`, index)}
                    className="border-2 hover:bg-primary/10 transition-all hover:shadow-lg hover:shadow-accent/50"
                    style={{ borderColor: 'hsl(var(--primary))' }}
                  >
                    {isSpeaking && speakingIndex === index ? (
                      <>
                        <VolumeX size={16} className="mr-2" />
                        {t('projects.stop')}
                      </>
                    ) : (
                      <>
                        <Volume2 size={16} className="mr-2" />
                        {t('projects.readAloud')}
                      </>
                    )}
                  </Button>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
