import React, { useEffect } from 'react'
import { reset, useData } from '../myContext'
import win from '../sounds/win.wav'
import useAudio from '../customHooks/useAudio'

function Win() {


    useAudio(win)
    
    const {result,dispatch,sections} = useData()

    const goBackFromWin = () => {
        dispatch({type : 'RESULT',payload:{
                        ...result,
                        win : false
                    }})
        dispatch({type : 'SECTIONS',payload:{
            ...sections,
            startSection : true
        }})
        reset(dispatch)
    }


    return (
        <>
        <div id="win" className="win">
            <i style={{fontSize: '80px', color: 'white'}} className="fas fa-award"></i>
            <h3>مبروك لقد ربحت</h3>
            <button onClick={()=> goBackFromWin()}>العودة</button>
            <p>عليك أن تفعل الأشياء التي تعتقد أنه ليس باستطاعتك أن تفعلها</p>
        </div>
        </>
    )
}

export default Win
