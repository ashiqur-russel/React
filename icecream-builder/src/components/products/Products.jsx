import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'


const products=[
    {id:1, name:'Shoes',description:'Running shoes',price:'$5',image:'https://thumbs.dreamstime.com/z/red-shoes-13503170.jpg'},
    {id:2, name:'Macbook',description:'New Macbook M1',price:'$5', image:'https://cyberport.scene7.com/is/image/cyberport/201112124057200701900048B?$Zoom_1000$'},


]

const Products = () => {
    return(
        <main>
        <Grid container justify='center' spacing={4}>
            {
                products.map((product)=>{
                return(
                        <Grid item key={product.id} xs={12} sm={6} lg={3}>
                        <Product product={product} />
                    </Grid>
                )
                })
            }
        </Grid>
    </main>
)
}

export default Products
