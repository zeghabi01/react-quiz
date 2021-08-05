import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import {useState,useEffect,useRef} from 'react'
import { useData,reset } from '../../../../myContext'

// NEED MORE OPTIMAZATION THIS TECHNIQUE MY3JBCH
function Choice({index:i,answer,choice}) {

    const [alpha,setAlpha] = useState('')
    const [isWrong,setIsWrong] = useState(false)
    const [isCorrect,setIsCorrect] = useState(false)
    const {status,dispatch,sections,quizElement,index,setIndex,result,unclickable} = useData()
    const [animate,setAnimate] = useState(false)

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

    

    const checkAnswer = () => {
        setAnimate(true)
        dispatch({type:'UNCLICKABLE',payload:{unclickable : true}})
        dispatch({type:'STATUS',payload:{
                ...status,
                timer : false,
                loader : true
        }})
        if(answer === choice) {
            setTimeout(() => {
                dispatch({type:'STATUS',payload:{
                    ...status,
                    loader : false,
                    timer : false,
                    correct : true
                }})
                setIsCorrect(true)
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
                }
            },3000)
        }else {
            setTimeout(() => {
                dispatch({type:'STATUS',payload:{
                    ...status,
                    loader : false,
                    timer : false,
                    wrong : true
                }})
                setIsWrong(true)
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

    if(isWrong) return <li className={"wrong"}><p>{choice}</p><span>{alpha}</span></li>
      
    if(isCorrect) return <li className={"correct"}><p>{choice}</p><span>{alpha}</span></li>

    if(status.fail && choice === answer) return <li className={"correct"}><p>{choice}</p><span>{alpha}</span></li>

    if(status.wrong && choice === answer) return <li className={"correct"}><p>{choice}</p><span>{alpha}</span></li>
        
    if(status.fail || status.correct || status.wrong)  {
        return <li className={"result"}><p>{choice}</p><span>{alpha}</span></li> 
    }

    if(animate) {
        return <li  style={animate ? {
             transition: ".2s ease",
            transform :"scale(1.01)",
        } : null }  className={"bounceli2"}><p>{choice}</p><span>{alpha}</span></li> 
    }
            
    return <li onClick={()=> checkAnswer()} className="bounceli2"><p>{choice}</p><span>{alpha}</span></li>
    
}


export default Choice

