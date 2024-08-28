import { useContext } from "react"
import { AuthContext } from "../contexts/auth.contexts"
import { Navigate, Outlet } from "react-router-dom"
import Layout from "../components/Layout"

const PrivateRouter = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (!loggedUser) {
        return <Navigate to='/?err=401' />
    }

    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export default PrivateRouter