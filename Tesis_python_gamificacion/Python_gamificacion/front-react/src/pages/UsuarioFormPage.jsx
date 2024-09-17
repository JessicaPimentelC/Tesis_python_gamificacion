import { useForm } from 'react-hook-form';
import { createUsuarios, deleteUsuarios, updateUsuarios, obtenerUsuarioId } from '../api/Usuario-api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { useEffect } from 'react';

export function UsuarioFormPage(){
    const {
        register, 
        handleSubmit,
        formState: {errors},
        setValue
        } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateUsuarios(params.id, data);
            toast.success("Usuario actualizado", {
            position: "bottom-right",
            style: {
                background: "#101010",
                color: "#fff",
            },
            });
        }else{
            await createUsuarios(data);
            toast.success("Nuevo usuario agregado", {
            position: "bottom-right",
            style: {
                background: "#101010",
                color: "#fff",
            },
            });
        }
    });
    useEffect(() => {
        async function cargarUsuario() {
        if (params.id) {
            const { data } = await obtenerUsuarioId(params.id);
            setValue("email", data.email);
            setValue("username", data.username);
            setValue("password", data.password);

            }
        }
        cargarUsuario();
    }, []);
    return (
        <div>
            <form onSubmit={onSubmit}>
            <input type="email" placeholder="Email" {...register("email",{required: true})} />
            <input type="text" placeholder="Username" {...register("username",{required: true})} />
            <input type="password" placeholder="Password"{...register("password",{required: true})} />
            <button>save</button>

            </form>
            {params.id && <button onClick={ async() => {
                const aceptar = window.confirm('Esta seguro?');
                if (aceptar){
                    await deleteUsuarios(params.id);
                    navigate("/usuario")
                }
            }}>Delete</button>}

        </div>
    )
}