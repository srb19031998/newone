import { Button, Grid, TextField } from "@mui/material"
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom'
import { registerApi } from "../../api/register.api";
export const MyRegisterationForm: React.FC = () => {
    return <>
<FormaicWrapper/>

    </>
}


const FormaicWrapper: React.FC = () => {
    let navigate=useNavigate()
    return <>
        <Formik
            initialValues={{ email: '', password: '', name: '', isseller: '' }}
            validate={values => {
                interface Ierrors {
                    email?: String
                }
                const errors: Ierrors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              // console.log(values)
               registerApi(values.name,values.email,values.password,
                values.isseller )
              
               // registerApi( data)
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                  //  registerApi()
                    navigate('/pro/login')
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ handleSubmit, handleChange, values }) => (
               
                    <form onSubmit={handleSubmit}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <h1>Registeration form</h1>
                            <TextField
                                id="outlined-basic"
                                label="name"
                                name="name"
                                type="text"
                                value={values.name}
                                variant="outlined"
                                margin="normal" 
                                onChange={handleChange}
                                />
                            <TextField
                                id="outlined-basic"
                                label="email"
                                name="email"
                                type="email"
                                value={values.email}
                                variant="outlined"
                                margin="normal"
                                onChange={handleChange}
                            />
                            <TextField
                                id="outlined-basic"
                                label="password"
                                name="password"
                                type="password"
                                value={values.password}
                                variant="outlined"
                                margin="normal"
                                onChange={handleChange}
                            />
                            <TextField
                                id="outlined-basic"
                                label="are u a seller"
                                name="isseller"
                                type="text"
                                value={values.isseller}
                                variant="outlined"
                                margin="normal"
                                onChange={handleChange}
                            />
                            <Button type="submit"
                                variant="contained"
                                color="success">
                              register
                            </Button>
                        </Grid>
                    </form>

               
            )}
        </Formik>

    </>
}