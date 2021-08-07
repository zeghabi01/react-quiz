import { useState,useEffect} from 'react';
import useInterval from '../../../customHooks/useInterval';
import { useData } from '../../../myContext';
import timer2 from '../../../sounds/timer2.wav'

function Timer ({timeLimit, radius,strokeWidth,strokeColor}) {

    useEffect(()=>{
        const TIMER = new Audio(timer2)
        TIMER.play()
        return () => TIMER.pause()   
    },[])

    const timerProperties = {
        circumference : radius * 2 * Math.PI,
        widthHeightTimeContainer : (radius + (strokeWidth * 2) ) * 2,
        cx : ((radius + (strokeWidth * 2) ) * 2) /2,
        cy : ((radius + (strokeWidth * 2) ) * 2) /2
    }

    const [timeLeft,setTimeLeft] = useState(timeLimit)
    const [isRunning,setIsRunning] = useState(true)
    const [percent,setPercent] = useState(100)
    const {dispatch,status} = useData()

    useInterval(()=>{

        setTimeLeft(timeLeft-1)

        if(timeLeft <= 1) {
            setIsRunning(false)
        }

    },isRunning ? 1000 : null)

    useEffect(()=>{
        if(timeLeft > 0)
            setPercent(percent => percent-(100 / timeLimit))
        if(timeLeft === 0)
            dispatch({type : 'TIME_IS_UP', payload: true})            
    // eslint-disable-next-line
    },[timeLeft])

    
    return (  
        <>
        <div 
            style = {{...styles.container,
                         width: timerProperties.widthHeightTimeContainer,
                         height: timerProperties.widthHeightTimeContainer
                    }}
        >

            <svg
                style={styles.progressRing}
            >

                <circle
                    strokeWidth= {strokeWidth}
                    fill="transparent"
                    // radius = (widthOfSvg / 2) - (strokeWidth * 2)
                    r={radius}
                    cx= {timerProperties.cx}
                    cy= {timerProperties.cy}
                    stroke='grey'
                />

                <circle
                    style = {styles.progressRingCircle}
                    strokeWidth= {strokeWidth}
                    fill="transparent"
                    // radius = (widthOfSvg / 2) - (strokeWidth * 2)
                    r={radius}
                    cx = {timerProperties.cx}
                    cy = {timerProperties.cy}
                    stroke= {percent <= 20 ? 'red' : strokeColor}
                    strokeDasharray = {`${timerProperties.circumference}`}
                    strokeDashoffset = {`${timerProperties.circumference - percent / 100 * timerProperties.circumference}`}
                /> 

            </svg>

            <span style={styles.time}>{formatTime(timeLeft)}</span>

        </div>
        </>
    )

}


function formatTime(time) {

        const minutes = Math.floor(time/ 60);
        
        // Seconds are the remainder of the time divided by 60 (modulus operator)
        let seconds = time % 60;
        
        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;

}

const styles = {

    container : {
        position : 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    progressRing : {
        position : 'absolute',
        width:'100%',
        height:'100%',
        transform: 'scaleX(-1)',
    },

    progressRingCircle : {
        transform: 'rotate(-90deg)',
        transformOrigin: 'center',
        strokeLinecap: 'round',
        transition: '1s linear all'
    },

    time : {
        position:'absolute',
        fontWeight : 'bold'
    },

}

export default Timer
