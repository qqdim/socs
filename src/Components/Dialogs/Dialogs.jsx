import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Msg from "./Msg/Msg"

const dialogsData=[
    {id:1, name:'di2m'},
    {id:2, name:'ev'},
    {id:3, name:'emi'},
    {id:4, name:'icy'},
];
const messagesData=[
    {id:1, msg:'hello'},
    {id:2, msg:'hoi!'},
    {id:3, msg:'Yo!'},
    {id:4, msg:'aAAAaaaAaA!!!'},
    {id:5, msg:'aAyyyyYYY!!!'},
];
const dialogsElements = dialogsData.map(e => <DialogItem name={e.name} id={e.id}/>)
const messagesElements = messagesData.map(e => <Msg msg={e.msg}/>)

const Dialogs = () =>{
    return (
        <content className={s.dialogs}>
            <div className={s.chats}>
                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                {/*<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}

            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Msg msg={messagesData[0].msg}/>*/}
                {/*<Msg msg={messagesData[1].msg}/>*/}
                {/*<Msg msg={messagesData[2].msg}/>*/}
                {/*<Msg msg={messagesData[3].msg}/>*/}
            </div>
        </content>
    )
}

export default Dialogs