import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

//Set variable

const title    = "Little Blue Truck's Halloween";
const author  = "Jill McElmurry";
const img= "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_SX368_.jpg";

// Nested components, React Tools
function BookList(){
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}


const Book = () => {
  return <article className='book'>
    <img  src={img} alt=""></img>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>;
}

ReactDOM.render(<BookList/>, document.getElementById('root'));

