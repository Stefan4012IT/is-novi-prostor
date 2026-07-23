import hanaJurenic from '../../assets/testimonials/hana-jurenic.png';
import oljaGabric from '../../assets/testimonials/olja-gabric.png';
import tanjaAndjelkovic from '../../assets/testimonials/tanja-andjelkovic.png';
import jovanaIgnjatovic from '../../assets/testimonials/jovana-ignjatovic.png';
import andjelaBorovic from '../../assets/testimonials/andjela-borovic.png';
import { landingContent } from "../../i18n/landingContent";

const people = [
  { id: 1, name: "Hana Jurenić", image: hanaJurenic },
  { id: 2, name: "Ollja Gabrić", image: oljaGabric },
  { id: 3, name: "Tanja Anđelković", image: tanjaAndjelkovic },
  { id: 4, name: "Jovana Ignjatović", image: jovanaIgnjatovic },
  { id: 5, name: "Anđela Borović", image: andjelaBorovic },
];

export const getTestimonialsData = (language) => people.map((person, index) => ({
  ...person,
  ...landingContent[language].testimonials.items[index],
}));
