import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/RESTService";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

export function Login() {
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    });
    
    // Stato per mostrare o nascondere l'alert di login avvenuto con successo
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    // Stato per mostrare o nascondere l'alert di errore di credenziali sbagliate
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    //Hook per la gestione della cronologia dei percorsi
    const navigate = useNavigate();

    //Mi prendo la funzione setUser dal contesto dell'autenticazione
    const { setUser } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormLogin({ ...formLogin, [name]: value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.table(formLogin);
        console.log("Form Login:", formLogin);

        try {
            const userDataLogin = await loginUser(formLogin, setUser);
            console.log("User Data from API:", userDataLogin);
            setShowSuccessAlert(true);
            //console.log("Login avvenuto con successo!");
            setTimeout(() => {
                navigate('/home'); // Effettua il reindirizzamento alla pagina home dopo 2 secondi
            }, 1000);
        } catch (error) {
            console.error("Errore durante il login:", error.message);
            setShowErrorAlert(true);
        }

        setFormLogin({
            email: "",
            password: ""
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center mb-4 fw-bold text-success">Login</h1>
                            {showSuccessAlert && (
                                <div className="alert alert-success" role="alert">
                                    Login avvenuto con successo!
                                </div>
                            )}
                            {showErrorAlert && (
                                <div className="alert alert-danger" role="alert">
                                    Credenziali non valide. Si prega di riprovare.
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" id="email" value={formLogin.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" className="form-control" id="password" value={formLogin.password} onChange={handleChange} required />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Accedi</button>
                                    <p className="text-center mt-2">
                                        Non sei ancora registrato? {" "}
                                        <NavLink to="/register" className="text-secondary">REGISTRATI</NavLink>
                                    </p>
                                    <p className="text-center mt-2">
                                        Torna alla pagina iniziale. {" "}
                                        <NavLink to="/" className="text-secondary">ACCESSO</NavLink>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}