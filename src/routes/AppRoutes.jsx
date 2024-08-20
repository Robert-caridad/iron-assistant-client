import { Routes, Route } from 'react-router-dom'
import Homepage from './../pages/HomePage/HomePage'
import PrivateRouter from './PrivateRouters'
import SignUpPage from '../pages/SignUp/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPages'
const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/about' />
                <Route path='/faq' />
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