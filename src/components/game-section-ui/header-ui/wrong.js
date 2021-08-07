import wrong from '../../../sounds/wrong.wav'
import useAudio from '../../../customHooks/useAudio'
function Wrong() {

    useAudio(wrong)

    return (
        <i id="wrong" style={{fontSize: '42px',color: 'red'}} className="far fa-times-circle"></i>

    )
}

export default Wrong
