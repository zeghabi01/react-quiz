import React, { useRef } from 'react'
import Header from './header'
import { useData } from '../myContext'

function GameStartSection() {

    const inputRef = useRef('')

    const {dispatch} = useData()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('playerName', inputRef.current.value);
        inputRef.current.value = ''
        displayGameSection(dispatch)
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

const displayGameSection = (dispatch) => {
    dispatch({type : 'SECTIONS' , payload : {
        startSection : false,
        gameSection : true
    }})
}

export default GameStartSection
