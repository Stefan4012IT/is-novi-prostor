import { BrowserRouter as Router } from "react-router-dom";
import GlobalScrollTriggerReaper from "./components/common/GlobalScrollTriggerReaper";
import Home from "./pages/Home";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000); // sačekaj da se sve komponente učitaju
  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LanguageProvider>
      <Home />
      {/* <GlobalScrollTriggerReaper debug={false} /> */ }
    </LanguageProvider>

      // <Home />
  );
}

export default App;
