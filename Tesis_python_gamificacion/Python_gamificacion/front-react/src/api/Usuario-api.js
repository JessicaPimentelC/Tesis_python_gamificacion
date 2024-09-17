import axios from "axios"

const apiURL = axios.create({
    baseURL: "http://localhost:8000/myapp/api/"
})


export const login = (usuario) => apiLogin.post('/', usuario);

export const obtenerUsuarios = () => apiURL.get('/');

export const obtenerUsuarioId = (id) => apiURL.get(`/${id}`);

export const createUsuarios = (usuario) => apiURL.post('/', usuario);

export const updateUsuarios = (id, usuario) => apiURL.put(`/${id}/`, usuario);

export const deleteUsuarios = (id) => apiURL.delete(`/${id}`);

