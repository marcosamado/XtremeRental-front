import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from '@material-tailwind/react';

export function RegisterForm() {
    return (
        <Card className="p-5 self-center" color="transparent" shadow={true}>
            <Typography variant="h4" color="blue-gray">
                Registro de usuario
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Agrega tus datos para registrarte
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Nombre
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
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
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
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
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        autoComplete="new-password"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                </div>

                <Button className="mt-6" fullWidth>
                    Registar Usuario
                </Button>
            </form>
        </Card>
    );
}
