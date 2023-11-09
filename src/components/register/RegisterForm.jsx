import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from '@material-tailwind/react';
import { useState } from 'react';

export function RegisterForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        contraseña: '',
        validarContraseña: '',
    });

    const { nombre, email, contraseña, validarContraseña } = formData;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hola');
    };

    return (
        <Card
            className="p-5 self-center shadow-md shadow-black "
            color="transparent"
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
                        Nombre
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="nombre y apellido"
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
                        Email
                    </Typography>
                    <Input
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
                        contraseña
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="contraseña"
                        type="password"
                        value={contraseña}
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
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        name="validarContraseña"
                        type="password"
                        value={validarContraseña}
                        onChange={handleChange}
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                </div>
                <p>ERRO ERRRO ERRRO</p>

                <Button type="submit" className="mt-6" fullWidth>
                    Registar Usuario
                </Button>
            </form>
        </Card>
    );
}
