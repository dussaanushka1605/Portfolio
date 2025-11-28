import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { useVoiceController } from '@/hooks/useVoiceController';

const Experience = () => {

  const { t, i18n } = useTranslation();
  const { speak, stop, isSpeaking } = useVoiceController();
  const isEnglish = i18n.language === 'en';


  const experienceText = `${t('experience.role')} at ${t('experience.company')}, ${t('experience.duration')}. ${t('experience.highlight1')}. ${t('experience.highlight2')}. ${t('experience.highlight3')}.`;

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-glow">
          {t('experience.title')}
        </h2>

        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="glass-strong p-4 rounded-xl">
              <Briefcase size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{t('experience.role')}</h3>
              <p className="text-xl text-accent font-semibold mb-1">{t('experience.company')}</p>
              <p className="text-muted-foreground">{t('experience.duration')}</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {[
              t('experience.highlight1'),
              t('experience.highlight2'),
              t('experience.highlight3'),
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 glass-strong p-4 rounded-xl"
              >
                <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg">{highlight}</p>
              </motion.div>
            ))}
          </div>


          {isEnglish && (
            <div className="flex justify-center">
              <Button
                onClick={() => isSpeaking ? stop() : speak(experienceText)}
                variant="outline"
                className="border-2 hover:bg-primary/10"
                style={{ borderColor: 'hsl(var(--primary))' }}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX size={18} className="mr-2" />
                    {t('experience.stop')}
                  </>
                ) : (
                  <>
                    <Volume2 size={18} className="mr-2" />
                    {t('experience.listenSummary')}
                  </>
                )}
              </Button>
            </div>
          )}

        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
