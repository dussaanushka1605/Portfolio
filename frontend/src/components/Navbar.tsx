import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { useState, useEffect } from 'react';
import { Menu, X, Languages, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { labelKey: 'nav.home', href: '#hero' },
    { labelKey: 'nav.about', href: '#about' },
    { labelKey: 'nav.skills', href: '#skills' },
    { labelKey: 'nav.experience', href: '#experience' },
    { labelKey: 'nav.projects', href: '#projects' },
    { labelKey: 'nav.resume', href: '#resume' },
    { labelKey: 'nav.certificates', href: '#certificates' },
    { labelKey: 'nav.achievements', href: '#achievements' },
    { labelKey: 'nav.responsibilities', href: '#responsibilities' },

  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', label: 'मराठी', flag: '🌼' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Anushka Dussa
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
                style={{ color: 'hsl(var(--foreground))' }}
              >

                {t(link.labelKey)}
              </button>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="border-primary/30 hover:bg-primary/10 ml-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={16} className="text-yellow-500" />
                ) : (
                  <Moon size={16} className="text-blue-500" />
                )}
              </Button>
            )}

            {/* Language Selector */}
            <div className="relative ml-2">

              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="border-primary/30 hover:bg-primary/10"
              >
                <Languages size={16} className="mr-2" />
                {languages.find(l => l.code === i18n.language)?.flag}
              </Button>

              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}

                  className="absolute right-0 mt-2 w-48 glass rounded-xl p-2 shadow-lg z-50"

                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-primary/20 text-primary'
                          : 'hover:bg-primary/10'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


          {/* Mobile Navigation */}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong border-t border-primary/20"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
                style={{ color: 'hsl(var(--foreground))' }}
              >

                {t(link.labelKey)}
              </button>
            ))}

            <div className="pt-4 border-t border-primary/20 space-y-3">
              {/* Theme Toggle in Mobile */}
              {mounted && (
                <div>
                  <p className="px-3 py-2 text-xs font-semibold opacity-60">Theme</p>
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun size={16} className="text-yellow-500" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={16} className="text-blue-500" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Language Selector in Mobile */}
              <div>
                <p className="px-3 py-2 text-xs font-semibold opacity-60">Language</p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      i18n.language === lang.code
                        ? 'bg-primary/20 text-primary'
                        : 'hover:bg-primary/10'
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
