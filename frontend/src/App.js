import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroPage from './components/HeroPage';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>

    <Routes>

        {/* Login / Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroPage />
              <Footer />
            </>
          }
        />

        {/* Signup Page */}
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignUp />
              <Footer />
            </>
          }
        />

      </Routes>

    {/* <div className="App">
      <Navbar></Navbar>
      <HeroPage/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer/>
    </div> */}
    </BrowserRouter>
  );
}

export default App;
