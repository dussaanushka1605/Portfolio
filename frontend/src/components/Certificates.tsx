import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Award, Download, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useVoiceController } from '@/hooks/useVoiceController';

const Certificates = () => {

  const { t, i18n } = useTranslation();
  const { speak, stop, isSpeaking } = useVoiceController();
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [speakingSection, setSpeakingSection] = useState(false);
  const isEnglish = i18n.language === 'en';


  const certificates = [
    {
      title: t('certificates.nptelJava.title'),
      issuer: t('certificates.nptelJava.issuer'),
      date: t('certificates.nptelJava.date'),
      link: 'https://drive.google.com/file/d/1CIkd6kXBifSz1i9DIvcM5mV1aLIu_GNO/view?usp=drivesdk',
      isExternal: true,
    },
    {
      title: t('certificates.nptelSoftskills.title'),
      issuer: t('certificates.nptelSoftskills.issuer'),
      date: t('certificates.nptelSoftskills.date'),

      link: 'https://drive.google.com/file/d/1DIpENBwbxwoX756aq4kiZHxc5D6-s4zJ/view?usp=drivesdk',
      isExternal: true,

    },
    {
      title: t('certificates.devops.title'),
      issuer: t('certificates.devops.issuer'),
      date: t('certificates.devops.date'),

      link: 'https://drive.google.com/file/d/1yXaBFSyOPipC4vU6oEEAK2kt6aGROA1u/view?usp=drivesdk',
      isExternal: true,

    },
  ];

  const handleSpeakSummary = () => {
    if (isSpeaking && speakingSection) {
      stop();
      setSpeakingSection(false);
    } else {
      const summary = certificates.map(cert => 
        `${cert.title} ${t('certificates.from')} ${cert.issuer}, ${cert.date}`
      ).join('. ');
      speak(summary);
      setSpeakingSection(true);
    }
  };

  const handleViewCertificate = (certLink: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(certLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="certificates" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-glow">
            {t('certificates.title')}
          </h2>

          {isEnglish && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleSpeakSummary}
              className="border-2 hover:bg-primary/10 transition-all"
              style={{ borderColor: 'hsl(var(--primary))' }}
            >
              {isSpeaking && speakingSection ? (
                <>
                  <VolumeX size={16} className="mr-2" />
                  {t('certificates.stop')}
                </>
              ) : (
                <>
                  <Volume2 size={16} className="mr-2" />
                  {t('certificates.listen')}
                </>
              )}
            </Button>
          )}

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-3xl p-6 cursor-pointer group relative overflow-hidden"
              onClick={() => handleViewCertificate(cert.link, cert.isExternal)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-glow">{cert.title}</h3>
                <p className="text-accent font-semibold">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">{cert.date}</p>

                {cert.isExternal && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewCertificate(cert.link, cert.isExternal);
                    }}
                    className="border-2 hover:bg-primary/10 transition-all hover:shadow-lg hover:shadow-accent/50 mt-2"
                    style={{ borderColor: 'hsl(var(--primary))' }}
                  >
                    <Award size={16} className="mr-2" />
                    {t('certificates.view')}
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

export default Certificates;
