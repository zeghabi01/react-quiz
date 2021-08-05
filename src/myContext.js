import React, {useContext,useEffect,useReducer,useState}  from 'react'
import useFetch from './customHooks/useFetch'
import { Reducer,initialState } from './store/reducer/Reducer'

const AppContext = React.createContext()

function MyContext({children}) {

    const [state,dispatch] = useReducer(Reducer,initialState)

    const {response:data,isLoading} = useFetch('questions.json')

    const [index,setIndex] = useState(0)

    const [shuffledQuestions,setShuffledQuestions] = useState([])

    // SHUFFLE THE QUESTIONS  (RUN SECONDS)
    useEffect(()=> {
        if(data) {
            setShuffledQuestions(data.sort((a,b) => 0.5 - Math.random())) 
        }  
    },[data])

    useEffect(()=>{
        console.log(shuffledQuestions);
    },[shuffledQuestions])

    return (
        <AppContext.Provider value=
        {
            {
                quizElement : {
                    data : shuffledQuestions[index],
                    questionIndex : index + 1,
                    length : shuffledQuestions.length
                },
                isLoading,
                index,
                setIndex,
                ...state,
                dispatch,
            }
        }
        >
            {children}
        </AppContext.Provider>
    )
}

function reset(dispatch) {

    dispatch({type : 'STATUS',payload:{
        correct  : false,
        wrong : false,
        fail : false,
        timer : true,
        loader : false
    }})

    dispatch({type: 'TIME_IS_UP',payload:false})

    dispatch({type : 'UNCLICKABLE',payload : false })

}

function useData() {
    return useContext(AppContext)
}

export {MyContext,useData,reset}
