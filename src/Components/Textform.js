import React, { useState } from "react";
import axios from 'axios';

export default function Textform(props) {
  const [text, setText] = useState("Enter URL");
  const [text1, setText1] = useState("Enter your key");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("en");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleFocus = (event) => {
    if (event.target.value === "Enter URL") {
      setText("");
    }
  };

  const handleBlur = (event) => {
    if (event.target.value.trim() === "") {
      setText("Enter URL");
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };


  const handleFocus1 = (event) => {
    if (event.target.value === "Enter your key") {
      setText1("");
    }
  };

  const handleBlur1 = (event) => {
    if (event.target.value.trim() === "") {
      setText1("Enter your key");
    }
  };
  const handleOnChange1 = (event) => {
    setText1(event.target.value);
  };

  const handleGetSummary = () => {
    axios.post("http://localhost:8000/chat", { prompt: text })
      .then((res) => {
        if (res.data && res.data.message && res.data.message.content) {
          setTranslatedText(res.data.message.content);
        } else {
          setTranslatedText("No valid response received.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setTranslatedText("Failed to fetch response.");
      });
  };

  return (
    <div>
      <h2>Enter your chatgpt key</h2>
      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          value={text1}
          onChange={handleOnChange1}
          onFocus={handleFocus1}
          onBlur={handleBlur1}
          id="urlInput"
          rows="1"
        ></textarea>
      </div>
      <h2>Enter url</h2>
      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id="urlInput"
          rows="1"
        ></textarea>
      </div>
      <div>
        <div className="buttons my-3">
          <button className="btn btn-primary my-3" onClick={handleGetSummary}>
            Get Summary
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your Summary</h2>
        <div className="container language-select">
          <h3 className="language-heading">Select Language</h3>
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
            <option value="hi">Hindi</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea
            value={translatedText}
            className="form-control"
            id="summaryOutput"
            rows="8"
            readOnly
          ></textarea>
        </div>
      </div>
    </div>
  );
}
