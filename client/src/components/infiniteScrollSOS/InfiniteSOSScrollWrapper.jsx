import useIsMobile from "../../components/common/useIsMobile";
import InfiniteSOSScroll from "./InfiniteSOSScroll";
import InfiniteSOSScrollMobile from "./InfiniteSOSScrollMobile";
import { getSosScrollItems } from "./infiniteData_SOS_Scroll";
import { useLanguage } from "../../i18n/LanguageContext";

export default function InfiniteSOSScrollWrapper() {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const sosScrollItems = getSosScrollItems(language);

  if (isMobile) {
    return <InfiniteSOSScrollMobile items={sosScrollItems} />;
  }

  return <InfiniteSOSScroll items={sosScrollItems} />;
}
