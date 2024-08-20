import { Routes, Route } from 'react-router-dom'
import Homepage from './../pages/HomePage/HomePage'
import PrivateRouter from './PrivateRouters'
import SignUpPage from '../pages/SignUp/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPages'
import ErrorPage from '../pages/ErrorPage/Errorpage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import FaqPage from '../pages/FaqPage/FaqPage'

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/faq' element={<FaqPage />} />
                <Route path='*' element={<ErrorPage />} />

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