import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

export function Home() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-12">
                        <h1 className="text-center mb-4 fw-bold text-success">
                            Benvenuto nella pagina Home Page di <br />
                            {user && user.nome} {user && user.cognome}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}