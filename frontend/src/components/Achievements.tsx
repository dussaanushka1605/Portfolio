import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Users, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { useVoiceController } from '@/hooks/useVoiceController';

const Achievements = () => {

  const { t, i18n } = useTranslation();
  const { speak, stop, isSpeaking } = useVoiceController();
  const isEnglish = i18n.language === 'en';


  const achievementsText = `${t('achievements.title')}. ${t('achievements.cert1')}. ${t('achievements.cert2')}. ${t('responsibilities.title')}. ${t('responsibilities.role1')}. ${t('responsibilities.role2')}.`;

  return (

    <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">

      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground text-glow">
            {t('achievements.title')}
          </h2>

          {isEnglish && (
            <Button
              onClick={() => isSpeaking ? stop() : speak(achievementsText)}
              variant="outline"
              size="sm"
              className="border-2 hover:bg-primary/10"
              style={{ borderColor: 'hsl(var(--primary))' }}
            >
              {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </Button>
          )}

        </motion.div>

        <div className="space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-8 flex items-start gap-4"
          >
            <div className="glass-strong p-4 rounded-xl">
              <Award size={32} className="text-primary" />
            </div>
            <p className="text-lg flex-1">{t('achievements.cert1')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-8 flex items-start gap-4"
          >
            <div className="glass-strong p-4 rounded-xl">
              <Award size={32} className="text-primary" />
            </div>
            <p className="text-lg flex-1">{t('achievements.cert2')}</p>
          </motion.div>
        </div>

        <motion.h3

          id="responsibilities"

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-8 text-center text-foreground text-glow-secondary"
          style={{ color: 'hsl(var(--accent))' }}
        >
          {t('responsibilities.title')}
        </motion.h3>

        <div className="space-y-6">
          {[t('responsibilities.role1'), t('responsibilities.role2')].map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 flex items-start gap-4"
            >
              <div className="glass-strong p-4 rounded-xl">
                <Users size={32} className="text-accent" />
              </div>
              <p className="text-lg flex-1">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
