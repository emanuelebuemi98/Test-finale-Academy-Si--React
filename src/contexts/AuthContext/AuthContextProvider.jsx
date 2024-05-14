import { AuthContext } from "./AuthContext";
import { useState } from "react";
import Cookies from "js-cookie";

//componente che fornisce il contesto all'applicazione
export function AuthContextProvider({ children }) {

    // Ottiengo i valori dei cookie
    const nome = Cookies.get("nome");
    const cognome = Cookies.get("cognome");
    const email = Cookies.get("email");
    const isAuthorized = false;

    const userDataString = Cookies.get("userData");

    // Definisci lo stato di partenza dell'utente
    const [user, setUser] = useState({
        nome,
        cognome,
        email,
        isAuthorized
    });
    return (
        //sostituisce il valore del context di default
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}