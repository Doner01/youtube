import { Link } from "react-router-dom"
import { MenuList } from "../Utils/data"

const MenuBar = () => {
    return <div className="menu__bar">
        {
            MenuList.map(item => (
                <Link to={item.path} key={item.id} className="menu__link">
                    {item.Icon}
                    <div className="menu__text">
                        {item.title}
                    </div>
                </Link>
            ))
        }
    </div>
}

export default MenuBar