import { BrowserRouter as Router } from "react-router-dom";
import GlobalScrollTriggerReaper from "./components/common/GlobalScrollTriggerReaper";
import Home from "./pages/Home";
import { useEffect } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import { scheduleScrollTriggerRefresh } from "./utils/scrollTriggerRefresh";

function App() {
  useEffect(() => {
    let isMounted = true;
    const refresh = () => scheduleScrollTriggerRefresh();

    window.addEventListener("load", refresh);
    document.fonts?.ready.then(() => {
      if (isMounted) refresh();
    });

    refresh();

    return () => {
      isMounted = false;
      window.removeEventListener("load", refresh);
    };
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
