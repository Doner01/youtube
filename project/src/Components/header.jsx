import Profile from "./profile"
import Search from "./search"

const HeaderSide = () => {
    return <div className="header">
        <Search/>
        <Profile/>
    </div>
}

export default HeaderSide