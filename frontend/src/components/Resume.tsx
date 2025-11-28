import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Resume = () => {
  const { t } = useTranslation();
  const [showPreview, setShowPreview] = useState(false);
  

  // Google Drive resume link
  const resumeDriveLink = 'https://drive.google.com/file/d/1L0YEzXmrcLhavuUc83w3ZPk6LApBGa1P/view?usp=drivesdk';
  const resumeFileId = '1L0YEzXmrcLhavuUc83w3ZPk6LApBGa1P';
  
  // For preview in iframe (Google Drive preview format)
  const resumePreviewUrl = `https://drive.google.com/file/d/${resumeFileId}/preview`;
  
  // For direct download - using alternative format that works better
  const resumeDownloadUrl = `https://drive.google.com/uc?id=${resumeFileId}&export=download`;

  const handleView = () => {
    // Open in new tab
    window.open(resumeDriveLink, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    // Open Google Drive link - users can download from there
    // This is the most reliable method that works regardless of file permissions
    // The download button in Google Drive will be available
    window.open(resumeDriveLink, '_blank', 'noopener,noreferrer');
    
    // Also try direct download as a secondary attempt (works if file is publicly accessible)
    // This will attempt to download directly if permissions allow
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = resumeDownloadUrl;
      link.download = 'Anushka_Dussa_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (link.parentNode) {
          document.body.removeChild(link);
        }
      }, 100);
    }, 100);

  };

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground text-glow"
        >
          {t('resume.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 max-w-2xl mx-auto"
        >
          <div className="flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <FileText size={40} className="text-primary-foreground" />
                  </div>
            
            <h3 className="text-2xl font-bold text-foreground">{t('resume.subtitle')}</h3>
            <p className="text-muted-foreground text-center">
              {t('resume.description')}
            </p>

            <div className="flex gap-4 flex-wrap justify-center mt-4">
              <Button
                size="lg"

                onClick={handleView}

                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/50"
              >
                <Eye size={20} className="mr-2" />
                {t('resume.viewResume')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownload}
                className="border-2 hover:bg-primary/10 transition-all hover:shadow-lg hover:shadow-accent/50"
                style={{ borderColor: 'hsl(var(--primary))' }}
              >
                <Download size={20} className="mr-2" />
                {t('resume.downloadResume')}
              </Button>
            </div>
          </div>
        </motion.div>

        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-4xl h-[80vh] glass">
            <DialogHeader>
              <DialogTitle className="text-glow">{t('resume.previewTitle')}</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-hidden rounded-lg">
              <iframe

                src={resumePreviewUrl}

                className="w-full h-full border-0"
                title="Resume Preview"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Resume;
