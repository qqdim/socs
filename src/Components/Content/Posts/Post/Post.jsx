import s from './Post.module.css'

const Post = (props) =>{
    return (
        <div className={s.post}>
            <img src='https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png'/>

            {props.id}.
            {props.text}
            <button> Like ({props.likes})</button>
        </div>
    )
}

export default Post