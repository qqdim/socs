import s from './Msg.module.css'
import {NavLink} from "react-router-dom";


const Msg = (props) => {
    return (
        <div className={s.msg}>{props.msg}</div>
    )
}

export default Msg