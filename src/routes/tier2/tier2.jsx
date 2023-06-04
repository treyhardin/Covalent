import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components /header/ header";
import Hero from "../../components /hero/hero";
import TabBar from "../../components /tabBar/tabBar";
import LinkBlocks from "../../components /linkBlocks/linkBlocks";

export default function Tier2(props) {
    return (
        <>
            <Header />
            <Hero 
                title="Animations"
                subtitle="Tier 2*"
                image="/images/tier1/Hero.webp"
                color="reverse"
            />
            <TabBar 
                tabs={[{
                    label: 'Overview',
                    url: 'overview'
                },{
                    label: 'Sections',
                    url: 'sections'
                },{
                    label: 'Images',
                    url: 'images'
                },{
                    label: 'Buttons',
                    url: 'buttons'
                }]}
            />
            <Outlet />
            <LinkBlocks 
                blocks={[{
                    title: "Tier 1",
                    text: "text",
                    image: "/images/tier1/LinkBlock.jpg"
                },{
                    title: "Tier 3",
                    text: "text",
                    image: "/images/tier3/LinkBlock.jpg"
                }]}
            />
        
        </>
    )
}