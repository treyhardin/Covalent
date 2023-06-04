import Icon from '../icons/icons'
import styles from './valuePropItem.module.css'

export default function ValuePropItem(props) {
    return (
        <div className={styles.valuePropItem}>
            <div className={styles.icon}>
                <Icon type={props.icon} />
            </div>
            <div className={styles.text}>
                <p className='colorInk'>{props.title}</p>
                <p className='colorSecondary'>{props.text}</p>
            </div>
           
        </div>
    )
}