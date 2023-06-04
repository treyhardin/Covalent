import styles from './previewText.module.css'

export default function PreviewText(props) {
    return (
        <section className={styles.previewText}>
            <div className={styles.preview}>
                <h4>Lorem Ipsum Dolor Sit Amet.</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            </div>
            <div className={styles.settings}>
                <h2 className='h3'>Text Preview</h2>
                <p>Preview Text</p>
            </div>
        </section>
    )
}