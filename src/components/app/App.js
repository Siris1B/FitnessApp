import {Route, Routes} from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:exerciseId" element={<ExerciseDetail/>} />
        </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
