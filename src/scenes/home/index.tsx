import useMediaQuery from "@/hooks/useMediaQuerry";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGrafic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER*/}
    </section>
  );
};

export default Home;
