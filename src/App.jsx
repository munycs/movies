import './css/App.css'
import Home from './pages/Home.jsx';
import { Routes, Route} from 'react-router-dom';
import Favorite from './pages/Favorite.jsx';
import NavBar from './components/NavBar.jsx';
import { MovieProvider } from './contexts/MovieContext.jsx';


function App() {
 
  return (
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/favorite' element={<Favorite/>}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}


export default App
