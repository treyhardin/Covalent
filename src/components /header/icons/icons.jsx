import styles from './icons.module.css'

export default function Icon(props) {
    
    switch (props.type) {
        case 'settings':
            return (
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 6">
                    <circle cx="2.272" cy="2.816" r="2.272" fill="currentColor"/>
                    <circle cx="12" cy="2.816" r="2.272" fill="currentColor"/>
                    <circle cx="21.728" cy="2.816" r="2.272" fill="currentColor"/>
                </svg>
            )
            break
    }
}