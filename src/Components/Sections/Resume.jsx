import React, { useState } from 'react';
import { Download, FileText, Eye, EyeOff } from 'lucide-react';

const Resume = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadCV = () => {
    // For files in public folder, use direct path
    const link = document.createElement('a');
    link.href = '/NeerajSinghNegiResume.pdf';
    link.download = 'Neeraj_Singh_Negi_Resume.pdf';
    link.click();
  };

  const toggleResume = () => {
    if (!isResumeOpen) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsResumeOpen(true);
      }, 500);
    } else {
      setIsResumeOpen(false);
    }
  };

  return (
    <section id="resume" className="py-20 bg-transparent dark:bg-gray-900 transition-colors duration-300 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Download my complete resume or view it below to learn more about my experience and qualifications.
          </p>
        </div>

        {/* Download Button */}
        <div className="text-center mb-12">
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
          >
            <Download size={24} />
            Download CV
          </button>
        </div>

        {/* View Resume Button */}
        <div className="text-center mb-8">
          <button
            onClick={toggleResume}
            disabled={isLoading}
            className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 font-medium"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                Loading...
              </>
            ) : (
              <>
                {isResumeOpen ? <EyeOff size={20} /> : <Eye size={20} />}
                {isResumeOpen ? 'Hide Resume' : 'View Resume'}
              </>
            )}
          </button>
        </div>

        {/* Resume Display Container */}
        <div className="flex justify-center">
          <div
            className={`relative transition-all duration-1000 ease-out transform ${
              isResumeOpen
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
            }`}
            style={{
              maxHeight: isResumeOpen ? '1200px' : '0px',
              overflow: 'hidden'
            }}
          >
            {/* Resume Paper Effect */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Paper Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="text-blue-600 dark:text-blue-400" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Neeraj Singh Negi - Resume
                    </h3>
                  </div>
                  <button
                    onClick={handleDownloadCV}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    title="Download Resume"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Container */}
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 min-h-[800px] flex items-center justify-center">
                    {/* PDF iframe display */}
                    <iframe
                      src="/NeerajSinghNegiResume.pdf"
                      width="100%"
                      height="800"
                      className="border border-gray-300 dark:border-gray-600 rounded-lg"
                      title="Resume PDF"
                      onError={(e) => {
                        console.error('PDF failed to load');
                        e.target.style.display = 'none';
                      }}
                    />
                    
                    {/* Fallback message if PDF doesn't load */}
                    <div className="text-center mt-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        If the PDF doesn't display above, please use the download button to view the resume.
                      </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;