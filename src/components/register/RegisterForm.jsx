import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export function RegisterForm() {
    const { setAuthUser, setDatosUser, datosUser, setUserAdmin } =
        useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        validarPassword: '',
    });
    const [error, setError] = useState({
        errorPassword: '',
        erroresvalidaciones: '',
    });

    const { username, nombre, apellido, email, password, validarPassword } =
        formData;

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

        validaciones(username, nombre, apellido, password, validarPassword);
    };

    const validaciones = (
        username,
        nombre,
        apellido,
        password,
        validarPassword,
    ) => {
        if (password !== validarPassword) {
            setError({
                ...error,
                errorPassword: 'Las contraseñas no coinciden',
            });
        } else if (
            username.trim().length < 3 ||
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
                username,
                nombre,
                apellido,
                email,
                password,
            };

            const url = 'http://localhost:8080/auth/register';
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
                    setDatosUser({
                        username: data.username,
                        nombre: data.nombre,
                        apellido: data.apellido,
                        email: data.email,
                        role: data.role,
                    });
                    localStorage.setItem('user', JSON.stringify(data));
                    localStorage.setItem('jwt', JSON.stringify(data.token));
                });
            setAuthUser(true);
            datosUser.role === 'ADMIN' && setUserAdmin(true);

            navigate('/');
            setFormData({
                username: '',
                nombre: '',
                apellido: '',
                email: '',
                password: '',
                validarPassword: '',
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
                        name="username"
                        type="text"
                        value={username}
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
                        Contraseña
                    </Typography>
                    <Input
                        required
                        minLength={3}
                        maxLength={10}
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="password"
                        type="password"
                        value={password}
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
                        Confirmar contraseña
                    </Typography>
                    <Input
                        required
                        minLength={3}
                        maxLength={10}
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="validarPassword"
                        type="password"
                        value={validarPassword}
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
