/**
 * ArchitectAny AAi - Multi-Language Translation Service
 * Supports English (en-IN), Tamil (ta-IN), Hindi (hi-IN), Telugu (te-IN), Kannada (kn-IN), Malayalam (ml-IN)
 */

export interface TranslationDictionary {
  [key: string]: {
    [langCode: string]: string;
  };
}

export const TRANSLATIONS: TranslationDictionary = {
  // Brand & Header
  app_name: {
    'en-IN': 'ArchitectAny AAi',
    'ta-IN': 'ஆர்க்கிடெக்ட் எனி ஏஏஐ',
    'hi-IN': 'आर्किटेक्ट एनी एएआई',
    'te-IN': 'ఆర్కిటెక్ట్ ఎనీ ఏఏఐ',
    'kn-IN': 'ಆರ್ಕಿಟೆಕ್ಟ್ ಎನಿ ಎಎಐ',
    'ml-IN': 'ആർക്കിടെക്റ്റ് എനി എഎഐ',
  },
  app_tagline: {
    'en-IN': 'One Platform. Infinite Solutions.',
    'ta-IN': 'ஒரே தளம். எல்லையற்ற தீர்வுகள்.',
    'hi-IN': 'एक मंच। अनंत समाधान।',
    'te-IN': 'ఒకే వేదిక. అనంత పరిష్కారాలు.',
    'kn-IN': 'ಒಂದೇ ವೇದಿಕೆ. ಅನಂತ ಪರಿಹಾರಗಳು.',
    'ml-IN': 'ഒരു വേദി. അനന്തമായ പരിഹാരങ്ങൾ.',
  },
  search_placeholder: {
    'en-IN': "Ask anything... (e.g., 'Catering in Coimbatore', 'Cold storage setup', 'Solar farm')",
    'ta-IN': "எதையும் கேளுங்கள்... (எ.கா. 'கோயம்புத்தூரில் கேட்டரிங்', 'குளிர்சாதன கிடங்கு அமைப்பு')",
    'hi-IN': "कुछ भी पूछें... (उदा., 'कोयंबटूर में खानपान', 'कोल्ड स्टोरेज सेटअप', 'सोलर फार्म')",
    'te-IN': "ఏదైనా అడగండి... (ఉదా., 'కోయంబత్తూరులో క్యాటరింగ్', 'కోల్డ్ స్టోరేజ్ సెటప్')",
    'kn-IN': "ಏನನ್ನಾದರೂ ಕೇಳಿ... (ಉದಾ., 'ಕೊಯಮತ್ತೂರಿನಲ್ಲಿ ಕ್ಯಾಟರಿಂಗ್', 'ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್')",
    'ml-IN': "എന്തും ചോദിക്കുക... (ഉദാ., 'കോയമ്പത്തൂരിൽ കാറ്ററിംഗ്', 'കോൾഡ് സ്റ്റോറേജ്')",
  },
  find_location: {
    'en-IN': 'Find Location',
    'ta-IN': 'இருப்பிடத்தைக் கண்டுபிடி',
    'hi-IN': 'स्थान खोजें',
    'te-IN': 'స్థానాన్ని కనుగొనండి',
    'kn-IN': 'ಸ್ಥಳವನ್ನು ಹುಡುಕಿ',
    'ml-IN': 'ലൊക്കേഷൻ കണ്ടെത്തുക',
  },
  near_me: {
    'en-IN': 'Near Me',
    'ta-IN': 'என் அருகில்',
    'hi-IN': 'मेरे पास',
    'te-IN': 'నా దగ్గర',
    'kn-IN': 'ನನ್ನ ಹತ್ತಿರ',
    'ml-IN': 'എന്റെ അടുത്ത്',
  },
  use_current_location: {
    'en-IN': 'Use My Current Location (Near Me)',
    'ta-IN': 'என் தற்போதைய இருப்பிடத்தைப் பயன்படுத்து (அருகில்)',
    'hi-IN': 'मेरे वर्तमान स्थान का उपयोग करें (मेरे पास)',
    'te-IN': 'నా ప్రస్తుత స్థానాన్ని ఉపయోగించండి (నా దగ్గర)',
    'kn-IN': 'ನನ್ನ ಪ್ರಸ್ತುತ ಸ್ಥಳವನ್ನು ಬಳಸಿ (ನನ್ನ ಹತ್ತಿರ)',
    'ml-IN': 'എന്റെ നിലവിലെ ലൊക്കേഷൻ ഉപയോഗിക്കുക (അടുത്ത്)',
  },
  resolving: {
    'en-IN': 'Resolving...',
    'ta-IN': 'கண்டுபிடிக்கிறது...',
    'hi-IN': 'खोज रहा है...',
    'te-IN': 'పరిష్కరిస్తోంది...',
    'kn-IN': 'ಹುಡುಕಲಾಗುತ್ತಿದೆ...',
    'ml-IN': 'കണ്ടെത്തുന്നു...',
  },
  resolve: {
    'en-IN': 'Resolve',
    'ta-IN': 'தேடு',
    'hi-IN': 'खोजें',
    'te-IN': 'శోధించండి',
    'kn-IN': 'ಹುಡುಕಿ',
    'ml-IN': 'തിരയുക',
  },
  view_spatial_map: {
    'en-IN': 'View Spatial Map Layer',
    'ta-IN': 'இடஞ்சார்ந்த வரைபட அடுக்கைக் காண்க',
    'hi-IN': 'स्थानिक मानचित्र परत देखें',
    'te-IN': 'స్పేషియల్ మ్యాప్ లేయర్ చూడండి',
    'kn-IN': 'ಪ್ರಾದೇಶಿಕ ನಕ್ಷೆ ಲೇಯರ್ ವೀಕ್ಷಿಸಿ',
    'ml-IN': 'സ്പേഷ്യൽ മാപ്പ് ലെയർ കാണുക',
  },
  spatial_service_layer: {
    'en-IN': 'ArchitectAny Spatial Service Layer',
    'ta-IN': 'ஆர்க்கிடெக்ட் எனி இடஞ்சார்ந்த சேவை அடுக்கு',
    'hi-IN': 'आर्किटेक्ट एनी स्थानिक सेवा परत',
    'te-IN': 'ఆర్కిటెక్ట్ ఎనీ స్పేషియల్ సర్వీస్ లేయర్',
    'kn-IN': 'ಆರ್ಕಿಟೆಕ್ಟ್ ಎನಿ ಪ್ರಾದೇಶಿಕ ಸೇವಾ ಲೇಯರ್',
    'ml-IN': 'ആർക്കിടെക്റ്റ് എനി സ്പേഷ്യൽ സർവീസ് ലെയർ',
  },
  live_indian_gis: {
    'en-IN': 'Live Indian GIS',
    'ta-IN': 'நேரடி இந்திய ஜிஐஎஸ்',
    'hi-IN': 'लाइव भारतीय जीआईएस',
    'te-IN': 'లైవ్ ఇండియన్ జిఐఎస్',
    'kn-IN': 'ಲೈವ್ ಭಾರತೀಯ ಜಿಐಎಸ್',
    'ml-IN': 'തത്സമയ ഇന്ത്യൻ ജിഐഎസ്',
  },
  india_post_osm_resolver: {
    'en-IN': 'Direct India Post API & OpenStreetMap GeoData Resolver',
    'ta-IN': 'நேரடி இந்தியா போஸ்ட் ஏபிஐ & ஓபன்ஸ்ட்ரீட்மேப் புவித் தரவு தீர்வி',
    'hi-IN': 'प्रत्यक्ष इंडिया पोस्ट एपीआई और ओपनस्ट्रीटमैप भू-डेटा समाधान',
    'te-IN': 'ప్రత్యక్ష ఇండియా పోస్ట్ ఏపీఐ & ఓపెన్‌స్ట్రీట్‌మ్యాప్ జియోడేటా రిసాల్వర్',
    'kn-IN': 'ನೇರ ಭಾರತೀಯ ಪೋಸ್ಟ್ API ಮತ್ತು ಓಪನ್‌ಸ್ಟ್ರೀಟ್‌ಮ್ಯಾಪ್ ಜಿಯೋಡೇಟಾ',
    'ml-IN': 'നേരിട്ടുള്ള ഇന്ത്യ പോസ്റ്റ് API & ഓപ്പൺസ്ട്രീറ്റ്മാപ്പ് ജിയോഡേറ്റ',
  },
  map_search_placeholder: {
    'en-IN': 'Type place name or 6-digit PIN (e.g. Coimbatore, Gandhipuram, 641001)...',
    'ta-IN': 'இடத்தின் பெயர் அல்லது 6-இலக்க பின் குறியீட்டைத் தட்டச்சு செய்க (எ.கா. கோயம்புத்தூர், 641001)...',
    'hi-IN': 'स्थान का नाम या 6-अंकीय पिन टाइप करें (उदा. कोयंबटूर, 641001)...',
    'te-IN': 'ప్రదేశం పేరు లేదా 6-అంకెల పిన్ టైప్ చేయండి (ఉదా. కోయంబత్తూరు, 641001)...',
    'kn-IN': 'ಸ್ಥಳದ ಹೆಸರು ಅಥವಾ 6-ಅಂಕಿಯ ಪಿನ್ ಟೈಪ್ ಮಾಡಿ (ಉದಾ. ಕೊಯಮತ್ತೂರು, 641001)...',
    'ml-IN': 'സ്ഥലത്തിന്റെ പേര് അല്ലെങ്കിൽ 6-അക്ക പിൻ ടൈപ്പ് ചെയ്യുക (ഉദാ. കോയമ്പത്തൂർ, 641001)...',
  },
  apply_and_close: {
    'en-IN': 'Apply & Close',
    'ta-IN': 'பயன்படுத்தி மூடு',
    'hi-IN': 'लागू करें और बंद करें',
    'te-IN': 'వర్తింపజేసి మూసివేయండి',
    'kn-IN': 'ಅನ್ವಯಿಸಿ ಮತ್ತು ಮುಚ್ಚಿ',
    'ml-IN': 'പ്രയോഗിച്ച് അടയ്ക്കുക',
  },
  active_coordinates: {
    'en-IN': 'Active Coordinates',
    'ta-IN': 'செயலில் உள்ள ஆயத்தொலைவுகள்',
    'hi-IN': 'सक्रिय निर्देशांक',
    'te-IN': 'యాక్టివ్ కోఆర్డినేట్స్',
    'kn-IN': 'ಸಕ್ರಿಯ ನಿರ್ದೇಶಾಂಕಗಳು',
    'ml-IN': 'സജീവ കോർഡിനേറ്റുകൾ',
  },
  global_location_region: {
    'en-IN': 'Global Location & Region',
    'ta-IN': 'உலகளாவிய இருப்பிடம் & பிராந்தியம்',
    'hi-IN': 'वैश्विक स्थान और क्षेत्र',
    'te-IN': 'గ్లోబల్ లొకేషన్ & ప్రాంతం',
    'kn-IN': 'ಜಾಗತಿಕ ಸ್ಥಳ ಮತ್ತು ಪ್ರದೇಶ',
    'ml-IN': 'ആഗോള ലൊക്കേഷനും പ്രദേശവും',
  },
  authoritative_regional_hubs: {
    'en-IN': 'Authoritative Regional Hubs',
    'ta-IN': 'அங்கீகரிக்கப்பட்ட பிராந்திய மையங்கள்',
    'hi-IN': 'प्राधिकृत क्षेत्रीय केंद्र',
    'te-IN': 'ప్రామాణిక ప్రాంతీయ కేంద్రాలు',
    'kn-IN': 'ಪ್ರಾಧಿಕೃತ ಪ್ರಾದೇಶಿಕ ಕೇಂದ್ರಗಳು',
    'ml-IN': 'അധികാരപ്പെടുത്തിയ റീജിയണൽ ഹബ്ബുകൾ',
  },
  filters: {
    'en-IN': 'Filters',
    'ta-IN': 'வடிகட்டிகள்',
    'hi-IN': 'फ़िल्टर',
    'te-IN': 'ఫిల్టర్లు',
    'kn-IN': 'ಫಿಲ್ಟರ್‌ಗಳು',
    'ml-IN': 'ഫിൽട്ടറുകൾ',
  },
  all_categories: {
    'en-IN': 'All Categories',
    'ta-IN': 'அனைத்து வகைகள்',
    'hi-IN': 'सभी श्रेणियां',
    'te-IN': 'అన్ని వర్గాలు',
    'kn-IN': 'ಎಲ್ಲಾ ವರ್ಗಗಳು',
    'ml-IN': 'എല്ലാ വിഭാഗങ്ങളും',
  },
  book_service: {
    'en-IN': 'Book Service',
    'ta-IN': 'சேவையை முன்பதிவு செய்',
    'hi-IN': 'सेवा बुक करें',
    'te-IN': 'సేవను బుక్ చేయండి',
    'kn-IN': 'ಸೇವೆ ಕಾಯ್ದಿರಿಸಿ',
    'ml-IN': 'സേവനം ബുക്ക് ചെയ്യുക',
  },
  view_map: {
    'en-IN': 'View Map',
    'ta-IN': 'வரைபடத்தைக் காண்க',
    'hi-IN': 'मानचित्र देखें',
    'te-IN': 'మ్యాప్ చూడండి',
    'kn-IN': 'ನಕ್ಷೆ ವೀಕ್ಷಿಸಿ',
    'ml-IN': 'മാപ്പ് കാണുക',
  },
  explore: {
    'en-IN': 'Explore',
    'ta-IN': 'ஆராய்க',
    'hi-IN': 'अन्वेषण करें',
    'te-IN': 'అన్వేషించండి',
    'kn-IN': 'ಅನ್ವೇಷಿಸಿ',
    'ml-IN': 'പര്യവേക്ഷണം ചെയ്യുക',
  },
  intent: {
    'en-IN': 'Intent',
    'ta-IN': 'நோக்கம்',
    'hi-IN': 'इरादा',
    'te-IN': 'ఉద్దేశ్యం',
    'kn-IN': 'ಉದ್ದೇಶ',
    'ml-IN': 'ഉദ്ദേശ്യം',
  },
  core_vector: {
    'en-IN': 'Core Vector',
    'ta-IN': 'மைய திசையன்',
    'hi-IN': 'मुख्य वेक्टर',
    'te-IN': 'కోర్ వెక్టర్',
    'kn-IN': 'ಕೋರ್ ವೆಕ್ಟರ್',
    'ml-IN': 'കോർ വെക്ടർ',
  },
  active_vector: {
    'en-IN': 'Active Vector',
    'ta-IN': 'செயலில் உள்ள திசை',
    'hi-IN': 'सक्रिय वेक्टर',
    'te-IN': 'యాక్టివ్ వెక్టర్',
    'kn-IN': 'ಸಕ್ರಿಯ ವೆಕ್ಟರ್',
    'ml-IN': 'സജീവ വെക്ടർ',
  },
  active_domain: {
    'en-IN': 'Active Domain',
    'ta-IN': 'செயலில் உள்ள துறை',
    'hi-IN': 'सक्रिय डोमेन',
    'te-IN': 'యాక్టివ్ డొమైన్',
    'kn-IN': 'ಸಕ್ರಿಯ ಡೊಮೇನ್',
    'ml-IN': 'സജീവ ഡൊമെയ്ൻ',
  },
  subdomains: {
    'en-IN': 'Subdomains',
    'ta-IN': 'துணைத் துறைகள்',
    'hi-IN': 'उप-डोमेन',
    'te-IN': 'ఉప డొమైన్లు',
    'kn-IN': 'ಉಪ ಡೊಮೇನ್‌ಗಳು',
    'ml-IN': 'ഉപ ഡൊമെയ്നുകൾ',
  },
  solutions: {
    'en-IN': 'Solutions',
    'ta-IN': 'தீர்வுகள்',
    'hi-IN': 'समाधान',
    'te-IN': 'పరిష్కారాలు',
    'kn-IN': 'ಪರಿಹಾರಗಳು',
    'ml-IN': 'പരിഹാരങ്ങൾ',
  },
  available_solutions_in: {
    'en-IN': 'Available Solutions in',
    'ta-IN': 'இதில் கிடைக்கும் தீர்வுகள்:',
    'hi-IN': 'में उपलब्ध समाधान:',
    'te-IN': 'లో అందుబాటులో ఉన్న పరిష్కారాలు:',
    'kn-IN': 'ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಪರಿಹಾರಗಳು:',
    'ml-IN': 'ൽ ലഭ്യമായ പരിഹാരങ്ങൾ:',
  },
  click_solution_inspect: {
    'en-IN': 'Click solution to inspect architecture →',
    'ta-IN': 'கட்டமைப்பை ஆய்வு செய்ய தீர்வை கிளிக் செய்க →',
    'hi-IN': 'संरचना देखने के लिए समाधान पर क्लिक करें →',
    'te-IN': 'ఆర్కిటెక్చర్ చూడటానికి పరిష్కారంపై క్లిక్ చేయండి →',
    'kn-IN': 'ರಚನೆ ವೀಕ್ಷಿಸಲು ಪರಿಹಾರದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ →',
    'ml-IN': 'ആർക്കിടെക്ചർ കാണാൻ പരിഹാരത്തിൽ ക്ലിക്ക് ചെയ്യുക →',
  },
  back_to_universe: {
    'en-IN': 'Back to Solution Universe',
    'ta-IN': 'தீர்வு பிரபஞ்சத்திற்குத் திரும்பு',
    'hi-IN': 'समाधान ब्रह्मांड पर वापस जाएं',
    'te-IN': 'పరిష్కార విశ్వానికి తిరిగి వెళ్ళు',
    'kn-IN': 'ಪರಿಹಾರ ವಿಶ್ವಕ್ಕೆ ಹಿಂತಿರುಗಿ',
    'ml-IN': 'പരിഹാര പ്രപഞ്ചത്തിലേക്ക് മടങ്ങുക',
  },
  bound_domains: {
    'en-IN': 'Bound Domains:',
    'ta-IN': 'இணைக்கப்பட்ட துறைகள்:',
    'hi-IN': 'संबद्ध डोमेन:',
    'te-IN': 'అనుసంధానించబడిన డొమైన్లు:',
    'kn-IN': 'ಸಂಯೋಜಿತ ಡೊಮೇನ್‌ಗಳು:',
    'ml-IN': 'ബന്ധിപ്പിച്ച ഡൊമെയ്നുകൾ:',
  },
  launch_solution: {
    'en-IN': 'Launch Architecture',
    'ta-IN': 'கட்டமைப்பைத் தொடங்கு',
    'hi-IN': 'संरचना लॉन्च करें',
    'te-IN': 'ఆర్కిటెక్చర్ ప్రారంభించండి',
    'kn-IN': 'ರಚನೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ',
    'ml-IN': 'ആർക്കിടെക്ചർ ആരംഭിക്കുക',
  },
  verified_services_nearby: {
    'en-IN': 'Verified Services Nearby',
    'ta-IN': 'அருகிலுள்ள சரிபார்க்கப்பட்ட சேவைகள்',
    'hi-IN': 'पास की सत्यापित सेवाएं',
    'te-IN': 'సమీపంలోని ధృవీకరించబడిన సేవలు',
    'kn-IN': 'ಹತ್ತಿರದ ಪರಿಶೀಲಿಸಿದ ಸೇವೆಗಳು',
    'ml-IN': 'സമീപത്തുള്ള പരിശോധിച്ച സേവനങ്ങൾ',
  },
  distance: {
    'en-IN': 'Distance',
    'ta-IN': 'தொலைவு',
    'hi-IN': 'दूरी',
    'te-IN': 'దూరం',
    'kn-IN': 'ದೂರ',
    'ml-IN': 'ദൂരം',
  },
  universe_nav: {
    'en-IN': 'Universe',
    'ta-IN': 'பிரபஞ்சம்',
    'hi-IN': 'ब्रह्मांड',
    'te-IN': 'విశ్వం',
    'kn-IN': 'ವಿಶ್ವ',
    'ml-IN': 'പ്രപഞ്ചം',
  },
  domains_nav: {
    'en-IN': 'Domains',
    'ta-IN': 'துறைகள்',
    'hi-IN': 'डोमेन',
    'te-IN': 'డొమైన్లు',
    'kn-IN': 'ಡೊಮೇನ್‌ಗಳು',
    'ml-IN': 'ഡൊമെയ്നുകൾ',
  },
  services_nav: {
    'en-IN': 'Services',
    'ta-IN': 'சேவைகள்',
    'hi-IN': 'सेवाएं',
    'te-IN': 'సేవలు',
    'kn-IN': 'ಸೇವೆಗಳು',
    'ml-IN': 'സേവനങ്ങൾ',
  },
  gis_map_nav: {
    'en-IN': 'GIS Map',
    'ta-IN': 'ஜிஐஎஸ் வரைபடம்',
    'hi-IN': 'जीआईएस मैप',
    'te-IN': 'జిఐఎస్ మ్యాప్',
    'kn-IN': 'ಜಿಐಎಸ್ ನಕ್ಷೆ',
    'ml-IN': 'ജിഐഎസ് മാപ്പ്',
  },
  copyright_note: {
    'en-IN': '© 2026 ArchitectAny AAi. One Platform. Infinite Solutions.',
    'ta-IN': '© 2026 ஆர்க்கிடெக்ட் எனி ஏஏஐ. ஒரே தளம். எல்லையற்ற தீர்வுகள்.',
    'hi-IN': '© 2026 आर्किटेक्ट एनी एएआई। एक मंच। अनंत समाधान।',
    'te-IN': '© 2026 ఆర్కిటెక్ట్ ఎనీ ఏఏఐ. ఒకే వేదిక. అనంత పరిష్కారాలు.',
    'kn-IN': '© 2026 ಆರ್ಕಿಟೆಕ್ಟ್ ಎನಿ ಎಎಐ. ಒಂದೇ ವೇದಿಕೆ. ಅನಂತ ಪರಿಹಾರಗಳು.',
    'ml-IN': '© 2026 ആർക്കിടെക്റ്റ് എനി എഎഐ. ഒരു വേദി. അനന്തമായ പരിഹാരങ്ങൾ.',
  },
};

