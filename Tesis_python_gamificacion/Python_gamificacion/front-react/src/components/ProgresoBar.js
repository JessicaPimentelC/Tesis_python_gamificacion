import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/progresoBar.css';


const ProgresoBar = () => {
    const [progreso, setProgreso] = useState(0);

    useEffect(() => {
        const fetchProgreso = async () => {
            try {
                const response = await axios.get('http://localhost:8000/myapp/progreso/');
                console.log('Datos recibidos:', response.data); 
                setProgreso(response.data['progreso']); 
            } catch (error) {
                console.error("Error al calcular el progreso", error);
            }
        };

        fetchProgreso();
    }, []);

    return (
        <div style={{ width: '100%', backgroundColor: 'white' }}>
            <div style={{
                width: `${progreso}%`,
                backgroundColor: 'grayIngresa la coordenada de tu Tarjeta BBVA Segura.',
                height: '24px',
                transition: 'width 0.5s ease-in-out'
            }}>
            </div>
        </div>
    );
};

export default ProgresoBar;

