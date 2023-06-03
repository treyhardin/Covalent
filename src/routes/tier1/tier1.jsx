import { NavLink } from "react-router-dom";
import Tier2 from "../tier2";
import Header from "../../components /header/ header";
import styles from './tier1.module.css'

export default function Tier1(props) {
    return (
        <>
            <Header />
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p className={styles.paragraph}>Tier 1</p>
            <NavLink to='/tier2'>Tier 2</NavLink>
        </>
    )
}