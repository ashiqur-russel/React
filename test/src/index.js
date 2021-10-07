import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

// Nested components, React Tools
function BookList(){
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>;
}

const Image =()=> <img className="cen" src="https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_SX368_.jpg" alt="Check Image Link"></img>;
const Title =() => <h1>Little Blue Truck's Halloween</h1>;
const Author =() => <h4 style={{color:'#617d98',fontSize:'0.75rem', margin:'0.25rem'}}>Jill McElmurry</h4>;


ReactDOM.render(<BookList/>, document.getElementById('root'));