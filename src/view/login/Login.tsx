import { Container } from "@mui/material"
import { MyLoginForm } from "../../components/form/MyLoginForm"
import { Mynavbar } from "../../components/navbar/Mynavbar"

export const Login:React.FC=()=>{
    return <>
    <Container >
    
        <MyLoginForm/>
    </Container>
    
    </>
}