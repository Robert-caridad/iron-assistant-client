import { Routes, Route } from 'react-router-dom'

import PrivateRouter from './PrivateRouters'
import SignUpPage from '../pages/SignUp/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPages'
import ErrorPage from '../pages/ErrorPage/Errorpage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import FaqPage from '../pages/FaqPage/FaqPage'
import HomePage from '../pages/HomePage/HomePage'
import HomePageDashBoard from '../pages/DashBoard/HomePageDashBoard/HomePageDashBoard'
import DevicesPageDashboard from '../pages/Dashboard/DevicesPageDashboard/DevicesPageDashboard'
import AreasPageDashboard from '../pages/Dashboard/AreasPageDashboard/AreasPageDashboard'
import AutomationsPageDashboard from '../pages/Dashboard/AutomationsPageDashboard/AutomationsPageDashboard'


const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/faq' element={<FaqPage />} />

                <Route element={<PrivateRouter />}>
                    <Route path='/dashboard/home' element={<HomePageDashBoard />} />
                    <Route path='/dashboard/devices' element={<DevicesPageDashboard />} />
                    <Route path='/dashboard/areas' element={<AreasPageDashboard />} />
                    <Route path='/dashboard/automations' element={<AutomationsPageDashboard />} />
                    <Route path='/dashboard/account' />
                </Route>

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes