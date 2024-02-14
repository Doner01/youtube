import { Suspense } from "react"
import Logo from "../../Components/Logo"
import HeaderSide from "../../Components/header"
import MenuBar from "../../Components/menu-bar"
import Loading from "../../Components/loading"
import { Route, Routes } from "react-router-dom"
import Routers from "../../Utils/router"

const AppRouters = () => {
    return <>
        <div className="app">
            <div className="app__menu">
                <Logo/>
                <MenuBar/>
            </div>
            <div className="app__all">
                <div className="app__header">
                    <HeaderSide/>
                </div>
                <div className="app__main">
                    <Suspense fallback={<Loading/>}>
                        <Routes>
                            {
                                Routers.map(item => (
                                    <Route key={item.id} path={item.path} element={item.element}/>
                                ))
                            }
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    </>
}

export default AppRouters