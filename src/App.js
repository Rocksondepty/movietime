
import './App.css';

import Moive from './components/Moive';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    <div>
    
    <BrowserRouter basename='/movietime'>
      <Navbar/>

      <Routes>
            <Route exact path="/movietime" key ="popular" element={<Moive category="popular"/>}/>
            <Route path="/top_rated"element={<Moive category="top_rated"/>}/>
            <Route path="/popular"element={<Moive category="popular"/>}/>
            <Route path="/upcoming"element={<Moive category="upcoming"/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
