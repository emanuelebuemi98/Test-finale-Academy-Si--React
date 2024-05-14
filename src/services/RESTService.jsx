import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export async function registerUser(user) {
    try {
        const jsonBody = JSON.stringify(user);

        const response = await fetch("http://localhost:8080/api/utente/reg", {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonBody
        });

        console.log(response)

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Registrazione Fallita: ${response.statusText}`);
        }
    } catch (error) {
        throw new Error(`Errore durante la registrazione: ${error.message}`);
    }

}

export async function loginUser(credentials, setUser) {
    try {
        const jsonBody = JSON.stringify(credentials);

        const response = await fetch("http://localhost:8080/api/utente/login", {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonBody
        });

        if (response.ok) {
            const userData = await response.json();

            const JWTtoken = userData.token;
            // Salvo il token JWT nei cookie
            Cookies.set('token', JWTtoken, { expires: 7 });

            // Decodifico il token JWT per ottenere le informazioni dell'utente
            const decodedToken = jwtDecode(JWTtoken);

            setUser({
                nome: decodedToken.nome,
                cognome: decodedToken.cognome,
                email: decodedToken.email,
                tipologia: decodedToken && decodedToken.ruoli && decodedToken.ruoli.length > 0 ? "Admin" : "default",
                isAuthorized: true,
                token: JWTtoken
            });

            return userData;
        } else {
            throw new Error(`Login fallito: credenziali errate`);
        }
    } catch (error) {
        throw new Error(`Errore durante il login: ${error.message}`);
    }
}

export async function getMeteo(citta) {
    try {
        const apiKey = "c4ebcf4f66a3de87d3e6075b88c0f76c";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);

        if (response.ok) {
            const datiMeteo = await response.json();
            return datiMeteo;
        } else {
            throw new Error(`Errore durante la richiesta dei dati meteorologici: ${response.statusText}`);
        }
    } catch (error) {
        throw new Error(`Errore durante la richiesta dei dati meteorologici: ${error.message}`);
    }
}

export async function salvaDatiMeteo(datiMeteo) {
    try {
        const response = await fetch("http://localhost:8080/api/meteo/salva", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datiMeteo)
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Errore durante il salvataggio dei dati meteo: ${response.statusText}`);
        }
    } catch (error) {
        throw new Error(`Errore durante il salvataggio dei dati meteo: ${error.message}`);
    }
}