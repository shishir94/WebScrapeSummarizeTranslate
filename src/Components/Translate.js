import React, { useEffect, useState } from 'react';

export default function Translate({ text, setText }) {
    const [language, setLanguage] = useState('en');
    const [translatedText, setTranslatedText] = useState(text);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    useEffect(() => {
        async function translateText() {
            const apiKey = 'YOUR_API_KEY'; 
            const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        q: translatedText,
                        target: language
                    })
                });

                const data = await response.json();
                setTranslatedText(data.data.translations[0].translatedText);
            } catch (error) {
                console.error('Error translating text:', error);
            }
        }

        translateText();
    }, [language, text]);

    return (
        <div>
            <div className='container language-select'>
                <h3 className="language-heading">SELECT LANGUAGE</h3>
                <select value={language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="pt">Portuguese</option>
                    <option value="ru">Russian</option>
                    <option value="zh-CN">Chinese (Simplified)</option>
                    <option value="ja">Japanese</option>
                    <option value="ko">Korean</option>
                </select>
            </div>
            <div className="mb-3">
                <textarea value={setTranslatedText} className="form-control" id="myBox" rows="8"></textarea>
            </div>
        </div>
    );
}
