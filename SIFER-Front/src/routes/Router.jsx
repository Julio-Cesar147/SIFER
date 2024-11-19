import {Route, Routes } from "react-router-dom"
import SinginPage from "../auth/SinginPage"
import Cart from "../pages/customer/Cart"
import Home from "../pages/customer/Home"


export const Routers = () => {
    return(
        <>
        <div className='flex justify-around'>
            
            <NavBar />
            <div className='mt-9 w-11/12 p-4 flex  overflow-hidden rounded-md border bg-white mb-3'>
            <Routes>
                <Route  path="/Home" element={<Home />} />
                <Route  path="/Cart" element={<Cart />} />
                <Route  path="/SinginPage" element={<SinginPage />} />

            </Routes>
            </div>
    
        </div>
        </>
    )
}