import { useContext } from "react"
import { AuthContext } from "../contexts/auth.contexts"
import { Outlet } from "react-router-dom"

const PrivateRouter = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        //TODO: Add component spinner
        return <h1>Loading</h1>
    }

    if (!loggedUser) {
        //TODO: change route
        return <Navigate to='/' />
    }

    return <Outlet />
}

export default PrivateRouter