import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>Hello gaurav!!</h1>
     <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title = "Trending Now!!" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
