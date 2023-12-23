import Navbar from './Navbar';
import Home from './Home';
import TambahPerahu from './TambahPerahu'
import UpdatePerahu from './UpdatePerahu';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import { getFetch } from './useFetch';

function App() {
  const [kumpulanPerahu, setDataPerahu] = useState([''])

  useEffect(() => {
      getFetch(setDataPerahu)
    }, [])


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home kumpulanPerahu={kumpulanPerahu}/>}/>
            <Route path='/tambah-perahu' element={<TambahPerahu />}/>
            <Route path='/:idPerahu' element={<UpdatePerahu />}/>
            <Route path='/idPerahu/edit' element={<UpdatePerahu />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// name, bought at, updated at, description, capacity, color, is_sailling
