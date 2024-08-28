import { Routes, Route } from 'react-router-dom'
import PrivateRouter from './PrivateRouters'
import SignUpPage from '../pages/SignUp/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPages'
import ErrorPage from '../pages/ErrorPage/Errorpage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import FaqPage from '../pages/FaqPage/FaqPage'
import HomePage from '../pages/HomePage/HomePage'
import DevicesPageDashboard from '../pages/Dashboard/DevicesPageDashboard/DevicesPageDashboard'
import AreasPageDashboard from '../pages/Dashboard/AreasPageDashboard/AreasPageDashboard'
import AutomationsPageDashboard from '../pages/Dashboard/AutomationsPageDashboard/AutomationsPageDashboard'
import HomePagesDashboard from '../pages/Dashboard/HomePageDashboard/HomePageDashboard'
import TechnologiesPage from '../pages/TechnologiesPage/TechnologiesPage'
import AnalyticsDashboard from '../pages/Dashboard/AnalyticsDashboard/AnalyticsDashboard'

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/faq' element={<FaqPage />} />
                <Route path='/technologies' element={<TechnologiesPage />} />

                <Route element={<PrivateRouter />}>
                    <Route path='/dashboard/home' element={<HomePagesDashboard />} />
                    <Route path='/dashboard/devices' element={<DevicesPageDashboard />} />
                    <Route path='/dashboard/areas' element={<AreasPageDashboard />} />
                    <Route path='/dashboard/automations' element={<AutomationsPageDashboard />} />
                    <Route path='/dashboard/analytics' element={<AnalyticsDashboard />} />
                    <Route path='/dashboard/account' />
                </Route>

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes