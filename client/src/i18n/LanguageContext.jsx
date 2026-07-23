import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return window.localStorage.getItem("is-landing-language") || "sr";
  });

  const setLanguage = (nextLanguage) => {
    if (nextLanguage !== "sr" && nextLanguage !== "en") return;
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    window.localStorage.setItem("is-landing-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
