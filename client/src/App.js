import { BrowserRouter as Router } from "react-router-dom";
import GlobalScrollTriggerReaper from "./components/common/GlobalScrollTriggerReaper";
import Home from "./pages/Home";
import { useEffect } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import {
  scheduleScrollTriggerRefresh,
  scheduleScrollTriggerUpdate,
} from "./utils/scrollTriggerRefresh";

function App() {
  useEffect(() => {
    let isMounted = true;
    const refresh = () => scheduleScrollTriggerRefresh();
    const update = () => scheduleScrollTriggerUpdate();

    window.addEventListener("load", refresh);
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true });
    document.fonts?.ready.then(() => {
      if (isMounted) refresh();
    });

    refresh();

    return () => {
      isMounted = false;
      window.removeEventListener("load", refresh);
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update);
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
