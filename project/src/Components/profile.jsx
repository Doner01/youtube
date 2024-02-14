import { useState } from "react"
import Icons from "../Assets/Icons"
import ProfileModal from "./profileModal"

const Profile = () => {
    const [open, SetOpen] = useState(false)
    const openProfile = () => {
        SetOpen(true)
    }
    return <>
        <div className="profile">
                <button className="profile_btn">
                    <Icons.Camera/>
                </button>
                <button className="profile_btn">
                    <Icons.MultiMenu/>
                </button>
                <button className="profile_btn">
                    <Icons.Bell/>
                </button>
                <button className="profile__avatar" onClick={openProfile}>
                    <img src={'https://thefrisky.com/wp-content/uploads/2019/01/round-photo-1.png'} alt="profile" />
                </button>
                {open && <ProfileModal SetOpen={SetOpen} />}
        </div>
    </>
}

export default Profile