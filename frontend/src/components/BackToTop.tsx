import { motion, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      setIsVisible(value > 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Button
        onClick={scrollToTop}
        size="lg"
        className="glass-strong w-14 h-14 rounded-full p-0 hover:glow-secondary transition-all"
      >
        <ArrowUp size={24} />
      </Button>
    </motion.div>
  );
};

export default BackToTop;
