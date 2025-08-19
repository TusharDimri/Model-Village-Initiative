import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.initiatives': 'Initiatives',
      'nav.conference': 'Conference',
      'nav.contact': 'Contact',
      'nav.register': 'Register',
      
      // Hero Section
      'hero.title': 'Join us on 28-29 November 2025 in Dehradun as we unite investors, technology partners, and village leaders to create sustainable model villages based on a Green Circular Economy',
      'hero.subtitle': 'Together We Can and We Will transform Uttarakhand\'s rural landscape',
      'hero.description': 'Empowering villages with sustainable development solutions and digital transformation.',
      'hero.cta': 'Register Now',
      
      // About Section
      'about.title': 'About Our Initiative',
      'about.description': 'We are dedicated to creating model villages that serve as beacons of sustainable development and innovation.',
      
      // Why Section
      'why.title': 'Why Uttarakhand needs',
      'why.highlight': 'Model Villages?',
      'why.description1': 'Uttarakhand\'s villages face unprecedented challenges that demand innovative solutions. Out-migration has left 734 villages virtually abandoned, with more than 10% of settlements in Pauri, Tehri, and Almora districts experiencing exodus-level migration since 2011.',
      'why.description2': 'Healthcare access remains critical — over 80% of rural settlements have fewer than 500 residents, with medical facilities often unreachable due to landslides and poor infrastructure. Meanwhile, tourist numbers surged 30% between 2019-2022, putting immense pressure on fragile ecosystems.',
      
      // Initiatives Section
      'initiatives.title': 'Our Initiatives',
      'initiatives.digital': 'Digital Transformation',
      'initiatives.sustainable': 'Sustainable Development',
      'initiatives.education': 'Education & Skills',
      'initiatives.healthcare': 'Healthcare Access',
      
      // Conference Section
      'conference.title': 'Annual Conference',
      'conference.description': 'Join us for the annual Modal Villages Conference where we discuss the future of rural development.',
      'conference.register': 'Register Now',
      'conference.details.title': 'Conference',
      'conference.details.subtitle': 'Details & Logistics',
      'conference.venue.title': 'Venue',
      'conference.venue.description': 'The conference will be held in Dehradun, Uttarakhand – the gateway to the Himalayas and a strategic location accessible to both urban stakeholders and rural participants.',
      'conference.dates.title': 'Dates',
      'conference.dates.description': 'November 28–29, 2025',
      'conference.accommodation.title': 'Accommodation',
      'conference.accommodation.description': 'Partner hotels offering special rates for conference attendees. Extended stay packages available for those wishing to explore Uttarakhand\'s lesser-known attractions, supporting our balanced tourism vision.',
      
      // Register Section
      'register.title': 'Registration',
      'register.participation': 'Participation',
      
      // Themes Section
      'themes.title': 'Conference Themes:',
      'themes.subtitle': 'Building Sustainable Solutions',
      'themes.migration.title': 'Migration & Employment',
      'themes.migration.description': 'Unemployment drives more than half of Uttarakhand\'s rural exodus. We\'ll explore innovative policies to create local jobs in green sectors, strengthening village economies and reversing the migration trend through sustainable enterprise models.',
      'themes.healthcare.title': 'Healthcare Access',
      'themes.healthcare.description': 'Remote villages often lack basic medical services. Our conference presents public–private partnership models bringing healthcare closer to isolated communities through telemedicine hubs, mobile clinics, and training local health workers.',
      'themes.construction.title': 'Earthquake-Resilient Construction',
      'themes.construction.description': 'Traditional Koti Banal and Kath-Khuni architectures feature raised platforms and wooden beams that provide superior stability during earthquakes. We\'ll showcase how these ancient techniques can be integrated with modern materials.',
      'themes.tourism.title': 'Sustainable Tourism',
      'themes.tourism.description': 'By distributing visitors across new destinations, we can reduce overcrowding while improving revenues. Discover strategies for marketing authentic homestays, cultural experiences, and eco-tourism opportunities that benefit local communities.',
      'register.speakers.title': 'Call for Speakers',
      'register.speakers.description': 'Submit your topic and presentation paper through our online portal. We\'re seeking innovative solutions in sustainable architecture, renewable energy, rural entrepreneurship, and digital connectivity for remote areas.',
      'register.partners.title': 'Technology Partners',
      'register.partners.description': 'Showcase your solutions that address Uttarakhand\'s unique challenges. Opportunities for demonstrations, exhibitions, and direct connections with village implementation teams and investors.',
      'register.investors.title': 'Investors & Financiers',
      'register.investors.description': 'Discover high-impact investment opportunities with strong ESG credentials. Connect with pre-vetted projects and explore co-financing options with government schemes and development funds.',
      'register.joinUs': 'Join Us',
      'register.whatsappMessage': 'Hello, I\'m interested in joining your initiative and event. Please share more details.',
      
      // Ideas Section
      'ideas.title': 'Innovative',
      'ideas.subtitle': 'Green Technologies',
      'ideas.bioenergy.title': 'Bio-Energy & Fire Mitigation',
      'ideas.bioenergy.description': 'Projects focusing on compressed biogas (CBG), biodiesel, and bio-char offer tremendous potential. Research shows biochar improves soil fertility, reduces chemical fertilizer needs, and aids waste management while generating clean bioenergy.',
      'ideas.greenit.title': 'Green IT Infrastructure',
      'ideas.greenit.description': 'Data centers in Uttarakhand\'s cooler regions can utilize free cooling from mountain air, significantly cutting energy costs and emissions. Dehradun and nearby colder areas present ideal opportunities for sustainable digital infrastructure development.',
      'ideas.agro.title': 'Agro & Horticulture Value Addition',
      'ideas.agro.description': 'Uttarakhand\'s potential for exporting high-value Himalayan crops, flowers, grains, and spices remains largely untapped. We\'ll explore cold-chain infrastructure, processing facilities, and agri-tourism models that can dramatically boost rural incomes.',
      
      // Contact Section
      'contact.title': 'Get In Touch',
      'contact.support': 'Support',
      'contact.getInTouch': 'Get in Touch',
      'contact.description': 'Have questions about the conference or how to get involved? Our team is ready to assist you:',
      'contact.callNow': 'Call Now',
      'contact.quote': 'Our villages aren\'t just places on a map – they\'re the heart of Uttarakhand\'s identity. This conference represents our commitment to preserving that heart while giving it the strength to thrive in the modern world.',
      'contact.quoteAuthor': 'Village Pradhan, Pauri Garhwal',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      
      // Stakeholders Section
      'stakeholders.title': 'Key Stakeholders:',
      'stakeholders.subtitle': 'Building Partnerships for Success',
      'stakeholders.communities.title': 'Village Pradhans & Communities',
      'stakeholders.communities.description': 'Elected village heads and community members are the heart of this initiative. Their leadership ensures projects preserve local culture, environment, and traditional knowledge while meeting actual community needs.',
      'stakeholders.investors.title': 'ESG-Focused Investors',
      'stakeholders.investors.description': 'Investment opportunities span sustainable infrastructure, renewable energy, agri–processing units, IT facilities, and tourism projects – all offering competitive returns while creating lasting social and environmental impact.',
      'stakeholders.tech.title': 'Technology Partners',
      'stakeholders.tech.description': 'Tech companies will provide IoT solutions for agriculture, modular data–center designs, telemedicine platforms, and disaster–resilient construction materials adapted to Uttarakhand\'s unique geography.',
      
      // Footer
      'footer.copyright': '© 2024 Modal Villages Initiative. All rights reserved.',
      'footer.description': 'Transforming Uttarakhand\'s rural landscape through sustainable development and green circular economy initiatives.',
      'footer.quickLinks': 'Quick Links',
      'footer.email': 'Email',
      'footer.phone': 'Phone',
      'footer.address': 'Address: Conference Secretariat, Dehradun, Uttarakhand',
      'footer.joinUs': 'Join Us',
      'footer.joinDescription': 'Join us in shaping our initiative in a way that will transform Uttarakhand\'s rural landscape.',
      
      // Agenda Section
      'agenda.title': 'Conference Agenda:',
      'agenda.subtitle': 'Two Days of Transformation',
      'agenda.day1.title': 'Day 1: Vision, Workshops & Collaboration',
      'agenda.day1.date': 'November 28, 2025',
      'agenda.day1.description': 'The inauguration ceremony will present our vision of Model Villages based on the Green Circular Economy, followed by keynote addresses from policy leaders and sustainable development experts. Investors and technology partners will be introduced, leading into hands-on workshops covering earthquake-proof construction, sustainable tourism models, and bio-energy solutions. Breakout sessions will facilitate collaborative opportunities, alongside technology showcases of IT and data-center solutions.',
      'agenda.day2.title': 'Day 2: Interactive Sessions & Commitment',
      'agenda.day2.date': 'November 29, 2025',
      'agenda.day2.description': 'Focused dialogues between village leaders, investors, and technology providers will aim to develop concrete implementation plans. Panel discussions will highlight successful rural transformation case studies from around the world. The conference will conclude with a plenary session on implementing the Green Circular Economy, a formal signing ceremony to onboard 50 villages and establish village-level limited companies, and finalization of investment commitments and technology partnership agreements.',
      
      // Common
      'common.learnMore': 'Learn More',
      'common.readMore': 'Read More',
      'common.submit': 'Submit',
      'common.cancel': 'Cancel',
      'common.save': 'Save',
      'common.edit': 'Edit',
      'common.delete': 'Delete',
      'common.back': 'Back',
      'common.next': 'Next',
      'common.previous': 'Previous',
    }
  },
  hi: {
    translation: {
      // Navigation
      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.initiatives': 'पहल',
      'nav.conference': 'सम्मेलन',
      'nav.contact': 'संपर्क',
      'nav.register': 'पंजीकरण',
      
      // Hero Section
      'hero.title': '28-29 नवंबर 2025 को देहरादून में हमारे साथ जुड़ें जहां हम निवेशकों, प्रौद्योगिकी भागीदारों और गांव के नेताओं को एकजुट करके हरित परिपत्र अर्थव्यवस्था के आधार पर टिकाऊ मॉडल गांव बनाने के लिए एकजुट करते हैं',
      'hero.subtitle': 'हम साथ मिलकर कर सकते हैं और करेंगे उत्तराखंड के ग्रामीण परिदृश्य का परिवर्तन',
      'hero.description': 'टिकाऊ विकास समाधान और डिजिटल परिवर्तन के साथ गांवों को सशक्त बनाना।',
      'hero.cta': 'अभी पंजीकरण करें',
      
      // About Section
      'about.title': 'हमारी पहल के बारे में',
      'about.description': 'हम टिकाऊ विकास और नवाचार के प्रतीक के रूप में मॉडल गांव बनाने के लिए समर्पित हैं।',
      
      // Why Section
      'why.title': 'उत्तराखंड को क्यों चाहिए',
      'why.highlight': 'मॉडल गांव?',
      'why.description1': 'उत्तराखंड के गांव अभूतपूर्व चुनौतियों का सामना कर रहे हैं जो नवीन समाधानों की मांग करते हैं। बाहरी प्रवास ने 734 गांवों को लगभग छोड़ दिया है, जिसमें पौड़ी, टिहरी और अल्मोड़ा जिलों के 10% से अधिक बस्तियों ने 2011 के बाद से पलायन-स्तर के प्रवास का अनुभव किया है।',
      'why.description2': 'स्वास्थ्य सेवा पहुंच महत्वपूर्ण बनी हुई है — 80% से अधिक ग्रामीण बस्तियों में 500 से कम निवासी हैं, जिनमें चिकित्सा सुविधाएं अक्सर भूस्खलन और खराब बुनियादी ढांचे के कारण पहुंच से बाहर हैं। इस बीच, पर्यटकों की संख्या 2019-2022 के बीच 30% बढ़ गई, जिससे नाजुक पारिस्थितिक तंत्र पर भारी दबाव पड़ रहा है।',
      
      // Initiatives Section
      'initiatives.title': 'हमारी पहल',
      'initiatives.digital': 'डिजिटल परिवर्तन',
      'initiatives.sustainable': 'टिकाऊ विकास',
      'initiatives.education': 'शिक्षा और कौशल',
      'initiatives.healthcare': 'स्वास्थ्य सेवा पहुंच',
      
      // Conference Section
      'conference.title': 'वार्षिक सम्मेलन',
      'conference.description': 'वार्षिक मॉडल गांव सम्मेलन में हमारे साथ जुड़ें जहां हम ग्रामीण विकास के भविष्य पर चर्चा करते हैं।',
      'conference.register': 'अभी पंजीकरण करें',
      'conference.details.title': 'सम्मेलन',
      'conference.details.subtitle': 'विवरण और लॉजिस्टिक्स',
      'conference.venue.title': 'स्थान',
      'conference.venue.description': 'सम्मेलन देहरादून, उत्तराखंड में आयोजित किया जाएगा – हिमालय का प्रवेश द्वार और एक रणनीतिक स्थान जो शहरी हितधारकों और ग्रामीण प्रतिभागियों दोनों के लिए सुलभ है।',
      'conference.dates.title': 'तिथियां',
      'conference.dates.description': '28-29 नवंबर, 2025',
      'conference.accommodation.title': 'आवास',
      'conference.accommodation.description': 'सम्मेलन के प्रतिभागियों के लिए विशेष दरों पर साझेदार होटल। उत्तराखंड के कम ज्ञात आकर्षणों की खोज करना चाहने वालों के लिए विस्तारित प्रवास पैकेज उपलब्ध हैं, जो हमारे संतुलित पर्यटन दृष्टि का समर्थन करते हैं।',
      
      // Register Section
      'register.title': 'पंजीकरण',
      'register.participation': 'भागीदारी',
      
      // Themes Section
      'themes.title': 'सम्मेलन के विषय:',
      'themes.subtitle': 'टिकाऊ समाधानों का निर्माण',
      'themes.migration.title': 'प्रवास और रोजगार',
      'themes.migration.description': 'बेरोजगारी उत्तराखंड के ग्रामीण पलायन के आधे से अधिक को प्रेरित करती है। हम हरित क्षेत्रों में स्थानीय नौकरियां बनाने के लिए नवीन नीतियों का अन्वेषण करेंगे, गांव की अर्थव्यवस्थाओं को मजबूत करेंगे और टिकाऊ उद्यम मॉडलों के माध्यम से प्रवास प्रवृत्ति को उलट देंगे।',
      'themes.healthcare.title': 'स्वास्थ्य सेवा पहुंच',
      'themes.healthcare.description': 'दूरस्थ गांवों में अक्सर बुनियादी चिकित्सा सेवाओं की कमी होती है। हमारा सम्मेलन सार्वजनिक-निजी साझेदारी मॉडल प्रस्तुत करता है जो टेलीमेडिसिन हब, मोबाइल क्लीनिक और स्थानीय स्वास्थ्य कर्मियों के प्रशिक्षण के माध्यम से अलग-थलग समुदायों के करीब स्वास्थ्य सेवा लाते हैं।',
      'themes.construction.title': 'भूकंप-प्रतिरोधी निर्माण',
      'themes.construction.description': 'पारंपरिक कोटी बनाल और काठ-खुनी वास्तुकला में ऊंचे प्लेटफॉर्म और लकड़ी के बीम होते हैं जो भूकंप के दौरान श्रेष्ठ स्थिरता प्रदान करते हैं। हम दिखाएंगे कि कैसे इन प्राचीन तकनीकों को आधुनिक सामग्रियों के साथ एकीकृत किया जा सकता है।',
      'themes.tourism.title': 'टिकाऊ पर्यटन',
      'themes.tourism.description': 'नए स्थानों में आगंतुकों को वितरित करके, हम राजस्व में सुधार करते हुए भीड़ को कम कर सकते हैं। प्रामाणिक होमस्टे, सांस्कृतिक अनुभव और पारिस्थितिक पर्यटन के अवसरों के विपणन के लिए रणनीतियों की खोज करें जो स्थानीय समुदायों को लाभ पहुंचाते हैं।',
      'register.speakers.title': 'वक्ताओं के लिए आमंत्रण',
      'register.speakers.description': 'हमारे ऑनलाइन पोर्टल के माध्यम से अपना विषय और प्रस्तुति पत्र जमा करें। हम टिकाऊ वास्तुकला, नवीकरणीय ऊर्जा, ग्रामीण उद्यमिता और दूरस्थ क्षेत्रों के लिए डिजिटल कनेक्टिविटी में नवीन समाधानों की तलाश कर रहे हैं।',
      'register.partners.title': 'प्रौद्योगिकी भागीदार',
      'register.partners.description': 'उत्तराखंड की अनूठी चुनौतियों को संबोधित करने वाले अपने समाधानों का प्रदर्शन करें। प्रदर्शन, प्रदर्शनी और गांव के कार्यान्वयन टीमों और निवेशकों के साथ सीधे संबंधों के अवसर।',
      'register.investors.title': 'निवेशक और वित्तीय संस्थान',
      'register.investors.description': 'मजबूत ESG प्रमाणपत्रों के साथ उच्च प्रभाव वाले निवेश अवसरों की खोज करें। पूर्व-सत्यापित परियोजनाओं से जुड़ें और सरकारी योजनाओं और विकास कोषों के साथ सह-वित्तपोषण विकल्पों का अन्वेषण करें।',
      'register.joinUs': 'हमारे साथ जुड़ें',
      'register.whatsappMessage': 'नमस्ते, मैं आपकी पहल और कार्यक्रम में शामिल होने में रुचि रखता हूं। कृपया अधिक विवरण साझा करें।',
      
      // Ideas Section
      'ideas.title': 'नवीन',
      'ideas.subtitle': 'हरित प्रौद्योगिकियां',
      'ideas.bioenergy.title': 'बायो-एनर्जी और अग्नि शमन',
      'ideas.bioenergy.description': 'संपीड़ित बायोगैस (CBG), बायोडीजल और बायो-चार पर केंद्रित परियोजनाएं जबरदस्त क्षमता प्रदान करती हैं। शोध से पता चलता है कि बायो-चार मिट्टी की उर्वरता में सुधार करता है, रासायनिक उर्वरक की आवश्यकता को कम करता है, और स्वच्छ बायोएनर्जी उत्पन्न करते हुए अपशिष्ट प्रबंधन में सहायता करता है।',
      'ideas.greenit.title': 'हरित आईटी बुनियादी ढांचा',
      'ideas.greenit.description': 'उत्तराखंड के ठंडे क्षेत्रों में डेटा सेंटर पहाड़ी हवा से मुफ्त कूलिंग का उपयोग कर सकते हैं, जो ऊर्जा लागत और उत्सर्जन को काफी कम करते हैं। देहरादून और आसपास के ठंडे क्षेत्र टिकाऊ डिजिटल बुनियादी ढांचे के विकास के लिए आदर्श अवसर प्रस्तुत करते हैं।',
      'ideas.agro.title': 'कृषि और बागवानी मूल्य वर्धन',
      'ideas.agro.description': 'उच्च मूल्य वाली हिमालयी फसलों, फूलों, अनाज और मसालों के निर्यात के लिए उत्तराखंड की क्षमता काफी हद तक अप्रयुक्त बनी हुई है। हम कोल्ड-चेन बुनियादी ढांचे, प्रसंस्करण सुविधाओं और कृषि-पर्यटन मॉडलों का अन्वेषण करेंगे जो ग्रामीण आय को नाटकीय रूप से बढ़ा सकते हैं।',
      
      // Contact Section
      'contact.title': 'संपर्क करें',
      'contact.support': 'सहायता',
      'contact.getInTouch': 'संपर्क में आएं',
      'contact.description': 'सम्मेलन या इसमें शामिल होने के बारे में प्रश्न हैं? हमारी टीम आपकी सहायता के लिए तैयार है:',
      'contact.callNow': 'अभी कॉल करें',
      'contact.quote': 'हमारे गांव सिर्फ नक्शे पर जगहें नहीं हैं – वे उत्तराखंड की पहचान का दिल हैं। यह सम्मेलन उस दिल को संरक्षित करने के साथ-साथ आधुनिक दुनिया में फलने-फूलने की ताकत देने के हमारे प्रतिबद्धता का प्रतिनिधित्व करता है।',
      'contact.quoteAuthor': 'ग्राम प्रधान, पौड़ी गढ़वाल',
      'contact.name': 'नाम',
      'contact.email': 'ईमेल',
      'contact.message': 'संदेश',
      'contact.send': 'संदेश भेजें',
      
      // Stakeholders Section
      'stakeholders.title': 'मुख्य हितधारक:',
      'stakeholders.subtitle': 'सफलता के लिए साझेदारी का निर्माण',
      'stakeholders.communities.title': 'ग्राम प्रधान और समुदाय',
      'stakeholders.communities.description': 'निर्वाचित ग्राम प्रमुख और समुदाय के सदस्य इस पहल का दिल हैं। उनका नेतृत्व सुनिश्चित करता है कि परियोजनाएं स्थानीय संस्कृति, पर्यावरण और पारंपरिक ज्ञान को संरक्षित करते हुए वास्तविक समुदाय की जरूरतों को पूरा करें।',
      'stakeholders.investors.title': 'ईएसजी-केंद्रित निवेशक',
      'stakeholders.investors.description': 'निवेश के अवसर टिकाऊ बुनियादी ढांचे, नवीकरणीय ऊर्जा, कृषि-प्रसंस्करण इकाइयों, आईटी सुविधाओं और पर्यटन परियोजनाओं में फैले हुए हैं – सभी प्रतिस्पर्धी रिटर्न प्रदान करते हुए स्थायी सामाजिक और पर्यावरणीय प्रभाव बनाते हैं।',
      'stakeholders.tech.title': 'प्रौद्योगिकी भागीदार',
      'stakeholders.tech.description': 'तकनीकी कंपनियां कृषि के लिए IoT समाधान, मॉड्यूलर डेटा-सेंटर डिजाइन, टेलीमेडिसिन प्लेटफॉर्म और उत्तराखंड की अनूठी भूगोल के अनुकूल आपदा-प्रतिरोधी निर्माण सामग्री प्रदान करेंगी।',
      
      // Footer
      'footer.copyright': '© 2024 मॉडल गांव पहल। सर्वाधिकार सुरक्षित।',
      'footer.description': 'टिकाऊ विकास और हरित परिपत्र अर्थव्यवस्था पहलों के माध्यम से उत्तराखंड के ग्रामीण परिदृश्य का परिवर्तन।',
      'footer.quickLinks': 'त्वरित लिंक',
      'footer.email': 'ईमेल',
      'footer.phone': 'फोन',
      'footer.address': 'पता: सम्मेलन सचिवालय, देहरादून, उत्तराखंड',
      'footer.joinUs': 'हमारे साथ जुड़ें',
      'footer.joinDescription': 'हमारे साथ जुड़ें और हमारी पहल को इस तरह आकार दें जो उत्तराखंड के ग्रामीण परिदृश्य को बदल देगी।',
      
      // Agenda Section
      'agenda.title': 'सम्मेलन कार्यक्रम:',
      'agenda.subtitle': 'परिवर्तन के दो दिन',
      'agenda.day1.title': 'दिन 1: दृष्टि, कार्यशालाएं और सहयोग',
      'agenda.day1.date': '28 नवंबर, 2025',
      'agenda.day1.description': 'उद्घाटन समारोह हरित परिपत्र अर्थव्यवस्था के आधार पर मॉडल गांवों की हमारी दृष्टि प्रस्तुत करेगा, इसके बाद नीति नेताओं और टिकाऊ विकास विशेषज्ञों के मुख्य भाषण होंगे। निवेशकों और प्रौद्योगिकी भागीदारों का परिचय होगा, जिससे भूकंप-प्रतिरोधी निर्माण, टिकाऊ पर्यटन मॉडल और बायो-एनर्जी समाधानों को कवर करने वाले हाथों-हाथ कार्यशालाएं होंगी। ब्रेकआउट सत्र सहयोगी अवसरों की सुविधा प्रदान करेंगे, साथ ही आईटी और डेटा-सेंटर समाधानों के प्रौद्योगिकी प्रदर्शन होंगे।',
      'agenda.day2.title': 'दिन 2: इंटरैक्टिव सत्र और प्रतिबद्धता',
      'agenda.day2.date': '29 नवंबर, 2025',
      'agenda.day2.description': 'ग्राम नेताओं, निवेशकों और प्रौद्योगिकी प्रदाताओं के बीच केंद्रित संवाद ठोस कार्यान्वयन योजनाओं को विकसित करने का लक्ष्य रखेंगे। पैनल चर्चाएं दुनिया भर से सफल ग्रामीण परिवर्तन के मामले अध्ययनों को उजागर करेंगी। सम्मेलन हरित परिपत्र अर्थव्यवस्था को लागू करने पर एक पूर्ण सत्र, 50 गांवों को शामिल करने और ग्राम-स्तरीय सीमित कंपनियों की स्थापना के लिए एक औपचारिक हस्ताक्षर समारोह, और निवेश प्रतिबद्धताओं और प्रौद्योगिकी साझेदारी समझौतों के अंतिम रूप के साथ समाप्त होगा।',
      
      // Common
      'common.learnMore': 'और जानें',
      'common.readMore': 'और पढ़ें',
      'common.submit': 'सबमिट करें',
      'common.cancel': 'रद्द करें',
      'common.save': 'सहेजें',
      'common.edit': 'संपादित करें',
      'common.delete': 'हटाएं',
      'common.back': 'वापस',
      'common.next': 'अगला',
      'common.previous': 'पिछला',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
