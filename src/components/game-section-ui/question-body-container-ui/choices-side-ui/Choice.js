import { library } from '@fortawesome/fontawesome-svg-core'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import {useState,useEffect,useRef} from 'react'
import { useData,reset } from '../../../../myContext'

// NEED MORE OPTIMAZATION THIS TECHNIQUE MY3JBCH
function Choice({index:i,answer,choice}) {

    const [alpha,setAlpha] = useState('')
    const {status,dispatch,sections,quizElement,index,setIndex,result,unclickable} = useData()
    const [isCorrect,setIsCorrect] = useState(false)
    const [isWrong,setIsWrong] = useState(false)

    useEffect(()=>{
        if(i === 0) {
            setAlpha('أ')
        }
        if(i === 1) {
            setAlpha('ب')
        }
        if(i === 2) {
            setAlpha('ت')
        }
        if(i === 3) {
            setAlpha('ث')
        }
    },[i])

    const checkAnswer = async () => {
    // Disable any event in the body (you can't click anything)
        dispatch({type:'UNCLICKABLE',payload:{unclickable : true}})
    // Remove the timer & display the loader
        dispatch({type:'STATUS',payload:{
                ...status,
                loader : true,
                timer : false,
        }})
    // Check if answer === choice
        if(answer === choice) {
            // After 1second remove loader
            setTimeout(() => {
                setIsCorrect(true)
                dispatch({type:'STATUS',payload:{
                    ...status,
                    timer : false, // not good
                    loader : false,
                    correct : true
                }})
            }, 1000);
            setTimeout(()=>{       
                if(quizElement.length === quizElement.questionIndex) {
                    dispatch({type:'SECTIONS',payload:{
                        ...sections,
                        gameSection:false
                    }})
                    dispatch({type:'RESULT',payload:{
                        ...status,
                        win:true
                    }})
                    setIndex(0)
                }else {
                    reset(dispatch)
                    setIndex(index+1)
                    setIsCorrect(false)
                    setIsWrong(false)
                    dispatch({type : 'STATUS',payload:{
                        ...status,
                        timer : true
                    }})
                }
            },3000)
        }else {
            setTimeout(() => {
                setIsWrong(true)
                dispatch({type:'STATUS',payload:{
                    ...status,
                    loader : false,
                    timer : false,
                    wrong : true
                }})
            }, 1000);

            setTimeout(()=>{    
                setIsCorrect(false)
                setIsWrong(false)   
                reset(dispatch)
                dispatch({type:'SECTIONS',payload:{
                    ...sections,
                    gameSection:false
                }})
                dispatch({type:'RESULT',payload:{
                    ...status,
                    loss:true
                }})
            },3000)   
        }
        setIsCorrect(false)
        setIsWrong(false)
    }

  

    if(isCorrect) {
        const { correct : {li,p,span}} = answeringStyles
        return <li className='bounceli' style={li}><p style={p}>{choice}</p><span style={span}>{alpha}</span></li>
    }

    if(isWrong) {
        const {wrong : {li,p,span}} = answeringStyles;
        return <li className="bounceli" style={li}><p style={p}>{choice}</p><span style={span}>{alpha}</span></li>
    }

    if(status.wrong && choice === answer) {
        const { correct : {li,p,span}} = answeringStyles
        return <li className="bounceli" style={li}><p style={p}>{choice}</p><span style={span}>{alpha}</span></li>
    }

    if(status.fail && choice === answer) {
        return <li className="correct bounceli"><p>{choice}</p><span>{alpha}</span></li>
    }

    if(status.fail || status.wrong || status.correct) {
        return <li className="result bounceli"><p>{choice}</p><span>{alpha}</span></li>
    }

    return <li onClick={()=> checkAnswer()} className={status.timer ? "bounceli2": null}><p>{choice}</p><span>{alpha}</span></li>

}

const answeringStyles = {
    correct : {
        li : {
            border: '2px solid green',
            backgroundColor: 'green',
        },
        p : {
            color: '#FFFFFF'
        },
        span : {
            backgroundColor: 'green',
            color: '#FFFFFF',
            border: '2px solid green'
        }
    },
    wrong : {
        li : {
            border: '2px solid red',
            backgroundColor: 'red',
        },
        p : {
            color: '#FFFFFF'
        },
        span : {
            backgroundColor: 'red',
            color: '#FFFFFF',
            border: '2px solid red'
        }
    },
}

export default Choice

