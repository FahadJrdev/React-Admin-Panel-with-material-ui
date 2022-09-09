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


const Cuenta = () => {
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
    const [options16, setOptions16] = React.useState('Op1');
    const [options17, setOptions17] = React.useState('Op1');
    const handleSelectChangeOptions16 = (event) => {
        setOptions16(event.target.value);
    }
    const handleSelectChangeOptions17 = (event) => {
        setOptions17(event.target.value);
    }
  return (
    <Formik
            initialValues={{Banco:'',	TipodeCuenta:'', NroCuenta:''}}
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
                    <legend>Cuenta Bancaria</legend>
                    <div>
                        <TextField select label="Banco" name="Banco" value={options16} onChange={handleSelectChangeOptions16} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField select label="Tipo de Cuenta" name="TipodeCuenta" value={options17} onChange={handleSelectChangeOptions17} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Nro. Cuenta" name="NroCuenta" value={values.NroCuenta} type="text" onChange={handleChange}/>
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

export default Cuenta;