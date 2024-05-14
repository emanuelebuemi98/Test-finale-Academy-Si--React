import React from 'react';
import { MeteoWidget } from '../../components/Card/MeteoWidget';


export function MeteoPage() {
    return (
        <div>
            <h1 className="text-center mb-4 fw-bold text-success">Previsioni Meteo</h1>
            <MeteoWidget/>
        </div>
    );
}