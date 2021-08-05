import React ,{ useEffect }  from 'react'
import { reset, useData } from '../myContext'
function Loss() {

    const {dispatch,sections,result} = useData()

    const goBackFromLoss = () => {
        dispatch({type : 'RESULT',payload:{
                        ...result,
                        loss : false
                    }})
        dispatch({type : 'SECTIONS',payload:{
            ...sections,
            startSection : true
        }})
        reset(dispatch)
    }

    return (
        <div id="loss" className="loss">
            <i style={{fontSize: '60px', color: 'white'}} className="far fa-times-circle"></i>
            <h3>لقد خسرت</h3>
            <p>متأكدون أنك تستطيع النجاح</p>
            <button onClick={()=> goBackFromLoss()}>إغلاق</button>
            <p>الشخص الحكيم هو الذي يصنع فرصاً أكثر من تلك التى ضاعت منه أو فشل فيها</p>
        </div>

    )
}

export default Loss
