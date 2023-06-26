import { useRoutes } from "react-router-dom"
import { ProjectRoutes } from "./ProjectRoutes"





function MyRoutesProvider(){
    return useRoutes([ProjectRoutes])
}

export default MyRoutesProvider