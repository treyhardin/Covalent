import styles from './previewImage.module.css'

export default function PreviewImage(props) {
    return (
        <section className={styles.previewImage} >
            <div className={styles.preview}>
                <img className={styles.image} src="/images/preview/ImagePreview.jpg" />
            </div>
            <div className={styles.settings}>
                <h2 className='h3'>Image Preview</h2>
                <p>Preview Text</p>
            </div>
        </section>
    )
}