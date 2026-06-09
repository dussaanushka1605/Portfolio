import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, CalendarDays } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();

  const educationItems = [
    {
      title: t('education.degree1'),
      institution: t('education.school1'),
      year: t('education.year1'),
    },
    {
      title: t('education.degree2'),
      institution: t('education.school2'),
      year: t('education.year2'),
    },
    {
      title: t('education.degree3'),
      institution: t('education.school3'),
      year: t('education.year3'),
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <GraduationCap size={32} className="text-primary" />
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground text-glow">
            {t('education.title')}
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-accent font-semibold mt-2">{item.institution}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarDays size={20} />
                  <span>{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
