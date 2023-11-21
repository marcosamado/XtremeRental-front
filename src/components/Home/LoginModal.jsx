import { useState } from 'react';
import { useContext } from 'react';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from '@material-tailwind/react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function LoginModal() {
    const { authUser, setAuthUser, setUserAdmin, datosUser } =
        useContext(UserContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [errorLogin, setErrorLogin] = useState(false);

    const { username, password } = loginData;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });

        setErrorLogin(false);
    };

    const handleLogin = async () => {
        try {
            const data = await authLogin(loginData);

            if (data) {
                authLogin(loginData);

                handleOpen();

                navigate('/');
            } else {
            }
        } catch (error) {
            console.error('Error al manejar el inicio de sesión:', error);
        }
    };

    const authLogin = async (payload) => {
        const url = 'http://localhost:8080/auth/login';
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };

        try {
            const response = await fetch(url, settings);

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            localStorage.setItem('jwt', JSON.stringify(data));
            setAuthUser(true);

            return data;
        } catch (error) {
            console.error('Error en la autenticación:', error);
            setErrorLogin(true);

            throw error;
        }
    };

    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Button
                onClick={handleOpen}
                className="text-white border w-auto rounded-md text-xs py-2 bg-colorCalido border-colorCalido px-3"
            >
                login
            </Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            iniciar sesion
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Ingresa tus datos
                        </Typography>
                        {/* <Typography className="-mb-2" variant="h6"></Typography> */}
                        <Input
                            name="username"
                            value={username}
                            onChange={handleChange}
                            label="Nombre de usuario"
                            size="lg"
                        />
                        {/* <Typography className="-mb-2" variant="h6"></Typography> */}
                        <Input
                            name="password"
                            value={password}
                            onChange={handleChange}
                            type="password"
                            label="Password"
                            size="lg"
                        />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            variant="gradient"
                            onClick={handleLogin}
                            fullWidth
                            color="red"
                        >
                            iniciar sesion
                        </Button>
                        {errorLogin && (
                            <Typography className="flex justify-center mt-5 text-colorCalido">
                                Los datos son incorrectos
                            </Typography>
                        )}
                        <Typography
                            variant="h6"
                            className="mt-4 flex justify-center gap-1 "
                        >
                            No estas registrado?
                            <Link
                                onClick={handleOpen}
                                to="/registro"
                                className="font-bold text-colorAgua"
                            >
                                Crear Cuenta
                            </Link>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
