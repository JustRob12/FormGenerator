import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiReact, SiVite, SiTailwindcss } from 'react-icons/si';
import html2pdf from 'html2pdf.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Sidebar from './components/Sidebar';

const paperSizes = {
  a4: { name: 'A4', width: '210mm', height: '297mm' },
  letter: { name: 'Letter', width: '215.9mm', height: '279.4mm' },
  legal: { name: 'Legal', width: '215.9mm', height: '355.6mm' },
  a3: { name: 'A3', width: '297mm', height: '420mm' },
  a5: { name: 'A5', width: '148mm', height: '210mm' }
};

function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
      profilePicture: '',
      dateOfBirth: '',
      age: '',
      gender: '',
      civilStatus: '',
      religion: '',
      citizenship: '',
      height: '',
      weight: '',
      fatherName: '',
      motherName: '',
      achievements: [],
      hobbies: []
    },
    experience: [],
    education: [],
    skills: []
  });

  const [activeTab, setActiveTab] = useState('personal');
  const [paperSize, setPaperSize] = useState('a4');
  const [selectedLetterType, setSelectedLetterType] = useState(null);
  const [generatorType, setGeneratorType] = useState('resume'); // 'resume' or 'letter'
  const [scale, setScale] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const handleUpdateResume = (newData) => {
    setResumeData(newData);
  };

  const handleExportPDF = () => {
    setShowPreview(true);
  };

  const handleConfirmDownload = () => {
    const element = document.getElementById('pdf-preview');
    const opt = {
      margin: 0,
      filename: `${resumeData.personalInfo.fullName || 'Resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { 
        unit: 'mm', 
        format: paperSize.toUpperCase(),
        orientation: 'portrait' 
      },
      pagebreak: { mode: 'avoid-all' }
    };

    // Force layout recalculation
    element.style.width = paperSizes[paperSize].width;
    element.style.height = paperSizes[paperSize].height;
    element.style.margin = '0';
    element.style.padding = '0';

    html2pdf().set(opt).from(element).save().then(() => {
      setShowPreview(false);
      // Reset the element style
      element.style.width = '';
      element.style.height = '';
      element.style.margin = '';
      element.style.padding = '';
    });
  };

  // Calculate initial scale to fit the preview in the container
  const calculateInitialScale = () => {
    const previewContainer = document.querySelector('.preview-container');
    if (!previewContainer) return 1;

    const containerWidth = previewContainer.clientWidth;
    const containerHeight = previewContainer.clientHeight;
    const paperWidth = 210; // A4 width in mm
    const paperHeight = 297; // A4 height in mm
    
    const scaleX = (containerWidth - 40) / paperWidth;
    const scaleY = (containerHeight - 40) / paperHeight;
    
    return Math.min(scaleX, scaleY);
  };

  const tabs = ['personal', 'experience', 'education', 'skills', 'achievements'];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        {/* Generator Type Selector */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setGeneratorType('resume')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              generatorType === 'resume'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Resume Generator
          </button>
          <button
            onClick={() => setGeneratorType('letter')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              generatorType === 'letter'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Letter Generator
          </button>
        </div>

        <div className="flex">
          {/* Sidebar for Letter Generator */}
          {generatorType === 'letter' && (
            <Sidebar
              onSelectLetterType={setSelectedLetterType}
              selectedType={selectedLetterType}
            />
          )}

          {/* Main Content */}
          <div className={`flex-1 ${generatorType === 'letter' ? 'ml-4' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                {generatorType === 'resume' ? (
                  <>
                    {/* Resume Form Navigation */}
                    <div className="mb-6">
                      <nav className="flex space-x-4">
                        {tabs.map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              activeTab === tab
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                          </button>
                        ))}
                      </nav>
                    </div>
                    {/* Resume Form */}
                    <ResumeForm
                      activeTab={activeTab}
                      resumeData={resumeData}
                      onUpdateResume={setResumeData}
                    />
                  </>
                ) : (
                  <div className="text-center py-12">
                    {selectedLetterType ? (
                      <div>Letter form for {selectedLetterType} will go here</div>
                    ) : (
                      <div className="text-gray-500">
                        Select a letter type from the sidebar to begin
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Preview Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Paper Size Selector */}
                <div className="mb-4 flex items-center justify-end space-x-2">
                  <label className="text-sm font-medium text-gray-700">
                    Paper Size:
                  </label>
                  <select
                    value={paperSize}
                    onChange={(e) => setPaperSize(e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 text-sm"
                  >
                    {Object.entries(paperSizes).map(([key, size]) => (
                      <option key={key} value={key}>
                        {size.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className="flex justify-center overflow-hidden"
                  style={{ height: '842px' }}
                >
                  <TransformWrapper
                    initialScale={calculateInitialScale()}
                    minScale={0.2}
                    maxScale={2}
                    centerOnInit={true}
                    alignmentAnimation={{ disabled: true }}
                    initialPositionX={0}
                    initialPositionY={0}
                  >
                    <TransformComponent
                      wrapperStyle={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#f3f4f6',
                      }}
                      contentStyle={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingTop: '20px',
                      }}
                    >
                      <div
                        id="resume-preview"
                        style={{
                          width: paperSizes[paperSize].width,
                          height: paperSizes[paperSize].height,
                          backgroundColor: 'white',
                          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                        }}
                      >
                        {generatorType === 'resume' ? (
                          <ResumePreview resumeData={resumeData} />
                        ) : (
                          <div className="p-8">
                            {selectedLetterType ? (
                              <div>Letter preview for {selectedLetterType} will go here</div>
                            ) : (
                              <div className="text-gray-500 text-center">
                                Select a letter type to see preview
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Preview PDF</h2>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div 
              className="p-4" 
              id="pdf-preview" 
              style={{
                width: paperSizes[paperSize].width,
                height: paperSizes[paperSize].height,
                backgroundColor: 'white',
                margin: '0 auto',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
              }}
            >
              <ResumePreview resumeData={resumeData} />
            </div>
            <div className="p-4 border-t flex justify-end gap-4">
              <button
                onClick={() => setShowPreview(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDownload}
                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Developer Info Footer */}
      <div className="mt-8 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg font-semibold text-gray-900">Developed by Me_DevRob</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/roberto.prisoris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/me_robbb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com/@your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>

            {/* Technology Icons */}
            <div className="flex space-x-4 pt-2">
              <span className="text-gray-600" title="React">
                <SiReact className="w-6 h-6" />
              </span>
              <span className="text-gray-600" title="Vite">
                <SiVite className="w-6 h-6" />
              </span>
              <span className="text-gray-600" title="Tailwind CSS">
                <SiTailwindcss className="w-6 h-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
