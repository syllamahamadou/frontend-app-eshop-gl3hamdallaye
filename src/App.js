import Accueil from './components/Accueil';
import Footer from './components/Footer';
import Header from './components/Header';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Panier from './components/Panier'
import Details from './components/Details';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/panier' element={<Panier />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