// Domain Names Translated by ID
export const DOMAIN_TRANSLATIONS: {
  [domainId: string]: {
    [langCode: string]: { name: string; description?: string };
  };
} = {
  D01: {
    'en-IN': { name: 'Marketplace', description: 'Commerce, multi-vendor and transaction ecosystems' },
    'ta-IN': { name: 'சந்தை & வர்த்தகம்', description: 'மின்வணிகம், பல விற்பனையாளர்கள் மற்றும் பணப்பரிவர்த்தனை அமைப்புகள்' },
    'hi-IN': { name: 'मार्केटप्लेस और वाणिज्य', description: 'ई-कॉमर्स, मल्टी-वेंडर और लेन-देन पारिस्थितिकी तंत्र' },
    'te-IN': { name: 'మార్కెట్ ప్లేస్ & వాణిజ్యం', description: 'ఈ-కామర్స్, మల్టీ-వెండర్ మరియు లావాదేవీల వ్యవస్థలు' },
    'kn-IN': { name: 'ಮಾರುಕಟ್ಟೆ & ವಾಣಿಜ್ಯ', description: 'ಇ-ಕಾಮರ್ಸ್, ಬಹು-ಮಾರಾಟಗಾರ ಮತ್ತು ವಹಿವಾಟು ಪರಿಸರ ವ್ಯವಸ್ಥೆ' },
    'ml-IN': { name: 'മാർക്കറ്റ് പ്ലേസ് & വാണിജ്യം', description: 'ഇ-കൊമേഴ്സ്, മൾട്ടി-വെണ്ടർ ഇടപാടുകൾ' },
  },
  D02: {
    'en-IN': { name: 'Hyperlocal', description: 'Location-aware local services, providers and communities' },
    'ta-IN': { name: 'உள்ளூர் சேவைகள்', description: 'இருப்பிடம் சார்ந்த உள்ளூர் சேவைகள் மற்றும் சமூகங்கள்' },
    'hi-IN': { name: 'हाइपरलोकल सेवाएं', description: 'स्थान-आधारित स्थानीय सेवाएं, प्रदाता और समुदाय' },
    'te-IN': { name: 'హైపర్‌లోకల్ సేవలు', description: 'స్థాన-ఆధారిత స్థానిక సేవలు మరియు సంఘాలు' },
    'kn-IN': { name: 'ಸ್ಥಳೀಯ ಸೇವೆಗಳು', description: 'ಸ್ಥಳ-ಆಧಾರಿತ ಸ್ಥಳೀಯ ಸೇವೆಗಳು ಮತ್ತು ಸಮುದಾಯಗಳು' },
    'ml-IN': { name: 'ഹൈപ്പർലോക്കൽ സേവനങ്ങൾ', description: 'ലൊക്കേഷൻ അടിസ്ഥാനമാക്കിയുള്ള പ്രാദേശിക സേവനങ്ങൾ' },
  },
  D03: {
    'en-IN': { name: 'Business & Enterprise', description: 'Enterprise processes, platforms and business transformation' },
    'ta-IN': { name: 'வணிகம் & நிறுவனம்', description: 'நிறுவன செயல்முறைகள், தளங்கள் மற்றும் வணிக மாற்றம்' },
    'hi-IN': { name: 'व्यापार और उद्यम', description: 'उद्यम प्रक्रियाएं, प्लेटफॉर्म और व्यावसायिक परिवर्तन' },
    'te-IN': { name: 'వ్యాపారం & ఎంటర్‌ప్రైజ్', description: 'ఎంటర్‌ప్రైజ్ ప్రక్రియలు, ప్లాట్‌ఫారమ్‌లు మరియు పరివర్తన' },
    'kn-IN': { name: 'ವ್ಯವಹಾರ & ಉದ್ಯಮ', description: 'ಉದ್ಯಮ ಪ್ರಕ್ರಿಯೆಗಳು, ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ರೂಪಾಂತರ' },
    'ml-IN': { name: 'ബിസിനസ്സും എൻ്റർപ്രൈസും', description: 'എന്റർപ്രൈസ് പ്രക്രിയകളും ബിസിനസ് പരിവർത്തനവും' },
  },
  D04: {
    'en-IN': { name: 'Technology & IT', description: 'Software, cloud, infrastructure, data and AI technology' },
    'ta-IN': { name: 'தொழில்நுட்பம் & ஐடி', description: 'மென்பொருள், கிளவுட், உள்கட்டமைப்பு மற்றும் தகவல் தொழில்நுட்பம்' },
    'hi-IN': { name: 'प्रौद्योगिकी और आईटी', description: 'सॉफ्टवेयर, क्लाउड, बुनियादी ढांचा और डेटा' },
    'te-IN': { name: 'సాంకేతికత & ఐటీ', description: 'సాఫ్ట్‌వేర్, క్లౌడ్, ఇన్‌ఫ్రాస్ట్రక్చర్ మరియు డేటా' },
    'kn-IN': { name: 'ತಂತ್ರಜ್ಞಾನ & ಐಟಿ', description: 'ಸಾಫ್ಟ್‌ವೇರ್, ಕ್ಲೌಡ್, ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಡೇಟಾ' },
    'ml-IN': { name: 'സാങ്കേതികവിദ്യ & ഐടി', description: 'സോഫ്റ്റ്‌വെയർ, ക്ലൗഡ്, ഇൻഫ്രാസ്ട്രക്ചർ & ഡാറ്റ' },
  },
  D05: {
    'en-IN': { name: 'AI & Data', description: 'AI agents, analytics, knowledge and intelligent automation' },
    'ta-IN': { name: 'செயற்கை நுண்ணறிவு & தரவு', description: 'AI ஏஜென்ட்கள், பகுப்பாய்வு மற்றும் நுண்ணறிவு ஆட்டோமேஷன்' },
    'hi-IN': { name: 'एआई और डेटा विज्ञान', description: 'एआई एजेंट, एनालिटिक्स, ज्ञान और इंटेलिजेंट ऑटोमेशन' },
    'te-IN': { name: 'ఏఐ & డేటా సైన్స్', description: 'ఏఐ ఏజెంట్లు, విశ్లేషణలు మరియు ఆటోమేషన్' },
    'kn-IN': { name: 'ಎಐ & ಡೇಟಾ', description: 'ಎಐ ಏಜೆಂಟ್‌ಗಳು, ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಬುದ್ಧಿವಂತ ಯಾಂತ್ರೀಕರಣ' },
    'ml-IN': { name: 'എഐ & ഡാറ്റാ', description: 'എഐ ഏജന്റുകൾ, അനലിറ്റിക്സ്, ഓട്ടോമേഷൻ' },
  },
  D06: {
    'en-IN': { name: 'Engineering & Projects', description: 'Engineering, projects, assets and operational solutions' },
    'ta-IN': { name: 'பொறியியல் & திட்டங்கள்', description: 'பொறியியல், கட்டுமான திட்டங்கள் மற்றும் சொத்து மேலாண்மை' },
    'hi-IN': { name: 'इंजीनियरिंग और परियोजनाएं', description: 'इंजीनियरिंग, परियोजनाएं, संपत्ति और परिचालन समाधान' },
    'te-IN': { name: 'ఇంజనీరింగ్ & ప్రాజెక్టులు', description: 'ఇంజనీరింగ్, ప్రాజెక్టులు మరియు నిర్వహణ పరిష్కారాలు' },
    'kn-IN': { name: 'ಇಂಜಿನಿಯರಿಂಗ್ & ಯೋಜನೆಗಳು', description: 'ಇಂಜಿನಿಯರಿಂಗ್, ಯೋಜನೆಗಳು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ಪರಿಹಾರಗಳು' },
    'ml-IN': { name: 'എഞ്ചിനീയറിംഗും പ്രോജക്ടുകളും', description: 'എഞ്ചിനീയറിംഗ്, പ്രോജക്ടുകൾ, പ്രവർത്തന പരിഹാരങ്ങൾ' },
  },
  D07: {
    'en-IN': { name: 'Agriculture & Rural', description: 'Agri products, services, supply and rural ecosystems' },
    'ta-IN': { name: 'விவசாயம் & கிராமப்புறம்', description: 'வேளாண் பொருட்கள், சேவைகள், விநியோகச் சங்கிலி மற்றும் கிராமப்புற வளர்ச்சி' },
    'hi-IN': { name: 'कृषि और ग्रामीण विकास', description: 'कृषि उत्पाद, सेवाएं, आपूर्ति श्रृंखला और ग्रामीण पारिस्थितिकी' },
    'te-IN': { name: 'వ్యవసాయం & గ్రామీణ', description: 'వ్యవసాయ ఉత్పత్తులు, సేవలు మరియు గ్రామీణ వ్యవస్థలు' },
    'kn-IN': { name: 'ಕೃಷಿ & ಗ್ರಾಮೀಣ', description: 'ಕೃಷಿ ಉತ್ಪನ್ನಗಳು, ಸೇವೆಗಳು ಮತ್ತು ಗ್ರಾಮೀಣ ಪರಿಸರ ವ್ಯವಸ್ಥೆ' },
    'ml-IN': { name: 'കൃഷിയും ഗ്രാമീണവും', description: 'കാർഷിക ഉൽപ്പന്നങ്ങൾ, സേവനങ്ങൾ, വിതരണ ശൃംഖല' },
  },
  D08: {
    'en-IN': { name: 'Education & Learning', description: 'Courses, academy, knowledge and professional learning' },
    'ta-IN': { name: 'கல்வி & கற்றல்', description: 'பாடநெறிகள், அகாடமி, அறிவு மற்றும் தொழில்முறை பயிற்சி' },
    'hi-IN': { name: 'शिक्षा और सीखना', description: 'पाठ्यक्रम, अकादमी, ज्ञान और व्यावसायिक शिक्षा' },
    'te-IN': { name: 'విద్య & అభ్యాసం', description: 'కోర్సులు, అకాడమీ, జ్ఞానం మరియు వృత్తిపరమైన అభ్యాసం' },
    'kn-IN': { name: 'ಶಿಕ್ಷಣ & ಕಲಿಕೆ', description: 'ಕೋರ್ಸ್‌ಗಳು, ಅಕಾಡೆಮಿ, ಜ್ಞಾನ ಮತ್ತು ವೃತ್ತಿಪರ ಕಲಿಕೆ' },
    'ml-IN': { name: 'വിദ്യാഭ്യാസവും പഠനവും', description: 'കോഴ്സുകൾ, അക്കാദമി, അറിവ് & പ്രൊഫഷണൽ പഠനം' },
  },
  D09: {
    'en-IN': { name: 'Media & Community', description: 'Blogs, social, family, village and community publishing' },
    'ta-IN': { name: 'ஊடகம் & சமூகம்', description: 'வலைப்பதிவுகள், சமூக ஊடகங்கள் மற்றும் சமூக வெளியீடுகள்' },
    'hi-IN': { name: 'मीडिया और समुदाय', description: 'ब्लॉग, सोशल, परिवार, गांव और सामुदायिक प्रकाशन' },
    'te-IN': { name: 'మీడియా & కమ్యూనిటీ', description: 'బ్లాగులు, సోషల్, కుటుంబం మరియు కమ్యూనిటీ ప్రచురణలు' },
    'kn-IN': { name: 'ಮಾಧ್ಯಮ & ಸಮುದಾಯ', description: 'ಬ್ಲಾಗ್‌ಗಳು, ಸಾಮಾಜಿಕ ಮತ್ತು ಸಮುದಾಯ ಪ್ರಕಾಶನ' },
    'ml-IN': { name: 'മീഡിയയും കമ്മ്യൂണിറ്റിയും', description: 'ബ്ലോഗുകൾ, സോഷ്യൽ, കമ്മ്യൂണിറ്റി പബ്ലിഷിംഗ്' },
  },
  D10: {
    'en-IN': { name: 'Travel & Events', description: 'Travel, events, bookings and composed experiences' },
    'ta-IN': { name: 'பயணம் & நிகழ்வுகள்', description: 'சுற்றுலா, பயண முன்பதிவு, நிகழ்வுகள் மற்றும் அனுபவங்கள்' },
    'hi-IN': { name: 'यात्रा और कार्यक्रम', description: 'यात्रा, कार्यक्रम, बुकिंग और समग्र अनुभव' },
    'te-IN': { name: 'ప్రయాణం & ఈవెంట్లు', description: 'ప్రయాణం, ఈవెంట్లు, బుకింగ్‌లు మరియు అనుభవాలు' },
    'kn-IN': { name: 'ಪ್ರಯಾಣ & ಈವೆಂಟ್‌ಗಳು', description: 'ಪ್ರಯಾಣ, ಈವೆಂಟ್‌ಗಳು, ಬುಕಿಂಗ್ ಮತ್ತು ಅನುಭವಗಳು' },
    'ml-IN': { name: 'യാത്രയും ഇവന്റുകളും', description: 'യാത്ര, പരിപാടികൾ, ബുക്കിംഗുകൾ & അനുഭവങ്ങൾ' },
  },
  D11: {
    'en-IN': { name: 'Finance & Services', description: 'Financial, payment, insurance and professional services' },
    'ta-IN': { name: 'நிதி & வங்கிச் சேவைகள்', description: 'நிதி, கட்டணங்கள், காப்பீடு மற்றும் தொழில்முறை சேவைகள்' },
    'hi-IN': { name: 'वित्त और सेवाएं', description: 'वित्तीय, भुगतान, बीमा और पेशेवर सेवाएं' },
    'te-IN': { name: 'ఫైనాన్స్ & సేవలు', description: 'ఆర్థిక, చెల్లింపులు, బీమా మరియు వృత్తిపరమైన సేవలు' },
    'kn-IN': { name: 'ಹಣಕಾಸು & ಸೇವೆಗಳು', description: 'ಹಣಕಾಸು, ಪಾವತಿ, ವಿಮೆ ಮತ್ತು ವೃತ್ತಿಪರ ಸೇವೆಗಳು' },
    'ml-IN': { name: 'ധനകാര്യവും സേവനങ്ങളും', description: 'സാമ്പത്തിക, പേയ്‌മെന്റുകൾ, ഇൻഷുറൻസ് സേവനങ്ങൾ' },
  },
  D12: {
    'en-IN': { name: 'Health & Wellness', description: 'Health, wellness and related service ecosystems' },
    'ta-IN': { name: 'சுகாதாரம் & நல்வாழ்வு', description: 'சுகாதாரம், மருத்துவ ஆலோசனை மற்றும் நல்வாழ்வு சேவைகள்' },
    'hi-IN': { name: 'स्वास्थ्य और कल्याण', description: 'स्वास्थ्य, चिकित्सा और कल्याणकारी सेवा पारिस्थितिकी तंत्र' },
    'te-IN': { name: 'ఆరోగ్యం & శ్రేయస్సు', description: 'ఆరోగ్యం, వైద్యం మరియు శ్రేయస్సు సేవలు' },
    'kn-IN': { name: 'ಆರೋಗ್ಯ & ಕ್ಷೇಮ', description: 'ಆರೋಗ್ಯ, ಕ್ಷೇಮ ಮತ್ತು ಸಂಬಂಧಿತ ಸೇವಾ ವ್ಯವಸ್ಥೆಗಳು' },
    'ml-IN': { name: 'ആരോഗ്യവും ക്ഷേമവും', description: 'ആരോഗ്യം, വെൽനസ്, അനുബന്ധ സേവനങ്ങൾ' },
  },
  D13: {
    'en-IN': { name: 'Home & Living', description: 'Home, property, maintenance and lifestyle services' },
    'ta-IN': { name: 'வீடு & வாழ்க்கை முறை', description: 'வீட்டுப் பராமரிப்பு, சொத்து மேலாண்மை மற்றும் வாழ்க்கை முறை' },
    'hi-IN': { name: 'घर और रहन-सहन', description: 'घर, संपत्ति, रखरखाव और जीवन शैली सेवाएं' },
    'te-IN': { name: 'ఇల్లు & జీవన విధానం', description: 'గృహ నిర్వహణ, ఆస్తి మరియు జీవనశైలి సేవలు' },
    'kn-IN': { name: 'ಮನೆ & ಜೀವನಶೈಲಿ', description: 'ಮನೆ, ಆಸ್ತಿ, ನಿರ್ವಹಣೆ ಮತ್ತು ಜೀವನಶೈಲಿ ಸೇವೆಗಳು' },
    'ml-IN': { name: 'വീടും ജീവിതശൈലിയും', description: 'വീട്, പ്രോപ്പർട്ടി, മെയിന്റനൻസ് & ജീവിതശൈലി' },
  },
  D14: {
    'en-IN': { name: 'Public & Social Services', description: 'Civic, social, community and public-facing services' },
    'ta-IN': { name: 'பொது & சமூக சேவைகள்', description: 'குடிமை, பொது மற்றும் சமூக நல சேவைகள்' },
    'hi-IN': { name: 'सार्वजनिक और सामाजिक सेवाएं', description: 'नागरिक, सामाजिक और सार्वजनिक सेवाएं' },
    'te-IN': { name: 'ప్రజా & సామాజిక సేవలు', description: 'పౌర, సామాజిక మరియు ప్రజా సేవలు' },
    'kn-IN': { name: 'ಸಾರ್ವಜನಿಕ & ಸಾಮಾಜಿಕ ಸೇವೆಗಳು', description: 'ನಾಗರಿಕ, ಸಾಮಾಜಿಕ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳು' },
    'ml-IN': { name: 'പൊതു & സാമൂഹിക സേവനങ്ങൾ', description: 'സിവിക്, സോഷ്യൽ, പബ്ലിക് സർവീസുകൾ' },
  },
};

/**
 * Translate helper function
 */
export function t(key: string, langCode: string = 'en-IN'): string {
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[langCode] || entry['en-IN'] || key;
}

/**
 * Get translated Domain info
 */
export function getTranslatedDomain(
  domainId: string,
  fallbackName: string,
  fallbackDesc?: string,
  langCode: string = 'en-IN',
): { name: string; description: string } {
  const trans = DOMAIN_TRANSLATIONS[domainId];
  if (trans && trans[langCode]) {
    return {
      name: trans[langCode].name,
      description: trans[langCode].description || fallbackDesc || '',
    };
  }
  return {
    name: fallbackName,
    description: fallbackDesc || '',
  };
}
