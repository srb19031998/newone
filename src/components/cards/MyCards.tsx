import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

interface IMyCards{
    imge:string
}
export const MyCards:React.FC<IMyCards>=({imge})=>{
    return <>
     <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imge}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>
}