import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hover, setHover] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHover(true)
    }
    
    function leave() {
        setHover(false)
    }
    useEffect(() => {
        if(ref.current) {
            ref.current.addEventListener("mouseover", enter)
            ref.current.addEventListener("mouseout", leave)
        }
        return () => {
            if(ref.current) {
            ref.current.removeEventListener("mouseover", enter)
            ref.current.removeEventListener("mouseout", leave)
            }
        }
    }, [ref])

    return [hover, ref]
}

export default useHover