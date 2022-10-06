import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo"

const Profile = () =>{
    return (
        <main className={s.content}>
            <ProfileInfo/>
            my posts
            new post
            <Posts/>
        </main>
    )
}

export default Profile