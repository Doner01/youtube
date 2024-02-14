import Icons from "../Assets/Icons"
import LogoImg from "../Assets/Images/YouTube.png"

const Logo = () => {
    return <>
        <div className="logo">
            <Icons.Menu/>
            <img src={LogoImg} alt="logo" />
        </div>
    </>
}

export default Logo 