import { NavLink, Navigate, Outlet } from "react-router-dom";
import Tier2 from "../tier2/tier2";
import Header from "../../components /header/ header";
import Hero from "../../components /hero/hero";
import TabBar from "../../components /tabBar/tabBar";
import TextImage from "../../components /textImage/textImage";
import ValueProps from "../../components /valueProps/valueProps";
import FullBleed from "../../components /fullBleed/fullBleed";
import LinkBlocks from "../../components /linkBlocks/linkBlocks";
import TextQuote from "../../components /textQuote/textQuote";

export default function Tier1(props) {
    return (
        <>
            <Header />
            <Hero 
                title="Animations"
                subtitle="Tier 1*"
                image="/images/tier2/Hero.jpeg"
                color="dark"
            />
            <TabBar 
                tabs={[{
                    label: 'Overview',
                    url: 'overview'
                },{
                    label: 'Settings',
                    url: 'settings'
                },{
                    label: 'Text',
                    url: 'text'
                },{
                    label: 'Images',
                    url: 'images'
                },]}
            />
            <Outlet />
            <LinkBlocks 
                blocks={[{
                    title: "Tier 2",
                    text: "text",
                    image: "/images/tier2/LinkBlock.jpg"
                },{
                    title: "Tier 3",
                    text: "text",
                    image: "/images/tier3/LinkBlock.jpg"
                }]}
            />
        </>
    )
}