import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

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
    <img className="cen" src="https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_SX368_.jpg" alt="Check Image Link"></img>
    <h1>Little Blue Truck's Halloween</h1>
    <h4>Jill McElmurry</h4>
  </article>;
}

ReactDOM.render(<BookList/>, document.getElementById('root'));

