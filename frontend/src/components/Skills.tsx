import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Globe, Cloud, Wrench, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { useVoiceController } from '@/hooks/useVoiceController';

const Skills = () => {

  const { t, i18n } = useTranslation();
  const { speak, stop, isSpeaking } = useVoiceController();
  const isEnglish = i18n.language === 'en';


  const skillCategories = [
    {
      icon: Code2,
      title: t('skills.languages'),
      skills: ['Java', 'JavaScript', 'C', 'Python', 'SQL'],
      color: 'primary',
    },
    {
      icon: Globe,
      title: t('skills.webTech'),
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'accent',
    },
    {
      icon: Cloud,
      title: t('skills.tools'),
      skills: ['AWS S3', 'AWS Lambda', 'AWS Glue', 'AWS EMR', 'AWS Redshift', 'Jenkins', 'Maven'],
      color: 'primary',
    },
    {
      icon: Wrench,
      title: t('skills.other'),
      skills: ['REST APIs', 'WebSocket', 'JWT', 'Git', 'GitHub', 'CI/CD', 'Cloud Automation'],
      color: 'accent',
    },
  ];


  // Create translated skill text for voice
  const allSkillsText = [
    `${t('skills.languages')}: ${t('skills.languagesList')}`,
    `${t('skills.webTech')}: ${t('skills.webTechList')}`,
    `${t('skills.tools')}: ${t('skills.toolsList')}`,
    `${t('skills.other')}: ${t('skills.otherList')}`
  ].join('. ');


  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-glow">
            {t('skills.title')}
          </h2>

          {isEnglish && (
            <Button
              onClick={() => isSpeaking ? stop() : speak(allSkillsText)}
              variant="outline"
              size="sm"
              className="border-2 hover:bg-primary/10"
              style={{ borderColor: 'hsl(var(--primary))' }}
            >
              {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </Button>
          )}

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="glass rounded-2xl p-6 transition-all hover:glow-primary"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon
                  size={32}
                  className={category.color === 'primary' ? 'text-primary' : 'text-accent'}
                />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="glass-strong px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      color: category.color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
