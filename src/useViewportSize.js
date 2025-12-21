import {useState} from "react";
import { useWindowEvent } from './useWindowEvent.js';

function useViewportSize() {
    const[size,setSize] = useState({
        width:typeof window !=='undefined'? window.innerWidth : 0,
        height:typeof window !=='undefined'? window.innerHeight : 0,
    })

    const handelResize = () =>{
        setSize({
            width:window.innerWidth,
            height:window.innerHeight,
        })
    }
    useWindowEvent('resize', handelResize);
    return size
}

export default useViewportSize