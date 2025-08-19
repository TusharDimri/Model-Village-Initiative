# Translation System Guide

This website now supports full translation between English and Hindi. Here's how to use it:

## Features

- **Professional Language Toggle**: A globe icon button in the navbar that allows switching between English and Hindi
- **Complete Translation**: All text content across all pages is translated
- **Persistent Language**: Language preference is saved in localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## How to Use

### For Users
1. Click the globe icon (🌐) in the top navigation bar
2. Select your preferred language (English 🇺🇸 or Hindi 🇮🇳)
3. The entire website will instantly translate to your chosen language
4. Your language preference will be remembered for future visits

### For Developers

#### Adding New Translations

1. **Add English translations** in `lib/i18n.js`:
```javascript
'en': {
  translation: {
    'your.new.key': 'Your English text here',
    // ... other translations
  }
}
```

2. **Add Hindi translations** in the same file:
```javascript
'hi': {
  translation: {
    'your.new.key': 'आपका हिंदी टेक्स्ट यहाँ',
    // ... other translations
  }
}
```

#### Using Translations in Components

1. **Import the translation hook**:
```javascript
import { useTranslation } from "react-i18next";
```

2. **Use in your component**:
```javascript
export default function YourComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('your.new.key')}</h1>
    </div>
  );
}
```

## Translation Keys Structure

The translations are organized by sections:

- `nav.*` - Navigation items
- `hero.*` - Hero section content
- `about.*` - About section content
- `why.*` - Why section content
- `themes.*` - Conference themes section content
- `ideas.*` - Innovative green technologies section content
- `stakeholders.*` - Key stakeholders section content
- `conference.*` - Conference details section content
- `agenda.*` - Conference agenda section content
- `register.*` - Registration page content
- `contact.*` - Contact page content
- `footer.*` - Footer content
- `common.*` - Common UI elements

## Technical Implementation

- **i18next**: Core translation library
- **react-i18next**: React integration
- **i18next-browser-languagedetector**: Automatic language detection
- **LocalStorage**: Persistent language preference storage

## Adding New Languages

To add support for additional languages:

1. Add the new language object to the `resources` in `lib/i18n.js`
2. Add the language option to the `languages` array in `components/LanguageToggle.jsx`
3. Provide translations for all existing keys

## Best Practices

1. **Use descriptive keys**: Use hierarchical keys like `section.subsection.element`
2. **Keep translations organized**: Group related translations together
3. **Test both languages**: Always test the website in both languages
4. **Consider text length**: Hindi text can be longer than English, ensure UI accommodates this
5. **Use interpolation for dynamic content**: For content with variables, use i18next interpolation

## Troubleshooting

- **Translation not showing**: Ensure the component is using the `useTranslation` hook
- **Key not found**: Check that the translation key exists in both English and Hindi
- **Language not persisting**: Check that localStorage is enabled in the browser
- **Mobile menu issues**: Ensure the language toggle is properly positioned in mobile view
