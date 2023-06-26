import { Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";

export const SellerUploadForm:React.FC=()=>{
    return <>
         <Formik
            initialValues={{ product_name: '', product_prise: 0,  product_image: '' }}
            validate={values => {
                interface Ierrors {
                    email?: String
                }
                const errors: Ierrors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    // navigate('/pro/home')
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
                            <h1>seller upload</h1>
                            
                            <TextField
                                id="outlined-basic"
                                label="product name"
                                name="product_name"
                                type="text"
                                value={values.product_name}
                                variant="outlined"
                                margin="normal"
                                onChange={handleChange}
                            />
                             <TextField
                                id="outlined-basic"
                                label="product name"
                                name="product_prise"
                                type="number"
                                value={values.product_prise}
                                variant="outlined"
                                margin="normal"
                                onChange={handleChange}
                            />
                             <TextField
                                id="outlined-basic"
                                label="product name"
                                name="product_image"
                                type="file"
                                value={values.product_image}
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