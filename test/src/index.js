import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

//Set variable

const firstBook = {
  img : "https://images-na.ssl-images-amazon.com/images/I/A1mGYasTtES._AC_UL200_SR200,200_.jpg",
  title : "The Bad Seed Presents: The Good, the Bad, and the Spooky",
  author : "Pete Oswald"
}

const secondBook = {
  img : "https://images-na.ssl-images-amazon.com/images/I/41sWAELGloL._AC_UL200_SR200,200_.jpg",
  title : "Room on the Broom",
  author : "Julia Donaldson"
}


// Nested components, React Tools
function BookList(){
  return (
    <section className='booklist'>
      <Book img ={firstBook.img} title={firstBook.title} author={firstBook.author}/>

      <Book img ={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    
    </section>
  );
}

// Book component
const Book = (props) => {
  return <article className='book'>
    <img  src={props.img} alt=""></img>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>;
}

ReactDOM.render(<BookList/>, document.getElementById('root'));

