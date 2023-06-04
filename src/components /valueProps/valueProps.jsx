import ValuePropItem from '../valuePropItem/valuePropItem'
import styles from './valueProps.module.css'

export default function ValueProps(props) {
    return (
        <section className={styles.valueProps}>
            <div className={styles.valuePropsInner}>
                {props.values.map((value, i) => {
                    return (
                        <ValuePropItem
                            key={i}
                            icon={value.icon}
                            title={value.title}
                            text={value.text}
                        />
                    )
                })}
            </div>
        </section>
    )
}