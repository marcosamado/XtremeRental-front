import React, { useState } from 'react';
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
    Select,
} from '@material-tailwind/react';

export function UserEditModal({ handleOpen, open }) {
    return (
        <>
            <Dialog
                size="xs"
                open={open}
                // handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Gestion usuario
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Edita los campos deseados y toca aceptar.
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                            Nombre de usuario
                        </Typography>
                        <Input size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Nombre
                        </Typography>
                        <Input label="Password" size="lg" />

                        <Typography className="-mb-2" variant="h6">
                            Apellido
                        </Typography>
                        <Input label="Password" size="lg" />

                        <Typography className="-mb-2" variant="h6">
                            Email
                        </Typography>
                        <Input label="Password" size="lg" />
                        <Select>
                            <Option>hola</Option>
                            <Option>holaaa</Option>
                        </Select>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-around">
                        <Button
                            className=" w-auto"
                            variant="gradient"
                            color="light-blue"
                            onClick={handleOpen}
                            fullWidth
                        >
                            Aceptar
                        </Button>
                        <Button
                            className=" w-auto"
                            variant="gradient"
                            color="red"
                            onClick={handleOpen}
                            fullWidth
                        >
                            Cancelar
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}

{
    /* <form className="flex flex-col mt-2 gap-2 max-w-sm border-2 p-5">
        <span>Ingresa los datos que desea cambiar</span>
        <span>Nombre de usuario</span>
        <input
            className="border-2"
            type="text"
            name="nombreDeUsuario"
            value={user.nombreDeUsuario}
        />
        <span>Nombre</span>
        <input
            className="border-2"
            type="text"
            name="nombre"
            value={user.nombre}
        />
        <span>Apellido</span>
        <input
            className="border-2"
            type="text"
            name="apellido"
            value={user.apellido}
        />
        <span>Email</span>
        <input
            className=" border-2 "
            type="text"
            name="email"
            value={user.email}
        />
    </form> */
}
