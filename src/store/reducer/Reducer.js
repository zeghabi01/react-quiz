const initialState = {
    sections : {
        startSection : true,
        gameSection : false
    },
    status : {
        correct : false,
        wrong : false,
        fail : false,
        timer : false,
        loader : false
    },
    result : {
        win : false,
        loss : false 
    },
    timeIsUp : false,
    unclickable : false,
}

const Reducer = (state,action) => {
    switch(action.type) {
        case 'SECTIONS' : {
            return {
                ...state,
                sections : action.payload
            }
        }
        case 'STATUS' : {
            return {
                ...state,
                status : action.payload
            }
        }
        case 'RESULT' : {
            return {
                ...state,
                result : action.payload
            }
        }
        case 'TIME_IS_UP' : {
            return {
                ...state,
                timeIsUp : action.payload
            }
        }
        case 'UNCLICKABLE' : {
            return {
                ...state,
                unclickable : action.payload
            }
        }
        default : return state
    }
}

export {Reducer,initialState}