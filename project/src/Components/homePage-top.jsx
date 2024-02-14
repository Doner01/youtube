import Icons from "../Assets/Icons"
import { HomeTop } from "../Utils/data"

const MenuTop = () => {
    return <div className="home__top">
        <div className="home__main">
            <div className="avatar">
                <div className="avatar__img">
                    <img src={'https://thefrisky.com/wp-content/uploads/2019/01/round-photo-1.png'} alt="avatar" />
                </div>
                <h1 className="avatar__title">
                    User01
                </h1>
            </div>
            <div className="btn__group">
                <button className="btn__group_arrow">
                    <Icons.ArrowBack/>
                </button>
                <button className="btn__group_arrow">
                    <Icons.ArrowForward/>
                </button>
            </div>
        </div>
        <div className="home__top_data">
                {
                    HomeTop.map(item => (
                        <div className="home__card_data" key={item.id}>
                            <div className="home__card_img" >
                                <img src={item.img} alt="card" />
                                <span className="time">{item.time}</span>
                            </div>
                            <h1 className="home__top_title">{item.title}</h1>
                            <div className="home__top_info">
                                <div className="home__top_view">
                                    <span>{item.view} views</span>
                                    <span>{item.date}</span>
                                </div>
                                <p className="home__top_user">{item.username}</p>
                            </div>
                        </div>
                ))
                }
            </div>
    </div>
}

export default MenuTop