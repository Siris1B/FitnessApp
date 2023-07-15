import Home from '../homepage/Home';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer'
import ExerciseDetail from '../exerciseDetail/ExerciseDetail';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar/>
        {/* <Home/> */}
        <ExerciseDetail/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
