import React, { useState } from 'react';
import axios from 'axios';

const EditorCodigo = () => {
    const [codigo, setCodigo] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const handleRunCode = async () => {
        try {
            codigo = "print('hola mundo')"
            const response = await axios.post('http://localhost:8000/myapp/run_code/', { codigo });
            setOutput(response.data.output);
            setError('');
        } catch (err) {
            setOutput('');
            setError(err.response.data.error || 'Ha ocurrido un error');
        }
    };

    return (
        <div>
            <textarea 
                value={codigo} 
                onChange={(e) => setCodigo(e.target.value)} 
                placeholder="Escribe tu código Python aquí"
            />
            <button onClick={handleRunCode}>Run Codigo</button>
            {output && <pre>Output: {output}</pre>}
            {error && <pre style={{ color: 'red' }}>Error: {error}</pre>}
            
        </div>
    );
};

export default EditorCodigo;
