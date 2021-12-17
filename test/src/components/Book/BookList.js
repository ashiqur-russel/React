import React from 'react'
import SpecificBook from './Book'
import { data } from './books'


const BookList = () => {
    return (
    <section className='booklist'>
        {data.map((book, index) => {
            return (<SpecificBook key={book.id} {...book}></SpecificBook>)
        })}
    </section>
    
    )
}

export default BookList
