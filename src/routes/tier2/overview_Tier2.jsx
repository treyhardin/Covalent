import TextImage from "../../components /textImage/textImage";
import ValueProps from "../../components /valueProps/valueProps";
import FullBleed from "../../components /fullBleed/fullBleed";
import TextQuote from "../../components /textQuote/textQuote";

export default function Overview_Tier2(props) {
    return (
        <>
            <TextQuote 
                title="Text Section"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            />
            <TextImage
                title="Section Animation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image="/images/tier2/TextImage.jpg"
            />
            <FullBleed 
                title="Section Animation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image="/images/tier2/FullBleed.jpg"
                color="reverse"
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
        </>
    )
}