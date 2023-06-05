import { NavLink } from "react-router-dom";
import Header from "../../components /header/ header";
import Hero from "../../components /hero/hero";
import TabBar from "../../components /tabBar/tabBar";
import TextImage from "../../components /textImage/textImage";
import ValueProps from "../../components /valueProps/valueProps";
import FullBleed from "../../components /fullBleed/fullBleed";
import LinkBlocks from "../../components /linkBlocks/linkBlocks";
import TextQuote from "../../components /textQuote/textQuote";

export default function Tier3(props) {
    return (
        <>
            <Header />
            <Hero 
                title="Animations"
                subtitle="Tier 3*"
                image="/images/tier3/Hero.jpg"
                color="reverse"
            />
            <TextQuote 
                title="Tier 3 Animation"
                text="Coming Soon"
            />
        </>
    )
}