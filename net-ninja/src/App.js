
import Navbar from './components/Navbar';
//import Home from './Home';
import Tweets from './components/Tweets';
import Count from './components/Count';
import Counter from './components/Counter';

function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Counter />
        <Count />
        <Tweets />

      </div>

    </div>
  );
}

export default App;
