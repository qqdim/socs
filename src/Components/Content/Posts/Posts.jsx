import s from './Posts.module.css'
import Post from "./Post/Post";
const postData = [
    {id:1, txt:'the first post',    likes:2},
    {id:2, txt:'the second post',   likes:3},
    {id:3, txt:'thrird',            likes:11},
    {id:4, txt:'czetwertyj post',   likes:1},
    {id:5, txt:'czetwertyj2 post',   likes:65},
]
const postElements = postData.map(e => <Post id={e.id} text={e.txt} likes={e.likes}/>)

const Posts = () =>{
    return (
        <div className={s.posts}>
            <h2>Посты</h2>
            {postElements}
            {/*<Post id={postData[0].id} text={postData[0].txt} likes={postData[0].likes}/>*/}
            {/*<Post id={postData[1].id} text={postData[1].txt} likes={postData[1].likes}/>*/}
            {/*<Post id={postData[2].id} text={postData[2].txt} likes={postData[2].likes}/>*/}
            {/*<Post id={postData[3].id} text={postData[3].txt} likes={postData[2].likes}/>*/}
        </div>
    )
}

export default Posts