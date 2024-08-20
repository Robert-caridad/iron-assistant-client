import { createContext, useState } from "react";

const AuthContext = createContext()

function AuthProviderWrapper(props) {
    const [loggedUsed, setloggedUsed] = useState(null)

    return (
        <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }