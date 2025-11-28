import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useVoiceController = () => {
  const { i18n } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    voicesRef.current = voices;
    if (voices.length > 0) {
      setVoicesLoaded(true);
    }
  };

  const getVoice = (lang: string): SpeechSynthesisVoice | null => {
    const voices = voicesRef.current.length > 0 ? voicesRef.current : window.speechSynthesis.getVoices();
    
    if (voices.length === 0) {
      return null;
    }

    // Prefer female voices and expand matching for Indian languages
    const femaleKeywords = ['female', 'samantha', 'zira', 'heera', 'nicky', 'fiona', 'moira', 'tessa', 'veena', 'raveena', 'hema', 'neural', 'google'];

    const indicNameHints = ['india', 'indian', 'hindi', 'marathi', 'मराठी', 'हिंदी'];

    const femaleVoices = voices.filter((voice) =>
      femaleKeywords.some((kw) => voice.name.toLowerCase().includes(kw))
    );

    let voice: SpeechSynthesisVoice | null = null;

    // Language-specific voice selection with broader fallbacks

    if (lang === 'hi' || lang.startsWith('hi')) {
      // Hindi - try multiple formats and language codes
      voice =
        // Try exact Hindi-India match first
        femaleVoices.find((v) => v.lang === 'hi-IN') ||
        voices.find((v) => v.lang === 'hi-IN') ||
        // Try any Hindi variant
        femaleVoices.find((v) => v.lang?.toLowerCase().startsWith('hi-in')) ||
        voices.find((v) => v.lang?.toLowerCase().startsWith('hi-in')) ||
        femaleVoices.find((v) => v.lang?.toLowerCase().startsWith('hi')) ||
        voices.find((v) => v.lang?.toLowerCase().startsWith('hi')) ||
        // Try Indic voices by name
        femaleVoices.find((v) => indicNameHints.some((kw) => v.name.toLowerCase().includes(kw))) ||
        voices.find((v) => indicNameHints.some((kw) => v.name.toLowerCase().includes(kw))) ||
        // Fallback to Indian English (closest match)
        femaleVoices.find((v) => v.lang === 'en-IN') ||
        voices.find((v) => v.lang === 'en-IN');
    } else if (lang === 'mr' || lang.startsWith('mr')) {
      // Marathi - try multiple formats
      voice =
        // Try exact Marathi-India match first
        femaleVoices.find((v) => v.lang === 'mr-IN') ||
        voices.find((v) => v.lang === 'mr-IN') ||
        // Try any Marathi variant (by language code or name)
        femaleVoices.find((v) => v.lang?.toLowerCase().startsWith('mr-in') || /marathi|मराठी/i.test(v.name)) ||
        voices.find((v) => v.lang?.toLowerCase().startsWith('mr-in') || /marathi|मराठी/i.test(v.name)) ||
        femaleVoices.find((v) => v.lang?.toLowerCase().startsWith('mr')) ||
        voices.find((v) => v.lang?.toLowerCase().startsWith('mr')) ||
        // Fallback to Hindi (closest Indic language)
        femaleVoices.find((v) => v.lang?.toLowerCase().startsWith('hi')) ||
        voices.find((v) => v.lang?.toLowerCase().startsWith('hi')) ||
        // Fallback to Indian English
        femaleVoices.find((v) => v.lang === 'en-IN') ||
        voices.find((v) => v.lang === 'en-IN');
    } else {
      // English - prefer US, GB, or IN female voices
      voice =
        femaleVoices.find((v) => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang === 'en-IN') ||
        voices.find((v) => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang === 'en-IN') ||
        femaleVoices.find((v) => v.lang?.toLowerCase().startsWith('en')) ||

        voices.find((v) => v.lang?.toLowerCase().startsWith('en'));
    }

    return voice || voices[0] || null;
  };

  const speak = (text: string) => {
    // Stop any ongoing speech
    stop();


    // Wait for voices to load if not already loaded
    if (!voicesLoaded && voicesRef.current.length === 0) {
      loadVoices();
      // Try again after a short delay
      setTimeout(() => speak(text), 300);
      return;
    }

    // Ensure we have text to speak
    if (!text || text.trim().length === 0) {
      console.warn('No text provided to speak');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const currentLang = i18n.language;
    
    // CRITICAL: Always set the language code FIRST and NEVER override it
    // This is the most important setting - it tells the speech engine what language the text is in
    let langCode = 'en-US';
    if (currentLang === 'hi' || currentLang.startsWith('hi')) {
      langCode = 'hi-IN';
    } else if (currentLang === 'mr' || currentLang.startsWith('mr')) {
      langCode = 'mr-IN';
    }
    
    // Set the language code - this is CRITICAL for Hindi/Marathi
    utterance.lang = langCode;
    
    // Try to find a matching voice, but ONLY use it if it matches the language
    const voice = getVoice(currentLang);
    
    // Only set voice if it matches our target language
    // If no matching voice, let the browser use its default but with our language code
    if (voice) {
      const voiceLang = voice.lang?.toLowerCase() || '';
      // Only use the voice if it matches our target language
      if (
        (langCode.startsWith('hi') && voiceLang.startsWith('hi')) ||
        (langCode.startsWith('mr') && voiceLang.startsWith('mr')) ||
        (langCode.startsWith('en') && voiceLang.startsWith('en'))
      ) {
        utterance.voice = voice;
        console.log(`✓ Using matching voice: ${voice.name} (${voice.lang}) for ${langCode}`);
      } else {
        // Don't set voice - let browser use default with our language code
        console.log(`⚠ Voice ${voice.name} (${voice.lang}) doesn't match ${langCode}, using language code only`);
      }
    } else {
      console.log(`ℹ No voice found for ${currentLang}, using language code: ${langCode}`);
    }

    // Voice settings optimized for multilingual support
    utterance.rate = 0.8; // Slower for better clarity with non-native languages
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      console.log(`▶ Speech started - Language: ${utterance.lang}, Text: "${text.substring(0, 50)}..."`);
      setIsSpeaking(true);
    };
    
    utterance.onend = () => {
      console.log(`✓ Speech completed for ${utterance.lang}`);
      setIsSpeaking(false);
      currentUtteranceRef.current = null;
    };
    
    utterance.onerror = (error) => {
      console.error('❌ Speech synthesis error:', error);
      console.error(`Failed language: ${utterance.lang}, Error type: ${error.error}`);

      setIsSpeaking(false);
      currentUtteranceRef.current = null;
    };

    currentUtteranceRef.current = utterance;

    
    try {
      // Cancel any ongoing speech
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        window.speechSynthesis.cancel();
        // Small delay to ensure cancellation completes
        setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, 50);
      } else {
        window.speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('❌ Error starting speech:', error);
      setIsSpeaking(false);
    }
  };

  const stop = () => {
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {

      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      currentUtteranceRef.current = null;
    }
  };

  useEffect(() => {

    // Load voices immediately
    loadVoices();
    
    // Set up voice change listener
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        loadVoices();
        // Log available voices for debugging
        const voices = window.speechSynthesis.getVoices();
        console.log('🔊 Voices loaded:', voices.length);
        
        // Check for Hindi voices
        const hindiVoices = voices.filter(v => {
          const lang = v.lang?.toLowerCase() || '';
          return lang.includes('hi') || v.name.toLowerCase().includes('hindi');
        });
        if (hindiVoices.length > 0) {
          console.log('✅ Hindi voices found:', hindiVoices.map(v => `${v.name} (${v.lang})`));
        } else {
          console.warn('⚠️ No Hindi voices found. Browser may not support Hindi TTS.');
        }
        
        // Check for Marathi voices
        const marathiVoices = voices.filter(v => {
          const lang = v.lang?.toLowerCase() || '';
          return lang.includes('mr') || v.name.toLowerCase().includes('marathi');
        });
        if (marathiVoices.length > 0) {
          console.log('✅ Marathi voices found:', marathiVoices.map(v => `${v.name} (${v.lang})`));
        } else {
          console.warn('⚠️ No Marathi voices found. Browser may not support Marathi TTS.');
        }
        
        // Log all available language codes
        const allLangs = [...new Set(voices.map(v => v.lang).filter(Boolean))];
        console.log('📋 Available language codes:', allLangs.slice(0, 20));
      };
    }

    // Also try loading after delays (some browsers need this)
    const timeout1 = setTimeout(() => {
      loadVoices();
    }, 100);
    
    const timeout2 = setTimeout(() => {
      loadVoices();
    }, 500);
    
    const timeout3 = setTimeout(() => {
      loadVoices();
    }, 1000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);

      stop();
    };
  }, []);


  // Reload voices when language changes to ensure proper voice selection
  useEffect(() => {
    loadVoices();
  }, [i18n.language]);


  return { speak, stop, isSpeaking };
};
