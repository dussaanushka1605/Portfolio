import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useVoiceController } from '@/hooks/useVoiceController';

const Hero = () => {

  const { t, i18n } = useTranslation();
  const { speak, stop, isSpeaking } = useVoiceController();
  const isEnglish = i18n.language === 'en';

  const [displayedText, setDisplayedText] = useState('');
  const fullText = t('hero.subtitle');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl w-full text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-glow"
          style={{ color: 'hsl(var(--foreground))' }}
        >
          {t('hero.greeting')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 h-16 flex items-center justify-center"
        >
          <p
            className="text-xl md:text-2xl font-medium text-glow-secondary"
            style={{ color: 'hsl(var(--accent))' }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-primary text-primary-foreground font-semibold"
          >
            {t('hero.exploreProjects')}
          </Button>

          {isEnglish && (
            <Button
              size="lg"
              variant="outline"
              onClick={() => isSpeaking ? stop() : speak(t('hero.intro'))}
              className="border-2 hover:bg-accent/10 transition-all"
              style={{ borderColor: 'hsl(var(--accent))' }}
            >
              {isSpeaking ? (
                <>
                  <VolumeX size={18} className="mr-2" />
                  Stop 🔇
                </>
              ) : (
                <>
                  <Volume2 size={18} className="mr-2" />
                  {t('hero.activateVoice')}
                </>
              )}
            </Button>
          )}

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
