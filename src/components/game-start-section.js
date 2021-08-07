import React, { useEffect, useRef } from 'react'
import Header from './header'
import { useData } from '../myContext'

function GameStartSection() {

    const inputRef = useRef('')

    const {dispatch,status} = useData()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputRef.current.value) {
            localStorage.setItem('playerName', inputRef.current.value);
        }else {
            localStorage.setItem('playerName', 'لاعب غير معروف');
        }
        displayGameSection(dispatch,status)
        inputRef.current.value = ''
    }


    return (
        <>
            <Header/>
            <div id="gameStartContainer" className="startgame">

                    <div className="buttonBox">

                        <p>النجاح هو حصيلة مجهودات صغيرة نكررها كل يوم.</p>

                        <form onSubmit={handleSubmit} id="myForm" action="">
                            <input ref={inputRef} type="text" placeholder="أدخل إسمك" />
                            <button type="submit"  id="startgame">لعب</button>
                        </form>

                        <small><span>ملاحظة</span> : يمكنك عدم إدخال إسمك سيتم تسجيلك كلاعب غير معروف</small>

                    </div>  

            </div>
        </>
    )
}

const displayGameSection = (dispatch,status) => {
    dispatch({type : 'SECTIONS' , payload : {
        startSection : false,
        gameSection : true
    }})
    dispatch({type : 'STATUS' , payload : {
        ...status,
        timer : true
    }})
}

export default GameStartSection
