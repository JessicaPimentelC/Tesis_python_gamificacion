import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export function LoginFormPage() {
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();
const navigate = useNavigate();

const onSubmit = handleSubmit(async (data) => {
    try {
    const response = await axios.post(
        "http://localhost:8000/myapp/login/",
        data
    );
    toast.success(response.data.message, {
        position: "bottom-right",
        style: {
        background: "#101010",
        color: "#fff",
        },
    });
    navigate("/usuario"); // Redirige a la página de inicio o dashboard después del inicio de sesión
    } catch (error) {
    toast.error(
        error.response?.data?.message || "Error en el inicio de sesión",
        {
        position: "bottom-right",
        style: {
            background: "#101010",
            color: "#fff",
        },
        }
    );
    }
});

return (
    <div>
    <form onSubmit={onSubmit}>
        <div>
        <label>Email</label>
        <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
        />
        {errors.email && <span>Email es obligatorio</span>}
        </div>
        <div>
        <label>Contraseña</label>
        <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
        />
        {errors.password && <span>Contraseña es obligatoria</span>}
        </div>
        <button type="submit">Iniciar sesión</button>
    </form>
    </div>
);
}
