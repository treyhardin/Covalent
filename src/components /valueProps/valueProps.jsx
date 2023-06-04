import { forwardRef, useRef } from 'react'
import ValuePropItem from '../valuePropItem/valuePropItem'
import ViewportAnimation from '../viewportAnimation/viewportAnimation'
import styles from './valueProps.module.css'

export default function ValueProps(props) {

    const valuePropRef = useRef(null)

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
                            animDelay={i * 0.25}
                        />
                    )
                })}
            </div>
        </section>
    )
}