import { Container, Grid } from "@mui/material"
import { MyCards } from "../../components/cards/MyCards"
import { Mynavbar } from "../../components/navbar/Mynavbar"

import { AllCards } from "./AllCards"
import { MySlider } from "../../components/sliders/Myslider"

export const Myhome:React.FC=()=>{
return <>
  <Container >
  
<MySlider/>
<br />

<AllCards/>

</Container>
</>
}