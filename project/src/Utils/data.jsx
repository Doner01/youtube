import Icons from "../Assets/Icons";

const MenuList = [
    {
        id: 1,
        title: 'Home',
        Icon: <Icons.Home/>,
        path: '/'
    },
    {
        id: 2,
        title: 'Trending',
        Icon: <Icons.Fire/>,
        path: '/trend'
    },
    {
        id: 3,
        title: 'Subcriptions',
        Icon: <Icons.Sub/>,
        path: '/sub'
    },
    {
        id: 4,
        title: 'Library',
        Icon: <Icons.File/>,
        path: '/lib'
    }
]

const HomeTop = [
    {
        id: 1,
        title: 'Birinchi video',
        username: 'User1',
        view: '80k',
        date: '3 day ago',
        time: '4:15',
        img: 'https://www.lifewire.com/thmb/oGvZDyjf75TqEJFzi24w8EsUO_4%3d/2000x1333/filters:fill(auto%2c1)/youtubelogo-5c64435446e0fb000184a47e.jpg'
    },
    {
        id: 2,
        title: 'Ikkinchi video video',
        username: 'User2',
        view: '154k',
        date: '1 day ago',
        time: '4:15',
        img: 'https://www.lifewire.com/thmb/oGvZDyjf75TqEJFzi24w8EsUO_4%3d/2000x1333/filters:fill(auto%2c1)/youtubelogo-5c64435446e0fb000184a47e.jpg'
    },
    {
        id: 3,
        title: 'Ikkinchi video video',
        username: 'User2',
        view: '154k',
        date: '1 day ago',
        time: '4:15',
        img: 'https://www.lifewire.com/thmb/oGvZDyjf75TqEJFzi24w8EsUO_4%3d/2000x1333/filters:fill(auto%2c1)/youtubelogo-5c64435446e0fb000184a47e.jpg'
    },
]

export { MenuList, HomeTop }