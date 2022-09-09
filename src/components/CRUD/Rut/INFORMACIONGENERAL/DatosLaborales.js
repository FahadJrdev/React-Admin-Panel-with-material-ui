import * as React from 'react';
import { Formik } from 'formik';
// material
import {
  Stack
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';


const DatosLaborales = () => {
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
    const [options1, setOptions1] = React.useState('Op1');
    const [options2, setOptions2] = React.useState('Op1');
    const [options3, setOptions3] = React.useState('Op1');
    const [options4, setOptions4] = React.useState('Op1');
    const [options5, setOptions5] = React.useState('Op1');
    const [options6, setOptions6] = React.useState('Op1');
    const [options7, setOptions7] = React.useState('Op1');
    const handleSelectChangeOptions1 = (event) => {
        setOptions1(event.target.value);
    }
    const handleSelectChangeOptions2 = (event) => {
        setOptions2(event.target.value);
    }
    const handleSelectChangeOptions3 = (event) => {
        setOptions3(event.target.value);
    }
    const handleSelectChangeOptions4 = (event) => {
        setOptions4(event.target.value);
    }
    const handleSelectChangeOptions5 = (event) => {
        setOptions5(event.target.value);
    }
    const handleSelectChangeOptions6 = (event) => {
        setOptions6(event.target.value);
    }
    const handleSelectChangeOptions7 = (event) => {
        setOptions7(event.target.value);
    }
  return (
    
    <Formik
        initialValues={{TipoTrabajador:'', TipoJornada:'', Ingreso:'',	Contrato:'', Termino:'', Departamento :'', Pasaporte: '', Sucursal:'', TipodeContrato: '', Hrs:'', Dias:'', Mensual:'', Gratificación:'', Distribucion:'', Tiempo: '', Nro:'', TramoAsignado: '', Valor:''}}
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
                    <legend>Relación Laboral</legend>
                    <div>
                        <FormControl>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel value="Contrato" control={<Radio />} label="Contrato" />
                            <FormControlLabel value="Boleta de Honorarios" control={<Radio />} label="Boleta de Honorarios" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Contrato</legend>
                    <div>
                        <TextField select label="Tipo Trabajador" name="TipoTrabajador" value={options1} onChange={handleSelectChangeOptions1} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField select label="Tipo Jornada" name="TipoJornada" value={options2} onChange={handleSelectChangeOptions2} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Ingreso" name="Ingreso" value={values.Ingreso} type="text" onChange={handleChange} />
                        <TextField label="Contrato" name="Contrato" value={values.Contrato} type="text" onChange={handleChange}/>
                        <TextField label="Término" name="Termino" value={values.Termino} type="text" onChange={handleChange}/>
                        <FormControlLabel value="Indefinido" control={<Checkbox />} label="Indefinido" labelPlacement="top"/>
                    </div>
                    <div>
                        <TextField label="Departamento " name="Departamento " value={values.Departamento } type="text" onChange={handleChange}/>
                        <TextField label="Pasaporte" name="Pasaporte" value={values.Pasaporte} type="text" onChange={handleChange}/>
                        <TextField select label="Sucursal" name="Sucursal" value={options3} onChange={handleSelectChangeOptions3} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField select label="Tipo de Contrato" name="TipodeContrato" value={options4} onChange={handleSelectChangeOptions4} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <FormControlLabel value="Seguro de Cesantía" control={<Checkbox />} label="Seguro de Cesantía" labelPlacement="top"/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Remuneración</legend>
                    <div>
                        <TextField label="Hrs. Semanales " name="Hrs" value={values.Hrs} type="text" onChange={handleChange}/>
                        <TextField label="Días Semanales" name="Dias" value={values.Dias} type="text" onChange={handleChange}/>
                        <TextField label="Sueldo Base Mensual" name="Mensual" value={values.Mensual} type="text" onChange={handleChange}/>
                        <TextField select label="Gratificación" name="Gratificación" value={options5} onChange={handleSelectChangeOptions5} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <FormControlLabel value="Sueldo Variable" control={<Checkbox />} label="Sueldo Variable" labelPlacement="top"/>
                    </div>
                    <div>
                        <TextField label="Distribución de la Jornada" multiline maxRows={4} name="Distribucion" value={values.Distribucion} type="text" onChange={handleChange}/>
                        <TextField select label="Tiempo de Colación(Min.)" name="Tiempo" value={options6} onChange={handleSelectChangeOptions6} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Cargas Familiares</legend>
                    <div>
                        <TextField label="Nro. Cargas" name="Nro" value={values.Nro} type="text" onChange={handleChange}/>
                        <TextField select label="Tramo Asignado" name="TramoAsignado" value={options7} onChange={handleSelectChangeOptions7} helperText="Please select">
                            {Options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Valor por Carga" name="Valor" value={values.Valor} type="text" onChange={handleChange}/>
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

export default DatosLaborales;