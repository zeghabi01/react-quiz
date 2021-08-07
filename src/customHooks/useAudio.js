import { useEffect } from "react";


const useAudio = (audio) => {
    useEffect(() => {
        const myAudio = new Audio(audio)
        myAudio.play()
        return () => myAudio.pause()
    },[])
}


export default useAudio