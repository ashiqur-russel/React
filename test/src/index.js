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
      <Book img ={firstBook.img} title={firstBook.title} author={firstBook.author}> 
      <p>Lorem ipsum dolor sit amet, aboris sint cupidatat ullamco ut ea consectetur et est culpa et
      culpa duis.</p>
      </Book>     
      
      <Book img ={secondBook.img} title={secondBook.title} author={secondBook.author}/>   
    </section>
  );
}

// Book component s
const Book = ({img,title,author,children}) => {
return ( 
    <article className='book'>
      <img  src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>);
}

ReactDOM.render(<BookList/>, document.getElementById('root'));

