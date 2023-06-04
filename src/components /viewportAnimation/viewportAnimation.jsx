import { Children, cloneElement, useEffect, useState } from "react";
import '../../animations.css'

export default function ViewportAnimation(props) {


    let visibleClassName = 'visible'

    let intersectionOptions = {
        root: null,
        threshold: 0.2,
    }

    const checkIsIntersecting = (entries) => {
        entries.forEach((entry) => {

            const element = entry.target
            if (entry.isIntersecting) {
                setTimeout(() => {
                    element.classList.add(visibleClassName)
                    // element.classList.contains(visibleClassName) ? '' : element.classList.add(visibleClassName)
                }, props.delay ? props.delay * 1000 : 0)
            }
        })
    };

    useEffect(() => {
        const observer = new IntersectionObserver(checkIsIntersecting, intersectionOptions);
        if (props.element.current) {
            observer.observe(props.element.current)   
        }
    }, [props.element])

    return (
        <>
            {Children.map(props.children, child => {
                return cloneElement(child, {
                    className: `${child.props.className} anim--${props.style ? props.style : 'fade'}`
                })
            })}
        </>
    )

}