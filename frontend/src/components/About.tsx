import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Linkedin, Github, Volume2, VolumeX } from 'lucide-react';
import { useVoiceController } from '@/hooks/useVoiceController';
import profileImage from '@/assets/profile.jpg';

const About = () => {

  const { t, i18n } = useTranslation();
  const { speak, stop, isSpeaking } = useVoiceController();
  const isEnglish = i18n.language === 'en';


  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12 max-w-6xl w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground text-glow">
          {t('about.title')}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/50 glow-primary">
              <img
                src={profileImage}
                alt="Anushka Markandeya Dussa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Bio Text */}
          <div className="flex-1">
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
              {t('about.bio')}
            </p>
            

            {isEnglish && (
              <div className="flex gap-3">
                <Button
                  onClick={() => isSpeaking ? stop() : speak(t('about.bio'))}
                  variant="outline"
                  className="border-2 hover:bg-primary/10"
                  style={{ borderColor: 'hsl(var(--primary))' }}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX size={18} className="mr-2" />
                      {t('about.stop')}
                    </>
                  ) : (
                    <>
                      <Volume2 size={18} className="mr-2" />
                      {t('about.playVoice')}
                    </>
                  )}
                </Button>
              </div>
            )}

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-strong rounded-xl p-6 flex items-center gap-4"
          >
            <MapPin className="text-primary" size={24} />
            <div>
              <p className="text-sm opacity-70">Location</p>
              <p className="font-semibold">{t('about.location')}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-strong rounded-xl p-6 flex items-center gap-4"
          >
            <Mail className="text-accent" size={24} />
            <div>
              <p className="text-sm opacity-70">Email</p>
              <p className="font-semibold text-sm">anushkadussa.nbnscoe.comp@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-strong rounded-xl p-6"
          >
            <a
              href="https://linkedin.com/in/anushkadussa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
              <div>
                <p className="text-sm opacity-70">LinkedIn</p>
                <p className="font-semibold">linkedin.com/in/anushkadussa</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-strong rounded-xl p-6"
          >
            <a
              href="https://github.com/dussaanushka1605"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-accent transition-colors"
            >
              <Github size={24} />
              <div>
                <p className="text-sm opacity-70">GitHub</p>
                <p className="font-semibold">github.com/dussaanushka1605</p>
              </div>
            </a>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;
