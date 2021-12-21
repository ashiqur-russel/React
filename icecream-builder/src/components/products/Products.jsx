import React from 'react'



const products=[
    {id:1, name:'Shoes',description:'Running shoes',price:'$5',image:'https://thumbs.dreamstime.com/z/red-shoes-13503170.jpg'},
    {id:2, name:'Macbook',description:'New Macbook M1',price:'$5', image:'https://cyberport.scene7.com/is/image/cyberport/201112124057200701900048B?$Zoom_1000$'},


]

const Products = () => {
    return(
        <main>
            {
                products.map((product)=>{
                return(
                        <div item key={product.id} xs={12} sm={6} lg={3}>
                            <Product product={product} />
                        </div>
                )
                })
            }
    </main>
)
}

export default Products
