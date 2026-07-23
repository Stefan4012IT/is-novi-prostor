import {
  infiniteImage1,
  infiniteImage2,
  infiniteImage3,
  infiniteImage4,
} from "./infiniteImages_SOS_Scroll";
import { landingContent } from "../../i18n/landingContent";

const itemMeta = [
  {
    bgColor: "#354180",
    image: infiniteImage1,
  },
  {
    bgColor: "#e1a863",
    image: infiniteImage2,
  },
  {
    bgColor: "#354180",
    image: infiniteImage3,
  },
  {
    bgColor: "#e1a863",
    image: infiniteImage4,
  },
];

export const getSosScrollItems = (language) => itemMeta.map((item, index) => ({
  ...item,
  ...landingContent[language].infinite[index],
}));
