
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Mynavbar } from "../components/navbar/Mynavbar";
import { MynavbarWithSellerButton } from "../components/navbar/MynavbarWithSellerButton";
import { Login } from "../view/login/Login";
import { Register } from "../view/register/Register";
import { Myhome } from "../view/home/Myhome";
import { SellerUpload } from "../view/serrler-upload/SellerUpload";

export let ProjectRoutes={
    path:'/pro',
    element:<><MynavbarWithSellerButton/><br /><Outlet/></>,
    children:[
        {
            path:'login',
            element:<><Login/></>
        },
        {
            path:'register',
            element:<><Register/></>
        },
        {
            path:'home',
            element:<><Myhome/></>
        },
        {
            path:'seller-upload',
            element:<><SellerUpload/></>
        }
    ]

}