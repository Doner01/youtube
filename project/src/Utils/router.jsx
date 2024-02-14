import { HomePage, LibraryPage, SubPage, TrendPage } from "../Pages";

const Routers = [
    {
        id: 1,
        path: '/',
        element: <HomePage/>
    },
    {
        id: 2,
        path: '/trend',
        element: <TrendPage/>
    },
    {
        id: 3,
        path: '/sub',
        element: <SubPage/>
    },
    {
        id: 4,
        path: '/lib',
        element: <LibraryPage/>
    },
]

export default Routers