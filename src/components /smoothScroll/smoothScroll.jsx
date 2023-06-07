import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'

export default function SmoothScroll({children}) {

    useEffect(() => {

        const lenis = new Lenis({
            lerp: 0.1,
        })

        lenis.on('scroll', (e) => {
            // console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

    }, [])

    return (
        <>
            {children}
        </>
    )

}