import { NavLink } from "react-router-dom";
import Header from "../components /header/ header";
import Hero from "../components /hero/hero";

export default function Tier2(props) {
    return (
        <>
        <Header />
        <Hero 
            title="Animations"
            subtitle="Tier 2"
            image="/images/tier1/Hero_Tier1.webp"
            color="reverse"
        />
        <Hero 
            title="Animations"
            subtitle="Tier 3"
            image="/images/tier1/Hero_Tier1.jpg"
            color="dark"
        />
        </>
    )
}