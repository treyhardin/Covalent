import LinkBlock from '../linkBlock/linkBlock'
import styles from './linkBlocks.module.css'

export default function LinkBlocks(props) {
    return (
        <section className={styles.linkBlocks}>
        <div className={styles.divider}></div>
            <div className={styles.linkBlocksInner}>
                {props.blocks.map((block, i) => {
                    return <LinkBlock key={i} title={block.title} text={block.text} image={block.image} />
                })}
            </div>
        </section>
    )
}