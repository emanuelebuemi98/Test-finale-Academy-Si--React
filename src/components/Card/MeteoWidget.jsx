import React, { useState } from 'react';
import { getMeteo, salvaDatiMeteo } from '../../services/RESTService';

export function MeteoWidget() {
    const [citta, setCitta] = useState('');
    const [datiMeteo, setDatiMeteo] = useState(null);

    const handleChange = (event) => {
        setCitta(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const dati = await getMeteo(citta);
            setDatiMeteo(dati);
        } catch (error) {
            console.error('Errore durante la richiesta dei dati meteo:', error.message);
        }
    };

    const handleSalvaDatiMeteo = async () => {
        try {
            if (datiMeteo) {
                const response = await salvaDatiMeteo({
                    citta: datiMeteo.name,
                    temperatura: datiMeteo.main.temp,
                    umidita: datiMeteo.main.humidity,
                    descrizione: datiMeteo.weather[0].description,
                    pressione: datiMeteo.main.pressure,
                    velocitaVento: datiMeteo.wind.speed,
                    direzioneVento: datiMeteo.wind.deg,
                    visibilita: datiMeteo.visibility
                });
                if (response) {
                    console.log("Dati meteo salvati con successo.");
                } else {
                    console.error("Errore durante il salvataggio dei dati meteo.");
                }
            } else {
                console.error("Nessun dato meteo disponibile per il salvataggio.");
            }
        } catch (error) {
            console.error("Errore:", error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Inserisci il nome della città"
                                value={citta}
                                onChange={handleChange}
                            />
                            <button className="btn btn-primary" type="submit">
                                Cerca
                            </button>
                        </div>
                    </form>
                    {datiMeteo && (
                        <div className="card mt-3">
                            <div className="card-body">
                                <h3 className="card-title">Dati meteo per {datiMeteo.name}</h3>
                                <p className="card-text">Temperatura: {datiMeteo.main.temp}°C</p>
                                <p className="card-text">Umidità: {datiMeteo.main.humidity}%</p>
                                <p className="card-text">Descrizione: {datiMeteo.weather[0].description}</p>
                                <p className="card-text">Pressione: {datiMeteo.main.pressure} hPa</p>
                                <p className="card-text">Velocità del vento: {datiMeteo.wind.speed} m/s</p>
                                <p className="card-text">Direzione del vento: {datiMeteo.wind.deg}°</p>
                                <p className="card-text">Visibilità: {datiMeteo.visibility} metri</p>
                                <button className="btn btn-primary" onClick={handleSalvaDatiMeteo}>
                                    Salva Dati Meteo
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}