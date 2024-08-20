import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/HomePage/Homepage'
import PrivateRouter from './PrivateRouters'
const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' />
                <Route path='/signup' />
                <Route path='/about' />
                <Route path='*' />

                <Route element={<PrivateRouter />}>
                    <Route path='/dashboard/home' />
                    <Route path='/dashboard/devices' />
                    <Route path='/dashboard/areas' />
                    <Route path='/dashboard/automations' />
                    <Route path='/dashboard/account' />
                </Route>

            </Routes>
        </div>
    )
}

export default AppRoutes