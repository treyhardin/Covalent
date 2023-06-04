import TextImage from "../../components /textImage/textImage";
import ValueProps from "../../components /valueProps/valueProps";
import FullBleed from "../../components /fullBleed/fullBleed";
import TextQuote from "../../components /textQuote/textQuote";

export default function Overview_Tier1(props) {
    return (
        <>
            <TextQuote 
                title="Tier One Animation"
                text="Our standard approach to interactivity."
            />
            <TextImage
                title="Load-In Animations"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image="/images/tier1/TextImage.jpg"
            />
            <FullBleed 
                title="Background Animations"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image="/images/tier1/FullBleed.jpg"
                color="reverse"
            />
            <ValueProps 
                values={[{
                    icon: 'atom',
                    title: 'CSS Only',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    icon: 'rose',
                    title: 'Simple & Performant',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },{
                    icon: 'spiral',
                    title: 'Timeline/Budget Friendly',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }]}
            />
        </>
    )
}