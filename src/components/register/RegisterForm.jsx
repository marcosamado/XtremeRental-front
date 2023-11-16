import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export function RegisterForm() {
    const { setAuthUser, setDatosUser, datosUser, setUserAdmin } =
        useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombreDeUsuario: '',
        nombre: '',
        apellido: '',
        email: '',
        contrasena: '',
        validarcontrasena: '',
        esAdmin: false,
    });
    const [error, setError] = useState({
        errorPassword: '',
        erroresvalidaciones: '',
    });

    const {
        nombreDeUsuario,
        nombre,
        apellido,
        email,
        contrasena,
        validarcontrasena,
    } = formData;

    const handleChange = (e) => {
        setError({
            errorPassword: '',
            erroresvalidaciones: '',
        });
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        validaciones(
            nombreDeUsuario,
            nombre,
            apellido,
            contrasena,
            validarcontrasena,
        );
    };

    const validaciones = (
        nombreDeUsuario,
        nombre,
        apellido,
        contrasena,
        validarcontrasena,
    ) => {
        if (contrasena !== validarcontrasena) {
            setError({
                ...error,
                errorPassword: 'Las contraseñas no coinciden',
            });
        } else if (
            nombreDeUsuario.trim().length < 3 ||
            nombre.trim().length < 3 ||
            apellido.trim().length < 3
        ) {
            setError({
                ...error,
                erroresvalidaciones:
                    'Algunos de los datos ingresados son incorrectos',
            });
            return;
        } else {
            const payload = {
                nombreDeUsuario,
                nombre,
                apellido,
                email,
                contrasena,
                esAdmin: false,
            };

            const url = 'http://localhost:8080/usuarios';
            const settings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            };

            fetch(url, settings)
                .then((response) => response.json())
                .then((data) => {
                    setDatosUser(data);
                });
            setAuthUser(true);
            datosUser.esAdmin && setUserAdmin(true);

            navigate('/');

            setFormData({
                nombreDeUsuario: '',
                nombre: '',
                apellido: '',
                email: '',
                contrasena: '',
                validarcontrasena: '',
                esAdmin: false,
            });
        }
    };

    return (
        <Card
            className="p-5 self-center shadow-md shadow-black "
            color="white"
            shadow={false}
        >
            <Typography variant="h4" color="blue-gray">
                Registro de usuario
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Agrega tus datos para registrarte
            </Typography>
            <form
                onSubmit={handleSubmit}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
                <div className="mb-1 flex flex-col gap-4">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Nombre de usuario
                    </Typography>
                    <Input
                        required
                        size="lg"
                        placeholder="Nombre de usuario"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
                        autoComplete="new-password"
                        name="nombreDeUsuario"
                        type="text"
                        value={nombreDeUsuario}
                        onChange={handleChange}
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Nombre
                    </Typography>
                    <Input
                        required
                        size="lg"
                        placeholder="nombre"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="nombre"
                        type="text"
                        value={nombre}
                        onChange={handleChange}
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Apellido
                    </Typography>
                    <Input
                        required
                        size="lg"
                        placeholder="apellido"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="apellido"
                        type="text"
                        value={apellido}
                        onChange={handleChange}
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Email
                    </Typography>
                    <Input
                        required
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        contrasena
                    </Typography>
                    <Input
                        required
                        minLength={3}
                        maxLength={10}
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="contrasena"
                        type="password"
                        value={contrasena}
                        onChange={handleChange}
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Confirmar contrasena
                    </Typography>
                    <Input
                        required
                        minLength={3}
                        maxLength={10}
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="validarcontrasena"
                        type="password"
                        value={validarcontrasena}
                        onChange={handleChange}
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                </div>
                {error.errorPassword && (
                    <p className="text-center p-2  text-colorCalido rounded-md mt-4">
                        {error.errorPassword}
                    </p>
                )}
                {error.erroresvalidaciones && (
                    <p className="text-center p-2 text-colorCalido rounded-md mt-4">
                        {error.erroresvalidaciones}
                    </p>
                )}

                <Button type="submit" className="mt-6 bg-colorAgua" fullWidth>
                    Registar Usuario
                </Button>
            </form>
        </Card>
    );
}
