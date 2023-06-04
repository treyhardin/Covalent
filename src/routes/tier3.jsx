import { NavLink } from "react-router-dom";
import Header from "../components /header/ header";
import Hero from "../components /hero/hero";
import TabBar from "../components /tabBar/tabBar";
import TextImage from "../components /textImage/textImage";
import ValueProps from "../components /valueProps/valueProps";
import FullBleed from "../components /fullBleed/fullBleed";
import LinkBlocks from "../components /linkBlocks/linkBlocks";

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
            <TabBar />
            <TextImage
                title="Section Animation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image="/images/tier3/TextImage.jpg"
            />
            <ValueProps 
                values={[{
                    icon: 'proportion',
                    title: 'Proportion',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    icon: 'scale',
                    title: 'Scale',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },{
                    icon: 'cone',
                    title: 'Cone',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }]}
            />
            <FullBleed 
                title="Section Animation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image="/images/tier3/FullBleed.jpg"
                color="reverse"
            />
            <LinkBlocks 
                blocks={[{
                    title: "Tier 1",
                    text: "text",
                    image: "/images/tier1/LinkBlock.jpg"
                },{
                    title: "Tier 2",
                    text: "text",
                    image: "/images/tier2/LinkBlock.jpg"
                }]}
            />
        
        </>
    )
}