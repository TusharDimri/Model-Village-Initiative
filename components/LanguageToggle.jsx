"use client";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check, CheckCircle } from 'lucide-react';

export default function LanguageToggle({ scrolled }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳', nativeName: 'Hindi' }
  ];

  const handleLanguageChange = async (langCode) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    setIsAnimating(true);
    setIsOpen(false);
    
    // Show toast notification
    const selectedLang = languages.find(lang => lang.code === langCode);
    setToastMessage(`Language changed to ${selectedLang?.name}`);
    setShowToast(true);
    
    // Small delay for smooth transition
    setTimeout(() => {
      i18n.changeLanguage(langCode);
      setCurrentLang(langCode);
      setIsAnimating(false);
    }, 150);

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <>
      <div className="relative">
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isAnimating}
          className={`
            group relative  cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg 
            transition-all duration-300 ease-out
            ${scrolled 
              ? 'text-gray-700 hover:text-[#277A84] hover:bg-gray-50 border border-gray-200 hover:border-[#277A84]/30' 
              : 'text-white hover:text-[#F9B233] hover:bg-white/10 border border-white/20 hover:border-[#F9B233]/50'
            }
            ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
            backdrop-blur-sm
          `}
          aria-label="Toggle language"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {/* Globe Icon with Animation */}
          <div className="relative">
            <Globe 
              size={16} 
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
            {isAnimating && (
              <div className="absolute inset-0 animate-spin">
                <div className="w-4 h-4 border-2 border-[#F9B233] border-t-transparent rounded-full"></div>
              </div>
            )}
          </div>

          {/* Language Text */}
          <span className="text-sm font-medium hidden sm:inline transition-all duration-300">
            {currentLanguage.flag} {currentLanguage.name}
          </span>
          <span className="text-sm font-medium sm:hidden transition-all duration-300">
            {currentLanguage.flag}
          </span>

          {/* Chevron with Smooth Animation */}
          <ChevronDown 
            size={14} 
            className={`transition-all duration-300 ease-out ${
              isOpen ? 'rotate-180 transform' : ''
            }`}
          />

          {/* Hover Effect */}
          <div className={`
            absolute inset-0 rounded-lg transition-all duration-300
            ${scrolled 
              ? 'bg-gradient-to-r from-[#277A84]/5 to-[#F9B233]/5 opacity-0 group-hover:opacity-100' 
              : 'bg-gradient-to-r from-white/10 to-[#F9B233]/10 opacity-0 group-hover:opacity-100'
            }
          `} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <>
            {/* Backdrop with Blur */}
            <div 
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Container */}
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden transform transition-all duration-300 ease-out animate-in slide-in-from-top-2">
              {/* Header */}
              <div className="px-4 py-3 bg-gradient-to-r from-[#277A84] to-[#F9B233] text-white">
                <h3 className="text-sm font-semibold">Select Language</h3>
                <p className="text-xs opacity-90">भाषा चुनें</p>
              </div>

              {/* Language Options */}
              <div className="py-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    disabled={isAnimating}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 text-left 
                      transition-all duration-200 ease-out
                      ${currentLang === language.code 
                        ? 'bg-[#F9B233] text-white shadow-sm' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#277A84]'
                      }
                      ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                    `}
                  >
                    {/* Flag */}
                    <span className="text-lg filter drop-shadow-sm">
                      {language.flag}
                    </span>

                    {/* Language Info */}
                    <div className="flex-1">
                      <div className="font-medium text-sm">
                        {language.name}
                      </div>
                      <div className={`text-xs ${currentLang === language.code ? 'text-white/80' : 'text-gray-500'}`}>
                        {language.nativeName}
                      </div>
                    </div>

                    {/* Check Icon for Selected Language */}
                    {currentLang === language.code && (
                      <Check 
                        size={16} 
                        className="text-white animate-in slide-in-from-right-2 duration-200"
                      />
                    )}

                    {/* Hover Effect */}
                    {currentLang !== language.code && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#277A84]/5 to-[#F9B233]/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                    )}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Language preference saved automatically
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-top-2">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 min-w-64">
            <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{toastMessage}</p>
              <p className="text-xs text-gray-500">भाषा बदल दी गई</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
