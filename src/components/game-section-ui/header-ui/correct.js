import correct from '../../../sounds/correct.wav'
import useAudio from '../../../customHooks/useAudio'

function Correct() {

    useAudio(correct)
    
    return (
        <i id="correct" style={{fontSize: '42px',color: 'green'}} className="far fa-check-circle"></i>
    )
}

export default Correct
