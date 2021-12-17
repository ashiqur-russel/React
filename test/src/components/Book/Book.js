import React from 'react'
import {greeting} from '../../testing/testing'


const Book = ({ img, title, author }) => {
 // attribute, eventHandler
 // onClick, onMouseOver
const clickHandler = (e) => {
 
};

const complexExample = (author) => {
  console.log(author);
};

return (
  <article className='book'onMouseOver={() => {
    return <h1>{greeting}</h1>
  }}>

    <img src={img} alt='' />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    {/* <h5>{greeting}</h5> */}
    <button className='btn-1' type='button' onClick={clickHandler}>Add to cart</button>
    <button className='btn-2' type='button' onClick={() => complexExample(author)}> Details </button>
  </article>
 );
};

export default Book

