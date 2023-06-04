import TextImage from "../../components /textImage/textImage";
import ValueProps from "../../components /valueProps/valueProps";
import FullBleed from "../../components /fullBleed/fullBleed";
import TextQuote from "../../components /textQuote/textQuote";

export default function Overview_Tier1(props) {
    return (
        <>
            <TextQuote 
                title="Text Section"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />
            <TextImage
                title="Section Animation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image="/images/tier1/TextImage.jpg"
            />
            <FullBleed 
                title="Section Animation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image="/images/tier1/FullBleed.jpg"
                color="reverse"
            />
            <ValueProps 
                values={[{
                    icon: 'atom',
                    title: 'Atom',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    icon: 'rose',
                    title: 'Rose',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },{
                    icon: 'spiral',
                    title: 'Spiral',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }]}
            />
        </>
    )
}