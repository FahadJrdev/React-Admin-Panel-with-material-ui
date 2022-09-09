
import { Formik } from 'formik';
// material
import {
    Stack
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const CurriculumVitae = () => (
    <Formik
            initialValues={{CurriculumVitae:'', GradoAcademico:'',	TítuloAcademico:'', CasadeEstudio:''}}
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
                    <legend>Datos de Carrera Del Empleado</legend>
                    <h6>Curriculum Vitae</h6>
                    <div>
                        <TextField label="Curriculum Vitae" name="CurriculumVitae" value={values.CurriculumVitae} type="file" onChange={handleChange} InputLabelProps={{shrink: true,}}/>
                        <TextField label="Grado Académico" name="GradoAcademico" value={values.GradoAcademico} type="text" onChange={handleChange}/>
                        <TextField label="Título Académico" name="TítuloAcademico" value={values.TítuloAcademico} type="text" onChange={handleChange}/>
                        <TextField label="Casa de Estudio" name="CasadeEstudio" value={values.CasadeEstudio} type="text" onChange={handleChange}/>
                    </div>
                </fieldset>
                <div>
                    <Stack spacing={2} direction="row">
                        <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>Nombre</Button>
                        <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>Acciones</Button>
                    </Stack>
                </div>
            </Box>
                )}
    </Formik>
    )

export default CurriculumVitae;