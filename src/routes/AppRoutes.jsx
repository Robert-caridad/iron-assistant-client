import { Routes, Route } from 'react-router-dom'

import PrivateRouter from './PrivateRouters'
import SignUpPage from '../pages/SignUp/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPages'
import ErrorPage from '../pages/ErrorPage/Errorpage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import FaqPage from '../pages/FaqPage/FaqPage'
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage/Homepage'

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/faq' element={<FaqPage />} />
                <Route path='*' element={<ErrorPage />} />

                <Route element={<PrivateRouter />}>
                    <Route path='/dashboard/home' element={<HomePage />} />
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