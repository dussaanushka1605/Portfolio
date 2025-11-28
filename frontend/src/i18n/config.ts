import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Internship",
        projects: "Projects",
        resume: "Resume",
        certificates: "Certificates",
        achievements: "Achievements",
        responsibilities: "Positions"
      },
      hero: {
        greeting: "Hi, I'm Anushka 👋",
        subtitle: "Web Developer • DevOps Enthusiast • Java | MERN | AWS",
        exploreProjects: "Explore Projects",
        contactMe: "Contact Me",
        activateVoice: "Activate Voice Mode 🎙️",
        intro: "Welcome! I'm Anushka, a web developer passionate about building meaningful tech experiences."
      },
      about: {
        title: "About Me",
        bio: "Full-Stack Developer skilled in MERN stack and Java with hands-on experience building scalable applications, secure authentication systems, and real-time WebSocket-based platforms. Currently pursuing B.E. in Computer Science at NBN Sinhgad College of Engineering (CGPA: 9.10/10). Experienced in AWS cloud automation and CI/CD pipelines with a strong problem-solving mindset.",
        location: "Solapur, Maharashtra",
        playVoice: "Play Voice Summary 🔊",
        stop: "Stop 🔇",
        translate: "Translate 🌐"
      },
      skills: {
        title: "Technical Skills",
        languages: "Programming Languages",
        languagesList: "Java, JavaScript, C, Python, SQL",
        webTech: "Web Technologies",
        webTechList: "React.js, Node.js, Express.js, MongoDB",
        tools: "Tools & Cloud",
        toolsList: "AWS (S3, Lambda, Glue, EMR, Redshift), Jenkins, Maven, Git, GitHub",
        other: "Other Skills",
        otherList: "REST APIs, WebSocket, JWT, CI/CD, Cloud Automation",
        listenSummary: "Listen Summary 🔊",
        stop: "Stop 🔇"
      },
      experience: {
        title: "Internship Experience",
        company: "MSSquare Global",
        role: "DevOps Intern",
        duration: "June 2025",
        highlight1: "Built Jenkins CI/CD pipelines for automated deployment",
        highlight2: "Managed Git/GitHub workflows for version control",
        highlight3: "Automated AWS services: IAM, S3, Lambda, EMR, Glue, Redshift",
        listenSummary: "Listen Summary 🔊",
        stop: "Stop 🔇"
      },
      projects: {
        title: "Projects Showcase",
        bloodsetu: {
          name: "BloodSetu",
          desc: "MERN Stack + WebSocket",
          features: "Real-time blood donor-hospital platform with Geolocation API, JWT Authentication, WebSocket communication, and Admin Dashboard",
          liveLink: "Live Project"
        },
        whisperoom: {
          name: "Whisperoom",
          desc: "MERN Stack + JWT + WebSocket",
          features: "Secure real-time chat platform with JWT authentication, WebSocket messaging, and end-to-end encryption",
          liveLink: "Live Project"
        },
        readAloud: "Read Aloud 🔊",
        stop: "Stop 🔇"
      },
      resume: {
        title: "Resume",
        subtitle: "Professional Resume",
        description: "View or download my professional resume to learn more about my experience and qualifications.",
        viewResume: "View Resume",
        downloadResume: "Download Resume",
        previewTitle: "Resume Preview"
      },
      certificates: {
        title: "Certificates",
        listen: "Listen Summary 🔊",
        stop: "Stop 🔇",
        view: "View Certificate",
        download: "Download",
        from: "from",
        nptelJava: {
          title: "NPTEL Elite+Silver: Java Programming",
          issuer: "NPTEL (IIT/IISc)",
          date: "Score: 85%"
        },
        nptelSoftskills: {
          title: "NPTEL Elite: Soft Skills & Personality",
          issuer: "NPTEL (IIT/IISc)",
          date: "Score: 64%"
        },
        devops: {
          title: "DevOps Internship Certificate",
          issuer: "MSSquare Global",
          date: "June 2025"
        }
      },
      achievements: {
        title: "Achievements & Certifications",
        cert1: "NPTEL Elite+Silver: Java Programming (Score: 85%)",
        cert2: "NPTEL Elite: Soft Skills & Personality Development (Score: 64%)",
        listenSummary: "Listen Summary 🔊",
        stop: "Stop 🔇"
      },
      responsibilities: {
        title: "Positions of Responsibility",
        role1: "Training & Placement Cell Coordinator",
        role2: "Event Coordinator (Treasure Hunt)"
      },
      contact: {
        title: "Contact Me",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        voiceInput: "Use voice input 🎙️"
      },
      footer: {
        text: "Built with ❤️ using React, Tailwind, and AI"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        about: "परिचय",
        skills: "कौशल",
        experience: "इंटर्नशिप",
        projects: "प्रोजेक्ट्स",
        resume: "रिज़्यूमे",
        certificates: "प्रमाणपत्र",
        achievements: "उपलब्धियां",
        responsibilities: "पद"
      },
      hero: {
        greeting: "नमस्ते, मैं अनुष्का हूँ 👋",
        subtitle: "वेब डेवलपर • DevOps उत्साही • Java | MERN | AWS",
        exploreProjects: "प्रोजेक्ट्स देखें",
        contactMe: "संपर्क करें",
        activateVoice: "वॉयस मोड सक्रिय करें 🎙️",
        intro: "स्वागत है! मैं अनुष्का हूँ, एक वेब डेवलपर जो सार्थक तकनीकी अनुभव बनाने के लिए उत्साही हूँ।"
      },
      about: {
        title: "मेरे बारे में",
        bio: "MERN स्टैक और Java में कुशल फुल-स्टैक डेवलपर, स्केलेबल एप्लिकेशन, सुरक्षित प्रमाणीकरण सिस्टम और रियल-टाइम WebSocket-आधारित प्लेटफार्मों के निर्माण का अनुभव। NBN सिंहगड कॉलेज ऑफ इंजीनियरिंग में कंप्यूटर साइंस में B.E. कर रहा हूँ (CGPA: 9.10/10)। AWS क्लाउड ऑटोमेशन और CI/CD पाइपलाइनों में अनुभवी, मजबूत समस्या-समाधान क्षमता।",
        location: "सोलापुर, महाराष्ट्र",
        playVoice: "वॉइस सारांश चलाएं 🔊",
        stop: "रोकें 🔇",
        translate: "अनुवाद करें 🌐"
      },
      skills: {
        title: "तकनीकी कौशल",

        languages: "प्रोग्रामिंग भाषाएँ",
        languagesList: "Java, JavaScript, C, Python, SQL",
        webTech: "वेब प्रौद्योगिकियाँ",
        webTechList: "React.js, Node.js, Express.js, MongoDB",
        tools: "उपकरण और क्लाउड",
        toolsList: "AWS (S3, Lambda, Glue, EMR, Redshift), Jenkins, Maven, Git, GitHub",
        other: "अन्य कौशल",
        otherList: "REST APIs, WebSocket, JWT, CI/CD, Cloud Automation",
        listenSummary: "सारांश सुनें 🔊",
        stop: "रोकें 🔇"

      },
      experience: {
        title: "इंटर्नशिप अनुभव",
        company: "MSSQUARE Global",
        role: "DevOps इंटर्न",
        duration: "जून 2025",
        highlight1: "वास्तविक-दुनिया की तैनाती के लिए CI/CD पाइपलाइन बनाई",
        highlight2: "AWS सेवाओं के साथ वर्कफ़्लो स्वचालित किए",
        highlight3: "कोड एकीकरण और संस्करण नियंत्रण का प्रबंधन किया",
        listenSummary: "सारांश सुनें 🔊"
      },
      projects: {
        title: "प्रोजेक्ट्स",
        bloodsetu: {
          name: "ब्लडसेतु",
          desc: "MERN स्टैक + WebSocket",
          features: "भू-स्थान API, JWT प्रमाणीकरण, WebSocket संचार और व्यवस्थापक डैशबोर्ड के साथ वास्तविक-समय रक्तदाता-अस्पताल मंच",
          liveLink: "लाइव प्रोजेक्ट"
        },
        whisperoom: {
          name: "व्हिस्परूम",
          desc: "MERN स्टैक + JWT + WebSocket",
          features: "JWT प्रमाणीकरण, WebSocket मैसेजिंग और एंड-टू-एंड एन्क्रिप्शन के साथ सुरक्षित वास्तविक-समय चैट प्लेटफ़ॉर्म",
          liveLink: "लाइव प्रोजेक्ट"
        },
        readAloud: "जोर से पढ़ें 🔊",
        stop: "रोकें 🔇"
      },
      resume: {
        title: "रिज़्यूमे",
        subtitle: "पेशेवर रिज़्यूमे",
        description: "मेरे अनुभव और योग्यता के बारे में अधिक जानने के लिए मेरा पेशेवर रिज़्यूमे देखें या डाउनलोड करें।",
        viewResume: "रिज़्यूमे देखें",
        downloadResume: "रिज़्यूमे डाउनलोड करें",
        previewTitle: "रिज़्यूमे पूर्वावलोकन"
      },
      certificates: {
        title: "प्रमाणपत्र",
        listen: "सारांश सुनें 🔊",
        stop: "रोकें 🔇",
        view: "प्रमाणपत्र देखें",
        download: "डाउनलोड करें",
        from: "से",
        nptelJava: {
          title: "NPTEL एलीट+सिल्वर: Java प्रोग्रामिंग",
          issuer: "NPTEL (IIT/IISc)",
          date: "स्कोर: 85%"
        },
        nptelSoftskills: {
          title: "NPTEL एलीट: सॉफ्ट स्किल्स और व्यक्तित्व",
          issuer: "NPTEL (IIT/IISc)",
          date: "स्कोर: 64%"
        },
        devops: {
          title: "DevOps इंटर्नशिप प्रमाणपत्र",
          issuer: "MSSquare Global",
          date: "जून 2025"
        }
      },
      achievements: {
        title: "उपलब्धियां और प्रमाणपत्र",
        cert1: "NPTEL एलीट+सिल्वर: Java प्रोग्रामिंग (स्कोर: 85%)",
        cert2: "NPTEL एलीट: सॉफ्ट स्किल्स और व्यक्तित्व विकास (स्कोर: 64%)",
        listenSummary: "सारांश सुनें 🔊",
        stop: "रोकें 🔇"
      },
      responsibilities: {
        title: "जिम्मेदारी के पद",
        role1: "प्रशिक्षण और नियुक्ति सेल समन्वयक",
        role2: "कार्यक्रम समन्वयक (ट्रेजर हंट)"
      },
      contact: {
        title: "संपर्क करें",
        name: "नाम",
        email: "ईमेल",
        message: "संदेश",
        send: "संदेश भेजें",
        voiceInput: "वॉइस इनपुट का उपयोग करें 🎙️"
      },
      footer: {
        text: "React, Tailwind और AI के साथ ❤️ से बनाया गया"
      }
    }
  },
  mr: {
    translation: {
      nav: {
        home: "मुख्यपृष्ठ",
        about: "माझ्याबद्दल",
        skills: "कौशल्ये",
        experience: "इंटर्नशिप",
        projects: "प्रकल्प",
        resume: "रिझ्यूमे",
        certificates: "प्रमाणपत्रे",
        achievements: "उपलब्धी",
        responsibilities: "पदे"
      },
      hero: {
        greeting: "नमस्कार, मी अनुष्का आहे 👋",
        subtitle: "वेब डेव्हलपर • DevOps उत्साही • Java | MERN | AWS",
        exploreProjects: "प्रकल्प पहा",
        contactMe: "संपर्क करा",
        activateVoice: "व्हॉइस मोड सक्रिय करा 🎙️",
        intro: "स्वागत आहे! मी अनुष्का आहे, एक वेब डेव्हलपर जो अर्थपूर्ण तंत्रज्ञान अनुभव तयार करण्यासाठी उत्साही आहे।"
      },
      about: {
        title: "माझ्याबद्दल",
        bio: "MERN स्टॅक आणि Java मध्ये कुशल फुल-स्टॅक डेव्हलपर, स्केलेबल अनुप्रयोग, सुरक्षित प्रमाणीकरण प्रणाली आणि रिअल-टाइम WebSocket-आधारित प्लॅटफॉर्म तयार करण्याचा अनुभव. NBN सिंहगड कॉलेज ऑफ इंजिनियरिंगमध्ये कॉम्प्युटर सायन्समध्ये B.E. करत आहे (CGPA: 9.10/10). AWS क्लाउड ऑटोमेशन आणि CI/CD पाइपलाइनमध्ये अनुभवी, मजबूत समस्या-निवारण क्षमता.",
        location: "सोलापूर, महाराष्ट्र",
        playVoice: "व्हॉइस सारांश प्ले करा 🔊",
        stop: "थांबवा 🔇",
        translate: "भाषांतर करा 🌐"
      },
      skills: {
        title: "तांत्रिक कौशल्ये",

        languages: "प्रोग्रामिंग भाषा",
        languagesList: "Java, JavaScript, C, Python, SQL",
        webTech: "वेब तंत्रज्ञान",
        webTechList: "React.js, Node.js, Express.js, MongoDB",
        tools: "साधने आणि क्लाउड",
        toolsList: "AWS (S3, Lambda, Glue, EMR, Redshift), Jenkins, Maven, Git, GitHub",
        other: "इतर कौशल्ये",
        otherList: "REST APIs, WebSocket, JWT, CI/CD, Cloud Automation",
        listenSummary: "सारांश ऐका 🔊",
        stop: "थांबवा 🔇"

      },
      experience: {
        title: "इंटर्नशिप अनुभव",
        company: "MSSQUARE Global",
        role: "DevOps इंटर्न",
        duration: "जून 2025",
        highlight1: "वास्तविक-जगाच्या तैनातीसाठी CI/CD पाइपलाइन तयार केल्या",
        highlight2: "AWS सेवांसह वर्कफ्लो स्वयंचलित केले",
        highlight3: "कोड एकत्रीकरण आणि आवृत्ती नियंत्रण व्यवस्थापित केले",
        listenSummary: "सारांश ऐका 🔊"
      },
      projects: {
        title: "प्रकल्प",
        bloodsetu: {
          name: "ब्लडसेतू",
          desc: "MERN स्टॅक + WebSocket",
          features: "भू-स्थान API, JWT प्रमाणीकरण, WebSocket संप्रेषण आणि प्रशासक डॅशबोर्डसह रिअल-टाइम रक्तदाता-रुग्णालय व्यासपीठ",
          liveLink: "लाइव्ह प्रकल्प"
        },
        whisperoom: {
          name: "व्हिस्परूम",
          desc: "MERN स्टॅक + JWT + WebSocket",
          features: "JWT प्रमाणीकरण, WebSocket मेसेजिंग आणि एंड-टू-एंड एन्क्रिप्शनसह सुरक्षित रिअल-टाइम चॅट प्लॅटफॉर्म",
          liveLink: "लाइव्ह प्रकल्प"
        },
        readAloud: "मोठ्याने वाचा 🔊",
        stop: "थांबवा 🔇"
      },
      resume: {
        title: "रिझ्यूमे",
        subtitle: "व्यावसायिक रिझ्यूमे",
        description: "माझ्या अनुभव आणि पात्रता बद्दल अधिक जाणून घेण्यासाठी माझा व्यावसायिक रिझ्यूमे पहा किंवा डाउनलोड करा.",
        viewResume: "रिझ्यूमे पहा",
        downloadResume: "रिझ्यूमे डाउनलोड करा",
        previewTitle: "रिझ्यूमे पूर्वावलोकन"
      },
      certificates: {
        title: "प्रमाणपत्रे",
        listen: "सारांश ऐका 🔊",
        stop: "थांबवा 🔇",
        view: "प्रमाणपत्र पहा",
        download: "डाउनलोड करा",
        from: "पासून",
        nptelJava: {
          title: "NPTEL एलिट+सिल्व्हर: Java प्रोग्रामिंग",
          issuer: "NPTEL (IIT/IISc)",
          date: "स्कोअर: 85%"
        },
        nptelSoftskills: {
          title: "NPTEL एलिट: सॉफ्ट स्किल्स आणि व्यक्तिमत्व",
          issuer: "NPTEL (IIT/IISc)",
          date: "स्कोअर: 64%"
        },
        devops: {
          title: "DevOps इंटर्नशिप प्रमाणपत्र",
          issuer: "MSSquare Global",
          date: "जून 2025"
        }
      },
      achievements: {
        title: "उपलब्धी आणि प्रमाणपत्रे",
        cert1: "NPTEL एलिट+सिल्व्हर: Java प्रोग्रामिंग (स्कोअर: 85%)",
        cert2: "NPTEL एलिट: सॉफ्ट स्किल्स आणि व्यक्तिमत्व विकास (स्कोअर: 64%)",
        listenSummary: "सारांश ऐका 🔊",
        stop: "थांबवा 🔇"
      },
      responsibilities: {
        title: "जबाबदारीची पदे",
        role1: "प्रशिक्षण आणि नियुक्ती सेल समन्वयक",
        role2: "कार्यक्रम समन्वयक (ट्रेझर हंट)"
      },
      contact: {
        title: "संपर्क करा",
        name: "नाव",
        email: "ईमेल",
        message: "संदेश",
        send: "संदेश पाठवा",
        voiceInput: "व्हॉइस इनपुट वापरा 🎙️"
      },
      footer: {
        text: "React, Tailwind आणि AI सह ❤️ ने बनवले"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
