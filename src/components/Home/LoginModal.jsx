import { useState } from 'react';
import React, { useContext } from 'react';
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const navigate = useNavigate();

    const handleLogin = () => {
        handleOpen();
        datosUser.esAdmin && setUserAdmin(true);
        setAuthUser(true);
        navigate('/');
    };

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
                        <Typography className="-mb-2" variant="h6">
                            Email
                        </Typography>
                        <Input label="Email" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Contraseña
                        </Typography>
                        <Input type="password" label="Password" size="lg" />
                        <div className="-ml-2.5 -mt-3">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            variant="gradient"
                            onClick={handleLogin}
                            fullWidth
                        >
                            iniciar sesion
                        </Button>
                        <Typography
                            variant="h6"
                            className="mt-4 flex justify-center gap-1"
                        >
                            No estas registrado?
                            <Link
                                onClick={handleOpen}
                                to="/registro"
                                className="font-bold text-colorOscuro"
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
