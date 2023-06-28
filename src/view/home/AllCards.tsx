import { Grid } from '@mui/material'
import img1 from '../../static/images/1.jpg'
import { MyCards } from '../../components/cards/MyCards'
import { allproductsApi } from '../../api/product.api'
import { useEffect, useState } from 'react'
import { useFetch } from '../../api/useFetch'
export const AllCards:React.FC=()=>{
    let [pro,setPro]=useState<any>()

    let {data,err,loading}=useFetch('https://fakestoreapi.com/products')
useEffect(()=>{
    (async()=>{
        setPro(await allproductsApi())
    
    })()
},[])

    console.log(data)
return <>
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
{
  pro?.map((s:any)=>{
    return <MyCards imge={s.image}/>
        })
}
  
{/* <MyCards imge={img1}/>
<MyCards imge={img1}/>
<MyCards imge={img1}/>
<MyCards imge={img1}/> */}

</Grid>
</>
}