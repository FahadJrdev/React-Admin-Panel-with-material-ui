import * as React from 'react';
import { Formik } from 'formik';
// material
import {Stack} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const MantenedordePersonal = () => {
    const Nacionalidad = [
        {
            value: 'N1',
            label: 'N1'
        },
        {
            value: 'N2',
            label: 'N2'
        },
        {
            value: 'N3',
            label: 'N3'
        }
    ];
    const EstadoCivil = [
        {
            value: 'E1',
            label: 'E1'
        },
        {
            value: 'E2',
            label: 'E2'
        },
        {
            value: 'E3',
            label: 'E3'
        }
    ];
    const Sexo = [
        {
            value: 'S1',
            label: 'S1'
        },
        {
            value: 'S2',
            label: 'S2'
        },
        {
            value: 'S3',
            label: 'S3'
        }
    ];
    const [nacionalidad, setNacionalidad] = React.useState('N1');
    const [estadoCivil, setEstadoCivil] = React.useState('E1');
    const [sexo, setSexo] = React.useState('S1');

    const handleSelectChangeNac = (event) => {
        setNacionalidad(event.target.value);
    };
    const handleSelectChangeCivil = (event) => {
        setEstadoCivil(event.target.value);
    };
    const handleSelectChangeSexo = (event) => {
        setSexo(event.target.value);
    };
    return(
        <Formik
            initialValues={{RUT: '',Nombre: '',primer_apellido: '',segundo_apellido: '',Nacimiento: '',Nacionalidad: '',Pasaporte: '',Cargo: '',Telefono: '',Electronico: '',Civil: '',sexo: ''}}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values);
                    setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                handleChange,
                handleSubmit,
                isSubmitting
            }) => (
            <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField label="R.U.T." name="RUT" value={values.RUT} type="text" onChange={handleChange} />
                    <TextField label="Nombre(s)" name="Nombre" value={values.Nombre} type="text" onChange={handleChange}/>
                    <TextField label="Primer Apellido" name="primer_apellido" value={values.primer_apellido} type="text" onChange={handleChange}/>
                    <TextField label="Segundo Apellido" name="segundo_apellido" value={values.segundo_apellido} type="text" onChange={handleChange}/>
                    <FormControlLabel value="Activo" control={<Checkbox />} label="Activo" labelPlacement="top"/>
                </div>
                <div>
                    <TextField label="Fec. Nacimiento" name="Nacimiento" value={values.Nacimiento} type="text" onChange={handleChange}/>
                    <TextField select label="Nacionalidad" name="Nacionalidad" value={nacionalidad} onChange={handleSelectChangeNac} helperText="Please select nacionalidad">
                        {Nacionalidad.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField label="Pasaporte" name="Pasaporte" value={values.Pasaporte} type="text" onChange={handleChange}/>
                    <TextField label="Cargo" name="Cargo" value={values.Cargo} type="text" onChange={handleChange}/>
                    <FormControlLabel value="Vendedor" control={<Checkbox />} label="Vendedor" labelPlacement="top"/>
                </div>
                <div>
                    <TextField label="Teléfono" name="Telefono" value={values.Telefono} type="number" onChange={handleChange}/>
                    <TextField label="Correo Electronico" name="Electronico" value={values.Electronico} type="text" onChange={handleChange}/>
                    <TextField select label="Estado Civil" name="Civil" value={estadoCivil} onChange={handleSelectChangeCivil} helperText="Please select Estado Civil">
                        {EstadoCivil.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField select label="Sexo" name="Sexo" value={sexo} onChange={handleSelectChangeSexo} helperText="Please select Sexo">
                        {Sexo.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <Stack spacing={2} direction="row">
                        <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>Submit</Button>
                    </Stack>
                </div>
            </Box>
                )}
        </Formik>
        )
}

export default MantenedordePersonal