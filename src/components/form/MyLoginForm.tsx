import { Button, Grid, TextField } from "@mui/material"
import { Formik } from "formik"
import { useNavigate } from 'react-router-dom'
import { loginApi } from "../../api/login.api"
import { isEmty } from "../../util/emtyArryCheck"
export const MyLoginForm: React.FC = () => {
    return <>

        <LoginWrapper />
    </>
}



const LoginWrapper: React.FC = () => {
    let navigate = useNavigate()
    return <>
        <Formik
            initialValues={{ email: '', password: '', isseller: '' }}
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
            onSubmit={async (values, { setSubmitting }) => {
                let user = loginApi(values.email, values.password)
            
                if (isEmty(await user) == false) {
                    let data=await user
                    console.log( JSON.stringify(data[0]))
if(data != undefined){
    window.localStorage.setItem('userInfo', JSON.stringify(data[0]))
    navigate('/pro/home')
}
                        
                    

                }
            }
        }
        >
            {({ handleSubmit, handleChange, values }) => (

                <form onSubmit={handleSubmit}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <h1>Login form</h1>

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
                            login
                        </Button>
                    </Grid>
                </form>


            )}
        </Formik>

    </>
}