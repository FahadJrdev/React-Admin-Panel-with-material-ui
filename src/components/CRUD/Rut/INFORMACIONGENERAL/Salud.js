import * as React from 'react';
import { Formik } from 'formik';
// material
import {
  Stack
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const Salud = () => {
    const Options = [
        {
            value: 'Op1',
            label: 'OP1'
        },
        {
            value: 'Op2',
            label: 'OP2'
        },
        {
            value: 'Op3',
            label: 'OP3'
        }
    ]
    const [options8, setOptions8] = React.useState('Op1');
    const [options9, setOptions9] = React.useState('Op1');
    const [options10, setOptions10] = React.useState('Op1');
    const [options11, setOptions11] = React.useState('Op1');
    const [options12, setOptions12] = React.useState('Op1');
    const [options13, setOptions13] = React.useState('Op1');
    const [options14, setOptions14] = React.useState('Op1');
    const [options15, setOptions15] = React.useState('Op1');
   
    const handleSelectChangeOptions8 = (event) => {
        setOptions8(event.target.value);
    }
    const handleSelectChangeOptions9 = (event) => {
        setOptions9(event.target.value);
    }
    const handleSelectChangeOptions10 = (event) => {
        setOptions10(event.target.value);
    }
    const handleSelectChangeOptions11 = (event) => {
        setOptions11(event.target.value);
    }
    const handleSelectChangeOptions12 = (event) => {
        setOptions12(event.target.value);
    }
    const handleSelectChangeOptions13 = (event) => {
        setOptions13(event.target.value);
    }
    const handleSelectChangeOptions14 = (event) => {
        setOptions14(event.target.value);
    }
    const handleSelectChangeOptions15 = (event) => {
        setOptions15(event.target.value);
    }
  return (
    
    <Formik
        initialValues={{TipoPrevisional:'', NombreAFP: '', Moneda:'', Ahorro:'', Nombre:'', TipoMonedaSalud:'', ValorPlan:'', AdicionalPlan:'', NombreAPVI:'', TipoMonedaAPVI:'', ValorAPVI :'', FormadePagoAPVI:'', DepositoConvenidoAPVI:''}}
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
                <fieldset>
                    <legend>Previsión</legend>
                    <div>
                        <TextField select label="Tipo Régimen Previsional" name="TipoPrevisional" value={options8} onChange={handleSelectChangeOptions8} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField select label="Nombre AFP" name="NombreAFP" value={options9} onChange={handleSelectChangeOptions9} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField select label="Moneda Cuenta 2 - Ahorro Volunt." name="Moneda" value={options10} onChange={handleSelectChangeOptions10} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Valor Cuenta 2 - Ahorro Volunt." name="Ahorro" value={values.Ahorro} type="text" onChange={handleChange}/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Salud</legend>
                    <div>
                        <TextField select label="Nombre" name="Nombre" value={options11} onChange={handleSelectChangeOptions11} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField select label="Tipo Moneda Salud" name="TipoMonedaSalud" value={options12} onChange={handleSelectChangeOptions12} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Valor Plan" name="ValorPlan" value={values.ValorPlan} type="text" onChange={handleChange}/>
                        <TextField label="Adicional Plan Auge (UF)" name="AdicionalPlan" value={values.AdicionalPlan} type="text" onChange={handleChange}/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>APVI - Ahorro Previsional Voluntario Individual</legend>
                    <div>
                        <TextField select label="Nombre APVI" name="NombreAPVI" value={options13} onChange={handleSelectChangeOptions13} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField select label="Tipo Moneda APVI" name="TipoMonedaAPVI" value={options14} onChange={handleSelectChangeOptions14} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Valor APVI" name="ValorAPVI" value={values.ValorAPVI} type="text" onChange={handleChange}/>
                        <TextField select label="Forma de Pago APVI" name="FormadePagoAPVI" value={options15} onChange={handleSelectChangeOptions15} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Deposito Convenido APVI" name="DepositoConvenidoAPVI" value={values.DepositoConvenidoAPVI} type="text" onChange={handleChange}/>
                    </div>
                </fieldset>
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

export default Salud;